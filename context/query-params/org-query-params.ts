import { IOrganization } from "interfaces"

export const orgGalleriesParams = {
	include: 'images|videos',
	limit: '15',
	page: '1',
}
export const orgSpecialPriceParams = {
	append: 'is_favorite|rating',
	'filter[special]': true,
	include: 'favorites_count|category',
	limit: 15,
	page: 1,
}
export const orgDiscountsParams = (org:IOrganization) => {
	return {
		append: 'user_available_purchase_count',
		'filter[organization_id]': org.id,
		'filter[platform]': 'MOMO',
		limit: 30,
		page: 1,
		sort: 'discount_value|created_at',
	}
}
export const cateOrgParams = {
	include: 'servicesCount',
	limit: '15',
	page: '1',
}

export const cateOrgProductParams = {
	include: 'productsCount',
	limit: '15',
	page: '1',
}
export const serviceOrgParams = {
	append: 'is_favorite|rating|bought_count',
	'filter[is_momo_ecommerce_enable]': 'true',
	// "filter[service_group_id]": "1",
	include: 'category|favorites_count',
	limit: '15',
}
export const productOrgParams = {
	append: 'is_favorite|rating',
	'filter[is_momo_ecommerce_enable]': 'true',
	// "filter[product_category_id]": "1",
	include: 'category|favorites_count',
	limit: '15',
}
export const serviceDetailParams = {
	append: 'is_favorite|rating|bought_count',
	include: 'category|favorites_count',
}

export const comboOrgParams = {
	'filter[is_momo_ecommerce_enable]': 'true',
	include: 'products|services',
	limit: '15',
	page: '1',
}
