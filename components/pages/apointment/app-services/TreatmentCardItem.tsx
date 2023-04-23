import React, { useState } from 'react';
import moment from "moment"
import { useRouter } from "next/router"
import { Checkbox } from "@mui/material"
import style from "./app-service.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { IServiceUser, IUser_Items, IUser_Service } from '@/interfaces/servicesUser';
import { IStore } from '@/redux/store/store.interface';
import { ButtonLoading, ImageComponent } from '@/components/layout';
import { IOrganization } from '@/interfaces/organization';
import { onClearSelect, onSelectService } from '@/redux/slices/auth-slice/booking-slice';
import icon from '@/src/constants/icon';


interface TreatmentCardItemProps {
    card_items: IServiceUser,
}
const date = new Date

function TreatmentCardItem(props: TreatmentCardItemProps) {
    const { card_items } = props;
    const router = useRouter();
    const { services, order } = useSelector((state: IStore) => state.BOOKING)
    const org = card_items.organization;
    const handleNextStep = () => {
        if (order && services.length > 0) router.push("/booking")
    }
    return (
        <div className={style.treat_card_cnt}>
            {
                order?.id === card_items.id &&
                <ButtonLoading
                    className={style.treat_card_btn}
                    title="Đặt hẹn ngay"
                    icon={icon.calendarWhite}
                    iconSize={10}
                    onClick={handleNextStep}
                />
            }
            <div className={style.treat_card_head}>
                <div className={style.treat_card_head_org}>
                    <ImageComponent
                        src={org?.image_url} type="IMG" layout="fixed"
                        width={34} height={34} alt=""
                        style={{ borderRadius: "100%" }}
                    />
                    <span>{org?.name}</span>
                </div>
                <div className={style.treat_card_head_at}>
                    <span>
                        Ngày tạo: <h4>{moment(card_items.created_at).format("DD/MM/YYYY HH:mm ")}</h4>
                    </span>
                    <span>
                        Mã đơn: <h4>lXUuqX</h4>
                        <button>
                            Mã QR
                        </button>
                    </span>
                </div>
            </div>
            <div className={style.treat_body}>
                <ul className={style.treat_body_items_list}>
                    {
                        card_items?.items?.map((item: IUser_Items, index: number) => (
                            <li key={index} className={style.treat_body_items_cnt}>
                                <ul className={style.services_sold_list}>
                                    {
                                        item?.services_sold?.services?.map((service: IUser_Service, i: number) => (
                                            <ServiceItem
                                                key={i}
                                                service={service}
                                                org={org}
                                                card_items={card_items}
                                            />
                                        ))
                                    }
                                </ul>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default TreatmentCardItem;

interface ServiceItemProps {
    service: IUser_Service,
    org: IOrganization,
    card_items: IServiceUser
}

const ServiceItem = (props: ServiceItemProps) => {
    const { order, services } = useSelector((state: IStore) => state.BOOKING)
    const { service, org, card_items } = props;
    const dispatch = useDispatch();
    const todayNum = parseInt(moment(date).format("YYYYMMDD"))
    const dateExNum = parseInt(moment(service?.time_expired).format("YYYYMMDD"))

    const checkCondition = () => {
        let condition_ex = true
        let condition_ti = true
        let condition = true
        if (service?.remain_time === 0) condition_ti = false
        if (dateExNum < todayNum) condition_ex = false
        if (!condition_ex || !condition_ti) condition = false
        return { condition_ex, condition_ti, condition }
    }
    const { condition_ex, condition_ti, condition } = checkCondition()

    const handleSelectService = () => {
        if (!order || order.id === card_items.id) {
            return dispatch(onSelectService({
                service: service,
                order: card_items
            }))
        }
        if (!order || order.id !== card_items.id) {
            dispatch(onClearSelect())
            dispatch(onSelectService({
                service: service,
                order: card_items
            }))
        }
    }

    const onServiceSelect = () => {
        if (condition) {
            handleSelectService()
        }
    }
    const service_book_id = services.map((i: IUser_Service) => i.id)

    return (
        <li
            onClick={onServiceSelect}
            className={style.service_item_cnt}
        >
            <div
                style={condition ? {} : { opacity: "0.4" }}
                className={style.service_item_left}
            >
                <Checkbox
                    checked={
                        (service_book_id.includes(service.id) && order?.id === card_items.id) ?
                            true : false}
                />
                <div className={style.service_item_img}>
                    <ImageComponent
                        src={service?.image ? service?.image_url : org?.image_url}
                        alt="" type="IMG" layout="responsive"
                        width={"100%"} height={"100%"}
                        style={{ borderRadius: "4px" }}
                    />
                </div>
            </div>
            <div className={style.service_item_right}>
                <div
                    style={condition ? {} : { opacity: "0.4" }}
                    className={style.service_detail}
                >
                    <span>{service?.service_name}</span>
                    <span>{service?.description}</span>
                </div>
                <div className={style.service_time}>
                    {
                        service?.time_expired &&
                        <span
                            style={condition_ex ? {} : {
                                color: "var(--bg-white)",
                                backgroundColor: "var(--red-cl)"
                            }}
                            className={style.service_time_ex}
                        >
                            {!condition_ex && "Đã"} hết hạn :
                            {moment(service.time_expired).format("DD/MM/YYYY")}
                        </span>
                    }
                    {
                        service?.remain_time === 0 ?
                            <span
                                className={`${style.service_time_qua} ${style.service_time_qua_used}`}
                            >
                                Sử dụng
                                <h4>
                                    {service.times - service.remain_time}/{service.times}
                                </h4>
                                <h4>|Đánh giá dv</h4>
                            </span>
                            :
                            <span className={style.service_time_qua}>
                                Sử dụng
                                <h4>
                                    {service.times - service.remain_time}/{service.times}
                                </h4>
                            </span>
                    }
                </div>
            </div>
        </li>
    )
}