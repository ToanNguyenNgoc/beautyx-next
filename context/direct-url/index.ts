import { IDiscountPar, IITEMS_DISCOUNT } from "../../interfaces/discount"
import slugify from "../../src/utils/formatUrlString"

export const directUrlOrg = (id: string | number, locale: any) => {
	let org_url = `/org/${id}`
	if (locale === 'vi') {
		org_url = `/cua-hang/${id}`
	}
	return org_url
}
export const directUrlService = (service_name: any, sid: any, org_id: any) => {
	const service_url = `/${slugify(service_name)}?sid=${sid}&org_id=${org_id}`
	return service_url
}
export const directUrlProduct = (product_name: any, pid: any, org_id: any) => {
	const product_url = `/${slugify(product_name)}?pid=${pid}&org_id=${org_id}`
	return product_url
}
export const directUrlCombo = (combo_name: any, cid: any, org_id: any) => {
	const combo_url = `/${slugify(combo_name)}?cid=${cid}&org_id=${org_id}`
	return combo_url
}

export const directUrlDiscount = (discount: IDiscountPar, item: IITEMS_DISCOUNT) => {
	const discount_url = `/chi-tiet-giam-gia/${slugify(item.productable.service_name ?? item.productable.product_name)}?sid=${item.productable_id}&org_id=${item.organization_id}&id=${discount.id}`
	return discount_url
}
export const formatRouterLinkDiscount = (
	discountPar: IDiscountPar,
	discountChild: IITEMS_DISCOUNT
) => {
	const org = discountChild?.organization;
	const onCheckType = () => {
		let type;
		// let link = ""
		switch (discountChild.productable_type) {
			case "App\\Models\\CI\\Service":
				type = "service";
				// link = "chi-tiet-giam-gia"
				break;
			case "App\\Models\\CI\\Product":
				type = "product";
				// link = "chi-tiet-giam-gia-sp"
				break;
		}
		return type;
	};
	const type = onCheckType();
	const name =
		discountChild.productable.service_name ??
		discountChild.productable.product_name;
	const patchDiscountOb = `/chi-tiet-giam-gia/${type}_${org?.id}_${discountPar.uuid ?? discountPar.id
		}_${discountChild.productable_id}_${slugify(name)}`;
	return patchDiscountOb;
};
export const directUrlProSerResult = (type: "SERVICE" | "PRODUCT", name: string, id: number) => {
	let url = "";
	if (type === "SERVICE") url = "dich-vu";
	if (type === "PRODUCT") url = "san-pham"
	const result_url = `/${url}/${name}/${id}`
	return result_url
}
export const directUrlAccount = () => {
	const url = {
		information: "/account/information",
		order: "/account/order",
		discount: "/account/discount",
		address: "/account/address",
		order_paid: "/account/order?tab=paid",
		order_all: "/account/order?tab=all"
	}
	return url
}
export const directUrlApp = (tab_name: "calendar" | "service") => {
	const url = `/apointment?tab=${tab_name}`;
	return url
}
export const pageHideHeader = [
	"/account",
	"/account/order",
	"/service-product-detail",
	"/org/[orgId]",
	"/discount",
	"/apointment",
	"/cart"
]