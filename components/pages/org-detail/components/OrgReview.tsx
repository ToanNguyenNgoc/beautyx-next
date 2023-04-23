import { IOrganization } from '@/interfaces/organization'
import React from 'react'
import Comment from '@/components/comment'

import style from "../org-detail.module.css"

interface IProps {
	org: IOrganization
}

export function OrgReview(props: IProps) {
	const { org } = props
	return (
		<div className={style.org_review}>
			<Comment
				commentable_type="ORGANIZATION"
				commentable_id={org.id}
				org_id={org.id}
			/>
		</div>
	)
}
