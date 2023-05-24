exports.id = 5026;
exports.ids = [5026];
exports.modules = {

/***/ 5639:
/***/ ((module) => {

// Exports
module.exports = {
	"acc_section": "acc_acc_section__60va7",
	"order_list_cnt": "acc_order_list_cnt__0iHdE",
	"order_item_cnt": "acc_order_item_cnt__sdzEF",
	"order_item": "acc_order_item__MksFX",
	"order_item_head": "acc_order_item_head__GbQ9O",
	"order_item_head_left": "acc_order_item_head_left__dHNm8",
	"order_item_head_right": "acc_order_item_head_right__GI6ci",
	"order_item_date": "acc_order_item_date__N_yuD",
	"order_item_date_left": "acc_order_item_date_left__7RYjj",
	"order_item_date_right": "acc_order_item_date_right__ZNZ96",
	"order_item__body": "acc_order_item__body__bo6rv",
	"org_img": "acc_org_img__LkhQF",
	"order_item_body_de": "acc_order_item_body_de__GPMvM",
	"org__address": "acc_org__address__QdooY",
	"order_price": "acc_order_price__9ypSM",
	"order_item__status": "acc_order_item__status__1dJeI",
	"order_item__status_left": "acc_order_item__status_left__SiO0d",
	"order_item__status_right": "acc_order_item__status_right__wYMC6",
	"order_amount": "acc_order_amount__wdKt6",
	"status": "acc_status__FIjl7",
	"order_bot": "acc_order_bot__faXzc"
};


/***/ }),

/***/ 5026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _acc_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5639);
/* harmony import */ var _acc_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_acc_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7469);
/* harmony import */ var _src_constants_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6174);







function AccPageTitle({ title  }) {
    const onClickBack = ()=>{
        next_router__WEBPACK_IMPORTED_MODULE_1___default().back();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: title,
                description: title,
                url: ""
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_acc_module_css__WEBPACK_IMPORTED_MODULE_6___default().acc_section),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: onClickBack,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            src: _src_constants_icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"].chevronLeft */ .Z.chevronLeft,
                            alt: "icon_back",
                            width: 24,
                            height: 24,
                            layout: "fixed"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: title
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccPageTitle);


/***/ })

};
;