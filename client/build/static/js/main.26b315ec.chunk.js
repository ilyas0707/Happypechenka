(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{1:function(e,a,t){e.exports={navbar:"Navbar_navbar__1JgC0",flexBlock:"Navbar_flexBlock__2BvvT",logo:"Navbar_logo__3bqPP",ham:"Navbar_ham__2MFTF",menu:"Navbar_menu__MRRUs",item:"Navbar_item__2tgaB",link:"Navbar_link__1c_bD",colored:"Navbar_colored__3XVyX",icon:"Navbar_icon__3TotU",overlay:"Navbar_overlay__2oL5v",message:"Navbar_message__1SjwF",messageMedia:"Navbar_messageMedia__2BsmI",active:"Navbar_active__1E0bl",text:"Navbar_text__3xSPi",submit:"Navbar_submit__1nc2U",span:"Navbar_span__UY2bQ",line:"Navbar_line__2ABHD",open:"Navbar_open__1XpyJ",title:"Navbar_title__2wJZz"}},2:function(e,a,t){e.exports={block:"AuthPage_block__3okvp",page:"AuthPage_page__tHGok",pageMedia:"AuthPage_pageMedia__15NYK",heading:"AuthPage_heading__2LAT-",headingMedia:"AuthPage_headingMedia__3MG2p",form:"AuthPage_form__2GKKp",inputBlock:"AuthPage_inputBlock__Yd5Qv",inputBlockMedia:"AuthPage_inputBlockMedia__C53VG",input:"AuthPage_input__ErqpO",label:"AuthPage_label__13Ol4",buttons:"AuthPage_buttons__2Y3FG",btn:"AuthPage_btn__2Uoib",btnMedia:"AuthPage_btnMedia__1br9o",message:"AuthPage_message__3MoS9",loading:"AuthPage_loading__3tDbW",loading2:"AuthPage_loading2__TcIS9"}},23:function(e,a,t){e.exports={container:"App_container__2vuJ-",app:"App_app__2J1j3"}},26:function(e,a,t){e.exports=t.p+"static/media/logout.ada60a6b.png"},27:function(e,a,t){e.exports=t(39)},32:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(22),l=t.n(r),o=(t(32),t(23)),i=t.n(o),s=t(12),u=t(8),m=t(9),p=t.n(m),g=t(13),b=t(15),_=t(16),d=t(6),v=t(2),h=t.n(v),f=t(14),E=Object(n.createContext)({token:null,userId:null,login:!1,logout:!1,isAuthentificated:!1}),N=function(){var e=Object(n.useContext)(E),a=Object(n.useCallback)((function(e){var a=document.getElementById("root"),t=document.createElement("div");e&&(t.innerHTML='<p style="color: #fff;">'.concat(e,"</p>"),t.style.cssText="position: absolute; \n            top: 50px; \n            left: 50%;\n            transform: translateX(-50%);\n            font-size: 18px; \n            background: #00e600; \n            padding: 5px 20px;\n            transition: .5s all;",a.appendChild(t),setTimeout((function(){return t.style.cssText+="top: 60px;"}),2500),setTimeout((function(){return t.style.cssText+="opacity: .5;"}),2700),setTimeout((function(){return a.removeChild(t)}),3e3))}),[]),t=function(){var e=Object(n.useState)(!1),a=Object(d.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(null),l=Object(d.a)(r,2),o=l[0],i=l[1];return{loading:t,request:Object(n.useCallback)(function(){var e=Object(g.a)(p.a.mark((function e(a){var t,n,r,l,o,s=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:"GET",n=s.length>2&&void 0!==s[2]?s[2]:null,r=s.length>3&&void 0!==s[3]?s[3]:{},c(!0),e.prev=4,n&&(n=JSON.stringify(n),r["Content-Type"]="application/json"),e.next=8,fetch(a,{method:t,body:n,headers:r}).then(c(!0));case 8:return l=e.sent,e.next=11,l.json().then(c(!1));case 11:if(o=e.sent,l.ok){e.next=14;break}throw new Error(o.message||"Something went wrong");case 14:return c(!1),e.abrupt("return",o);case 18:throw e.prev=18,e.t0=e.catch(4),c(!1),i(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(a){return e.apply(this,arguments)}}(),[]),error:o,clearError:Object(n.useCallback)((function(){return i(null)}),[])}}(),r=t.loading,l=t.request,o=t.error,i=t.clearError,s=Object(n.useState)({email:"",password:""}),u=Object(d.a)(s,2),m=u[0],v=u[1];Object(n.useEffect)((function(){a(o),i()}),[o,a,i]);var N=function(e){v(Object(_.a)({},m,Object(b.a)({},e.target.name,e.target.value)))},k=function(){var e=Object(g.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,l("/api/auth/register","POST",Object(_.a)({},m));case 4:n=e.sent,a(n.message),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),x=function(){var a=Object(g.a)(p.a.mark((function a(t){var n;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,a.next=4,l("/api/auth/login","POST",Object(_.a)({},m));case 4:n=a.sent,e.login(n.token,n.userId),a.next=10;break;case 8:a.prev=8,a.t0=a.catch(1);case 10:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}(),O=Object(f.useMediaQuery)({minDeviceWidth:520}),j=Object(f.useMediaQuery)({minDeviceWidth:370});return c.a.createElement("div",{className:h.a.block},c.a.createElement("div",{className:O?h.a.page:"".concat(h.a.page," ").concat(h.a.pageMedia)},c.a.createElement("h1",{className:j?h.a.heading:"".concat(h.a.heading," ").concat(h.a.headingMedia)},"Authorization"),c.a.createElement("form",{action:"#",className:h.a.form},c.a.createElement("div",{className:O?h.a.inputBlock:"".concat(h.a.inputBlock," ").concat(h.a.inputBlockMedia)},c.a.createElement("input",{type:"text",className:h.a.input,id:"email",name:"email",autoComplete:"off",placeholder:"Email",onChange:N}),c.a.createElement("label",{htmlFor:"email",className:h.a.label},"Email")),c.a.createElement("div",{className:O?h.a.inputBlock:"".concat(h.a.inputBlock," ").concat(h.a.inputBlockMedia)},c.a.createElement("input",{type:"password",className:h.a.input,id:"password",name:"password",autoComplete:"current-password",placeholder:"Password",onChange:N}),c.a.createElement("label",{htmlFor:"password",className:h.a.label},"Password"))),c.a.createElement("div",{className:h.a.buttons},c.a.createElement("a",{href:"/",type:"submit",className:r?h.a.loading:j?h.a.btn:"".concat(h.a.btn," ").concat(h.a.btnMedia),onClick:x},r?"":"Login"),c.a.createElement("a",{href:"/",type:"submit",className:r?h.a.loading:j?h.a.btn:"".concat(h.a.btn," ").concat(h.a.btnMedia),onClick:k},r?"":"Sign Up"))))},k=function(){return c.a.createElement("div",null,c.a.createElement("h2",{style:{marginLeft:"20px"}},"Page1"))},x=function(){return c.a.createElement("div",null,c.a.createElement("h2",{style:{marginLeft:"20px"}},"Page2"))},O=function(){return c.a.createElement("div",null,c.a.createElement("h2",{style:{marginLeft:"20px"}},"Page3"))},j=t(1),y=t.n(j),w=t(26),P=t.n(w),M=function(){var e=Object(u.g)(),a=Object(n.useContext)(E),t=Object(n.useState)(!1),r=Object(d.a)(t,2),l=r[0],o=r[1],i=Object(n.useState)(!1),m=Object(d.a)(i,2),p=m[0],g=m[1],b=function(a){a.preventDefault(),o(!1),e.push("/")},_=[{url:"/page1",id:1,text:"Page1"},{url:"/page2",id:2,text:"Page2"},{url:"/page3",id:3,text:"Page3"}].map((function(e){var a=e.url,t=e.id,n=e.text;return c.a.createElement("li",{key:t,className:y.a.item},c.a.createElement(s.b,{to:a,className:y.a.link},t,c.a.createElement("span",{className:"".concat(y.a.span," ").concat(p?y.a.open:"")},n)))})),v=Object(f.useMediaQuery)({minDeviceWidth:520});return c.a.createElement("nav",{className:"".concat(y.a.navbar," ").concat(p?y.a.open:"")},c.a.createElement("div",{className:y.a.flexBlock},c.a.createElement("div",{className:y.a.title},c.a.createElement("a",{href:"/",className:"".concat(y.a.logo," ").concat(p?y.a.open:"")},"Logo"),c.a.createElement("a",{href:"/",className:y.a.ham,onClick:function(e){e.preventDefault(),g(!1===p)}},c.a.createElement("span",{className:"".concat(y.a.line," ").concat(p?y.a.open:"")}),c.a.createElement("span",{className:y.a.line}),c.a.createElement("span",{className:"".concat(y.a.line," ").concat(p?y.a.open:"")}))),c.a.createElement("ul",{className:y.a.menu},_,c.a.createElement("li",{className:y.a.item},c.a.createElement("a",{href:"/",className:"".concat(y.a.link," ").concat(y.a.colored),onClick:function(e){e.preventDefault(),o(!0)}},c.a.createElement("img",{className:y.a.icon,src:P.a,alt:"logout"}))))),c.a.createElement("div",{className:"".concat(y.a.overlay," ").concat(l?y.a.active:!l),onClick:b}),c.a.createElement("div",{className:"".concat(v?y.a.message:"".concat(y.a.message," ").concat(y.a.messageMedia)," ").concat(y.a.message," ").concat(l?y.a.active:!l)},c.a.createElement("p",{className:y.a.text},"Are you sure, that you want to logout?"),c.a.createElement("a",{href:"/",className:"".concat(y.a.submit," ").concat(y.a.left),onClick:function(t){t.preventDefault(),a.logout(),e.push("/")}},"Yes"),c.a.createElement("a",{href:"/",className:"".concat(y.a.submit," ").concat(y.a.right),onClick:b},"No")))};var A=function(){var e=function(){var e=Object(n.useState)(null),a=Object(d.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(null),l=Object(d.a)(r,2),o=(l[0],l[1]),i=Object(n.useCallback)((function(e,a){c(e),o(a),localStorage.setItem("userData",JSON.stringify({userId:a,token:e}))}),[]),s=Object(n.useCallback)((function(){c(null),o(null),localStorage.removeItem("userData")}),[]);return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&i(e.token,e.userId)}),[i]),{login:i,logout:s,token:t}}(),a=e.token,t=e.login,r=e.logout,l=e.userId,o=!!a,m=function(e){return e?c.a.createElement(u.d,null,c.a.createElement(u.b,{path:"/page1",exact:!0},c.a.createElement(k,null)),c.a.createElement(u.b,{path:"/page2",exact:!0},c.a.createElement(x,null)),c.a.createElement(u.b,{path:"/page3",exact:!0},c.a.createElement(O,null)),c.a.createElement(u.a,{to:"/page1"})):c.a.createElement(u.d,null,c.a.createElement(u.b,{path:"/",exact:!0},c.a.createElement(N,null)),c.a.createElement(u.a,{to:"/"}))}(o);return c.a.createElement(E.Provider,{value:{token:a,login:t,logout:r,userId:l,isAuthentificated:o}},c.a.createElement(s.a,null,c.a.createElement("div",{className:i.a.app},o&&c.a.createElement(M,null),m)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.26b315ec.chunk.js.map