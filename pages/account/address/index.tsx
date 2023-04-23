import React, { useEffect } from 'react';
import { AccountLayout } from '../../../components/layout';
import { NextPageWithLayout } from '../../../models';
import AccPageTitle from "../../../components/pages/account/AccPageTitle";
import style from "../acc.module.css";
import { IUserAddress } from "../../../interfaces/userAddress"
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../../redux/store/store.interface';
import {
    fetchAsyncUserAddress,
    updateAsyncAddress,
    removeAsyncUserAddress
} from '../../../redux/slices/auth-slice/address-slice';
import { ButtonLoading } from '../../../components/layout';
import Image from 'next/image';
import icon from '../../../src/constants/icon';
import { useRouter } from 'next/router';


const Address: NextPageWithLayout = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { address } = useSelector((state: IStore) => state.USER_ADDRESS)
    useEffect(() => {
        dispatch(fetchAsyncUserAddress())
    }, [])
    const onSetDefaultAddress = (item: IUserAddress) => {
        dispatch(updateAsyncAddress(item))
    }
    const onRemoveAddress = (id:number)=>{
        dispatch(removeAsyncUserAddress(id))
    }


    return (
        <>
            <AccPageTitle title='Địa chỉ giao hàng' />
            <div className={style.address_cnt}>
                <div className={style.address_btn}>
                    <ButtonLoading
                        title='+ Thêm mới địa chỉ'
                        onClick={()=>router.push("/account/address-form")}
                    />
                </div>
                <ul className={style.address_list}>
                    {
                        address.map((item: IUserAddress, index: number) => (
                            <li key={item.id} className={style.address_item_cnt}>
                                <div className={style.address_item_head}>
                                    <span className={style.item_head_left}>
                                        Địa chỉ {index + 1}
                                    </span>
                                    <div className={style.item_head_right}>
                                        {
                                            item.is_default ?
                                                <span className={style.item_default}>Mặc định</span>
                                                :
                                                <>
                                                    <ButtonLoading
                                                        title='Đặt làm mặc định'
                                                        // loading={true}
                                                        onClick={() => onSetDefaultAddress(item)}
                                                    />
                                                    <button
                                                        onClick={()=>onRemoveAddress(item.id)}
                                                    >
                                                        <Image
                                                            src={icon.TrashOrange} alt=""
                                                            layout="fixed"
                                                            width={24} height={24}
                                                        />
                                                    </button>
                                                </>
                                        }
                                    </div>
                                </div>
                                <div className={style.item_text}>
                                    {item.address}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}

Address.Layout = AccountLayout

export default Address;