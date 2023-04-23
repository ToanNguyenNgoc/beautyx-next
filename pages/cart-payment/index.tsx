import Router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
    useStorage,
    useSwr,
    useCountDown,
    useDeviceMobile,
    usePlatform
} from "../../context/hooks";
import { ORDER_STATUS } from "../../context/type"
import { ButtonLoading, ImageComponent } from "../../components/layout";
import { directUrlApp } from "../../context/direct-url"
import { PopupNotification } from "../../components/layout/Popup"
import { CartInfo } from "../../components/pages/cart"
import Seo from "../../components/seo";
import formatPrice from '../../src/utils/formatPrice';
import PLAT_FORM_TYPE from "../../context/type/platform-type"

import style from "./cart-payment.module.css";
import img from "../../src/constants/img";
import icon from '../../src/constants/icon';
import { Container } from '@mui/system';

interface StatusOrderProps {
    cancel: boolean,
    time_refresh: any
}

function CartPayment() {
    const { query } = useRouter();
    const IS_MB = useDeviceMobile()
    const { getItem } = useStorage();
    const { PLAT_FORM } = usePlatform()
    const { sec, minu_sec } = useCountDown(600)
    const [statusOrder, setStatusOrder] = useState<StatusOrderProps>({
        cancel: false,
        time_refresh: 2000
    })

    const { response } = useSwr(
        `/paymentgateways/${query.trans_uid}/status`,
        query.trans_uid,
        { cancel: statusOrder.cancel },
        statusOrder.time_refresh
    )
    let ORDER_STATE: any
    if (getItem("ORDER_STATE", "session")) {
        ORDER_STATE = JSON.parse(getItem("ORDER_STATE", "session"))
    }

    const handleCancelCallStatus = () => {
        setStatusOrder({
            cancel: true,
            time_refresh: false
        })
    }
    useEffect(() => {
        if (!ORDER_STATE) Router.push("/error")
        if (response && response?.status !== "PENDING") {
            setStatusOrder({
                ...statusOrder,
                time_refresh: false
            })
        }
        if (response?.status === "PAID") {
            //handle after payment paid
        }
        if (sec === 0) {
            handleCancelCallStatus()
        }
    }, [response?.status, sec])
    const onGoBack = () => {
        handleCancelCallStatus()
        Router.back()
    }
    const servicesPayment = ORDER_STATE?.items?.filter((i: any) => i.productable_type === "App\\Models\\CI\\Service")

    // const handle payment with mini app
    const isBrowser: boolean = ((): boolean => typeof window !== 'undefined')();
    const handlePaymentBeautyWeb = () => {
        if (response?.extra_data?.deeplink && isBrowser) {
            const newWindow = window.open(`${response?.extra_data?.deeplink}`, '_blank', 'noopener,noreferrer');
            if (newWindow) newWindow.opener = null
        }
    }
    const handlePaymentMomo = () => {
        if (response?.extra_data?.deeplink && isBrowser) {
            window.location.assign(response?.extra_data?.deeplink);
        }
    }
    const handlePaymentTiki = () => {

    }

    const handlePaymentMbBank = () => {

    }

    const onPaymentClick = () => {
        switch (PLAT_FORM) {
            case PLAT_FORM_TYPE.BEAUTYX:
                return handlePaymentMomo()
            case PLAT_FORM_TYPE.MOMO:
                return handlePaymentMomo()
            case PLAT_FORM_TYPE.TIKI:
                return handlePaymentTiki()
            case PLAT_FORM_TYPE.MB:
                return handlePaymentMbBank()
            default:
                handlePaymentBeautyWeb()
                break
        }
    }


    return (
        <>
            <Seo
                title='Thanh toán đơn hàng'
                description='Thanh toán đơn hàng'
                url='cart-payment'
            />
            <div className={style.payment_header}>
                <Container>
                    <ButtonLoading
                        icon={icon.chevronLeft}
                        title={IS_MB ? "" : "Trở lại"}
                        iconSize={20}
                        className={style.payment_header_back}
                        onClick={onGoBack}
                    />
                    {
                        !IS_MB &&
                        <ImageComponent
                            src={img.beautyX} alt="" layout="fixed"
                            width={200} height={50} type="ICON"
                        />
                    }
                    <h4>Thanh toán đơn hàng</h4>
                </Container>
            </div>
            <Container>
                <div className={style.payment_body}>
                    <div className={style.payment_body_left}>
                        <div className={style.payment_body_guide}>
                            <span className={style.payment_title}>
                                Thực hiện theo hướng dẫn sau để thanh toán:
                            </span>
                            <ul className={style.payment_body_guide_step}>
                                <li className={style.guide_step_item}>
                                    <span>Bước 1:</span> Mở ứng dụng <span>MoMo</span> để thanh toán
                                </li>
                                <li className={style.guide_step_item}>
                                    <span>Bước 2:</span> Chọn <span>"Thanh Toán"</span> và quét mã QR tại hướng dẫn này
                                </li>
                                <li className={style.guide_step_item}>
                                    <span>Bước 3:</span> Hoàn thành các bước thanh toán theo hướng dẫn và đợi <span>BeautyX</span> xử lý trong giây lát
                                </li>
                            </ul>
                            <div className={style.payment_body_left_status}>
                                <div className={style.payment_status_cnt}>
                                    Trạng thái đơn hàng
                                    <CartPayStatus status={response?.status} />
                                </div>
                                {
                                    response?.status === "PENDING" &&
                                    <div className={style.payment_status_count_down}>
                                        Đơn hàng sẽ bị hủy sau : <h4>{minu_sec}</h4>
                                    </div>
                                }
                            </div>
                            <div className={style.payment_body_left_qr}>
                                {
                                    response?.status === "PENDING" &&
                                    response?.extra_data?.payUrl &&
                                    <iframe
                                        className={style.payment_qr}
                                        src={`${response?.extra_data?.payUrl}`}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                    <div className={style.payment_body_right}>
                        <CartInfo hideEdit={true} />
                        {
                            ORDER_STATE &&
                            <>
                                <div className={style.payment_body_right_org}>
                                    <span className={style.payment_title}>
                                        Cửa hàng thanh toán
                                    </span>
                                    <div className={style.org}>
                                        <ImageComponent
                                            src={ORDER_STATE.organization.image_url} alt=""
                                            width={56} height={56} layout="fixed" type="IMG"
                                            style={{ borderRadius: "100%" }}
                                        />
                                        <div className={style.org_detail}>
                                            <span className={style.org_name}>
                                                {ORDER_STATE.organization.name}
                                            </span>
                                            <span className={style.org_address}>
                                                {
                                                    ORDER_STATE.branch ?
                                                        ORDER_STATE.branch.full_address :
                                                        ORDER_STATE.organization.full_address
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <ul className={style.cart_payment_list}>
                                    {
                                        ORDER_STATE.order_items.map((i: any, index: number) => (
                                            <li key={index}>
                                                <CartPayItem
                                                    org_id={ORDER_STATE.organization_id}
                                                    item={i}
                                                />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </>
                        }
                    </div>
                </div>
            </Container>
            <div className={style.cart_payment_bottom}>
                <Container>
                    <div className={style.cart_payment_bottom_price}>
                        Tổng thanh toán
                        <h1>
                            {formatPrice(ORDER_STATE?.payment_gateway?.amount)}đ
                        </h1>
                    </div>
                    <div className={style.cart_payment_bottom_btn}>
                        <ButtonLoading
                            title='Thanh toán'
                            onClick={onPaymentClick}
                        />
                    </div>
                </Container>
            </div>
            {/* render notification */}
            {
                response?.status === "PAID" &&
                <PopupNotification
                    open={true}
                    title="Thông báo"
                    content='Thanh toán thành công !'
                    children={<div className={style.notification_btn}>
                        {
                            servicesPayment.length > 0 &&
                            <ButtonLoading
                                onClick={() => Router.replace(directUrlApp("service"))}
                                title='Đặt hẹn ngay'
                            />
                        }
                        <ButtonLoading
                            onClick={() => Router.replace("/")}
                            title='Tiếp tục mua sắm'
                        />
                    </div>}
                />
            }
            {
                (response?.status === "CANCEL" || response?.status === "CANCELED_BY_USER") &&
                <PopupNotification
                    open={true}
                    title="Thông báo"
                    content={`Thanh toán thất bại! Bạn có muốn tiếp tục thanh toán không ?`}
                    children={<div className={style.notification_btn}>
                        <ButtonLoading
                            onClick={() => Router.replace("/cart")}
                            title='Tiếp tục'
                        />
                        <ButtonLoading
                            title='Tiếp tục mua sắm'
                            onClick={() => Router.replace("/")}
                        />
                    </div>}
                />
            }
        </>
    );
}

export default CartPayment;

const CartPayStatus = ({ status }: { status: string }) => {
    const STATUS = ORDER_STATUS.find(i => i.key === status)
    return (
        <>
            {
                STATUS &&
                <span style={{ backgroundColor: STATUS.color }}>
                    {STATUS.text}
                </span>
            }
        </>
    )
}
const CartPayItem = ({ item, org_id }: { item: any, org_id: number }) => {
    let API_URL: string = ""
    if (item.productable_type === "App\\Models\\CI\\Service") API_URL = `/organizations/${org_id}/services/${item.productable_id}`
    if (item.productable_type === "App\\Models\\CI\\Product") API_URL = `/organizations/${org_id}/products/${item.productable_id}`
    if (item.productable_type === "App\\Models\\CI\\Combo") API_URL = `/organizations/${org_id}/combos/${item.productable_id}`
    let condition = false;
    if (item && org_id) condition = true;

    const { response } = useSwr(API_URL, condition)

    return (
        <div className={style.cart_payment_item}>
            <ImageComponent
                src={response?.image_url} alt="" layout="fixed"
                width={64} height={64} type="IMG"
                style={{ borderRadius: "6px" }}
            />
            <div className={style.cart_payment_item_de}>
                <span className={style.item_name}>
                    {response?.service_name ?? response?.product_name ?? response?.name}
                </span>
                <div className={style.item_price}>
                    <span>{formatPrice(item?.base_price)}đ</span>
                    x {item?.quantity}
                </div>
            </div>
        </div>
    )
}