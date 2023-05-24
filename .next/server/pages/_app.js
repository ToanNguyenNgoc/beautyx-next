"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(485);
/* harmony import */ var _context_AppProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(809);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9649);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_client_authHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1777);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_client_axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5483);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout__WEBPACK_IMPORTED_MODULE_4__]);
_components_layout__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function MyApp({ Component , pageProps  }) {
    const Layout = Component.Layout ?? _components_layout__WEBPACK_IMPORTED_MODULE_4__/* .EmptyLayout */ .Tp;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swr__WEBPACK_IMPORTED_MODULE_5__.SWRConfig, {
                value: {
                    fetcher: (url)=>_api_client_axios__WEBPACK_IMPORTED_MODULE_8__/* ["default"].get */ .Z.get(url, (0,_api_client_authHeader__WEBPACK_IMPORTED_MODULE_6__/* .AUTH_HEADER */ .KH)()),
                    shouldRetryOnError: false
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_AppProvider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Layout, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__/* .AssistantBtn */ .df, {})
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_redux_store_store__WEBPACK_IMPORTED_MODULE_2__/* .wrapper.withRedux */ .Y.withRedux(MyApp));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hh": () => (/* binding */ onClearSelect),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "p7": () => (/* binding */ onSelectService)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    order: null,
    order_id: null,
    org_id: null,
    services: []
};
const bookingSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "BOOKING",
    initialState,
    reducers: {
        onSelectService: (state, action)=>{
            const iIndex = state.services.findIndex((i)=>i.id === action.payload.service?.id);
            if (iIndex >= 0) {
                const list = state.services.filter((i)=>i.id !== action.payload.service?.id);
                state.services = list;
            } else {
                state.services.push(action.payload.service);
            }
            state.order = action.payload.order;
        },
        onClearSelect: (state)=>{
            state.order = null, state.order_id = null, state.org_id = null, state.services = [];
        }
    }
});
const { reducer , actions  } = bookingSlice;
const { onSelectService , onClearSelect  } = actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);


/***/ }),

/***/ 485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ wrapper)
});

// UNUSED EXPORTS: makeStore

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./redux/slices/testSlice.ts

const initialState = {
    count: 0
};
const testSlice = (0,toolkit_.createSlice)({
    name: "TEST",
    initialState,
    reducers: {
        onSetCount: (state, action)=>{
            console.log(action.payload);
            state.count = action.payload;
        }
    },
    extraReducers: {}
});
const { reducer , actions  } = testSlice;
const { onSetCount  } = actions;
/* harmony default export */ const slices_testSlice = (testSlice.reducer);

// EXTERNAL MODULE: ./redux/slices/auth-slice/login-slice.ts + 3 modules
var login_slice = __webpack_require__(4670);
// EXTERNAL MODULE: ./redux/slices/search-slice/searchSlice.ts + 1 modules
var searchSlice = __webpack_require__(7512);
// EXTERNAL MODULE: ./redux/slices/org-slice/orgSlice.ts
var orgSlice = __webpack_require__(8346);
// EXTERNAL MODULE: ./redux/slices/org-slice/orgChildSlice.ts
var orgChildSlice = __webpack_require__(7442);
// EXTERNAL MODULE: ./redux/slices/auth-slice/user-slice.ts
var user_slice = __webpack_require__(2755);
// EXTERNAL MODULE: ./redux/slices/cart-slice/cartSlice.ts
var cartSlice = __webpack_require__(2577);
;// CONCATENATED MODULE: ./redux/slices/services-book-slice/services-book-slice.ts

const services_book_slice_initialState = {
    servicesBook: [],
    org_id: null,
    order_id: null,
    org: null,
    note: null,
    time_start: {
        date: null,
        time: null
    },
    branch: null
};
const services = (0,toolkit_.createSlice)({
    name: "SERVICES_BOOK",
    initialState: services_book_slice_initialState,
    reducers: {
        addService: (state, action)=>{
            const iIndex = state.servicesBook.findIndex((item)=>item.ser_book_id === action.payload.ser_book_id);
            if (iIndex >= 0) {
                const list = state.servicesBook.filter((item)=>item.ser_book_id !== action.payload.ser_book_id);
                state.servicesBook = list;
            } else {
                const temp = {
                    ...action.payload
                };
                state.servicesBook.push(temp);
            }
            state.org_id = action.payload.org_id;
            state.order_id = action.payload.order_id;
            state.org = action.payload.org;
        },
        addServiceBookNow: (state, action)=>{
            state.org = action.payload.org;
            state.servicesBook = action.payload.services;
        },
        addAppointmentDetail: (state, { payload  })=>{
            return {
                ...state,
                note: payload.note,
                time_start: payload.time_start,
                branch: payload.branch
            };
        },
        clearAllServices: (state)=>{
            state.servicesBook = [];
            state.org = null;
            state.order_id = null;
            state.org = null;
        }
    }
});
const { reducer: services_book_slice_reducer , actions: services_book_slice_actions  } = services;
const { addService , clearAllServices , addServiceBookNow , addAppointmentDetail  } = services_book_slice_actions;
/* harmony default export */ const services_book_slice = (services_book_slice_reducer);

// EXTERNAL MODULE: ./redux/slices/auth-slice/address-slice.ts + 1 modules
var address_slice = __webpack_require__(8674);
// EXTERNAL MODULE: ./redux/slices/filter-slice/filter-slice.ts
var filter_slice = __webpack_require__(3794);
// EXTERNAL MODULE: ./redux/slices/auth-slice/booking-slice.ts
var booking_slice = __webpack_require__(5539);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: ./redux/store/store.ts













const rootReducer = {
    TEST: slices_testSlice,
    LOGIN: login_slice/* default */.ZP,
    SEARCH: searchSlice/* default */.ZP,
    ORG: orgSlice/* default */.ZP,
    ORG_CHILD: orgChildSlice/* default */.ZP,
    USER: user_slice/* default */.ZP,
    CART: cartSlice/* default */.ZP,
    SERVICES_BOOK: services_book_slice,
    USER_ADDRESS: address_slice/* default */.ZP,
    FILTER: filter_slice/* default */.ZP,
    BOOKING: booking_slice/* default */.ZP
};
const makeStore = ()=>(0,toolkit_.configureStore)({
        reducer: rootReducer
    });
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore, {
    debug: false
});


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 5545:
/***/ ((module) => {

module.exports = require("@mui/material/LinearProgress");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 7986:
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 808:
/***/ ((module) => {

module.exports = require("nprogress");

/***/ }),

/***/ 9103:
/***/ ((module) => {

module.exports = require("query-string");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 549:
/***/ ((module) => {

module.exports = require("swr");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,7136,9649,8674,9252], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();