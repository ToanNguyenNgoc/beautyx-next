exports.id = 7171;
exports.ids = [7171];
exports.modules = {

/***/ 1990:
/***/ ((module) => {

// Exports
module.exports = {
	"homeDiscountItem": "discount-item_homeDiscountItem__s8g7k",
	"discountImgOrg": "discount-item_discountImgOrg__r5xMt",
	"discountImg": "discount-item_discountImg__qS7HE",
	"discountDetail": "discount-item_discountDetail__arYZj",
	"discountTitle": "discount-item_discountTitle__C4YOu",
	"discountWrapPrice": "discount-item_discountWrapPrice__5kIWC",
	"discountSpecialPrice": "discount-item_discountSpecialPrice__KYkJC",
	"discountOdlPrice": "discount-item_discountOdlPrice__H_OqT",
	"discountAddressWrap": "discount-item_discountAddressWrap__DrH1E",
	"iconMap": "discount-item_iconMap__jT_cg",
	"discountAddress": "discount-item_discountAddress__9s23L",
	"discountLimitBar": "discount-item_discountLimitBar__S0yTd",
	"discountLimitBarUser": "discount-item_discountLimitBarUser__clGpo",
	"discountLimitBarNum": "discount-item_discountLimitBarNum__uI61l",
	"homeDiscountList": "discount-item_homeDiscountList__55s3w"
};


/***/ }),

/***/ 7171:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_utils_formatPrice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(139);
/* harmony import */ var _src_utils_formatRouterLink_fileType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6591);
/* harmony import */ var _src_constants_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6174);
/* harmony import */ var _discount_item_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1990);
/* harmony import */ var _discount_item_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_discount_item_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_direct_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9919);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9649);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout__WEBPACK_IMPORTED_MODULE_5__]);
_layout__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function DiscountItem(props) {
    const { item , discount  } = props;
    const image_url = item?.productable.image_url ?? item?.organization.image_url;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: (0,_context_direct_url__WEBPACK_IMPORTED_MODULE_6__/* .directUrlDiscount */ .i6)(discount, item),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: (_discount_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().homeDiscountItem),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_discount_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().discountImg),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_5__/* .ImageComponent */ .cu, {
                        src: image_url,
                        alt: "image",
                        type: "IMG",
                        layout: "responsive",
                        width: "100%",
                        height: "100%"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_discount_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().discountDetail),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_discount_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().discountTitle),
                            children: item.productable.service_name ?? item.productable.product_name
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_discount_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().discountWrapPrice),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_discount_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().discountSpecialPrice),
                                    children: discount.discount_type === _src_utils_formatRouterLink_fileType__WEBPACK_IMPORTED_MODULE_2__/* .DISCOUNT_TYPE.FINAL_PRICE.key */ .uH.FINAL_PRICE.key ? `${(0,_src_utils_formatPrice__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(discount.discount_value)}đ` : `${(0,_src_utils_formatPrice__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(item.view_price)}đ`
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: (_discount_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().discountOdlPrice),
                                    children: [
                                        (0,_src_utils_formatPrice__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(item?.productable.price || item?.productable.retail_price),
                                        "đ"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_discount_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().discountAddressWrap),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_discount_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().iconMap),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_5__/* .ImageComponent */ .cu, {
                                        src: _src_constants_icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"].pinMapRed */ .Z.pinMapRed,
                                        alt: "icon",
                                        type: "ICON",
                                        layout: "fixed",
                                        width: 10,
                                        height: 10
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_discount_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().discountAddress),
                                    children: item?.organization.full_address
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_discount_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().discountLimitBar),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: !discount?.total || discount?.total === discount?.used ? {
                                        width: "100%"
                                    } : {
                                        width: `${discount?.used / discount?.total * 100}%`
                                    },
                                    className: (_discount_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().discountLimitBarUser)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_discount_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().discountLimitBarNum),
                                    children: discount?.total ? `Đã bán ${discount.used}/${discount.total}` : "Đang mở"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiscountItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uH": () => (/* binding */ DISCOUNT_TYPE)
/* harmony export */ });
/* unused harmony exports EX_APPLY_DATE, EX_DISCOUNT_UNIT, EX_DISCOUNT_TYPE, EX_ORDER_VALUE */
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);


const date = new Date();
const dayNow = moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format("YYYY-MM-YY HH:MM:SS");
const DISCOUNT_TYPE = {
    PRODUCT: {
        key: "PRODUCT",
        text: "Giảm từng sản phẩm, dịch vụ"
    },
    SUB_TOTAL: {
        key: "SUB_TOTAL",
        text: "Giảm tr\xean tổng đơn"
    },
    FINAL_PRICE: {
        key: "FINAL_PRICE",
        text: "Gi\xe1 thanh to\xe1n"
    }
};
const EX_APPLY_DATE = (discount)=>{
    console.log(discount);
    let validDate = false;
    if (!discount.valid_from && !discount.valid_util) {
        validDate = true;
    } else if (discount.valid_from && dayNow > discount.valid_from && !discount.valid_util) {
        validDate = true;
    } else if (discount.valid_from < dayNow && discount.valid_util > dayNow) {
        validDate = true;
    }
    return validDate;
};
const EX_DISCOUNT_UNIT = (discount)=>{
    let value = ``;
    switch(discount.discount_unit){
        case "PERCENT":
            return value = `${discount.discount_value}%`;
        case "PRICE":
            return value = `${formatPrice(discount.discount_value)}đ`;
        default:
            break;
    }
    return value;
};
const EX_DISCOUNT_TYPE = (discount)=>{
    const { discount_type  } = discount;
    let text = "";
    let TYPE = "";
    const value = EX_DISCOUNT_UNIT(discount);
    switch(discount_type){
        case DISCOUNT_TYPE.FINAL_PRICE.key:
            return text = DISCOUNT_TYPE.FINAL_PRICE.text;
        case DISCOUNT_TYPE.SUB_TOTAL.key:
            return text = `Giảm ${value} trên tổng đơn ${discount.maximum_discount_value ? `(tối đa ${formatPrice(discount.maximum_discount_value)})` : ""}`;
        case DISCOUNT_TYPE.PRODUCT.key:
            return text = `Giảm ${value} trên sản phẩm, dịch vụ `;
        default:
            break;
    }
    return text;
};
const EX_ORDER_VALUE = (discount)=>{
    let title = "";
};


/***/ })

};
;