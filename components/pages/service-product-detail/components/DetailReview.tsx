import React from 'react'
import { IOrganization } from '../../../../interfaces'
import { ISerProCommon } from '../../../../interfaces/ser-pro-common'
import Comment from "../../../comment"

import style from '../detail.module.css'

interface DetailReviewProps {
	org: IOrganization,
	detail: ISerProCommon
}

export function DetailReview(props: DetailReviewProps) {
	const {org, detail} = props;
	let type
	if(detail.type === "SERVICE") type="SERVICE"
	if(detail.type === "PRODUCT") type="PRODUCT"
	return (
		<div className={style.detail_review}>
			<Comment
				commentable_type={type}
				commentable_id={detail.id}
				org_id={org.id}
			/>
		</div>
	)
}
