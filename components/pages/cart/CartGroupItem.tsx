/* eslint-disable no-useless-concat */
import { Checkbox, Dialog } from "@mui/material";
import React, { useState } from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import style from "./cart-cpn.module.css"
import Router, { useRouter } from "next/router";
import { ICart, ICartByOrgId, ICartPost } from "@/interfaces/cart";
import { IOrganization } from "@/interfaces/organization";

import {
    ButtonLoading,
    ImageComponent
} from "@/components/layout";
import { directUrlOrg } from "@/context/direct-url";
import { IBranch } from "@/interfaces/branch";
import icon from "@/src/constants/icon";
import {
    IDiscountPar,
    IITEMS_DISCOUNT
} from "@/interfaces/discount";
import { useDeviceMobile } from "@/context/hooks";
import {
    EX_CHECK_DATE,
    EX_CHECK_INCLUDE_ITEMS,
    EX_CHECK_SUB_TOTAL
} from "@/src/utils/cart/checkConditionVoucher";
import { DISCOUNT_TYPE } from "@/context/type/discount-type";
import onErrorImg from "@/src/utils/errorImg";
import img from "@/src/constants/img";
import { EX_DISCOUNT_TYPE } from "@/context/functions/discount";
import formatPrice from "@/src/utils/formatPrice";
import moment from "moment";
import {
    onClearApplyVoucher,
    onClearPrevCartItem,
    checkConfirm,
    onCancelApplyVoucher,
    onApplyVoucherSubTotal
} from "@/redux/slices/cart-slice/cartSlice";

interface CartGroupItemProps {
    item: ICartByOrgId,
    org_select: IOrganization,
    cartList: ICart[],
    billInfo?: ICartPost,
    setBillInfo: (billInfo: ICartPost) => void
}

export function CartGroupItem(props: CartGroupItemProps) {
    const { locale } = useRouter()
    const {
        item,
        org_select,
        cartList,
        billInfo,
        setBillInfo
    } = props;
    const itemOrgId = item.org_id;
    const [openBranch, setOpenBranch] = useState(false);
    // const { VOUCHER_CART } = useSelector((state: any) => state.carts);
    // const vouchers = IS_VOUCHER(VOUCHER_CART.vouchers)
    const cartListOrg = cartList.filter((i: any) => i.org_id === org_select?.id);
    const cartListCheck: ICart[] = cartList.filter((i: any) => i.isConfirm === true);
    let isCheck = false;
    if (
        org_select?.id === item.org_id &&
        cartListCheck.length === cartListOrg.length
    ) {
        isCheck = true;
    }

    const dispatch = useDispatch();

    const onChooseCartItemOrg = () => {
        dispatch(onClearPrevCartItem());
        dispatch(onClearApplyVoucher());
        if (isCheck === false) {
            for (var itemCart of item.items) {
                const action = checkConfirm({ ...itemCart, isConfirm: true });
                dispatch(action);
            }
        }
        //clear branch_id
        if (org_select?.id !== item.org_id) {
            setBillInfo({ ...billInfo, branch_id: undefined })
        }
    };
    const servicesCartListCheckByOrg: ICart[] = cartListCheck.filter((i) => i.is_type === "SERVICE")

    return (
        <div className={style.cart_group_item_cnt}>
            <div className={style.cart_group_item_head_cnt}>
                <div className={style.cart_group_item_head}>
                    <Checkbox
                        size="small"
                        sx={{
                            color: "#7161BA",
                            "&.Mui-checked": {
                                color: "#7161BA",
                            },
                            marginLeft: "-10px",
                        }}
                        checked={isCheck ? true : false}
                        onClick={onChooseCartItemOrg}
                    />
                    <ImageComponent
                        src={item?.org?.image_url} alt=""
                        layout="fixed" type="IMG" width={26} height={26}
                        style={{ borderRadius: "100%" }}
                    />
                    <span
                        onClick={() => Router.push(directUrlOrg(item.org.subdomain, locale))}
                    >{item.org_name}</span>
                    {
                        org_select?.id === item.org_id &&
                        org_select?.branches?.length > 0 &&
                        servicesCartListCheckByOrg.length > 0 &&
                        <>
                            <ButtonLoading
                                title="Chọn chi nhánh"
                                onClick={() => setOpenBranch(true)}
                            />
                            <Dialog
                                open={openBranch} onClose={() => setOpenBranch(false)}
                            >
                                <ul className={style.org_select_branches}>
                                    {
                                        org_select.branches?.map((i: IBranch) => (
                                            <li
                                                onClick={() => setBillInfo({ ...billInfo, branch_id: i.id })}
                                                key={i.id} className={style.branch_list_item}
                                            >
                                                {
                                                    billInfo?.branch_id === i.id &&
                                                    <span className={style.branch_item_ac}>Đã chọn</span>
                                                }
                                                <ImageComponent
                                                    src={i.image ? i.image_url : item.org.image_url}
                                                    type="IMG" alt="" layout="fixed" width={42} height={42}
                                                    style={{ borderRadius: "100%" }}
                                                />
                                                <div className={style.branch_item_detail}>
                                                    <span className={style.branch_item_name}>
                                                        {i.name}
                                                    </span>
                                                    <span className={style.branch_item_address}>
                                                        {i.full_address}
                                                    </span>
                                                    <span className={style.branch_item_phone}>
                                                        {i.telephone}
                                                    </span>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </Dialog>
                        </>
                    }
                </div>
                <div className={style.cart_group_item_address}>
                    <ImageComponent
                        src={icon.pinMapRed} alt="" layout="fixed"
                        width={12} height={12} type="ICON"
                    />
                    <span>
                        {
                            item.org?.branches?.find(
                                (i: IBranch) => i.id === billInfo?.branch_id && org_select?.id === item.org.id
                            )?.full_address ??
                            item.org?.full_address
                        }
                    </span>
                </div>
            </div>


            {/* {vouchers.length > 0 &&
                VOUCHER_CART.org_id === itemOrgId && (
                    <div className="cart-item-voucher">
                        <span
                            onClick={() => setOpen(true)}
                            className="flex-row title"
                        >
                            Mã khuyến mại
                            <img src={icon.cardDiscountOrange} alt="" />
                        </span>
                        <PopUpVoucherOrg
                            org={org}
                            open={open}
                            setOpen={setOpen}
                            vouchers={vouchers}
                        />
                    </div>
                )} */}
            <div className={style.cart_group_item_body}>
                {item.items.map((cart: any, i: number) => (
                    <div key={i}>
                        <CartItem
                            cartItem={cart}
                            org_select={org_select}
                            billInfo={billInfo}
                            setBillInfo={setBillInfo}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}


interface IPopUpVoucherOrg {
    org: IOrganization;
    open: boolean;
    setOpen: (open: boolean) => void;
    vouchers: IDiscountPar[];
}

export const PopUpVoucherOrg = (props: IPopUpVoucherOrg) => {
    const IS_MB = useDeviceMobile();
    const { open, setOpen, org, vouchers } = props;
    return (
        <Dialog
            fullScreen={IS_MB ? true : false}
            open={open}
            onClose={() => setOpen(false)}
        >
            <div className="cart-item-pop-voucher">
                <div className="flex-row-sp">
                    <span className="title">{org?.name} khuyến mại</span>

                    <img
                        className="cursor-pointer"
                        onClick={() => setOpen(false)}
                        src={icon.closeCircle}
                        alt=""
                    />
                </div>
                <div className="cart-vouchers-list">
                    <span className="cart-vouchers-list__title">
                        Danh sách mã ưu đãi
                    </span>
                    <ul className="list">
                        {vouchers.map((item: IDiscountPar, index: number) => (
                            <li key={index} className="item">
                                <VoucherOrgItem org={org} voucher={item} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Dialog>
    );
};
const VoucherOrgItem = (props: any) => {
    const { org } = props;
    const voucher: IDiscountPar = {
        ...props.voucher,
        // discount_type:"PRODUCT",
        // discount_value:500,
        // items:[],
        // items_count:0,
        // minimum_order_value: null,
        // valid_from: "2022-01-01 10:00:00",
        // valid_util: "2022-10-01 10:00:00"
    };
    const listItemName = voucher.items
        .filter((i: IITEMS_DISCOUNT) => i.organization?.id === org?.id)
        .map((i: IITEMS_DISCOUNT) =>
            i.productable?.service_name || i?.productable.product_name
        )
    const dispatch = useDispatch();
    const { cartAmount, cartList, VOUCHER_APPLY } = useSelector(
        (state: any) => state.carts
    );
    const active = VOUCHER_APPLY.map((i: IDiscountPar) => i.id).includes(voucher.id)
    const cartCheck = cartList.filter((item: any) => item.isConfirm === true);
    const subTotalCondition = EX_CHECK_SUB_TOTAL(cartAmount, voucher);
    const dateCondition = EX_CHECK_DATE(voucher);
    const itemsCondition = EX_CHECK_INCLUDE_ITEMS(voucher, cartCheck);

    let applyCondition = false;
    if (
        voucher.discount_type === DISCOUNT_TYPE.SUB_TOTAL.key &&
        subTotalCondition &&
        dateCondition &&
        itemsCondition
    ) {
        applyCondition = true;
    }
    if (
        voucher.discount_type === DISCOUNT_TYPE.PRODUCT.key
    ) {
        applyCondition = true
    }
    // console.log(applyCondition)

    const handleApplyVoucher = () => {
        if (active) {
            dispatch(onCancelApplyVoucher(voucher.id))
        } else {
            if (applyCondition && cartAmount > 0) {
                dispatch(onApplyVoucherSubTotal(voucher));
            }
        }
    };

    // console.log("date", dateCondition)
    // console.log("total", subTotalCondition)
    // console.log("itemsCondition", itemsCondition)
    return (
        <div
            style={
                active === true
                    ? {
                        backgroundColor: "#ffe3d2",
                        border: "1px solid var(--red-cl)",
                    }
                    : {}
            }
            className="cart-vouchers-list__item"
        >
            <div
                style={
                    active === true
                        ? { borderRight: "dashed 1px var(--red-cl)" }
                        : {}
                }
                className="cart-vouchers-list__item-left"
            >
                <div className="item-left__img">
                    <img
                        onError={(e) => onErrorImg(e)}
                        src={org?.image_url ? org?.image_url : img.imgDefault}
                        alt=""
                    />
                </div>
                <div className="item-left__name">
                    <span>{org?.name}</span>
                </div>
            </div>
            <div className="cart-vouchers-list__item-right">
                <div className="item-right__top">
                    <span className="item-right__name">
                        {EX_DISCOUNT_TYPE(voucher)}
                    </span>
                    {
                        voucher?.minimum_order_value &&
                        <span className="item-right__desc">
                            Cho đơn hàng từ {formatPrice(voucher.minimum_order_value)}đ
                        </span>
                    }
                    {
                        listItemName.length > 0 ?
                            <span className="item-right__desc">
                                Áp dụng cho các dịch vụ, sản phẩm : <span
                                    style={{ fontWeight: "bold" }}
                                >
                                    {listItemName.join(",")}
                                </span>
                            </span>
                            :
                            <span className="item-right__desc">
                                Áp dụng tất cả sản phẩm, dịch vụ
                            </span>
                    }
                </div>
                <div className="item-right__bottom">
                    {
                        (voucher.valid_from || voucher.valid_util) ?
                            <span className="item-right__expired">
                                Áp dụng: {voucher.valid_from && moment(voucher.valid_from).format("DD/MM/YYYY")} -
                                {voucher.valid_util && moment(voucher.valid_util).format("DD/MM/YYYY")}
                            </span>
                            :
                            <span className="item-right__expired"></span>
                    }
                    {
                        applyCondition === true ?
                            <div
                                onClick={() => handleApplyVoucher()}
                                className="item-right__btn"
                            >
                                <span>{
                                    active
                                        ?
                                        "Bỏ chọn" : "Áp dụng"
                                }</span>
                            </div>
                            :
                            <img src={icon.noApply} alt="" />
                    }
                </div>
            </div>
            {/* {voucher.title}<br />
            <span>
                {voucher.discount_type}<br />
                {voucher.discount_unit}<br />
                {voucher.discount_value}<br />
                max_dis:{voucher.maximum_discount_value}<br />
                min-order:{voucher.minimum_order_value}<br />
            </span>
            <button
                onClick={handleApplyVoucher}
            >
                Áp dụng mã
            </button> */}
        </div>
    );
};
