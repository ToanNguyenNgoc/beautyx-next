import { Drawer } from '@mui/material'
import * as React from 'react'
import { DetailDisRight } from '../index'
import style from '../discount-detail.module.css'
import { IOrganization } from '@/interfaces/organization'
import { ISerProCommon } from '@/interfaces/ser-pro-common'
import { IDiscountPar } from '@/interfaces/discount'
import { useTrans } from '@/context/hooks'
import { ButtonBookNow, ButtonBuyNow } from '../../service-product-detail'
import { ImageComponent } from '@/components/layout'
import icon from '@/src/constants/icon'

export interface IDetailDisBottomMBProps {
	org: IOrganization
	detail: ISerProCommon
	discount: IDiscountPar
	isConfirm?: boolean
	open: any
	setOpen: any
}

export function DetailDisBottomMB(props: IDetailDisBottomMBProps) {
	const { org, detail, setOpen, open, discount, isConfirm } = props
	const trans = useTrans()
	return (
		<div className={style.service_detail_bottom}>
			{detail?.is_momo_ecommerce_enable && org?.is_momo_ecommerce_enable ? (
				<>
					{detail?.type === 'PRODUCT' ? <ButtonBuyNow /> : <ButtonBookNow />}

					<button
						onClick={() => {
							setOpen({ NOW: false, open: true })
						}}
						className={style.button_add_cart}
					>
						<ImageComponent
							alt=""
							type="ICON"
							src={icon.ShoppingCartSimpleWhite}
							layout="fixed"
							width={24}
							height={24}
						/>
						<span>Thêm vào giỏ hàng</span>
					</button>

					{/* drawer detail mb */}
					<Drawer
						open={open.open}
						anchor="bottom"
						onClose={() =>
							setOpen({
								...open,
								open: false,
							})
						}
					>
						<div className={style.active_mb}>
							<div className={style.service_detail}>
								<DetailDisRight discount={discount} detail={detail} org={org} />
							</div>
						</div>
					</Drawer>
					{/* close drawer detail mb */}
				</>
			) : (
				<span className={style.detail_right_no}>{trans.se.off_service}</span>
			)}
		</div>
	)
}
