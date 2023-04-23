import { Masonry, TabContext, TabList, TabPanel } from '@mui/lab'
import { Tab } from '@mui/material'
import React, { useState } from 'react'
import style from '../org-detail.module.css'
import { OrgGalleriesImgItem, OrgGalleriesMB, OrgGalleriesVideoItem } from '../index'
import { IOrganization } from '@/interfaces/organization'
import { useDeviceMobile } from '@/context/hooks'
import { ImageComponent } from '@/components/layout'
interface IProps {
	org: IOrganization
	galleries: any
}
export function OrgGalleries(props: IProps) {
	const { org, galleries } = props
	const is_mb = useDeviceMobile()
	const [chooseThumb, setChooseThumb] = useState<any>(galleries[0])
	const [openImages, setOpenImages] = useState(false)
	const onChooseThumb = (thumb: any) => {
		setChooseThumb(thumb)
		if (is_mb) {
			setOpenImages(true)
		}
	}
	const [value, setValue] = React.useState('1')
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue)
	}

	return (
		<div className={style.org_galleries_cnt}>
			<div className={style.thumb_section}>
				<ul className={style.thumb_list}>
					{galleries.map((item: any, index: number) => (
						<li key={index} onClick={() => onChooseThumb(item)}>
							<div className={style.thumb_item}>
								<div className={style.thumb_item_img}>
									<ImageComponent
										alt=""
										layout="responsive"
										objectFit="cover"
										src={item.image_url}
										width={'100%'}
										height={'100%'}
										type="IMG"
									/>
								</div>
								<div className={style.thumb_item_title}>
									<span>{item.name}</span>
									<span>{item.images?.length} Hình</span>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
			{is_mb === false && (
				<div className={style.galleries_section}>
					<span className={style.galleries_section_title}>{chooseThumb?.name}</span>
					<div className={style.galleries_section_wrap}>
						<TabContext value={chooseThumb?.videos.length > '0' ? value : '1'}>
							<div className={style.galleries_section_tab}>
								<TabList onChange={handleChange} aria-label="lab API tabs example">
									<Tab label="Hình ảnh" value="1" />
									{chooseThumb?.videos.length > 0 && <Tab label="Video" value="2" />}
								</TabList>
							</div>
							<TabPanel value="1">
								<div className={style.galleries_section_masory}>
									<Masonry columns={6} spacing={1.5}>
										{chooseThumb?.images?.map((item: any, index: number) => (
											<OrgGalleriesImgItem chooseThumb={chooseThumb} key={index} item={item} />
										))}
									</Masonry>
								</div>
							</TabPanel>
							<TabPanel value="2">
								<div className={style.galleries_section_masory}>
									<Masonry columns={6} spacing={1.5}>
										{chooseThumb?.videos?.map((item: any, index: number) => (
											<OrgGalleriesVideoItem key={index} video={item} />
										))}
									</Masonry>
								</div>
							</TabPanel>
						</TabContext>
					</div>
				</div>
			)}
			<OrgGalleriesMB open={openImages} setOpen={setOpenImages} chooseThumb={chooseThumb} />
		</div>
	)
}
