(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,a,t){e.exports={container:"App_container__2vuJ-",app:"App_app__2J1j3",interface:"App_interface__1A5M0"}},2:function(e,a,t){e.exports={block:"AuthPage_block__3okvp",page:"AuthPage_page__tHGok",pageMedia:"AuthPage_pageMedia__15NYK",heading:"AuthPage_heading__2LAT-",headingMedia:"AuthPage_headingMedia__3MG2p",form:"AuthPage_form__2GKKp",inputBlock:"AuthPage_inputBlock__Yd5Qv",inputBlockMedia:"AuthPage_inputBlockMedia__C53VG",input:"AuthPage_input__ErqpO",label:"AuthPage_label__13Ol4",buttons:"AuthPage_buttons__2Y3FG",btn:"AuthPage_btn__2Uoib",btnMedia:"AuthPage_btnMedia__1br9o",message:"AuthPage_message__3MoS9",loading:"AuthPage_loading__3tDbW",warn:"AuthPage_warn__2TV-1",hidden:"AuthPage_hidden__2vfuc",signUp:"AuthPage_signUp__3gwZv",signUpMedia:"AuthPage_signUpMedia__1_6MF",sign:"AuthPage_sign__zmUHW",mb:"AuthPage_mb__2GVnM"}},24:function(e,a,t){e.exports={topline:"Topline_topline__3hTQ2",nickname:"Topline_nickname__tUbU2"}},4:function(e,a,t){e.exports={navbar:"Navbar_navbar__1JgC0",flexBlock:"Navbar_flexBlock__2BvvT",logo:"Navbar_logo__3bqPP",ham:"Navbar_ham__2MFTF",menu:"Navbar_menu__MRRUs",item:"Navbar_item__2tgaB",link:"Navbar_link__1c_bD",colored:"Navbar_colored__3XVyX",icon:"Navbar_icon__3TotU",overlay:"Navbar_overlay__2oL5v",message:"Navbar_message__1SjwF",messageMedia:"Navbar_messageMedia__2BsmI",active:"Navbar_active__1E0bl",text:"Navbar_text__3xSPi",submit:"Navbar_submit__1nc2U",span:"Navbar_span__UY2bQ",line:"Navbar_line__2ABHD",open:"Navbar_open__1XpyJ",title:"Navbar_title__2wJZz"}},40:function(e,a,t){e.exports=t.p+"static/media/logout.ada60a6b.png"},41:function(e,a,t){e.exports=t(70)},46:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(14),o=t.n(r),l=(t(46),t(11)),i=t.n(l),s=t(16),u=t(12),m=t(13),p=t.n(m),g=t(17),_=t(20),d=t(21),b=t(7),h=t(2),v=t.n(h),f=t(15),E=(t(23),t(18)),N=Object(n.createContext)({token:null,userId:null,login:!1,logout:!1,isAuthentificated:!1}),k=function(){f.a.configure({autoClose:3e3,draggable:!0});var e=Object(n.useContext)(N),a=Object(n.useCallback)((function(e){e&&f.a.error(e)}),[]),t=Object(n.useCallback)((function(e){e&&f.a.success(e)}),[]),r=function(){var e=Object(n.useState)(!1),a=Object(b.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(null),o=Object(b.a)(r,2),l=o[0],i=o[1];return{loading:t,request:Object(n.useCallback)(function(){var e=Object(g.a)(p.a.mark((function e(a){var t,n,r,o,l,s=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:"GET",n=s.length>2&&void 0!==s[2]?s[2]:null,r=s.length>3&&void 0!==s[3]?s[3]:{},c(!0),e.prev=4,n&&(n=JSON.stringify(n),r["Content-Type"]="application/json"),e.next=8,fetch(a,{method:t,body:n,headers:r}).then(c(!0));case 8:return o=e.sent,e.next=11,o.json().then(c(!1));case 11:if(l=e.sent,o.ok){e.next=14;break}throw new Error(l.message||"Something went wrong");case 14:return c(!1),e.abrupt("return",l);case 18:throw e.prev=18,e.t0=e.catch(4),c(!1),i(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(a){return e.apply(this,arguments)}}(),[]),error:l,clearError:Object(n.useCallback)((function(){return i(null)}),[])}}(),o=r.loading,l=r.request,i=r.error,s=r.clearError,u=Object(n.useState)({nickname:"",email:"",password:""}),m=Object(b.a)(u,2),h=m[0],k=m[1],O=Object(n.useState)(!1),j=Object(b.a)(O,2),x=j[0],M=j[1];Object(n.useEffect)((function(){a(i),s()}),[i,a,s]);var P=function(e){e.preventDefault(),!1===x?M(!0):!0===x&&M(!1)},w=function(e){k(Object(d.a)({},h,Object(_.a)({},e.target.name,e.target.value)))},A=function(){var e=Object(g.a)(p.a.mark((function e(a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,l("/api/auth/register","POST",Object(d.a)({},h));case 4:n=e.sent,t(n.message),M(!1),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}(),y=function(){var a=Object(g.a)(p.a.mark((function a(t){var n;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,a.next=4,l("/api/auth/login","POST",Object(d.a)({},h));case 4:n=a.sent,e.login(n.token,n.userId),a.next=10;break;case 8:a.prev=8,a.t0=a.catch(1);case 10:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}(),S=Object(E.useMediaQuery)({minDeviceWidth:520}),C=Object(E.useMediaQuery)({minDeviceWidth:370}),U=[x?{id:"nickname",name:"Nickname",text:"Must be unique"}:{id:"nickname",style:v.a.hidden},{id:"email",name:"Email",text:"Ex: *****@happy.com"},{id:"password",name:"Password",text:"Must be minimum 6 characters"}].map((function(e){var a=e.id,t=e.name,n=e.text,r=e.style;return c.a.createElement("div",{key:a,className:S?"".concat(v.a.inputBlock," ").concat(r):"".concat(v.a.inputBlock," ").concat(v.a.inputBlockMedia," ").concat(r)},c.a.createElement("input",{type:"password"===a?"password":"text",className:v.a.input,name:a,autoComplete:"off",placeholder:t,onChange:w}),c.a.createElement("label",{htmlFor:a,className:v.a.label},t),x?c.a.createElement("b",{className:v.a.warn},n):c.a.createElement("span",null))}));return c.a.createElement("div",{className:v.a.block},c.a.createElement("div",{className:S?"".concat(x?"".concat(v.a.page," ").concat(v.a.hidden):v.a.page):"".concat(x?"".concat(v.a.page," ").concat(v.a.hidden):v.a.page," ").concat(v.a.pageMedia)},c.a.createElement("h1",{className:C?v.a.heading:"".concat(v.a.heading," ").concat(v.a.headingMedia)},"Login"),c.a.createElement("form",{action:"#",className:v.a.form},U),c.a.createElement("p",{className:C?v.a.signUp:"".concat(v.a.signUp," ").concat(v.a.signUpMedia)},"Not yet signed up, so"," ",c.a.createElement("a",{href:"/",className:v.a.sign,onClick:P},"Sign Up")),c.a.createElement("div",{className:v.a.buttons},c.a.createElement("a",{href:"/",className:o?v.a.loading:C?v.a.btn:"".concat(v.a.btn," ").concat(v.a.btnMedia),onClick:y},o?"":"Login"))),c.a.createElement("div",{className:S?"".concat(x?v.a.page:"".concat(v.a.page," ").concat(v.a.hidden)):"".concat(x?v.a.page:"".concat(v.a.page," ").concat(v.a.hidden)," ").concat(v.a.pageMedia)},c.a.createElement("h1",{className:C?v.a.heading:"".concat(v.a.heading," ").concat(v.a.headingMedia)},"Registration"),c.a.createElement("form",{action:"#",className:v.a.form},U),c.a.createElement("div",{className:v.a.buttons},c.a.createElement("a",{href:"/",className:o?v.a.loading:C?v.a.btn:"".concat(v.a.btn," ").concat(v.a.btnMedia),onClick:A},o?"":"Sign Up")),c.a.createElement("p",{className:C?"".concat(v.a.signUp," ").concat(v.a.mb):"".concat(v.a.signUp," ").concat(v.a.mb," ").concat(v.a.signUpMedia)},"OR return to"," ",c.a.createElement("a",{href:"/",className:v.a.sign,onClick:P},"Login"))))},O=t(24),j=t.n(O),x=t(37),M=t.n(x),P=function(e){var a=Object(n.useState)(""),t=Object(b.a)(a,2),r=t[0],o=t[1],l=JSON.stringify(e.id).replace('"',""),i="api/auth/user/".concat(l);return Object(n.useEffect)((function(){M.a.get(i).then((function(e){var a=e.data.nickname;o(a)}))})),c.a.createElement("div",{className:j.a.topline},c.a.createElement("h3",{className:j.a.nickname},r))},w=function(){return c.a.createElement("div",{className:i.a.container},c.a.createElement("h2",null,"Page1"))},A=function(){return c.a.createElement("div",{className:i.a.container},c.a.createElement("h2",null,"Page2"))},y=function(){return c.a.createElement("div",{className:i.a.container},c.a.createElement("h2",null,"Page3"))},S=t(4),C=t.n(S),U=t(40),B=t.n(U),D=function(){var e=Object(u.g)(),a=Object(n.useContext)(N),t=Object(n.useState)(!1),r=Object(b.a)(t,2),o=r[0],l=r[1],i=Object(n.useState)(!1),m=Object(b.a)(i,2),p=m[0],g=m[1],_=function(a){a.preventDefault(),l(!1),e.push("/")},d=[{url:"/page1",id:1,text:"Page1"},{url:"/page2",id:2,text:"Page2"},{url:"/page3",id:3,text:"Page3"}].map((function(e){var a=e.url,t=e.id,n=e.text;return c.a.createElement("li",{key:t,className:C.a.item},c.a.createElement(s.b,{to:a,className:C.a.link},t,c.a.createElement("span",{className:"".concat(C.a.span," ").concat(p?C.a.open:"")},n)))})),h=Object(E.useMediaQuery)({minDeviceWidth:520});return c.a.createElement("nav",{className:"".concat(C.a.navbar," ").concat(p?C.a.open:"")},c.a.createElement("div",{className:C.a.flexBlock},c.a.createElement("div",{className:C.a.title},c.a.createElement("a",{href:"/",className:"".concat(C.a.logo," ").concat(p?C.a.open:"")},"Logo"),c.a.createElement("a",{href:"/",className:C.a.ham,onClick:function(e){e.preventDefault(),g(!1===p)}},c.a.createElement("span",{className:"".concat(C.a.line," ").concat(p?C.a.open:"")}),c.a.createElement("span",{className:C.a.line}),c.a.createElement("span",{className:"".concat(C.a.line," ").concat(p?C.a.open:"")}))),c.a.createElement("ul",{className:C.a.menu},d,c.a.createElement("li",{className:C.a.item},c.a.createElement("a",{href:"/",className:"".concat(C.a.link," ").concat(C.a.colored),onClick:function(e){e.preventDefault(),l(!0)}},c.a.createElement("img",{className:C.a.icon,src:B.a,alt:"logout"}))))),c.a.createElement("div",{className:"".concat(C.a.overlay," ").concat(o?C.a.active:!o),onClick:_}),c.a.createElement("div",{className:"".concat(h?C.a.message:"".concat(C.a.message," ").concat(C.a.messageMedia)," ").concat(C.a.message," ").concat(o?C.a.active:!o)},c.a.createElement("p",{className:C.a.text},"Are you sure, that you want to logout?"),c.a.createElement("a",{href:"/",className:"".concat(C.a.submit," ").concat(C.a.left),onClick:function(t){t.preventDefault(),a.logout(),e.push("/")}},"Yes"),c.a.createElement("a",{href:"/",className:"".concat(C.a.submit," ").concat(C.a.right),onClick:_},"No")))};var I=function(){var e=function(){var e=Object(n.useState)(null),a=Object(b.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(null),o=Object(b.a)(r,2),l=o[0],i=o[1],s=Object(n.useCallback)((function(e,a){c(e),i(a),localStorage.setItem("userData",JSON.stringify({userId:a,token:e}))}),[]),u=Object(n.useCallback)((function(){c(null),i(null),localStorage.removeItem("userData")}),[]);return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&s(e.token,e.userId)}),[s]),{login:s,logout:u,token:t,userId:l}}(),a=e.token,t=e.login,r=e.logout,o=e.userId,l=!!a,m=function(e,a){return e?c.a.createElement("div",{className:i.a.interface},c.a.createElement(P,{id:a}),c.a.createElement(u.d,null,c.a.createElement(u.b,{path:"/page1",exact:!0},c.a.createElement(w,null)),c.a.createElement(u.b,{path:"/page2",exact:!0},c.a.createElement(A,null)),c.a.createElement(u.b,{path:"/page3",exact:!0},c.a.createElement(y,null)),c.a.createElement(u.a,{to:"/page1"}))):c.a.createElement(u.d,null,c.a.createElement(u.b,{path:"/",exact:!0},c.a.createElement(k,null)),c.a.createElement(u.a,{to:"/"}))}(l,o);return c.a.createElement(N.Provider,{value:{token:a,login:t,logout:r,userId:o,isAuthentificated:l}},c.a.createElement(s.a,null,c.a.createElement("div",{className:i.a.app},l&&c.a.createElement(D,null),m)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.10ad941a.chunk.js.map