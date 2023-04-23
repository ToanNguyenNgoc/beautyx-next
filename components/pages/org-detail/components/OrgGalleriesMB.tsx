import React from 'react'
import { Dialog, Tab } from '@mui/material'
import { Masonry, TabContext, TabList, TabPanel } from '@mui/lab'
import { OrgGalleriesImgItem, OrgGalleriesVideoItem } from '../index'
import style from '../org-detail.module.css'
import { Transition } from '@/src/utils/transition'
import { ImageComponent } from '@/components/layout'
import icon from '@/src/constants/icon'

export function OrgGalleriesMB(props:any) {
	const { chooseThumb, open, setOpen } = props
	const [value, setValue] = React.useState('1')
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue)
	}
	return (
		<Dialog fullScreen open={open} TransitionComponent={Transition}>
			<div className={style.org_galleries_mb}>
				<div className={style.galleries_mb_head}>
					<button className={style.galleries_mb_close} onClick={() => setOpen(false)}>
						<ImageComponent
							alt=""
							layout="fixed"
							objectFit="cover"
							src={icon.chevronLeft}
							width={24}
							height={24}
							type="ICON"
						/>
					</button>
					<span className={style.galleries_mb_title}>{chooseThumb?.name}</span>
				</div>
				<div className={style.galleries_section_wrap_mb}>
					<TabContext value={chooseThumb?.videos.length > '0' ? value : '1'}>
						<div className={style.galleries_tab_mb}>
							<TabList onChange={handleChange} aria-label="lab API tabs example">
								<Tab label="Hình ảnh" value="1" />
								{chooseThumb?.videos.length > 0 && <Tab label="Video" value="2" />}
							</TabList>
						</div>
						<TabPanel value="1">
							<div className={style.galleries_masory_mb}>
								<Masonry columns={2} spacing={1}>
									{chooseThumb?.images?.map((item: any, index: number) => (
										<OrgGalleriesImgItem chooseThumb={chooseThumb} key={index} item={item} />
									))}
								</Masonry>
							</div>
						</TabPanel>
						<TabPanel value="2">
							<div className={style.galleries_masory_mb}>
								<Masonry columns={2} spacing={1}>
									{chooseThumb?.videos?.map((item: any, index: number) => (
										<OrgGalleriesVideoItem key={index} video={item} />
									))}
								</Masonry>
							</div>
						</TabPanel>
					</TabContext>
				</div>
			</div>
		</Dialog>
	)
}
