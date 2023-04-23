import React from 'react'
import {useSwr} from '../../../../context/hooks'
import useTrans from '../../../../context/hooks/useTrans'
import { IOrganization } from '../../../../interfaces'
import style from '../detail.module.css'
import { serviceOrgParams, productOrgParams } from '../../../../context/query-params'
import ServiceOrgItem from '../../../service-org-item'
import ProductOrgItem from '../../../product-org-item'
interface IProps {
	org: IOrganization
	detail: any
}
export function Recomment(props: IProps) {
	const { org, detail } = props
	const cate_id = detail?.category?.id
	const trans = useTrans()
	let API_URL=""
	let condition = false
	if (org.id && cate_id) {
		condition = true
	}
	if (detail.type === 'SERVICE') API_URL = `/organizations/${org?.id}/services`
	if (detail.type === 'PRODUCT') API_URL = `/organizations/${org?.id}/products`

	const newServiceOrgParams = {
		...serviceOrgParams,
		'filter[service_group_id]': cate_id,
	}
	const newProductOrgParams = {
		...productOrgParams,
		'filter[product_category_id]': cate_id,
	}
	const { responseArray } = useSwr(
		API_URL,
		condition,
		detail.type === 'SERVICE' ? newServiceOrgParams : newProductOrgParams
	)

	return (
		<>
			{responseArray.length > 0 && (
				<div className={style.recoment}>
					<h2 className={style.detail_title}>
						{detail.type === 'SERVICE'
							? trans.detail_item.similar_service
							: trans.detail_item.similar_product}
					</h2>
					<ul className={style.recoment_list}>
						{responseArray.map((item: any, index: number) => (
							<li key={index}>
								{condition === true && detail.type === 'SERVICE' ? (
									<ServiceOrgItem service={item} org={org} />
								) : (
									<ProductOrgItem product={item} org={org} />
								)}
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	)
}
