import { ImageComponent } from '@/components/layout'
import OrgCardDetail from '@/components/org-card-detail'
import { useDeviceMobile, useTrans } from '@/context/hooks'
import { DISCOUNT_TYPE } from '@/context/type/discount-type'
import { IDiscountPar } from '@/interfaces/discount'
import { IOrganization } from '@/interfaces/organization'
import { ISerProCommon } from '@/interfaces/ser-pro-common'
import icon from '@/src/constants/icon'
import formatPrice from '@/src/utils/formatPrice'
import { Rating } from '@mui/material'
import * as React from 'react'
import { ButtonAddCart, ButtonBookNow, ButtonFavorite } from '../../service-product-detail'
import { extraOrgTimeWork } from '../../service-product-detail/extraOrg'

import style from '../discount-detail.module.css'

export interface IDetailDisRightProps {
	org: IOrganization
	detail: ISerProCommon
	discount?: IDiscountPar
}

export function DetailDisRight(props: IDetailDisRightProps) {
	const { org, detail, discount } = props
	const trans = useTrans()
	const [quantity, setQuantity] = React.useState<number>(1)
	const onDesQuatity = () => {
		if (quantity > 1) setQuantity(quantity - 1)
	}
	const is_mb = useDeviceMobile()
	const now = new Date()
	const today = now.getDay() + 1
	const orgTimes: any = org && extraOrgTimeWork(org?.opening_time)
	const time_works_today = orgTimes?.find((item: any, index: number) => index + 2 === today)
	return (
		<div className={style.item_detail__right_wrap}>
			<div className={style.item_detail__right}>
				{/* head */}
				<div className={style.detail_right__head}>
					<div className={style.detail_right__head_img}>
						<ImageComponent
							src={detail.image_url ?? org.image_url}
							layout="responsive"
							type="IMG"
							width={'100%'}
							height={'100%'}
							alt={detail.name}
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
							<p>{detail.name}</p>

							<ButtonFavorite type="SERVICE" org_id={org.id} id={detail.id} is_icon={true} />
						</div>
						<div className={style.detail_right__evaluate}>
							<div className={style.evaluate_item}>
								<Rating size="small" readOnly name="simple-controlled" value={detail?.rating} />
								{1 > 0 ? (
									<p>{`(${1} ${trans.detail_item.evaluate})`}</p>
								) : (
									<p>{trans.detail_item.not_evaluate}</p>
								)}
							</div>
							<div className={style.evaluate_item__wrap}>
								<div className={style.evaluate_item}>
									<ImageComponent
										type="ICON"
										layout="fixed"
										width={20}
										height={20}
										src={icon.Favorite}
										alt=""
									/>
									<p>{detail.favorites_count ? detail.favorites_count : 0}</p>
								</div>
								<div className={style.evaluate_item}>
									<ImageComponent
										type="ICON"
										layout="fixed"
										width={20}
										height={20}
										src={icon.ShoppingCartSimple}
										alt=""
									/>
									<p>
										{trans.detail_item.sold} {detail.bought_count ? detail.bought_count : ''}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* close head */}

				{/* body */}
				<div className={style.detail_right__body}>
					<div className={style.detail_right__info}>
						<div className={style.detail_price}>
							{detail.sale_price > 0 && (
								<span className={style.detail_price_percent}>
									Giảm {100 - Math.round((detail.sale_price / detail.old_price) * 100)}%
								</span>
							)}
							<div className={style.detail_price_p}>
								{detail.sale_price > 0 && <span>{formatPrice(detail.sale_price)}đ</span>}
								<span>{formatPrice(detail.old_price)}đ</span>
							</div>
						</div>
						{detail.type === 'SERVICE' && (
							<div className={style.detail_right_duration}>
								<p>Thời gian:</p>
								<div className={style.detail_duration_wrap}>
									<ImageComponent
										type="ICON"
										src={icon.alarmClock}
										layout="fixed"
										alt=""
										width={20}
										height={20}
									/>
									<p> {detail?.duration} phút</p>
								</div>
							</div>
						)}
					</div>
					{is_mb !== true && (
						<div className={style.detail_right__org_card}>
							<OrgCardDetail org_id={org?.id} />
						</div>
					)}
				</div>
				{/* close body */}

				{/* caculator price */}
				{quantity > 1 && discount?.discount_type === DISCOUNT_TYPE.PRODUCT.key && (
					<div className={style.detail_right_calc}>
						<span className={style.total_title}>{trans.cart.total_payment}:</span>
						<div className={style.total_math}>
							<span>{formatPrice(detail.old_price * quantity)}đ</span>
							<span>-{formatPrice(discount.discount_value)}đ</span>
							<span>{formatPrice(detail.old_price * quantity - discount.discount_value)}đ</span>
						</div>
					</div>
				)}
				{/* close caculator price */}

				{/* text warning limit quantity */}
				{quantity > 1 && discount?.discount_type ===  DISCOUNT_TYPE.PRODUCT.key && (
					<div className={style.detail_right__warn}>{trans.cart.limit_item_discount}</div>
				)}
				{/* close warning limit quantity */}

				{/* bottom */}
				<div className={style.detail_right__bottom}>
					<div className={style.detail_right__quantity}>
						<div className={style.bottom_quantity_text}>Số lượng:</div>
						<div className={style.bottom_quantity_wrap}>
							<button onClick={onDesQuatity} className={style.quantity_btn}>
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
						<ButtonAddCart
							item={detail}
							org={org}
							quantity={quantity}
							discount={discount}
							isConfirm={false}
						/>
					</div>
				</div>
				{/* close bottom */}
			</div>
		</div>
	)
}
