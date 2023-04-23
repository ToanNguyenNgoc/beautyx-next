import { ImageComponent } from '@/components/layout'
import { useDeviceMobile } from '@/context/hooks'
import icon from '@/src/constants/icon'
import { Dialog } from '@mui/material'
import React, { useState } from 'react'

import style from '../org-detail.module.css'
interface IProps {
	item: any
	chooseThumb: any
}
export function OrgGalleriesImgItem(props: IProps) {
	const { item, chooseThumb } = props
	const [open, setOpen] = useState(false)
	const IS_MB = useDeviceMobile()

	// let body
	// 	try {
	// 		const cmt = JSON.parse(`${comment?.body}`)
	// 		body = {
	// 			text: cmt?.text,
	// 			image_url: cmt?.image_url,
	// 		}
	// 	} catch (error) {
	// 		body = {
	// 			text: comment?.body,
	// 			image_url: '',
	// 		}
	// 	}

	return (
		<>
			<div onClick={() => setOpen(true)} className={style.org_masory_item}>
				<img src={item?.image_url} alt="" />
			</div>
			<Dialog open={open} fullScreen={IS_MB} onClose={() => setOpen(false)}>
				<div className={style.full_img_cnt}>
					<div className={style.wrap_head}>
						<div
							style={IS_MB ? { backgroundColor: 'black' } : {}}
							className={style.galleries_mb_head}
						>
							<button className={style.galleries_mb_close} onClick={() => setOpen(false)}>
								<ImageComponent
									alt=""
									layout="fixed"
									objectFit="cover"
									src={icon.closeCircleWhite}
									width={24}
									height={24}
									type="ICON"
								/>
							</button>
							<span className={style.galleries_mb_title_item}>{chooseThumb?.name}</span>
						</div>
					</div>
					{/* {body.image_url?.length > 0 && (
						<img className="full-img-cnt__img" src={body.image_url} alt="" />
					)} */}
					{item?.image_url && (
						<img className={style.full_img_cnt_img} src={item?.image_url} alt="" />
					)}
					{/* {comment && (
						<div className="full-img-cnt__de">
							<div className="flex-row full-img-cnt__de-info">
								<div className="avatar">
									<span>{comment?.user?.fullname?.slice(0, 1) || 'K'}</span>
								</div>
								<span className="full-name">{comment?.user?.fullname || 'Khách'}</span>
								<span className="create">{formatDate(comment?.created_at)}</span>
							</div>
							<span className="full-img-cnt__de-text">{body.text}</span>
						</div>
					)} */}
				</div>
			</Dialog>
		</>
	)
}
