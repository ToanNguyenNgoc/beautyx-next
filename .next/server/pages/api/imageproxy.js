"use strict";
(() => {
var exports = {};
exports.id = 5081;
exports.ids = [5081];
exports.modules = {

/***/ 5745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    const url = decodeURIComponent(req.query.url);
    const result = await fetch(url);
    const body = await result.body;
    body.pipe(res);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5745));
module.exports = __webpack_exports__;

})();