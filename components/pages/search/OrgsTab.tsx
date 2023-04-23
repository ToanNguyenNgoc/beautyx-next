import React from 'react';
import { useSelector } from 'react-redux';
import OrgItem from '../../org-item';
import InfiniteScroll from 'react-infinite-scroll-component';
import style from "./search-cpn.module.css"
import { useDeviceMobile, useSwrInfiniteCondition } from '@/context/hooks';
import { IStore } from '@/redux/store/store.interface';
import { IOrganization } from '@/interfaces/organization';
import { LoadingGrid } from '@/components/loading';

export function OrgsTab({ keyword, location }:{ keyword:string, location:string }) {
    const IS_MB = useDeviceMobile();
    const { ORG_FILTER } = useSelector((state: IStore) => state.FILTER)
    const orgFilterParams = {
        ...ORG_FILTER,
        "filter[keyword]": location ? "" : keyword,
        "filter[location]": location ?? ORG_FILTER['filter[location]']
    }
    const { resData, totalItem, onLoadMore } = useSwrInfiniteCondition(
        keyword,
        "/organizations",
        orgFilterParams)
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
                <ul className={style.org_list_org}>
                    {
                        resData.map((org: IOrganization, index: number) => (
                            <li key={index} className={style.org_list_item_org}>
                                <OrgItem org={org} />
                            </li>
                        ))
                    }
                </ul>
            </InfiniteScroll>
            {resData.length < totalItem && <LoadingGrid grid={IS_MB && 2} />}
        </div>
    );
}