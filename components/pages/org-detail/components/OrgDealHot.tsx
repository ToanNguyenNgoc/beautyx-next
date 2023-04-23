import DiscountItem from '@/components/discount-item'
import ProductOrgItem from '@/components/product-org-item'
import ServiceOrgItem from '@/components/service-org-item'
import VoucherItem from '@/components/voucher-item'
import { IS_FLASH_SALE, IS_VOUCHER } from '@/context/functions/discount'
import { useSwr } from '@/context/hooks'
import { orgDiscountsParams, orgSpecialPriceParams } from '@/context/query-params'
import { IDiscountPar, IITEMS_DISCOUNT } from '@/interfaces/discount'
import { IOrganization } from '@/interfaces/organization'
import { Product } from '@/interfaces/product'
import { Service } from '@/interfaces/service'
import { useRouter } from 'next/router'
import React from 'react'
import style from '../org-detail.module.css'

interface IProps {
	org: IOrganization
}
export function OrgDealHot(props: IProps) {
	const { org } = props
	const { query } = useRouter()
	const org_id = query.orgId
	const discounts: IDiscountPar[] = useSwr('/discounts', org.id, orgDiscountsParams(org)).responseArray
	
	const discountsFlash = IS_FLASH_SALE(discounts)
	const vouchers = IS_VOUCHER(discounts)

	const servicesSpecial = useSwr(
		`/organizations/${org_id}/services`,
		org_id,
		orgSpecialPriceParams
	).responseArray
	const productsSpecial = useSwr(
		`/organizations/${org_id}/products`,
		org_id,
		orgSpecialPriceParams
	).responseArray
	return (
		<div className={style.org_deal_hot}>
			{
				vouchers.length > 0 &&
				<div className={style.org_voucher_cnt}>
					<ul className={style.voucher_list}>
						{
							vouchers.map((item:IDiscountPar, index:number)=>(
								<li key={index} className={style.voucher_list_item}>
									<VoucherItem
										discount={item}
										org_id={org.id}
									/>
								</li>
							))
						}
					</ul>
				</div>
			}
			{discountsFlash.length > 0 && (
				<div className={style.org_deal_hot__discounts}>
					<ul className={style.list}>
						{discountsFlash.map((discount: any, index: number) => (
							<li key={index} className={style.org_discount__item}>
								{discount.items.map((item: IITEMS_DISCOUNT, i: number) => (
									<DiscountItem key={i} item={item} discount={discount} />
								))}
							</li>
						))}
					</ul>
				</div>
			)}

			{servicesSpecial.length > 0 && (
				<div className={style.org_deal_hot__section}>
					<span className={style.org_deal_hot__section_title}>Dịch vụ</span>
					<ul className={style.org_special__list}>
						{servicesSpecial.map((service: Service, index: number) => (
							<li key={index}>
								<ServiceOrgItem service={service} org={org} />
							</li>
						))}
					</ul>
				</div>
			)}
			{productsSpecial.length > 0 && (
				<div className={style.org_deal_hot__section}>
					<span className={style.org_deal_hot__section_title}>Sản phẩm</span>
					<ul className={style.org_special__list}>
						{productsSpecial.map((product: Product, index: number) => (
							<li key={index}>
								<ProductOrgItem product={product} org={org} />
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}
