/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useState } from 'react'
import style from '../home.module.css'
import Slider from 'react-slick'
import { useRouter } from 'next/router'
import { useDeviceMobile, useFetch } from '@/context/hooks'
import { ImageComponent } from '@/components/layout'
import icon from '@/src/constants/icon'
import { IBannerCampaign } from '@/interfaces/banner'
import slugify from '@/src/utils/formatUrlString'

interface IProps {
	banners: any[]
}

const PrevButton = (props: any) => {
	const is_mb = useDeviceMobile()
	const { onClick } = props
	return (
		<button onClick={onClick} className={style.bannerBtnPrev}>
			<ImageComponent
				src={icon.chevronRight}
				alt=""
				layout="fixed"
				type="ICON"
				width={is_mb === true ? 24 : 32}
				height={is_mb === true ? 24 : 32}
			/>
		</button>
	)
}
const NextButton = (props: any) => {
	const is_mb = useDeviceMobile()
	const { onClick } = props
	return (
		<button onClick={onClick} className={style.bannerBtnNext}>
			<ImageComponent
				src={icon.chevronRight}
				alt=""
				layout="fixed"
				type="ICON"
				width={is_mb === true ? 24 : 32}
				height={is_mb === true ? 24 : 32}
			/>
		</button>
	)
}

export function HomeBanners(props: IProps) {
	const { banners } = props
	const [chooseBanner, setChooseBanner] = useState<any>()
	// const { data } = useFetch("https://beautyx.vercel.app/v1/banners_campaign")
	const Router = useRouter();
	// const bannersCampaign: IBannerCampaign[] = data?.data ?? [];


	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		//autoplay: true,
		nextArrow: <NextButton />,
		prevArrow: <PrevButton />,
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
					speed: 500,
				},
			},
		],
		appendDots: (dots: any) => (
			<div className="banner-dot">
				<ul>{dots}</ul>
			</div>
		),
		afterChange: function (index: number) {
			setChooseBanner(banners[index])
		},
	}
	return (
		<div className={style.banner}>
			<div className={style.bannerWrap}>
				<div className={style.bannerLeft}>
					<Slider {...settings}>
						{banners?.map((item: any, index: number) => (
							<div key={index + item.url} className={style.bannerLeftItem}>
								<ImageComponent
									src={item?.imageURL}
									alt=""
									layout="responsive"
									type="IMG"
									width={840}
									height={350}
								/>
							</div>
						))}
					</Slider>
				</div>
				<div className={style.bannerRight}>
					<ul className={style.banner_right_list}>
						{/* {
							bannersCampaign.map((item: IBannerCampaign, index: number) => (
								<li 
									onClick={() => Router.push(`/deal/${slugify(item.title)}`)}
									key={index} className={style.banner_right_item}
								>
									<ImageComponent
										src={item.image_url}
										type="IMG" layout="responsive" alt=''
										width={"100%"} height={"100%"}
									/>
								</li>
							))
						} */}
					</ul>
				</div>
			</div>
		</div>
	)
}
