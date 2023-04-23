/* eslint-disable no-useless-concat */
import React, { useState } from "react";
import { Checkbox } from "@mui/material";
// import ButtonCus from "../../../components/ButtonCus";
import {
    checkConfirm,
    descItem,
    removeItem,
    ascItem,
    onClearPrevCartItem,
    onClearApplyVoucher,
} from "../../../redux/slices/cart-slice/cartSlice";
import { useDispatch } from "react-redux";
import icon from "../../../src/constants/icon";
import formatPrice from "../../../src/utils/formatPrice";
import { PopupNotification } from "../../layout/Popup"
import {
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
    Type,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
// ==== api tracking ====
import tracking from "@/api-client/trackApi"
// end
// google tag event
import style from "./cart-cpn.module.css"
import { IOrganization } from "@/interfaces/organization";
import { ICartPost } from "@/interfaces/cart";
import { useDeviceMobile } from "@/context/hooks";
import GoogleTagPush, { GoogleTagEvents } from "@/src/utils/dataLayer";
import { DISCOUNT_TYPE } from "@/context/type/discount-type";
import { ButtonLoading, ImageComponent } from "@/components/layout";
// end
interface IProps {
    cartItem: any
    org_select: IOrganization
    billInfo?: ICartPost
    setBillInfo: (billInfo: ICartPost) => void
}

function CartItem(props: IProps) {
    const { cartItem, org_select, billInfo, setBillInfo } = props;
    const [open, setOpen] = useState(false);
    const IS_MB = useDeviceMobile();
    const dispatch = useDispatch();
    const [process, setProcess] = useState(0);
    const [openRemove, setOpenRemove] = useState(false);
    const handleConfirm = () => {
        dispatch(onClearApplyVoucher())
        if (!org_select || org_select?.id === cartItem.org_id) {
            const action = checkConfirm({
                ...cartItem,
                isConfirm: !cartItem.isConfirm,
            });
            dispatch(action);
        } else {
            dispatch(onClearPrevCartItem());
            const action = checkConfirm({
                ...cartItem,
                isConfirm: !cartItem.isConfirm,
            });
            dispatch(action);
        }
        //clear branch choose
        if (cartItem.org_id !== org_select?.id) {
            setBillInfo({ ...billInfo, branch_id: undefined })
        }
    };
    const handleAscCart = () => {
        if (
            cartItem.discount &&
            cartItem.quantity === 1 &&
            cartItem.discount?.discount_type !== DISCOUNT_TYPE.FINAL_PRICE.key
        ) {
            setOpen(true);
        }
        const action = ascItem(cartItem);
        dispatch(action);
    };
    const handleDesc = () => {
        if (cartItem.quantity === 1) {
            setOpenRemove(true);
        } else {
            const action = descItem(cartItem);
            dispatch(action);
        }
    };
    const handleRemoveItemCart = () => {
        const action = removeItem(cartItem);
        dispatch(action);
        dispatch(onClearApplyVoucher())
        setOpenRemove(false)
    };
    const goBackDetail = () => {
        tracking.USER_ITEM_CLICK(cartItem.org.id, cartItem.id);
        GoogleTagPush(GoogleTagEvents.PRODUCT_CLICK);
    };
    //when quantity discount > 1
    let total = cartItem.price * cartItem.quantity;
    let cartItemPrice = cartItem?.price;
    if (cartItem?.discount?.discount_type === DISCOUNT_TYPE.FINAL_PRICE.key) {
        total = cartItem.price_discount * cartItem.quantity
        // cartItemPrice = cartItem.price_discount * cartItem.quantity
    }
    const discount_value = cartItem.discount?.discount_value;
    const price_old = cartItem.discount?.items[0]?.view_price + cartItem.discount?.discount_value
    return (
        <SwipeableList type={Type.IOS}>
            <SwipeableListItem
                className={style.cart_item_cnt}
                trailingActions={trailingActions(handleRemoveItemCart)}
                onSwipeProgress={(progress) => setProcess(progress)}
                listType={Type.IOS}
            // style={
            //     process > 15 ? { backgroundColor: "var(--bg-color)" } : {}
            // }
            >
                {cartItem?.discount && (
                    <div
                        style={
                            cartItem.isConfirm === false ? { opacity: 0.6 } : {}
                        }
                        className={style.cart_item__discount}
                    >   <ImageComponent
                            src={icon.cardDiscountWhite} alt="" layout="fixed"
                            type="ICON" width={16} height={16}
                        />
                        <span>{cartItem.discount?.coupon_code}</span>
                    </div>
                )}
                <div className={style.cart_item_left}>
                    <Checkbox
                        size="small"
                        checked={cartItem.isConfirm}
                        onChange={handleConfirm}
                    />
                    <div className={style.cart_item_left_img}>
                        <ImageComponent
                            src={cartItem.cart_item.image ? cartItem.cart_item.image_url:cartItem.org.image_url}
                            alt="" layout="responsive" type="IMG"
                            width={"100%"} height={"100%"}
                            style={{ borderRadius: "6px" }}
                        />
                    </div>
                </div>
                <div className={style.cart_item_right}>
                    <div
                        onClick={goBackDetail}
                        className={style.cart_item_right_name}
                    >
                        {cartItem.name}
                    </div>
                    <div className={style.cart_item_right_calc}>
                        <div
                            className={style.cart_item_right_calc_btn}
                        >
                            <button onClick={handleDesc}>-</button>
                            <span>{cartItem.quantity}</span>
                            <button onClick={handleAscCart}>+</button>
                        </div>
                        <div className={style.cart_item_right_price}>
                            <div
                                className={style.cart_item__price}
                            >
                                {cartItem.discount && cartItem.quantity === 1
                                    ? formatPrice(cartItem.price_discount)
                                    : formatPrice(cartItemPrice)}{" "}
                                đ
                            </div>
                            {cartItem.discount ? (
                                cartItem.quantity === 1 ? (
                                    <div
                                        className={style.cart_item__total}
                                    >
                                        {formatPrice(cartItem.price_discount)}
                                    </div>
                                ) : (
                                    <div
                                        className={style.cart_item__total_calc}
                                    >
                                        {
                                            cartItem.discount?.discount_type !== DISCOUNT_TYPE.FINAL_PRICE.key ?
                                                <>
                                                    <span>
                                                        {formatPrice(total)}
                                                    </span>
                                                    {!IS_MB && (
                                                        <span>
                                                            -{formatPrice(discount_value)}
                                                        </span>
                                                    )}
                                                    <span>
                                                        {formatPrice(total - discount_value)}
                                                    </span>
                                                </>
                                                :
                                                <span>{formatPrice(total)}</span>
                                        }
                                    </div>
                                )
                            ) : (
                                <div
                                    className={style.cart_item__total}
                                >
                                    {formatPrice(
                                        cartItem.price * cartItem.quantity
                                    )}{" "}
                                    đ
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={style.cart_item_remove}>
                    <ButtonLoading
                        icon={icon.trash}
                        iconSize={18}
                        onClick={() => setOpenRemove(true)}
                    />
                </div>
                <PopupNotification
                    open={openRemove} setOpen={setOpenRemove}
                    title="Thông báo"
                    content={`Bạn có muốn xóa "${cartItem.name}" khỏi giỏ hàng ? `}
                    children={
                        <div className={style.cart_popup_confirm_btn}>
                            <ButtonLoading
                                title="Xác nhận"
                                onClick={handleRemoveItemCart}
                            />
                            <ButtonLoading
                                title="Hủy"
                                onClick={() => setOpenRemove(false)}
                            />
                        </div>
                    }
                />
                <PopupNotification
                    open={open} setOpen={setOpen}
                    title="Thông báo"
                    content=
                    {`Giá bán này giới hạn mua tối đa chỉ 1 dịch vụ, từ dịch vụ thứ 2 giá bán sẽ thay đổi thành ${formatPrice(price_old)}đ`}
                    children={
                        <ButtonLoading
                            onClick={() => setOpen(false)}
                            title="Đã hiểu"
                        />
                    }
                />
            </SwipeableListItem>
        </SwipeableList>
    );
}

export default CartItem;

const trailingActions = (handleRemoveItemCart: any) => (
    <TrailingActions>
        <SwipeAction onClick={() => handleRemoveItemCart()}>
            {/* <div className="re-cart-swipe-btn">
                <button>
                    <img src={icon.trash} alt="" />
                </button>
            </div> */}
        </SwipeAction>
    </TrailingActions>
);
