/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from 'react'
import style from '../service-org-item/service.module.css'
import Link from 'next/link'
import LinearDeterminate from '../linear-progress'
import { Product } from '@/interfaces/product'
import { IOrganization } from '@/interfaces/organization'
import formatPrice, { formatSalePriceService } from '@/src/utils/formatPrice'
import { directUrlProduct } from '@/context/direct-url'
import { ImageComponent } from '../layout'

interface IProps {
	product: Product
	org: IOrganization
}

function ProductOrgItem(props: IProps) {
	const { product, org } = props
	const [load, setLoad] = useState(false)
	const productSalePrice = formatSalePriceService(product.special_price, product.special_price_momo)
	const onLoad = useCallback(() => {
		setLoad(true)
	}, [])
	return (
		<>
			{/* {load && <LinearDeterminate />} */}
			<Link href={directUrlProduct(product.product_name, product.id, org?.id)}>
				<a onClick={onLoad} className={style.org_special_item}>
					<div className={style.org_special_item__img}>
						<ImageComponent
							src={product?.image ? product.image_url : org?.image_url}
							type="IMG"
							layout="responsive"
							width={'100%'} height={'100%'} alt=""
						/>
					</div>
					<div className={style.org_special_item__detail}>
						<div className={style.item_name}>
							<span>{product.product_name}</span>
						</div>
						<div className={style.item_price}>
							{productSalePrice > 0 ? (
								<>
									<span className={style.item_price__special}>
										{formatPrice(productSalePrice)}đ
									</span>
									<span className={style.item_price__old}>
										{formatPrice(product?.retail_price)}đ
									</span>
								</>
							) : (
								<span className={style.item_price__special}>
									{formatPrice(product?.retail_price)}đ
								</span>
							)}
						</div>
					</div>
				</a>
			</Link>
		</>
	)
}

export default ProductOrgItem
