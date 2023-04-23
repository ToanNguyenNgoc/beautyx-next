import ComboOrgItem from '@/components/combo-org-item'
import EmptyRes from '@/components/EmptyRes'
import { LoadingList, LoadingOrgGrid } from '@/components/loading'
import { useDeviceMobile, useSwrInfinite } from '@/context/hooks'
import { comboOrgParams } from '@/context/query-params'
import { Combo } from '@/interfaces/combo'
import { IOrganization } from '@/interfaces/organization'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import style from '../org-detail.module.css'

export function OrgCombos({ org }: { org: IOrganization }) {
	const is_mb = useDeviceMobile()
	const { resData, totalItem, onLoadMore } = useSwrInfinite(
		`/organizations/${org.id}/treatment_combo`,
		{
			...comboOrgParams,
		}
	)
	const onViewMore = () => {
		if (resData.length >= 15 && resData.length < totalItem) {
			onLoadMore()
		}
	}
	return (
		<div className={style.org_combos_cnt}>
			{totalItem === 0 && <EmptyRes title="Không có combo phù hợp!" />}
			<InfiniteScroll dataLength={resData.length} hasMore={true} next={onViewMore} loader={<></>}>
				<ul className={style.org_combo_cnt_list}>
					{resData.map((item: Combo, index: number) => (
						<li key={index} className={style.org_services_list_item}>
							<ComboOrgItem org={org} combo={item} />
						</li>
					))}
				</ul>
			</InfiniteScroll>
			{resData.length < totalItem ? (
				is_mb === false ? (
					<LoadingOrgGrid rowItem={6} />
				) : (
					<LoadingList />
				)
			) : (
				<></>
			)}
		</div>
	)
}
