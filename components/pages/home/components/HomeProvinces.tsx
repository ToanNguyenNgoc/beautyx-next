import * as React from 'react'
import style from '../home.module.css'
import Link from 'next/link'
import { useTrans } from '@/context/hooks'
import HomeSectionHead from '@/components/homeSectionHead'
import { IProvince } from '@/interfaces/provinces'
import LinearDeterminate from '@/components/linear-progress'
import { ImageComponent } from '@/components/layout'
import { formatRoundOrgCount } from '@/src/utils/format'

export interface IProvinceProps {
	province: any[]
}

export function Province(props: IProvinceProps) {
	const { province } = props
	const trans = useTrans()
	return (
		<div className={style.province}>
			<HomeSectionHead seemore={'Xem thêm >>'} title={trans.home_2.places_you_are_interested_in} />

			<div className={style.provinceList}>
				{province.slice(0, 6).map((item: any, index: number) => (
					<ProvinceItem key={index} item={item} />
				))}
			</div>
		</div>
	)
}
const ProvinceItem = ({ item }: { item: IProvince }) => {
	const trans = useTrans()
	const [load, setLoad] = React.useState(false)
	const onLoad = React.useCallback(() => {
		setLoad(true)
	}, [])
	return (
		<>
			{load && <LinearDeterminate />}
			<Link href={`/ds-cua-hang?p_code=${item.province_code}`}>
				<a onClick={onLoad} className={style.provinceItem}>
					<ImageComponent
						src={`${item.media[1]?.original_url}`}
						alt=""
						layout="fill"
						type="IMG"
					/>
					<div className={style.provinceContent}>
						<div className={style.provinceTitle}>{item?.name}</div>
						<div className={style.provinceTotal}>
							<span>
								{formatRoundOrgCount(item.organizations_count + item.branches_count)}{' '}
								{trans.home_2.beauty_places}
							</span>
						</div>
					</div>
				</a>
			</Link>
		</>
	)
}
