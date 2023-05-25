(() => {
var exports = {};
exports.id = 6050;
exports.ids = [6050];
exports.modules = {

/***/ 4481:
/***/ ((module) => {

// Exports
module.exports = {
	"item_detail": "detail_item_detail__pBa1t",
	"item_detail__head": "detail_item_detail__head__A8e2w",
	"service_detail_tab": "detail_service_detail_tab__DFGEA",
	"service_detail_tabitem": "detail_service_detail_tabitem__h4AaQ",
	"detail_description": "detail_detail_description__SZK47",
	"service_detail_description": "detail_service_detail_description__IukqE",
	"seemore-btn": "detail_seemore-btn__lsIN7",
	"less_more": "detail_less_more__ZpOo6",
	"seemore_btn": "detail_seemore_btn__dXTUc",
	"item_detail__left": "detail_item_detail__left__85lca",
	"detail_left__img": "detail_detail_left__img__YGZfi",
	"detail_mb": "detail_detail_mb__fS8ac",
	"detail_mb_top": "detail_detail_mb_top__ZCYlL",
	"detail_mb_top_img": "detail_detail_mb_top_img__Y9ByN",
	"detail_mb_mid": "detail_detail_mb_mid__E2Gi5",
	"detail_mb_bot": "detail_detail_mb_bot__oYBdC",
	"detail_mb_bot_percent": "detail_detail_mb_bot_percent__Xvm4t",
	"detail_mb_bot_price": "detail_detail_mb_bot_price__dW_pl",
	"detail_mb_bot_specialPrice": "detail_detail_mb_bot_specialPrice__xZ5sA",
	"detail_mb_bot_oldPrice": "detail_detail_mb_bot_oldPrice___1PpA",
	"service_description": "detail_service_description__StQMW"
};


/***/ }),

/***/ 8653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5483);

class ComboApi {
    getByOrg_id = (values)=>{
        //organizations/4/treatment_combo?page=1&limit=12
        const url = `/organizations/${values.org_id}/treatment_combo`;
        const params = {
            page: values.page,
            limit: 15,
            "filter[is_momo_ecommerce_enable]": true,
            "include": "products|services"
        };
        return _axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(url, {
            params
        });
    };
    getComboDetail = (values)=>{
        const url = `/organizations/${values.org_id}/treatment_combo/${values.com_id}`;
        const params = {
            include: "products|services"
        };
        return _axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(url, {
            params
        });
    };
}
const comboApi = new ComboApi();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comboApi);


/***/ }),

/***/ 3834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5483);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1777);



class ServiceApi {
    getByOrgId = (values)=>{
        const url = `/organizations/${values.org_id}/services`;
        const paramsOb = {
            page: values.page || 1,
            limit: 15,
            "filter[keyword]": values.keyword,
            "filter[service_group_id]": values.cate_id,
            "filter[special]": values.special,
            "filter[special_ecommerce]": values.special_ecommerce,
            "filter[is_momo_ecommerce_enable]": values.isEnable,
            "include": "category|favorites_count",
            "append": "is_favorite|rating|bought_count"
        };
        const params = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.pickBy)(paramsOb, lodash__WEBPACK_IMPORTED_MODULE_1__.identity);
        if (values.org_id) {
            return _axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(url, (0,_authHeader__WEBPACK_IMPORTED_MODULE_2__/* .AUTH_HEADER_PARAM_GET */ .aF)(params));
        }
    };
    getDetailById = (values)=>{
        const url = `/organizations/${values.org_id}/services/${values.ser_id}`;
        const params = {
            include: "category|favorites_count",
            append: "is_favorite|rating|bought_count"
        };
        if (values.org_id && values.ser_id) {
            return _axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(url, (0,_authHeader__WEBPACK_IMPORTED_MODULE_2__/* .AUTH_HEADER_PARAM_GET */ .aF)(params));
        }
    };
}
const serviceApi = new ServiceApi();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serviceApi);


/***/ }),

/***/ 4639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ 3335:
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
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9649);
/* harmony import */ var _api_client_organizationApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2478);
/* harmony import */ var _api_client_serviceApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3834);
/* harmony import */ var _api_client_productApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4624);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7469);
/* harmony import */ var _detail_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4481);
/* harmony import */ var _detail_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_detail_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _src_utils_formatPrice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(139);
/* harmony import */ var _context_hooks_useTrans__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4177);
/* harmony import */ var _components_pages_service_product_detail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5191);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6072);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_lab__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _api_client_comboApi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8653);
/* harmony import */ var _components_pages_service_product_detail_onScrollChange__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4639);
/* harmony import */ var _context_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2275);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout__WEBPACK_IMPORTED_MODULE_2__, _components_pages_service_product_detail__WEBPACK_IMPORTED_MODULE_9__]);
([_components_layout__WEBPACK_IMPORTED_MODULE_2__, _components_pages_service_product_detail__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const ServiceProductDetail = (props)=>{
    const { org_ssg , detail_ssg  } = props;
    const trans = (0,_context_hooks_useTrans__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const is_mobile = (0,_context_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useDeviceMobile */ .oG)();
    const { response  } = (0,_context_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useSwr */ .YE)(`/organizations/${org_ssg.id}`, org_ssg.id);
    const org = {
        ...org_ssg,
        ...response
    };
    let API_URL = "";
    const params = {
        include: "category|favorites_count",
        append: "is_favorite|rating"
    };
    if (detail_ssg.type === "SERVICE") API_URL = `/organizations/${org_ssg.id}/services/${detail_ssg.id}`;
    if (detail_ssg.type === "PRODUCT") API_URL = `/organizations/${org_ssg.id}/products/${detail_ssg.id}`;
    if (detail_ssg.type === "COMBO") API_URL = `/organizations/${org_ssg.id}/treatment_combos/${detail_ssg.id}`;
    const detail = (0,_context_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useSwr */ .YE)(API_URL, org_ssg.id && detail_ssg.id, params)?.response;
    const productSalePrice = (0,_src_utils_formatPrice__WEBPACK_IMPORTED_MODULE_13__/* .formatSalePriceService */ .g)(detail?.special_price, detail?.special_price_momo);
    const DETAIL = {
        ...detail_ssg,
        ...detail,
        sale_price: productSalePrice,
        old_price: detail?.price ?? detail?.retail_price
    };
    //handle UI
    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("1");
    let tabs = [
        {
            id: "1",
            title: trans.pr.description
        },
        {
            id: "2",
            title: trans.Mer_de.feedback
        },
        {
            id: "3",
            title: trans.my_ser.business
        },
        {
            id: "4",
            title: trans.se.instructions_terms
        }, 
    ];
    let refDesc = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    let refReview = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    let refMap = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    let refPolicy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const scrollMap = refMap?.current?.offsetTop;
    const scrollDesc = refDesc?.current?.offsetTop;
    const scrollReview = refReview?.current?.offsetTop;
    const scrollPolicy = refPolicy?.current?.offsetTop;
    const { 0: readMore , 1: setReadMore  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        NOW: true,
        open: false
    });
    const handleSeemoreText = ()=>{
        setReadMore(!readMore);
    };
    // handle onclick active menu
    const handleChange = (event, value)=>{
        const top = (0,_components_pages_service_product_detail_onScrollChange__WEBPACK_IMPORTED_MODULE_14__/* .handleChangeScroll */ .r)(is_mobile, value, setValue, refDesc, refReview, refMap, refPolicy);
        window.scrollTo({
            top: top,
            behavior: "smooth"
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", ()=>(0,_components_pages_service_product_detail_onScrollChange__WEBPACK_IMPORTED_MODULE_14__/* .handleScroll */ .Y)(is_mobile, setValue, scrollReview, scrollDesc, scrollMap, scrollPolicy));
        return ()=>{
            window.removeEventListener("scroll", ()=>(0,_components_pages_service_product_detail_onScrollChange__WEBPACK_IMPORTED_MODULE_14__/* .handleScroll */ .Y)(is_mobile, setValue, scrollReview, scrollDesc, scrollMap, scrollPolicy), false);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                title: `${DETAIL.name} - ${org.name} | BeautyX`,
                description: `Trải nghiệm thanh toán, đặt hẹn và mua sản phẩm Online dịch vụ, sản phẩm ${DETAIL.name} tại ${org.name}`,
                url: "",
                image_url: DETAIL.image_url
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_service_product_detail__WEBPACK_IMPORTED_MODULE_9__/* .HeaderDetail */ .KB, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Container, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_detail_module_css__WEBPACK_IMPORTED_MODULE_15___default().item_detail),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_detail_module_css__WEBPACK_IMPORTED_MODULE_15___default().item_detail__head),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_service_product_detail__WEBPACK_IMPORTED_MODULE_9__/* .DetailLeft */ .vO, {
                                    DETAIL: DETAIL,
                                    org: org
                                }),
                                is_mobile !== true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_service_product_detail__WEBPACK_IMPORTED_MODULE_9__/* .DetailRight */ .PC, {
                                    DETAIL: DETAIL,
                                    org: org
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_detail_module_css__WEBPACK_IMPORTED_MODULE_15___default().service_detail_body),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_detail_module_css__WEBPACK_IMPORTED_MODULE_15___default().service_detail_tab),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_lab__WEBPACK_IMPORTED_MODULE_10__.TabContext, {
                                        value: value,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_10__.TabList, {
                                                onChange: handleChange,
                                                children: tabs.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Tab, {
                                                        label: item.title,
                                                        value: item.id
                                                    }, i))
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_detail_module_css__WEBPACK_IMPORTED_MODULE_15___default().service_detail_tabitem),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_10__.TabPanel, {
                                                        value: value,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            ref: refDesc,
                                                            className: (_detail_module_css__WEBPACK_IMPORTED_MODULE_15___default().service_detail_description),
                                                            children: DETAIL.type === "COMBO" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_service_product_detail__WEBPACK_IMPORTED_MODULE_9__/* .DescCombo */ .s, {
                                                                org: org,
                                                                combo: detail
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: detail?.description?.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_detail_module_css__WEBPACK_IMPORTED_MODULE_15___default().detail_description_updating),
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: (_detail_module_css__WEBPACK_IMPORTED_MODULE_15___default().detail_description),
                                                                        children: [
                                                                            trans.pr.description,
                                                                            ": ",
                                                                            trans.detail_item.updating
                                                                        ]
                                                                    })
                                                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: (_detail_module_css__WEBPACK_IMPORTED_MODULE_15___default().detail_description),
                                                                            children: [
                                                                                trans.pr.description,
                                                                                ":",
                                                                                " ",
                                                                                detail?.description?.length > 150 && readMore !== true ? detail?.description.slice(0, 150) : detail?.description,
                                                                                detail?.description?.length > 150 && readMore === false ? "..." : " "
                                                                            ]
                                                                        }),
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            style: readMore === true ? {
                                                                                display: "block",
                                                                                textAlign: "center",
                                                                                marginTop: "8px"
                                                                            } : {},
                                                                            children: detail?.description && detail?.description?.length > 150 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                onClick: ()=>handleSeemoreText(),
                                                                                children: readMore === false ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: (_detail_module_css__WEBPACK_IMPORTED_MODULE_15___default().less_more),
                                                                                    children: "Xem th\xeam >>"
                                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: (_detail_module_css__WEBPACK_IMPORTED_MODULE_15___default().less_more),
                                                                                    children: "Thu gọn ∧ "
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_10__.TabPanel, {
                                                        value: value,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            ref: refReview,
                                                            className: (_detail_module_css__WEBPACK_IMPORTED_MODULE_15___default().service_detail_comment),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_service_product_detail__WEBPACK_IMPORTED_MODULE_9__/* .DetailReview */ .Hx, {
                                                                org: org,
                                                                detail: DETAIL
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_10__.TabPanel, {
                                                        value: value,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            ref: refMap,
                                                            className: (_detail_module_css__WEBPACK_IMPORTED_MODULE_15___default().detail_org),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_service_product_detail__WEBPACK_IMPORTED_MODULE_9__/* .DetailOrg */ .lf, {
                                                                org: org
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_10__.TabPanel, {
                                                        value: value,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            ref: refPolicy,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_service_product_detail__WEBPACK_IMPORTED_MODULE_9__/* .DetailPolicy */ .gi, {})
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                DETAIL.type !== "COMBO" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_service_product_detail__WEBPACK_IMPORTED_MODULE_9__/* .Recomment */ .yi, {
                                    detail: DETAIL,
                                    org: org
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_service_product_detail__WEBPACK_IMPORTED_MODULE_9__/* .DetailBottomMB */ .JN, {
                            org: org,
                            DETAIL: DETAIL,
                            setOpen: setOpen,
                            open: open
                        })
                    ]
                })
            })
        ]
    });
};
ServiceProductDetail.Layout = _components_layout__WEBPACK_IMPORTED_MODULE_2__/* .MainLayout */ .Zn;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceProductDetail);
async function getServerSideProps(context) {
    context.res.setHeader("Cache-Control", "s-maxage=30000, stale-while-revalidate=30000");
    let resDetail;
    let type;
    const org_id = context?.query.org_id;
    const sid = context?.query.sid;
    const pid = context?.query.pid;
    const cid = context?.query.cid;
    const resOrg = await _api_client_organizationApi__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getOrgById */ .Z.getOrgById(org_id);
    const org = resOrg?.data.context;
    if (sid) {
        let res;
        try {
            res = await _api_client_serviceApi__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getDetailById */ .Z.getDetailById({
                org_id: org_id,
                ser_id: sid
            });
        } catch (error) {
            res = null;
        }
        resDetail = res?.data?.context;
        type = "SERVICE";
    } else if (pid) {
        let res1;
        try {
            res1 = await _api_client_productApi__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getDetailById */ .Z.getDetailById({
                org_id: org_id,
                id: pid
            });
        } catch (error1) {
            res1 = null;
        }
        resDetail = await res1?.data?.context;
        type = "PRODUCT";
    } else if (cid) {
        const res2 = await _api_client_comboApi__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getComboDetail */ .Z.getComboDetail({
            org_id: org_id,
            com_id: cid
        });
        resDetail = await res2?.data?.context;
        type = "COMBO";
    }
    if (!org || !resDetail) {
        return {
            redirect: {
                destination: "/error",
                permanent: false
            }
        };
    }
    return {
        props: {
            org_ssg: {
                name: org?.name,
                id: org?.id
            } ?? null,
            detail_ssg: {
                id: resDetail?.id,
                type: type,
                name: resDetail?.service_name ?? resDetail?.product_name ?? resDetail.name,
                image_url: resDetail.image_url
            } ?? null
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6072:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/lab");

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

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,7136,9649,7469,5191], () => (__webpack_exec__(3335)));
module.exports = __webpack_exports__;

})();