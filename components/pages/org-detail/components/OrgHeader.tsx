import { ImageComponent } from '@/components/layout'
import { useDeviceMobile } from '@/context/hooks'
import { IOrganization } from '@/interfaces/organization'
import { IStore } from '@/redux/store/store.interface'
import icon from '@/src/constants/icon'
import { debounce } from 'lodash'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useCallback, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { ButtonFavorite } from '../../service-product-detail'

import style from '../org-detail.module.css'
import OrgHeaderSearch from './OrgHeaderSearch'

interface IProps {
	org: IOrganization
}
// onload event
const isBrowser = (() => typeof window !== 'undefined')()
if (isBrowser) {
	window.addEventListener('scroll', function () {
		const scrolled: any = window.scrollY
		const de_header = document.querySelector('#head_org')
		const windowPosition = scrolled > 80
		if (de_header) {
			de_header.classList.toggle(style.mb_head_act, windowPosition)
		}
	})
}

export function OrgHeader(props: IProps) {
	const { org } = props
	const { USER } = useSelector((state: IStore) => state.USER)
	const [keyword, setKeyword] = useState('')
	const is_mb = useDeviceMobile()
	const onSetDebounceKeyword = useCallback(
		debounce((text) => setKeyword(text), 1000),
		[org]
	)

	const onInputChange = (e: any) => {
		onSetDebounceKeyword(e.target.value)
		setKeyword(e.target.value)
	}
	const router = useRouter()
	const orgHeaderRef = useRef<any>()
	const body = useRef<any>()

	const orgSearchBtnRef = useRef<any>()
	const orgSearchCntRef = useRef<any>()
	const orgInputRef = useRef<any>()

	const onClickSearchIcon = () => {
		orgHeaderRef.current.classList.add(style.mb_head_act)
		orgSearchBtnRef.current.style.marginLeft = 0
		orgSearchBtnRef.current.style.borderRadius = '0px 16px 16px 0px'
		orgInputRef.current.classList.add(style.mb_input_show)
		orgSearchCntRef?.current?.classList.add(style.org_search_show)
		// body.current.offsetParent.classList.add(style.position_fixed)
	}
	const onBackClick = () => {
		if (orgSearchCntRef?.current?.offsetHeight > 0) {
			if (window.scrollY <= 80) {
				orgHeaderRef.current.classList.remove(style.mb_head_act)
			}
			orgSearchBtnRef.current.style.borderRadius = '100%'
			orgInputRef.current.classList.remove(style.mb_input_show)
			orgSearchCntRef?.current?.classList.remove(style.org_search_show)
			setKeyword('')
			// body.current.offsetParent.classList.remove(style.position_fixed)
		} else {
			router.back()
		}
	}
	const onGotoCart = () => {
		if (USER) {
			router.push('/cart')
		} else {
			router.push('/sign')
		}
	}

	return (
		<div ref={body}>
			<div id="head_org" ref={orgHeaderRef} className={style.mb_head_org_cnt}>
				<div className={style.mb_head_org_cnt_left}>
					<button className={style.mb_head_org_cnt_button} onClick={onBackClick}>
						<div className={style.icon_btn}>
							<Image
								layout="responsive"
								width={'100%'}
								height={'100%'}
								src={icon.chevronLeft}
								alt=""
							/>
						</div>
					</button>
				</div>
				<div className={style.mb_head_org_cnt_right}>
					<div className={style.wrap_input}>
						<input
							className={style.mb_head_org_input}
							ref={orgInputRef}
							onChange={onInputChange}
							value={keyword}
							type="text"
							placeholder="Tìm kiếm trong cửa hàng..."
						/>
						{keyword.length > 0 && (
							<div onClick={() => setKeyword('')} className={style.clean_text}>
								<ImageComponent
									layout="fixed"
									type="ICON"
									width={16}
									height={16}
									src={icon.x}
									alt=""
								/>
							</div>
						)}
					</div>
					<button
						className={style.mb_head_org_cnt_button}
						ref={orgSearchBtnRef}
						onClick={onClickSearchIcon}
					>
						<div className={style.icon_btn}>
							<Image
								layout="responsive"
								width={'100%'}
								height={'100%'}
								src={icon.searchPurple}
								alt=""
							/>
						</div>
					</button>
					<button className={style.mb_head_org_cnt_button} onClick={onGotoCart}>
						<div className={style.badge}>
							<p>0</p>
						</div>
						<div className={style.icon_btn}>
							<Image
								layout="responsive"
								width={'100%'}
								height={'100%'}
								src={icon.ShoppingCartSimple}
								alt=""
							/>
						</div>
					</button>
					{/* {isShowSearch && ( */}
					<ButtonFavorite type="ORG" org_id={org?.id} subdomain={org?.subdomain} is_icon={true} />
				</div>
			</div>
			{is_mb === true && (
				<OrgHeaderSearch
					orgSearchCntRef={orgSearchCntRef}
					keyword={keyword}
					org={org}
					setKeyword={setKeyword}
				/>
			)}
		</div>
	)
}
