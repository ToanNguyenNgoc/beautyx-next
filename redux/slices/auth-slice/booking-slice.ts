import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import { IServiceUser, IUser_Service } from "../../../interfaces/servicesUser"


export interface IBOOKING {
    order: null | IServiceUser,
    order_id: null | number,
    org_id: null | number,
    services: IUser_Service[]
}
const initialState: IBOOKING = {
    order: null,
    order_id: null,
    org_id: null,
    services: []
}

const bookingSlice = createSlice({
    name: "BOOKING",
    initialState,
    reducers: {
        onSelectService: (state, action) => {
            const iIndex = state.services.findIndex((i: IUser_Service) => i.id === action.payload.service?.id)
            if (iIndex >= 0) {
                const list = state.services.filter((i: IUser_Service) => i.id !== action.payload.service?.id)
                state.services = list
            } else {
                state.services.push(action.payload.service)
            }
            state.order = action.payload.order
        },
        onClearSelect: (state) => {
            state.order = null,
                state.order_id = null,
                state.org_id = null,
                state.services = []
        }
    }
})
const { reducer, actions } = bookingSlice
export const { onSelectService, onClearSelect } = actions
export default reducer