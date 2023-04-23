import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../node-js/database'
import BannersCampaign from '../../../node-js/models/banner-campaign.model'
import NextCors from 'nextjs-cors'

dbConnect()
export default async function handle(
    req: NextApiRequest, res: NextApiResponse
) {
    const { method } = req
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
                const response = await BannersCampaign.find({});
                res.status(200).json({ success: true, data: response })
            } catch (error) {
                res.status(404).json({ status: false })
            }
            break;
        case "POST":
            try {
                const response = await BannersCampaign.create(req.body)
                res.status(200).json({ success: true, data: response })
            } catch (error) {
                res.status(404).json({ status: false })
            }
            break;
        default:
            break
    }
}