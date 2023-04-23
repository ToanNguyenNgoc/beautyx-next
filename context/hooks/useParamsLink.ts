const useParamsLink = () => {
    const isBrowser: boolean = ((): boolean => typeof window !== 'undefined')();
    let params
    if (isBrowser) {
        const string = window.location.search;
        let obj
        if (string) {
            const queryString = string.split("?");
            const result =
                queryString.length > 2
                    ? "?" +
                    queryString[1] +
                    "&" +
                    queryString[queryString.length - 1]
                    : "?" + queryString[1];
            const urlSearchParams = new URLSearchParams(result);
            obj = Object.fromEntries(urlSearchParams.entries());
        }
        params = obj
    }
    return { params }
}
export default useParamsLink