import * as React from 'react'
import { LayoutProps } from '@/models/index'
import Footer from './Footer'
import HeaderLayout from './Header'
import BottomNavigation from './BottomNavigation'
import { usePlatform, useLoginPlatForm } from '@/context/hooks'
import { useRouter } from 'next/router'
import { AuthLoginTiki } from '@/interfaces/params-auth-mini-app'
import { useDispatch } from 'react-redux'
import { loginAsyncTiki } from '@/redux/slices/auth-slice/login-slice'
import { fetchAsyncUser } from '@/redux/slices/auth-slice/user-slice'
import { PopupNotification } from './Popup'
import { NProgress } from '@/components/layout/NProgress'

export interface IMainLayoutProps { }

export function MainLayout({ children }: LayoutProps) {
	const { PLAT_FORM } = usePlatform()
	useLoginPlatForm(`${PLAT_FORM}`)

	return (
		<>
			<NProgress />
			<HeaderLayout />
			{<div>{children}</div>}
			<BottomNavigation />
			<Footer />
		</>
	)
}
const LoginTiki = () => {
	const { query }: any = useRouter();
	const dispatch = useDispatch();
	const [noti, setNoti] = React.useState({
		open: false, result: ""
	})
	const handleLoginTiki = async () => {
		const phone = `0${query.telephone?.slice(-9)}`
		const params: AuthLoginTiki = {
			customerId: query.customerId,
			avatar: query.avatar,
			email: query.email,
			name: query.name,
			phone: phone,
			authCode: query.authCode
		}
		const res = await dispatch(loginAsyncTiki(params))
		if (res?.payload) {
			const res_user = await dispatch(fetchAsyncUser())
			setNoti({
				open: true,
				result: JSON.stringify(res_user?.payload)
			})
		} else {
			setNoti({
				open: true,
				result: JSON.stringify(res)
			})
		}

	}

	return (
		<>
			<div>
				{JSON.stringify(query)}
			</div>
			<button
				onClick={handleLoginTiki}
			>
				Login start
			</button>
			<PopupNotification
				open={noti.open}
				content={noti.result}
			/>
		</>
	)
}
