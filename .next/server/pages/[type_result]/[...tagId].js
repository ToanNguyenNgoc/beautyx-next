(() => {
var exports = {};
exports.id = 3739;
exports.ids = [3739];
exports.modules = {

/***/ 3935:
/***/ ((module) => {

// Exports
module.exports = {
	"tag_left_cnt": "tag-cpn_tag_left_cnt__wDwik",
	"tag_list": "tag-cpn_tag_list__uTSIT",
	"tag_left_item": "tag-cpn_tag_left_item__fCn2R",
	"tag_right_cnt": "tag-cpn_tag_right_cnt__Znbc9",
	"tag_name_title": "tag-cpn_tag_name_title__z2h_C",
	"tag_right_sort": "tag-cpn_tag_right_sort__7eOFd",
	"sort_list": "tag-cpn_sort_list__YbUeI",
	"sort_item_cnt": "tag-cpn_sort_item_cnt__ZXwpM",
	"sort_item": "tag-cpn_sort_item__JaEbj",
	"list_cnt": "tag-cpn_list_cnt__HUjcx",
	"list_item": "tag-cpn_list_item__ONW0f"
};


/***/ }),

/***/ 1522:
/***/ ((module) => {

// Exports
module.exports = {
	"bread_crumbs": "tag_bread_crumbs__yHnFe",
	"bread_crumbs_title": "tag_bread_crumbs_title__yGFS6",
	"container": "tag_container__LCgAj",
	"container_left": "tag_container_left__5pVK6",
	"container_right": "tag_container_right__CIFlI"
};


/***/ }),

/***/ 7001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ TagLeft)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_direct_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9919);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tag_cpn_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3935);
/* harmony import */ var _tag_cpn_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tag_cpn_module_css__WEBPACK_IMPORTED_MODULE_3__);





function TagLeft(props) {
    const { tagChild , type  } = props;
    let listTag = tagChild?.children;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_tag_cpn_module_css__WEBPACK_IMPORTED_MODULE_3___default().tag_left_cnt),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: (_tag_cpn_module_css__WEBPACK_IMPORTED_MODULE_3___default().tag_list),
            children: listTag?.map((tag, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: (0,_context_direct_url__WEBPACK_IMPORTED_MODULE_4__/* .directUrlProSerResult */ .Wc)(type, tag.name, tag.id),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: (_tag_cpn_module_css__WEBPACK_IMPORTED_MODULE_3___default().tag_left_item),
                            children: tag.name
                        })
                    })
                }, index))
        })
    });
}


/***/ }),

/***/ 5436:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ TagRight)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tag_cpn_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3935);
/* harmony import */ var _tag_cpn_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tag_cpn_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ServiceProductPromoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5517);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4336);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2275);
/* harmony import */ var _context_direct_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9919);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6776);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ServiceProductPromoItem__WEBPACK_IMPORTED_MODULE_2__]);
_ServiceProductPromoItem__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function TagRight(props) {
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const type_result = query.type_result;
    const { tagChild , tagName , type  } = props;
    const servicesParams = {
        "filter[is_momo_ecommerce_enable]": true,
        "filter[min_price]": 1000,
        "filter[special_min_price]": 1000,
        "filter[keyword]": tagName,
        "sort": query.sort
    };
    let API_URL = "";
    if (type_result === "dich-vu") API_URL = "/services";
    if (type_result === "san-pham") API_URL = "/products";
    const { resData , onLoadMore , totalItem  } = (0,_context_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useSwrInfinite */ .H9)(API_URL, servicesParams);
    const sortList = [
        {
            id: 1,
            title: "Khuyến m\xe3i hot",
            sort: "-discount_percent"
        },
        {
            id: 2,
            title: "B\xe1n chạy",
            sort: "-bought_count"
        },
        {
            id: 3,
            title: "Gi\xe1 thấp",
            sort: type === "SERVICE" ? "-price" : "-retail_price"
        },
        {
            id: 4,
            title: "Gi\xe1 cao",
            sort: type === "SERVICE" ? "price" : "retail_price"
        }, 
    ];
    const onViewMore = ()=>{
        if (resData.length >= 30 && resData.length < totalItem) {
            onLoadMore();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_tag_cpn_module_css__WEBPACK_IMPORTED_MODULE_8___default().tag_right_cnt),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_tag_cpn_module_css__WEBPACK_IMPORTED_MODULE_8___default().tag_name_title),
                children: tagName
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_tag_cpn_module_css__WEBPACK_IMPORTED_MODULE_8___default().tag_right_sort),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: (_tag_cpn_module_css__WEBPACK_IMPORTED_MODULE_8___default().sort_list),
                    children: sortList.map((sort)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: (_tag_cpn_module_css__WEBPACK_IMPORTED_MODULE_8___default().sort_item_cnt),
                            style: sort.sort === query.sort ? {
                                backgroundColor: "var(--pink)",
                                color: "var(--red-cl)",
                                border: "solid 1px var(--red-cl)"
                            } : {},
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                href: `${(0,_context_direct_url__WEBPACK_IMPORTED_MODULE_9__/* .directUrlProSerResult */ .Wc)(type, tagName, tagChild?.id)}?sort=${sort.sort}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: (_tag_cpn_module_css__WEBPACK_IMPORTED_MODULE_8___default().sort_item),
                                    children: sort.title
                                })
                            })
                        }, sort.id))
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_tag_cpn_module_css__WEBPACK_IMPORTED_MODULE_8___default().list_cnt),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5___default()), {
                        dataLength: resData?.length,
                        hasMore: true,
                        loader: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                        next: onViewMore,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: (_tag_cpn_module_css__WEBPACK_IMPORTED_MODULE_8___default().list_item),
                            children: resData.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: (_tag_cpn_module_css__WEBPACK_IMPORTED_MODULE_8___default().item),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ServiceProductPromoItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        item: item
                                    })
                                }, index))
                        })
                    }),
                    resData?.length < totalItem && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_loading__WEBPACK_IMPORTED_MODULE_7__/* .LoadingGrid */ .Dl, {})
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3246:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* reexport safe */ _TagRight__WEBPACK_IMPORTED_MODULE_1__.A),
/* harmony export */   "Q": () => (/* reexport safe */ _TagLeft__WEBPACK_IMPORTED_MODULE_0__.Q)
/* harmony export */ });
/* harmony import */ var _TagLeft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7001);
/* harmony import */ var _TagRight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5436);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TagRight__WEBPACK_IMPORTED_MODULE_1__]);
_TagRight__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7086:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9649);
/* harmony import */ var _api_client_tagApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7170);
/* harmony import */ var _context_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2275);
/* harmony import */ var _context_direct_url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9919);
/* harmony import */ var _tag_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1522);
/* harmony import */ var _tag_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_tag_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7469);
/* harmony import */ var _components_pages_tag_cpn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3246);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout__WEBPACK_IMPORTED_MODULE_3__, _components_pages_tag_cpn__WEBPACK_IMPORTED_MODULE_9__]);
([_components_layout__WEBPACK_IMPORTED_MODULE_3__, _components_pages_tag_cpn__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Tag = (props)=>{
    const { tagName , type_result , tagParentId  } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { query  } = router;
    const tagChildId = query.tagId[1];
    const tagParent = (0,_context_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useSwr */ .YE)(`/tags/${tagParentId}`, tagParentId).response;
    const tagChild = (0,_context_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useSwr */ .YE)(`/tags/${tagChildId}`, tagChildId).response;
    const type = type_result === "san-pham" ? "PRODUCT" : "SERVICE";
    // if (type_result === "san-pham") type = "PRODUCT"
    // if (type_result === "dich-vu") type = "SERVICE"
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                title: `${tagName} | BeautyX`,
                description: `Dịch vụ làm đẹp Online ${tagName}`,
                url: router.asPath
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Container, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_tag_module_css__WEBPACK_IMPORTED_MODULE_10___default().bread_crumbs),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: (_tag_module_css__WEBPACK_IMPORTED_MODULE_10___default().bread_crumbs_title),
                                    children: "Trang chủ"
                                })
                            }),
                            tagParent && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                href: (0,_context_direct_url__WEBPACK_IMPORTED_MODULE_11__/* .directUrlProSerResult */ .Wc)(type, tagParent.name, tagParent.id),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: (_tag_module_css__WEBPACK_IMPORTED_MODULE_10___default().bread_crumbs_title),
                                    children: [
                                        ">  ",
                                        tagParent.name
                                    ]
                                })
                            }),
                            tagChild && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                href: (0,_context_direct_url__WEBPACK_IMPORTED_MODULE_11__/* .directUrlProSerResult */ .Wc)(type, tagChild.name, tagChild.id),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: (_tag_module_css__WEBPACK_IMPORTED_MODULE_10___default().bread_crumbs_title),
                                    children: [
                                        ">  ",
                                        tagChild.name
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_tag_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_tag_module_css__WEBPACK_IMPORTED_MODULE_10___default().container_left),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_tag_cpn__WEBPACK_IMPORTED_MODULE_9__/* .TagLeft */ .Q, {
                                    tagChild: tagChild,
                                    tagParent: tagParent,
                                    type: type
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_tag_module_css__WEBPACK_IMPORTED_MODULE_10___default().container_right),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_tag_cpn__WEBPACK_IMPORTED_MODULE_9__/* .TagRight */ .A, {
                                    tagChild: tagChild,
                                    tagParent: tagParent,
                                    tagName: tagName,
                                    type: type
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
Tag.Layout = _components_layout__WEBPACK_IMPORTED_MODULE_3__/* .MainLayout */ .Zn;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tag);
//static path
// export const getStaticPaths: GetStaticPaths = async () => {
//     return {
//         paths: [
//             { params: { type_result: "1", tagId: ["1"] } }
//         ],
//         fallback: false
//     }
// }
// export const getStaticProps: GetStaticProps<any> = async (
//     context: GetStaticPropsContext
// ) => {
//     console.log(context)
//     return {
//         props: {}
//     }
// }
// server side
async function getServerSideProps(context) {
    context.res.setHeader("Cache-Control", "s-maxage=30000, stale-while-revalidate=30000");
    const tagId = context.query.tagId[1];
    const tagName = context.query.tagId[0];
    const type_result = context.query.type_result;
    if (!tagId || !tagName || !type_result) {
        return {
            redirect: {
                destination: "/error",
                permanent: false
            }
        };
    }
    const resTagChild = await _api_client_tagApi__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getTagId */ .Z.getTagId(tagId);
    const tagChild = await resTagChild.data.context;
    const tagParentId = await tagChild.parent_id;
    // let tagParent
    // if (tagParentId) {
    //     const resTagParent = await tagsApi.getTagId(tagParentId);
    //     tagParent = await resTagParent.data.context
    // }
    return {
        props: {
            // tagChild: tagChild,
            // tagParent: tagParent ?? null,
            tagParentId: tagParentId,
            tagName: tagName,
            type_result: type_result
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,7136,9649,7469,6776,7170], () => (__webpack_exec__(7086)));
module.exports = __webpack_exports__;

})();