import icon from '@/src/constants/icon'
import img from '@/src/constants/img'
import React, { useEffect, useState } from 'react'
import { ImageComponent } from '../../ImageCpn'
import style from '../formOTP.module.css'
import { PopupNotification } from '../../Popup'

interface IProps {
	activeStep: number
	setActiveStep: any
	phoneNumber: string
	handleRecaptcha: any
	params: any
	setParams: any
}
export function FormOTPCode(props: IProps) {
	const { activeStep, setActiveStep, phoneNumber, handleRecaptcha, params, setParams } = props
	const [counter, setCounter] = useState(59)
	const [openAlert, setOpenAlert] = useState(false)
	const [otp, setOtp] = useState(new Array(6).fill(''))
	const valueOTP = otp.join('')
	const [titlePopup, setTitlePopup] = useState<string>()
	const [loading, setLoading] = useState(false)

	// input forcus
	const handleChange = (e: any, index: number) => {
		if (isNaN(e.target.value)) return false
		setOtp([...otp.map((item, idx) => (idx === index ? e.target.value : item))])
		// Focus next input
		if (e.target.nextSibling) {
			e.target.nextSibling.focus()
		} else if (!e.target.nextSibling && e.target.value) {
			handleSubmit([...otp.map((item, idx) => (idx === index ? e.target.value : item))])
		}
		// Focus delete input
		if (e.target.value === '') {
			e.target.previousSibling.focus()
			if (index === 1) {
				setOtp([...otp.map((item: any, i: number) => '')])
			}
		}
	}
	// submit otp
	const handleSubmit = (props: any) => {
		if (valueOTP.length > 0) {
			if (counter !== 0) {
				let otp = (props && props?.join('')) || valueOTP
				setLoading(true)
				window.confirmationResult
					.confirm(otp)
					.then((result: any) => {
						// otp ? handleCheckin({ otp: otp }) : handleCheckin(false)
						if (result) {
							setLoading(false)
							setParams({ ...params, code: otp, open: false })
						}
					})
					.catch((error: any) => {
						console.log(error)
						let errorCode = error.code
						setLoading(false)
						if (errorCode === 'auth/invalid-verification-code') {
							// sai otp
							setTitlePopup('Mã OTP không đúng vui lòng thử lại...')
							setOpenAlert(true)
						} else if (errorCode === 'auth/code-expired') {
							// otp het han
							setTitlePopup('Mã OTP hết hạn vui lòng thử lại...')
							setOpenAlert(true)
						} else {
							console.log('Success')
						}
					})
			} else {
				setTitlePopup('Mã OTP hết hạn vui lòng thử lại...')
				setOpenAlert(true)
			}
		} else {
			setTitlePopup('Vui lòng nhập mã OTP')
			setOpenAlert(true)
		}
	}
	// close submit otp

	// count down
	useEffect(() => {
		const timer: any =
			counter > 0 && activeStep === 1 && setInterval(() => setCounter(counter - 1), 1000)
		return () => clearInterval(timer)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [counter])
	// close count down

	return (
		<>
			<div onClick={() => setActiveStep(0)} className={style.dialog_detail_close}>
				<ImageComponent type="ICON" alt="" src={icon.x} layout="fixed" width={24} height={24} />
			</div>
			<div className={style.dialog_OTP_wrap}>
				<div className={style.dialog_OTP_img}>
					<ImageComponent src={img.imgSignUpOtp} alt="" layout="responsive" type="ICON" />
				</div>
				<div className={style.dialog_OTP_content}>
					<p className={style.item_title}>OTP Verification</p>
					<p className={style.item_desc}>
						Mã xác thực đã gửi tới số{' '}
						<span
							style={{
								color: 'var(--purple)',
							}}
						>
							{phoneNumber}
						</span>{' '}
						vui lòng kiểm tra tin nhắn...{' '}
						{counter === 0 ? (
							<span
								style={{ marginTop: '4px', display: 'inline-block' }}
								className={style.text_error}
							>
								OTP hết hạn
							</span>
						) : (
							<span
								style={{
									color: 'var(--purple)',
									fontWeight: 'bold',
									marginTop: '4px',
									display: 'inline-block',
								}}
							>
								00:
								{counter < 10 ? `0${counter}` : counter}s
							</span>
						)}
					</p>
					<div className={style.wrap_input}>
						{otp.map((data, index) => {
							return (
								<input
									className={style.input_OTP}
									type="number"
									name="otp"
									maxLength={1}
									key={index}
									value={data}
									onChange={(e) => handleChange(e, index)}
									onFocus={(e) => e.target.select()}
								/>
							)
						})}
					</div>

					<div className={style.wrap_btn_otp}>
						<button className={style.btn_clear} onClick={(e) => setOtp([...otp.map((v) => '')])}>
							Xoá
						</button>
						{counter === 0 ? (
							<>
								<button
									className={style.btn_very}
									onClick={() => {
										handleRecaptcha(phoneNumber, true)
										// onClose();
										setCounter(59)
										setOtp([...otp.map((v) => '')])
									}}
								>
									Gửi lại OTP
								</button>
							</>
						) : (
							<>
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
									className={style.btn_very}
									onClick={() => handleSubmit(false)}
								>
									{loading === true ? (
										<div className={style.lds_dual_ring_wrap}>
											<span style={{ color: 'transparent' }}>...</span>
											<div className={style.lds_dual_ring}></div>
										</div>
									) : (
										`Xác nhận`
									)}
								</button>
							</>
						)}
					</div>
				</div>
			</div>
			<PopupNotification
				title="Thông báo !"
				content={`${titlePopup}`}
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
