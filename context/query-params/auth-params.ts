import { EXTRA_FLAT_FORM_2 } from "../../api-client/extraFlatForm";
import dayjs from "dayjs"
const platform = EXTRA_FLAT_FORM_2()

export const servicesUserParams = {
    limit: 15,
    "filter[status]": "PAID",
    "filter[withServicesSold]": true,
    "include": "items|items_count|organization|appointments",
    "sort": "-created_at",
    "append":"qr_link|origin",
    'filter[platform]': platform
}
export const orderParams = {
    "append": "qr_link",
    "filter[platform]": platform,
    "filter[productable]": true,
    "include": "items|organization|branch|user|paymentMethod|deliveryAddress|appointments",
    "limit": 15,
    "sort": "-created_at"
}

export const appointmentsParams = {
    "append": "services",
    "filter[time_start]": dayjs().format("YYYY-MM"),
    "include": " organization | order | branch",
    "limit": 300,
    "page": 1,
    "sort": "-id",
    "filter[platform]": platform
}