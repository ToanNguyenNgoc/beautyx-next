import { useRouter } from 'next/router';
import React from 'react';
import style from "./bottom.module.css"
import Link from 'next/link';
import Image from 'next/image';
import { useDeviceMobile } from '@/context/hooks';
import { ICON } from '@/src/constants/icon2';
import { directUrlApp } from '@/context/direct-url';

function BottomNavigation() {
    const { route } = useRouter();
    const IS_MB = useDeviceMobile();
    let SHOW = false;
    const PAGES_SHOW = ["/", "/apointment", "/account"]
    if (PAGES_SHOW.includes(route)) SHOW = true

    const listTabs = [
        {
            route: "/",
            url: "/",
            title: "Địa điểm",
            icon: ICON.location,
            icon_act: ICON.locationAct,
            badge: 0
        },
        {
            route: "/cate",
            url: "/cate",
            title: "Danh mục",
            icon: ICON.cate,
            icon_act: ICON.cateAct,
            badge: 0
        },
        {
            route: "/apointment",
            url: directUrlApp("calendar"),
            title: "Địa điểm",
            icon: ICON.calendar,
            icon_act: ICON.calendarAct,
            badge: 0
        },
        {
            route: "/account",
            url: "/account",
            title: "Địa điểm",
            icon: ICON.user,
            icon_act: ICON.userAct,
            badge: 0
        },
    ]


    return (
        (IS_MB && SHOW) ?
            <div className={style.bot_cnt}>
                {
                    listTabs.map((item => (
                        <Link href={item.url} key={item.url} >
                            <a className={style.tab_item_cnt}>
                                <Image
                                    src={item.route === route ? item.icon_act : item.icon} alt="icon"
                                    layout="fixed" width={20} height={20}
                                />
                                <span
                                    style={item.route === route ? { color: "var(--purple)" } : {}}
                                    className={style.tab_item_title}>
                                    {item.title}
                                </span>
                            </a>
                        </Link>
                    )))
                }
            </div>
            :
            <></>
    );
}
export default BottomNavigation