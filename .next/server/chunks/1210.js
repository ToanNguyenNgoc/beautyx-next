"use strict";
exports.id = 1210;
exports.ids = [1210];
exports.modules = {

/***/ 5790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_role_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9665);
/* harmony import */ var _models_role_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_role_model__WEBPACK_IMPORTED_MODULE_1__);


const connection = {};
const URL = `${"mongodb+srv://toan06011998:toan06011998@cluster0.5jgfuoj.mongodb.net/?retryWrites=true&w=majority"}`;
async function dbConnect() {
    if (connection.isConnected) {
        return true;
    }
    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    connection.isConnected = db.connections[0].readyState;
}
mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Successfully connect to MongoDB.");
    initial();
}).catch((err)=>{
    console.error("Connection error", err);
    process.exit();
});
function initial() {
    _models_role_model__WEBPACK_IMPORTED_MODULE_1___default().estimatedDocumentCount((err, count)=>{
        if (!err && count === 0) {
            new (_models_role_model__WEBPACK_IMPORTED_MODULE_1___default())({
                name: "user"
            }).save((err)=>{
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'user' to roles collection");
            });
            new (_models_role_model__WEBPACK_IMPORTED_MODULE_1___default())({
                name: "moderator"
            }).save((err)=>{
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'moderator' to roles collection");
            });
            new (_models_role_model__WEBPACK_IMPORTED_MODULE_1___default())({
                name: "admin"
            }).save((err)=>{
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'admin' to roles collection");
            });
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);


/***/ }),

/***/ 9665:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const mongoose = __webpack_require__(1185);
const Role = mongoose.model("Role", new mongoose.Schema({
    name: String
}));
module.exports = Role;


/***/ })

};
;