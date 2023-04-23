import Router from 'next/router'
import React from 'react'
import Image from 'next/image'
import style from './acc.module.css'
import Seo from '@/components/seo'
import icon from '@/src/constants/icon'

function AccPageTitle({ title }: { title: string }) {
	const onClickBack = () => {
		Router.back()
	}
	return (
		<>
			<Seo title={title} description={title} url="" />
			<div className={style.acc_section}>
				<button onClick={onClickBack}>
					<Image src={icon.chevronLeft} alt="icon_back" width={24} height={24} layout="fixed" />
				</button>
				<span>{title}</span>
			</div>
		</>
	)
}

export default AccPageTitle
