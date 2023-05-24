"use strict";
exports.id = 4639;
exports.ids = [4639];
exports.modules = {

/***/ 4639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ handleScroll),
/* harmony export */   "r": () => (/* binding */ handleChangeScroll)
/* harmony export */ });
const handleScroll = (is_mobile, setValue, scrollReview, scrollDesc, scrollMap, scrollPolicy)=>{
    const b = is_mobile ? 113 : 72;
    if (window.scrollY + b < scrollReview) {
        setValue("1");
    } else if (window.scrollY + b > scrollDesc && window.scrollY + b < scrollMap) {
        setValue("2");
    } else if (window.scrollY + b > scrollReview && window.scrollY + b < scrollPolicy) {
        setValue("3");
    } else if (window.scrollY + b > scrollMap) {
        setValue("4");
    }
};
const handleChangeScroll = (is_mobile, value, setValue, refDesc, refReview, refMap, refPolicy)=>{
    const b = is_mobile ? 113 : 72;
    let top;
    switch(value){
        case "1":
            top = refDesc?.current?.offsetTop - b;
            setValue(value);
            break;
        case "2":
            top = refReview?.current?.offsetTop - b;
            setValue(value);
            break;
        case "3":
            top = refMap?.current?.offsetTop - b;
            setValue(value);
            break;
        case "4":
            top = refPolicy?.current?.offsetTop - b;
            setValue(value);
            break;
        default:
            break;
    }
    return top;
};


/***/ })

};
;