"use strict";
(() => {
var exports = {};
exports.id = 130;
exports.ids = [130];
exports.modules = {

/***/ 9884:
/***/ ((module) => {

module.exports = require("http-proxy");

/***/ }),

/***/ 6378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v": () => (/* binding */ baseURL)
});

// UNUSED EXPORTS: default

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: external "query-string"
const external_query_string_namespaceObject = require("query-string");
var external_query_string_default = /*#__PURE__*/__webpack_require__.n(external_query_string_namespaceObject);
;// CONCATENATED MODULE: ./api-client/axios.ts


const baseURL = "https://api.myspa.vn/v1";
// export const baseURL = process.env.NEXT_PUBLIC_API_DEV
const axiosClient = external_axios_default().create({
    baseURL: baseURL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    paramsSerializer: (params)=>external_query_string_default().stringify(params)
});
axiosClient.interceptors.request.use(async (config)=>{
    return config;
});
external_axios_default().interceptors.response.use((response)=>{
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error)=>{
    throw error;
});
/* harmony default export */ const axios = ((/* unused pure expression or super */ null && (axiosClient)));


/***/ }),

/***/ 3628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var http_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9884);
/* harmony import */ var http_proxy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_proxy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_client_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6378);


const proxy = http_proxy__WEBPACK_IMPORTED_MODULE_0___default().createProxyServer();
const config = {
    api: {
        bodyParser: {
            sizeLimit: false
        }
    }
};
async function handler(req, res) {
    const API_URL = _api_client_axios__WEBPACK_IMPORTED_MODULE_1__/* .baseURL */ .v?.slice(0, _api_client_axios__WEBPACK_IMPORTED_MODULE_1__/* .baseURL */ .v?.length - 4);
    return new Promise((resolved)=>{
        req.headers.cookie = "";
        proxy.web(req, res, {
            target: API_URL,
            changeOrigin: true,
            selfHandleResponse: false
        });
        proxy.once("proxyRes", ()=>{
            resolved(true);
        });
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3628));
module.exports = __webpack_exports__;

})();