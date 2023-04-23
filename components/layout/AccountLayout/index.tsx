import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthLayout } from '../index';
import { Container } from '@mui/system';
import { ICON } from "../../../src/constants/icon2"
import style from "./acc.module.css"
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { LayoutProps } from '@/models/index';
import { IStore } from '@/redux/store/store.interface';
import icon from '@/src/constants/icon';
import { directUrlAccount, directUrlApp } from '@/context/direct-url';
import { imageProxy, useDeviceMobile } from '@/context/hooks';
import { handlePostMedia } from '@/context/functions';
import { putAsyncUser } from '@/redux/slices/auth-slice/user-slice';

export function AccountLayout({ children }: LayoutProps) {
    const { USER } = useSelector((state: IStore) => state.USER)
    const {route} = useRouter();
    const dispatch = useDispatch();
    const IS_MB = useDeviceMobile();
    const links = [
        { id: 1, icon: ICON.userAct, text: "Tài khoản của tôi", url: directUrlAccount().information },
        { id: 2, icon: icon.boxAcc, text: "Lịch sử đơn hàng", url: directUrlAccount().order_paid },
        { id: 3, icon: icon.calendarAcc, text: "Lịch hẹn", url: directUrlApp("calendar") },
        { id: 4, icon: icon.servicesPurpleBold, text: "Gói dịch vụ", url: directUrlApp("service") },
        { id: 5, icon: ICON.cateAct, text: "Mã ưu đãi", url: directUrlAccount().discount },
        { id: 6, icon: icon.markerAcc, text: "Địa chỉ giao hàng", url: directUrlAccount().address },
    ]
    const onFileChange = async (e: any) => {
        const form = e.target.files[0];
        const { model_id, original_url } = await handlePostMedia(form)
        await dispatch(putAsyncUser({
            ...USER,
            media_id: model_id
        }))
    }
    let ACC_SHOW = "right";
    if(route !== "/account") ACC_SHOW = "left";
    
    return (
        <AuthLayout>
            {
                USER &&
                <Container>
                    <div className={style.acc_cnt}>
                        <div
                            style={(IS_MB && ACC_SHOW === "left") ? {
                                marginLeft:"-100%", overflow: "hidden"
                            } : {}}
                            className={style.acc_left_cnt}
                        >
                            <div className={style.acc_left_head}>
                            <Link href={directUrlAccount().information} >
                                        <a className={style.acc_left_head_edit_btn}>
                                            Chỉnh sửa
                                            <Image
                                                src={icon.editWhiteAcc}
                                                layout="fixed" alt=''
                                                width={12} height={16}
                                            />
                                        </a>
                                    </Link>
                                <div className={style.acc_avt_cnt}>
                                    <Image
                                        style={{ borderRadius: "100%" }}
                                        width={"100%"} height={"100%"}
                                        src={imageProxy(USER?.avatar)}
                                        layout="responsive"
                                        alt='user_avt'
                                    />
                                    <label className={style.acc_avt_btn} htmlFor="avatar">
                                        <Image
                                            src={icon.Camera_purple}
                                            alt="camera" layout='fixed'
                                            width={19} height={14}
                                        />
                                    </label>
                                    <input onChange={onFileChange} hidden id="avatar" type="file" />
                                </div>
                                <div className={style.acc_profile_cnt}>
                                    <div className={style.acc_profile_item_name}>{USER.fullname}</div>
                                    <span className={style.acc_profile_item}>
                                        <Image
                                            src={icon.phoneWhite}
                                            layout="fixed" alt=''
                                            width={12} height={16}
                                        />
                                        <h5>{USER.telephone}</h5>
                                    </span>
                                    <span className={style.acc_profile_item}>
                                        <Image
                                            src={icon.emailWhite}
                                            layout="fixed" alt=''
                                            width={12} height={16}
                                        />
                                        <h5>{USER.email}</h5>
                                    </span>
                                </div>
                            </div>
                            <div className={style.acc_left_body}>
                                <ul className={style.acc_link_list}>
                                    {
                                        links.map(i => (
                                            <li
                                                key={i.id} className={style.link_item_cnt}
                                            >
                                                <Link href={i.url} >
                                                    <a className={style.link_item}>
                                                        <Image
                                                            src={i.icon}
                                                            layout="fixed"
                                                            alt=''
                                                            width={16}
                                                            height={16}
                                                        />
                                                        <span className={style.link_item_text}>{i.text}</span>
                                                    </a>
                                                </Link>
                                            </li>
                                        ))
                                    }
                                    <li className={style.link_item_cnt}>
                                        <button className={style.link_item}>
                                            <Image
                                                src={icon.signOut}
                                                layout="fixed"
                                                alt=''
                                                width={16}
                                                height={16}
                                            />
                                            <span className={style.link_item_text}>Đăng xuất</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            style={(IS_MB && ACC_SHOW ==="left") ? {
                                marginLeft:"0px"
                            } : {}}
                            className={style.acc_right_cnt}
                        >
                            {children}
                        </div>
                    </div>
                </Container>
            }
        </AuthLayout>
    );
}