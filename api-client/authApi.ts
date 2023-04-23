import axiosClient from "./axios";
import { AUTH_HEADER } from "./authHeader";
import { identity, pickBy } from "lodash";

class Auth {
  login = (values: any) => {
    const url = `/auth/login`;
    const params = {
      ...values,
      "platform": "BEAUTYX"
    }
    return axiosClient.post(url, params);
  };
  register = (params: any) => {
    const url = `/auth/register`;
    return axiosClient.post(url, params);
  };
  getUserProfile = () => {
    const url = `/users/profile`;
    return axiosClient.get(url, AUTH_HEADER());
  };
  forgotPassword = (values: any) => {
    const url = `/auth/forgot`;
    const params = values
    return axiosClient.post(url, params)
  };
  putUserProfile = (values: any) => {
    const url = `/users/profile`;
    const paramsOb = {
      fullname: values.fullname,
      media_id: values.media_id,
      telephone: values.telephone,
      code: values.code,
      verification_id: values.verification_id
    }
    const params = pickBy(paramsOb, identity)
    return axiosClient.put(url, params, AUTH_HEADER())
  }

}
const authentication = new Auth();
export default authentication;
