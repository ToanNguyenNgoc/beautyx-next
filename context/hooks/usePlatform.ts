import { useRouter } from "next/router"
import PLAT_FORM_TYPE from "../type/platform-type";
import { useStorage } from "./useStorage";

export function usePlatform() {
    let PLAT_FORM;
    const router = useRouter();
    const { getItem, setItem } = useStorage()
    const asPath = router.asPath;
    const flatForm = asPath.split("?")[0].slice(1, asPath.split("?")[0].length);

    const PLAT_FORM_STORAGE = getItem("FLAT_FORM", "session");
    if (PLAT_FORM_STORAGE) PLAT_FORM = PLAT_FORM_STORAGE

    if (!PLAT_FORM_STORAGE) {
        switch (flatForm) {
            case "":
                setItem('FLAT_FORM', PLAT_FORM_TYPE.BEAUTYX, 'session')
                break;
            case PLAT_FORM_TYPE.MOMO:
                setItem('FLAT_FORM', PLAT_FORM_TYPE.MOMO, 'session')
                break
            case PLAT_FORM_TYPE.TIKI:
                setItem('FLAT_FORM', PLAT_FORM_TYPE.TIKI, 'session')
                break
            case PLAT_FORM_TYPE.MB:
                setItem('FLAT_FORM', PLAT_FORM_TYPE.MB, 'session')
                // setItem('_loginToken', paramsString, 'session')
                break
            default:
                setItem('FLAT_FORM', PLAT_FORM_TYPE.BEAUTYX, 'session')
        }
    }

    return { PLAT_FORM }
}