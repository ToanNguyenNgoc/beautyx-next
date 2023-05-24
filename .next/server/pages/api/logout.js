"use strict";
(() => {
var exports = {};
exports.id = 7030;
exports.ids = [7030];
exports.modules = {

/***/ 3272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "cookies"
const external_cookies_namespaceObject = require("cookies");
var external_cookies_default = /*#__PURE__*/__webpack_require__.n(external_cookies_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/logout.ts
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// type Data = {
// 	message: string
// }
const config = {
    api: {
        bodyParser: false
    }
};
function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(404).json({
            message: "method not supported"
        });
    }
    const cookies = new (external_cookies_default())(req, res);
    cookies.set("access_token");
    res.status(200).json({
        message: "logout successfully"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3272));
module.exports = __webpack_exports__;

})();