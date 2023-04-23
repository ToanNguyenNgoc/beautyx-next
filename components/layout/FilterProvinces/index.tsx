import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppProvider';
import { IProvince } from "../../../interfaces/provinces"
import style from "./filter-province.module.css"

interface FilterProvincesProps {
    onChangeProvince?: (province_code: any) => void,
    province_code?: any
}

export function FilterProvinces(props: FilterProvincesProps) {
    const { provinces } = useContext(AppContext)
    const { onChangeProvince, province_code } = props;
    const onClickProvinceItem = (code: number) => {
        if (onChangeProvince) {
            if (parseInt(province_code) === code) {
                onChangeProvince("")
            } else {
                onChangeProvince(code)
            }
        }
    }
    let code = 0
    if (province_code) code = parseInt(`${province_code}`)
    return (
        <>
            <span className={style.filter_title}>
                Khu vực
            </span>
            <div className={style.provinces_body}>
                <ul className={style.provinces_list}>
                    {
                        provinces.
                            slice(0, 5).
                            map((item: IProvince, index: number) => (
                                <li
                                    onClick={() => onClickProvinceItem(item.province_code)}
                                    key={index} className={style.province_item}
                                >
                                    <div
                                        style={item.province_code === code ?
                                            { border: "solid 1px var(--purple)" } : {}}
                                        className={style.province_item_check}
                                    >
                                        {
                                            item.province_code === code &&
                                            <span className={style.province_item_check_child}></span>
                                        }
                                    </div>
                                    <span className={style.province_item_name}>
                                        {item.name}
                                    </span>
                                </li>
                            ))
                    }
                    <li className={style.province_item_last}>
                        Xem thêm
                    </li>
                </ul>
            </div>
        </>
    );
}