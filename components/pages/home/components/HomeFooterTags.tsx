/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import style from '../home.module.css'
import { Masonry } from '@mui/lab'
import Link from 'next/link'
import { ITag } from '@/interfaces/tags'
import HomeSectionHead from '@/components/homeSectionHead'
import { directUrlProSerResult } from '@/context/direct-url'

interface IHomeFooterTagsProps {
	tags: ITag[]
}

export function HomeFooterTags(props: IHomeFooterTagsProps) {
	const { tags } = props
	return (
		<div className={style.homeTags}>
			<HomeSectionHead title="Danh mục làm đẹp" />
			<div className={style.homeTagCnt}>
				<Masonry columns={4} spacing={2}>
					{tags?.map((tag: ITag, index: number) => (
						<div key={index} className={style.tagItem}>
							<Link href={directUrlProSerResult('SERVICE', tag.name, tag.id)}>
								<a className={style.tagNamePar}>{tag.name}</a>
							</Link>
							<ul className={style.tagItemChild}>
								{tag.children
									?.filter((i: ITag) => (i.group = 'SERVICE'))
									.map((item: ITag, i: number) => (
										<li key={i}>
											<Link href={directUrlProSerResult('SERVICE', item.name, item.id)}>
												<a onClick={() => console.log(item.id)} className={style.tag_item_child}>
													{item.name}
												</a>
											</Link>
										</li>
									))}
							</ul>
						</div>
					))}
				</Masonry>
			</div>
		</div>
	)
}
