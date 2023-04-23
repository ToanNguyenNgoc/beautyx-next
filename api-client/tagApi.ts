import axiosClient from "./axios";

class Tag {
    getAll = (values:any) => {
        const url = `/tags`;
        const params = {
            filter: "SERVICE",
            include: "children|media",
            sort: "-organizations_count",
        };
        return axiosClient.get(url, { params });
    };
    getTagId = (tagId:any) => {
        const url = `/tags/${tagId}`;
        return axiosClient.get(url)
    }
    getServicesChild = (values?: any) => {
        const url = `/tags`;
        const params = {
            "page": values?.page ?? 1,
            "filter[group]": "SERVICE",
            "include": "parent.media|media",
            "sort": "-organizations_count",
        };
        return axiosClient.get(url, { params });
    };
    getProducts = () => {
        const url = `/tags`;
        const params = {
            "filter[group]": "PRODUCT",
            include:
                "parent.media|children.media|media",
            sort: "-organizations_count",
        };
        return axiosClient.get(url, { params });
    };
}
const tagsApi = new Tag();
export default tagsApi;
