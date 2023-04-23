import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import style from "./cart-cpn.module.css"
import { Drawer } from "@mui/material"
import { IStore } from '@/redux/store/store.interface';
import { useDeviceMobile, usePlatform, useSwr } from '@/context/hooks';
import { IPaymentMethod } from '@/interfaces/paymentMethod';
import PLAT_FORM_TYPE from '@/context/type/platform-type';

interface CartPaymentMethodProps {
    values: any,
    onChange: (value: any) => void
}

export function CartPaymentMethod(props: CartPaymentMethodProps) {
    const { values, onChange } = props;
    const [open, setOpen] = useState(false)
    const { USER } = useSelector((state: IStore) => state.USER)
    const { PLAT_FORM } = usePlatform()
    const IS_MB = useDeviceMobile();
    const paymentMethods: IPaymentMethod[] = useSwr("/paymentmethods", USER).responseArray

    const getMethodForMiniApp = () => {
        let method_id
        switch (PLAT_FORM) {
            case PLAT_FORM_TYPE.MOMO:
                return method_id = 1;
            case PLAT_FORM_TYPE.TIKI:
                return method_id = 10;
            case PLAT_FORM_TYPE.MB:
                return method_id = 12;
            default:
                break
        }
        return method_id
    }

    useEffect(() => {
        if (PLAT_FORM !== PLAT_FORM_TYPE.BEAUTYX) {
            const method_id = getMethodForMiniApp()
            onChange({
                ...values,
                payment_method_id: method_id
            })
        }
        // temple only momo
        else {
            onChange({
                ...values,
                payment_method_id: 1
            })
        }
    }, [])
    const onClickPaymentMethod = (item: IPaymentMethod) => {
        if (item.id === 1)
            onChange({
                ...values,
                payment_method_id: item.id
            })
    }

    return (
        <div className={style.cnt}>
            {
                PLAT_FORM === PLAT_FORM_TYPE.BEAUTYX &&
                <>
                    <span
                        onClick={() => setOpen(true)}
                        className={style.cart_section_title}
                    >
                        Chọn phương thức thanh toán
                        {/* <ImageComponent
                            src={icon.chevronRight} alt="" type="ICON"
                            width={20} height={20} layout="fixed"
                        /> */}
                    </span>
                    {
                        values?.payment_method_id ?
                            <div className={style.payment_method_choose}>
                                {
                                    paymentMethods?.find(i => i.id === values.payment_method_id)?.name_key
                                }
                            </div>
                            :
                            <span className={style.pm_method_null}>
                                Vui lòng chọn phương thức thanh toán
                            </span>
                    }
                    <Drawer
                        open={open}
                        onClose={() => setOpen(false)}
                        anchor={IS_MB ? "bottom" : "right"}
                    >
                        <div className={style.pm_method_cnt}>
                            <span className={style.cart_section_title}>
                                Thanh toán qua
                            </span>
                            <ul className={style.pm_method_list}>
                                {
                                    paymentMethods.map((item, index: number) => (
                                        <li
                                            style={
                                                values?.payment_method_id === item.id ?
                                                    { color: "var(--bg-white)", backgroundColor: "var(--pink-momo)" } : {}
                                            }
                                            onClick={() => onClickPaymentMethod(item)}
                                            key={index} className={style.pm_method_item}
                                        >
                                            {item.name_key}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </Drawer>
                </>
            }
        </div>
    );
}