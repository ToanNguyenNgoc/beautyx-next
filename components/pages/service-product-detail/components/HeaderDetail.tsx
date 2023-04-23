import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTotal } from '../../../../redux/slices/cart-slice/cartSlice'
import { IStore } from '../../../../redux/store/store.interface'
import icon from '../../../../src/constants/icon'
import style from '../detail.module.css'

// onload event
const isBrowser = (() => typeof window !== 'undefined')()
if (isBrowser) {
	window.addEventListener('scroll', function () {
		const scrolled: any = window.scrollY
		const de_header = document.querySelector('#head_detail')
		const windowPosition = scrolled > 80
		if (de_header) {
			de_header.classList.toggle(style.mb_head_act, windowPosition)
		}
	})
}
export function HeaderDetail() {
	const router = useRouter()
	const onGotoCart = () => {
		router.push('/cart')
	}
	const { cartQuantity, cartList } = useSelector((state: IStore) => state.CART)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getTotal())
	}, [cartList])
	return (
		<>
			<div id="head_detail" className={style.head_detail_mb}>
				<button className={style.header_detail_left}>
					<div onClick={() => router.back()} className={style.icon_btn}>
						<Image layout="fixed" width={'16'} height={'16'} src={icon.chevronLeft} alt="" />
					</div>
				</button>
				<button className={style.header_detail_right} onClick={onGotoCart}>
					<div className={style.header_detail_badge}>
						<p> {cartQuantity >= 10 ? '9+' : cartQuantity}</p>
					</div>
					<div className={style.header_detail_cart}>
						<div className={style.icon_btn}>
							<Image
								layout="fixed"
								width={'16'}
								height={'16'}
								src={icon.ShoppingCartSimple}
								alt=""
							/>
						</div>
					</div>
				</button>
			</div>
		</>
	)
}
