import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../node-js/database'
import User from '../../../node-js/models/user.model'

dbConnect()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req
    switch (method) {
        case "GET":
            try {
                const response = await User.find({});
                res.status(200).json({ status: true, data: response })
            } catch (error) {
                res.status(404).json({ status: false, data: [] })
            }
            break;
        default:
            break
    }
}