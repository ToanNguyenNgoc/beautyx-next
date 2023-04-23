/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef } from 'react'
import { Container } from '@mui/material'
import Slider from 'react-slick'
import Image from 'next/image'
import { IOrganization } from '@/interfaces/organization'
import { imageProxy, useTrans } from '@/context/hooks'
import { extraOrgTimeWork } from '../../service-product-detail/extraOrg'
import style from '../org-detail.module.css'
import { ImageComponent } from '@/components/layout'
import icon from '@/src/constants/icon'
import { ButtonFavorite } from '../../service-product-detail'

interface IOrgHead {
	org: IOrganization
	galleries: any[]
}

// setting slider
const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	//autoplay: true,
	swipe: true,
	autoplaySpeed: 2000,
	//fade: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				swipe: true,
			},
		},
		{
			breakpoint: 480,
			settings: {
				swipe: true,
				dots: true,
				speed: 100,
			},
		},
	],
}

export function OrgHead(props: IOrgHead) {
	const { galleries, org } = props
	const trans = useTrans()
	// console.log(org, galleries)
	// time works
	const now = new Date()
	const today = now.getDay() + 1
	const orgTimes = extraOrgTimeWork(org?.opening_time)
	const time_works_today: any = orgTimes?.find((item: any, index: number) => index + 2 === today)
	const refListTimeWorks = useRef<any>()
	const handleOpenSelector = () => {
		refListTimeWorks.current.classList.toggle(style.org_time_work_list_active)
	}
	// end time work

	return (
		<div className={style.org_detail}>
			<Container>
				<div className={style.org_detail__cnt}>
					<div
						// onClick={onActiveTabGallery}
						className={style.org_detail__cnt_top}
					>
						<Slider {...settings}>
							{galleries.length === 0 && (
								<div className={style.org_detail__banner_de}>
									<div className={style.org_detail__banner_de__item}>
										<div className={style.back_drop}>
											<Image
												src={imageProxy(org?.image_url)}
												layout="responsive"
												width={'100%'}
												height={'100%'}
												alt="org banners"
												className={style.back_drop_img}
											/>
											<div className={style.banner_item__cnt}>
												<Image src={imageProxy(org?.image_url)} layout="fill" alt="org banners" />
											</div>
										</div>
									</div>
								</div>
							)}
							{galleries.map((item: any, index: number) => (
								<div key={index} className={style.org_detail__banner_de}>
									<div className={style.org_detail__banner_de__item}>
										<div className={style.back_drop}>
											<Image
												src={imageProxy(item?.image_url)}
												layout="responsive"
												width={'100%'}
												height={'100%'}
												alt="org banners"
												className={style.back_drop_img}
											/>
											<div className={style.banner_item__cnt}>
												<Image src={imageProxy(item?.image_url)} layout="fill" alt="org banners" />
											</div>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
					<div className={style.wrap_bot}>
						<div className={style.org_detail__cnt_bot}>
							<div className={style.left}>
								<div className={style.org_detail__info}>
									<div className={style.flexX_gap_8}>
										<div className={style.org_avatar}>
											<ImageComponent
												src={org?.image_url}
												layout="responsive"
												width={'100%'}
												height={'100%'}
												alt={org?.subdomain} type="IMG"
												style={{ borderRadius: '100%' }}
											/>
										</div>
										<div className={style.org_left_detail}>
											<span className={style.org_left_detail__name}>{org?.name}</span>
											<div className={style.org_des_wrap}>
												<div className={style.org_des_cnt}>
													<div className={style.org_left_detail__address}>
														<Image
															src={icon.mapPinRed}
															alt=""
															layout="fixed"
															width={16}
															height={16}
														/>
														<span>{org?.full_address}</span>
													</div>
													<div className={style.org_left_detail__rate}>
														<div className={style.org_left_detail__rate_item}>
															<Image src={icon.star} alt="" layout="fixed" width={16} height={16} />
															<span className="text">4.5</span>
														</div>
														<div className={style.org_left_detail__rate_item}>
															<Image
																src={icon.chatAll}
																alt=""
																layout="fixed"
																width={16}
																height={16}
															/>
															<span className="text">1000</span>
														</div>
														<div className={style.org_left_detail__rate_item}>
															<Image
																src={icon.heart}
																alt=""
																layout="fixed"
																width={16}
																height={16}
															/>
															<span className="text">{org?.favorites_count}</span>
														</div>
													</div>
												</div>
												<div
													onClick={(e) => {
														// handleOpenMap();
														e.preventDefault()
														e.stopPropagation()
													}}
													className={style.re_change_map}
												>
													<Image
														src={icon.mapMarkerOrg}
														alt=""
														layout="fixed"
														width={16}
														height={16}
													/>

													<span className={style.re_change_map_text}>{trans.pr.map}</span>
													{org?.branches?.length > 0 ? (
														<>
															<span className={style.re_change_map_total}>
																{org?.branches?.length} CN
															</span>
														</>
													) : null}
												</div>
											</div>
										</div>
									</div>
									{/* folow - contact */}
									<div className={style.org_mess_flo}>
										<div className={style.org_mess}>
											<ButtonFavorite
												type="ORG"
												org_id={org?.id}
												subdomain={org?.subdomain}
											/>
										</div>
										{/* <div
                                            onClick={() => onOpenChatOrg()}
                                            className="org-flo"
                                        >
                                            <span>Nhắn tin</span>
                                        </div> */}
										<div
											className={style.org_flo}
											onClick={() => {
												// setOpenPopupContact(true)
											}}
										>
											<span> {trans.Mer_de.contact}</span>
										</div>
									</div>
									{/* close folow - contact */}
									<div className={style.org_time_works}>
										<div className={style.org_time_work_left}>
											<Image src={icon.Clock_purple} alt="" layout="fixed" width={16} height={16} />
											<span className={style.time_work_text}>
												{trans.Mer_de.time_work} {time_works_today?.day_week}:
											</span>
										</div>
										<div className={style.org_time_work_right}>
											<div
												onClick={() => handleOpenSelector()}
												className={style.org_time_work_right_list}
											>
												{time_works_today?.from_time_opening} - {time_works_today?.to_time_opening}
												<Image src={icon.arrowDownPurple} alt="" />
											</div>
											{/* selector time_works_today */}
											<ul ref={refListTimeWorks} className={style.org_time_work_list}>
												{orgTimes?.map((item: any, index: number) => (
													<li
														style={
															index + 2 === today
																? {
																	color: 'var(--purple)',
																}
																: {}
														}
														key={index}
													>
														<span>{item.day_week}</span>
														<div className="org-time-list__right">
															{item?.from_time_opening} - {item?.to_time_opening}
														</div>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className={style.right}>
								<ButtonFavorite
									type="ORG"
									org_id={org?.id}
									subdomain={org?.subdomain}
								/>
								{/* <button
									style={
										org?.is_favorite === true
											? {
													backgroundColor: '#e64d4a',
													border: '1px solid #e64d4a',
													color: 'var(--bg-white)',
											  }
											: {}
									}
									// onClick={handleFavoriteOrg}
								>
									{org?.is_favorite === true ? trans.Mer_de.flowing : trans.Mer_de.flow}
								</button> */}
								<br />
								<button
									onClick={() => {
										// setOpenPopupContact(true);
									}}
								>
									{trans.Mer_de.contact}
								</button>
								{/* <button onClick={onOpenChatOrg}>Chat</button> */}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}
