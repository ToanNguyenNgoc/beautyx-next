import { Drawer } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import useTrans from '../../../../context/hooks/useTrans'
import { IOrganization } from '../../../../interfaces'
import { IDiscountPar } from '../../../../interfaces/discount'
import { ISerProCommon } from '../../../../interfaces/ser-pro-common'
import icon from '../../../../src/constants/icon'
import { ImageComponent } from '../../../layout'
import style from '../detail.module.css'
import { DetailRight, ButtonBookNow, ButtonBuyNow } from '../index'
interface IProps {
	org: IOrganization
	DETAIL: ISerProCommon
	setOpen: any
	open: any
}
export function DetailBottomMB(props: IProps) {
	const { org, DETAIL, setOpen, open } = props
	const trans = useTrans()
	return (
		<div className={style.service_detail_bottom}>
			{DETAIL?.is_momo_ecommerce_enable && org?.is_momo_ecommerce_enable ? (
				<>
					{DETAIL?.type === 'PRODUCT' || DETAIL?.type === 'COMBO' ? (
						<ButtonBuyNow />
					) : (
						<ButtonBookNow />
					)}

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
								<DetailRight DETAIL={DETAIL} org={org} />
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
