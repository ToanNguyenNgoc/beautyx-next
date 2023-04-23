import { useTrans } from '@/context/hooks'
import * as React from 'react'
import style from '../discount-detail.module.css'
export interface IDetailDisPolicyProps {}

export function DetailDisPolicy(props: IDetailDisPolicyProps) {
	const trans = useTrans()
	return (
		<div className={style.detail_Policy}>
			{/* detail policy useguild */}
			<div className={style.detailPolicy_useguild}>
				<div className={style.detailPolicy_useguild_top}>
					<h2 className={style.detail_title}>{trans.detail_item.user_manual}</h2>
					<ul className={style.detailPolicy_useguild_list}>
						<li className={style.detailPolicy_useguild_item}>{trans.detail_item.step_1}</li>
						<li className={style.detailPolicy_useguild_item}>{trans.detail_item.step_2}</li>
						<li className={style.detailPolicy_useguild_item}>{trans.detail_item.step_3}</li>
					</ul>
				</div>
				<div className={style.detailPolicy_useGuild_bot}>
					<p>{trans.detail_item.expiry_date}</p>
				</div>
			</div>
			{/* detail policy mid */}
			<div className={style.detailPolicy_rules}>
				<h2 className={style.detail_title}>{trans.detail_item.general_terms}</h2>
				<span>{trans.detail_item.confirm}</span>
				<span>{trans.detail_item.confirm_desc}</span>
				<span>{trans.detail_item.cancellation_policy}</span>
				<span>{trans.detail_item.policy_desc}</span>
			</div>
		</div>
	)
}
