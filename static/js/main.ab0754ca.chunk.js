(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],{13:function(n,e,t){n.exports=t(21)},18:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(8),i=t.n(o),c=(t(18),t(5)),l=t(1),u=t(2),s=t(9),d=t.n(s);function m(){var n=Object(l.a)(["\n  background-color: #282c34;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 0 10px 1px;\n  height: 50px;\n  padding: 10px;\n  .header-logo {\n    height: 50px;\n    width: 50px;\n  }\n  .header-title {\n    color: white;\n    font-size: 1.1em;\n    margin: 0;\n  }\n  @media (prefers-reduced-motion: no-preference) {\n    .header-logo {\n      animation: header-logo-spin infinite 20s linear;\n    }\n  }\n  @keyframes header-logo-spin {\n    from {transform: rotate(0deg);}\n    to {transform: rotate(360deg);}\n  }\n"]);return m=function(){return n},n}var f=u.a.header(m());var h=function(){return a.a.createElement(f,null,a.a.createElement("img",{src:d.a,className:"header-logo",alt:"logo"}),a.a.createElement("h1",{className:"header-title"},"Challenge from React."))};function g(){var n=Object(l.a)(["\n  background: ",";\n  border: 2px solid #282c34;\n  color: ",";\n  font-size: 1.8em;\n  font-weight: ",";\n  line-height: 50px;\n  height: 50px;\n  margin-right: -2px;\n  margin-top: -2px;\n  padding: 0;\n  text-align: center;\n  width: 50px;\n  :focus {\n    outline: none;\n  }\n"]);return g=function(){return n},n}var p=u.a.button(g(),(function(n){return n.win?"#282c34":"white"}),(function(n){return n.win?"white":"#282c34"}),(function(n){return n.win?"600":"100"}));var w=function(n){return a.a.createElement(p,{onClick:n.onClick,win:n.win},n.value)};function v(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: auto auto auto;\n  margin: 5em auto 0;\n  width: 144px;\n"]);return v=function(){return n},n}var x=u.a.div(v());var b=function(n){var e=n.squaresList,t=n.onClick,r=e.map((function(n,e){return a.a.createElement(w,{key:e,value:n,win:!1,onClick:function(){return t(e)}})}));return a.a.createElement(x,null,r)};var k=function(){var n=Object(r.useState)(Array(9).fill(null)),e=Object(c.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)(!0),l=Object(c.a)(i,2),u=l[0],s=l[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(h,null),a.a.createElement(b,{squaresList:t,onClick:function(n){return function(n){var e=t;e[n]||(s(!u),e[n]=u?"X":"O",o(e))}(n)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},9:function(n,e,t){n.exports=t.p+"static/media/logo.5d5d9eef.svg"}},[[13,1,2]]]);
//# sourceMappingURL=main.ab0754ca.chunk.js.map