import { Dialog, Slide } from '@mui/material'
import * as React from 'react'
import style from '../order.module.css'
import { useRouter } from 'next/router'
import { TransitionProps } from '@mui/material/transitions'
import { OrderDetailItem } from './OrderDetailItem'
import { IOrganization } from '@/interfaces/index'
import { IOrderV2, ITems } from '@/interfaces/orderv2'
import { ORDER_STATUS, TYPE_MODEL } from '@/context/type'
import { useDeviceMobile, useSwr, useTrans } from '@/context/hooks'
import { directUrlOrg } from '@/context/direct-url'
import { ButtonLoading, ImageComponent } from '@/components/layout'
import icon from '@/src/constants/icon'
import formatDate from '@/src/utils/formatDate'
import formatPrice from '@/src/utils/formatPrice'

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction={'left'} ref={ref} {...props} />
})
export interface IOderDetailProps {
	open: boolean
	setOpen: (open: boolean) => void
	org: IOrganization
	order: IOrderV2
	countItem: any
}

const getItemOrder = (order: IOrderV2) => {
	const products = order.items.filter((item: ITems) => item.productable_type === TYPE_MODEL.PRODUCT)
	const services = order.items.filter((item: ITems) => item.productable_type === TYPE_MODEL.SERVICE)
	const combos = order.items.filter((item: ITems) => item.productable_type === TYPE_MODEL.COMBO)
	return { products, services, combos }
}

export function OrderDetail(props: IOderDetailProps) {
	const { open, setOpen, org, order, countItem } = props
	const trans = useTrans()
	const { locale } = useRouter()
	const router = useRouter()
	const is_mb = useDeviceMobile()
	const handleGotoDetail = () => {
		directUrlOrg(org?.subdomain, locale)
	}
	const checkStt = ORDER_STATUS.find((item: any) => item.key === order.status)
	const { products, services, combos } = getItemOrder(order)
	let conditionOrg = false
	if (org.id && open) conditionOrg = true
	const org_detail = useSwr(`/organizations/${org.id}`, conditionOrg).response

	return (
		<Dialog
			TransitionComponent={is_mb === true ? Transition : undefined}
			fullScreen={is_mb} //
			open={open}
			onClose={() => setOpen(false)}
		>
			<div className={style.header_order_detail_mb}>
				<div className={style.header_order_img} onClick={() => setOpen(false)}>
					<ImageComponent
						layout="fixed"
						src={icon.chevronLeft}
						alt="icon-back"
						width={24}
						height={24}
						type="ICON"
					/>
				</div>
				<div className={style.header_order_title}>Chi tiết đơn hàng</div>
			</div>
			<div className={style.order_detail_cnt}>
				<div className={style.order_detail_head}>
					<h2 className={style.order_head_title}>{trans.order.order_de}</h2>
					<div className={style.order_head_date}>
						<div className={style.order_head_day}>
							<span>{trans.booking.date} Order:</span> <h4>{formatDate(order?.created_at)}</h4>
						</div>
						<div className={style.order_head_time}>
							<span>{trans.order.time}:</span> <h4>{order?.created_at?.split(' ')[1]}</h4>
						</div>
					</div>
				</div>

				{/* body */}
				<div className={style.order_detail_body}>
					{/* total */}
					<div className={style.order_detail_under_head}>
						<div className={style.order_detail_total}>
							<span>{trans.pr.total}: </span>
							<h4>
								{formatPrice(order?.payment_gateway?.amount)}đ ({countItem} item)
							</h4>
						</div>
						<div
							style={{ backgroundColor: `${checkStt?.color}` }}
							className={style.order_detail_status}
						>
							<span>{checkStt?.text}</span>
						</div>
					</div>
					{/* close total */}

					{/* org */}
					<div className={style.order_detail_org}>
						<div className={style.detail_org_img}>
							<ImageComponent
								type="IMG"
								layout="responsive"
								alt="img-org"
								width={'100%'}
								height={'100%'}
								src={org?.image_url}
							/>
						</div>

						<div className={style.detail_org_cnt}>
							<span className={style.detail_org_name}>{org?.name}</span>
							<span className={style.detail_org_name}>{org?.full_address}</span>
							<div className={style.detail_org_btn}>
								<ButtonLoading onClick={() => handleGotoDetail()} title="Xem chi tiết" />
							</div>
						</div>
					</div>
					{/* <OrderTab org={org} order={order} open={open} /> */}
					{
						open &&
						<>
							{
								services.length > 0 &&
								<div className={style.section_item}>
									<span className={style.section_item_title}>Dịch vụ</span>
									<ul className={style.tab_product_list}>
										{services?.map((item: any, index: number) => (
											<li key={index} className={style.tab_product_item}>
												<OrderDetailItem type="SERVICE" data={item} org={org_detail} />
											</li>
										))}
									</ul>
								</div>
							}
							{
								products.length > 0 &&
								<div className={style.section_item}>
									<span className={style.section_item_title}>Sản phẩm</span>
									<ul className={style.tab_product_list}>
										{products?.map((item: any, index: number) => (
											<li key={index} className={style.tab_product_item}>
												<OrderDetailItem type="PRODUCT" data={item} org={org_detail} />
											</li>
										))}
									</ul>
								</div>
							}
							{
								combos.length > 0 &&
								<div className={style.section_item}>
									<span className={style.section_item_title}>Combos</span>
									<ul className={style.tab_product_list}>
										{combos.map((item: any, index: number) => (
											<li key={index} className={style.tab_product_item}>
												<OrderDetailItem type="COMBO" data={item} org={org_detail} />
											</li>
										))}
									</ul>
								</div>
							}
						</>
					}
				</div>
			</div>
		</Dialog>
	)
}
