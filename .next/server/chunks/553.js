"use strict";
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EI": () => (/* binding */ IS_VOUCHER),
/* harmony export */   "TV": () => (/* binding */ EX_APPLY_DATE),
/* harmony export */   "f8": () => (/* binding */ EX_DISCOUNT_TYPE),
/* harmony export */   "h3": () => (/* binding */ getPriceDiscount),
/* harmony export */   "ld": () => (/* binding */ IS_FLASH_SALE)
/* harmony export */ });
/* unused harmony exports EX_DISCOUNT_UNIT, EX_ORDER_VALUE */
/* harmony import */ var _type_discount_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9178);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_utils_formatPrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(139);



const date = new Date();
const dayNow = moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("YYYY-MM-YY HH:MM:SS");
const getPriceDiscount = (item_id, discount)=>{
    let sale_price, old_price;
    const productable = discount?.items?.find((i)=>i.productable_id == item_id)?.productable;
    const price = productable?.retail_price ?? productable?.price;
    if (productable && discount.discount_type === _type_discount_type__WEBPACK_IMPORTED_MODULE_0__/* .DISCOUNT_TYPE.FINAL_PRICE.key */ .u.FINAL_PRICE.key) {
        sale_price = discount?.discount_value, old_price = price;
    }
    if (productable && discount.discount_type === _type_discount_type__WEBPACK_IMPORTED_MODULE_0__/* .DISCOUNT_TYPE.PRODUCT.key */ .u.PRODUCT.key && price) {
        sale_price = price - discount.discount_value, old_price = price;
    }
    return {
        sale_price,
        old_price
    };
};
//----------------
const IS_VOUCHER = (discounts)=>{
    const vouchers = discounts.filter((i)=>i.discount_type === _type_discount_type__WEBPACK_IMPORTED_MODULE_0__/* .DISCOUNT_TYPE.SUB_TOTAL.key */ .u.SUB_TOTAL.key || (i.discount_type === _type_discount_type__WEBPACK_IMPORTED_MODULE_0__/* .DISCOUNT_TYPE.PRODUCT.key */ .u.PRODUCT.key || i.discount_type === _type_discount_type__WEBPACK_IMPORTED_MODULE_0__/* .DISCOUNT_TYPE.FINAL_PRICE.key */ .u.FINAL_PRICE.key) && i.items_count === 0);
    return vouchers;
};
const IS_FLASH_SALE = (discounts)=>{
    const discountsFlash = discounts.filter((i)=>(i.discount_type === "PRODUCT" || i.discount_type === "FINAL_PRICE") && i.items_count > 0);
    return discountsFlash;
};
//----------------
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
            return value = `${(0,_src_utils_formatPrice__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(discount.discount_value)}đ`;
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
        case _type_discount_type__WEBPACK_IMPORTED_MODULE_0__/* .DISCOUNT_TYPE.FINAL_PRICE.key */ .u.FINAL_PRICE.key:
            return text = _type_discount_type__WEBPACK_IMPORTED_MODULE_0__/* .DISCOUNT_TYPE.FINAL_PRICE.text */ .u.FINAL_PRICE.text;
        case _type_discount_type__WEBPACK_IMPORTED_MODULE_0__/* .DISCOUNT_TYPE.SUB_TOTAL.key */ .u.SUB_TOTAL.key:
            return text = `Giảm ${value} trên tổng đơn ${discount.maximum_discount_value ? `(tối đa ${(0,_src_utils_formatPrice__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(discount.maximum_discount_value)})` : ""}`;
        case _type_discount_type__WEBPACK_IMPORTED_MODULE_0__/* .DISCOUNT_TYPE.PRODUCT.key */ .u.PRODUCT.key:
            return text = `Giảm ${value} trên sản phẩm, dịch vụ `;
        default:
            break;
    }
    return text;
};
const EX_ORDER_VALUE = (discount)=>{
    let title = "";
};


/***/ }),

/***/ 9178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ DISCOUNT_TYPE)
/* harmony export */ });
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


/***/ })

};
;