import * as React from 'react'
import style from '../discount-detail.module.css'
export interface IDetailDisReviewProps {}

export function DetailDisReview(props: IDetailDisReviewProps) {
	return (
		<div className={style.detail_review}>
			<h2 className={style.detail_title}>Đánh giá</h2>
		</div>
	)
}
