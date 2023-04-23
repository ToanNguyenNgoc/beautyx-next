import { Rating } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import useTrans from '../../../../context/hooks/useTrans'
import { ISerProCommon } from '../../../../interfaces/ser-pro-common'
import icon from '../../../../src/constants/icon'
import { IOrganization } from '../../../../src/interface/organization'
import formatPrice from '../../../../src/utils/formatPrice'
import OrgCardDetail from '../../../org-card-detail'
import style from '../detail.module.css'
import useDeviceMobile from '../../../../src/utils/useDeviceMobile'
import imageProxy from '../../../../context/hooks/image-proxy.ts'
import { extraOrgTimeWork } from '../extraOrg'
import { ButtonBookNow, ButtonAddCart, ButtonFavorite } from '../index'
interface IProps {
	org: IOrganization
	DETAIL: ISerProCommon
}
export function DetailRight(props: IProps) {
	const { org, DETAIL } = props
	const trans = useTrans()
	const [quantity, setQuantity] = useState<number>(1)
	const onDesQuantity = () => {
		if (quantity > 1) setQuantity(quantity - 1)
	}
	const is_mb = useDeviceMobile()
	const now = new Date()
	const today = now.getDay() + 1
	const orgTimes: any = org && extraOrgTimeWork(org?.opening_time)
	const time_works_today = orgTimes?.find((item: any, index: number) => index + 2 === today)
	return (
		<div className={style.item_detail__right}>
			{/* head */}
			<div className={style.detail_right__head}>
				<div className={style.detail_right__head_img}>
					<Image
						src={imageProxy(DETAIL.image_url ?? org.image_url)}
						layout="responsive"
						width={'100%'}
						height={'100%'}
						alt={DETAIL.name}
					/>
				</div>
				<div className={style.detail_right__head_info}>
					<div className={style.detail_right__org}>
						<span>{org.name}</span>
						{time_works_today?.status && (
							<>
								{time_works_today?.status === 'on' ? (
									<span style={{ color: 'var(--green)' }}>{trans.detail_item.open}</span>
								) : (
									<span style={{ color: '#ee6955' }}>{trans.detail_item.close}</span>
								)}
							</>
						)}
					</div>
					<div className={style.detail_right__name}>
						<p>{DETAIL.name}</p>

						<ButtonFavorite
							type={DETAIL.type === 'SERVICE' ? 'SERVICE' : 'PRODUCT'}
							org_id={org.id}
							id={DETAIL.id}
							is_icon={true}
						/>
					</div>
					<div className={style.detail_right__evaluate}>
						<div className={style.evaluate_item}>
							<Rating size="small" readOnly name="simple-controlled" value={DETAIL?.rating} />
							{1 > 0 ? (
								<p>{`(${1} ${trans.detail_item.evaluate})`}</p>
							) : (
								<p>{trans.detail_item.not_evaluate}</p>
							)}
						</div>
						<div className={style.evaluate_item__wrap}>
							<div className={style.evaluate_item}>
								<Image layout="fixed" width={20} height={20} src={icon.Favorite} alt="" />
								<p>{DETAIL.favorites_count}</p>
							</div>
							<div className={style.evaluate_item}>
								<Image layout="fixed" width={20} height={20} src={icon.ShoppingCartSimple} alt="" />
								<p>
									{trans.detail_item.sold} {DETAIL.bought_count}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* body */}
			<div className={style.detail_right__body}>
				<div className={style.detail_right__info}>
					<div className={style.detail_price}>
						{DETAIL.sale_price > 0 && (
							<span className={style.detail_price_percent}>
								Giảm {100 - Math.round((DETAIL.sale_price / DETAIL.old_price) * 100)}%
							</span>
						)}
						<div className={style.detail_price_p}>
							{DETAIL.sale_price > 0 && <span>{formatPrice(DETAIL.sale_price)}đ</span>}
							<span>{formatPrice(DETAIL.old_price)}đ</span>
						</div>
					</div>
					{DETAIL.type === 'SERVICE' && (
						<div className={style.detail_right_duration}>
							<p>Thời gian:</p>
							<div className={style.detail_duration_wrap}>
								<Image src={icon.alarmClock} layout="fixed" alt="" width={20} height={20} />
								<p> {DETAIL?.duration} phút</p>
							</div>
						</div>
					)}
				</div>

				{/* tag org */}
				{is_mb !== true && (
					<div className={style.detail_right__org_card}>
						<OrgCardDetail org_id={org?.id} />
					</div>
				)}
				{/* close tag org */}
			</div>

			{quantity > 1 && DETAIL && DETAIL.type === 'FINAL_PRICE' && (
				<div className={style.detail_right__warn}>{trans.cart.limit_item_discount}</div>
			)}
			{/* bottom */}
			<div className={style.detail_right__bottom}>
				<div className={style.detail_right__quantity}>
					<div className={style.bottom_quantity_text}>Số lượng:</div>
					<div className={style.bottom_quantity_wrap}>
						<button onClick={() => onDesQuantity()} className={style.quantity_btn}>
							<p>-</p>
						</button>
						<input disabled className={style.quantity_input} type="text" value={quantity} />
						<button onClick={() => setQuantity(quantity + 1)} className={style.quantity_btn}>
							<p>+</p>
						</button>
					</div>
				</div>
				<div className={style.detail_right__button_group}>
					<ButtonBookNow />
					<ButtonAddCart item={DETAIL} org={org} quantity={1} />
				</div>
			</div>
		</div>
	)
}
