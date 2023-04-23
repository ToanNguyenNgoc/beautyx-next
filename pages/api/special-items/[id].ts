// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../node-js/database'
import SpecialItem from "../../../node-js/models/special-item.model"

dbConnect()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const {
        query: { id },
        method
    } = req;
    switch (method) {
        case 'GET':
            try {
                const response = await SpecialItem.findById(id);

                if (!response) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: response });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            res.status(400).json({ success: false, message: "You can use method 'PUT' " })
            // try {
            //     const response = await SpecialItem.findByIdAndUpdate(id, req.body, {
            //         new: true,
            //         runValidators: true
            //     });

            //     if (!response) {
            //         return res.status(400).json({ success: false });
            //     }

            //     res.status(200).json({ success: true, data: response });
            // } catch (error) {
            //     res.status(400).json({ success: false });
            // }
            break;
        case 'DELETE':
            res.status(400).json({ success: false, message: "You can use method 'DELETE' " })
            // try {
            //     const response = await SpecialItem.deleteOne({ _id: id });
            //     if (!response) {
            //         return res.status(400).json({ success: false })
            //     }
            //     res.status(200).json({ success: true, data: {} });
            // } catch (error) {
            //     res.status(400).json({ success: false })
            // }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}