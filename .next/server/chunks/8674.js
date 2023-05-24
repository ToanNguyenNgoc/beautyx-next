"use strict";
exports.id = 8674;
exports.ids = [8674];
exports.modules = {

/***/ 8674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ address_slice),
  "CJ": () => (/* binding */ fetchAsyncUserAddress),
  "SD": () => (/* binding */ postAsyncAddress),
  "_k": () => (/* binding */ removeAsyncUserAddress),
  "CE": () => (/* binding */ updateAsyncAddress)
});

// UNUSED EXPORTS: removeAddress, removeDefaultItem

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./api-client/axios.ts
var axios = __webpack_require__(5483);
// EXTERNAL MODULE: ./api-client/authHeader.ts
var authHeader = __webpack_require__(1777);
;// CONCATENATED MODULE: ./api-client/userAddressApi.ts


class UserAddress {
    getAll = (session, local)=>{
        const url = `/useraddresses`;
        const params = {
            limit: 15,
            page: 1
        };
        if (localStorage.getItem("_WEB_TK") || window.sessionStorage.getItem("_WEB_TK")) {
            return axios/* default.get */.Z.get(url, {
                params,
                headers: {
                    Authorization: `Bearer ${session ? session : local}`
                }
            });
        }
    };
    getAddress = ()=>{
        const url = `/useraddresses`;
        const params = {
            limit: 15,
            page: 1
        };
        return axios/* default.get */.Z.get(url, (0,authHeader/* AUTH_HEADER_PARAM_GET */.aF)(params));
    };
    postAddress = (values)=>{
        const url = `/useraddresses`;
        const params = {
            "address": values.address,
            "is_default": values.is_default,
            "is_bookmark": true
        };
        return axios/* default.post */.Z.post(url, params, (0,authHeader/* AUTH_HEADER */.KH)());
    };
    deleteAddress = (id)=>{
        const url = `/useraddresses/${id}`;
        if (localStorage.getItem("_WEB_TK") || window.sessionStorage.getItem("_WEB_TK")) {
            return axios/* default.delete */.Z["delete"](url, (0,authHeader/* AUTH_HEADER */.KH)());
        }
    };
    updateAddress = (values)=>{
        const url = `/useraddresses/${values.id}`;
        const params = {
            "address": values.address,
            "is_default": true
        };
        return axios/* default.put */.Z.put(url, params, (0,authHeader/* AUTH_HEADER */.KH)());
    };
    updateAddressCancelDefault = (values)=>{
        const url = `/useraddresses/${values.id}`;
        const params = {
            "address": values.address,
            "is_default": false
        };
        return axios/* default.put */.Z.put(url, params, (0,authHeader/* AUTH_HEADER */.KH)());
    };
}
const userAddressApi = new UserAddress();
/* harmony default export */ const api_client_userAddressApi = (userAddressApi);

// EXTERNAL MODULE: ./redux/status.ts
var redux_status = __webpack_require__(9264);
;// CONCATENATED MODULE: ./redux/slices/auth-slice/address-slice.ts



const fetchAsyncUserAddress = (0,toolkit_.createAsyncThunk)("ADDRESS/fetchAsyncUserAddress", async ()=>{
    try {
        const res = await api_client_userAddressApi.getAddress();
        const payload = res.data.context;
        return payload;
    } catch (error) {
        console.log(error);
    }
});
const removeAsyncUserAddress = (0,toolkit_.createAsyncThunk)("ADDRESS/removeAsyncUserAddress", async (address_id)=>{
    try {
        await api_client_userAddressApi.deleteAddress(address_id);
        const payload = address_id;
        return payload;
    } catch (error) {
        console.log(error);
    }
});
const postAsyncAddress = (0,toolkit_.createAsyncThunk)("ADDRESS/postAsyncAddress", async (address)=>{
    try {
        const res = await api_client_userAddressApi.postAddress(address);
        const payload = res.data.context;
        return payload;
    } catch (error) {
        console.log(error);
    }
});
const updateAsyncAddress = (0,toolkit_.createAsyncThunk)("ADDRESS/updateAsyncAddress", async (values)=>{
    try {
        await api_client_userAddressApi.updateAddress(values);
        const payload = {
            ...values,
            is_default: true
        };
        // const iIndexNew = values.address((i: IUserAddress) => i.id === values.item.id);
        return payload;
    } catch (error) {
        console.log(error);
    }
});
const initialState = {
    address: [],
    address_default: null,
    status: null,
    status_up: null
};
const userAddressSlice = (0,toolkit_.createSlice)({
    initialState,
    name: "ADDRESS",
    reducers: {
        removeAddress: (state, action)=>{
            state.address = state.address.filter((item)=>item.id !== action.payload.id);
        },
        removeDefaultItem: (state, action)=>{
            state.address_default = action.payload;
        }
    },
    extraReducers: {
        [fetchAsyncUserAddress.pending]: (state)=>{
            return {
                ...state,
                status: redux_status/* STATUS.LOADING */.Q.LOADING
            };
        },
        [fetchAsyncUserAddress.fulfilled]: (state, { payload  })=>{
            return {
                ...state,
                address_default: payload.find((i)=>i.is_default === true),
                address: payload,
                status: redux_status/* STATUS.SUCCESS */.Q.SUCCESS
            };
        },
        [fetchAsyncUserAddress.rejected]: (state)=>{
            return {
                ...state,
                status: redux_status/* STATUS.FAIL */.Q.FAIL
            };
        },
        [removeAsyncUserAddress.pending]: (state)=>{
            return {
                ...state,
                status_up: redux_status/* STATUS.LOADING */.Q.LOADING
            };
        },
        [removeAsyncUserAddress.fulfilled]: (state, { payload  })=>{
            return {
                ...state,
                address: state.address.filter((item)=>item.id !== payload),
                status_up: redux_status/* STATUS.SUCCESS */.Q.SUCCESS
            };
        },
        [removeAsyncUserAddress.rejected]: (state)=>{
            return {
                ...state,
                status_up: redux_status/* STATUS.FAIL */.Q.FAIL
            };
        },
        //post address
        [postAsyncAddress.pending]: (state)=>{
            return {
                ...state,
                status_up: redux_status/* STATUS.LOADING */.Q.LOADING
            };
        },
        [postAsyncAddress.fulfilled]: (state, { payload  })=>{
            return {
                ...state,
                address_default: payload,
                address: [
                    payload,
                    ...state.address
                ],
                status_up: redux_status/* STATUS.SUCCESS */.Q.SUCCESS
            };
        },
        [postAsyncAddress.rejected]: (state)=>{
            return {
                ...state,
                status_up: redux_status/* STATUS.FAIL */.Q.FAIL
            };
        },
        //updateAddress
        [updateAsyncAddress.pending]: (state)=>{
            return {
                ...state,
                status_up: redux_status/* STATUS.LOADING */.Q.LOADING
            };
        },
        [updateAsyncAddress.fulfilled]: (state, { payload  })=>{
            const itemIndexNew = state.address.findIndex((item)=>item.id === payload.id);
            const itemIndexOld = state.address.findIndex((item)=>item.is_default === true);
            state.address[itemIndexNew].is_default = true;
            state.address[itemIndexOld].is_default = false;
            state.status_up = redux_status/* STATUS.SUCCESS */.Q.SUCCESS;
        },
        [updateAsyncAddress.rejected]: (state)=>{
            return {
                ...state,
                status_up: redux_status/* STATUS.FAIL */.Q.FAIL
            };
        }
    }
});
const { actions  } = userAddressSlice;
const { removeAddress , removeDefaultItem  } = actions;
/* harmony default export */ const address_slice = (userAddressSlice.reducer);


/***/ })

};
;