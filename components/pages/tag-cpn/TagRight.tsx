import React from 'react';
import style from "./tag-cpn.module.css"
import ServicePromoItem from '../../ServiceProductPromoItem';
import { useRouter } from 'next/router';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ITag } from '@/interfaces/tags';
import { useSwrInfinite } from '@/context/hooks';
import { directUrlProSerResult } from '@/context/direct-url';
import { LoadingGrid } from '@/components/loading';

interface TagRightProps {
    tagChild: ITag,
    tagParent: ITag,
    tagName: string,
    type: "SERVICE" | "PRODUCT"
}

export function TagRight(props: TagRightProps) {
    const { query } = useRouter();
    const type_result = query.type_result

    const { tagChild, tagName, type } = props;
    const servicesParams = {
        "filter[is_momo_ecommerce_enable]": true,
        "filter[min_price]": 1000,
        "filter[special_min_price]": 1000,
        "filter[keyword]": tagName,
        "sort": query.sort
    }


    let API_URL = ""
    if (type_result === "dich-vu") API_URL = "/services"
    if (type_result === "san-pham") API_URL = "/products"
    const { resData, onLoadMore, totalItem } = useSwrInfinite(API_URL, servicesParams)

    const sortList = [
        { id: 1, title: "Khuyến mãi hot", sort: "-discount_percent" },
        { id: 2, title: "Bán chạy", sort: "-bought_count" },
        { id: 3, title: "Giá thấp", sort: type === "SERVICE" ? "-price" : "-retail_price" },
        { id: 4, title: "Giá cao", sort: type === "SERVICE" ? "price" : "retail_price" },
    ]
    const onViewMore = () => {
        if (resData.length >= 30 && resData.length < totalItem) {
            onLoadMore();
        }
    }
    return (
        <div className={style.tag_right_cnt}>
            <h1 className={style.tag_name_title}>
                {tagName}
            </h1>
            <div className={style.tag_right_sort}>
                <ul className={style.sort_list}>
                    {
                        sortList.map(sort => (
                            <li
                                key={sort.id} className={style.sort_item_cnt}
                                style={sort.sort === query.sort ?
                                    {
                                        backgroundColor: "var(--pink)",
                                        color: "var(--red-cl)",
                                        border: "solid 1px var(--red-cl)"
                                    } : {}
                                }
                            >
                                <Link href={`${directUrlProSerResult(type, tagName, tagChild?.id)}?sort=${sort.sort}`} >
                                    <a
                                        className={style.sort_item}
                                    >{sort.title}</a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className={style.list_cnt}>
                <InfiniteScroll
                    dataLength={resData?.length}
                    hasMore={true}
                    loader={<></>}
                    next={onViewMore}
                >
                    <ul className={style.list_item}>
                        {
                            resData.map((item, index) => (
                                <li key={index} className={style.item}>
                                    <ServicePromoItem
                                        item={item}
                                    />
                                </li>
                            ))
                        }
                    </ul>
                </InfiniteScroll>
                {resData?.length < totalItem && <LoadingGrid />}
            </div>
        </div>
    );
}