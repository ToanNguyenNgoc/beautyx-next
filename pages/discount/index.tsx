import React, { useEffect, useRef, useState } from 'react'
import { NextPageWithLayout } from '../../models'
import { MainLayout } from '../../components/layout'
import { useRouter } from 'next/router'
import { discountDetailParams } from '../../context/query-params'
import { IDiscountPar } from '../../interfaces/discount'
import { useSwr, useTrans } from '../../context/hooks'
import { DetailBottomMB, HeaderDetail } from '../../components/pages/service-product-detail'
import style from './discount.module.css'
import { Container, Tab } from '@mui/material'
import Seo from '../../components/seo'
import useDeviceMobile from '../../src/utils/useDeviceMobile'
import {
	DetailDisLeft,
	DetailDisReview,
	DetailDisRight,
	DetailDisOrg,
	DetailDisPolicy,
	DetailDisBottomMB,
} from '../../components/pages/discount-detail/index'
import {
	handleChangeScroll,
	handleScroll,
} from '../../components/pages/service-product-detail/onScrollChange'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import {getPriceDiscount} from "../../context/functions/discount"

const DiscountDetail: NextPageWithLayout = () => {
	const router = useRouter()
	const { query } = useRouter()
	const trans = useTrans()
	let discount_id
	let service_id:any
	let org_id
	if (query.id && query.id !== '') discount_id = query.id
	if (query.sid && query.sid !== '') service_id = query.sid
	if (query.org_id && query.org_id !== '') org_id = query.org_id
	const is_mobile = useDeviceMobile()
	const { isValidating, response } = useSwr(
		`/discounts/${discount_id}`,
		discount_id,
		discountDetailParams
	)

	// call api org
	const org = useSwr(`/organizations/${query.org_id}`, query?.org_id).response
	// close call api org

	const discount: IDiscountPar = response
	// check type discount
	let typeDiscount
	if (discount?.discount_type === 'PRODUCT') {
		typeDiscount = 'PRODUCT'
	} else {
		typeDiscount = 'FINAL_PRICE'
	}
	// close check type discount

	let detail
	if (discount) {
		const {old_price, sale_price} = getPriceDiscount(service_id, discount)
		const productable: any = discount?.items?.find(
			(item) => item.productable_id == service_id
		)?.productable
		detail = {
			...productable,
			name: productable?.service_name ?? productable?.product_name,
			type: "SERVICE",
			is_favorite: false,
			sale_price: sale_price,
			old_price: old_price,
		}
	}
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
	})
	if (!discount || !detail || !org) {
		return <div>Loading</div>
	}
	console.log(detail)
	return (
		<>
			<HeaderDetail />
			<Seo
				title={`${detail.name} - ${org.name} | BeautyX`}
				description={`Trải nghiệm thanh toán, đặt hẹn và mua sản phẩm Online dịch vụ, sản phẩm ${detail.name} tại ${org.name}`}
				url=""
			/>
			<Container>
				<div className={style.item_detail}>
					{/* detail head */}
					<div className={style.item_detail__head}>
						{/* detail left */}
						<DetailDisLeft detail={detail} org={org} />
						{/* end detail left */}

						{/* detail right */}
						{is_mobile !== true && (
							<DetailDisRight detail={detail} org={org} discount={discount}/>
						)}
						{/* end detail right */}
					</div>
					{/* end detail head */}

					{/* detail body */}
					<div className={style.service_detail_body}>
						{/* tab */}
						<div className={style.service_detail_tab}>
							<TabContext value={value}>
								<TabList onChange={handleChange}>
									{tabs.map((item: any, i: number) => (
										<Tab key={i} label={item.title} value={item.id} />
									))}
								</TabList>
								<div className={style.service_detail_tabitem}>
									{/* description */}
									<TabPanel value={value}>
										{/* {service?.video && <ServiceVideo service={service} />} */}
										<div ref={refDesc} className={style.service_detail_description}>
											<>
												{detail?.description.length === 0 ? (
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
															{detail?.description.length > 150 && readMore !== true
																? detail?.description.slice(0, 150)
																: detail?.description}
															{/* dots */}
															{detail?.description.length > 150 && readMore === false ? '...' : ' '}
															{/* close dot  */}
														</span>{' '}
														<span
															style={
																readMore === true
																	? { display: 'block', textAlign: 'center', marginTop: '8px' }
																	: {}
															}
														>
															{detail?.description && detail?.description.length > 150 && (
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
										</div>
									</TabPanel>

									{/* comment */}
									<TabPanel value={value}>
										<div ref={refReview} className={style.service_detail_comment}>
											<DetailDisReview />
											{/* <Review
												comments={COMMENTS.comments}
												totalItem={COMMENTS.totalItem}
												commentable_type={'SERVICE'}
												id={ORG.org?.id}
												page={COMMENTS.page}
												detail_id={service?.id}
												openSeeMoreCmt={handleOpenSeemoreCmt}
											/> */}
											{/* {COMMENTS.comments && COMMENTS.comments.length >= 8 ? (
												<div
													style={{
														justifyContent: 'center',
													}}
													onClick={() => {
														setOpenAllCmt(true)
													}}
													className="seemore-cmt"
												>
													<p>{t('detail_item.see_more')}</p>
												</div>
											) : null} */}
											{/* <ReviewsContainer
												open={openAllCmt}
												setOpen={setOpenAllCmt}
												comments={COMMENTS.comments}
												org_id={ORG.org?.id}
												totalItem={COMMENTS.totalItem}
												page={COMMENTS.page}
												commentable_type="SERVICE"
											/> */}
										</div>
									</TabPanel>

									{/* org */}
									<TabPanel value={value}>
										<div ref={refMap} className={style.detail_org}>
											<DetailDisOrg org={org} />
										</div>
									</TabPanel>

									{/* policy */}
									<TabPanel value={value}>
										<div ref={refPolicy}>
											<DetailDisPolicy />
										</div>
									</TabPanel>
								</div>
							</TabContext>
						</div>
						{/* end tab */}
					</div>
					{/* end detail body */}

					{/* detail bottom buttom add cart */}
					<DetailDisBottomMB
						discount={discount}
						org={org}
						detail={detail}
						setOpen={setOpen}
						open={open}
					/>
					{/* close detail bottom buttom add cart */}
				</div>
			</Container>
		</>
	)
}

DiscountDetail.Layout = MainLayout
export default DiscountDetail
