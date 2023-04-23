import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../../../redux/slices/cart-slice/cartSlice'
import { ISerProCommon } from '../../../../interfaces/ser-pro-common'
import { IOrganization } from '../../../../interfaces/organization'
import { IDiscountPar } from '../../../../interfaces/discount'
import { PopupNotification } from '../../../layout/Popup'
import Image from 'next/image'
import icon from '../../../../src/constants/icon'
import style from '../detail.module.css'
import { IStore } from '../../../../redux/store/store.interface'
import { ICart } from '../../../../interfaces/cart'

interface ButtonAddCartProps {
	item: ISerProCommon
	org: IOrganization
	quantity: number
	discount?: IDiscountPar
	isConfirm?: boolean
	title?: string
	img?: boolean
}

export function ButtonAddCart(props: ButtonAddCartProps) {
	const {
		item,
		org,
		quantity,
		isConfirm,
		discount,
		title = 'Thêm vào giỏ hàng',
		img = true,
	} = props
	const { cartList } = useSelector((state: IStore) => state.CART)
	const [open, setOpen] = useState(false)
	useEffect(() => {
		setTimeout(() => setOpen(false), 2000)
	}, [])

	let sale_price = item.sale_price > 0 ? item.sale_price : item.old_price

	const dispatch = useDispatch()
	let price_discount
	if (discount?.discount_type === 'FINAL_PRICE') {
		price_discount = discount?.discount_value
	}
	if (discount?.discount_type === 'PRODUCT') {
		price_discount = item.sale_price
		sale_price = item.old_price
	}

	const calDiscount = {
		...discount,
		discount_value:
			discount?.discount_type === 'FINAL_PRICE'
				? sale_price * quantity - discount?.discount_value * quantity
				: discount?.discount_value,
	}
	const cartValues = {
		id: item?.id,
		org_id: org?.id,
		org_name: org?.name,
		cart_id: `${org.subdomain}${item.type}${item?.id}`,
		name: item?.name,
		quantity: quantity,
		is_type: item.type,
		isConfirm: isConfirm ? isConfirm : false,
		price: sale_price,
		price_discount: price_discount,
		final_price: discount?.discount_type === 'FINAL_PRICE' && discount?.discount_value,
		org: org,
		cart_item: item,
		discount: discount ? calDiscount : null,
	}
	const handleAddCart = () => {
		dispatch(addCart(cartValues))
		setOpen(true)
	}
	const item_in_cart = cartList.find((i: ICart) => i.cart_id === cartValues.cart_id)

	return (
		<>
			<button onClick={handleAddCart} className={style.button_add_cart}>
				{img === true && (
					<Image src={icon.ShoppingCartSimpleWhite} layout="fixed" width={24} height={24} />
				)}
				<span>{title}</span>
			</button>
			{open && (
				<PopupNotification
					open={open}
					setOpen={setOpen}
					title="Thông báo"
					content={`${item_in_cart ? 'Đã cập nhật' : 'Đã thêm'} " ${item.name} " vào giỏ hàng`}
					autoClose={true}
				/>
			)}
		</>
	)
}
