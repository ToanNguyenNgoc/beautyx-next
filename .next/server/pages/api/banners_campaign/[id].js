"use strict";
(() => {
var exports = {};
exports.id = 5990;
exports.ids = [5990];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 9267:
/***/ ((module) => {

module.exports = require("nextjs-cors");

/***/ }),

/***/ 2427:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const mongoose = __webpack_require__(1185);
const BannersCampaign = mongoose.model("BannersCampaign", new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        index: true
    },
    title: String,
    image_url: String,
    result_type: String,
    special: Boolean,
    special_min_price: Number,
    special_max_price: Number,
    discount_percent: Number,
    created_at: {
        type: Date,
        default: Date.now
    }
}));
module.exports = BannersCampaign;


/***/ }),

/***/ 8776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _node_js_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5790);
/* harmony import */ var _node_js_models_banner_campaign_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2427);
/* harmony import */ var _node_js_models_banner_campaign_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_js_models_banner_campaign_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9267);
/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextjs_cors__WEBPACK_IMPORTED_MODULE_2__);



(0,_node_js_database__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
async function handler(req, res) {
    const { method , query: { id  }  } = req;
    await nextjs_cors__WEBPACK_IMPORTED_MODULE_2___default()(req, res, {
        methods: [
            "GET",
            "HEAD",
            "PUT",
            "PATCH",
            "POST",
            "DELETE"
        ],
        origin: [
            "https://beautyx.vn",
            "https://beautyx.vercel.app",
            "https://beautyx-spa.web.app",
            "http://localhost:3000"
        ],
        optionsSuccessStatus: 200
    });
    switch(method){
        case "GET":
            try {
                const response = await _node_js_models_banner_campaign_model__WEBPACK_IMPORTED_MODULE_1___default().find({
                    id: id
                });
                if (response[0]) {
                    res.status(200).json({
                        success: true,
                        data: response[0]
                    });
                } else {
                    res.status(404).json({
                        success: false,
                        message: `No query results for model BannersCampaign ${id}`
                    });
                }
            } catch (error) {
                res.status(404).json({
                    success: false,
                    message: `No query results for model BannersCampaign ${id}`
                });
            }
            break;
        default:
            break;
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1210], () => (__webpack_exec__(8776)));
module.exports = __webpack_exports__;

})();