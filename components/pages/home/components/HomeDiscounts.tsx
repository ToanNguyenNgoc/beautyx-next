/* eslint-disable jsx-a11y/anchor-is-valid */
import DiscountItem from '@/components/discount-item'
import { DISCOUNT_TYPE } from '@/context/type/discount-type'
import { IDiscountPar, IITEMS_DISCOUNT } from '@/interfaces/discount'
import { Container } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import style from '../home.module.css'

interface IProps {
	discounts: IDiscountPar[]
}

export function HomeDiscounts(props: IProps) {
	const { discounts } = props
	return (
		<div className={style.discount_cnt}>
			<Container>
				<div className={style.home_discounts__title}>
					<span>Khuyến mãi HOT</span>
					<Link href="/giam-gia">
						<a>Xem thêm {'>>'}</a>
					</Link>
				</div>
				<div className={style.homeDiscountWrap}>
					<ul className={style.homeDiscountList}>
						{discounts
							.filter(
								(i: IDiscountPar) =>
									i.items.length > 0 &&
									(i.discount_type === DISCOUNT_TYPE.PRODUCT.key ||
										i.discount_type === DISCOUNT_TYPE.FINAL_PRICE.key)
							)
							.slice(0, 12)
							.map((discount: IDiscountPar, index: number) => (
								<div key={index}>
									{discount.items.map((item: IITEMS_DISCOUNT, i: number) => (
										<li className={style.homeDiscountListItem} key={i}>
											<DiscountItem discount={discount} item={item} />
										</li>
									))}
								</div>
							))}
					</ul>
				</div>
			</Container>
		</div>
	)
}
