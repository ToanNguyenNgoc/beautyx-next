"use strict";
exports.id = 7170;
exports.ids = [7170];
exports.modules = {

/***/ 7170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5483);

class Tag {
    getAll = (values)=>{
        const url = `/tags`;
        const params = {
            filter: "SERVICE",
            include: "children|media",
            sort: "-organizations_count"
        };
        return _axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(url, {
            params
        });
    };
    getTagId = (tagId)=>{
        const url = `/tags/${tagId}`;
        return _axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(url);
    };
    getServicesChild = (values)=>{
        const url = `/tags`;
        const params = {
            "page": values?.page ?? 1,
            "filter[group]": "SERVICE",
            "include": "parent.media|media",
            "sort": "-organizations_count"
        };
        return _axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(url, {
            params
        });
    };
    getProducts = ()=>{
        const url = `/tags`;
        const params = {
            "filter[group]": "PRODUCT",
            include: "parent.media|children.media|media",
            sort: "-organizations_count"
        };
        return _axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(url, {
            params
        });
    };
}
const tagsApi = new Tag();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tagsApi);


/***/ })

};
;