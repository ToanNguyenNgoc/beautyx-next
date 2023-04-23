import { ButtonLoading } from '@/components/layout'
import { useSwrInfinite } from '@/context/hooks'
import { orderParams } from '@/context/query-params'
import { IOrderV2 } from '@/interfaces/orderv2'
import React from 'react'

import style from '../../acc.module.css'
import { OrderItem } from '../index'

export function OrderPaid() {
	const { resData, totalItem, onLoadMore, isValidating } = useSwrInfinite('/orders', {
		...orderParams,
		'filter[status]': 'PAID',
	})
	const orders: IOrderV2[] = resData
	const onViewMore = () => {
		if (resData.length >= 15 && resData.length < totalItem) {
			onLoadMore()
		}
	}
	return (
		<div>
			<ul className={style.order_list_cnt}>
				{orders.map((item, index) => (
					<li className={style.order_item_cnt} key={index}>
						<OrderItem order={item} />
					</li>
				))}
			</ul>
			<div className={style.order_bot}>
				{resData.length >= 15 && resData.length < totalItem && (
					<ButtonLoading title="Xem thêm" loading={isValidating} onClick={onViewMore} />
				)}
			</div>
		</div>
	)
}
