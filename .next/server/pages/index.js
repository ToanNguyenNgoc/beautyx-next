(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 8483:
/***/ ((module) => {

// Exports
module.exports = {
	"sectionHeadWrap": "HomeSectionTitle_sectionHeadWrap__exx05",
	"home_title": "HomeSectionTitle_home_title__c0Q5a",
	"title": "HomeSectionTitle_title__mAZQg",
	"homeSeemore": "HomeSectionTitle_homeSeemore__ISvt9"
};


/***/ }),

/***/ 8551:
/***/ ((module) => {

// Exports
module.exports = {
	"tags_cnt": "home_tags_cnt__xTlsC",
	"tag_list": "home_tag_list__526Zz",
	"tag_item": "home_tag_item___CZKK",
	"tag_item_cnt": "home_tag_item_cnt__ECwNT",
	"tag_item_img": "home_tag_item_img__28f3q",
	"item_name": "home_item_name__KczQ9",
	"bannerWrap": "home_bannerWrap__mSb6J",
	"bannerLeft": "home_bannerLeft__dCQY_",
	"bannerRight": "home_bannerRight__ZxZoz",
	"banner_right_list": "home_banner_right_list__nonpW",
	"banner_right_item": "home_banner_right_item__W0JEZ",
	"bannerBtnPrev": "home_bannerBtnPrev__pKd_3",
	"bannerBtnNext": "home_bannerBtnNext__1a2Ay",
	"province": "home_province__2QO1n",
	"provinceList": "home_provinceList__MFdjC",
	"provinceItem": "home_provinceItem__SlX9u",
	"provinceTitle": "home_provinceTitle__ns3Pl",
	"provinceTotal": "home_provinceTotal__8EJPj",
	"provinceContent": "home_provinceContent__ty3Ul",
	"tag_item_child": "home_tag_item_child__Wl5Fa",
	"homeTags": "home_homeTags__yVIYA",
	"homeTagCnt": "home_homeTagCnt__Ph9vT",
	"tagNamePar": "home_tagNamePar___akJV",
	"home_section_promo": "home_home_section_promo__UaBdt",
	"home_service_list": "home_home_service_list__0Cat3",
	"discount_cnt": "home_discount_cnt__Tmg6p",
	"home_discounts__title": "home_home_discounts__title__ynkO_",
	"homeDiscountList": "home_homeDiscountList__nZgmi",
	"home_favorite__list": "home_home_favorite__list__2Af3h",
	"bannerRightTop": "home_bannerRightTop__vcAmo",
	"bannerRightBot": "home_bannerRightBot__DMOC5",
	"homeDiscountListItem": "home_homeDiscountListItem__E0eKT",
	"homeDiscountWrap": "home_homeDiscountWrap__M19fL",
	"discountTitle": "home_discountTitle__gQJQh",
	"discountWrapPrice": "home_discountWrapPrice__nCWhC",
	"home_orgs_wrap": "home_home_orgs_wrap__4RfOF"
};


/***/ }),

/***/ 1288:
/***/ ((module) => {

// Exports
module.exports = {
	"home_page": "Home_home_page__8v6T8"
};


/***/ }),

/***/ 4898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5483);

class BannerApi {
    getAll = ()=>{
        const url = `/banners`;
        const params = {
            page: 1,
            limit: 15,
            platform: "MOMO",
            sort: "-created_at"
        };
        return _axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(url, {
            params
        });
    };
}
const bannerApi = new BannerApi();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bannerApi);


/***/ }),

/***/ 8878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5483);

// import { AUTH_HEADER_PARAM_GET } from "../utils/authHeader";
class Discounts {
    getAll = (values)=>{
        const url = `/discounts`;
        const params = {
            "page": values.page,
            "limit": values.limit ?? 30,
            "filter[platform]": "MOMO",
            "append": "user_available_purchase_count",
            "sort": "-created_at"
        };
        return _axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(url, {
            params
        });
    };
    getByOrgId = (values)=>{
        const url = `/discounts`;
        const params = {
            "page": 1,
            "limit": 30,
            "filter[platform]": "MOMO",
            "append": "user_available_purchase_count",
            "sort": "discount_value|created_at",
            "filter[organization_id]": values.org_id
        };
        return _axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(url, {
            params
        });
    };
    getById = (values)=>{
        const url = `/discounts/${values.id}`;
        const params = {
            "filter[organization_id]": values.org_id,
            "append": "user_available_purchase_count"
        };
    // return axiosClient.get(url, AUTH_HEADER_PARAM_GET(params))
    };
}
const discountApi = new Discounts();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (discountApi);


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

/***/ 4397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HomeSectionTitle_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8483);
/* harmony import */ var _HomeSectionTitle_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_HomeSectionTitle_module_css__WEBPACK_IMPORTED_MODULE_3__);




function HomeSectionHead(props) {
    const { title , seemore  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/homepage",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_HomeSectionTitle_module_css__WEBPACK_IMPORTED_MODULE_3___default().sectionHeadWrap),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_HomeSectionTitle_module_css__WEBPACK_IMPORTED_MODULE_3___default().home_title),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_HomeSectionTitle_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
                        children: title
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_HomeSectionTitle_module_css__WEBPACK_IMPORTED_MODULE_3___default().homeSeemore),
                    children: seemore ? seemore : null
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeSectionHead);


/***/ }),

/***/ 6711:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ HomeBanners)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8551);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_home_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2275);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9649);
/* harmony import */ var _src_constants_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6174);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout__WEBPACK_IMPORTED_MODULE_5__]);
_components_layout__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable jsx-a11y/anchor-is-valid */ 







const PrevButton = (props)=>{
    const is_mb = (0,_context_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useDeviceMobile */ .oG)();
    const { onClick  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: onClick,
        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().bannerBtnPrev),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__/* .ImageComponent */ .cu, {
            src: _src_constants_icon__WEBPACK_IMPORTED_MODULE_6__/* ["default"].chevronRight */ .Z.chevronRight,
            alt: "",
            layout: "fixed",
            type: "ICON",
            width: is_mb === true ? 24 : 32,
            height: is_mb === true ? 24 : 32
        })
    });
};
const NextButton = (props)=>{
    const is_mb = (0,_context_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useDeviceMobile */ .oG)();
    const { onClick  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: onClick,
        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().bannerBtnNext),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__/* .ImageComponent */ .cu, {
            src: _src_constants_icon__WEBPACK_IMPORTED_MODULE_6__/* ["default"].chevronRight */ .Z.chevronRight,
            alt: "",
            layout: "fixed",
            type: "ICON",
            width: is_mb === true ? 24 : 32,
            height: is_mb === true ? 24 : 32
        })
    });
};
function HomeBanners(props) {
    const { banners  } = props;
    const { 0: chooseBanner , 1: setChooseBanner  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    // const { data } = useFetch("https://beautyx.vercel.app/v1/banners_campaign")
    const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    // const bannersCampaign: IBannerCampaign[] = data?.data ?? [];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        //autoplay: true,
        nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextButton, {}),
        prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PrevButton, {}),
        swipe: true,
        autoplaySpeed: 2000,
        //fade: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    swipe: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    swipe: true,
                    dots: true,
                    speed: 500
                }
            }, 
        ],
        appendDots: (dots)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "banner-dot",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    children: dots
                })
            }),
        afterChange: function(index) {
            setChooseBanner(banners[index]);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().banner),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().bannerWrap),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().bannerLeft),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                        ...settings,
                        children: banners?.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().bannerLeftItem),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__/* .ImageComponent */ .cu, {
                                    src: item?.imageURL,
                                    alt: "",
                                    layout: "responsive",
                                    type: "IMG",
                                    width: 840,
                                    height: 350
                                })
                            }, index + item.url))
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().bannerRight),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().banner_right_list)
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4005:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ HomeDiscounts)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_discount_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7171);
/* harmony import */ var _context_type_discount_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9178);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8551);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_discount_item__WEBPACK_IMPORTED_MODULE_1__]);
_components_discount_item__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable jsx-a11y/anchor-is-valid */ 






function HomeDiscounts(props) {
    const { discounts  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().discount_cnt),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().home_discounts__title),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "Khuyến m\xe3i HOT"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: "/giam-gia",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                children: [
                                    "Xem th\xeam ",
                                    ">>"
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().homeDiscountWrap),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().homeDiscountList),
                        children: discounts.filter((i)=>i.items.length > 0 && (i.discount_type === _context_type_discount_type__WEBPACK_IMPORTED_MODULE_2__/* .DISCOUNT_TYPE.PRODUCT.key */ .u.PRODUCT.key || i.discount_type === _context_type_discount_type__WEBPACK_IMPORTED_MODULE_2__/* .DISCOUNT_TYPE.FINAL_PRICE.key */ .u.FINAL_PRICE.key)).slice(0, 12).map((discount, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: discount.items.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().homeDiscountListItem),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_discount_item__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            discount: discount,
                                            item: item
                                        })
                                    }, i))
                            }, index))
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ HomeFooterTags)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8551);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6072);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_lab__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_homeSectionHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4397);
/* harmony import */ var _context_direct_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9919);
/* eslint-disable jsx-a11y/anchor-is-valid */ 






function HomeFooterTags(props) {
    const { tags  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().homeTags),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_homeSectionHead__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: "Danh mục l\xe0m đẹp"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().homeTagCnt),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_2__.Masonry, {
                    columns: 4,
                    spacing: 2,
                    children: tags?.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().tagItem),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: (0,_context_direct_url__WEBPACK_IMPORTED_MODULE_6__/* .directUrlProSerResult */ .Wc)("SERVICE", tag.name, tag.id),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().tagNamePar),
                                        children: tag.name
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: (_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().tagItemChild),
                                    children: tag.children?.filter((i)=>i.group = "SERVICE").map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: (0,_context_direct_url__WEBPACK_IMPORTED_MODULE_6__/* .directUrlProSerResult */ .Wc)("SERVICE", item.name, item.id),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    onClick: ()=>console.log(item.id),
                                                    className: (_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().tag_item_child),
                                                    children: item.name
                                                })
                                            })
                                        }, i))
                                })
                            ]
                        }, index))
                })
            })
        ]
    });
}


/***/ }),

/***/ 1881:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ HomeOrgsFavorite)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_homeSectionHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4397);
/* harmony import */ var _components_org_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6810);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8551);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_org_item__WEBPACK_IMPORTED_MODULE_2__]);
_components_org_item__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function HomeOrgsFavorite(props) {
    const { orgs  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().province),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_homeSectionHead__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                title: "Địa điểm được y\xeau th\xedch"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().home_orgs_wrap),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: (_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().home_favorite__list),
                    children: orgs.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: (_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().home_favorite__item),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_org_item__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                org: item
                            })
                        }, index))
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1530:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export HomePromo */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_homeSectionHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4397);
/* harmony import */ var _components_ServiceProductPromoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5517);
/* harmony import */ var _context_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2275);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ServiceProductPromoItem__WEBPACK_IMPORTED_MODULE_2__]);
_components_ServiceProductPromoItem__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function HomePromo(props) {
    const trans = useTrans();
    const { services  } = props;
    return /*#__PURE__*/ _jsxs("div", {
        className: style.home_section_promo,
        children: [
            /*#__PURE__*/ _jsx(HomeSectionHead, {
                title: trans.home_2.top_deal
            }),
            /*#__PURE__*/ _jsx("ul", {
                className: style.home_service_list,
                children: services?.map((i, index)=>/*#__PURE__*/ _jsx("li", {
                        children: /*#__PURE__*/ _jsx(ServicePromoItem, {
                            item: i
                        })
                    }, index))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 251:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ Province)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8551);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_home_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2275);
/* harmony import */ var _components_homeSectionHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4397);
/* harmony import */ var _components_linear_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7379);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9649);
/* harmony import */ var _src_utils_format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6767);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout__WEBPACK_IMPORTED_MODULE_6__]);
_components_layout__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function Province(props) {
    const { province  } = props;
    const trans = (0,_context_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useTrans */ .IA)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().province),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_homeSectionHead__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                seemore: "Xem th\xeam >>",
                title: trans.home_2.places_you_are_interested_in
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().provinceList),
                children: province.slice(0, 6).map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProvinceItem, {
                        item: item
                    }, index))
            })
        ]
    });
}
const ProvinceItem = ({ item  })=>{
    const trans = (0,_context_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useTrans */ .IA)();
    const [load, setLoad] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const onLoad = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(()=>{
        setLoad(true);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            load && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_linear_progress__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: `/ds-cua-hang?p_code=${item.province_code}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    onClick: onLoad,
                    className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().provinceItem),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout__WEBPACK_IMPORTED_MODULE_6__/* .ImageComponent */ .cu, {
                            src: `${item.media[1]?.original_url}`,
                            alt: "",
                            layout: "fill",
                            type: "IMG"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().provinceContent),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().provinceTitle),
                                    children: item?.name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().provinceTotal),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            (0,_src_utils_format__WEBPACK_IMPORTED_MODULE_7__/* .formatRoundOrgCount */ .cl)(item.organizations_count + item.branches_count),
                                            " ",
                                            trans.home_2.beauty_places
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ HomeTags)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8551);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_home_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2275);
/* harmony import */ var _src_constants_img__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7652);
/* harmony import */ var _src_constants_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6174);
/* eslint-disable jsx-a11y/anchor-is-valid */ 








function HomeTags() {
    const trans = (0,_context_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useTrans */ .IA)();
    const tags_data = [
        // { id: 9, title: t("home_2.places_near_you"), text: t("home_2.places_near_you"), img: icon.distance },
        {
            id: 4,
            title: "Spa",
            text: "Spa",
            img: _src_constants_img__WEBPACK_IMPORTED_MODULE_6__/* .imgTag.spa */ .U1.spa
        },
        {
            id: 3,
            title: "Salon",
            text: "Salon",
            img: _src_constants_img__WEBPACK_IMPORTED_MODULE_6__/* .imgTag.hairSalon */ .U1.hairSalon
        },
        {
            id: 1,
            title: "Nail",
            text: "Nail",
            img: _src_constants_img__WEBPACK_IMPORTED_MODULE_6__/* .imgTag.nails */ .U1.nails
        },
        {
            id: 6,
            title: "clinic",
            text: "clinic",
            img: _src_constants_img__WEBPACK_IMPORTED_MODULE_6__/* .imgTag.clinic */ .U1.clinic
        },
        {
            id: 8,
            title: "Massage",
            text: "Massage",
            img: _src_constants_img__WEBPACK_IMPORTED_MODULE_6__/* .imgTag.massage */ .U1.massage
        },
        {
            id: 5,
            title: "Thẩm mỹ viện",
            text: trans.home_2.beauty_salon,
            img: _src_constants_img__WEBPACK_IMPORTED_MODULE_6__/* .imgTag.skinCare */ .U1.skinCare
        },
        {
            id: 2,
            title: "nha khoa",
            text: trans.home_2.dentistry,
            img: _src_constants_img__WEBPACK_IMPORTED_MODULE_6__/* .imgTag.nhaKhoa */ .U1.nhaKhoa
        }, 
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Container, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().tags_cnt),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().tag_list),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().tag_item),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/ban-do",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().tag_item_cnt),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().tag_item_img),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                src: _src_constants_icon__WEBPACK_IMPORTED_MODULE_7__/* ["default"].locationCate */ .Z.locationCate,
                                                alt: "",
                                                layout: "responsive"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().item_name),
                                            children: "Gần bạn"
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    tags_data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().tag_item),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: `/ds-cua-hang?tag_name=${item.title}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().tag_item_cnt),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().tag_item_img),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    src: item.img,
                                                    alt: item.title,
                                                    layout: "responsive"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().item_name),
                                                children: item.text
                                            })
                                        ]
                                    })
                                })
                            })
                        }, item.id))
                ]
            })
        })
    });
}


/***/ }),

/***/ 4076:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SV": () => (/* reexport safe */ _components_HomeBanners__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   "Ul": () => (/* reexport safe */ _components_HomeDiscounts__WEBPACK_IMPORTED_MODULE_1__.U),
/* harmony export */   "Vk": () => (/* reexport safe */ _components_HomeFooterTags__WEBPACK_IMPORTED_MODULE_2__.V),
/* harmony export */   "a$": () => (/* reexport safe */ _components_HomeProvinces__WEBPACK_IMPORTED_MODULE_5__.a),
/* harmony export */   "bg": () => (/* reexport safe */ _components_HomeTags__WEBPACK_IMPORTED_MODULE_6__.b),
/* harmony export */   "y1": () => (/* reexport safe */ _components_HomeOrgsFavorite__WEBPACK_IMPORTED_MODULE_3__.y)
/* harmony export */ });
/* harmony import */ var _components_HomeBanners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6711);
/* harmony import */ var _components_HomeDiscounts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4005);
/* harmony import */ var _components_HomeFooterTags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9721);
/* harmony import */ var _components_HomeOrgsFavorite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1881);
/* harmony import */ var _components_HomePromo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1530);
/* harmony import */ var _components_HomeProvinces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(251);
/* harmony import */ var _components_HomeTags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6310);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_HomeBanners__WEBPACK_IMPORTED_MODULE_0__, _components_HomeDiscounts__WEBPACK_IMPORTED_MODULE_1__, _components_HomeOrgsFavorite__WEBPACK_IMPORTED_MODULE_3__, _components_HomePromo__WEBPACK_IMPORTED_MODULE_4__, _components_HomeProvinces__WEBPACK_IMPORTED_MODULE_5__]);
([_components_HomeBanners__WEBPACK_IMPORTED_MODULE_0__, _components_HomeDiscounts__WEBPACK_IMPORTED_MODULE_1__, _components_HomeOrgsFavorite__WEBPACK_IMPORTED_MODULE_3__, _components_HomePromo__WEBPACK_IMPORTED_MODULE_4__, _components_HomeProvinces__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ DISCOUNT_TYPE)
/* harmony export */ });
const DISCOUNT_TYPE = {
    PRODUCT: {
        key: "PRODUCT",
        text: "Giảm từng sản phẩm, dịch vụ"
    },
    SUB_TOTAL: {
        key: "SUB_TOTAL",
        text: "Giảm tr\xean tổng đơn"
    },
    FINAL_PRICE: {
        key: "FINAL_PRICE",
        text: "Gi\xe1 thanh to\xe1n"
    }
};


/***/ }),

/***/ 5075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_pages_home_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4076);
/* harmony import */ var _api_client_provinceApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3690);
/* harmony import */ var _api_client_tagApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7170);
/* harmony import */ var _api_client_bannerApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4898);
/* harmony import */ var _api_client_discountApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8878);
/* harmony import */ var _api_client_organizationApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2478);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9649);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1288);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_pages_home_index__WEBPACK_IMPORTED_MODULE_4__, _components_layout__WEBPACK_IMPORTED_MODULE_10__]);
([_components_pages_home_index__WEBPACK_IMPORTED_MODULE_4__, _components_layout__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Home = (props)=>{
    const { services , province , tags , banners , orgs , discounts  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "BeautyX - Đặt lịch l\xe0m hẹn Online"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().home_page),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home_index__WEBPACK_IMPORTED_MODULE_4__/* .HomeBanners */ .SV, {
                                banners: banners
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home_index__WEBPACK_IMPORTED_MODULE_4__/* .HomeTags */ .bg, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home_index__WEBPACK_IMPORTED_MODULE_4__/* .HomeDiscounts */ .Ul, {
                        discounts: discounts
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home_index__WEBPACK_IMPORTED_MODULE_4__/* .HomeOrgsFavorite */ .y1, {
                                orgs: orgs
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home_index__WEBPACK_IMPORTED_MODULE_4__/* .Province */ .a$, {
                                province: province
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home_index__WEBPACK_IMPORTED_MODULE_4__/* .HomeFooterTags */ .Vk, {
                                tags: tags
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
Home.Layout = _components_layout__WEBPACK_IMPORTED_MODULE_10__/* .MainLayout */ .Zn;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
const getStaticProps = async (context)=>{
    // const res = await servicePromoApi.getServicesPromo({
    // 	page: 1,
    // 	limit: 18,
    // 	sort: '-discount_percent',
    // })
    // const hits: any[] = await res.data.data.hits
    const resProvinces = await _api_client_provinceApi__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getAll */ .Z.getAll();
    const resTags = await _api_client_tagApi__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getAll */ .Z.getAll({
        include: "children"
    });
    const resBanners = await _api_client_bannerApi__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getAll */ .Z.getAll();
    const resOrgs = await _api_client_organizationApi__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getAll */ .Z.getAll({
        sort: "-favorites_count"
    });
    const resDiscounts = await _api_client_discountApi__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getAll */ .Z.getAll({
        page: 1,
        limit: 12
    });
    const provinces = await resProvinces.data.context.data;
    const tags = await resTags.data.context.data;
    const banners = await resBanners.data.context.data;
    const orgs = await resOrgs.data.context.data;
    const discounts = await resDiscounts.data.context.data;
    return {
        props: {
            services: [],
            province: provinces.slice(0, 6),
            tags: tags,
            banners: banners,
            orgs: orgs,
            discounts: discounts
        },
        revalidate: 3600 * 24
    };
};

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
var __webpack_exports__ = __webpack_require__.X(0, [676,7136,9649,7171,6810,7170], () => (__webpack_exec__(5075)));
module.exports = __webpack_exports__;

})();