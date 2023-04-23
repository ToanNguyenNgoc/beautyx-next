import React from 'react';
import style from "./search-cpn.module.css"
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDeviceMobile, useSwrInfiniteCondition } from '@/context/hooks';
import ServicePromoItem from '@/components/ServiceProductPromoItem';
import { LoadingGrid } from '@/components/loading';

export function ProductsTab({ keyword, location }:{ keyword:string, location:string }) {
    const IS_MB = useDeviceMobile();
    const servicesParams = {
        "limit": 30,
        "filter[keyword]": keyword,
        "filter[location]": location,
        "filter[is_momo_ecommerce_enable]":true
    }
    const { resData, totalItem, onLoadMore } = useSwrInfiniteCondition(keyword, "/products", servicesParams)
    const onViewMore = () => {
        if (resData.length >= 15 && resData.length < totalItem) {
            onLoadMore();
        }
    }
    return (
        <div className={style.result_right_cnt}>
            <InfiniteScroll
                dataLength={resData.length}
                hasMore={true}
                loader={<></>}
                next={onViewMore}
            >
                <ul className={style.org_list}>
                    {
                        resData.map((item: any, index: number) => (
                            <li key={index} className={style.org_list_item}>
                                <ServicePromoItem changeStyle={IS_MB} item={item} />
                            </li>
                        ))
                    }
                </ul>
                {resData.length < totalItem && <LoadingGrid grid={IS_MB && 1} />}
            </InfiniteScroll>
        </div>
    );
}