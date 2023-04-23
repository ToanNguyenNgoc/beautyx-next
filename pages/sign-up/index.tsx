import { Container } from '@mui/material'
import React, { useState } from 'react'
import { ButtonLoading, FormOTP, ImageComponent, Input } from '../../components/layout'
import style from './sign-up.module.css'
import Router from 'next/router'
import img from '../../src/constants/img'
import icon from '../../src/constants/icon'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import validateForm from '../../src/utils/validateForm'
import authentication from '../../api-client/authApi'
import { AxiosError } from 'axios'
import { PopupNotification } from '../../components/layout/Popup'
import { useTrans } from '../../context/hooks'
export interface ParamsProps {
	telephone: string
	platform: string
	verification_id: string
	code: string
	open: boolean
}

function SignUp() {
	const [params, setParams] = useState<ParamsProps>({
		telephone: '',
		platform: 'BEAUTYX',
		verification_id: '',
		code: '',
		open: true,
	})
	const [loading, setLoading] = useState(false)
	const [openAlert, setOpenAlert] = useState(false)
	const [textErr, setTextErr] = useState({ errMail: '', errPhone: '' })
	const trans = useTrans()

	async function handleSubmitForm(values: any) {
		const paramsValue = {
			fullname: values.name,
			email: values.email,
			telephone: params.telephone,
			code: values.code,
			verification_id: params.verification_id,
			password: values.password,
			platform: params.platform,
		}
		try {
			await authentication.register(paramsValue)
			setLoading(false)
			setOpenAlert(true)
		} catch (error) {
			setLoading(false)
			const err = error as AxiosError
			if (err.response?.status === 400) {
				setTextErr({
					...textErr,
					errMail: err.response.data.context.email ? trans.form.email_already : '',
					errPhone: err.response.data.context.telephone ? trans.form.phone_already : '',
				})
			}
		}
	}

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			repassword: '',
		},
		validationSchema: Yup.object({
			email: Yup.string().required('Vui lòng nhập email/số điện thoại'),
			password: Yup.string()
				.required('Vui lòng nhập mật khẩu')
				.min(8, 'Mật khẩu lớn hơn 8 ký tự')
				.max(32, 'Mật khẩu tối đa 32 kí tự'),
			name: Yup.string()
				.required('Vui lòng nhập họ và tên')
				.min(2, 'Tên lớn hơn 2 ký tự')
				.required('Vui lòng nhập họ và tên')
				.matches(validateForm.fullname, 'Tên không đúng định dạng'),
			repassword: Yup.string()
				.required('Vui lòng nhập lại mật khẩu')
				.oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp'),
		}),
		//SUBMIT LOGIN FORM
		onSubmit: async (values) => {
			setLoading(true)
			handleSubmitForm(values)
		},
	})

	return (
		<>
			{/* form OTP */}
			<FormOTP params={params} setParams={setParams} openSignUp={params.open} />
			{/* close form OTP */}

			{/* header sign up */}
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
						<h3 className={style.sign_head_title}>Đăng ký</h3>
					</div>
				</Container>
			</div>
			{/* close header sign up */}

			{/* body sign up */}
			<Container>
				{/* form */}
				<div className={style.form_sign_wrap}>
					<div className={style.form_sign_cnt}>
						{/*  form left  */}
						<div className={style.form_sign_left}>
							<div className={style.form_left_img}>
								<ImageComponent src={img.Partner} alt="" layout="responsive" type="ICON" />
							</div>
						</div>
						{/* close form left  */}

						{/* form right */}
						<div className={style.form_sign_right}>
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
							<span className={style.sign_right_title}>Đăng ký</span>
							<form onSubmit={formik.handleSubmit} autoComplete="off">
								<div className={style.sign_form_row}>
									<Input
										icon={icon.User}
										onChange={formik.handleChange}
										value={formik.values.name}
										id="name"
										name="name"
										placeholder="Nhập tên của bạn..."
									/>
									{formik.errors.name && formik.touched && (
										<span className={style.sign_form_row_err}>{formik.errors.name}</span>
									)}
								</div>
								<div className={style.sign_form_row}>
									<Input
										icon={icon.Phone}
										onChange={formik.handleChange}
										value={formik.values.email}
										id="email"
										name="email"
										placeholder="Email/Số điện thoại..."
									/>
									{formik.errors.email && formik.touched && (
										<span className={style.sign_form_row_err}>{formik.errors.email}</span>
									)}
									{textErr.errMail && (
										<span className={style.sign_form_row_err}>{textErr.errMail}</span>
									)}
								</div>
								<div className={style.sign_form_row}>
									<Input
										icon={icon.Lock}
										onChange={formik.handleChange}
										value={formik.values.password}
										id="password"
										name="password"
										placeholder="Nhập mật khẩu..."
									/>
									{formik.errors.password && formik.touched && (
										<span className={style.sign_form_row_err}>{formik.errors.password}</span>
									)}
								</div>
								<div className={style.sign_form_row}>
									<Input
										icon={icon.User}
										onChange={formik.handleChange}
										value={formik.values.repassword}
										id="repassword"
										name="repassword"
										placeholder="Nhập lại mật khẩu..."
									/>
									{formik.errors.repassword && formik.touched && (
										<span className={style.sign_form_row_err}>{formik.errors.repassword}</span>
									)}
								</div>
								<div className={style.form_btn_submit}>
									<ButtonLoading
										title="Đăng ký"
										type="submit"
										// loading={status === 'LOADING' && true}
										loading={loading}
									/>
								</div>
								<span className={style.sign_form_err_phone}>{textErr.errPhone}</span>
							</form>
							<div className={style.sign_body_right_bot}>
								<span>Bạn đã có tài khản?</span>{' '}
								<h4 onClick={() => Router.push('/sign')}>Đăng nhập ngay</h4>
							</div>
						</div>
						{/* close form right */}
					</div>
				</div>
				{/* close form */}
			</Container>
			{/* close body sign up */}

			{/* popup noti */}
			<PopupNotification
				title="Thành công"
				content={'Vui lòng đăng nhập để tiếp tục'}
				open={openAlert}
				setOpen={setOpenAlert}
				children={
					<button onClick={() => setOpenAlert(false)} className={style.popup_noti_btn}>
						Đóng
					</button>
				}
			/>
		</>
	)
}

export default SignUp
