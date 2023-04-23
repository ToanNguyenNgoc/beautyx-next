import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from '../org-detail.module.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import { IOrganization } from '@/interfaces/organization'
import { useDeviceMobile, useSwr, useSwrInfinite } from '@/context/hooks'
import { Category } from '@/interfaces/category'
import { cateOrgProductParams, productOrgParams } from '@/context/query-params'
import { onChooseCateProduct, onEmptyCateProduct } from '@/redux/slices/org-slice/orgChildSlice'
import EmptyRes from '@/components/EmptyRes'
import { Product } from '@/interfaces/product'
import ProductOrgItem from '@/components/product-org-item'
import { LoadingList, LoadingOrgGrid } from '@/components/loading'

export function OrgProducts({ org }: { org: IOrganization }) {
	const { cate_id } = useSelector((state: any) => state.ORG_CHILD.CATE_PRODUCTS)
	const is_mb = useDeviceMobile()
	const dispatch = useDispatch()
	const cates: Category[] = useSwr(
		`/organizations/${org.id}/product_categories`,
		org,
		cateOrgProductParams
	).responseArray
	const { resData, totalItem, onLoadMore } = useSwrInfinite(`/organizations/${org.id}/products`, {
		...productOrgParams,
		'filter[product_category_id]': cate_id,
	})
	const onViewMore = () => {
		if (resData.length >= 15 && resData.length < totalItem) {
			onLoadMore()
		}
	}

	const onChooseCate = (cate_id: number) => {
		dispatch(
			onChooseCateProduct({
				org_id: org.subdomain,
				cate_id: cate_id,
			})
		)
	}
	useEffect(() => {
		dispatch(onEmptyCateProduct(org.subdomain))
	}, [])
	return (
		<div className={style.org_services_cnt}>
			{/* service left */}
			{cates && cates.filter((e: any) => e.products_count > 0).length > 0 && (
				<div className={style.org_services_cnt__left}>
					<ul className={style.cates_list}>
						<li
							onClick={() =>
								dispatch(
									onChooseCateProduct({
										cate_id: 0,
										org_id: org.subdomain,
									})
								)
							}
							style={
								cate_id === 0
									? {
											color: '#fff',
											backgroundColor: 'var(--purple)',
									  }
									: {}
							}
							className={style.cate_list__item}
						>
							<span
								style={cate_id === 0 ? { color: '#fff' } : {}}
								className={style.cate_list__item_title}
							>
								Tất cả
							</span>
						</li>
						{cates
							.filter((i) => i.products_count > 0)
							.map((cate, index) => (
								<li
									onClick={() => onChooseCate(cate.id)}
									key={index}
									className={style.cate_list__item}
									style={
										cate_id === cate.id
											? {
													color: '#fff',
													backgroundColor: 'var(--purple)',
											  }
											: {}
									}
								>
									<span
										style={cate_id === cate.id ? { color: '#fff' } : {}}
										className={style.cate_list__item_title}
									>
										{cate.name}
									</span>
								</li>
							))}
					</ul>
				</div>
			)}
			{/* end product left */}

			{/* product right */}
			<div
				style={
					cates && cates.filter((e: any) => e.products_count > 0).length > 0 && is_mb === false
						? { width: '83.3%' }
						: { width: '100%' }
				}
				className={style.org_services_cnt__right}
			>
				{totalItem === 0 && <EmptyRes title="Không có sản phẩm phù hợp!" />}
				<InfiniteScroll dataLength={resData.length} hasMore={true} next={onViewMore} loader={<></>}>
					<ul
						style={
							cates && cates.filter((e: any) => e.products_count > 0).length > 0 && is_mb === false
								? { gridTemplateColumns: 'repeat(5, 1fr)' }
								: { gridTemplateColumns: 'repeat(6, 1fr)' }
						}
						className={style.org_services_cnt__right_list}
					>
						{resData.map((item: Product, index: number) => (
							<li key={index} className={style.org_services_list_item}>
								<ProductOrgItem org={org} product={item} />
							</li>
						))}
					</ul>
				</InfiniteScroll>

				{/* loading  */}
				{resData.length < totalItem ? (
					is_mb === false ? (
						cates && cates.filter((e: any) => e.products_count > 0).length > 0 ? (
							<LoadingOrgGrid rowItem={5} />
						) : (
							<LoadingOrgGrid rowItem={6} />
						)
					) : (
						<LoadingList />
					)
				) : (
					<></>
				)}
				{/* end loading */}
			</div>
			{/* end product right */}
		</div>
	)
}
