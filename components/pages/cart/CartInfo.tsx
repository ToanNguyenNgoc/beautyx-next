import React, { useEffect } from 'react';
import Router from 'next/router';
import style from "./cart-cpn.module.css";
import { useAddress } from '@/context/hooks';
import { ButtonLoading } from '@/components/layout';
import { directUrlAccount } from '@/context/direct-url';
import icon from '@/src/constants/icon';

interface CartInfoProps {
    values?: any,
    onChange?: (values: any) => void,
    hideEdit?: boolean
}

export function CartInfo(props: CartInfoProps) {
    const { values, onChange, hideEdit } = props;
    const { addressDefault, USER } = useAddress()
    useEffect(() => {
        if (onChange) {
            onChange({
                ...values,
                user_address_id: addressDefault?.id
            })
        }
    }, [addressDefault])
    return (
        <div className={style.cnt}>
            <span className={style.cart_section_title}>
                Thông tin thanh toán
            </span>
            <div className={style.cart_info_body}>
                <div className={style.cart_info_body_item}>
                    <div className={style.cart_info_label}>
                        Họ tên
                    </div>
                    <div className={style.cart_info_text}>{USER?.fullname}</div>
                    {
                        !hideEdit &&
                        <ButtonLoading
                            onClick={() => Router.push(directUrlAccount().information)}
                            icon={icon.editWhite}
                        />
                    }
                </div>
                <div className={style.cart_info_body_item}>
                    <div className={style.cart_info_label}>
                        Điện thoại
                    </div>
                    <div className={style.cart_info_text}>{USER?.telephone}</div>
                </div>
                <div className={style.cart_info_body_item}>
                    <div className={style.cart_info_label}>
                        Địa chỉ
                    </div>
                    <div className={style.cart_info_text}>{addressDefault?.address}</div>
                    {
                        !hideEdit &&
                        <ButtonLoading
                            onClick={() => Router.push(directUrlAccount().address)}
                            icon={icon.editWhite}
                        />
                    }
                </div>
            </div>
        </div>
    );
}