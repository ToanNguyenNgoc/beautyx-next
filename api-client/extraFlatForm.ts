import {useStorage} from "../context/hooks"

export const EXTRA_FLAT_FORM = () => {
    const FLAT_FORM = sessionStorage.getItem('FLAT_FORM') || "BEAUTYX";
    return FLAT_FORM;
}
export const EXTRA_FLAT_FORM_2 = () => {
    const { getItem } = useStorage()
    const FLAT_FORM = getItem("FLAT_FORM", "session")
    return FLAT_FORM;
}