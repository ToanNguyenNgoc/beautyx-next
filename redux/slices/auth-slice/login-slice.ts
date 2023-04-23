import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import tikiAuthApi from '../../../api-client/_tikiAuthApi';
import momoAuthApi from '../../../api-client/_momoAuthApi';
import mbAuthApi from '../../../api-client/_mbAuthApi';
import { STATUS } from '../../status';
import { useStorage } from '../../../context/hooks'
import authentication from "../../../api-client/authApi"
import { AxiosError } from 'axios';

export interface ILOGIN {
    response: any,
    status: string,
    status_code: number
}


export const loginAsyncBeauty: any = createAsyncThunk(
    "LOGIN/loginAsyncBeauty",
    async (params) => {
        try {
            const res = await authentication.login(params);
            const { setItem } = useStorage()
            setItem("_WEB_TK", res.data.context.token, "local")
            const payload = res.data.context;
            return {status_code:200, res:res.data.context}
        } catch (error) {
            const err = error as AxiosError;
            console.log(error)
            return {status_code:err.response?.status, res:null}
        }
    }
)

export const loginAsyncMomo: any = createAsyncThunk(
    "LOGIN/loginAsyncMomo",
    async (params: any) => {
        try {
            const res = await momoAuthApi.login(params);
            const { setItem } = useStorage()
            setItem("_WEB_TK", res.data.context.token, "session")
            const payload = res.data.context;
            return payload;
        } catch (error) {
            console.log(error)
        }
    }
)
export const loginAsyncTiki: any = createAsyncThunk(
    "LOGIN/loginAsyncTiki",
    async (params: any) => {
        try {
            const res = await tikiAuthApi.login(params);
            const { setItem } = useStorage()
            setItem("_WEB_TK", res.data.context.token, "session")
            const payload = res.data.context;
            return payload;
        } catch (error) {
            console.log(error)
        }
    }
)
export const loginAsyncMb: any = createAsyncThunk(
    "LOGIN/loginAsyncMbbank",
    async (params: any) => {
        try {
            const res = await mbAuthApi.login(params);
            const { setItem } = useStorage()
            setItem("_WEB_TK", res.data.context.token, "session")
            const payload = res.data.context;
            return payload;
        } catch (error) {
            console.log(error)
            return error
        }
    }
)
const initialState = {
    response: null,
    status: '',
    status_code: 0
} as ILOGIN
const loginFlatFormSlice = createSlice({
    name: "LOGIN",
    initialState,
    reducers: {
    },
    extraReducers: {
        // beautyx
        [loginAsyncBeauty.pending]: (state) => {
            return { ...state, status: STATUS.LOADING }
        },
        [loginAsyncBeauty.fulfilled]: (state, { payload }) => {
            return {
                response: payload.res,
                status: STATUS.SUCCESS,
                status_code: payload.status_code
            }
        },
        [loginAsyncBeauty.rejected]: (state, { payload }) => {
            return { ...state, status: STATUS.FAIL}
        },
        // momo
        [loginAsyncMomo.pending]: (state) => {
            return { ...state, status: STATUS.LOADING }
        },
        [loginAsyncMomo.fulfilled]: (state, { payload }) => {
            return {
                response: payload,
                status: STATUS.SUCCESS,
                status_code: 200
            }
        },
        [loginAsyncMomo.rejected]: (state) => {
            return { ...state, status: STATUS.FAIL }
        },
        //tiki
        [loginAsyncTiki.pending]: (state) => {
            return { ...state, status: STATUS.LOADING }
        },
        [loginAsyncTiki.fulfilled]: (state, { payload }) => {
            return {
                response: payload,
                status: STATUS.SUCCESS,
                status_code: 200
            }
        },
        [loginAsyncTiki.rejected]: (state) => {
            return { ...state, status: STATUS.FAIL }
        },
        //Mb bank
        [loginAsyncMb.pending]: (state) => {
            return { ...state, status: STATUS.LOADING }
        },
        [loginAsyncMb.fulfilled]: (state, { payload }) => {
            return {
                response: payload,
                status: STATUS.SUCCESS,
                status_code: 200
            }
        },
        [loginAsyncMb.rejected]: (state) => {
            return { ...state, status: STATUS.FAIL }
        }
    }
})
export default loginFlatFormSlice.reducer;