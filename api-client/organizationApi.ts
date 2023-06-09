import axiosClient from "./axios";
import axiosServer from "./axios2";
import { AUTH_HEADER_PARAM_GET } from "./authHeader";
import { pickBy, identity } from 'lodash';
import { AUTH_LOCATION } from "./authLocation";

class Organization {
  getOrgById = (id: any) => {
    const LOCATION = AUTH_LOCATION();
    const paramsOb = {
      "filter[location]": LOCATION,
    }
    const params = pickBy(paramsOb, identity);
    const url = `/organizations/${id}`;
    if (id) {
      return axiosClient.get(url, AUTH_HEADER_PARAM_GET(pickBy(params)));
    }
  };
  //example get all-----------------
  getAll = (values?: any) => {
    const LOCATION = AUTH_LOCATION();
    const url = `/organizations`;
    const paramsOb = {
      page: values.page || 1,
      limit: values.limit || 15,
      "filter[keyword]": decodeURI(values.keyword ?? ""),
      "filter[tags]": values.tags,
      "filter[min_price]": values.min_price,
      "filter[max_price]": values.max_price,
      "filter[location]": values.LatLng ? values.LatLng : (values.sort === "distance" ? LOCATION : null),
      "filter[province_code]": values.province_code,
      "filter[district_code]": values.district_code,
      "sort": values.sort !== "distance" ? values.sort : null,
      "include": "tags|province|district|ward|branches|favorites|favorites_count"
    }
    const params = pickBy(paramsOb, identity);
    if (values.SERVER) {
      return axiosServer.get(url, AUTH_HEADER_PARAM_GET(params))
    } else {
      return axiosClient.get(url, AUTH_HEADER_PARAM_GET(params))
    }
  };
}
const orgApi = new Organization();
export default orgApi;
