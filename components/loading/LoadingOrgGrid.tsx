import React from 'react'
import style from './loading.module.css'

interface IProps {
	rowItem?: number
}
export function LoadingOrgGrid(props: IProps) {
	const { rowItem } = props
	return (
		<ul
			style={
				rowItem
					? { gridTemplateColumns: `repeat(${rowItem},1fr)` }
					: { gridTemplateColumns: 'repeat(5,1fr)' }
			}
			className={style.item_in_org_list}
		>
			{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((i, index) => (
				<li key={index}>
					<div className={style.item_in_org}>
						<div className={style.item_in_org_img}></div>
						<div className={style.item_in_org_de}>
							<div className={style.item_in_org_de_name}></div>
							<div className={style.item_in_org_de_price}></div>
						</div>
					</div>
				</li>
			))}
		</ul>
	)
}
