/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useEffect, useState } from 'react'
import style from './ServicePromo.module.css'
import Link from 'next/link'
import icon from '../../src/constants/icon'
// import formatPrice, { formatSalePriceService } from '../../src/utils/formatPrice'
// import { formatDistance } from '../../src/utils/format'
import Image from 'next/image'
import { directUrlService, directUrlProduct } from '../../context/direct-url'
import { ImageComponent } from '../layout'
import LinearDeterminate from '../linear-progress'
import {formatDistance} from "@/src/utils/format"
import formatPrice, { formatSalePriceService } from '@/src/utils/formatPrice'

// interface IProps {
// 	item: any
// 	changeStyle?: boolean
// 	hideLoad?: boolean
// 	onBlurInput?: () => void
// }

function ServicePromoItem(props: any) {
	const { item, changeStyle, hideLoad, onBlurInput } = props
	const [load, setLoad] = useState(false)
	const serviceSaleSpecial = formatSalePriceService(item.special_price, item?.special_price_momo)
	const onLoad = useCallback(() => {
		if (!hideLoad) setLoad(true)
		if (onBlurInput) onBlurInput()
	}, [])
	const detail = {
		...item,
		name: item.service_name ?? item.product_name,
		id: item.service_id ?? item.product_id,
		old_price: item.price ?? item.retail_price,
	}

	return (
		<>
			{load && <LinearDeterminate />}
			<Link
				href={
					item.product_name
						? directUrlProduct(detail.name, detail.id, detail.org_id)
						: directUrlService(detail.name, detail.id, detail.org_id)
				}
			>
				<a
					onClick={onLoad}
					className={changeStyle ? style.ser_pro_item_change : style.ser_pro_item}
				>
					<div className={changeStyle ? style.ser_img_cnt_change : style.ser_img_cnt}>
						<ImageComponent
							src={item.image_url ?? item.org_image}
							alt=""
							layout="responsive"
							type="IMG"
							width={'100%'}
							height={'100%'}
						/>
						<div className={style.ser_promo}>
							{detail.discount_percent > 0 && (
								<div className={style.ser_promo__percent}>
									Giảm {Math.round(detail?.discount_percent)}%
								</div>
							)}
							<div className={style.ser_promo__bot}>
								<div className={style.ser_promo__bot_start}>
									<ImageComponent
										src={icon.star}
										alt="icon"
										type="ICON"
										layout="fixed"
										width={16}
										height={16}
									/>
									{detail.rating === 5 ? 5 : `4.${detail?.rating}`}
								</div>
							</div>
						</div>
					</div>
					<div className={style.ser_pro_item__cnt}>
						<span className={style.ser_name}>{detail?.name}</span>
						<div className={style.ser_price}>
							{serviceSaleSpecial > 0 ? (
								<>
									<span className={style.ser_price_special}>
										{' '}
										{formatPrice(serviceSaleSpecial)}đ
									</span>
									<span className={style.ser_price_old}>{formatPrice(detail?.old_price)}đ</span>
								</>
							) : (
								<span className={style.ser_price_special} style={{ color: 'var(--purple)' }}>
									{formatPrice(detail?.old_price)}đ
								</span>
							)}
						</div>
						{detail._geoDistance ? (
							<div className="flex-row ser-distance">
								<div></div>
								<span>
									Khoảng cách
									{': '}
									{formatDistance(detail?._geoDistance)}
								</span>
							</div>
						) : (
							<></>
						)}
						<div className={style.ser_org_address}>
							<div className={style.ser_org_address_icon}>
								<ImageComponent
									src={icon.mapPinRed}
									alt="icon"
									type="ICON"
									layout="fixed"
									width={14}
									height={14}
								/>
							</div>
							<p className={style.ser_org_address_p}>
								{detail?.org_district_name},{detail?.org_province_name}
							</p>
						</div>
					</div>
				</a>
			</Link>
		</>
	)
}

export default ServicePromoItem
