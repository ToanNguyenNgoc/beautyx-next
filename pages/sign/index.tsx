import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncUser } from '../../redux/slices/auth-slice/user-slice'
import { loginAsyncBeauty } from '../../redux/slices/auth-slice/login-slice'
import { IStore } from '../../redux/store/store.interface'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ButtonLoading, Input, ImageComponent } from '../../components/layout'
import { PopupNotification } from '../../components/layout/Popup'
import { Checkbox } from '@mui/material'
import Router from 'next/router'
import style from './sign.module.css'
import icon from '../../src/constants/icon'
import img from '../../src/constants/img'
import { Container } from '@mui/system'

function SignIn() {
	const { status, status_code } = useSelector((state: IStore) => state.LOGIN)
	const dispatch = useDispatch()
	const [open, setOpen] = useState(false)
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			email: Yup.string().required('Vui lòng nhập email/số điện thoại'),
			password: Yup.string().required('Vui lòng nhập mật khẩu'),
		}),
		//SUBMIT LOGIN FORM
		onSubmit: async (values) => {
			const res = await dispatch(
				loginAsyncBeauty({
					...values,
					platform: 'BEAUTYX',
				})
			)
			if (res.payload.res) {
				dispatch(fetchAsyncUser())
				Router.back()
			}
			if (res.payload.status_code === 404) setOpen(true)
		},
	})
	return (
		<div className={style.sign_cnt}>
			<PopupNotification
				open={open}
				setOpen={setOpen}
				title="Thông báo"
				content={`Tài khoản "${formik.values.email}" chưa được đăng ký`}
				children={<ButtonLoading title="Đăng ký ngay" />}
			/>
			<div className={style.sign_head}>
				<Container>
					<div className={style.sign_head_wrapper}>
						<ImageComponent
							onClick={() => Router.replace('/')}
							src={img.beautyX}
							alt=""
							type="ICON"
							layout="fixed"
							width={138}
							height={44}
						/>
						<h3 className={style.sign_head_title}>Đăng nhập</h3>
					</div>
				</Container>
			</div>
			<Container>
				<div className={style.sign_wrap}>
					<div className={style.sign_body}>
						<div className={style.sign_body_left}>
							<div className={style.body_left_img}>
								<ImageComponent src={img.Partner} alt="" layout="responsive" type="ICON" />
							</div>
						</div>
						<div className={style.sign_body_right}>
							<div className={style.sign_right_img}>
								<ImageComponent
									type="ICON"
									src={img.beautyx}
									alt="logo beautyx"
									layout="fixed"
									width={120}
									height={120}
								/>
							</div>
							<span className={style.sign_right_title}>Đăng nhập</span>
							<form
								onSubmit={formik.handleSubmit}
								autoComplete="off"
								className={style.sign_body_form}
							>
								<div className={style.sign_form_row}>
									<Input
										icon={icon.User}
										onChange={formik.handleChange}
										value={formik.values.email}
										id="email"
										name="email"
										placeholder="Nhập Email/Số điện thoại..."
									/>
									{formik.errors.email && formik.touched && (
										<span className={style.sign_form_row_err}>{formik.errors.email}</span>
									)}
								</div>
								<div className={style.sign_form_row}>
									<Input
										icon={icon.Lock}
										onChange={formik.handleChange}
										value={formik.values.password}
										id="password"
										name="password"
										placeholder="Nhập mật khẫu..."
										type="password"
									/>
									{formik.errors.password && formik.touched.password && (
										<span className={style.sign_form_row_err}>{formik.errors.password}</span>
									)}
									{status_code === 401 && (
										<span className={style.sign_form_row_err}>Mật khẩu không đúng</span>
									)}
								</div>
								<div className={style.sign_form_forgot}>
									<div className={style.sign_form_forgot_left}>
										<Checkbox />
										<span>Ghi nhớ mật khẩu</span>
									</div>
									<span
										onClick={() => Router.replace('/reset-password')}
										className={style.sign_form_forgot_right}
									>
										Quên mật khẩu
									</span>
								</div>
								<div className={style.form_btn_submit}>
									<ButtonLoading
										title="Đăng nhập"
										type="submit"
										loading={status === 'LOADING' && true}
									/>
								</div>
							</form>
							<div className={style.sign_body_right_bot}>
								<span>Bạn mới biết đến Beautyx?</span>{' '}
								<h4 onClick={() => Router.push('/sign-up')}>Đăng ký</h4>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default SignIn
