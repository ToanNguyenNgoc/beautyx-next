import { Dialog } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import React, { useState } from 'react'
import style from './formOTP.module.css'
import { ImageComponent } from '../ImageCpn'
import { FormOTPCode } from './components/FormOTPCode'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { PopupNotification } from '../Popup'
import Router from 'next/router'
import img from '@/src/constants/img'
import { authentication } from '@/firebase'
import { ParamsProps } from '@/pages/sign-up'
import icon from '@/src/constants/icon'

declare global {
	interface Window {
		recaptchaVerifier: any
		confirmationResult: any
		recaptchaWidgetId: any
	}
}
// window.confirmationResult = window.confirmationResult || {}
interface IProps {
	openSignUp: boolean
	setOpenSignUp?: (openSignUp: boolean) => void
	params: ParamsProps
	setParams: (params: ParamsProps) => void
}
export function FormOTP(props: IProps) {
	const { openSignUp, setOpenSignUp, params, setParams } = props
	const [activeStep, setActiveStep] = useState(0)
	const [loading, setLoading] = useState(false)
	const [openAlert, setOpenAlert] = useState(false)
	const [titleErr, setTitleError] = useState('')
	const onClosePopup = () => {
		if (setOpenSignUp) setOpenSignUp(false)
	}
	const generateRecaptcha = () => {
		try {
			console.log(window.recaptchaVerifier)
			if (!window.recaptchaVerifier) {
				window.recaptchaVerifier = new RecaptchaVerifier(
					'recaptcha-container',
					{
						size: 'invisible',
						callback: (value: any) => {
							// handleSubmit(value, true)
						},
						'expired-callback': () => {
							// Response expired. Ask user to solve reCAPTCHA again.
							// ...
						},
					},
					authentication
				)
			} else {
				window.recaptchaVerifier.render()
			}
		} catch (err: any) {
			console.log(err)
		}
	}
	const handleSubmit = (value: any, isRecaptcha: Boolean) => {
		if (value) {
			setLoading(true)
			isRecaptcha === true && generateRecaptcha()
			let phoneNumberVN = '+84' + value.phone?.slice(1)
			signInWithPhoneNumber(authentication, phoneNumberVN, window.recaptchaVerifier)
				.then((confirmationResult: any) => {
					setParams({
						...params,
						telephone: value.phone,
						verification_id: confirmationResult.verificationId,
					})
					window.confirmationResult = confirmationResult
					setActiveStep(1)
					setLoading(false)
				})
				.catch((error) => {
					setLoading(false)
					console.log(error)
					let errorCode = error.code
					let messCode = error.message
					if (errorCode === 'auth/quota-exceeded' || errorCode === 'auth/too-many-requests') {
						setOpenAlert(true)
						setTitleError('Bạn đã gửi quá số lần cho phép, vui lòng thử lại sau...')
					} else if (messCode === 'reCAPTCHA has already been rendered in this element') {
						setOpenAlert(true)
						setTitleError('Vui lòng tải lại trang để tiếp tục')
					}
				})
		}
	}
	const formik = useFormik({
		initialValues: {
			phone: '',
		},
		validationSchema: Yup.object({
			phone: Yup.string()
				.trim()
				.required('Số điện thoại không được để trống')
				.min(10, 'Số điện thoại không được nhỏ hơn 9 chữ số')
				.max(11, 'Số điện thoại không được lớn hơn 11 chữ số')
				.matches(
					/(03|05|07|08|09|01|84|0[2|6|8|9])+([0-9]{8,9})\b/,
					'Số điện thoại không đúng định dạng'
				),
		}),
		// SUBMIT
		onSubmit: (values: any) => {
			handleSubmit(values, true)
		},
	})

	return (
		<div className={style.formOTP_cnt}>
			<Dialog open={openSignUp} onClose={() => onClosePopup()}>
				<div className={style.dialog_OTP}>
					<div onClick={() => Router.back()} className={style.dialog_detail_close}>
						<ImageComponent type="ICON" alt="" src={icon.x} layout="fixed" width={24} height={24} />
					</div>
					<div className={style.dialog_OTP_wrap}>
						{activeStep === 0 ? (
							<>
								<div className={style.dialog_OTP_img}>
									<ImageComponent src={img.imgSignUp} alt="" layout="responsive" type="ICON" />
								</div>
								<div className={style.dialog_OTP_content}>
									<p className={style.item_title}>OTP Verification</p>
									<p className={style.item_desc}>Vui lòng nhập số điện thoại để xác thực</p>
									<form onSubmit={formik.handleSubmit} autoComplete="off" action="">
										<div className={style.number_input}>
											<input
												maxLength={11}
												minLength={10}
												value={formik.values.phone}
												onChange={formik.handleChange}
												name="phone"
												type="text"
												placeholder="Nhập số điện thoại"
											/>
										</div>
										{formik.errors.phone && formik.touched.phone && (
											<p
												style={{
													marginTop: '16px',
												}}
												className={style.text_error}
											>
												{formik.errors.phone}
											</p>
										)}

										<button
											style={
												loading === true
													? {
														opacity: '0.5',
														pointerEvents: 'none',
													}
													: { opacity: '1' }
											}
											type="submit"
											className={style.btn_otp}
										>
											{loading === true ? (
												<div className={style.lds_dual_ring_wrap}>
													<span style={{ color: 'transparent' }}>...</span>
													<div className={style.lds_dual_ring}></div>
												</div>
											) : (
												`Lấy mã xác thực`
											)}
										</button>
										<div className={style.sign_body_right_bot}>
											<span>Bạn đã có tài khản?</span>{' '}
											<h4 onClick={() => Router.replace('/sign')}>Đăng nhập ngay</h4>
										</div>
									</form>
								</div>
							</>
						) : (
							<>
								<FormOTPCode
									activeStep={activeStep}
									setActiveStep={setActiveStep}
									phoneNumber={params.telephone}
									setParams={setParams}
									params={params}
									handleRecaptcha={handleSubmit}
								/>
							</>
						)}
					</div>
				</div>
				<div id="recaptcha-container"></div>
			</Dialog>
			{/* popup noti */}
			<PopupNotification
				title="Thông báo!"
				content={`${titleErr}`}
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
