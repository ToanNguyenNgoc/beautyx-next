import { IITEMS_DISCOUNT, IDiscountPar } from "../../interfaces/discount";
import { ICart } from "../../interfaces/cart"

export function cartReducer(carts: ICart[]) {
    const carts_confirm: ICart[] = carts.filter(i => i.isConfirm === true)
    const products = carts_confirm.filter((i: ICart) => i.is_type === "PRODUCT");
    const services = carts_confirm.filter((item: ICart) => item.is_type === "SERVICE");
    const combos = carts_confirm.filter((item: ICart) => item.is_type === "COMBO");
    const discounts = carts_confirm.map((item:ICart) => item.discount)

    const products_id = products.map(i => {
        return { id: i.id, quantity: i.quantity }
    })
    const services_id = services.map(i => {
        return { id: i.id, quantity: i.quantity }
    })
    const combos_id = combos.map(i => {
        return { id: i.id, quantity: i.quantity }
    })
    return {
        carts_confirm,
        products,
        services,
        combos,
        products_id,
        combos_id,
        services_id,
        discounts
    }
}
export const discountReducerItem = (items: IITEMS_DISCOUNT[]) => {
    const productsInDis = items.filter((i: IITEMS_DISCOUNT) => i.productable_type === "App\\Models\\CI\\Product")
    const servicesInDis = items.filter((i: IITEMS_DISCOUNT) => i.productable_type === "App\\Models\\CI\\Service")
    return { productsInDis, servicesInDis }
}