import React from "react";
// import {
//     withGoogleMap,
//     withScriptjs,
//     GoogleMap,
//     Marker,
// } from "react-google-maps";
import icon from "../../../constants/icon";

function MapGoogle(props: any) {
    const { zoom, location, org } = props;
    const defaultMapOptions = {
        fullscreenControl: false,
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
    };
    return (
        <div>
            {/* <GoogleMap
                defaultOptions={defaultMapOptions}
                zoom={zoom}
                center={{ lat: location.lat, lng: location.long }}
            >
                {org.map((item: any, index: number) => (
                    <Marker
                        key={index}
                        icon={{
                            url:
                                item.latitude === location.lat
                                    ? icon.pinMapGreen
                                    : icon.pinMap,
                        }}
                        position={{ lat: item.latitude, lng: item.longitude }}
                    />
                ))}
            </GoogleMap> */}
        </div>
    );
}

// export default withScriptjs(withGoogleMap(MapGoogle));
export default MapGoogle
