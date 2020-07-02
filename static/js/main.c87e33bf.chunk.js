(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],{13:function(n,e,t){n.exports=t.p+"static/media/arrow-top.4d95a11f.svg"},14:function(n,e,t){n.exports=t.p+"static/media/arrow-down.08d0b185.svg"},15:function(n,e,t){n.exports=t(23)},20:function(n,e,t){},23:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(8),i=t.n(o),c=(t(20),t(3)),l=t(1),u=t(2),s=t(9),d=t.n(s);function m(){var n=Object(l.a)(["\n  background-color: #282c34;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 0 10px 1px;\n  height: 50px;\n  padding: 10px;\n  .header-logo {\n    height: 50px;\n    width: 50px;\n  }\n  .header-title {\n    color: white;\n    font-size: 1.1em;\n    margin: 0;\n  }\n  @media (prefers-reduced-motion: no-preference) {\n    .header-logo {\n      animation: header-logo-spin infinite 20s linear;\n    }\n  }\n  @keyframes header-logo-spin {\n    from {transform: rotate(0deg);}\n    to {transform: rotate(360deg);}\n  }\n"]);return m=function(){return n},n}var f=u.a.header(m());var g=function(){return a.a.createElement(f,null,a.a.createElement("img",{src:d.a,className:"header-logo",alt:"logo"}),a.a.createElement("h1",{className:"header-title"},"React Tic Tac Toe challenge"))};function p(){var n=Object(l.a)(["\n  background: ",";\n  border: 2px solid #282c34;\n  color: ",";\n  font-size: 1.8em;\n  font-weight: bold;\n  line-height: 50px;\n  height: 50px;\n  margin-right: -2px;\n  margin-top: -2px;\n  padding: 0;\n  text-align: center;\n  width: 50px;\n  cursor: pointer;\n  :focus {\n    outline: none;\n  }\n"]);return p=function(){return n},n}var h=u.a.button(p(),(function(n){return n.win?"#282c34":"white"}),(function(n){return n.win?"white":"#282c34"}));var v=function(n){return a.a.createElement(h,{onClick:n.onClick,win:n.win},n.value)};function b(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: auto auto auto;\n  margin: 0 auto;\n  width: 144px;\n"]);return b=function(){return n},n}var w=u.a.div(b());var x=function(n){var e=n.history,t=n.step,r=n.winner,o=n.onClick,i=e[t].squaresList.map((function(n,e){for(var t=!1,i=0;i<r.length;i++)r&&r[i]===e&&(t=!0);return a.a.createElement(v,{key:e,value:n,win:t,onClick:function(){return o(e)}})}));return a.a.createElement(w,null,i)};function k(){var n=Object(l.a)(["\n  font-size: 1.5em;\n  margin: 1.5em auto;\n  text-align: center;\n  font-weight: bold;\n"]);return k=function(){return n},n}var E=u.a.div(k());var O=function(n){var e=n.status,t="";switch(e.winner){case"Dead heat":t=e.winner;break;default:t=e.winner?"Winner: "+e.winner:"Next player: "+e.turn}return a.a.createElement(E,null,t)},j=t(13),y=t.n(j),S=t(14),q=t.n(S);function C(){var n=Object(l.a)(["\n  text-align: center;\n  margin: 1.5em auto;\n  .orderby {\n    cursor: pointer;\n    max-width: 200px;\n    padding: 0 2em;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    img {\n      width: 20px;\n      margin: 0 .5em;\n    }\n  }\n  ul {\n    list-style: none;\n    padding: 0;\n    li {\n      padding: 0;\n      button {\n        border-radius: 3px;\n        margin: 0 0 .3em 0;\n        padding: .5em 2em;\n        background-color: white;\n        border: none;\n        color: #282c34;\n        -webkit-transition: background-color .05s linear;\n        -ms-transition: background-color .05s linear;\n        transition: background-color .05s linear;\n        cursor: pointer;\n        border: 1px solid #282c34;\n        &:focus {\n          outline: none;\n        }\n        &:hover {\n          color: #282c34;\n          background-color: #60dbfb;\n        }\n        &.active {\n          color: white;\n          background-color: #282c34;\n        }\n      }\n    }\n  }\n"]);return C=function(){return n},n}var L=u.a.div(C());var N=function(n){var e=n.history,t=n.step,o=n.onClick,i=Object(r.useState)(!0),l=Object(c.a)(i,2),u=l[0],s=l[1],d=e.map((function(n,r){var i=Math.floor(e[r].squareSelected/3)+1,c=e[r].squareSelected%3+1,l=r?"Go to move #"+r+" (Row: "+i+", Col: "+c+")":"Go to game start";return a.a.createElement("li",{key:r},a.a.createElement("button",{className:t===r?"active":"",onClick:function(){return o(r)}},l))}));return a.a.createElement(L,null,a.a.createElement("div",{className:"orderby",onClick:function(){s(!u)}},"ORDER LIST",a.a.createElement("img",{src:u?y.a:q.a,alt:"arrow"})),a.a.createElement("ul",null,u?d.slice():d.slice().reverse()))};var R=function(){var n=Object(r.useState)(!0),e=Object(c.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)(!1),l=Object(c.a)(i,2),u=l[0],s=l[1],d=Object(r.useState)({turn:"X",winner:null}),m=Object(c.a)(d,2),f=m[0],p=m[1],h=Object(r.useState)(0),v=Object(c.a)(h,2),b=v[0],w=v[1],k=Object(r.useState)([{squaresList:Array(9).fill(null),squareSelected:null}]),E=Object(c.a)(k,2),j=E[0],y=E[1];return Object(r.useEffect)((function(){var n=function(n){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<e.length;t++){var r=Object(c.a)(e[t],3),a=r[0],o=r[1],i=r[2];if(n[a]&&n[a]===n[o]&&n[a]===n[i])return{winner:n[a],lines:e[t]}}return null}(j[b].squaresList);n?(s(n.lines),p({winner:n.winner})):(s(!1),p(b>8?{winner:"Dead heat"}:{turn:t?"X":"O"}))}),[j,b,t]),a.a.createElement(a.a.Fragment,null,a.a.createElement(g,null),a.a.createElement(O,{status:f}),a.a.createElement(x,{history:j,step:b,winner:u,onClick:function(n){return function(n){var e=j[b].squaresList[n];if(!u&&!e){var r=j.slice(0,b+1),a=r[r.length-1].squaresList.slice();a[n]=t?"X":"O",y(r.concat({squaresList:a,squareSelected:n})),w(r.length),o(!t)}}(n)}}),a.a.createElement(N,{history:j,step:b,onClick:function(n){return e=n,y(j.slice(0,e+1)),w(e),void o(e%2===0);var e}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},9:function(n,e,t){n.exports=t.p+"static/media/logo.5d5d9eef.svg"}},[[15,1,2]]]);
//# sourceMappingURL=main.c87e33bf.chunk.js.map