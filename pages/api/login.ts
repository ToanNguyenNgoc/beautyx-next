// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy, { ProxyResCallback } from 'http-proxy'
import Cookies from 'cookies'
import { baseURL } from '../../api-client/axios'

type Data = {
	message: string
}
export const config = {
	api: {
		bodyParser: false,
	},
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (req.method !== 'POST') {
		return res.status(404).json({ message: 'method not supported' })
	}
	const API_URL = baseURL?.slice(0, baseURL?.length - 4)
	return new Promise((resolve) => {
		req.headers.cookie = ''

		const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
			let body: any = ''
			// get data
			proxyRes.on('data', function (chunk: any) {
				body += chunk
				console.log('chunk :>> ', chunk) // ->  <Buffer 7b 0a 20 20 20 20 22 6d 65 73 73 61 67 65 22 3a 20 22 22 0a 7d>
			})
			// get success
			proxyRes.on('end', async function () {
				try {
					const jsonStr = JSON.parse(body)
					console.log('jsonStr :>> ', jsonStr)
					// const jsonStr = JSON.parse(Buffer.from(JSON.stringify(body)).toString())
					// console.log('jsonStr :>> ', jsonStr, 'b=>', Buffer.from(body)) //-> { message: '' }

					// console.log({ accessToken, expiredAt })

					// const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' })
					// cookies.set('access_token', accessToken, {
					// 	httpOnly: true,
					// 	sameSite: 'lax',
					// 	expires: new Date(expiredAt),
					// })
					;(res as NextApiResponse).status(200).json({ message: 'Login successfully' })
				} catch (error) {
					;(res as NextApiResponse).status(500).json({ message: 'Something went wrong' })
				}
				resolve(true)
			})
		}

		proxy.once('proxyRes', handleLoginResponse)

		proxy.web(req, res, {
			target: API_URL,
			changeOrigin: true,
			selfHandleResponse: true,
		})
	})
}
