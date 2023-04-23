/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import React from 'react'
import { ImageComponent } from "../layout"
import style from './org-item.module.css'
import { useRouter } from 'next/router'
import { IOrganization } from '@/interfaces/index'
import { directUrlOrg } from '@/context/direct-url'
import icon from '@/src/constants/icon'

function OrgItem({ org }: { org: IOrganization }) {
	const { locale } = useRouter()
	return (
		<>
			<Link prefetch={true} href={directUrlOrg(org.subdomain, locale)}>
				<a className={style.re_org_item}>
					<div className={style.org_img_cnt}>
						<div className={style.org_item_tick}>
							<ImageComponent type='ICON' src={icon.flash} layout="fixed" width={24} height={24} alt="" />
						</div>
						<ImageComponent
							src={org.image_url}
							layout="responsive" alt={org.subdomain}
							width={"100%"} height={"100%"}
							type="IMG"
							style={{ borderRadius: '8px 8px 0 0' }}
						/>
						<div className={style.org_img_cnt__rate}>
							<div className={style.org_rate_item}>
								<ImageComponent type="ICON" src={icon.heart} layout="fixed" width={12} height={12} alt="" />
								<span>{org.favorites_count}</span>
							</div>
							<div className={style.org_rate_item}>
								<ImageComponent type="ICON" src={icon.star} layout="fixed" width={12} height={12} alt="" />
								<span>5</span>
							</div>
						</div>
					</div>
					<div className={style.re_org_item__cnt}>
						<span className={style.org_name}>{org?.name}</span>
						<span className={style.org_address}>{org?.address}</span>
					</div>
				</a>
			</Link>
		</>
	)
}

export default OrgItem
