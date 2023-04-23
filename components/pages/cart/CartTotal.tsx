import React, { useEffect, useState } from 'react';
import style from "./cart-cpn.module.css"
import { useDispatch, useSelector } from 'react-redux';
import Router from "next/router"
import { IOrganization } from '@/interfaces/organization';
import { ICartPost } from '@/interfaces/cart';
import { useStorage } from '@/context/hooks';
import { IStore } from '@/redux/store/store.interface';
import { cartReducer } from '@/context/functions';
import { getTotal } from '@/redux/slices/cart-slice/cartSlice';
import order from '@/api-client/orderApi';
import formatPrice from '@/src/utils/formatPrice';
import { ButtonLoading } from '@/components/layout';
import { PopupNotification } from '@/components/layout/Popup';

interface CartTotalProps {
    org_select: IOrganization
    bill?: ICartPost,
    setBill: (bill: ICartPost) => void
}

export function CartTotal(props: CartTotalProps) {
    const { bill, setBill, org_select } = props;
    const dispatch = useDispatch();
    const { setItem } = useStorage()
    const { cartList, cartAmount, cartAmountDiscount } = useSelector((state: IStore) => state.CART)
    useEffect(() => {
        dispatch(getTotal())
    }, [cartList])
    const [noti, setNoti] = useState({
        open: false,
        content: ""
    })
    const [load, setLoad] = useState(false);
    const { products_id, services_id, combos_id, carts_confirm, discounts } = cartReducer(cartList)

    let coupon_codes:any[]=[]
    if (discounts.length > 0) {
        coupon_codes = discounts.map(i => i?.coupon_code).filter(Boolean)
    }
    let totalDiscount = 0
    const totalDiscountArr = [cartAmountDiscount].filter(Boolean)
    if (totalDiscountArr.length > 0) {
        totalDiscount = totalDiscountArr.reduce((a: number, b: number) => a + b)
    }

    const checkCondition = () => {
        let condition = true
        if (products_id.length > 0 && !bill?.user_address_id) {
            condition = false
            return setNoti({
                open: true,
                content: "Vui lòng thêm địa chỉ giao hàng"
            })
        }
        if (carts_confirm.length === 0) {
            condition = false
            return setNoti({
                open: true,
                content: "Vui lòng chọn sản phẩm/dịch vụ muốn thanh toán"
            })
        }
        if (cartAmount - totalDiscount < 1000) {
            condition = false
            return setNoti({
                open: true,
                content: "Giá trị đơn hàng tối thiểu 1.0000đ"
            })
        }
        return condition
    }
    const handlePostOrder = async () => {
        const orderParams: ICartPost = {
            ...bill,
            payment_method_id:bill?.payment_method_id,
            coupon_code: coupon_codes,
            services: services_id,
            products: products_id,
            combos: combos_id
        }
        const condition = checkCondition();
        if (condition && bill) {
            setLoad(true)
            try {
                const res = await order.postOrder(org_select.id, orderParams)
                const orderState = await res.data.context;
                if (orderState.payment_gateway?.transaction_uuid &&
                    orderState.status === "PENDING") {
                    Router.push({
                        pathname: "/cart-payment",
                        query: { trans_uid: orderState.payment_gateway.transaction_uuid }
                    })
                    setItem("ORDER_STATE", JSON.stringify(orderState), "session")
                }
                setLoad(false)
            } catch (error) {
                setNoti({
                    open: true,
                    content: "Tạo đơn hàng thất bại"
                })
                setLoad(false)
            }
        }
    }

    return (
        <>
            <div className={style.total_wrapper}>
                <div className={style.total_cnt}>
                    <div className={style.total_calc_section}>
                        <span>Tạm tính</span>
                        <h4>{formatPrice(cartAmount)}đ</h4>
                    </div>
                    {
                        cartAmountDiscount &&
                        <div className={style.total_calc_section}>
                            <span>Giảm giá</span>
                            <h4>-{formatPrice(cartAmountDiscount)}đ</h4>
                        </div>
                    }
                    <div className={style.total_amount}>
                        <span>Tổng tiền</span>
                        <h2>{formatPrice(cartAmount - totalDiscount)}đ</h2>
                    </div>
                </div>
                <div className={style.total_bot}>
                    <ButtonLoading
                        title='Thanh toán'
                        onClick={handlePostOrder}
                        loading={load}
                        className={style.total_bot_btn}
                    />
                </div>
            </div>
            <PopupNotification
                open={noti.open}
                setOpen={() => setNoti({ content: "", open: false })}
                title="Thông báo"
                content={noti.content}
                children={
                    <ButtonLoading
                        title='Đã hiểu'
                        onClick={() => setNoti({ content: "", open: false })}
                    />
                }
            />
        </>
    );
}