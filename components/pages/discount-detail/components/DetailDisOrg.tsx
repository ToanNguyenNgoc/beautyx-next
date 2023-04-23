import { ImageComponent } from '@/components/layout'
import OrgCardDetail from '@/components/org-card-detail'
import { useDeviceMobile, useTrans } from '@/context/hooks'
import { IOrganization } from '@/interfaces/organization'
import icon from '@/src/constants/icon'
import * as React from 'react'
import Slider from 'react-slick'
import { extraOrgTimeWork } from '../../service-product-detail/extraOrg'
import style from '../discount-detail.module.css'

export interface IDetailDisOrgProps {
	org: IOrganization
}
const day = new Date()
const today = day.getDay() + 1
export function DetailDisOrg(props: IDetailDisOrgProps) {
	const { org } = props
	const trans = useTrans()
	const is_mb = useDeviceMobile()
	const orgTimes = extraOrgTimeWork(org?.opening_time)
	const branchesCntRef = React.useRef<any>()
	const [branch, setBranch] = React.useState<any>(org?.branches[0] || org)
	const onDropBranches: any = () => {
		branchesCntRef.current.classList.toggle(style.branches_list_cnt__drop)
	}
	const handleSetBranch = (item: any, index: number) => {
		setBranch(item)
		onDropBranches()
		sliderRef?.current?.slickGoTo(index + 1)
	}
	const settings = {
		className: `${style.map_org_detail_slide}`,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	const sliderRef = React.useRef<any>()

	return (
		<div className={style.detail_org_wrap}>
			<h2 className={style.detail_title}>Doanh Nghiệp</h2>
			{is_mb === true && <OrgCardDetail org_id={org?.id} />}
			{/* map */}
			<div className={style.detail_map}>
				{/* map content */}
				<div className={style.detail_map_cnt}></div>
				{/* close map content */}

				{/* btn seemore map */}
				<div className={style.detail_map_seemore}>
					<span onClick={() => {}}>{trans.trending.watch_all}</span>
				</div>
				{/* close btn seemore map */}

				{/* detail map org */}
				<div className={style.detail_map_org}>
					<Slider {...settings} ref={sliderRef}>
						<div className={style.map_org_detail_item}>
							<div className={style.map_org_item}>
								<ImageComponent
									type="IMG"
									width={'100%'}
									height={'100%'}
									layout="responsive"
									alt=""
									src={org?.image_url}
								/>
							</div>

							<div className={style.branch_detail}>
								<span className={style.branch_detail_name}>{org?.name}</span>

								<div className={style.branch_detail_address}>
									<ImageComponent
										type="ICON"
										width={12}
										height={12}
										layout="fixed"
										alt=""
										src={icon.mapPinRed}
									/>
									<span className={style.branch_detail_text}>
										{org?.address ? org?.address : org?.full_address}
									</span>
								</div>
								<div className={style.branch_detail_rate}>
									<div className={style.branch_detail_rate_item}>
										<ImageComponent
											type="ICON"
											width={12}
											height={12}
											layout="fixed"
											alt=""
											src={icon.starLine}
										/>
										<span className={style.rate_item_text}>5+</span>
									</div>
									<div className={style.branch_detail_rate_item}>
										<ImageComponent
											type="ICON"
											width={12}
											height={12}
											layout="fixed"
											alt=""
											src={icon.cartCheckPurple}
										/>
										<span className={style.rate_item_text}>1222+</span>
									</div>
									<div className={style.branch_detail_rate_item}>
										<ImageComponent
											type="ICON"
											width={12}
											height={12}
											layout="fixed"
											alt=""
											src={icon.heart}
										/>
										<span className={style.rate_item_text}>{org?.favorites_count}+</span>
									</div>
								</div>
							</div>
						</div>

						{org?.branches.map((item: any, index: number) => (
							<div key={index} className={style.map_org_detail_item}>
								<div className={style.map_org_item}>
									<ImageComponent
										type="IMG"
										width={'100%'}
										height={'100%'}
										layout="responsive"
										alt=""
										src={org?.image_url}
									/>
								</div>

								<div className={style.branch_detail}>
									<span className={style.branch_detail_name}>{item?.name}</span>

									<div className={style.branch_detail_address}>
										<ImageComponent
											type="ICON"
											width={12}
											height={12}
											layout="fixed"
											alt=""
											src={icon.mapPinRed}
										/>
										{item?.address === null || item?.full_address === null ? (
											<span className={style.branch_detail_text}>Đang cập nhật</span>
										) : (
											<span className={style.branch_detail_text}>
												{item?.address ? item?.address : item?.full_address}
											</span>
										)}
									</div>
									<div className={style.branch_detail_rate}>
										<div className={style.branch_detail_rate_item}>
											<ImageComponent
												type="ICON"
												width={12}
												height={12}
												layout="fixed"
												alt=""
												src={icon.star}
											/>
											<span className={style.rate_item_text}>5+</span>
										</div>
										<div className={style.branch_detail_rate_item}>
											<ImageComponent
												type="ICON"
												width={12}
												height={12}
												layout="fixed"
												alt=""
												src={icon.cartCheckPurple}
											/>
											<span className={style.rate_item_text}>1222+</span>
										</div>
										<div className={style.branch_detail_rate_item}>
											<ImageComponent
												type="ICON"
												width={12}
												height={12}
												layout="fixed"
												alt=""
												src={icon.heart}
											/>
											<span className={style.rate_item_text}>
												{item?.favorites_count ? item?.favorites_count : '5'}+
											</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
				{/* close detail map org */}
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

			{/* time org */}
			<div className={style.detail_org_time}>
				<h2 className={style.detail_title}>{trans.Mer_de.business_hours}</h2>
				<ul className={style.detail_org_time}>
					{orgTimes?.map((item: any, index: number) => (
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
	)
}
