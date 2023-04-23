/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import React from 'react'
import style from './service.module.css'
import { ImageComponent } from '../layout'
import { IOrganization } from '@/interfaces/organization'
import { Service } from '@/interfaces/service'
import formatPrice, { formatSalePriceService } from '@/src/utils/formatPrice'
import { directUrlService } from '@/context/direct-url'
import icon from '@/src/constants/icon'

interface IProps {
	org: IOrganization
	service: Service
}

function ServiceOrgItem(props: IProps) {
	const { service, org } = props
	const serviceSaleSpecial = formatSalePriceService(
		service?.special_price,
		service?.special_price_momo
	)
	return (
		<>
			<Link href={directUrlService(service.service_name, service.id, org?.id)}>
				<a className={style.org_special_item}>
					<div className={style.org_special_item__img}>
						<ImageComponent
							src={service?.image ? service.image_url : org.image_url}
							alt="image"
							type="IMG"
							layout="responsive"
							width={'100%'}
							height={'100%'}
						/>
						<div className={style.org_special_item__rate}>
							<div className={style.rate_item}>
								<ImageComponent
									src={icon.cartCheckPurple}
									alt="icon"
									type="ICON"
									layout="fixed"
									width={14}
									height={14}
								/>
								<span className={style.rate_item__count}>{service?.bought_count}+</span>
							</div>
						</div>
					</div>
					<div className={style.org_special_item__detail}>
						<div className={style.item_name}>
							<span>{service.service_name}</span>
						</div>
						<div className={style.item_price}>
							{serviceSaleSpecial > 0 ? (
								<>
									<span className={style.item_price__special}>
										{formatPrice(serviceSaleSpecial)}đ
									</span>

									<span className={style.item_price__old}>{formatPrice(service?.price)}đ</span>
								</>
							) : (
								<span className={style.item_price__special}>{formatPrice(service?.price)}đ</span>
							)}
						</div>
					</div>
				</a>
			</Link>
		</>
	)
}

export default ServiceOrgItem
