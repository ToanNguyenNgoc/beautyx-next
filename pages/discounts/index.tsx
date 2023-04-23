import React from 'react';
import { NextPageWithLayout } from '../../models';
import { MainLayout } from '../../components/layout';
import { IDiscountPar, IITEMS_DISCOUNT } from '../../interfaces/discount';
import { discountParams } from '../../context/query-params';
import {useSwrInfinite} from '../../context/hooks';
import InfiniteScroll from "react-infinite-scroll-component";
import Seo from "../../components/seo";
import style from "./discount.module.css"
import { Container } from '@mui/system';
import DiscountItem from '../../components/discount-item';
import { LoadingGrid } from '../../components/loading';
import useDeviceMobile from '../../src/utils/useDeviceMobile';

const Discounts: NextPageWithLayout = () => {
    const IS_MB = useDeviceMobile();
    const {
        resData,
        onLoadMore,
        totalItem
    } = useSwrInfinite("/discounts", discountParams)
    const discounts = resData
    const onViewMore = () => {
        if (discounts.length >= 30 && discounts.length < totalItem) {
            onLoadMore()
        }
    }
    return (
        <>
            <Seo
                title='Giá tốt, ưu đãi khủng - BeautyX'
                description='Giá tốt, ưu đãi khủng - BeautyX'
                url='giam-gia'
            />
            <div className={style.discount_cnt}>
                <Container>
                    <div className={style.home_discounts__title}>
                        <span>Khuyến mãi HOT</span>
                    </div>
                    <InfiniteScroll
                        dataLength={resData.length}
                        hasMore={true}
                        loader={<></>}
                        next={onViewMore}
                    >
                        <ul className={style.homeDiscountList}>
                            {discounts
                                .map((discount: IDiscountPar, index: number) => (
                                    <div key={index}>
                                        {discount.items.map((item: IITEMS_DISCOUNT, i: number) => (
                                            <li className={style.home_discounts__list} key={i}>
                                                <DiscountItem
                                                    discount={discount}
                                                    item={item}
                                                />
                                            </li>
                                        ))}
                                    </div>
                                ))}
                        </ul>
                    </InfiniteScroll>
                    {discounts.length < totalItem && <LoadingGrid grid={IS_MB ? 2 : 6} />}
                    {/* <LoadingGrid/> */}
                </Container>
            </div>
        </>
    );
}

Discounts.Layout = MainLayout

export default Discounts;
