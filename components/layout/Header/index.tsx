/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import style from './head.module.css'
import Image from 'next/image'
import { Container } from '@mui/system'
import { useRouter } from 'next/router'
import HeaderSearch from './HeaderSearch'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonLoading } from '../Button';
import {
	directUrlProSerResult,
	directUrlAccount,
	directUrlApp,
	pageHideHeader,
} from '../../../context/direct-url'
import { ButtonBack } from '../ButtonBack'
import { ImageComponent } from '../ImageCpn'
import { Appointment } from '../../../interfaces/appointment'
import dayjs from 'dayjs'
import { getTotal } from '../../../redux/slices/cart-slice/cartSlice'
import { AppContext } from '@/context/AppProvider'
import { useDeviceMobile, useStorage, useTrans } from '@/context/hooks'
import { IStore } from '@/redux/store/store.interface'
import img from '@/src/constants/img'
import icon from '@/src/constants/icon'
import { ITag } from '@/interfaces/tags'
import { onEmptyUser } from '@/redux/slices/auth-slice/user-slice'

const dataTag = [
	{
		id: 1,
		name: 'Địa điểm làm đẹp gần bạn',
		url: '/',
	},
	{
		id: 9,
		name: 'Tin tức',
		url: '/',
	},
]
function HeaderLayout() {
	const { tagsProduct, appointments } = useContext(AppContext)
	const refMenu = useRef<any>()
	const refNoti = useRef<any>()
	const refCate = useRef<any>()
	const router = useRouter()
	const { route } = useRouter()
	const IS_MB = useDeviceMobile()
	const { USER } = useSelector((state: IStore) => state.USER)
	const { cartQuantity, cartList } = useSelector((state: IStore) => state.CART)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getTotal())
	}, [cartList])
	const appsToday = appointments.filter(
		(i: Appointment) => dayjs(i.time_start).format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')
	)
	const notiCount = appsToday.length

	//handle UI
	const onToggleMenu = (d: 'block' | 'none') => {
		if (d === 'none') {
			setTimeout(() => {
				if (refMenu.current) refMenu.current.style.display = d
			}, 100)
		} else {
			refMenu.current.style.display = d
		}
	}
	const onToggleNoti = (d: 'block' | 'none') => {
		if (d === 'none') {
			setTimeout(() => {
				if (refNoti.current) refNoti.current.style.display = d
			}, 100)
		} else {
			refNoti.current.style.display = d
		}
	}
	const onToggleCate = (d: 'block' | 'none') => {
		if (d === 'none') {
			setTimeout(() => {
				refCate.current.style.display = d
			}, 100)
		} else {
			refCate.current.style.display = d
		}
	}
	// fix on safari
	// const onToggleCateBtn = (ref:any) =>{
	// 	const dis = ref.current.style.display
	// 	if(dis === "block") ref.current.style.display ="none"
	// 	if(dis === "" || dis === "none") ref.current.style.display ="block"
	// }
	let FOR_PAGE = true
	if (IS_MB && pageHideHeader.includes(route)) FOR_PAGE = false
	return (
		<>
			{FOR_PAGE && (
				<header className={style.header}>
					<Container>
						<div className={style.headerWrap}>
							<div className={style.headerLeft}>
								<div className={style.headerLeft_back}>
									<ButtonBack />
								</div>
								<Link href="/">
									<a className={style.headerLogo}>
										<Image src={img.beautyX} alt="" />
									</a>
								</Link>
								<div className={style.headerSearch}>
									<HeaderSearch />
									<div className={style.headerSearchBot}>
										<button
											onFocus={() => onToggleCate('block')}
											onBlur={() => onToggleCate('none')}
											className={style.headCateBtn}
										>
											<Image
												style={{ marginRight: '6px' }}
												src={icon.listOrange}
												layout="fixed"
												width={16}
												height={16}
												alt=""
											/>
											Danh mục sản phẩm
											<div ref={refCate} className={style.headerCateLabel}>
												<ProductCate tagsProduct={tagsProduct} />
											</div>
										</button>
										{dataTag.map((item: any, index: number) => (
											<Link key={index} href={item.url}>
												<a className={style.headerSearchBotItem}>{item.name}</a>
											</Link>
										))}
									</div>
								</div>
							</div>

							<div className={style.headerRight}>
								{USER ? (
									<>
										<Link href={directUrlAccount().information}>
											<a className={style.headerRight_item_user}>
												<Image
													src={USER.avatar}
													layout="fixed"
													width={36}
													height={36}
													alt="avatar"
												/>
												<span className={style.user_name}>{USER.fullname}</span>
											</a>
										</Link>
										<Link href={directUrlApp('calendar')}>
											<a className={style.headerRight_item}>
												<Image
													src={icon.calendarAcc}
													layout="responsive"
													width={'100%'}
													height={'100%'}
													alt="cart"
												/>
												{appsToday.length > 0 && (
													<span className={style.headerRight_item_badge}>{appsToday.length}</span>
												)}
											</a>
										</Link>
										<button
											// onClick={()=>onToggleCateBtn(refNoti)}
											onFocus={() => onToggleNoti('block')}
											onBlur={() => onToggleNoti('none')}
											className={style.headerRight_item}
										>
											<Image
												src={icon.Bell}
												layout="responsive"
												width={'100%'}
												height={'100%'}
												alt="cart"
											/>
											{notiCount > 0 && (
												<span className={style.headerRight_item_badge}>
													{notiCount >= 10 ? '9+' : notiCount}
												</span>
											)}
											<Notification appsToday={appsToday} refNoti={refNoti} />
										</button>
									</>
								) : (
									<div className={style.headerRight_item_btn}>
										<ButtonLoading onClick={() => router.push('/sign-up')} title="Đăng ký" />
										<ButtonLoading onClick={() => router.push('/sign')} title="Đăng nhập" />
									</div>
								)}
								<button
									// onClick={()=>onToggleCateBtn(refMenu)}
									onFocus={() => onToggleMenu('block')}
									onBlur={() => onToggleMenu('none')}
									className={style.headerRight_item_menu}
								>
									<Image
										src={icon.Menu}
										layout="responsive"
										width={'100%'}
										height={'100%'}
										alt="cart"
									/>
									<MenuContainer refMenu={refMenu} USER={USER} />
								</button>
								<Link href="/cart">
									<a className={style.headerRight_item}>
										<Image
											src={icon.cartPurpleBold}
											layout="responsive"
											width={'100%'}
											height={'100%'}
											alt="cart"
										/>
										<span className={style.headerRight_item_badge}>
											{cartQuantity >= 10 ? '9+' : cartQuantity}
										</span>
									</a>
								</Link>
								<Link href="/#">
									<a className={style.headerRight_bot}>Kênh người bán</a>
								</Link>
							</div>
						</div>
					</Container>
				</header>
			)}
		</>
	)
}
export default HeaderLayout
const ProductCate = ({ tagsProduct }:{tagsProduct:any[]}) => {
	const [tagsChild, setTagsChild] = useState<ITag[]>([])
	const onHoverParentItem = (id: number) => {
		setTagsChild(tagsProduct?.find((i:any) => i.id === id)?.children)
	}

	return (
		<div className={style.product_cate_ctn}>
			<ul className={style.product_pa_cate_list}>
				{tagsProduct.map((item_parent: ITag, index: number) => (
					<li
						key={index}
						className={style.product_pa_item_cnt}
						onMouseEnter={() => onHoverParentItem(item_parent.id)}
					>
						<Link href={directUrlProSerResult('PRODUCT', item_parent.name, item_parent.id)}>
							<a className={style.product_pa_item}>{item_parent.name}</a>
						</Link>
					</li>
				))}
				<div className={style.product_child_cnt}>
					<ul className={style.child_list}>
						{tagsChild?.map((child, i) => (
							<li key={i} className={style.child_list_item_cnt}>
								<Link href={directUrlProSerResult('PRODUCT', child.name, child.id)}>
									<a className={style.child_list_item}>
										<Image
											src={child?.media[0]?.original_url}
											alt={''}
											layout="fixed"
											width={32}
											height={32}
										/>
										<span style={{ marginLeft: '6px' }}>{child.name}</span>
									</a>
								</Link>
								<ItemChild parent_id={child.id} />
							</li>
						))}
					</ul>
				</div>
			</ul>
		</div>
	)
}
const ItemChild = ({ parent_id }:{parent_id:any}) => {
	const { tagsProductAll } = useContext(AppContext)
	const children: ITag[] = tagsProductAll.filter((i: ITag) => i.parent_id === parent_id)
	return (
		<ul className={style.child_child_list}>
			{children.map((item, index) => (
				<li key={index} className={style.child_child_item}>
					<Link href={directUrlProSerResult('PRODUCT', item.name, item.id)}>
						<a className={style.child_child_item_text}>{item.name}</a>
					</Link>
				</li>
			))}
		</ul>
	)
}

const MenuContainer = (props:any) => {
	const { refMenu } = props
	const trans = useTrans()
	const { USER } = useSelector((state: IStore) => state.USER)
	const dispatch = useDispatch()
	const router = useRouter()
	const { locale } = router
	const { setItem } = useStorage()
	const changeLang = (lang: string) => {
		setItem('language', lang, 'local')
		router.push('/', '/', { locale: lang })
	}
	const listMenu = [
		{ id: 1, icon: icon.User, text: trans.Header.my_acc, url: directUrlAccount().information },
		{ id: 2, icon: icon.Clock_purple, text: 'Order history', url: directUrlAccount().order_paid },
		{ id: 3, icon: icon.bag, text: trans.Header.appointment, url: directUrlApp('calendar') },
		{ id: 4, icon: icon.bag, text: trans.app.my_services, url: directUrlApp('service') },
		{ id: 5, icon: icon.User, text: trans.Header.my_codes, url: directUrlAccount().discount },
	]
	const onSignOut = () => {
		dispatch(onEmptyUser())
	}

	return (
		<div ref={refMenu} className={style.menu_cnt}>
			<div className={style.menu_cnt_warp}>
				<div className={style.menu_title}>Menu</div>
				<ul className={style.menu_list}>
					{USER &&
						listMenu.map((item) => (
							<li key={item.id}>
								<Link href={item.url}>
									<a className={style.menu_list_item}>
										<Image src={item.icon} layout="fixed" width={20} height={20} alt="" />
										<span>{item.text}</span>
									</a>
								</Link>
							</li>
						))}
					<li
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<div className={style.menu_list_item}>
							<div className={style.menu_list_item_left}>
								<Image src={icon.languagePurple} layout="fixed" width={20} height={20} alt="" />
								<span>{trans.Header.language}</span>
							</div>
						</div>
						<div className={style.menu_list_item_right}>
							{['vi', 'en'].map((i) => (
								<span
									onClick={() => changeLang(i)}
									style={
										i === locale
											? {
													color: 'var(--bg-white)',
													backgroundColor: 'var(--purple)',
											  }
											: {}
									}
									key={i}
								>
									{i}
								</span>
							))}
						</div>
					</li>
				</ul>
				{USER && (
					<div className={style.menu_bot}>
						<ButtonLoading onClick={onSignOut} title={trans.Header.sign_out} elementType="div" />
					</div>
				)}
			</div>
		</div>
	)
}
const Notification = (props:any) => {
	const trans = useTrans()
	const { USER } = useSelector((state: IStore) => state.USER)
	const { appsToday } = props
	const notiList = [
		{
			id: 1,
			title: `Xin chào ${USER?.fullname} ! Hôm nay bạn có ${appsToday.length} lịch hẹn `,
			url: directUrlApp('calendar'),
			icon: icon.calendarWhite,
			count: appsToday.length,
		},
	]
	const total = appsToday.length
	return (
		<div className={style.menu_cnt} ref={props.refNoti}>
			<div className={style.menu_cnt_warp}>
				<div className={style.menu_title}>{trans.Header.noti}</div>
				{total === 0 && <h3 className={style.menu_title_noti_empty}>Không có thông báo nào</h3>}
				<ul className={style.noti_list}>
					{notiList.map((noti) => (
						<li key={noti.id} className={style.noti_list_item}>
							{noti.count > 0 && (
								<Link href={noti.url}>
									<a className={style.noti_item}>
										<div className={style.noti_item_img}>
											<ImageComponent
												src={noti.icon}
												alt=""
												type="ICON"
												width={14}
												height={14}
												layout="fixed"
											/>
										</div>
										<div className={style.noti_item_text}>
											<h4>{noti.title}</h4>
											<p>Xem ngay nhé ! </p>
										</div>
									</a>
								</Link>
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
