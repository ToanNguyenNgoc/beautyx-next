import React, { useState } from 'react';
import { NextPageWithLayout } from '../../models';
import { ButtonLoading, MainLayout } from '../../components/layout';
import { useRouter } from 'next/router';
import Seo from "../../components/seo";
import { Container } from '@mui/system';
import { OrgsTab, ServicesTab, ProductsTab } from "../../components/pages/search"
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../redux/store/store.interface';
import { onEmptyFilterOrg, onSetTab } from "../../redux/slices/filter-slice/filter-slice";
import {
    FilterProvinces,
    FilterTags,
    FilterPrices,
    FilterPriority
} from "../../components/layout";
import { useCoordinates } from "../../context/hooks"
import { onFilterOrg } from "../../redux/slices/filter-slice/filter-slice"
import icon from '../../src/constants/icon';
import Image from 'next/image';
import style from "./search.module.css"
import useDeviceMobile from '../../src/utils/useDeviceMobile';
import { Drawer } from '@mui/material';

const Search: NextPageWithLayout = (props) => {
    const IS_MB = useDeviceMobile();
    const { tab } = useSelector((state: IStore) => state.FILTER)
    const { query } = useRouter();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const tabs = [
        {
            url: "dich-vu", title: "Dịch vụ", icon: icon.servicePurple, icon_act: icon.serviceWhite
        },
        {
            url: "san-pham", title: "Sản phẩm", icon: icon.barberPurple, icon_act: icon.barberWhite
        },
        {
            url: "cua-hang", title: "Doanh nghiệp", icon: icon.orgPurple, icon_act: icon.orgWhite
        },
    ]
    const onTab = (tab: string) => {
        dispatch(onSetTab(tab))
    }

    return (
        <>
            {
                query.keyword &&
                <Seo title={`${query.keyword}`} description={`${query.keyword}`} url="" />
            }
            <Container>
                <div className={style.result_cnt}>
                    <div className={style.result_left_cnt}>
                        <ul className={style.list_tab}>
                            {
                                tabs.map(item => (
                                    <li
                                        style={item.url === tab ?
                                            { backgroundColor: !IS_MB ? "var(--bg-color)" : "var(--purple)" }
                                            :
                                            {}}
                                        onClick={() => onTab(item.url)}
                                        key={item.url} className={style.list_tab_item}
                                    >
                                        <div
                                            style={item.url === tab ?
                                                { backgroundColor: "var(--purple)" }
                                                :
                                                {}}
                                            className={style.tab_item_img}>
                                            <Image
                                                src={item.url === tab ? item.icon_act : item.icon}
                                                alt=""
                                                layout="fixed"
                                                width={18} height={18}
                                            />
                                        </div>
                                        <span
                                            style={(IS_MB && item.url === tab) ?
                                                { color: "var(--bg-white)" }
                                                : {}}
                                            className={style.tab_item_text}
                                        >
                                            {item.title}
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className={style.result_left_filter_cnt}>
                            {
                                tab === "cua-hang" &&
                                <FilterOrg />
                            }
                        </div>
                    </div>
                    <button
                        onClick={() => setOpen(true)}
                        className={style.result_left_filter_btn}
                    >
                        Bộ lọc
                        <Image
                            src={icon.filter} alt=""
                            layout="fixed" width={17} height={17}
                        />
                    </button>
                    <DrawerFilter
                        open={open}
                        setOpen={setOpen}
                        tab={""}
                    />
                    <div className={style.result_right_cnt}>
                        {
                            tab === "dich-vu" &&
                            <ServicesTab keyword={`${query.keyword}`} location={`${query.location}`} />
                        }
                        {
                            tab === "san-pham" &&
                            <ProductsTab keyword={`${query.keyword}`} location={`${query.location}`} />
                        }
                        {
                            tab === "cua-hang" &&
                            <OrgsTab keyword={`${query.keyword}`} location={`${query.location}`} />
                        }
                    </div>
                </div>
            </Container>
        </>
    );
}

Search.Layout = MainLayout

interface DrawerFilterProps {
    open: boolean,
    setOpen: (open: boolean) => void,
    tab: string
}

const DrawerFilter = (props: DrawerFilterProps) => {
    const { open, setOpen, tab } = props;
    const dispatch = useDispatch();
    const onRefreshFilter = () => {
        dispatch(onEmptyFilterOrg())
    }
    return (
        <Drawer
            open={open}
            onClose={() => setOpen(false)}
            anchor="bottom"
        >
            <div className={style.drawer_filter_cnt}>
                <FilterOrg />
                <div className={style.drawer_filter_bot}>
                    <div className={style.drawer_filter_bot_btn}>
                        <ButtonLoading
                            onClick={onRefreshFilter}
                            title='Thiết lập lại'
                        />
                    </div>
                    <div className={style.drawer_filter_bot_btn}>
                        <ButtonLoading
                            onClick={() => setOpen(false)}
                            title='Áp dụng'
                        />
                    </div>
                </div>
            </div>
        </Drawer>
    )
}

const FilterOrg = () => {
    const { query } = useRouter();
    const dispatch = useDispatch();
    const { latLng } = useCoordinates();
    const { ORG_FILTER } = useSelector((state: IStore) => state.FILTER)
    const onProvinceClick = (province_code:number | string) => {
        const params = {
            "filter[province_code]": province_code
        }
        dispatch(onFilterOrg(params))
    }
    const tagArr = ORG_FILTER['filter[tags]'] !== "" ? ORG_FILTER['filter[tags]'].split("|") : []
    const onTagClick = (name: string) => {
        const params = {
            "filter[tags]": tagArr.includes(name) ?
                tagArr.filter((tag: string) => tag !== name).join("|") : [...tagArr, name].join("|")
        }
        dispatch(onFilterOrg(params))
    }
    const onPricesClick = (min: number, max: number) => {
        const params = {
            "filter[min_price]": min,
            "filter[max_price]": max
        }
        dispatch(onFilterOrg(params))
    }
    const onSortClick = (sort: string) => {
        const params = {
            "filter[location]": sort === "location" ? latLng : "",
            "sort": sort !== "location" ? sort : ""
        }
        dispatch(onFilterOrg(params))
    }
    let sortValue = ORG_FILTER.sort
    if (ORG_FILTER['filter[location]'] !== "") sortValue = "location"

    return (
        <>
            <div className={style.filter_section}>
                <FilterTags
                    onChangeTagItem={onTagClick}
                    tagArr={tagArr}
                />
            </div>
            {
                !query.location &&
                <div className={style.filter_section}>
                    <FilterProvinces
                        onChangeProvince={onProvinceClick}
                        province_code={
                            ORG_FILTER['filter[province_code]']
                        }
                    />
                </div>
            }
            <div className={style.filter_section}>
                <FilterPriority
                    onChangeSort={onSortClick}
                    value={sortValue}
                />
            </div>
            <div className={style.filter_section}>
                <FilterPrices
                    min_price={ORG_FILTER['filter[min_price]']}
                    max_price={ORG_FILTER['filter[max_price]']}
                    onChangePrice={onPricesClick}
                />
            </div>
        </>
    )
}

export default Search;