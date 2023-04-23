import React from 'react'
import { useTrans, imageProxy } from '../../../../context/hooks'
import { ButtonFavorite } from "../index"
import { ISerProCommon } from '../../../../interfaces/ser-pro-common'
import icon from '../../../../src/constants/icon'
import { IOrganization } from '../../../../src/interface/organization'
import formatPrice from '../../../../src/utils/formatPrice'
import { ImageComponent } from '../../../layout'
import Image from 'next/image'
import style from '../detail.module.css'


interface IProps {
	org: IOrganization
	DETAIL: ISerProCommon
}
export function DetailLeft(props: IProps) {
	const { DETAIL, org } = props
	const percent: any = DETAIL
		? Math.round(100 - (DETAIL?.sale_price / DETAIL?.old_price) * 100)
		: null
	const trans = useTrans()
	return (
		<div className={style.item_detail__left}>
			<div className={style.detail_left__img}>
				<Image
					src={imageProxy(DETAIL?.image_url ? DETAIL.image_url : org?.image_url)}
					alt=""
					layout="responsive"
					width={'100%'}
					height={'100%'}
				/>
			</div>
			{/* detail head mb */}
			<div className={style.detail_mb}>
				<div className={style.detail_mb_top}>
					<p>{DETAIL.name}</p>
					<ButtonFavorite
						type={DETAIL.type === "SERVICE" ? "SERVICE" : "PRODUCT"}
						is_icon={true}
						org_id={org.id} id={DETAIL.id}
					/>
				</div>

				{DETAIL?.duration !== 0 && DETAIL.type === 'SERVICE' && (
					<div className={style.detail_mb_mid}>
						<ImageComponent
							src={icon.alarmClock}
							alt=""
							layout="fixed"
							width={20}
							height={20}
							type="ICON"
						/>
						<span>{DETAIL?.duration} phút</span>
					</div>
				)}
				<div className={style.detail_mb_bot}>
					{DETAIL?.sale_price > 0 && (
						<div className={style.detail_mb_bot_percent}>
							<span> {`${trans.detail_item.off} ${percent}`}%</span>
						</div>
					)}
					<div className={style.detail_mb_bot_price}>
						{DETAIL?.sale_price > 0 ? (
							<>
								<span className={style.detail_mb_bot_specialPrice}>
									{formatPrice(DETAIL?.sale_price)}đ
								</span>
								<span className={style.detail_mb_bot_oldPrice}>
									{formatPrice(DETAIL?.old_price)}đ
								</span>
							</>
						) : (
							<span className={style.detail_mb_bot_specialPrice}>
								{formatPrice(DETAIL?.old_price)}đ
							</span>
						)}
					</div>
				</div>
			</div>
			{/* close dedtail head mb */}
		</div>
	)
}
