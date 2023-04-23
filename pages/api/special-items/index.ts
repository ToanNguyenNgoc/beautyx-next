import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../node-js/database'
import SpecialItem from "../../../node-js/models/special-item.model"

dbConnect()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const { method } = req
    switch (method) {
        case 'GET':
            try {
                const specialItems = await SpecialItem.find({});
                res.status(200).json({ success: true, data: specialItems })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const specialItems = await SpecialItem.create(req.body);
                res.status(201).json({ success: true, data: specialItems })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}