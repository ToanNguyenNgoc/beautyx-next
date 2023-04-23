import React, { useEffect, useState } from 'react';
import style from "./home-result.module.css"
import { useRouter } from 'next/router';
import { identity, pickBy } from 'lodash';
import {
    FilterProvinces,
    FilterTags,
    FilterPrices,
    FilterPriority
} from "../../layout"



export function OrgFilter() {
    const router = useRouter();
    const [params, setParams] = useState({
        tag_name: `${router.query.tag_name ?? ""}`,
        p_code: router.query.p_code,
        min_price: router.query.min_price,
        max_price: router.query.max_price,
        sort: router.query.sort
    })
    useEffect(() => {
        router.replace({
            pathname: "/ds-cua-hang",
            query: pickBy(params, identity)
        })
    }, [params])
    const tagArr = params.tag_name !== "" ? params.tag_name.split("|") : []
    const onTagItem = (name: string) => {
        setParams({
            ...params,
            tag_name: tagArr.includes(name) ?
                tagArr.filter(i => i !== name).join("|") : [...tagArr, name].join("|")
        })
    }

    const onSetProvinceParams = (province_code: number) => {
        setParams({
            ...params,
            p_code: `${province_code}`
        })
    }
    const onSetPriceParams = (min:any, max:any) => {
        // console.log(min, max)
        setParams({
            ...params,
            min_price: min,
            max_price: max
        })
    }
    const onSetSortParams = (sort: string) => {
        setParams({
            ...params,
            sort: sort
        })
    }


    return (
        <div className={style.filter_cnt}>
            <div className={style.filter_section}>
                <FilterTags
                    onChangeTagItem={onTagItem}
                    tagArr={tagArr}
                />
            </div>
            <div className={style.filter_section}>
                <FilterProvinces
                    onChangeProvince={onSetProvinceParams}
                    province_code={params.p_code}
                />
            </div>
            <div className={style.filter_section}>
                <FilterPriority
                    onChangeSort={onSetSortParams}
                    value={`${params.sort}`}
                />
            </div>
            <div className={style.filter_section}>
                <FilterPrices
                    min_price={params.min_price}
                    max_price={params.max_price}
                    onChangePrice={onSetPriceParams}
                />
            </div>
        </div>
    );
}