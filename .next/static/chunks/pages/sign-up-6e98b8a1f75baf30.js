(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5801],{46574:function(e,n,r){"use strict";var s=r(70518),i=r(98216),a=r(90948),t=r(71657);const o=(0,s.Z)({createStyledComponent:(0,a.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,n[`maxWidth${(0,i.Z)(String(r.maxWidth))}`],r.fixed&&n.fixed,r.disableGutters&&n.disableGutters]}}),useThemeProps:e=>(0,t.Z)({props:e,name:"MuiContainer"})});n.Z=o},32277:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sign-up",function(){return r(11990)}])},11990:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return b}});var s=r(47568),i=r(26042),a=r(69396),t=r(20414),o=r(85893),_=r(46574),l=r(67294),h=r(84828),u=r(20955),d=r.n(u),c=r(11163),m=r.n(c),p=r(27652),g=r(66174),f=r(89581),x=r(74231),w={fullname:/^[a-zA-Z\xc0\xc1\xc2\xc3\xc8\xc9\xca\xcc\xcd\xd2\xd3\xd4\xd5\xd9\xda\u0102\u0110\u0128\u0168\u01a0\xe0\xe1\xe2\xe3\xe8\xe9\xea\xec\xed\xf2\xf3\xf4\xf5\xf9\xfa\u0103\u0111\u0129\u0169\u01a1\u01af\u0102\u1ea0\u1ea2\u1ea4\u1ea6\u1ea8\u1eaa\u1eac\u1eae\u1eb0\u1eb2\u1eb4\u1eb6\u1eb8\u1eba\u1ebc\u1ec0\u1ec0\u1ec2\u1ebe\u01b0\u0103\u1ea1\u1ea3\u1ea5\u1ea7\u1ea9\u1eab\u1ead\u1eaf\u1eb1\u1eb3\u1eb5\u1eb7\u1eb9\u1ebb\u1ebd\u1ec1\u1ec1\u1ec3\u1ebf\u1ec4\u1ec6\u1ec8\u1eca\u1ecc\u1ece\u1ed0\u1ed2\u1ed4\u1ed6\u1ed8\u1eda\u1edc\u1ede\u1ee0\u1ee2\u1ee4\u1ee6\u1ee8\u1eea\u1ec5\u1ec7\u1ec9\u1ecb\u1ecd\u1ecf\u1ed1\u1ed3\u1ed5\u1ed7\u1ed9\u1edb\u1edd\u1edf\u1ee1\u1ee3\u1ee5\u1ee7\u1ee9\u1eeb\u1eec\u1eee\u1ef0\u1ef2\u1ef4\xdd\u1ef6\u1ef8\u1eed\u1eef\u1ef1\u1ef3\u1ef5\u1ef7\u1ef9\s\W|_]+$/,email:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i,phone:/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,password:/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/},v=r(84024),j=r(73957),N=r(2275);var b=function(){var e=(0,l.useState)({telephone:"",platform:"BEAUTYX",verification_id:"",code:"",open:!0}),n=e[0],r=e[1],u=(0,l.useState)(!1),c=u[0],b=u[1],k=(0,l.useState)(!1),Z=k[0],C=k[1],y=(0,l.useState)({errMail:"",errPhone:""}),I=y[0],P=y[1],S=(0,N.IA)();function M(){return M=(0,s.Z)((function(e){var r,s,o,_;return(0,t.__generator)(this,(function(t){switch(t.label){case 0:r={fullname:e.name,email:e.email,telephone:n.telephone,code:e.code,verification_id:n.verification_id,password:e.password,platform:n.platform},t.label=1;case 1:return t.trys.push([1,3,,4]),[4,v.Z.register(r)];case 2:return t.sent(),b(!1),C(!0),[3,4];case 3:return s=t.sent(),b(!1),400===(null===(o=(_=s).response)||void 0===o?void 0:o.status)&&P((0,a.Z)((0,i.Z)({},I),{errMail:_.response.data.context.email?S.form.email_already:"",errPhone:_.response.data.context.telephone?S.form.phone_already:""})),[3,4];case 4:return[2]}}))})),M.apply(this,arguments)}var O=(0,f.TA)({initialValues:{name:"",email:"",password:"",repassword:""},validationSchema:x.Ry({email:x.Z_().required("Vui l\xf2ng nh\u1eadp email/s\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),password:x.Z_().required("Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u").min(8,"M\u1eadt kh\u1ea9u l\u1edbn h\u01a1n 8 k\xfd t\u1ef1").max(32,"M\u1eadt kh\u1ea9u t\u1ed1i \u0111a 32 k\xed t\u1ef1"),name:x.Z_().required("Vui l\xf2ng nh\u1eadp h\u1ecd v\xe0 t\xean").min(2,"T\xean l\u1edbn h\u01a1n 2 k\xfd t\u1ef1").required("Vui l\xf2ng nh\u1eadp h\u1ecd v\xe0 t\xean").matches(w.fullname,"T\xean kh\xf4ng \u0111\xfang \u0111\u1ecbnh d\u1ea1ng"),repassword:x.Z_().required("Vui l\xf2ng nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u").oneOf([x.iH("password"),null],"M\u1eadt kh\u1ea9u kh\xf4ng kh\u1edbp")}),onSubmit:function(){var e=(0,s.Z)((function(e){return(0,t.__generator)(this,(function(n){return b(!0),function(e){M.apply(this,arguments)}(e),[2]}))}));return function(n){return e.apply(this,arguments)}}()});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.au,{params:n,setParams:r,openSignUp:n.open}),(0,o.jsx)("div",{className:d().sign_head,children:(0,o.jsx)(_.Z,{children:(0,o.jsxs)("div",{className:d().sign_head_wrapper,children:[(0,o.jsx)(h.cu,{onClick:function(){return m().replace("/")},src:p.ZP.beautyX,alt:"",type:"ICON",layout:"fixed",width:138,height:44}),(0,o.jsx)("h3",{className:d().sign_head_title,children:"\u0110\u0103ng k\xfd"})]})})}),(0,o.jsx)(_.Z,{children:(0,o.jsx)("div",{className:d().form_sign_wrap,children:(0,o.jsxs)("div",{className:d().form_sign_cnt,children:[(0,o.jsx)("div",{className:d().form_sign_left,children:(0,o.jsx)("div",{className:d().form_left_img,children:(0,o.jsx)(h.cu,{src:p.ZP.Partner,alt:"",layout:"responsive",type:"ICON"})})}),(0,o.jsxs)("div",{className:d().form_sign_right,children:[(0,o.jsx)("div",{className:d().sign_right_img,children:(0,o.jsx)(h.cu,{type:"ICON",src:p.ZP.beautyx,alt:"logo beautyx",layout:"fixed",width:120,height:120})}),(0,o.jsx)("span",{className:d().sign_right_title,children:"\u0110\u0103ng k\xfd"}),(0,o.jsxs)("form",{onSubmit:O.handleSubmit,autoComplete:"off",children:[(0,o.jsxs)("div",{className:d().sign_form_row,children:[(0,o.jsx)(h.II,{icon:g.Z.User,onChange:O.handleChange,value:O.values.name,id:"name",name:"name",placeholder:"Nh\u1eadp t\xean c\u1ee7a b\u1ea1n..."}),O.errors.name&&O.touched&&(0,o.jsx)("span",{className:d().sign_form_row_err,children:O.errors.name})]}),(0,o.jsxs)("div",{className:d().sign_form_row,children:[(0,o.jsx)(h.II,{icon:g.Z.Phone,onChange:O.handleChange,value:O.values.email,id:"email",name:"email",placeholder:"Email/S\u1ed1 \u0111i\u1ec7n tho\u1ea1i..."}),O.errors.email&&O.touched&&(0,o.jsx)("span",{className:d().sign_form_row_err,children:O.errors.email}),I.errMail&&(0,o.jsx)("span",{className:d().sign_form_row_err,children:I.errMail})]}),(0,o.jsxs)("div",{className:d().sign_form_row,children:[(0,o.jsx)(h.II,{icon:g.Z.Lock,onChange:O.handleChange,value:O.values.password,id:"password",name:"password",placeholder:"Nh\u1eadp m\u1eadt kh\u1ea9u..."}),O.errors.password&&O.touched&&(0,o.jsx)("span",{className:d().sign_form_row_err,children:O.errors.password})]}),(0,o.jsxs)("div",{className:d().sign_form_row,children:[(0,o.jsx)(h.II,{icon:g.Z.User,onChange:O.handleChange,value:O.values.repassword,id:"repassword",name:"repassword",placeholder:"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u..."}),O.errors.repassword&&O.touched&&(0,o.jsx)("span",{className:d().sign_form_row_err,children:O.errors.repassword})]}),(0,o.jsx)("div",{className:d().form_btn_submit,children:(0,o.jsx)(h.dw,{title:"\u0110\u0103ng k\xfd",type:"submit",loading:c})}),(0,o.jsx)("span",{className:d().sign_form_err_phone,children:I.errPhone})]}),(0,o.jsxs)("div",{className:d().sign_body_right_bot,children:[(0,o.jsx)("span",{children:"B\u1ea1n \u0111\xe3 c\xf3 t\xe0i kh\u1ea3n?"})," ",(0,o.jsx)("h4",{onClick:function(){return m().push("/sign")},children:"\u0110\u0103ng nh\u1eadp ngay"})]})]})]})})}),(0,o.jsx)(j.C,{title:"Th\xe0nh c\xf4ng",content:"Vui l\xf2ng \u0111\u0103ng nh\u1eadp \u0111\u1ec3 ti\u1ebfp t\u1ee5c",open:Z,setOpen:C,children:(0,o.jsx)("button",{onClick:function(){return C(!1)},className:d().popup_noti_btn,children:"\u0110\xf3ng"})})]})}},20955:function(e){e.exports={sign_head:"sign-up_sign_head__5lqNs",sign_head_wrapper:"sign-up_sign_head_wrapper__FqG1q",sign_head_title:"sign-up_sign_head_title__oQOu5",form_sign_wrap:"sign-up_form_sign_wrap__gm7Kz",form_sign_cnt:"sign-up_form_sign_cnt__a7ccO",form_sign_left:"sign-up_form_sign_left__MoYPn",form_left_img:"sign-up_form_left_img__Cp609",form_sign_right:"sign-up_form_sign_right__jmhu0",sign_form_row:"sign-up_sign_form_row__C1rS1",form_btn_submit:"sign-up_form_btn_submit__ChWRz",sign_body_right_bot:"sign-up_sign_body_right_bot__mcTOI",sign_form_row_err:"sign-up_sign_form_row_err__Bki_F",sign_form_err_phone:"sign-up_sign_form_err_phone__tkbbr",sign_right_img:"sign-up_sign_right_img__JxkgI",sign_right_title:"sign-up_sign_right_title__fZ7kf",popup_noti_btn:"sign-up_popup_noti_btn___BGyd"}}},function(e){e.O(0,[9774,2888,179],(function(){return n=32277,e(e.s=n);var n}));var n=e.O();_N_E=n}]);