import React, { useState } from 'react'
import style from '../order.module.css'
import { Alert, Snackbar } from '@mui/material'
import { useRouter } from 'next/router'
import { IOrganization } from '@/interfaces/index'
import { useDeviceMobile, useSwr } from '@/context/hooks'
import { ISerProCommon } from '@/interfaces/ser-pro-common'
import formatPrice from '@/src/utils/formatPrice'
import { ButtonAddCart } from '@/components/pages/service-product-detail'
import { ButtonLoading, ImageComponent } from '@/components/layout'

export interface IOrderProductItemProps {
	data: any
	org: IOrganization,
	type: "SERVICE" | "PRODUCT" | "COMBO"
}

export function OrderDetailItem(props: IOrderProductItemProps) {
	const { data, org, type } = props
	const router = useRouter()
	const is_mb = useDeviceMobile()
	const item = data.productable
	const [openNoti, setOpenNoti] = useState({
		open: false,
		title: '',
	})
	let condition = false
	if (item?.id && org) {
		condition = true
	}
	let API_URL = ""
	if (type === "SERVICE") API_URL = `/organizations/${org?.id}/services/${item.id}`
	if (type === "PRODUCT") API_URL = `/organizations/${org?.id}/products/${item.id}`
	if (type === "COMBO") API_URL = `/organizations/${org?.id}/treatment_combo/${item.id}`

	const { response } = useSwr(API_URL, condition)

	const dataItem: ISerProCommon = {
		...response,
		type: type,
		name: response?.service_name ?? response?.product_name ?? response?.name,
		sale_price: response?.special_price,
		old_price: response?.price,
	}
	const onCheckConditionAddCart = () => {
		let condition = true
		if (!org?.is_momo_ecommerce_enable) {
			condition = false
			return setOpenNoti({
				open: true,
				title: "Hiện tại cửa hàng này không còn bán Online!"
			})
		}
		if (!dataItem.is_momo_ecommerce_enable || !response) {
			condition = false
			return setOpenNoti({
				open: true,
				title: "Hiện tại cửa Sản phẩm/ dịch vụ không còn bán Online!"
			})
		}
		return condition
	}
	const handleAddCart = () => {
		onCheckConditionAddCart()
	}
	const handleGotoDetail = () => {
		const condition = onCheckConditionAddCart()
		if (condition) {
			//
		}
	}

	return (
		<>
			<Snackbar
				open={openNoti.open}
				autoHideDuration={4000}
				onClose={() => setOpenNoti({ ...openNoti, open: false })}
				anchorOrigin={
					is_mb === false
						? { vertical: 'top', horizontal: 'right' }
						: { vertical: 'bottom', horizontal: 'right' }
				}
			>
				<Alert
					onClose={() => setOpenNoti({ ...openNoti, open: false })}
					severity="warning"
					sx={{ width: '100%' }}
				>
					{openNoti.title}
				</Alert>
			</Snackbar>
			<div className={style.item_img}>
				<ImageComponent
					type="IMG"
					src={item?.image ? item?.image_url : org?.image_url}
					layout="responsive"
					width={'100%'}
					height={'100%'}
					alt="image-item"
				/>
			</div>
			<div className={style.item_cnt}>
				<div className={style.item_cnt_top}>
					<div className={style.item_top_left}>
						<div className={style.item_cnt_name}>
							{item?.service_name || item?.product_name || item?.name}
						</div>
						<div className={style.item_cnt_name_org}>{org?.name}</div>
					</div>
					<div className={style.item_top_right}>x {data?.quantity}</div>
				</div>
				<div className={style.item_cnt_bot}>
					{data.discount_value > 0 ? (
						<div className={style.price_wrap_item}>
							<span className={style.item_bot_price}>
								{formatPrice(item?.price - data?.discount_value)}đ
							</span>
							<span className={style.item_bot_old_price}>{formatPrice(item?.price)}</span>
						</div>
					) : (
						<span className={style.item_bot_price}>{formatPrice(data?.base_price)}đ</span>
					)}
					<div className={style.item_bot_btn}>
						<div className={style.item_bot_btn_seemore}>
							<ButtonLoading onClick={() => handleGotoDetail()} title="Xem chi tiết" />
						</div>
						<div className={style.item_bot_btn_preorder}>
							{
								condition ?
									<div onClick={() => router.push('/cart')} className={style.btn_add_cart}>
										<ButtonAddCart
											img={false}
											title={'Đặt lại'}
											item={dataItem}
											org={org}
											quantity={1}
										/>
									</div>
									:
									<ButtonLoading onClick={() => handleAddCart()} title="Đặt lại" />
							}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
