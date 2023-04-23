import { ImageComponent } from '@/components/layout'
import { ORDER_STATUS } from '@/context/type'
import { IOrderV2 } from '@/interfaces/orderv2'
import icon from '@/src/constants/icon'
import formatDate from '@/src/utils/formatDate'
import formatPrice from '@/src/utils/formatPrice'
import React, { useState } from 'react'
import style from '../../acc.module.css'
import { OrderDetail } from '../index'

export function OrderItem({ order }: { order: IOrderV2 }) {
	const countItem = order.items_count
	const [open, setOpen] = useState(false)
	const status = ORDER_STATUS.find(i => i.key === order?.status)
	const handleOpenDetail = () => {
		setOpen(true)
	}
	return (
		<>
			<div className={style.order_item}>
				<div className={style.order_item_head}>
					<div className={style.order_item_head_left}>
						Mã đơn hàng{' '}
						<span>
							#{order?.payment_gateway?.transaction_uuid}-{order?.origin_id}
						</span>
					</div>
					<span onClick={handleOpenDetail} className={style.order_item_head_right}>
						Xem chi tiết
					</span>
				</div>
				<div className={style.order_item_date}>
					<div className={style.order_item_date_left}>
						<ImageComponent
							src={icon.Storefront}
							alt=""
							width={18}
							height={18}
							layout="fixed"
							type="ICON"
						/>
						<span>{order?.organization?.name}</span>
					</div>
					<span className={style.order_item_date_right}>{formatDate(order?.created_at)}</span>
				</div>
				<div className={style.order_item__body}>
					<div className={style.org_img}>
						<ImageComponent
							src={order.organization.image_url}
							layout="responsive"
							alt="org_image"
							width={'100'}
							height={'100%'}
							type="IMG"
						/>
					</div>
					<div className={style.order_item_body_de}>
						<span className={style.org__address}>{order?.organization?.full_address}</span>
						<div className={style.order_price}>
							{order?.amount !== order?.payment_gateway?.amount ? (
								<>
									<span style={{ color: 'var(--text-orange)' }}>
										{formatPrice(order?.payment_gateway?.amount)}đ
									</span>
									<span>{formatPrice(order?.amount)}đ</span>
								</>
							) : (
								<span>{formatPrice(order?.payment_gateway?.amount)}đ</span>
							)}
						</div>
					</div>
				</div>
				<div className={style.order_item__status}>
					<span className={style.order_item__status_left}>
						{order?.items_count} sản phẩm/dịch vụ
					</span>
					<div className={style.order_item__status_right}>
						<span className={style.order_amount}>
							{formatPrice(order?.payment_gateway?.amount)}đ
						</span>
						{
							status &&
							<div style={{ backgroundColor: `${status.color}` }} className={style.status}>
								{status.text}
							</div>
						}
					</div>
				</div>
			</div>
			<OrderDetail
				open={open}
				setOpen={setOpen}
				org={order?.organization}
				order={order}
				countItem={countItem}
			/>
		</>
	)
}
