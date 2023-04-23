import React, { useEffect, useState } from 'react'
import img from '@/src/constants/img'
import Image from 'next/image'
import {imageProxy} from "@/context/hooks"
interface ImageComponentProps {
	src: string
	layout: 'fill' | 'fixed' | 'intrinsic' | 'responsive'
	type: 'IMG' | 'ICON'
	alt: string
	width?: any
	height?: any
	style?: any
	objectFit?: any
	sizes?: any
	onClick?: () => void
}

export function ImageComponent(props: ImageComponentProps) {
	const { src, layout, type, alt, width, height, style, objectFit, sizes, onClick } = props
	const [imgSrc, setImgSrc] = useState(type === 'ICON' ? src : imageProxy(src))
	useEffect(() => {
		setImgSrc(type === 'ICON' ? src : imageProxy(src))
	}, [src])
	const onClickImage = () => onClick && onClick()
	return (
		<Image
			src={imgSrc}
			layout={layout}
			alt={alt}
			width={width}
			height={height}
			style={style}
			objectFit={objectFit}
			onError={() => setImgSrc(img.beautyx)}
			onClick={onClickImage}
			sizes={sizes}
		/>
	)
}
