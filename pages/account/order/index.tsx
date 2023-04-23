import React from 'react'
import { AccountLayout } from '../../../components/layout'
import { NextPageWithLayout } from '../../../models'
import AccPageTitle from '../../../components/pages/account/AccPageTitle'
import { OrderAll, OrderPaid } from '../../../components/pages/account/acc-order'
import { directUrlAccount } from '../../../context/direct-url'
import style from '../acc.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Order: NextPageWithLayout = () => {
	const { query } = useRouter()
	let tab:string=""
	if (query.tab) tab = query.tab.toString()
	const tabs = [
		{ text: 'Đã thanh toán', t: 'paid', url: directUrlAccount().order_paid },
		{ text: 'Tất cả', t: 'all', url: directUrlAccount().order_all },
	]
	return (
		<>
			<AccPageTitle title="Lịch sử đơn hàng" />
			<div className={style.order_tab_cnt}>
				{tabs.map((i) => (
					<Link key={i.t} href={i.url}>
						<a
							style={
								tab === i.t
									? {
											borderBottom: 'solid 2px var(--purple)',
											color: 'var(--purple)',
									  }
									: {}
							}
							className={style.order_tab_item}
						>
							{i.text}
						</a>
					</Link>
				))}
			</div>
			<div className={style.order_body}>
				{tab === 'paid' && <OrderPaid />}
				{tab === 'all' && <OrderAll />}
			</div>
		</>
	)
}

Order.Layout = AccountLayout

export default Order
