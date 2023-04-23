import React, { useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import { Dialog } from '@mui/material'
import { useDeviceMobile } from '@/context/hooks'

interface IProps {
	video: any
}
export function OrgGalleriesVideoItem(props: IProps) {
	const { video } = props
	const is_mb = useDeviceMobile()
	const [open, setOpen] = useState(false)

	return (
		<>
			<div onClick={() => setOpen(true)}>
				<ReactPlayer muted={true} width="100%" height="100%" url={video?.video_url} />
			</div>
			<Dialog open={open} onClose={() => setOpen(false)}>
				{is_mb === true ? (
					<ReactPlayer width="100%" playing controls muted={true} url={video?.video_url} />
				) : (
					<ReactPlayer
						width="100%"
						height="80vh"
						playing
						controls
						muted={true}
						url={video?.video_url}
					/>
				)}
			</Dialog>
		</>
	)
}
