import React, { useState } from 'react';
import { AuthLayout } from '../../components/layout';
import { NextPageWithLayout } from '../../models';
import { Container } from '@mui/system';
import Seo from "../../components/seo"
import { useSelector } from 'react-redux';
import { IStore } from '../../redux/store/store.interface';
import {
    CartInfo,
    CartPaymentMethod,
    CartGroupItem,
    CartTotal
} from "../../components/pages/cart";
import AccPageTitle from '../../components/pages/account/AccPageTitle';
import {  ButtonLoading } from "../../components/layout"
import { ICart, ICartPost, ICartByOrgId } from '../../interfaces/cart';
import { useDeviceMobile } from '../../context/hooks';
import { unique } from "../../context/functions";

import style from "./cart.module.css"
import icon from '../../src/constants/icon';


const Cart: NextPageWithLayout = () => {
    const IS_MB = useDeviceMobile();
    const { cartList } = useSelector((state: IStore) => state.CART)
    const orgs_id = unique(cartList.map((i: ICart) => i.org_id))
    const [billInfo, setBillInfo] = useState<ICartPost>()
    const org_select = cartList.filter((item: any) => item.isConfirm === true)[0]?.org;
    const CARTS: ICartByOrgId[] = orgs_id.map(id => {
        const cartItemByOrg = cartList.filter((i: ICart) => id === i.org_id);
        return {
            org_id: id,
            org: cartItemByOrg[0].org,
            org_name: cartItemByOrg[0].org_name,
            items: cartItemByOrg
        }
    })

    return (
        <>
            <Seo title='Giỏ hàng' description='Giở hàng' url='cart' />
            {IS_MB && <AccPageTitle title='Giỏ hàng' />}
            <Container>
                <div className={style.container}>
                    {
                        cartList.length > 0 ?
                            <>
                                <div className={style.cnt_left}>
                                    <div className={style.cnt_left_head}>
                                        <div className={style.cnt_left_head_name}>
                                            Dịch vụ / sản phẩm
                                        </div>
                                        <div className={style.cnt_left_head_center}>
                                            <div className={style.head_center_calc}>
                                                <span>Đơn giá</span>
                                                <span>Số lượng</span>
                                                <span>Thành tiền</span>
                                            </div>
                                            <div className={style.head_center_remove}>
                                                <ButtonLoading
                                                    icon={icon.trash}
                                                    iconSize={18}
                                                    className={style.head_center_remove_btn}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <ul className={style.cart_list_group}>
                                        {
                                            CARTS.map(item => (
                                                <li key={item.org_id} className={style.cart_list_group_item}>
                                                    <CartGroupItem
                                                        org_select={org_select}
                                                        cartList={cartList}
                                                        item={item}
                                                        billInfo={billInfo}
                                                        setBillInfo={setBillInfo}
                                                    />
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className={style.cnt_right}>
                                    <CartInfo values={billInfo} onChange={setBillInfo} />
                                    <CartPaymentMethod values={billInfo} onChange={setBillInfo} />
                                    <CartTotal
                                        org_select={org_select}
                                        bill={billInfo}
                                        setBill={setBillInfo}
                                    />
                                </div>
                            </>
                            :
                            // <div className={style.cart_null_cnt}>
                            //     <ImageComponent
                            //         src={img.resultNull}
                            //         alt="" type="ICON" layout="fixed"
                            //         width={300} height={250}
                            //     />
                            //     <h4>Không có Sản phẩm/Dịch vụ trong hàng</h4>
                            //     <ButtonLoading
                            //         title="Tiếp tục mua sắm"
                            //         onClick={() => Router.push("/")}
                            //     />
                            // </div>
                            <></>
                    }
                </div>
            </Container>
        </>
    );
}

export default Cart;
Cart.Layout = AuthLayout