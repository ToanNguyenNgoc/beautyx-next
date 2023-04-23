import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { fetchAsyncUser } from "../../redux/slices/auth-slice/user-slice"
import PLAT_FORM_TYPE from "../../context/type/platform-type"
import { AuthLoginTiki } from "../../interfaces/params-auth-mini-app"
import { loginAsyncTiki } from "../../redux/slices/auth-slice/login-slice"
import { useStorage } from "./useStorage"


export function useLoginPlatForm(platForm: string) {
    let res
    const { query } = useRouter();
    switch (platForm) {
        case PLAT_FORM_TYPE.TIKI:
            return LoginPlatFormTiki(query);
        default:
            break;
    }
    // return { res }
}

export const LoginPlatFormTiki = async (query: any) => {
    const { getItem } = useStorage()
    const TOKEN = getItem("_WEB_TK", "session")
    const dispatch = useDispatch()
    const handleLoginTiki = async () => {
        const phone = `0${query.telephone.slice(3, query.telephone.length)}`
        const params: AuthLoginTiki = {
            customerId: query.customerId,
            avatar: query.avatar,
            email: query.email,
            name: query.name,
            phone: phone,
            authCode: query.authCode
        }
        const res = await dispatch(loginAsyncTiki(params))
        if (res?.payload) {
            dispatch(fetchAsyncUser())
        }
    }
    if (query.customerId && !TOKEN) {
        handleLoginTiki()
    }
}