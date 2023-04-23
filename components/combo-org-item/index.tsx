import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import style from '../service-org-item/service.module.css'
import { IOrganization } from '../../interfaces'
import { imageProxy } from '../../context/hooks'
import { Combo } from '../../interfaces/combo'
import { directUrlCombo } from '../../context/direct-url'
import formatPrice, { formatSalePriceService } from '@/src/utils/formatPrice'

interface IComboOrgItemProps {
	org: IOrganization
	combo: Combo
}

export default function ComboOrgItem({ org, combo }: IComboOrgItemProps) {
	const [load, setLoad] = React.useState(false)
	const image_url = imageProxy(combo?.image_url ?? org?.image_url)
	const comboSalePrice = formatSalePriceService(combo.price, combo?.special_price_momo)
	const onLoad = React.useCallback(() => {
		setLoad(true)
	}, [])
	return (
		<>
			{/* {load && <LinearDeterminate />} */}
			<Link href={directUrlCombo(combo?.name, combo?.id, org.id)}>
				<a onClick={onLoad} className={style.org_special_item}>
					<div className={style.org_special_item__img}>
						<Image src={image_url} layout="responsive" width={'100%'} height={'100%'} alt="" />
					</div>
					<div className={style.org_special_item__detail}>
						<span className={style.item_name}>{combo.name}</span>
						<div className={style.item_price}>
							{comboSalePrice > 0 && comboSalePrice !== combo?.use_value ? (
								<>
									<span className={style.item_price__special}>{formatPrice(comboSalePrice)}đ</span>
									<span className={style.item_price__old}>{formatPrice(combo?.use_value)}đ</span>
								</>
							) : (
								<span className={style.item_price__special}>{formatPrice(combo?.use_value)}đ</span>
							)}
						</div>
					</div>
				</a>
			</Link>
		</>
	)
}
