import axiosClient from "./axios";

class Approves {
    get = () => {
        const url = "/approves"
        const params = {
            "page": 1,
            "limit": 15,
            "filter[approvable_type]": "ORGANIZATION",
            "filter[organization.subdomain]": "demo3",
            "include": "logs|organization|logs.employee.user"
        }
        return axiosClient.get(url, { params })
    }
}
const approves = new Approves();
export default approves