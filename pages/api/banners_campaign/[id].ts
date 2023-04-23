import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../node-js/database'
import BannersCampaign from '../../../node-js/models/banner-campaign.model'
import NextCors from 'nextjs-cors'

dbConnect()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const { method, query: { id } } = req
    await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: [
            "https://beautyx.vn",
            "https://beautyx.vercel.app",
            "https://beautyx-spa.web.app",
            "http://localhost:3000"
        ],
        optionsSuccessStatus: 200,
    })
    switch (method) {
        case "GET":
            try {
                const response = await BannersCampaign.find({ id: id })
                if (response[0]) {
                    res.status(200).json({ success: true, data: response[0] })
                } else {
                    res.status(404).json({ success: false, message: `No query results for model BannersCampaign ${id}` })
                }
            } catch (error) {
                res.status(404).json({ success: false, message: `No query results for model BannersCampaign ${id}` })
            }
            break;
        default:
            break
    }
}