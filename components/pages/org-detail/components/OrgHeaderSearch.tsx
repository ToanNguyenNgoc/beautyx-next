import style from '../org-detail.module.css'
import React from 'react'
import { OrgDealHot } from './OrgDealHot'
import useSWR from 'swr'
import { IOrganization } from '@/interfaces/organization'
import { useSwr } from '@/context/hooks'
import { Service } from '@/interfaces/service'
import ServiceOrgItem from '@/components/service-org-item'
import { Product } from '@/interfaces/product'
import ProductOrgItem from '@/components/product-org-item'
import EmptyRes from '@/components/EmptyRes'
interface IProps {
	orgSearchCntRef: any
	keyword: string
	org: IOrganization
	setKeyword: any
}
export default function OrgHeaderSearch(props: IProps) {
	const { orgSearchCntRef, org, keyword, setKeyword } = props
	let condition = false
	if (org && keyword !== '') condition = true
	const params = {
		'filter[keyword]': keyword,
		limit: 4,
	}
	const services = useSwr(`/organizations/${org.id}/services`, condition, params).responseArray
	const products = useSwr(`/organizations/${org.id}/products`, condition, params).responseArray
	const getValueRecomment = (item: string) => {
		setKeyword(item)
	}

	return (
		<div ref={orgSearchCntRef} className={style.mb_org_search_cnt}>
			<div className={style.mb_org_search_wrap}>
				{keyword.length === 0 ? (
					<>
						<span className={style.mb_org_search_text}>Từ khóa được tìm nhiều nhất</span>
						<div className={style.mb_org_search_tags}>
							<span onClick={() => getValueRecomment('Massager')}>Massage</span>
							<span onClick={() => getValueRecomment('Trị mụn')}>Trị mụn</span>
							<span onClick={() => getValueRecomment('Chống lão hóa')}>Chống lão hóa</span>
						</div>
						<OrgDealHot org={org} />
					</>
				) : (
					<div className={style.mb_org_search_result}>
						{products.length !== 0 || services.length !== 0 ? (
							<>
								{services.length > 0 && (
									<>
										<div className={style.org_deal_hot__section_title}>Dịch vụ</div>
										<ul className={style.mb_org_list}>
											{services.map((item: Service, index: number) => (
												<li key={index}>
													<ServiceOrgItem org={org} service={item} />
												</li>
											))}
										</ul>
									</>
								)}

								{products.length > 0 && (
									<>
										<div
											style={{ borderTop: '1px solid #ccc', paddingTop: '16px' }}
											className={style.org_deal_hot__section_title}
										>
											Sản phẩm
										</div>
										<ul className={style.mb_org_list}>
											{products.map((item: Product, index: number) => (
												<li key={index}>
													<ProductOrgItem org={org} product={item} />
												</li>
											))}
										</ul>
									</>
								)}
							</>
						) : (
							<>
								<EmptyRes title={'Không có sản phẩm dịch vụ nào phù hợp !'} />
								<div className={style.btn_back_org}>
									<button className={style.back_org} onClick={() => setKeyword('')}>
										<span>Quay lại</span>
									</button>
								</div>
							</>
						)}
					</div>
				)}
			</div>
		</div>
	)
}
