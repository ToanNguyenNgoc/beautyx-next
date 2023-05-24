"use strict";
exports.id = 9252;
exports.ids = [9252];
exports.modules = {

/***/ 7442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GY": () => (/* binding */ onEmptyCateProduct),
/* harmony export */   "W$": () => (/* binding */ onChooseCateProduct),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dz": () => (/* binding */ onChooseCateService),
/* harmony export */   "mZ": () => (/* binding */ onEmptyCateServices)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    CATE_SERVICES: {
        org_id: "",
        cate_id: 0
    },
    CATE_PRODUCTS: {
        org_id: "",
        cate_id: 0
    }
};
const orgChildSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "ORG_CHILD",
    initialState,
    reducers: {
        onEmptyCateServices: (state, { payload  })=>{
            // console.log("payload", payload)
            // console.log("state org", state.CATE_SERVICES.org_id)
            if (state.CATE_SERVICES.org_id !== payload) {
                state.CATE_SERVICES.cate_id = 0;
            }
            state.CATE_SERVICES.org_id = payload;
        },
        onChooseCateService: (state, { payload  })=>{
            state.CATE_SERVICES = {
                cate_id: payload.cate_id,
                org_id: payload.org_id
            };
        },
        onEmptyCateProduct: (state, { payload  })=>{
            if (state.CATE_PRODUCTS.org_id !== payload) {
                state.CATE_PRODUCTS.cate_id = 0;
            }
            state.CATE_PRODUCTS.org_id = payload;
        },
        onChooseCateProduct: (state, { payload  })=>{
            state.CATE_PRODUCTS = {
                cate_id: payload.cate_id,
                org_id: payload.org_id
            };
        }
    }
});
const { reducer , actions  } = orgChildSlice;
const { onChooseCateService , onEmptyCateServices , onEmptyCateProduct , onChooseCateProduct  } = actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);


/***/ }),

/***/ 8346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EY": () => (/* binding */ onActiveTab),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports onSetOrgDetail, onSetGalleries */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

// export const onFavoriteOrg: any = createAsyncThunk(
//     "ORG/onFavoriteOrg",
//     async (org: any) => {
//         await favorites.postFavorite(org?.id);
//         const payload = org.favorites_count + 1;
//         return payload;
//     }
// );
// export const onDeleteFavoriteOrg: any = createAsyncThunk(
//     "ORG/onDeleteFavoriteOrg",
//     async (org: any) => {
//         await favorites.deleteFavorite(org?.id);
//         const payload = org.favorites_count - 1;
//         return payload;
//     }
// );
const initialState = {
    org: {},
    tab: "1",
    GALLERIES: [],
    SERVICES_KEYWORD: [],
    PRODUCTS_KEYWORD: []
};
const orgSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    initialState,
    name: "ORG",
    reducers: {
        onSetOrgDetail: (state, action)=>{
            state.org = action.payload;
        },
        onSetGalleries: (state, action)=>{
            state.GALLERIES = action.payload;
        },
        onActiveTab: (state, action)=>{
            state.tab = action.payload;
        }
    },
    extraReducers: {
    }
});
const { actions  } = orgSlice;
const { onSetOrgDetail , onSetGalleries , onActiveTab  } = actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orgSlice.reducer);


/***/ })

};
;