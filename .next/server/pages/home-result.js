(() => {
var exports = {};
exports.id = 3100;
exports.ids = [3100];
exports.modules = {

/***/ 6042:
/***/ ((module) => {

// Exports
module.exports = {
	"filter_cnt": "home-result_filter_cnt___bNXO",
	"filter_section": "home-result_filter_section__6AcUE"
};


/***/ }),

/***/ 6821:
/***/ ((module) => {

// Exports
module.exports = {
	"result_cont": "home-result_result_cont__f25FX",
	"result_cont_head": "home-result_result_cont_head__Ca4GB",
	"result_cont_body": "home-result_result_cont_body__UzAf4",
	"result_cont_body_left": "home-result_result_cont_body_left__Ur4o6",
	"result_cont_body_right": "home-result_result_cont_body_right__6AAv4",
	"list_org": "home-result_list_org__yScpK",
	"result_cont_head_btn": "home-result_result_cont_head_btn__88fJ8",
	"result_cont_filter": "home-result_result_cont_filter__Rt0jx"
};


/***/ }),

/***/ 3690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5483);

class Provinces {
    getAll = ()=>{
        const url = `/provinces`;
        const params = {
            type: "PROVINCE",
            sort: "-organizations_count|branches_count",
            include: "media"
        };
        return _axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(url, {
            params
        });
    };
    //get list district by province code
    getDistricts = (province_code)=>{
        const url = `provinces/${province_code}/districts`;
        return _axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(url);
    };
    //get list ward by district code 
    getWards = (district_code)=>{
        const url = `districts/${district_code}/wards`;
        if (district_code) {
            return _axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(url);
        }
    };
}
const provincesApi = new Provinces();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (provincesApi);


/***/ }),

/***/ 415:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ OrgFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_result_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6042);
/* harmony import */ var _home_result_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_result_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9649);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout__WEBPACK_IMPORTED_MODULE_4__]);
_layout__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function OrgFilter() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: params , 1: setParams  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        tag_name: `${router.query.tag_name ?? ""}`,
        p_code: router.query.p_code,
        min_price: router.query.min_price,
        max_price: router.query.max_price,
        sort: router.query.sort
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        router.replace({
            pathname: "/ds-cua-hang",
            query: (0,lodash__WEBPACK_IMPORTED_MODULE_3__.pickBy)(params, lodash__WEBPACK_IMPORTED_MODULE_3__.identity)
        });
    }, [
        params
    ]);
    const tagArr = params.tag_name !== "" ? params.tag_name.split("|") : [];
    const onTagItem = (name)=>{
        setParams({
            ...params,
            tag_name: tagArr.includes(name) ? tagArr.filter((i)=>i !== name).join("|") : [
                ...tagArr,
                name
            ].join("|")
        });
    };
    const onSetProvinceParams = (province_code)=>{
        setParams({
            ...params,
            p_code: `${province_code}`
        });
    };
    const onSetPriceParams = (min, max)=>{
        // console.log(min, max)
        setParams({
            ...params,
            min_price: min,
            max_price: max
        });
    };
    const onSetSortParams = (sort)=>{
        setParams({
            ...params,
            sort: sort
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_home_result_module_css__WEBPACK_IMPORTED_MODULE_5___default().filter_cnt),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_home_result_module_css__WEBPACK_IMPORTED_MODULE_5___default().filter_section),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_4__/* .FilterTags */ .WH, {
                    onChangeTagItem: onTagItem,
                    tagArr: tagArr
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_home_result_module_css__WEBPACK_IMPORTED_MODULE_5___default().filter_section),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_4__/* .FilterProvinces */ .f$, {
                    onChangeProvince: onSetProvinceParams,
                    province_code: params.p_code
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_home_result_module_css__WEBPACK_IMPORTED_MODULE_5___default().filter_section),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_4__/* .FilterPriority */ .sR, {
                    onChangeSort: onSetSortParams,
                    value: `${params.sort}`
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_home_result_module_css__WEBPACK_IMPORTED_MODULE_5___default().filter_section),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_4__/* .FilterPrices */ .Bb, {
                    min_price: params.min_price,
                    max_price: params.max_price,
                    onChangePrice: onSetPriceParams
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2475:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* reexport safe */ _OrgFilter__WEBPACK_IMPORTED_MODULE_0__.R)
/* harmony export */ });
/* harmony import */ var _OrgFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(415);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_OrgFilter__WEBPACK_IMPORTED_MODULE_0__]);
_OrgFilter__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8589:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9649);
/* harmony import */ var _api_client_provinceApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3690);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7469);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2275);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_org_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6810);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4336);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6776);
/* harmony import */ var _components_pages_home_result__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2475);
/* harmony import */ var _home_result_module_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6821);
/* harmony import */ var _home_result_module_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_home_result_module_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _src_utils_useDeviceMobile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(943);
/* harmony import */ var _src_constants_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6174);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout__WEBPACK_IMPORTED_MODULE_3__, _components_org_item__WEBPACK_IMPORTED_MODULE_9__, _components_pages_home_result__WEBPACK_IMPORTED_MODULE_12__]);
([_components_layout__WEBPACK_IMPORTED_MODULE_3__, _components_org_item__WEBPACK_IMPORTED_MODULE_9__, _components_pages_home_result__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const HomeResult = (props)=>{
    const { title_location , title_tag , desc  } = props;
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { latLng  } = (0,_context_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useCoordinates */ .Ig)();
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const IS_MB = (0,_src_utils_useDeviceMobile__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)();
    const resultParamsOrgsOb = {
        limit: 15,
        "filter[tags]": query.tag_name,
        "filter[min_price]": query.min_price,
        "filter[max_price]": query.max_price,
        "filter[location]": query.sort === "location" ? latLng : "",
        "filter[province_code]": query.p_code,
        "sort": query.sort !== "location" ? query.sort : null,
        "include": "tags|province|district|ward|branches|favorites|favorites_count"
    };
    const resultParamsOrgs = (0,lodash__WEBPACK_IMPORTED_MODULE_6__.pickBy)(resultParamsOrgsOb, lodash__WEBPACK_IMPORTED_MODULE_6__.identity);
    const { resData , onLoadMore , totalItem  } = (0,_context_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useSwrInfinite */ .H9)("/organizations", resultParamsOrgs);
    const onViewMore = ()=>{
        if (resData.length >= 15 && resData.length < totalItem) {
            onLoadMore();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: `${title_location} ${title_tag}`,
                description: desc,
                url: ""
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_8__.Container, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_home_result_module_css__WEBPACK_IMPORTED_MODULE_17___default().result_cont_head),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: (_home_result_module_css__WEBPACK_IMPORTED_MODULE_17___default().result_cont_head_btn),
                                onClick: ()=>setOpen(true),
                                children: [
                                    "Bộ lọc",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_16___default()), {
                                        src: _src_constants_icon__WEBPACK_IMPORTED_MODULE_15__/* ["default"].filter */ .Z.filter,
                                        layout: "fixed",
                                        alt: "icon",
                                        width: 17,
                                        height: 17
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DrawerFilter, {
                                open: open,
                                setOpen: setOpen
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_home_result_module_css__WEBPACK_IMPORTED_MODULE_17___default().result_cont_body),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_home_result_module_css__WEBPACK_IMPORTED_MODULE_17___default().result_cont_body_left),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home_result__WEBPACK_IMPORTED_MODULE_12__/* .OrgFilter */ .R, {})
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_home_result_module_css__WEBPACK_IMPORTED_MODULE_17___default().result_cont_body_right),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        dataLength: resData.length,
                                        hasMore: true,
                                        loader: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                                        next: onViewMore,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: (_home_result_module_css__WEBPACK_IMPORTED_MODULE_17___default().list_org),
                                            children: resData.map((org, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_org_item__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                        org: org
                                                    })
                                                }, index))
                                        })
                                    }),
                                    resData.length < totalItem && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_loading__WEBPACK_IMPORTED_MODULE_11__/* .LoadingGrid */ .Dl, {
                                        grid: IS_MB && 2
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeResult);
const DrawerFilter = ({ open , setOpen  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_13__.Drawer, {
        open: open,
        onClose: ()=>setOpen(false),
        anchor: "bottom",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_home_result_module_css__WEBPACK_IMPORTED_MODULE_17___default().result_cont_filter),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home_result__WEBPACK_IMPORTED_MODULE_12__/* .OrgFilter */ .R, {})
        })
    });
};
HomeResult.Layout = _components_layout__WEBPACK_IMPORTED_MODULE_3__/* .MainLayout */ .Zn;
async function getServerSideProps(context) {
    context.res.setHeader("Cache-Control", "s-maxage=3000, stale-while-revalidate=3000");
    const p_code = parseInt(context.query.p_code.toString());
    let title_location = "";
    let title_tag = "";
    let desc = "";
    if (context.query.p_code) {
        const res = await _api_client_provinceApi__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getAll */ .Z.getAll();
        const list_province = await res.data.context.data;
        const name = list_province.find((i)=>i.province_code === p_code).name;
        title_location = `Địa điểm làm đẹp lại ${name} | BeautyX`;
        desc = `Khám phám địa điểm làm đẹp tại ${name}`;
    }
    if (context.query.tag_name) {
        title_tag = `${context.query.tag_name} | BeautyX`;
        desc = `BeautyX - Nền tảng giúp bạn tìm kiếm ${context.query.tag_name} phù hợp với nhu cầu làm đẹp. Đặt lịch dễ dàng, thanh toán nhanh chóng với hơn 5000 địa điểm làm đẹp trên toàn quốc`;
    }
    return {
        props: {
            title_location: title_location,
            title_tag: title_tag,
            desc: desc
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);


function useDeviceMobile() {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const fullScreen = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_0___default()(theme.breakpoints.down(1023));
    return fullScreen;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDeviceMobile);


/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 19:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ 5545:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/LinearProgress");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 7986:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 2296:
/***/ ((module) => {

"use strict";
module.exports = require("formik");

/***/ }),

/***/ 6517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 808:
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ 9103:
/***/ ((module) => {

"use strict";
module.exports = require("query-string");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4336:
/***/ ((module) => {

"use strict";
module.exports = require("react-infinite-scroll-component");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 8096:
/***/ ((module) => {

"use strict";
module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 549:
/***/ ((module) => {

"use strict";
module.exports = require("swr");

/***/ }),

/***/ 5609:
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ }),

/***/ 3745:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,7136,9649,7469,6776,6810], () => (__webpack_exec__(8589)));
module.exports = __webpack_exports__;

})();