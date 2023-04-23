import React, { useEffect, useState } from 'react';
import { NextPageWithLayout } from '../../models';
import {
    AuthLayout,
    ImageComponent,
    ButtonLoading,
    DatePicker,
    TimePicker,
    ButtonBack,
    MapOrgChange
} from '../../components/layout';
import Seo from '../../components/seo';
import { useSelector } from 'react-redux';
import { IStore } from '../../redux/store/store.interface';
import { useRouter } from 'next/router';
import { IServicePostApp } from '../../interfaces/servicesUser';
import { PopupNotification } from "../../components/layout/Popup";
import { useSwr, useDeviceMobile } from '../../context/hooks';
import { IOrganization } from '../../interfaces';
import { IBranch } from '../../interfaces/branch';
import apointmentApi from '../../api-client/apointmentApi';
import { directUrlApp } from "../../context/direct-url"

import style from "./booking.module.css"
import { Container } from '@mui/material';
import dayjs from 'dayjs';

const Booking: NextPageWithLayout = () => {
    const router = useRouter();
    const IS_MB = useDeviceMobile();
    const { order, services } = useSelector((state: IStore) => state.BOOKING)
    const [openBranch, setOpenBranch] = useState(false)
    const [openTime, setOpenTime] = useState(false)
    const [openNoti, setOpenNoti] = useState({
        open: false,
        content: "",
        children: <></>
    })
    const [load, setLoad] = useState(false);
    useEffect(() => {
        if (!order) router.back()
    }, [])
    const org_id = order?.organization_id
    const org: IOrganization = useSwr(`/organizations/${org_id}`, org_id).response
    const services_book = services

    const [dataBook, setDataBook] = useState<IServicePostApp>({
        service_ids: services_book.map((i: any) => i.id),
        order_id: order?.id,
        time_start: "",
        time: "",
        date: dayjs().format("YYYY-MM-DD"),
        note: "",
        branch_id: order?.branch?.id
    })
    const paramsOb = {
        time_start: `${dataBook.date} ${dataBook.time}:00`,
        service_ids: services_book.map((i: any) => i.id),
        order_id: order?.id,
        note: dataBook.note,
        branch_id: dataBook.branch_id
    }
    const onChangBranch = (branch: IBranch | null) => {
        setDataBook({
            ...dataBook,
            branch_id: branch?.id
        })
        setOpenBranch(false)
    }
    const onChangeByMap = (card_map: any) => {
        if (card_map.id === org.id) {
            onChangBranch(null)
        } else {
            onChangBranch(card_map)
        }
    }

    const checkConditionPostApp = () => {
        let condition = true
        if (dataBook.date === "" || dataBook.time === "") {
            condition = false
            setOpenNoti({
                open: true,
                content: "Vui lòng chọn thời gian đặt hẹn",
                children: <></>
            })
        }
        return condition
    }
    const handlePostAppointment = async () => {
        const condition = checkConditionPostApp()
        if (condition && org.id) {
            setLoad(true)
            try {
                await apointmentApi.postAppointment(paramsOb, org.id)
                setLoad(false)
                setOpenNoti({
                    open: true,
                    content: "Đặt hẹn thành công",
                    children: <div className={style.noti_bot}>
                        <ButtonLoading
                            title="Xem lịch hẹn"
                            onClick={() => router.push(directUrlApp("calendar"))}
                        />
                        <ButtonLoading
                            title="Về tranh chủ"
                            onClick={() => router.push("/")}
                        />
                    </div>
                })
            } catch (error) {
                setLoad(false)
                setOpenNoti({
                    open: true,
                    content: "Đặt hẹn thất bại !",
                    children: <></>
                })
            }
        }
    }



    return (
        <>
            <Seo
                title='Đặt hẹn - BeautyX'
                description='Đặt hẹn'
                url=''
            />
            <Container>
                <div className={style.container}>
                    <div className={style.left_cnt}>
                        {org && <MapOrgChange onChangeCard={onChangeByMap} org={org} />}
                    </div>
                    <div className={style.right_cnt}>
                        {org && <OrgBook org={org} />}
                        {services_book.length > 0 && <ServiceBook services_book={services_book} />}
                        <div className={style.right_address}>
                            <div className={style.right_section_head}>
                                <span className={style.section_title}>Địa điểm đặt hẹn</span>
                                {
                                    org?.branches?.length > 0 &&
                                    <ButtonLoading
                                        onClick={() => setOpenBranch(true)}
                                        title="Thay đổi"
                                        className={style.section_head_btn}
                                    />
                                }
                                <PopupNotification
                                    open={openBranch}
                                    setOpen={setOpenBranch}
                                    title="Chọn địa điểm"
                                    children={
                                        <ul className={style.list_branch}>
                                            <li
                                                onClick={() => onChangBranch(null)}
                                                className={style.list_branch_item}
                                            >
                                                {!dataBook.branch_id && <h5>Đã chọn</h5>}
                                                <h4>{org?.name}</h4>
                                                <span>{org?.full_address}</span>
                                            </li>
                                            {
                                                org?.branches?.map((i: IBranch) => (
                                                    <li
                                                        onClick={() => onChangBranch(i)}
                                                        key={i.id} className={style.list_branch_item}
                                                    >
                                                        {dataBook.branch_id === i.id && <h5>Đã chọn</h5>}
                                                        <h4>{i.name}</h4>
                                                        <span>{i.full_address}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    }
                                />
                            </div>
                            <span className={style.booking_address}>
                                {org?.branches?.find((i: IBranch) => i.id === dataBook.branch_id)?.full_address
                                    ??
                                    org?.full_address}
                            </span>
                        </div>
                        <div className={style.right_address}>
                            <div className={style.right_section_head}>
                                <span className={style.section_title}>Thời gian</span>
                                <ButtonLoading
                                    className={style.section_head_btn}
                                    title="Thay đổi"
                                    onClick={() => setOpenTime(true)}
                                />
                            </div>
                            <span className={style.booking_address}>
                                {dataBook.date} -
                                {dataBook.time === "" ? "Chọn giờ " : dataBook.time}
                            </span>
                            <PopupNotification
                                open={openTime} setOpen={setOpenTime}
                                title="Chọn thời gian"
                                fullScreen={IS_MB}
                                children={<TimeBook
                                    dataBook={dataBook} setDataBook={setDataBook}
                                    setOpenTime={setOpenTime}
                                    org={org}
                                />}
                            />
                        </div>
                        <div className={style.right_address}>
                            <div className={style.right_section_head}>
                                <span className={style.section_title}>Ghi chú</span>
                            </div>
                            <textarea
                                onChange={(e) => setDataBook({ ...dataBook, note: e.target.value })}
                                className={style.booking_note} placeholder="Ghi chú..." rows={4}
                            />
                        </div>
                        <div className={style.right_bottom}>
                            <ButtonLoading
                                className={style.right_bottom_btn}
                                title='Đặt hẹn ngay'
                                onClick={handlePostAppointment}
                                loading={load}
                            />
                        </div>
                    </div>
                </div>
            </Container>
            {/* render notification */}
            <PopupNotification
                title='Thông báo'
                open={openNoti.open}
                setOpen={() => setOpenNoti({ children: <></>, content: "", open: false })}
                content={openNoti.content}
                children={openNoti.children}
            />
        </>
    );
}
Booking.Layout = AuthLayout

const OrgBook = ({ org }: { org: IOrganization }) => {
    return (
        <div className={style.right_org}>
            <div className={style.org_img}>
                <ImageComponent
                    src={org.image_url} alt="" type="IMG" layout="responsive"
                    width={"100%"} height={"100%"} style={{ borderRadius: "100%" }}
                />
            </div>
            <div className={style.org_detail}>
                <span className={style.org_name}>{org.name}</span>
                <span className={style.org_address}>{org.full_address}</span>
            </div>
        </div>
    )
}
const ServiceBook = ({ services_book }: { services_book: any[] }) => {
    return (
        <div className={style.right_services_cnt}>
            <ul className={style.services_list}>
                {
                    services_book.map((i: any, index: number) => (
                        <li key={index} className={style.services_list_item}>
                            <ImageComponent
                                src={i.image_url} alt="" type="IMG" layout="fixed"
                                width={64} height={64} style={{ borderRadius: "6px" }}
                            />
                            <div className={style.service_detail}>
                                <span>{i.service_name}</span>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

interface TimeBookProps {
    dataBook: IServicePostApp,
    setDataBook: (dataBook: IServicePostApp) => void,
    setOpenTime: (openTime: boolean) => void,
    org: IOrganization
}

const TimeBook = (props: TimeBookProps) => {
    const { dataBook, setDataBook, setOpenTime, org } = props;
    const onChangeDate = (date: string) => {
        setDataBook({ ...dataBook, date: date })
    }
    const onChangeTime = (e: any) => {
        const time = e.format("HH:mm")
        setDataBook({ ...dataBook, time: time })
    }
    return (
        <div className={style.book_time_cnt}>
            <div className={style.book_time_cnt_back}>
                <ButtonBack onClick={() => setOpenTime(false)} layout="fixed" />
            </div>
            <div className={style.picker_cnt}>
                <div className={style.book_time_date}>
                    <DatePicker
                        onChange={onChangeDate}
                        disablePrev={true}
                    />
                </div>
                <div className={style.book_time_time}>
                    <TimePicker
                        datePicker={dataBook.date}
                        disablePrev={true} org={org}
                        onChange={onChangeTime}
                        value={dataBook.time}
                    />
                </div>
            </div>
            <div className={style.button_cnt}>
                {
                    dataBook.time !== "" && dataBook.date !== "" &&
                    <ButtonLoading
                        onClick={() => setOpenTime(false)}
                        title='Xác nhận thời gian'
                    />
                }
            </div>
        </div>
    )
}

export default Booking