import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../../interfaces/user"
import authentication from "../../../api-client/authApi";
import {useStorage} from "../../../context/hooks";
import { STATUS } from "../../status"

export interface IUSER {
    firstLoad: boolean,
    USER: null | User,
    upload_status: string,
}
const initialState: IUSER = {
    firstLoad: true,
    USER: null,
    upload_status: ""
}
export const fetchAsyncUser: any = createAsyncThunk(
    "USER/fetchAsyncUser",
    async () => {
        const res = await authentication.getUserProfile();
        return res.data.context
    }
)
export const putAsyncUser: any = createAsyncThunk(
    "USER/putAsyncUser",
    async (values: any) => {
        const res = await authentication.putUserProfile({ ...values, telephone: null })
        return {
            ...values,
            avatar: res.data.context.avatar
        }
    }
)
const userSlice = createSlice({
    name: "USER",
    initialState,
    reducers: {
        onEmptyUser: (state) => {
            const { removeItem } = useStorage()
            state.firstLoad = false
            state.USER = null
            removeItem("_WEB_TK", "local")
            removeItem("_WEB_TK", "session")


        }
    },
    extraReducers: {
        [fetchAsyncUser.pending]: (state, { payload }) => {
            return state
        },
        [fetchAsyncUser.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                firstLoad: false,
                USER: payload
            }
        },
        [fetchAsyncUser.rejected]: (state, { action }) => {
            return {
                ...state,
                firstLoad: false
            }
        },
        //put user
        [putAsyncUser.pending]: (state) => {
            return { ...state, upload_status: STATUS.LOADING }
        },
        [putAsyncUser.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                upload_status: STATUS.SUCCESS,
                USER: payload
            }
        },
        [putAsyncUser.rejected]: (state) => {
            return { ...state, upload_status: STATUS.FAIL }
        },
    }
})
const { actions } = userSlice;
export const { onEmptyUser } = actions;
export default userSlice.reducer