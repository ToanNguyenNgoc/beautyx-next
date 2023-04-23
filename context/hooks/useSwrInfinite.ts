import { useSWRInfinite } from "swr";
import { pickBy, identity } from "lodash"

export function useSwrInfinite(
    API_URL: string,
    params?: any,
) {
    let paramsURL = "";
    if (params) {
        paramsURL = `&${new URLSearchParams(pickBy(params, identity)).toString()}`
    }
    const { data, isValidating, size, setSize, mutate } = useSWRInfinite(
        (index) => `${API_URL}?page=${index + 1}${paramsURL}`,
        {
            revalidateOnFocus: false,
            initialSize: 1,
        }
    );
    let resData: any[] = [];
    let totalItem = 1;
    if (data) {
        // console.log(data)
        // console.log(data[0].data.data.hits)
        totalItem = data[0]?.data?.context?.total ?? data[0]?.data?.total ?? data[0].totalItem;
        resData = data.map((i: any) => (i.data?.context?.data ?? i.data?.data?.hits ?? data[0]?.resData)).flat()
    }
    const onLoadMore = () => {
        setSize(size + 1)
    }
    return {
        resData,
        totalItem,
        isValidating,
        onLoadMore,
        mutate
    }
}
// export default useSwrInfinite