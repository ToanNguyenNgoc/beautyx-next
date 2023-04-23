import { ImageComponent } from '@/components/layout'
import { useTrans } from '@/context/hooks'
import { IOrganization } from '@/interfaces/organization'
import { ISerProCommon } from '@/interfaces/ser-pro-common'
import icon from '@/src/constants/icon'
import formatPrice from '@/src/utils/formatPrice'
import * as React from 'react'
import { ButtonFavorite } from '../../service-product-detail'
import style from '../discount-detail.module.css'
export interface IDetailDisLeftProps {
	detail: ISerProCommon
	org: IOrganization
}

export function DetailDisLeft(props: IDetailDisLeftProps) {
	const { detail, org } = props
	const percent: any = detail
		? Math.round(100 - (detail?.sale_price / detail?.old_price) * 100)
		: null
	const trans = useTrans()
	return (
		<>
			<div className={style.item_detail__left}>
				<div className={style.detail_left__img}>
					<ImageComponent
						src={detail?.image_url ? detail.image_url : org?.image_url}
						alt=""
						type="IMG"
						layout="responsive"
						width={'100%'}
						height={'100%'}
					/>
				</div>
				{/* detail head mb */}
				<div className={style.detail_mb}>
					<div className={style.detail_mb_top}>
						<p>{detail.name}</p>
						<ButtonFavorite type="SERVICE" is_icon={true} org_id={org.id} id={detail.id} />
					</div>

					{detail?.duration !== 0 && detail.type === 'SERVICE' && (
						<div className={style.detail_mb_mid}>
							<ImageComponent
								src={icon.alarmClock}
								alt=""
								layout="fixed"
								width={20}
								height={20}
								type="ICON"
							/>
							<span>{detail?.duration} phút</span>
						</div>
					)}
					<div className={style.detail_mb_bot}>
						{detail?.sale_price > 0 && (
							<div className={style.detail_mb_bot_percent}>
								<span> {`${trans.detail_item.off} ${percent}`}%</span>
							</div>
						)}
						<div className={style.detail_mb_bot_price}>
							{detail?.sale_price > 0 ? (
								<>
									<span className={style.detail_mb_bot_specialPrice}>
										{formatPrice(detail?.sale_price)}đ
									</span>
									<span className={style.detail_mb_bot_oldPrice}>
										{formatPrice(detail?.old_price)}đ
									</span>
								</>
							) : (
								<span className={style.detail_mb_bot_specialPrice}>
									{formatPrice(detail?.old_price)}đ
								</span>
							)}
						</div>
					</div>
				</div>
				{/* close dedtail head mb */}
			</div>
		</>
	)
}
