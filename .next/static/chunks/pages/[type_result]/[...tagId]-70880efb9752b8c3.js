(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3739],{46574:function(t,e,n){"use strict";var r=n(70518),i=n(98216),o=n(90948),s=n(71657);const l=(0,r.Z)({createStyledComponent:(0,o.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[`maxWidth${(0,i.Z)(String(n.maxWidth))}`],n.fixed&&e.fixed,n.disableGutters&&e.disableGutters]}}),useThemeProps:t=>(0,s.Z)({props:t,name:"MuiContainer"})});e.Z=l},80758:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[type_result]/[...tagId]",function(){return n(90517)}])},26776:function(t,e,n){"use strict";n.d(e,{Dl:function(){return s},tS:function(){return l},DX:function(){return c},SN:function(){return a}});var r=n(85893),i=(n(67294),n(93148)),o=n.n(i);function s(t){var e=t.grid,n=[1,2,3,4,5,6,7,8,9,10];return 2===e&&(n=[1,2,3,4,5,6]),(0,r.jsx)("ul",{style:e?{gridTemplateColumns:"repeat(".concat(e,", 1fr)")}:{},className:o().load_grid_cnt_org,children:n.map((function(t){return(0,r.jsxs)("li",{style:1===e?{height:"107px"}:{},className:o().load_grid_item,children:[(0,r.jsx)("div",{className:o().load_grid_item_img}),(!e||e>1)&&(0,r.jsxs)("div",{className:o().load_grid_item_de,children:[(0,r.jsx)("div",{className:o().name}),(0,r.jsx)("div",{className:o().de_item}),(0,r.jsx)("div",{className:o().de_item}),(0,r.jsx)("div",{className:o().de_item}),(0,r.jsx)("div",{className:o().de_item})]})]},t)}))})}function l(t){var e=t.itemNumber,n=t.grid,i=null!==e&&void 0!==e?e:10;return(0,r.jsx)("ul",{className:o().grid_2_cnt,style:n?{gridTemplateColumns:"repeat(".concat(n,", 1fr)")}:{},children:function(){for(var t=[],e=0;e<i;e++){var n=(0,r.jsx)("li",{className:o().grid_2_cnt_item},e);t.push(n)}return t}()})}function a(t){var e=t.rowItem;return(0,r.jsx)("ul",{style:e?{gridTemplateColumns:"repeat(".concat(e,",1fr)")}:{gridTemplateColumns:"repeat(5,1fr)"},className:o().item_in_org_list,children:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((function(t,e){return(0,r.jsx)("li",{children:(0,r.jsxs)("div",{className:o().item_in_org,children:[(0,r.jsx)("div",{className:o().item_in_org_img}),(0,r.jsxs)("div",{className:o().item_in_org_de,children:[(0,r.jsx)("div",{className:o().item_in_org_de_name}),(0,r.jsx)("div",{className:o().item_in_org_de_price})]})]})},e)}))})}function c(){return(0,r.jsx)("div",{className:o().loading_cnt,children:(0,r.jsx)("ul",{className:o().loading_list,children:[1,2,3,4,5,6,7,8,9,10,11,12].map((function(t){return(0,r.jsx)("li",{className:o().loading_item})}))})})}},37469:function(t,e,n){"use strict";var r=n(85893),i=(n(67294),n(9008)),o=n.n(i);e.Z=function(t){var e="https://localhost:3000",n=t.title,i=t.description,s=t.url;return(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"title",content:n}),(0,r.jsx)("meta",{name:"description",content:i}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:"".concat(e,"/").concat(s)}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"og:description",content:i}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:url",content:"".concat(e,"/").concat(s)}),(0,r.jsx)("meta",{property:"twitter:title",content:n}),(0,r.jsx)("meta",{property:"twitter:description",content:i})]})}},90517:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSP:function(){return w},default:function(){return b}});var r=n(85893),i=(n(67294),n(11163)),o=n(84828),s=n(2275),l=n(2736),a=n(16247),c=n.n(a),_=n(46574),d=n(41664),h=n.n(d),u=n(37469),p=n(26786),m=n.n(p);function g(t){var e=t.tagChild,n=t.type,i=null===e||void 0===e?void 0:e.children;return(0,r.jsx)("div",{className:m().tag_left_cnt,children:(0,r.jsx)("ul",{className:m().tag_list,children:null===i||void 0===i?void 0:i.map((function(t,e){return(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:(0,l.Wc)(n,t.name,t.id),children:(0,r.jsx)("a",{className:m().tag_left_item,children:t.name})})},e)}))})})}var f=n(95517),v=n(58533),x=n(26776);function y(t){var e=(0,i.useRouter)().query,n=e.type_result,o=t.tagChild,a=t.tagName,c=t.type,_={"filter[is_momo_ecommerce_enable]":!0,"filter[min_price]":1e3,"filter[special_min_price]":1e3,"filter[keyword]":a,sort:e.sort},d="";"dich-vu"===n&&(d="/services"),"san-pham"===n&&(d="/products");var u=(0,s.H9)(d,_),p=u.resData,g=u.onLoadMore,y=u.totalItem,j=[{id:1,title:"Khuy\u1ebfn m\xe3i hot",sort:"-discount_percent"},{id:2,title:"B\xe1n ch\u1ea1y",sort:"-bought_count"},{id:3,title:"Gi\xe1 th\u1ea5p",sort:"SERVICE"===c?"-price":"-retail_price"},{id:4,title:"Gi\xe1 cao",sort:"SERVICE"===c?"price":"retail_price"}];return(0,r.jsxs)("div",{className:m().tag_right_cnt,children:[(0,r.jsx)("h1",{className:m().tag_name_title,children:a}),(0,r.jsx)("div",{className:m().tag_right_sort,children:(0,r.jsx)("ul",{className:m().sort_list,children:j.map((function(t){return(0,r.jsx)("li",{className:m().sort_item_cnt,style:t.sort===e.sort?{backgroundColor:"var(--pink)",color:"var(--red-cl)",border:"solid 1px var(--red-cl)"}:{},children:(0,r.jsx)(h(),{href:"".concat((0,l.Wc)(c,a,null===o||void 0===o?void 0:o.id),"?sort=").concat(t.sort),children:(0,r.jsx)("a",{className:m().sort_item,children:t.title})})},t.id)}))})}),(0,r.jsxs)("div",{className:m().list_cnt,children:[(0,r.jsx)(v.Z,{dataLength:null===p||void 0===p?void 0:p.length,hasMore:!0,loader:(0,r.jsx)(r.Fragment,{}),next:function(){p.length>=30&&p.length<y&&g()},children:(0,r.jsx)("ul",{className:m().list_item,children:p.map((function(t,e){return(0,r.jsx)("li",{className:m().item,children:(0,r.jsx)(f.Z,{item:t})},e)}))})}),(null===p||void 0===p?void 0:p.length)<y&&(0,r.jsx)(x.Dl,{})]})]})}var j=function(t){var e=t.tagName,n=t.type_result,o=t.tagParentId,a=(0,i.useRouter)(),d=a.query.tagId[1],p=(0,s.YE)("/tags/".concat(o),o).response,m=(0,s.YE)("/tags/".concat(d),d).response,f="san-pham"===n?"PRODUCT":"SERVICE";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{title:"".concat(e," | BeautyX"),description:"D\u1ecbch v\u1ee5 l\xe0m \u0111\u1eb9p Online ".concat(e),url:a.asPath}),(0,r.jsxs)(_.Z,{children:[(0,r.jsxs)("div",{className:c().bread_crumbs,children:[(0,r.jsx)(h(),{href:"/",children:(0,r.jsx)("a",{className:c().bread_crumbs_title,children:"Trang ch\u1ee7"})}),p&&(0,r.jsx)(h(),{href:(0,l.Wc)(f,p.name,p.id),children:(0,r.jsxs)("a",{className:c().bread_crumbs_title,children:[">  ",p.name]})}),m&&(0,r.jsx)(h(),{href:(0,l.Wc)(f,m.name,m.id),children:(0,r.jsxs)("a",{className:c().bread_crumbs_title,children:[">  ",m.name]})})]}),(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsx)("div",{className:c().container_left,children:(0,r.jsx)(g,{tagChild:m,tagParent:p,type:f})}),(0,r.jsx)("div",{className:c().container_right,children:(0,r.jsx)(y,{tagChild:m,tagParent:p,tagName:e,type:f})})]})]})]})};j.Layout=o.Zn;var w=!0,b=j},93148:function(t){t.exports={load_grid_cnt:"loading_load_grid_cnt__m98qU",load_grid_cnt_org:"loading_load_grid_cnt_org__gBeyy",load_grid_item:"loading_load_grid_item__5HcjZ",load_grid_item_img:"loading_load_grid_item_img__UAZLX","skeleton-loading":"loading_skeleton-loading__7q2Cf",load_grid_item_de:"loading_load_grid_item_de__eSOzP",name:"loading_name__Qlllu",de_item:"loading_de_item__LQXw7",item_in_org_list:"loading_item_in_org_list__s7y01",item_in_org:"loading_item_in_org__1DKwS",item_in_org_img:"loading_item_in_org_img__XKXMs",item_in_org_de:"loading_item_in_org_de__snEzf",item_in_org_de_name:"loading_item_in_org_de_name__s0InM",item_in_org_de_price:"loading_item_in_org_de_price__Z58fr",loading_cnt:"loading_loading_cnt__uEVbu",loading_list:"loading_loading_list___y9Cz",loading_item:"loading_loading_item__Acv1e",grid_2_cnt:"loading_grid_2_cnt__8E7tJ",grid_2_cnt_item:"loading_grid_2_cnt_item__BZvzG"}},26786:function(t){t.exports={tag_left_cnt:"tag-cpn_tag_left_cnt__wDwik",tag_list:"tag-cpn_tag_list__uTSIT",tag_left_item:"tag-cpn_tag_left_item__fCn2R",tag_right_cnt:"tag-cpn_tag_right_cnt__Znbc9",tag_name_title:"tag-cpn_tag_name_title__z2h_C",tag_right_sort:"tag-cpn_tag_right_sort__7eOFd",sort_list:"tag-cpn_sort_list__YbUeI",sort_item_cnt:"tag-cpn_sort_item_cnt__ZXwpM",sort_item:"tag-cpn_sort_item__JaEbj",list_cnt:"tag-cpn_list_cnt__HUjcx",list_item:"tag-cpn_list_item__ONW0f"}},16247:function(t){t.exports={bread_crumbs:"tag_bread_crumbs__yHnFe",bread_crumbs_title:"tag_bread_crumbs_title__yGFS6",container:"tag_container__LCgAj",container_left:"tag_container_left__5pVK6",container_right:"tag_container_right__CIFlI"}},58533:function(t,e,n){"use strict";var r=n(67294),i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},i(t,e)};var o=function(){return o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},o.apply(this,arguments)};var s="Pixel",l="Percent",a={unit:l,value:.8};function c(t){return"number"===typeof t?{unit:l,value:100*t}:"string"===typeof t?t.match(/^(\d*(\.\d+)?)px$/)?{unit:s,value:parseFloat(t)}:t.match(/^(\d*(\.\d+)?)%$/)?{unit:l,value:parseFloat(t)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),a):(console.warn("scrollThreshold should be string or number"),a)}var _=function(t){function e(e){var n=t.call(this,e)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(t){n.lastScrollTop||(n.dragging=!0,t instanceof MouseEvent?n.startY=t.pageY:t instanceof TouchEvent&&(n.startY=t.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(t){n.dragging&&(t instanceof MouseEvent?n.currentY=t.pageY:t instanceof TouchEvent&&(n.currentY=t.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(t){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(t)}),0);var e=n.props.height||n._scrollableNode?t.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(e,n.props.scrollThreshold):n.isElementAtBottom(e,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=e.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:e.dataLength},n.throttledOnScrollListener=function(t,e,n,r){var i,o=!1,s=0;function l(){i&&clearTimeout(i)}function a(){var a=this,c=Date.now()-s,_=arguments;function d(){s=Date.now(),n.apply(a,_)}function h(){i=void 0}o||(r&&!i&&d(),l(),void 0===r&&c>t?d():!0!==e&&(i=setTimeout(r?h:d,void 0===r?t-c:t)))}return"boolean"!==typeof e&&(r=n,n=e,e=void 0),a.cancel=function(){l(),o=!0},a}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},e.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},e.prototype.componentDidUpdate=function(t){this.props.dataLength!==t.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},e.getDerivedStateFromProps=function(t,e){return t.dataLength!==e.prevDataLength?o(o({},e),{prevDataLength:t.dataLength}):null},e.prototype.isElementAtTop=function(t,e){void 0===e&&(e=.8);var n=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,r=c(e);return r.unit===s?t.scrollTop<=r.value+n-t.scrollHeight+1:t.scrollTop<=r.value/100+n-t.scrollHeight+1},e.prototype.isElementAtBottom=function(t,e){void 0===e&&(e=.8);var n=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,r=c(e);return r.unit===s?t.scrollTop+n>=t.scrollHeight-r.value:t.scrollTop+n>=r.value/100*t.scrollHeight},e.prototype.render=function(){var t=this,e=o({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),i=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return r.createElement("div",{style:i,className:"infinite-scroll-component__outerdiv"},r.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(e){return t._infScroll=e},style:e},this.props.pullDownToRefresh&&r.createElement("div",{style:{position:"relative"},ref:function(e){return t._pullDown=e}},r.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},e}(r.Component);e.Z=_}},function(t){t.O(0,[9774,2888,179],(function(){return e=80758,t(t.s=e);var e}));var e=t.O();_N_E=e}]);