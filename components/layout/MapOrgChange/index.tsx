import React, { useRef } from 'react';
import { ImageComponent } from "../ImageCpn"
// import {
//     NavigationControl,
//     Marker
// } from "react-map-gl"
import MapGL from "react-map-gl"
import Slider from 'react-slick';
import style from "./map-org.module.css"
import icon from '@/src/constants/icon';
import { IBranch, IOrganization } from '@/interfaces/index';

interface MapOrgChangeProps {
    org: IOrganization,
    onChangeCard?: (card: IOrganization | IBranch) => void
    open?: boolean
}

export function MapOrgChange(props: MapOrgChangeProps) {
    const { org, onChangeCard, open } = props;
    const mapRef = useRef<any>()
    const onFlyTo = (lat: number, lng: number) => {
        mapRef?.current?.flyTo({
            center: [lng, lat],
        });
    }

    const onCartItemClick = (item: IOrganization | IBranch) => {
        onFlyTo(item.latitude, item.longitude)
        if (onChangeCard) onChangeCard(item)
    }
    const newOrgBranch: any = [org].concat(org?.branches)
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerPadding: "30px",
        className: "center",
        infinite:false,
        centerMode: true,
        afterChange: function (index: any) {
            const lat = newOrgBranch[index]?.latitude;
            const lng = newOrgBranch[index]?.longitude
            onFlyTo(lat, lng)
        },
    };

    return (
        <div 
            style={open=== false?{
                height:"100%"
            }:{}}
            className={style.container}
        >
            {/* <MapGL
                ref={mapRef}
                style={{ width: "100%", height: "100%" }}
                initialViewState={{
                    latitude: org?.latitude,
                    longitude: org?.longitude,
                    zoom: 16,
                }}
                attributionControl={true}
                mapboxAccessToken={process.env.NEXT_PUBLIC_API_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/mapbox/streets-v10"
            >
                {
                    newOrgBranch?.map((item: any, index: number) => (
                        <Marker
                            key={index}
                            latitude={item.latitude} longitude={item.longitude}
                        >
                            <div className={style.marker}>
                                <ImageComponent
                                    src={icon.mapPinRed} alt="" type="ICON" layout="fixed"
                                    width={30} height={40}
                                />
                                <span className={style.marker_name}>{item.name}</span>
                            </div>
                        </Marker>
                    ))
                }
                <NavigationControl
                    position="bottom-right"
                    showZoom={true}
                    showCompass={true}
                />
            </MapGL> */}
            <div className={style.card_list_cnt}>
                <ul className={style.cart_list}>
                    {
                        newOrgBranch.map((item: any, index: number) => (
                            <li key={index} className={style.cart_list_item}>
                                <CardMapItem
                                    item={item}
                                    org={org}
                                    onCartItemClick={onCartItemClick}
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div
                style={open === false ? {
                    position:"absolute"
                } : {}}
                className={style.card_bot_cnt}
            >
                <Slider {...settings} >
                    {
                        newOrgBranch.map((item: any, index: number) => (
                            <div key={index} className={style.card_slide_item}>
                                <CardMapItem
                                    item={item}
                                    org={org}
                                    onCartItemClick={onCartItemClick}
                                />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
}
interface CardMapItemProps {
    item: any,
    org: IOrganization,
    onCartItemClick: (item:IOrganization | IBranch) => void
}
const CardMapItem = (props: CardMapItemProps) => {
    const { item, onCartItemClick, org } = props;
    return (
        <div
            onClick={() => onCartItemClick(item)}
            className={style.cart_item}
        >
            <div className={style.cart_item_img}>
                <ImageComponent
                    src={item.image ? item?.image_url : org?.image_url}
                    alt="" layout="responsive" type="IMG"
                    width={"100%"} height={"100%"}
                    style={{ borderRadius: "6px" }}
                />
            </div>
            <div className={style.card_detail}>
                <span className={style.card_detail_name}>{item?.name}</span>
                <span className={style.card_detail_address}>{item?.full_address}</span>
            </div>
        </div>
    )
}