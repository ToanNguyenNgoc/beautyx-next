import {useStorage} from "./useStorage";

export function useCoordinates() {
    const { getItem } = useStorage()
    let lat, lng
    const getItemCoords = getItem("USER_LOCATION", "session")
    if (getItemCoords) {
        lat = JSON.parse(getItemCoords).lat,
            lng = JSON.parse(getItemCoords).long
    }
    return { lat, lng, latLng: lat ? `${lat},${lng}` : "" }
}