"use strict";
(() => {
var exports = {};
exports.id = 8922;
exports.ids = [8922];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 2319:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const mongoose = __webpack_require__(1185);
const SpecialItemSchema = new mongoose.Schema({
    id: String,
    item_id: String,
    type: String,
    name: String,
    image_url: String,
    organization_id: String,
    special_price: Number,
    price: Number
});
module.exports = mongoose.model.SpecialItem || mongoose.model("SpecialItem", SpecialItemSchema);


/***/ }),

/***/ 6136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _node_js_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5790);
/* harmony import */ var _node_js_models_special_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2319);
/* harmony import */ var _node_js_models_special_item_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_js_models_special_item_model__WEBPACK_IMPORTED_MODULE_1__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


(0,_node_js_database__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
async function handler(req, res) {
    const { query: { id  } , method  } = req;
    switch(method){
        case "GET":
            try {
                const response = await _node_js_models_special_item_model__WEBPACK_IMPORTED_MODULE_1___default().findById(id);
                if (!response) {
                    return res.status(400).json({
                        success: false
                    });
                }
                res.status(200).json({
                    success: true,
                    data: response
                });
            } catch (error) {
                res.status(400).json({
                    success: false
                });
            }
            break;
        case "PUT":
            res.status(400).json({
                success: false,
                message: "You can use method 'PUT' "
            });
            break;
        case "DELETE":
            res.status(400).json({
                success: false,
                message: "You can use method 'DELETE' "
            });
            break;
        default:
            res.status(400).json({
                success: false
            });
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
var __webpack_exports__ = __webpack_require__.X(0, [1210], () => (__webpack_exec__(6136)));
module.exports = __webpack_exports__;

})();