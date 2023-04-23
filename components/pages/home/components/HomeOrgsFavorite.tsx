import HomeSectionHead from '@/components/homeSectionHead'
import OrgItem from '@/components/org-item'
import { IOrganization } from '@/interfaces/organization'
import React from 'react'
import style from '../home.module.css'

interface IHomeOrgsFavoriteProps {
	orgs: IOrganization[]
}

export function HomeOrgsFavorite(props: IHomeOrgsFavoriteProps) {
	const { orgs } = props
	return (
		<div className={style.province}>
			<HomeSectionHead title="Địa điểm được yêu thích" />
			<div className={style.home_orgs_wrap}>
				<ul className={style.home_favorite__list}>
					{orgs.map((item: IOrganization, index: number) => (
						<li key={index} className={style.home_favorite__item}>
							<OrgItem org={item} />
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
