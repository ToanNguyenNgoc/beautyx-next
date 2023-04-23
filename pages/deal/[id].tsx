import React from 'react';
import { NextPageWithLayout } from "../../models"
import { MainLayout } from '../../components/layout';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { IServicePromo } from '../../src/interface/servicePromo';
import Seo from '../../components/seo';
import slugify from '../../src/utils/formatUrlString';
import { IBannerCampaign } from '../../interfaces/banner';
import axios from 'axios';
import ServicePromoItem from '../../components/ServiceProductPromoItem';
import { useSwrInfinite } from '../../context/hooks';
import InfiniteScroll from 'react-infinite-scroll-component';

import style from "./deal.module.css"
import { LoadingGrid } from "../../components/loading"
import { Container } from '@mui/material';

const CampaignId: NextPageWithLayout = (props: any) => {
    // const { banner } = props;
    // const params = {
    //     "limit": 18,
    //     "filter[is_momo_ecommerce_enable]": true,
    //     "filter[special_price]": true,
    //     "filter[special_min_price]": banner.special_min_price > 0 ? banner.special_min_price : "",
    //     "filter[special_max_price]": banner.special_max_price > 0 ? banner.special_max_price : "",
    //     "filter[discount_percent]": banner.discount_percent > 0 ? banner.discount_percent : "",
    //     "sort": "price"
    // }
    // const { resData, totalItem, onLoadMore } = useSwrInfinite("/services", params)
    // const services = resData
    // const onViewMore = () => {
    //     if (services.length < totalItem) {
    //         onLoadMore()
    //     }
    // }
    return (
        <>
            {/* <Seo
                title={banner?.title ?? ""}
                description={banner?.title ?? ""}
                url=""
            />
            <Container>
                <div className={style.container}>
                    <InfiniteScroll
                        dataLength={services.length}
                        hasMore={true}
                        loader={<></>}
                        next={onViewMore}
                    >
                        <ul className={style.service_list}>
                            {
                                services.concat(resData).map((item: IServicePromo, index: number) => (
                                    <li key={index} className={style.service_item}>
                                        <ServicePromoItem
                                            item={item}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </InfiniteScroll>
                    {services.length < totalItem && <LoadingGrid grid={6} />}
                </div>
            </Container> */}
        </>
    );
}

CampaignId.Layout = MainLayout

export default CampaignId;

export const getStaticPaths: GetStaticPaths<any> = async () => {
    const res: any[] = await axios.get("https://beautyx.vercel.app/v1/banners_campaign")
    const banners = await res ?? []
    const banners_id = await banners.map((item: IBannerCampaign) => {
        return {
            params: { id: `${slugify(item.title)}` }
        }
    })
    return {
        paths: banners_id,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const res: any[] = await axios.get("https://beautyx.vercel.app/v1/banners_campaign")
    const banner_detail: IBannerCampaign = res?.find((i: IBannerCampaign) => slugify(i.title) == context?.params?.id)

    return {
        props: {
            banner: banner_detail,
        },
        revalidate: 3600 * 24,
    }
}