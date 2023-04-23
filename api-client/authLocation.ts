import {useStorage} from "../context/hooks";

export const getPosition = (options?: PositionOptions) => {
    return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
    );
}

export const AUTH_LOCATION = () => {
    const { getItem } = useStorage()
    const sessionLocation = getItem("USER_LOCATION", "session")
    const location_user = {
        lat: 10.7993253,
        long: 106.6854312
    }
    // const location_user = JSON.parse(`${sessionLocation}`) ?? null


    let LOCATION;
    LOCATION = `${location_user?.lat},${location_user?.long}`;
    if (location_user) return LOCATION
}