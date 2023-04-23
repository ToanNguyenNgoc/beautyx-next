import React, {  useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Tab } from '@mui/material'
import {
	OrgDealHot,
	OrgProducts,
	OrgServices,
	OrgCombos,
	OrgInformation,
	OrgReview,
	OrgGalleries,
} from '../index'
import style from '../org-detail.module.css'
import { IOrganization } from '@/interfaces/organization'
import { useDeviceMobile, useTrans } from '@/context/hooks'
import { IStore } from '@/redux/store/store.interface'
import { onActiveTab } from '@/redux/slices/org-slice/orgSlice'
interface IProps {
	org: IOrganization
	galleries: any
}
export function OrgTab(props: IProps) {
	const { org, galleries } = props
	const is_mb = useDeviceMobile()
	const { tab } = useSelector((state: IStore) => state.ORG)
	const dispatch = useDispatch()
	const trans = useTrans()
	let tabs = [
		{ id: '1', title: 'Deal Hot' },
		{ id: '2', title: trans.Mer_de.services },
		{ id: '3', title: trans.Mer_de.products },
		{ id: '4', title: 'Combo' },
		{ id: '5', title: is_mb ? trans.app.details : trans.pr.merchant_detail },
		{ id: '6', title: trans.Mer_de.feedback },
		{ id: '7', title: trans.Mer_de.galleries },
	]
	let refReview = useRef<any>()
	const handleChange = (event: React.SyntheticEvent, value: any) => {
		dispatch(onActiveTab(value))
		let top
		switch (value) {
			case '5':
				top = is_mb && 0
				break
			case '6':
				top = refReview?.current?.offsetTop + 180
				break
			default:
				break
		}
		if (is_mb) {
			window.scrollTo({
				top: top,
				behavior: 'smooth',
			})
		}
	}
	const onSwitchTab = (tabId: string) => {
		switch (tabId) {
			case '1':
				return <OrgDealHot org={org} />
			case '2':
				return <OrgServices org={org} />
			case '3':
				return <OrgProducts org={org} />
			case '4':
				return <OrgCombos org={org} />
			case '5':
				return <OrgInformation org={org} />
			case '6':
				return <OrgReview org={org} />
			case '7':
				return <OrgGalleries galleries={galleries} org={org} />
			// case "4":
			//     return (
			//         <div className="org-information-cnt">
			//             <OrgInformation refMap={refMap} org={org} />
			//             <OrgReviews refReview={refReview} org={org} />
			//         </div>
			//     );
			// case "5":
			//     return (
			//         <div className="org-information-cnt">
			//             <OrgInformation refMap={refMap} org={org} />
			//             <OrgReviews refReview={refReview} org={org} />
			//         </div>
			//     );
			// case "6":
			//     return <OrgGalleries />;
		}
	}

	return (
		<>
			<div className={style.org_container}>
				<div className={style.org_container__tab_cnt}>
					<TabContext value={tab}>
						<TabList onChange={handleChange}>
							{tabs.map((item, i) => (
								<Tab key={i} label={item.title} value={item.id} />
							))}
						</TabList>
						<TabPanel value={tab}>{onSwitchTab(tab)}</TabPanel>
					</TabContext>
				</div>
			</div>
		</>
	)
}
