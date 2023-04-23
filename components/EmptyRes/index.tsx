import Image from 'next/image'
import style from './empty.module.css'
import img from '@/src/constants/img'

import React from 'react'

export default function EmptyRes({ title }: any) {
	return (
		<div className={style.res_null}>
			<span className={style.res_null_title}>{title || 'Opps! không có kết quả phù hợp'}</span>
			<div className={style.wrap_img}>
				<Image
					layout="responsive"
					objectFit="cover"
					width={'100%'}
					height={'100%'}
					src={img.resultNull}
					alt=""
				/>
			</div>
		</div>
	)
}
