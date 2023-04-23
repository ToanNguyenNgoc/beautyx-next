import React from 'react'
import style from './loading.module.css'
export function LoadingList() {
	return (
		<div className={style.loading_cnt}>
			<ul className={style.loading_list}>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
					<li className={style.loading_item}></li>
				))}
			</ul>
		</div>
	)
}
