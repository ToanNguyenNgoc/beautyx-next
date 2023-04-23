import React from 'react';
import style from "./map.module.css";
// import {
//     Marker,
//     NavigationControl,
//     GeolocateControl,
//     GeolocateResultEvent,
// } from "react-map-gl";
// import MapGL from "react-map-gl";

function Map() {
    return (
        <div className={style.container}>
            {/* <MapGL
                // onViewportChange={onCenterChange}
                // onMouseMove={onCenterChange}
                // onTouchMove={onCenterChange}
                style={{ width: "100vw", height: "100vh" }}
                initialViewState={{
                    latitude: 10.800590217284448,
                    longitude: 106.68205401591362,
                    zoom: 10,
                }}
                attributionControl={true}
                mapboxAccessToken={process.env.NEXT_PUBLIC_API_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/mapbox/streets-v10"
            // ref={mapRef}
            ></MapGL> */}
            <></>
        </div>
    );
}

export default Map;