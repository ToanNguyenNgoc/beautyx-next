import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import LinearDeterminate from '../linear-progress'
import style from './org-card.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IOrganization } from '@/interfaces/organization'
import { imageProxy, useSwr } from '@/context/hooks'
import { directUrlOrg } from '@/context/direct-url'
import icon from '@/src/constants/icon'
import { ButtonFavorite } from '../pages/service-product-detail'

interface IProps {
	org_id: number
}
function OrgCardDetail(props: IProps) {
	const { org_id } = props
	const [load, setLoad] = useState(false)
	const { locale } = useRouter()
	const org: IOrganization = useSwr(`/organizations/${org_id}`, org_id).response
	const onLoad = useCallback(() => {
		setLoad(true)
	}, [])
	return (
		<>
			{load && <LinearDeterminate />}
			<div className={style.detail_right__infoMer}>
				<div className={style.infoMer_top}>
					<div className={style.infoMer_top__img}>
						<Image
							src={imageProxy(org?.image_url)}
							alt={org?.subdomain}
							layout="responsive"
							width={'100%'}
							height={'100%'}
						/>
					</div>
					<div className={style.infoMer_top__right}>
						<Link href={directUrlOrg(org?.subdomain, locale)}>
							<a className={style.infoMer_top_name} onClick={onLoad}>
								{org?.name}
							</a>
						</Link>
						<h5>{org?.address}</h5>
					</div>
				</div>
				<div className={style.inforMer_mid}>
					<div className={style.inforMer_item}>
						<div className={style.inforMer_item_wrap}>
							<p>4.5</p>
							<div className={style.inforMerImg}>
								<Image
									src={icon.star}
									alt=""
									layout="responsive"
									width={'100%'}
									height={'100%'}
								></Image>
							</div>
						</div>
						<p className={style.inforMer_item_text}>Đánh giá</p>
					</div>
					<div className={style.inforMer_item}>
						<div className={style.inforMer_item_wrap}>
							<p>{org?.favorites_count}</p>
							<div className={style.inforMerImg}>
								<Image
									src={icon.Favorite}
									alt=""
									layout="responsive"
									width={'100%'}
									height={'100%'}
								></Image>
							</div>
						</div>
						<p className={style.inforMer_item_text}>Yêu thích</p>
					</div>
					<div className={style.inforMer_item}>
						<div className={style.inforMer_item_wrap}>
							<p>4.5</p>
							<div className={style.inforMerImg}>
								<Image
									src={icon.chatAll}
									alt=""
									layout="responsive"
									width={'100%'}
									height={'100%'}
								></Image>
							</div>
						</div>
						<p className={style.inforMer_item_text}>Bình luận</p>
					</div>
				</div>
				<div className={style.inforMer_bot}>
					<Link href={directUrlOrg(org?.subdomain, locale)}>
						<a className={style.inforMer_bot_left} onClick={onLoad}>
							<Image src={icon.archive} layout="fixed" width={16} height={16} />
							<p>Xem spa</p>
						</a>
					</Link>
					<div className={style.inforMer_bot_right}>
						<ButtonFavorite
							org_id={org_id}
							type="ORG"
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default OrgCardDetail
