(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ae607"],{"0a99":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("This is ME.vue")]),n("h2",[e._v("Hello "+e._s(e.username))]),n("p",[e._v(e._s(e.testApi))])])},c=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=n("2f62"),s=n("d722");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach(function(t){Object(o["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var p={name:"Me",computed:a({},Object(i["b"])(["username"])),mounted:function(){var e=this;Object(s["n"])().then(function(t){e.testApi=JSON.stringify(t.data)}).catch(function(t){e.testApi=JSON.stringify(t.response)})},data:function(){return{testApi:""}}},f=p,O=n("2877"),b=Object(O["a"])(f,r,c,!1,null,null,null);t["default"]=b.exports}}]);