exports.id = 6810;
exports.ids = [6810];
exports.modules = {

/***/ 4327:
/***/ ((module) => {

// Exports
module.exports = {
	"re_org_item": "org-item_re_org_item__xNpRz",
	"org_img_cnt": "org-item_org_img_cnt__fYtAH",
	"org_img_cnt__rate": "org-item_org_img_cnt__rate___vgJi",
	"org_item_tick": "org-item_org_item_tick__a_bvi",
	"org_rate_item": "org-item_org_rate_item__ODvrS",
	"re_org_item__cnt": "org-item_re_org_item__cnt__Ejogt",
	"org_name": "org-item_org_name__j3t7a",
	"org_address": "org-item_org_address__KYc7j",
	"org-time-work__left": "org-item_org-time-work__left__BpfwT",
	"title": "org-item_title__0cAPy"
};


/***/ }),

/***/ 6810:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9649);
/* harmony import */ var _org_item_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4327);
/* harmony import */ var _org_item_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_org_item_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_direct_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9919);
/* harmony import */ var _src_constants_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6174);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout__WEBPACK_IMPORTED_MODULE_3__]);
_layout__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable jsx-a11y/anchor-is-valid */ 







function OrgItem({ org  }) {
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            prefetch: true,
            href: (0,_context_direct_url__WEBPACK_IMPORTED_MODULE_6__/* .directUrlOrg */ .uB)(org.subdomain, locale),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: (_org_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().re_org_item),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_org_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().org_img_cnt),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_org_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().org_item_tick),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_3__/* .ImageComponent */ .cu, {
                                    type: "ICON",
                                    src: _src_constants_icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"].flash */ .Z.flash,
                                    layout: "fixed",
                                    width: 24,
                                    height: 24,
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_3__/* .ImageComponent */ .cu, {
                                src: org.image_url,
                                layout: "responsive",
                                alt: org.subdomain,
                                width: "100%",
                                height: "100%",
                                type: "IMG",
                                style: {
                                    borderRadius: "8px 8px 0 0"
                                }
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_org_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().org_img_cnt__rate),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_org_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().org_rate_item),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_3__/* .ImageComponent */ .cu, {
                                                type: "ICON",
                                                src: _src_constants_icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"].heart */ .Z.heart,
                                                layout: "fixed",
                                                width: 12,
                                                height: 12,
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: org.favorites_count
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_org_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().org_rate_item),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_3__/* .ImageComponent */ .cu, {
                                                type: "ICON",
                                                src: _src_constants_icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"].star */ .Z.star,
                                                layout: "fixed",
                                                width: 12,
                                                height: 12,
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "5"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_org_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().re_org_item__cnt),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_org_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().org_name),
                                children: org?.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_org_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().org_address),
                                children: org?.address
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrgItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;