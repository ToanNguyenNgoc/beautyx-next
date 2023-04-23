import { useStorage } from "../context/hooks";

export const AUTH_HEADER = () => {
    const { getItem } = useStorage()
    const session = getItem("_WEB_TK", "session");
    const local = getItem("_WEB_TK", "local")
    return {
        headers: {
            Authorization: `Bearer ${session ? session : local}`,
        },
    }
}
export const AUTH_HEADER_PARAM_GET = (params: any) => {
    const { getItem } = useStorage()
    const session = getItem("_WEB_TK", "session");
    const local = getItem("_WEB_TK", "local")
    return {
        params,
        headers: {
            Authorization: `Bearer ${session ? session : local}`,
        },
    }
}
export const AUTH_HEADER_PARAM_DELE = (values: any) => {
    const { getItem } = useStorage()
    const session = getItem("_WEB_TK", "session");
    const local = getItem("_WEB_TK", "local")
    return {
        headers: {
            Authorization: `Bearer ${session ? session : local}`,
        },
        data: values,
    }
}
export const AUTH_HEADER_PARAM_PUT = (values: any) => {
    const { getItem } = useStorage()
    const session = getItem("_WEB_TK", "session");
    const local = getItem("_WEB_TK", "local")
    return {
        headers: {
            Authorization: `Bearer ${session ? session : local}`,
        },
        data: values,
    }
}