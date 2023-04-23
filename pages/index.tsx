import React from 'react'
import servicePromoApi from '../api-client/servicePromoApi'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { Container } from '@mui/material'
import Head from 'next/head'
import { NextPageWithLayout } from '../models'
import {
	HomeFooterTags,
	HomeDiscounts,
	Province,
	HomeTags,
	HomeBanners,
	HomeOrgsFavorite,
	HomePromo,
} from '../components/pages/home/index'
import provincesApi from '../api-client/provinceApi'
import tagsApi from '../api-client/tagApi'
import bannerApi from '../api-client/bannerApi'
import discountApi from '../api-client/discountApi'
import orgApi from '../api-client/organizationApi'
import { ITag } from '../interfaces/tags'
import { IBanner } from '../interfaces/banner'
import { IOrganization } from '../interfaces/organization'
import { IDiscountPar } from '../interfaces/discount'
import { MainLayout } from '../components/layout'
import style from '../styles/Home.module.css'

interface IPopsHomePage {
	services: any[]
	province: any[]
	tags: ITag[]
	banners: IBanner[]
	orgs: IOrganization[]
	discounts: IDiscountPar[]
}

const Home: NextPageWithLayout = (props: any) => {
	const { services, province, tags, banners, orgs, discounts } = props
	return (
		<>
			<Head>
				<title>BeautyX - Đặt lịch làm hẹn Online</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className={style.home_page}>
				<Container>
					<HomeBanners banners={banners} />
					<HomeTags />
				</Container>
				<HomeDiscounts discounts={discounts} />
				<Container>
					{/* <HomePromo services={services} /> */}
					<HomeOrgsFavorite orgs={orgs} />
					<Province province={province} />
					<HomeFooterTags tags={tags} />
				</Container>
			</div>
		</>
	)
}

Home.Layout = MainLayout

export default Home

export const getStaticProps: GetStaticProps<IPopsHomePage> = async (
	context: GetStaticPropsContext
) => {
	// const res = await servicePromoApi.getServicesPromo({
	// 	page: 1,
	// 	limit: 18,
	// 	sort: '-discount_percent',
	// })
	// const hits: any[] = await res.data.data.hits
	const resProvinces = await provincesApi.getAll()
	const resTags = await tagsApi.getAll({
		include: 'children',
	})
	const resBanners = await bannerApi.getAll()
	const resOrgs = await orgApi.getAll({
		sort: '-favorites_count',
	})
	const resDiscounts = await discountApi.getAll({
		page: 1,
		limit: 12,
	})

	const provinces: any = await resProvinces.data.context.data
	const tags = await resTags.data.context.data
	const banners = await resBanners.data.context.data
	const orgs = await resOrgs.data.context.data
	const discounts = await resDiscounts.data.context.data
	return {
		props: {
			services: [],
			province: provinces.slice(0, 6),
			tags: tags,
			banners: banners,
			orgs: orgs,
			discounts: discounts,
			// province: [],
			// tags: [],
			// banners: [],
			// orgs: [],
			// discounts: [],
		},
		revalidate: 3600 * 24,
	}
}
