/** @type {import('next').NextConfig} */
const { i18n } = require('./i18n.config')
const nextConfig = {
	reactStrictMode: true,
}

module.exports = {
	env: {
		MONGO_URL: "mongodb+srv://toan06011998:toan06011998@cluster0.5jgfuoj.mongodb.net/?retryWrites=true&w=majority"
	},
	nextConfig,
	i18n,
	images: {
		domains: [
			'dev.myspa.vn',
			'dev_spala.myspa.vn',
			'myspa.vn',
			'api.myspa.vn',
			'devapi.myspa.vn',
			'i.imgur.com',
		],
	},
	async rewrites() {
		return [
			{
				source: '/v1/:url',
				destination: '/api/:url',
			},
			{
				source: '/v1/:context/:id',
				destination: '/api/:context/:id',
			},
			{
				source: '/v1/:context/:id/:context_child',
				destination: '/api/:context/:id/:context_child',
			},
			{
				source: '/v1/:context/:id/:context_child/:child_id',
				destination: '/api/:context/:id/:context_child/:child_id',
			},
			//handle platform ------------------------------------------
			{
				source: '/MOMO',
				destination: '/',
			},
			{
				source: '/TIKI',
				destination: '/',
			},
			{
				source: '/MBBANK',
				destination: '/',
			},
			{
				source: '/MOMO/:data',
				destination: '/',
			},
			{
				source: '/TIKI/:data',
				destination: '/',
			},
			{
				source: '/MBBANK/:data',
				destination: '/',
			},
			//------------------------------------------
			{
				source: '/cua-hang',
				destination: '/org',
			},
			{
				source: '/giam-gia',
				destination: '/discounts',
			},
			//org detail
			{
				source: '/vi/cua-hang/:org',
				destination: '/vi/org/:org',
				locale: false,
			},
			{
				source: '/en/org/:org',
				destination: '/en/org/:org',
				locale: false,
			},
			//------
			{
				source: '/:service_name',
				has: [
					{
						type: 'query',
						key: 'sid',
						value: '(?<cmsId>.*)',
					},
				],
				destination: '/service-product-detail',
			},
			{
				source: '/:product_name',
				has: [
					{
						type: 'query',
						key: 'pid',
						value: '(?<cmsId>.*)',
					},
				],
				destination: '/service-product-detail',
			},
			{
				source: '/:combo_name',
				has: [
					{
						type: 'query',
						key: 'cid',
						value: '(?<cmsId>.*)',
					},
				],
				destination: '/service-product-detail',
			},
			// home result
			{
				source: '/ds-cua-hang',
				has: [
					{
						type: 'query',
						key: 'tag_name',
						value: '(?<cmsId>.*)',
					},
				],
				destination: '/home-result',
			},
			{
				source: '/ds-cua-hang',
				has: [
					{
						type: 'query',
						key: 'p_code',
						value: '(?<cmsId>.*)',
					},
				],
				destination: '/home-result',
			},
			// Appointment
			{
				source: '/apointment',
				has: [
					{
						type: 'query',
						key: 'tab',
						value: '(?<cmsId>.*)',
					},
				],
				destination: '/apointment',
			},
			// discount detail
			{
				source: '/chi-tiet-giam-gia/:discount_name',
				has: [
					{
						type: 'query',
						key: 'sid',
						value: '(?<cmsId>.*)',
					},
				],
				destination: '/discount',
			},
			//map
			{
				source: '/ban-do',
				destination: '/map',
			},
			//appointment
			{
				source: "/appointment",
				has: [
					{
						type: "query", key: "tab", value: '(?<cmsId>.*)',
					}
				],
				destination: '/appointment',
			},
			//search result
			{
				source: '/tim-kiem',
				has: [
					{
						type: 'query',
						key: 'keyword',
						value: '(?<cmsId>.*)',
					},
				],
				destination: '/search',
			},
			//cart payment status
			{
				source: '/cart-payment',
				has: [
					{
						type: 'query',
						key: 'trans_uid',
						value: '(?<cmsId>.*)',
					},
				],
				destination: '/cart-payment',
			},
		]
	},
}
