import React from 'react';
import { AuthLayout } from '../../components/layout';
import { NextPageWithLayout } from '../../models';
import { Container } from '@mui/system';
import { useRouter } from 'next/router';
import { directUrlApp } from "../../context/direct-url"
import style from "./app.module.css"
import Link from 'next/link';
import { Calendar, ServiceUser } from "../../components/pages/apointment"
import Seo from "../../components/seo"

const Appointment: NextPageWithLayout = (props) => {
    const { query, pathname } = useRouter()
    let tab = ""
    if (query.tab) tab = `${query.tab}`

    const tabs = [
        { id: 1, text: "Lịch hẹn", url: directUrlApp("calendar"), child: "calendar" },
        { id: 2, text: "Gói dịch vụ", url: directUrlApp("service"), child: "service" }
    ]

    return (
        <>
            <Seo
                title="Lịch hẹn | Gói dịch vụ - BeautyX"
                description='Lịch hẹn | Gói dịch vụ'
                url={pathname}
            />
            <Container>
                <div className={style.app_cnt}>
                    <div className={style.tab_cnt}>
                        <ul className={style.tab_list}>
                            {
                                tabs.map(item => (
                                    <li key={item.id} className={style.tab_item_cnt} >
                                        <Link href={item.url} >
                                            <a
                                                style={item.child === tab ? {
                                                    backgroundColor: "var(--purple)",
                                                    color: "var(--bg-white)"
                                                } : {}}
                                                className={style.tab_item}
                                            >{item.text}</a>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={style.tab_body}>
                        {tab === "calendar" && <Calendar />}
                        {tab === "service" && <ServiceUser />}
                    </div>
                </div>
            </Container>
        </>
    );
}
Appointment.Layout = AuthLayout
export default Appointment;