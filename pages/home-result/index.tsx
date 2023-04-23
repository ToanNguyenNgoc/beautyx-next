import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { MainLayout } from "../../components/layout"
import { NextPageWithLayout } from '../../models';
import provincesApi from '../../api-client/provinceApi';
import { IProvince } from '../../interfaces/provinces';
import Seo from '../../components/seo';
import { pickBy, identity } from "lodash"
import { useSwrInfinite } from '../../context/hooks';
import { Container } from '@mui/system';
import OrgItem from '../../components/org-item';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useCoordinates } from "../../context/hooks"
import { LoadingGrid } from "../../components/loading"
import { OrgFilter } from "../../components/pages/home-result"
import style from "./home-result.module.css";
import { Drawer } from '@mui/material';
import useDeviceMobile from '../../src/utils/useDeviceMobile';
import icon from '../../src/constants/icon';
import Image from 'next/image';
import { GetServerSidePropsContext } from 'next';


const HomeResult: NextPageWithLayout = (props: any) => {
    const { title_location, title_tag, desc } = props;
    const [open, setOpen] = useState(false);
    const { latLng } = useCoordinates()
    const { query } = useRouter();
    const IS_MB = useDeviceMobile();
    const resultParamsOrgsOb = {
        limit: 15,
        "filter[tags]": query.tag_name,
        "filter[min_price]": query.min_price,
        "filter[max_price]": query.max_price,
        "filter[location]": query.sort === "location" ? latLng : "",
        "filter[province_code]": query.p_code,
        "sort": query.sort !== "location" ? query.sort : null,
        "include": "tags|province|district|ward|branches|favorites|favorites_count"
    }
    const resultParamsOrgs = pickBy(resultParamsOrgsOb, identity);
    const { resData, onLoadMore, totalItem } = useSwrInfinite("/organizations", resultParamsOrgs)
    const onViewMore = () => {
        if (resData.length >= 15 && resData.length < totalItem) {
            onLoadMore();
        }
    }
    return (
        <>
            <Seo
                title={`${title_location} ${title_tag}`}
                description={desc}
                url=""
            />

            <Container>
                <div className={style.result_cont_head}>
                    {/* <button onClick={()=>setOpen(true)} >Bộ lọc</button> */}
                    {/* <button>Bản đồ</button> */}
                    <button
                        className={style.result_cont_head_btn}
                        onClick={() => setOpen(true)}
                    >
                        Bộ lọc
                        <Image
                            src={icon.filter}
                            layout="fixed" alt='icon'
                            width={17} height={17}
                        />
                    </button>
                    <DrawerFilter
                        open={open}
                        setOpen={setOpen}
                    />
                </div>
                <div className={style.result_cont_body}>
                    <div className={style.result_cont_body_left}>
                        <OrgFilter />
                    </div>
                    <div className={style.result_cont_body_right}>
                        <InfiniteScroll
                            dataLength={resData.length}
                            hasMore={true}
                            loader={<></>}
                            next={onViewMore}
                        >
                            <ul className={style.list_org}>
                                {
                                    resData.map((org, index) => (
                                        <li key={index} >
                                            <OrgItem org={org} />
                                        </li>
                                    ))
                                }
                            </ul>
                        </InfiniteScroll>
                        {resData.length < totalItem && <LoadingGrid grid={IS_MB && 2} />}
                    </div>
                </div>
            </Container>
        </>
    );
}

export default HomeResult;
const DrawerFilter = ({ open, setOpen }:{ open:boolean, setOpen:(open:boolean) => void }) => {
    const router = useRouter();
    return (
        <Drawer
            open={open}
            onClose={() => setOpen(false)}
            anchor="bottom"
        >
            <div className={style.result_cont_filter}>
                <OrgFilter />
                {/* <div className={style.result_cont_filter_bot}>
                    <div className={style.bot_btn_item}>
                        <ButtonLoading
                            onClick={()=>router.push('/ds-cua-hang?tag_name=Spa')}
                            title='Thiết lập lại'
                        />
                    </div>
                    <div className={style.bot_btn_item}>
                        <ButtonLoading
                            onClick={() => setOpen()}
                            title='Áp dụng'
                        />
                    </div>
                </div> */}
            </div>
        </Drawer>
    )
}

HomeResult.Layout = MainLayout

export async function getServerSideProps(context: GetServerSidePropsContext) {
    context.res.setHeader(
        'Cache-Control',
        's-maxage=3000, stale-while-revalidate=3000'
    )
    const p_code = parseInt(context.query.p_code.toString())
    let title_location = "";
    let title_tag = ""
    let desc = "";
    if (context.query.p_code) {
        const res = await provincesApi.getAll();
        const list_province = await res.data.context.data;
        const name = list_province.find((i: IProvince) => i.province_code === p_code).name
        title_location = `Địa điểm làm đẹp lại ${name} | BeautyX`;
        desc = `Khám phám địa điểm làm đẹp tại ${name}`
    }
    if (context.query.tag_name) {
        title_tag = `${context.query.tag_name} | BeautyX`;
        desc = `BeautyX - Nền tảng giúp bạn tìm kiếm ${context.query.tag_name} phù hợp với nhu cầu làm đẹp. Đặt lịch dễ dàng, thanh toán nhanh chóng với hơn 5000 địa điểm làm đẹp trên toàn quốc`
    }

    return {
        props: {
            title_location: title_location,
            title_tag: title_tag,
            desc: desc
        }
    }
}