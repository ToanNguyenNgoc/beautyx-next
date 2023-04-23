import useSWR from "swr";

export function useFetch(API_URL: string) {
    const { data, error, isValidating } = useSWR(API_URL,
        (apiURL: string) => fetch(apiURL).then(res => res.json()), {
        revalidateOnFocus: false,
    })

    return {
        data, error, isValidating
    }
}