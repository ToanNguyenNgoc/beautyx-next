import '../styles/globals.css'
import '../src/assets/font/style.css'
import React from 'react'
import { wrapper } from '../redux/store/store'
import AppProvider from '../context/AppProvider'
import { AssistantBtn, EmptyLayout } from '../components/layout'
import { AppPropsWithLayout } from '../models'
import { SWRConfig } from 'swr'
import { AUTH_HEADER } from '../api-client/authHeader'
import Head from 'next/head'
import axiosServer from '../api-client/axios2'
import axiosClient from '@/api-client/axios'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
			</Head>
			<SWRConfig
				value={{ fetcher: (url) => axiosClient.get(url, AUTH_HEADER()), shouldRetryOnError: false }}
			>
				<AppProvider>
					<Layout>
						<Component {...pageProps} />
						<AssistantBtn />
					</Layout>
				</AppProvider>
			</SWRConfig>
		</>
	)
}

export default wrapper.withRedux(MyApp)
