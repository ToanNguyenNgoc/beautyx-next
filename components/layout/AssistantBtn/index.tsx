import { useDeviceMobile } from '@/context/hooks'
import React, { useState, useRef, useEffect } from 'react'
import { ImageComponent } from '../ImageCpn'
import style from './assistant-btn.module.css'
import { useRouter } from 'next/router'
import { handleChat } from '@/src/utils/customChat'
import icon from '@/src/constants/icon'
import img from '@/src/constants/img'

export function AssistantBtn(props: any) {
	const [overLay, setOverLay] = useState(false)
	const is_mb = useDeviceMobile()
	const router = useRouter()
	const handleClickOverLay = () => {
		if (is_mb === true) {
			setOverLay(!overLay)
		}
	}
	const handleHover = () => {
		if (is_mb === false) {
			refAssisBtn?.current?.classList.add(style.assistantBtn_wrap_hover)
		}
	}
	const handleHoverLeave = () => {
		if (is_mb === false) {
			refAssisBtn?.current?.classList.remove(style.assistantBtn_wrap_hover)
		}
	}
	const refOverLay: any = useRef()
	const refAssisBtn: any = useRef()
	useEffect(() => {
		if (is_mb === true) {
			if (overLay === true) {
				refOverLay?.current?.classList.add(style.active)
				refAssisBtn?.current?.classList.add(style.assistantBtn_wrap_hover)
				document.body.style.overflow = 'hidden'
			} else {
				refOverLay?.current?.classList.remove(style.active)
				refAssisBtn?.current?.classList.remove(style.assistantBtn_wrap_hover)
				document.body.style.overflow = 'unset'
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [overLay])
	return (
		<div
			ref={refOverLay}
			onTouchStart={() => handleClickOverLay()}
			className={style.assistantbtn_cnt}
		>
			<div
				onMouseEnter={() => handleHover()}
				onMouseLeave={() => handleHoverLeave()}
				ref={refAssisBtn}
				className={style.assistantbtn_wrap}
			>
				{is_mb === true ? (
					<div onTouchStart={() => handleChat()} className={`${style.btn1} ${style.buttons}`}>
						<ImageComponent
							type="ICON"
							alt=""
							src={icon.chatWhite}
							layout="fixed"
							width={20}
							height={20}
						/>
					</div>
				) : (
					<div onClick={() => handleChat()} className={`${style.btn1} ${style.buttons}`}>
						<ImageComponent
							type="ICON"
							alt=""
							src={icon.chatWhite}
							layout="fixed"
							width={20}
							height={20}
						/>
					</div>
				)}

				{is_mb === true ? (
					<div onTouchStart={() => router.push('/')} className={`${style.btn2} ${style.buttons}`}>
						<ImageComponent
							type="ICON"
							alt=""
							src={icon.homeWhite}
							layout="fixed"
							width={20}
							height={20}
						/>
					</div>
				) : (
					<div onClick={() => router.push('/')} className={`${style.btn2} ${style.buttons}`}>
						<ImageComponent
							type="ICON"
							alt=""
							src={icon.homeWhite}
							layout="fixed"
							width={20}
							height={20}
						/>
					</div>
				)}

				<div className={style.floating_button}>
					<div className={style.plus}>
						<ImageComponent type="ICON" alt="" src={img.beautyx} layout="fill" />
					</div>
					<div className={style.edit}>
						<ImageComponent type="ICON" alt="" src={icon.xWhite} layout="fill" />{' '}
					</div>
				</div>
			</div>
		</div>
	)
}
