exports.id = 6776;
exports.ids = [6776];
exports.modules = {

/***/ 5922:
/***/ ((module) => {

// Exports
module.exports = {
	"load_grid_cnt": "loading_load_grid_cnt__m98qU",
	"load_grid_cnt_org": "loading_load_grid_cnt_org__gBeyy",
	"load_grid_item": "loading_load_grid_item__5HcjZ",
	"load_grid_item_img": "loading_load_grid_item_img__UAZLX",
	"skeleton-loading": "loading_skeleton-loading__7q2Cf",
	"load_grid_item_de": "loading_load_grid_item_de__eSOzP",
	"name": "loading_name__Qlllu",
	"de_item": "loading_de_item__LQXw7",
	"item_in_org_list": "loading_item_in_org_list__s7y01",
	"item_in_org": "loading_item_in_org__1DKwS",
	"item_in_org_img": "loading_item_in_org_img__XKXMs",
	"item_in_org_de": "loading_item_in_org_de__snEzf",
	"item_in_org_de_name": "loading_item_in_org_de_name__s0InM",
	"item_in_org_de_price": "loading_item_in_org_de_price__Z58fr",
	"loading_cnt": "loading_loading_cnt__uEVbu",
	"loading_list": "loading_loading_list___y9Cz",
	"loading_item": "loading_loading_item__Acv1e",
	"grid_2_cnt": "loading_grid_2_cnt__8E7tJ",
	"grid_2_cnt_item": "loading_grid_2_cnt_item__BZvzG"
};


/***/ }),

/***/ 6776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Dl": () => (/* reexport */ LoadingGrid),
  "tS": () => (/* reexport */ LoadingGrid2),
  "DX": () => (/* reexport */ LoadingList),
  "SN": () => (/* reexport */ LoadingOrgGrid)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/loading/loading.module.css
var loading_module = __webpack_require__(5922);
var loading_module_default = /*#__PURE__*/__webpack_require__.n(loading_module);
;// CONCATENATED MODULE: ./components/loading/LoadingGrid.tsx



function LoadingGrid(props) {
    const { grid  } = props;
    let listGrid = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ];
    if (grid === 2) {
        listGrid = [
            1,
            2,
            3,
            4,
            5,
            6
        ];
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        style: grid ? {
            gridTemplateColumns: `repeat(${grid}, 1fr)`
        } : {},
        className: (loading_module_default()).load_grid_cnt_org,
        children: listGrid.map((i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                style: grid === 1 ? {
                    height: "107px"
                } : {},
                className: (loading_module_default()).load_grid_item,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (loading_module_default()).load_grid_item_img
                    }),
                    (!grid || grid > 1) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (loading_module_default()).load_grid_item_de,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (loading_module_default()).name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (loading_module_default()).de_item
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (loading_module_default()).de_item
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (loading_module_default()).de_item
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (loading_module_default()).de_item
                            })
                        ]
                    })
                ]
            }, i))
    });
}

;// CONCATENATED MODULE: ./components/loading/LoadingGrid2.tsx



function LoadingGrid2(props) {
    const { itemNumber , grid  } = props;
    const item = itemNumber ?? 10;
    const renderGridChild = ()=>{
        let GridChildElement = [];
        for(var i = 0; i < item; i++){
            const newChild = /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (loading_module_default()).grid_2_cnt_item
            }, i);
            GridChildElement.push(newChild);
        }
        return GridChildElement;
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (loading_module_default()).grid_2_cnt,
        style: grid ? {
            gridTemplateColumns: `repeat(${grid}, 1fr)`
        } : {},
        children: renderGridChild()
    });
}

;// CONCATENATED MODULE: ./components/loading/LoadingOrgGrid.tsx



function LoadingOrgGrid(props) {
    const { rowItem  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        style: rowItem ? {
            gridTemplateColumns: `repeat(${rowItem},1fr)`
        } : {
            gridTemplateColumns: "repeat(5,1fr)"
        },
        className: (loading_module_default()).item_in_org_list,
        children: [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ].map((i, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (loading_module_default()).item_in_org,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (loading_module_default()).item_in_org_img
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (loading_module_default()).item_in_org_de,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (loading_module_default()).item_in_org_de_name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (loading_module_default()).item_in_org_de_price
                                })
                            ]
                        })
                    ]
                })
            }, index))
    });
}

;// CONCATENATED MODULE: ./components/loading/LoadingList.tsx



function LoadingList() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (loading_module_default()).loading_cnt,
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: (loading_module_default()).loading_list,
            children: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12
            ].map((i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: (loading_module_default()).loading_item
                }))
        })
    });
}

;// CONCATENATED MODULE: ./components/loading/index.ts






/***/ })

};
;