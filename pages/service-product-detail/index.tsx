import React, { useRef, useState, useEffect } from 'react'
import { MainLayout } from '../../components/layout'
import { NextPageWithLayout } from '../../models'
import orgApi from '../../api-client/organizationApi'
import serviceApi from '../../api-client/serviceApi'
import productsApi from '../../api-client/productApi'
import { Container, Tab } from '@mui/material'
import Seo from '../../components/seo'
import style from './detail.module.css'
import { formatSalePriceService } from '../../src/utils/formatPrice'
import useTrans from '../../context/hooks/useTrans'
import { ISerProCommon } from '../../interfaces/ser-pro-common'
import {
	DetailPolicy,
	DescCombo,
	Recomment,
	DetailBottomMB,
	DetailLeft,
	DetailRight,
	HeaderDetail,
	DetailOrg,
	DetailReview,
} from '../../components/pages/service-product-detail'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import comboApi from '../../api-client/comboApi'
import {
	handleChangeScroll,
	handleScroll,
} from '../../components/pages/service-product-detail/onScrollChange'
import { useDeviceMobile, useSwr } from '../../context/hooks'
import { GetServerSidePropsContext } from 'next'

const ServiceProductDetail: NextPageWithLayout = (props: any) => {
	const { org_ssg, detail_ssg } = props
	const trans = useTrans()
	const is_mobile = useDeviceMobile()

	const { response } = useSwr(`/organizations/${org_ssg.id}`, org_ssg.id)
	const org = { ...org_ssg, ...response }
	let API_URL = ""
	const params = {
		include: "category|favorites_count",
		append: "is_favorite|rating",
	};
	if (detail_ssg.type === "SERVICE") API_URL = `/organizations/${org_ssg.id}/services/${detail_ssg.id}`
	if (detail_ssg.type === "PRODUCT") API_URL = `/organizations/${org_ssg.id}/products/${detail_ssg.id}`
	if (detail_ssg.type === "COMBO") API_URL = `/organizations/${org_ssg.id}/treatment_combos/${detail_ssg.id}`

	const detail = useSwr(API_URL, (org_ssg.id && detail_ssg.id), params)?.response
	const productSalePrice = formatSalePriceService(detail?.special_price, detail?.special_price_momo)
	const DETAIL: ISerProCommon = {
		...detail_ssg,
		...detail,
		sale_price: productSalePrice,
		old_price: detail?.price ?? detail?.retail_price,
	}

	//handle UI
	const [value, setValue] = useState<string>('1')
	let tabs = [
		{ id: '1', title: trans.pr.description },
		{ id: '2', title: trans.Mer_de.feedback },
		{ id: '3', title: trans.my_ser.business },
		{ id: '4', title: trans.se.instructions_terms },
	]
	let refDesc = useRef<any>()
	let refReview = useRef<any>()
	let refMap = useRef<any>()
	let refPolicy = useRef<any>()
	const scrollMap = refMap?.current?.offsetTop
	const scrollDesc = refDesc?.current?.offsetTop
	const scrollReview = refReview?.current?.offsetTop
	const scrollPolicy = refPolicy?.current?.offsetTop
	const [readMore, setReadMore] = useState(false)
	const [open, setOpen] = useState({
		NOW: true,
		open: false,
	})
	const handleSeemoreText = () => {
		setReadMore(!readMore)
	}

	// handle onclick active menu
	const handleChange = (event: React.SyntheticEvent, value: any) => {
		const top = handleChangeScroll(
			is_mobile,
			value,
			setValue,
			refDesc,
			refReview,
			refMap,
			refPolicy
		)
		window.scrollTo({
			top: top,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		window.addEventListener('scroll', () =>
			handleScroll(is_mobile, setValue, scrollReview, scrollDesc, scrollMap, scrollPolicy)
		)
		return () => {
			window.removeEventListener(
				'scroll',
				() => handleScroll(is_mobile, setValue, scrollReview, scrollDesc, scrollMap, scrollPolicy),
				false
			)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	})
	return (
		<>
			<Seo
				title={`${DETAIL.name} - ${org.name} | BeautyX`}
				description={`Trải nghiệm thanh toán, đặt hẹn và mua sản phẩm Online dịch vụ, sản phẩm ${DETAIL.name} tại ${org.name}`}
				url=""
				image_url={DETAIL.image_url}
			/>
			<HeaderDetail />
			<Container>
				<div className={style.item_detail}>
					<div className={style.item_detail__head}>
						<DetailLeft DETAIL={DETAIL} org={org} />
						{is_mobile !== true && <DetailRight DETAIL={DETAIL} org={org} />}
					</div>
					<div className={style.service_detail_body}>
						<div className={style.service_detail_tab}>
							<TabContext value={value}>
								<TabList onChange={handleChange}>
									{tabs.map((item: any, i: number) => (
										<Tab key={i} label={item.title} value={item.id} />
									))}
								</TabList>
								<div className={style.service_detail_tabitem}>
									<TabPanel value={value}>
										<div ref={refDesc} className={style.service_detail_description}>
											{DETAIL.type === 'COMBO' ? (
												<DescCombo org={org} combo={detail} />
											) : (
												<>
													{detail?.description?.length === 0 ? (
														<div className={style.detail_description_updating}>
															<span className={style.detail_description}>
																{trans.pr.description}
																{': '}
																{trans.detail_item.updating}
															</span>
														</div>
													) : (
														<>
															<span className={style.detail_description}>
																{trans.pr.description}:{' '}
																{detail?.description?.length > 150 && readMore !== true
																	? detail?.description.slice(0, 150)
																	: detail?.description}
																{detail?.description?.length > 150 && readMore === false
																	? '...'
																	: ' '}
															</span>{' '}
															<span
																style={
																	readMore === true
																		? { display: 'block', textAlign: 'center', marginTop: '8px' }
																		: {}
																}
															>
																{detail?.description && detail?.description?.length > 150 && (
																	<span onClick={() => handleSeemoreText()}>
																		{readMore === false ? (
																			<span className={style.less_more}>{'Xem thêm >>'}</span>
																		) : (
																			<span className={style.less_more}>Thu gọn &and; </span>
																		)}
																	</span>
																)}
															</span>
														</>
													)}
												</>
											)}
										</div>
									</TabPanel>
									<TabPanel value={value}>
										<div ref={refReview} className={style.service_detail_comment}>
											<DetailReview
												org={org}
												detail={DETAIL}
											/>
										</div>
									</TabPanel>
									<TabPanel value={value}>
										<div ref={refMap} className={style.detail_org}>
											<DetailOrg org={org} />
										</div>
									</TabPanel>
									<TabPanel value={value}>
										<div ref={refPolicy}>
											<DetailPolicy />
										</div>
									</TabPanel>
								</div>
							</TabContext>
						</div>
						{DETAIL.type !== 'COMBO' && <Recomment detail={DETAIL} org={org} />}
					</div>
					<DetailBottomMB org={org} DETAIL={DETAIL} setOpen={setOpen} open={open} />
				</div>
			</Container>
		</>
	)
}
ServiceProductDetail.Layout = MainLayout
export default ServiceProductDetail

export async function getServerSideProps(context: GetServerSidePropsContext) {
	context.res.setHeader('Cache-Control', 's-maxage=30000, stale-while-revalidate=30000')
	let resDetail
	let type
	const org_id = context?.query.org_id
	const sid = context?.query.sid
	const pid = context?.query.pid
	const cid = context?.query.cid
	const resOrg = await orgApi.getOrgById(org_id)
	const org = resOrg?.data.context
	if (sid) {
		let res
		try {
			res = await serviceApi.getDetailById({
				org_id: org_id,
				ser_id: sid,
			})
		} catch (error) {
			res = null
		}
		resDetail = res?.data?.context
		type = 'SERVICE'
	} else if (pid) {
		let res
		try {
			res = await productsApi.getDetailById({
				org_id: org_id,
				id: pid,
			})
		} catch (error) {
			res = null
		}
		resDetail = await res?.data?.context
		type = 'PRODUCT'
	} else if (cid) {
		const res = await comboApi.getComboDetail({
			org_id: org_id,
			com_id: cid,
		})
		resDetail = await res?.data?.context
		type = 'COMBO'
	}
	if (!org || !resDetail) {
		return {
			redirect: {
				destination: '/error',
				permanent: false,
			},
		}
	}

	return {
		props: {
			org_ssg: {
				name: org?.name,
				id: org?.id
			} ?? null,
			detail_ssg:
				{
					id: resDetail?.id,
					type: type,
					name: resDetail?.service_name ?? resDetail?.product_name ?? resDetail.name,
					image_url: resDetail.image_url
				} ?? null,
		},
	}
}
