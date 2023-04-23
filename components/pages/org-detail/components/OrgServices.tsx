/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import style from '../org-detail.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { IOrganization } from '@/interfaces/organization'
import { IStore } from '@/redux/store/store.interface'
import { useDeviceMobile, useSwr, useSwrInfinite } from '@/context/hooks'
import { Category } from '@/interfaces/category'
import { cateOrgParams, serviceOrgParams } from '@/context/query-params'
import { onChooseCateService, onEmptyCateServices } from '@/redux/slices/org-slice/orgChildSlice'
import EmptyRes from '@/components/EmptyRes'
import { Service } from '@/interfaces/service'
import ServiceOrgItem from '@/components/service-org-item'
import { LoadingList, LoadingOrgGrid } from '@/components/loading'

export function OrgServices({ org }: { org: IOrganization }) {
	const { org_id, cate_id } = useSelector((state: IStore) => state.ORG_CHILD.CATE_SERVICES)
	const dispatch = useDispatch()
	const is_mb = useDeviceMobile()
	const cates: Category[] = useSwr(
		`/organizations/${org.id}/service_categories`,
		org,
		cateOrgParams
	).responseArray
	const { resData, totalItem, onLoadMore } = useSwrInfinite(`/organizations/${org.id}/services`, {
		...serviceOrgParams,
		'filter[service_group_id]': cate_id,
	})
	const onViewMore = () => {
		if (resData.length >= 15 && resData.length < totalItem) {
			onLoadMore()
		}
	}
	const onChooseCate = (cate_id: number) => {
		dispatch(
			onChooseCateService({
				org_id: org.subdomain,
				cate_id: cate_id,
			})
		)
	}
	useEffect(() => {
		dispatch(onEmptyCateServices(org.subdomain))
	}, [])
	return (
		<div className={style.org_services_cnt}>
			{/* service left */}
			{cates && cates.filter((e: any) => e.services_count > 0).length > 0 && (
				<div className={style.org_services_cnt__left}>
					<ul className={style.cates_list}>
						<li
							onClick={() =>
								dispatch(
									onChooseCateService({
										cate_id: 0,
										org_id: org.subdomain,
									})
								)
							}
							style={
								cate_id === 0
									? {
											color: '#fff',
											backgroundColor: 'var(--purple)',
									  }
									: {}
							}
							className={style.cate_list__item}
						>
							<span
								style={cate_id === 0 ? { color: '#fff' } : {}}
								className={style.cate_list__item_title}
							>
								Tất cả
							</span>
						</li>
						{cates
							.filter((i) => i.services_count > 0)
							.map((cate, index) => (
								<li
									onClick={() => onChooseCate(cate.id)}
									key={index}
									className={style.cate_list__item}
									style={
										cate_id === cate.id
											? {
													color: '#fff',
													backgroundColor: 'var(--purple)',
											  }
											: {}
									}
								>
									<span
										style={cate_id === cate.id ? { color: '#fff' } : {}}
										className={style.cate_list__item_title}
									>
										{cate.name}
									</span>
								</li>
							))}
					</ul>
				</div>
			)}
			{/* end service left */}

			{/* service right */}
			<div
				style={
					cates && cates.filter((e: any) => e.services_count > 0).length > 0 && is_mb === false
						? { width: '83.3%' }
						: { width: '100%' }
				}
				className={style.org_services_cnt__right}
			>
				{totalItem === 0 && <EmptyRes title="Không có dịch vụ phù hợp!" />}
				<InfiniteScroll dataLength={resData.length} hasMore={true} next={onViewMore} loader={<></>}>
					<ul
						style={
							cates && cates.filter((e: any) => e.services_count > 0).length > 0 && is_mb === false
								? { gridTemplateColumns: 'repeat(5, 1fr)' }
								: { gridTemplateColumns: 'repeat(6, 1fr)' }
						}
						className={style.org_services_cnt__right_list}
					>
						{resData.map((item: Service, index: number) => (
							<li key={index} className={style.org_services_list_item}>
								<ServiceOrgItem org={org} service={item} />
							</li>
						))}
					</ul>
				</InfiniteScroll>
				{/* loading  */}
				{resData.length < totalItem ? (
					is_mb === false ? (
						cates && cates.filter((e: any) => e.services_count > 0).length > 0 ? (
							<LoadingOrgGrid rowItem={5} />
						) : (
							<LoadingOrgGrid rowItem={6} />
						)
					) : (
						<LoadingList />
					)
				) : (
					<></>
				)}
				{/* end loading */}
			</div>
			{/* end service right */}
		</div>
	)
}
