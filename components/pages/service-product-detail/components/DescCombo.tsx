import React from 'react'
import ProductOrgItem from '../../../product-org-item'
import ServiceOrgItem from '../../../service-org-item'
import { IOrganization } from '../../../../src/interface/organization'
import style from '../detail.module.css'
interface IProps {
	org: IOrganization
	combo: any
}
export function DescCombo(props: IProps) {
	const { combo, org } = props
	const productList = combo?.products
	const serviceList = combo?.services
	return (
		<div className={style.combo_desc}>
			<p className={style.combo_description}>
				Combo bao gồm :{` ${serviceList?.length > 0 ? serviceList?.length : '0'} dịch vụ`}
				{productList?.length > 0 && ` và ${productList?.length} sản phẩm`}
				{serviceList?.map((item: any, index: number) => (
					<li key={index}>
						<span>{item.service_name}</span>
					</li>
				))}
				{productList?.map((item: any, index: number) => (
					<li key={index}>
						<span>{item.product_name}</span>
					</li>
				))}
			</p>

			{serviceList?.length > 0 && (
				<div className={style.combo_desc_wrap}>
					<div className={style.combo_desc_title}>Dịch vụ {`(${serviceList?.length})`}</div>
					<ul className={style.combo_desc_list}>
						{serviceList?.map((item: any, index: number) => (
							<li key={index}>
								<ServiceOrgItem service={item} org={org} />
							</li>
						))}
					</ul>
				</div>
			)}

			{productList?.length > 0 && (
				<div className={style.combo_desc_wrap}>
					<div className={style.combo_desc_title}>Sản phẩm {`(${productList?.length})`}</div>
					<ul className={style.combo_desc_list}>
						{productList?.map((item: any, index: number) => (
							<li key={index}>
								<ProductOrgItem product={item} org={org} />
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}
