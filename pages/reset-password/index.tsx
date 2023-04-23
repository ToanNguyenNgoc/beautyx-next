import React, { useState } from 'react'
import { ButtonLoading, FormOTP, ImageComponent, Input } from '../../components/layout'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import authentication from '../../api-client/authApi'
import style from './reset-password.module.css'
import { Container } from '@mui/material'
import Router from 'next/router'
import img from '../../src/constants/img'
import icon from '../../src/constants/icon'
import { PopupNotification } from '../../components/layout/Popup'
import { AxiosError } from 'axios'

export interface ParamsProps {
	telephone: string
	platform: string
	verification_id: string
	code: string
	open: boolean
}
function ResetPassword() {
	const [params, setParams] = useState<ParamsProps>({
		telephone: '',
		platform: 'BEAUTYX',
		verification_id: '',
		code: '',
		open: true,
	})
	const [loading, setLoading] = useState(false)
	const [openAlert, setOpenAlert] = useState(false)

	const handleAsyncForgotPass = async (val: any) => {
		const paramsValues = {
			telephone: params.telephone,
			new_password: val.password,
			code: params.code,
			verification_id: params.verification_id,
		}
		try {
			await authentication.forgotPassword(paramsValues)
			setLoading(false)
			setOpenAlert(true)
		} catch (error) {
			setLoading(false)
			const err = error as AxiosError
			console.log(error)
		}
	}
	const formik = useFormik({
		initialValues: {
			password: '',
			repassword: '',
		},
		validationSchema: Yup.object({
			password: Yup.string()
				.required('Vui lòng nhập mật khẩu')
				.min(6, 'Mật khẩu lớn hơn 6 ký tự')
				.max(32, 'Mật khẩu tối đa 32 kí tự'),
			repassword: Yup.string().required('Vui lòng nhập mật khẩu mới'),
		}),
		//SUBMIT LOGIN FORM
		onSubmit: async (values) => {
			console.log('values :>> ', values)
			setLoading(true)
			handleAsyncForgotPass(values)
		},
	})
	return (
		<div>
			<FormOTP params={params} setParams={setParams} openSignUp={params.open} />
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
						<h3 className={style.sign_head_title}>Cập nhật mật khẩu</h3>
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
							<span className={style.sign_right_title}>Cập nhật mật khẩu</span>
							<form onSubmit={formik.handleSubmit} autoComplete="off">
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
										title="Thay đổi"
										type="submit"
										// loading={status === 'LOADING' && true}
										loading={loading}
									/>
								</div>
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
		</div>
	)
}
export default ResetPassword
