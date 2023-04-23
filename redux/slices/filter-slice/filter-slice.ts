import { createSlice } from "@reduxjs/toolkit"

export interface IFILTER {
    tab: string,
    ORG_FILTER: {
        "limit": number,
        "filter[tags]": string,
        "filter[min_price]": string,
        "filter[max_price]": string,
        "filter[location]": string,
        "filter[province_code]": string,
        "include": "tags|province|district|ward|branches|favorites|favorites_count",
        "sort": string
    }
}
const initialState: IFILTER = {
    tab: "dich-vu",
    ORG_FILTER: {
        "limit": 15,
        "filter[tags]": "",
        "filter[min_price]": "",
        "filter[max_price]": "",
        "filter[location]": "",
        "filter[province_code]": "",
        "include": "tags|province|district|ward|branches|favorites|favorites_count",
        "sort": ""
    }
}
const filterSlice = createSlice({
    name: "FILTER",
    initialState,
    reducers: {
        onSetTab: (state, { payload }) => {
            state.tab = payload
        },
        onFilterOrg: (state, action) => {
            const newParams = {
                ...state.ORG_FILTER,
                ...action.payload
            }
            state.ORG_FILTER = newParams
        },
        onEmptyFilterOrg: (state) => {
            state.ORG_FILTER = initialState.ORG_FILTER
        }
    }
})
const { reducer, actions } = filterSlice
export const { onFilterOrg, onSetTab, onEmptyFilterOrg } = actions
export default reducer
