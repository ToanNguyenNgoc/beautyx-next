import React from 'react'
import { IITEMS_DISCOUNT, IDiscountPar } from '@/interfaces/discount'
import formatPrice from '@/src/utils/formatPrice'
import { DISCOUNT_TYPE } from '@/src/utils/formatRouterLink/fileType'
import icon from '@/src/constants/icon'
import style from './discount-item.module.css'
import Link from 'next/link'
import {  formatRouterLinkDiscount } from '@/context/direct-url'
import { ImageComponent } from '../layout'

interface IDiscountItemChild {
	discount: IDiscountPar
	item: IITEMS_DISCOUNT
}

function DiscountItem(props: IDiscountItemChild) {
	const { item, discount } = props
	const image_url = item?.productable.image_url ?? item?.organization.image_url
	return (
		<Link href={formatRouterLinkDiscount(discount, item)}>
			<a className={style.homeDiscountItem}>
				<div className={style.discountImg}>
					<ImageComponent
						src={image_url}
						alt="image"
						type="IMG"
						layout="responsive"
						width={'100%'}
						height={'100%'}
					/>
				</div>
				<div className={style.discountDetail}>
					<span className={style.discountTitle}>
						{item.productable.service_name ?? item.productable.product_name}
					</span>
					<div className={style.discountWrapPrice}>
						<span className={style.discountSpecialPrice}>
							{discount.discount_type === DISCOUNT_TYPE.FINAL_PRICE.key
								? `${formatPrice(discount.discount_value)}đ`
								: `${formatPrice(item.view_price)}đ`}
						</span>
						<span className={style.discountOdlPrice}>
							{formatPrice(item?.productable.price || item?.productable.retail_price)}đ
						</span>
					</div>
					<div className={style.discountAddressWrap}>
						<div className={style.iconMap}>
							<ImageComponent
								src={icon.pinMapRed}
								alt="icon"
								type="ICON"
								layout="fixed"
								width={10}
								height={10}
							/>
						</div>
						<span className={style.discountAddress}>{item?.organization.full_address}</span>
					</div>
					<div className={style.discountLimitBar}>
						<div
							style={
								!discount?.total || discount?.total === discount?.used
									? { width: '100%' }
									: {
											width: `${(discount?.used / discount?.total) * 100}%`,
									  }
							}
							className={style.discountLimitBarUser}
						></div>
						<span className={style.discountLimitBarNum}>
							{discount?.total ? `Đã bán ${discount.used}/${discount.total}` : 'Đang mở'}
						</span>
					</div>
				</div>
			</a>
		</Link>
	)
}

export default DiscountItem
