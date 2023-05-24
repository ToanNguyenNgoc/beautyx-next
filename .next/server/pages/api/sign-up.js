"use strict";
(() => {
var exports = {};
exports.id = 3936;
exports.ids = [3936];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 3077:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const mongoose = __webpack_require__(1185);
const User = mongoose.model("User", new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }, 
    ]
}));
module.exports = User;


/***/ }),

/***/ 1036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handle)
/* harmony export */ });
/* harmony import */ var _node_js_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5790);
/* harmony import */ var _node_js_models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3077);
/* harmony import */ var _node_js_models_user_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_js_models_user_model__WEBPACK_IMPORTED_MODULE_1__);


(0,_node_js_database__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
async function handle(req, res) {
    const { method  } = req;
    switch(method){
        case "GET":
            try {
                const response = await _node_js_models_user_model__WEBPACK_IMPORTED_MODULE_1___default().find({});
                res.status(200).json({
                    status: true,
                    data: response
                });
            } catch (error) {
                res.status(404).json({
                    status: false,
                    data: []
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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1210], () => (__webpack_exec__(1036)));
module.exports = __webpack_exports__;

})();