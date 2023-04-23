import { IOrganization } from './organization';
import { Product } from './product';
import { Service } from './service';
import { Combo } from './combo';
import { IDiscountPar } from './discount';

export interface Cart {
      cart_id: number,
      id: number,
      isConfirm: boolean,
      is_type: number,
      name: string,
      org_id: number,
      org_name: string,
      price: number,
      quantity: number,
      org: IOrganization,
      cart_item: Product | Service | Combo
}
export interface ICart {
      cart_id: string,
      cart_item: Product | Service | Combo,
      discount?: IDiscountPar,
      id: number
      isConfirm: boolean
      is_type: string
      name: string
      org: IOrganization
      org_id: number
      org_name: string
      price: number
      price_discount?: number
      quantity: number
}
interface ItemCartPost {
      id: number, quantity: number
}
export interface ICartPost {
      coupon_code?: string[]
      branch_id?:number,
      payment_method_id?: number
      services?: ItemCartPost[]
      products?: ItemCartPost[]
      combos?: ItemCartPost[]
      user_address_id?: number
      note?: string
}
export interface ICartByOrgId {
      org_id: number,
      org_name: string,
      org: IOrganization
      items: ICart[],
}