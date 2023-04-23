/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useRef, KeyboardEvent, useState, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import _, { debounce } from 'lodash'
import tracking from '@/api-client/trackApi'
import style from './search.module.css'
import { useRouter } from 'next/router'
import axios from 'axios'
import {  ImageComponent } from "../../layout"
import { AppContext } from '@/context/AppProvider'
import { useDeviceMobile } from '@/context/hooks'
import {
    fetchOrgsBySearch,
    fetchProductsBySearch,
    fetchServicesBySearch,
    onSetKeyword
} from '@/redux/slices/search-slice/searchSlice'
import { IStore } from '@/redux/store/store.interface'
import { onSetTab } from '@/redux/slices/filter-slice/filter-slice'
import icon from '@/src/constants/icon'
import { directUrlOrg, directUrlProSerResult } from '@/context/direct-url'
import ServicePromoItem from '@/components/ServiceProductPromoItem'
import { ITag } from '@/interfaces/tags'

function HeaderSearch() {
    const keyMapBox = process.env.NEXT_PUBLIC_API_MAPBOX_TOKEN
    const { tagsProduct } = useContext(AppContext)
    const productCates = tagsProduct?.find((i: any) => i.id === 129)?.children ?? []
    const IS_MB = useDeviceMobile()
    const searchBoxRef = useRef<any>()
    const { locale } = useRouter()
    const router = useRouter();
    const dispatch = useDispatch()
    const { ORGS, SERVICES, PRODUCTS, keyword } = useSelector((state: IStore) => state.SEARCH)
    const [locations, setLocations] = useState([]);
    const onChangeStyleSearch = (p: 'block' | 'none') => {
        if (searchBoxRef.current) searchBoxRef.current.style.display = p
    }
    const getLocationByKeyword = async (keyword: string) => {
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${keyword}.json?access_token=${keyMapBox}&country=vn`;
        const res: any = await axios.get(url);
        // console.log(res)
        setLocations(res.features?.slice(0, 3) ?? [])
    }
    const callByFilter = (keyword: string) => {
        if (keyword.length > 0) {
            getLocationByKeyword(keyword)
            dispatch(
                fetchOrgsBySearch({
                    keyword: keyword,
                    page: 1,
                    SERVER: true,
                })
            )
            dispatch(
                fetchProductsBySearch({
                    keyword: keyword,
                    page: 1,
                    SERVER: true,
                })
            )
            dispatch(
                fetchServicesBySearch({
                    keyword: keyword,
                    page: 1,
                    SERVER: true,
                })
            )
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceDropDown = useCallback(
        debounce((nextValue) => {
            callByFilter(nextValue);
            tracking.SEARCH_ON_CHANGE(nextValue);
        }, 1000),
        []
    );
    const handleOnChangeInput = (e: any) => {
        var keyword = e.target.value;
        debounceDropDown(keyword);
        dispatch(onSetKeyword(keyword));
    };
    const onBlurInput = () => {
        setTimeout(() => {
            onChangeStyleSearch("none")
        }, 200)
    }
    const onE = () => { }
    const tabs = [
        { tab: "dich-vu", total: SERVICES.totalItem },
        { tab: "san-pham", total: PRODUCTS.totalItem },
        { tab: "cua-hang", total: ORGS.totalItem }
    ]
    const tabSort = tabs.sort((a, b) => b.total - a.total);
    const gotoResult = () => {
        if (keyword.length > 0) {
            dispatch(onSetTab(tabSort[0].tab))
            searchBoxRef.current.style.display = "none"
            router.push(`/tim-kiem?keyword=${keyword}`)
        }
    }
    const gotoResultLocation = (location: string) => {
        dispatch(onSetTab("cua-hang"))
        router.push(`/tim-kiem?keyword=${keyword}&location=${location}`)
        searchBoxRef.current.style.display = "none"
    }
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter" || event?.nativeEvent.keyCode === 13) {
            gotoResult()
        }
    };
    return (
        <button
            onFocus={() => onChangeStyleSearch("block")}
            onBlur={!IS_MB ? onBlurInput : onE}
            className={style.search_cnt}
        >
            <input
                placeholder="Bạn muốn tìm gì ..."
                type="text"
                value={keyword}
                onChange={handleOnChangeInput}
                onKeyDown={handleKeyDown}

            />
            <div className={style.head_left_mb}>
                <div
                    onClick={() => onChangeStyleSearch("block")}
                    className={style.search_input}
                >
                    {router.query.keyword ?? "Bạn muốn tìm gì ..."}
                </div>
            </div>
            <div className={style.headerSearchImg}>
                {
                    keyword.length > 0 ?
                        <Image
                            onClick={() => dispatch(onSetKeyword("" as any))}
                            layout="fixed"
                            width={24}
                            height={24}
                            className={style.img}
                            src={icon.closeBlack}
                            alt=""
                        />
                        :
                        <Image
                            layout="fixed"
                            width={24}
                            height={24}
                            className={style.img}
                            src={icon.searchPurple}
                            alt=""
                        />
                }
            </div>
            <div
                ref={searchBoxRef}
                className={style.search_box}
            >   <div className={style.search_box_mb}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }} >
                        <span
                            onClick={() => onChangeStyleSearch("none")}
                            className={style.search_box_mb_back}
                        >
                            <Image
                                src={icon.chevronLeft}
                                layout="fixed"
                                width={24}
                                height={24}
                                alt=""
                            />
                        </span>
                        <input
                            type="text"
                            value={keyword}
                            onChange={handleOnChangeInput}
                            onKeyDown={handleKeyDown}
                            placeholder='Bạn muốn tìm gì ...'
                        />
                    </div>
                </div>
                {
                    keyword.length > 0 &&
                    <div className={style.search_key}>
                        Xem kết quả cho
                        <span onClick={gotoResult} >{keyword}</span>
                    </div>
                }
                {
                    (ORGS.orgs.length > 0 && keyword.length > 0) &&
                    <div className={style.search_section}>
                        <span className={style.title}>
                            Doanh nghiệp
                        </span>
                        <div className={style.section_item_orgs}>
                            <ul className={style.orgs_list}>
                                {
                                    ORGS.orgs.map((org, index) => (
                                        <li key={index} className={style.org_item}>
                                            <Link
                                                href={directUrlOrg(org.subdomain, locale)}
                                            >
                                                <a
                                                    onClick={onBlurInput}
                                                    className={style.org_item_cnt}
                                                >
                                                    <div className={style.org_item_img}>
                                                        <ImageComponent
                                                            layout="responsive"
                                                            width={"100%"}
                                                            height={"100%"}
                                                            alt='' type="IMG"
                                                            src={org.image_url}
                                                        />
                                                    </div>
                                                    <span className={style.org_item_name}>
                                                        {org.name}
                                                    </span>
                                                </a>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                }
                {
                    (locations.length > 0 && keyword.length > 0) &&
                    <div className={style.search_section}>
                        <div className={style.search_section_location_title}>
                            <div className={style.ring_container}>
                                <div className={style.ringring}></div>
                                <div className={style.circle}></div>
                            </div>
                            Địa điểm làm đẹp gần khu vực
                        </div>
                        <ul className={style.search_list_location}>
                            {
                                locations.map((i: any, index: number) => {
                                    const location = `${i.center[1]},${i.center[0]}`
                                    return (
                                        <li
                                            onClick={() => gotoResultLocation(location)}
                                            key={index} className={style.location_item_cnt}
                                        >
                                            <Image
                                                src={icon.pinMapRed} alt='icon'
                                                layout="fixed"
                                                width={12} height={12}
                                            />
                                            {i.place_name}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                }
                {
                    (SERVICES.services.length > 0 && keyword.length > 0) &&
                    <div className={style.search_section}>
                        <span className={style.title}>
                            Dịch vụ
                        </span>
                        <ul className={style.search_service_list}>
                            {
                                SERVICES.services.slice(0, 3).map((service, index) => (
                                    <li key={index} className={style.search_service_item}>
                                        <ServicePromoItem
                                            item={service}
                                            changeStyle={true}
                                            hideLoad={true}
                                            onBlurInput={onBlurInput}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                }
                {
                    (PRODUCTS.products.length > 0 && keyword.length > 0) &&
                    <div className={style.search_section}>
                        <span className={style.title}>
                            Sản phẩm
                        </span>
                        <ul className={style.search_service_list}>
                            {
                                PRODUCTS.products.slice(0, 3).map((product, index) => (
                                    <li key={index} className={style.search_service_item}>
                                        <ServicePromoItem
                                            item={product}
                                            changeStyle={true}
                                            hideLoad={true}
                                            onBlurInput={onBlurInput}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                }
                {
                    keyword.length === 0 &&
                    <div className={style.search_outstanding_cnt}>
                        <div className={style.section_outstanding}>
                            <span className={style.outstanding_title}>
                                Danh mục sản phẩm nổi bật
                            </span>
                            <ul className={style.out_list}>
                                {
                                    productCates.map((item: ITag, index: number) => (
                                        <li
                                            onClick={onBlurInput}
                                            key={index} className={style.out_list_item}
                                        >
                                            <Link
                                                href={directUrlProSerResult("PRODUCT", item.name, item.id)}
                                            >
                                                <a className={style.out_item_cnt}>
                                                    <div className={style.out_item_img}>
                                                        <ImageComponent
                                                            src={item.media[0]?.original_url}
                                                            layout="responsive" alt=''
                                                            type="IMG"
                                                            width={"100%"} height={"100%"}
                                                            style={{ borderRadius: "12px" }}
                                                        />
                                                    </div>
                                                    <span className={style.out_item_text}>
                                                        {item.name}
                                                    </span>
                                                </a>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </button>
    );
}

export default HeaderSearch
