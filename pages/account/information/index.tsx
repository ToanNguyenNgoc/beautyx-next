import React from 'react';
import { NextPageWithLayout } from '../../../models';
import { AccountLayout } from "../../../components/layout";
import AccPageTitle from '../../../components/pages/account/AccPageTitle';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../../redux/store/store.interface';
import { Input, ButtonLoading } from "../../../components/layout";
import { putAsyncUser } from "../../../redux/slices/auth-slice/user-slice";
import Image from 'next/image';
import imageProxy from '../../../context/hooks/image-proxy.ts';
import style from "../acc.module.css"
import { useFormik } from 'formik';

const Information: NextPageWithLayout = () => {
    const { USER, upload_status } = useSelector((state: IStore) => state.USER);
    const dispatch = useDispatch();
    const handleSubmitUser = async (fullname:string) => {
        await dispatch(putAsyncUser({
            ...USER,
            fullname: fullname
        }))
    }

    const formik = useFormik({
        initialValues: {
            fullname: USER?.fullname,
            email: USER?.email,
            telephone: USER?.telephone
        },
        onSubmit: async (values:any) => {
            handleSubmitUser(values.fullname)
        }
    })
    return (
        <>
            <AccPageTitle title='Thông tin cá nhân' />
            <div className={style.acc_left_panel}>
                <form
                    onSubmit={formik.handleSubmit}
                    autoComplete="off"
                    className={style.acc_form}
                >
                    <div className={style.acc_form_row}>
                        <div className={style.acc_form_row_label}>
                            Avatar
                        </div>
                        <div className={style.form_avatar_cnt}>
                            <Image
                                style={{borderRadius:"100%"}}
                                src={imageProxy(USER?.avatar)}
                                alt="avt" layout="responsive"
                                width={"100%"} height={"100%"}
                            />
                        </div>
                    </div>
                    <div className={style.acc_form_row}>
                        <div className={style.acc_form_row_label}>
                            Họ và tên
                        </div>
                        <div className={style.acc_form_row_inp}>
                            <Input
                                onChange={formik.handleChange}
                                value={formik.values.fullname}
                                id="fullname"
                                name="fullname"
                                placeholder='Họ và tên'
                            />
                        </div>
                    </div>
                    <div className={style.acc_form_row}>
                        <div className={style.acc_form_row_label}>
                            Email
                        </div>
                        <div className={style.acc_form_row_inp}>
                            <Input
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                id="email"
                                name="email"
                                placeholder='Email'
                                disable={true}
                            />
                        </div>
                    </div>
                    <div className={style.acc_form_row}>
                        <div className={style.acc_form_row_label}>
                            Số điện thoại
                        </div>
                        <div className={style.acc_form_row_inp}>
                            <Input
                                onChange={formik.handleChange}
                                value={formik.values.telephone}
                                id="telephone"
                                name="telephone"
                                placeholder='Số điện thoại'
                                disable={true}
                            />
                        </div>
                    </div>
                    <div className={style.form_bot}>
                        <ButtonLoading
                            title='Lưu thay đổi'
                            type="submit"
                            loading={upload_status === "LOADING" && true}
                        />
                    </div>
                </form>
            </div>
        </>
    );
}
Information.Layout = AccountLayout
export default Information