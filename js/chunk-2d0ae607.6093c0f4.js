(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ae607"],{"0a99":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("This is ME.vue")]),n("h2",[t._v("Hello "+t._s(t.username))]),n("p",[t._v(t._s(t.testApi))])])},i=[],u=n("f3f3"),a=n("2f62"),c=n("d722"),r={name:"Me",computed:Object(u["a"])({},Object(a["b"])(["username"])),mounted:function(){var t=this;Object(c["G"])().then((function(e){t.testApi=JSON.stringify(e.data)})).catch((function(e){t.testApi=JSON.stringify(e.response)}))},data:function(){return{testApi:""}}},o=r,f=n("2877"),p=Object(f["a"])(o,s,i,!1,null,null,null);e["default"]=p.exports}}]);