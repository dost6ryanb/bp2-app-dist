(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ae607"],{"0a99":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("This is ME.vue")]),r("h2",[e._v("Hello "+e._s(e.username))]),r("p",[e._v(e._s(e.testApi))])])},c=[],o=(r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),i=r("2f62"),s=r("d722");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p={name:"Me",computed:a({},Object(i["b"])(["username"])),mounted:function(){var e=this;Object(s["w"])().then((function(t){e.testApi=JSON.stringify(t.data)})).catch((function(t){e.testApi=JSON.stringify(t.response)}))},data:function(){return{testApi:""}}},b=p,f=r("2877"),O=Object(f["a"])(b,n,c,!1,null,null,null);t["default"]=O.exports}}]);