/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect } from "react";
import { useRouter } from 'next/router';
import { usePlatform, useStorage, useSwr } from "./hooks";
import { fetchAsyncUser, onEmptyUser } from "../redux/slices/auth-slice/user-slice"
import { useDispatch, useSelector } from "react-redux";
import { useSwrInfinite, useLoginPlatForm } from "./hooks";
import { getPosition } from "../api-client/authLocation"
import { tagParParams, tagsProductParams, appointmentsParams } from "./query-params"


export const AppContext = createContext();
export default function AppProvider({ children }) {
  const dispatch = useDispatch();
  const { setItem, getItem } = useStorage()
  const { PLAT_FORM } = usePlatform()
  const { locale } = useRouter();
  setItem("language", locale, "local")

  //get all tag
  const tags = useSwrInfinite("/tags", tagParParams).resData
  const tagsProduct = tags.map((i) => {
    return {
      ...i,
      children: i.children?.filter((child) => child.group === "PRODUCT")
    }
  }).
    filter((tag) => tag.children.length > 0).
    sort((a, b) => b.children.length - a.children.length)
  const tagsProductPage1 = useSwrInfinite("/tags", tagsProductParams).resData
  const tagsProductPage2 = useSwrInfinite("/tags", { ...tagsProductParams, page: 2 }).resData
  const tagsProductPage3 = useSwrInfinite("/tags", { ...tagsProductParams, page: 3 }).resData
  const tagsProductAll = tagsProductPage1.concat(tagsProductPage2).concat(tagsProductPage3)

  //get provinces
  const provinces = useSwrInfinite("/provinces", { "sort": "-organizations_count" }).resData

  //get appointment to notification
  const { USER } = useSelector(state => state.USER);
  let condition = false;
  if (USER && PLAT_FORM) condition = true
  const appointments = useSwr(
    "/appointments",
    condition,
    { ...appointmentsParams, "filter[platform]": PLAT_FORM }
  ).responseArray

  //-------------------------------

  const getUserLocation = async () => {
    const res = await getPosition()
    if (res) {
      const coords = {
        lat: res.coords.latitude, long: res.coords.longitude
      }
      setItem("USER_LOCATION", JSON.stringify(coords), "session")
    }
  }

  useEffect(() => {
    getUserLocation()
    const tk = getItem("_WEB_TK", "session") ?? getItem("_WEB_TK", "local")
    if (tk) {
      dispatch(fetchAsyncUser())
    } else {
      dispatch(onEmptyUser())
    }
  }, [])

  const value = {
    tags,
    tagsProduct,
    tagsProductAll,
    provinces,
    appointments
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
