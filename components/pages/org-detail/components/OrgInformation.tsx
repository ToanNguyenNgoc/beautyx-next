import React, { useRef, useState } from 'react'
import {Dialog} from "@mui/material"

import style from '../org-detail.module.css'
import { IOrganization } from '@/interfaces/organization'
import { useTrans } from '@/context/hooks'
import { extraOrgTimeWork } from '../../service-product-detail/extraOrg'
import { ButtonBack, ButtonLoading, ImageComponent, MapOrgChange } from '@/components/layout'
import icon from '@/src/constants/icon'

interface IProps {
	org: IOrganization
}
const day = new Date()
const today = day.getDay() + 1
export function OrgInformation(props: IProps) {
	const { org } = props
	const [openMap, setOpenMap] = useState(false)
	const trans = useTrans()
	const orgTimes = extraOrgTimeWork(org?.opening_time)
	const branchesCntRef = useRef<any>()
	const sliderRef = useRef<any>()
	const [branch, setBranch] = useState<any>(org?.branches[0] ?? org)
	const onDropBranches: any = () => {
		branchesCntRef.current.classList.toggle(style.branches_list_cnt__drop)
	}
	const handleSetBranch = (item: any, index: number) => {
		setBranch(item)
		onDropBranches()
		sliderRef?.current?.slickGoTo(index + 1)
	}
	return (
		<div className={style.org_info_cnt}>
			{/* org left */}
			<div className={style.org_info_left}>
				{/* map */}
				<div className={style.detail_map}>
					<div className={style.detail_map_btn}>
						<ButtonLoading
							onClick={() => setOpenMap(true)}
							icon={icon.extendWhite}
							iconSize={18}
						/>
					</div>
					{org && <MapOrgChange open={openMap} org={org} />}
					<Dialog
						open={openMap}
						fullScreen
					>
						<div className={style.detail_map_full_cnt}>
							<div className={style.detail_map_full_cnt_back}>
							<ButtonBack onClick={()=>setOpenMap(false)} />
							</div>
						{org && <MapOrgChange org={org} />}
						</div>
					</Dialog>
				</div>
				{/* close map */}

				{/* branch org */}
				{org?.branches?.length > 0 && (
					<div className={style.detail_map_branches}>
						<span className={style.detail_title}>
							{trans.Mer_de.branch} {`(${org?.branches.length > 0 ? org?.branches.length : null})`}
						</span>
						<div ref={branchesCntRef} className={style.branches_list_cnt}>
							<div className={style.icon_drop}>
								<ImageComponent
									type="ICON"
									width={16}
									height={16}
									layout="fixed"
									alt=""
									src={icon.arrowDownPurple}
								/>
							</div>
							<ul>
								<li onClick={onDropBranches}>
									<span>{branch?.full_address}</span>
								</li>
								{org?.branches
									.filter((i: any) => i?.id !== branch?.id)
									.map((item: any, index: number) => (
										<li onClick={() => handleSetBranch(item, index)} key={index}>
											<span>{item?.full_address}</span>
										</li>
									))}
							</ul>
						</div>
					</div>
				)}
				{/* close branch org */}
			</div>
			{/* close org left */}

			{/* org right */}
			<div className={style.org_info_right}>
				{/* time org */}
				<div className={style.detail_org_time}>
					<h2 className={style.detail_title}>{trans.Mer_de.business_hours}</h2>
					<ul className={style.detail_org_time}>
						{orgTimes.map((item: any, index: number) => (
							<li key={index} className={style.detail_org_item}>
								<div className={style.detai_org_time_left}>
									<span style={index + 2 === today ? { color: 'var(--purple)' } : {}}>
										{item.day_week}
									</span>
								</div>
								<div className={style.detail_org_time_right}>
									<span style={index + 2 === today ? { color: 'var(--purple)' } : {}}>
										{item?.from_time_opening} - {item?.to_time_opening}
									</span>
								</div>
							</li>
						))}
					</ul>
				</div>
				{/* close time org */}

				{/* about org */}
				<div className={style.detail_about_me}>
					<h2 className={style.detail_title}>{trans.Mer_de.about}</h2>
					<div className={style.detail_information}>
						{org.description ||
							`Thành lập năm 2018, ${org?.name} là thương hiệu uy tín hàng
                    đầu trong ngành công nghệ spa, với thiết bị máy móc hiện đại
                    đội ngũ nhân sự có tay nghề được đào tạo bài bản`}
					</div>
				</div>
				{/* close about org */}
			</div>
			{/* close org right */}
		</div>
	)
}
