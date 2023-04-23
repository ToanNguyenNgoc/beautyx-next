import React, { useRef, useState } from 'react';
import { NextPageWithLayout } from '../../../models';
import { AccountLayout, ButtonLoading } from '../../../components/layout';
import AccPageTitle from '../../../components/pages/account/AccPageTitle';
import {useSwr} from "../../../context/hooks"
import { postAsyncAddress } from "../../../redux/slices/auth-slice/address-slice"
import style from "../acc.module.css"
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

const AddressForm: NextPageWithLayout = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const refProvinces = useRef<any>()
    const refDistricts = useRef<any>()
    const refWards = useRef<any>()
    const [add, setAdd] = useState({
        province: { code: null, text: null },
        district: { code: null, text: null },
        ward: { code: null, text: null },
        text: ""
    })
    const toggleProvinces = () => {
        refProvinces.current.classList.toggle(style.list_act)
    }
    const toggleDistricts = () => {
        districts.length > 0 &&
            refDistricts.current.classList.toggle(style.list_act)
    }
    const toggleWards = () => {
        wards.length > 0 &&
            refWards.current.classList.toggle(style.list_act)
    }
    const provinces = useSwr("/provinces?sort=-organizations_count", true).responseArray;
    const onChooseProvince = (province:any) => {
        if (!add.province.code || province.code !== add.province.code) {
            setAdd({
                ...add,
                district: { code: null, text: null },
                ward: { code: null, text: null },
                province: { code: province.province_code, text: province.name },
                text: "",
            })
            toggleProvinces()
        }
    }
    let conditionDistricts = false
    if (add.province.code) conditionDistricts = true
    const districts = useSwr(
        `/provinces/${add.province.code}/districts`,
        conditionDistricts).responseArray
    const onChooseDistrict = (district:any) => {
        if (!add.district.code || district.code !== add.district.code) {
            setAdd({
                ...add,
                district: { code: district.district_code, text: district.name },
                ward: { code: null, text: null },
                text: "",
            })
            toggleDistricts()
        }
    }
    let conditionWards = false
    if (add.district.code) conditionWards = true
    const wards = useSwr(
        `/districts/${add.district.code}/wards`,
        conditionWards).responseArray
    const onChooseWard = (ward:any) => {
        if (!add.ward.code || ward.code !== add.ward.code) {
            setAdd({
                ...add,
                ward: { code: ward.ward_code, text: ward.name },
                text: "",
            })
            toggleWards()
        }
    }
    const onInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setAdd({
            ...add,
            text: e.target.value
        })
    }
    const onSaveAddress = async () => {
        if (add.ward.code && add.text !== "") {
            const res = await dispatch(postAsyncAddress({
                address: `${add.text},${add.ward.text},${add.district.text},${add.province.text}`,
                is_default: true
            }))
            if (res.meta.requestStatus === "fulfilled") {
                router.back()
            }
        }
    }
    return (
        <>
            <AccPageTitle title='Thêm mới địa chỉ' />
            <div className={style.form_cnt}>
                <div className={style.item_wrapper}>
                    <div
                        onClick={toggleProvinces}
                        className={style.item_text_choose}
                    >
                        {add.province.text ?? "Vui lòng chọn tỉnh thành"}
                    </div>
                    <div ref={refProvinces} className={style.provinces_list_cnt}>
                        <ul className={style.list_item}>
                            {
                                provinces.map((item: any, index: number) => (
                                    <li
                                        style={add.province.code === item.province_code ? {
                                            fontWeight: "600"
                                        } : {}}
                                        onClick={() => onChooseProvince(item)} key={index}
                                    >
                                        {item.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className={style.item_wrapper}>
                    <div onClick={toggleDistricts} className={style.item_text_choose}>
                        {add.district.text ?? "Vui lòng chọn quận/huyện"}
                    </div>
                    <div ref={refDistricts} className={style.districts_list_cnt}>
                        <ul className={style.list_item}>
                            {
                                districts.map((item: any, index: number) => (
                                    <li
                                        style={add.district.code === item.district_code ? {
                                            fontWeight: "600"
                                        } : {}}
                                        onClick={() => onChooseDistrict(item)} key={index}
                                    >
                                        {item.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className={style.item_wrapper}>
                    <div onClick={toggleWards} className={style.item_text_choose}>
                        {add.ward.text ?? "Vui lòng chọn quận/huyện"}
                    </div>
                    <div ref={refWards} className={style.wards_list_cnt}>
                        <ul className={style.list_item}>
                            {
                                wards.map((item: any, index: number) => (
                                    <li
                                        style={add.ward.code === item.ward_code ? {
                                            fontWeight: "600"
                                        } : {}}
                                        onClick={() => onChooseWard(item)} key={index}
                                    >
                                        {item.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className={style.item_wrapper}>
                    <input
                        onChange={onInputChange}
                        type="text" className={style.address_input}
                        placeholder="Số nhà, tên đường"
                    />
                </div>
                <div className={style.form_address_btn}>
                    <ButtonLoading
                        title='Lưu địa chỉ'
                        onClick={onSaveAddress}
                    />
                </div>
            </div>
        </>
    );
}
AddressForm.Layout = AccountLayout

export default AddressForm;