(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68de5a97"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,n){var r=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"841c":function(e,t,n){"use strict";var r=n("d784"),a=n("825a"),i=n("1d80"),c=n("129f"),o=n("14c3");r("search",1,(function(e,t,n){return[function(t){var n=i(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var i=a(e),l=String(this),s=i.lastIndex;c(s,0)||(i.lastIndex=0);var u=o(i,l);return c(i.lastIndex,s)||(i.lastIndex=s),null===u?-1:u.index}]}))},9263:function(e,t,n){"use strict";var r=n("ad6d"),a=RegExp.prototype.exec,i=String.prototype.replace,c=a,o=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=void 0!==/()??/.exec("")[1],s=o||l;s&&(c=function(e){var t,n,c,s,u=this;return l&&(n=new RegExp("^"+u.source+"$(?!\\s)",r.call(u))),o&&(t=u.lastIndex),c=a.call(u,e),o&&c&&(u.lastIndex=u.global?c.index+c[0].length:t),l&&c&&c.length>1&&i.call(c[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(c[s]=void 0)})),c}),e.exports=c},d784:function(e,t,n){"use strict";var r=n("9112"),a=n("6eeb"),i=n("d039"),c=n("b622"),o=n("9263"),l=c("species"),s=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var v=c(e),f=!i((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),p=f&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return t=!0,null},n[v](""),!t}));if(!f||!p||"replace"===e&&!s||"split"===e&&!u){var x=/./[v],h=n(v,""[e],(function(e,t,n,r,a){return t.exec===o?f&&!a?{done:!0,value:x.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}})),_=h[0],m=h[1];a(String.prototype,e,_),a(RegExp.prototype,v,2==t?function(e,t){return m.call(e,this,t)}:function(e){return m.call(e,this)}),d&&r(RegExp.prototype[v],"sham",!0)}}},e81dd:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",column:""}},[n("v-flex",{staticStyle:{overflow:"auto"},attrs:{"d-flex":"",xs12:"","py-1":""}},[n("v-card",{attrs:{id:"table"}},[n("v-data-table",{attrs:{headers:e.headers,items:e.filteredDevices,search:e.search,"disable-initial-sort":"","hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[e.$vuetify.breakpoint.xsOnly?n("tr",{on:{click:function(n){return e.onTableClick(t.item.dev_id)}}},[n("td",[e._v(e._s(t.item.locationDesc))]),n("td",[e._v(e._s(e._f("human")(t.item.type_name)))]),n("td",[0===t.item.status?n("v-icon",{attrs:{color:"green"}},[e._v("check_circle")]):n("v-icon",{attrs:{color:"red darken-1"}},[e._v("error")])],1)]):n("tr",{on:{click:function(n){return e.onTableClick(t.item.dev_id)}}},[n("td",[e._v(e._s(t.item.citymun_desc))]),n("td",[e._v(e._s(t.item.province_desc))]),n("td",[e._v(e._s(t.item.locationDesc))]),n("td",[e._v(e._s(e._f("human")(t.item.type_name)))]),n("td",[0===t.item.status?n("v-icon",{attrs:{color:"green"}},[e._v("check_circle")]):n("v-icon",{attrs:{color:"red darken-1"}},[e._v("error")])],1)])]}}])})],1)],1)],1)},a=[],i=(n("d81d"),n("841c"),n("a766")),c={name:"DeviceList",props:["search","devices","statuses","types"],mixins:[i["e"]],created:function(){console.log("created DevicesList")},computed:{filteredDevices:function(){var e=this.$_searchMixin_devicesFilter(this.devices,this.search,this.statuses,this.types);return this.$vuetify.breakpoint.xsOnly&&(e=e.map((function(e){return{dev_id:e["dev_id"],locationDesc:e["citymun_desc"],status:e["status"],type_name:e["type_name"]}}))),e},headers:function(){return this.$vuetify.breakpoint.xsOnly?[{text:"Location",align:"left",value:"locationDesc"},{text:"Type",align:"left",value:"type_name"},{text:"Status",align:"left",value:"status"}]:[{text:"City/Municipality",align:"left",value:"citymun_desc"},{text:"Province",align:"left",value:"province_desc"},{text:"Location",align:"left",value:"locationDesc"},{text:"Type",align:"left",value:"type_name"},{text:"Status",align:"left",value:"status"}]}},data:function(){return{dialog:!1}},watch:{},methods:{onTableClick:function(e){this.$emit("device-selected",e)}},filters:{human:function(e){return"VAISALA"===e||"UAAWS"===e||"BSWM_Lufft"===e||"UPAWS"===e?"AWS":"Rain1"===e||"Rain2"===e?"ARG":"Waterlevel"===e?"WLMS":"Waterlevel & Rain 2"===e?"TNDM":e}}},o=c,l=n("2877"),s=n("6544"),u=n.n(s),d=n("b0af"),v=n("8fea"),f=n("0e8f"),p=n("132d"),x=n("a722"),h=Object(l["a"])(o,r,a,!1,null,"33fb7a59",null);t["default"]=h.exports;u()(h,{VCard:d["a"],VDataTable:v["a"],VFlex:f["a"],VIcon:p["a"],VLayout:x["a"]})}}]);