import { DISCOUNT_TYPE } from "../type/discount-type"
import { IDiscountPar } from "../../interfaces/discount";
import moment from "moment";
import formatPrice from "../../src/utils/formatPrice"

const date = new Date();
const dayNow = moment(date).format("YYYY-MM-YY HH:MM:SS");

export const getPriceDiscount = (item_id: number, discount: IDiscountPar) => {
    let sale_price, old_price
    const productable = discount?.items?.find(i => i.productable_id == item_id)?.productable
    const price = productable?.retail_price ?? productable?.price

    if (productable && discount.discount_type === DISCOUNT_TYPE.FINAL_PRICE.key) {
        sale_price = discount?.discount_value,
            old_price = price
    }
    if (productable && discount.discount_type === DISCOUNT_TYPE.PRODUCT.key && price) {
        sale_price = price - discount.discount_value,
            old_price = price
    }
    return { sale_price, old_price }
}
//----------------
export const IS_VOUCHER = (discounts: IDiscountPar[]) => {
    const vouchers: IDiscountPar[] = discounts.filter((i: IDiscountPar) => (
        i.discount_type === DISCOUNT_TYPE.SUB_TOTAL.key ||
        ((i.discount_type === DISCOUNT_TYPE.PRODUCT.key || i.discount_type === DISCOUNT_TYPE.FINAL_PRICE.key) && i.items_count === 0)
    ));
    return vouchers
}
export const IS_FLASH_SALE = (discounts: IDiscountPar[]) => {
    const discountsFlash: IDiscountPar[] = discounts.filter(
        (i: IDiscountPar) =>
            (i.discount_type === 'PRODUCT' || i.discount_type === 'FINAL_PRICE') && i.items_count > 0
    )
    return discountsFlash
}
//----------------
export const EX_APPLY_DATE = (discount: IDiscountPar) => {
    console.log(discount)
    let validDate = false;
    if (!discount.valid_from && !discount.valid_util) {
        validDate = true
    } else if (discount.valid_from && dayNow > discount.valid_from && !discount.valid_util) {
        validDate = true
    } else if (discount.valid_from < dayNow && discount.valid_util > dayNow) {
        validDate = true
    }
    return validDate
}
export const EX_DISCOUNT_UNIT = (discount: IDiscountPar) => {
    let value = ``;
    switch (discount.discount_unit) {
        case "PERCENT": return value = `${discount.discount_value}%`;
        case "PRICE": return value = `${formatPrice(discount.discount_value)}đ`;
        default: break
    }
    return value
}
export const EX_DISCOUNT_TYPE = (discount: IDiscountPar) => {
    const { discount_type } = discount
    let text = "";
    let TYPE = ""
    const value = EX_DISCOUNT_UNIT(discount)
    switch (discount_type) {
        case DISCOUNT_TYPE.FINAL_PRICE.key:
            return text = DISCOUNT_TYPE.FINAL_PRICE.text;
        case DISCOUNT_TYPE.SUB_TOTAL.key:
            return text = `Giảm ${value} trên tổng đơn ${discount.maximum_discount_value ?
                `(tối đa ${formatPrice(discount.maximum_discount_value)})` : ''
                }`;
        case DISCOUNT_TYPE.PRODUCT.key:
            return text = `Giảm ${value} trên sản phẩm, dịch vụ `;
        default:
            break
    }
    return text
}
export const EX_ORDER_VALUE = (discount: IDiscountPar) => {
    let title = "";

}