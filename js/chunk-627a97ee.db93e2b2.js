(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-627a97ee"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,n){var o=n("c6b6"),r=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var a=n.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==o(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"81aa":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{withOutNav:e.$vuetify.breakpoint.smAndDown,withOutNavMd:e.$vuetify.breakpoint.mdOnly,withNav:e.$vuetify.breakpoint.lgAndUp}},[n("l-map",{attrs:{id:"map",zoom:e.zoom,center:e.center,"min-zoom":e.minZoom,options:{zoomControl:!1,preferCanvas:!1,attributionControl:!1}},on:{"update:zoom":e.onUpdateMapZoom}},[n("l-tile-layer",{attrs:{url:e.url}}),n("l-control-zoom",{attrs:{position:"topright"}}),n("l-control",{attrs:{position:"bottomright"}},e._l(e.layers,(function(t){return n("l-layer-group",{key:t.name,attrs:{"layer-type":"overlay",name:t.name}},e._l(t.devices,(function(o,r){return n("l-marker",{key:r,attrs:{"lat-lng":[o.posx,o.posy],icon:0===o.status?t.icon:t.icon_disabled},on:{click:function(t){return e.onclick(o.dev_id)}}})})),1)})),1)],1)],1)},r=[],a=(n("a4d3"),n("99af"),n("4de4"),n("7db0"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("ac1f"),n("841c"),n("159b"),n("ade3")),i=n("2253"),s=n("2699"),c=n("a40a"),l=n("4e2b"),u=n("f60f"),p=n("c8b6"),d=n("e11e"),f=function(e){return e&&"function"===typeof e.charAt?e.charAt(0).toUpperCase()+e.slice(1):e},h=function(e,t,n,o){var r=function(o){var r="set"+f(o),a=n[o].type===Object||n[o].type===Array||Array.isArray(n[o].type);n[o].custom&&e[r]?e.$watch(o,(function(t,n){e[r](t,n)}),{deep:a}):"setOptions"===r?e.$watch(o,(function(e,n){Object(d["setOptions"])(t,e)}),{deep:a}):t[r]&&e.$watch(o,(function(e,n){t[r](e)}),{deep:a})};for(var a in n)r(a)},v=function(e){var t={};for(var n in e){var o=e[n];null!==o&&void 0!==o&&(t[n]=o)}return t},y=function(e,t){var n=t.options&&t.options.constructor===Object?t.options:{};e=e&&e.constructor===Object?e:{};var o=v(n);e=v(e);var r=t.$options.props;for(var a in e){var i=r[a]?r[a].default:Symbol("unique");o[a]&&i!==e[a]?(console.warn(a+" props is overriding the value passed in the options props"),o[a]=e[a]):o[a]||(o[a]=e[a])}return o},b={props:{position:{type:String,default:"topright"}},mounted:function(){this.controlOptions={position:this.position}},beforeDestroy:function(){this.mapObject&&this.mapObject.remove()}},m={props:{options:{type:Object,default:function(){return{}}}}},g={name:"LControlLayers",mixins:[b,m],props:{collapsed:{type:Boolean,default:!0},autoZIndex:{type:Boolean,default:!0},hideSingleBase:{type:Boolean,default:!1},sortLayers:{type:Boolean,default:!1},sortFunction:{type:Function,default:void 0}},mounted:function(){var e=this,t=y(Object.assign({},this.controlOptions,{collapsed:this.collapsed,autoZIndex:this.autoZIndex,hideSingleBase:this.hideSingleBase,sortLayers:this.sortLayers,sortFunction:this.sortFunction}),this);this.mapObject=d["control"].layers(null,null,t),h(this,this.mapObject,this.$options.props),this.$parent.registerLayerControl(this),this.$nextTick((function(){e.$emit("ready",e.mapObject)}))},methods:{addLayer:function(e){"base"===e.layerType?this.mapObject.addBaseLayer(e.mapObject,e.name):"overlay"===e.layerType&&this.mapObject.addOverlay(e.mapObject,e.name)},removeLayer:function(e){this.mapObject.removeLayer(e.mapObject)}},render:function(){return null}};function x(e,t,n,o,r,a,i,s,c,l){"boolean"!==typeof i&&(c=s,s=i,i=!1);var u,p="function"===typeof n?n.options:n;if(e&&e.render&&(p.render=e.render,p.staticRenderFns=e.staticRenderFns,p._compiled=!0,r&&(p.functional=!0)),o&&(p._scopeId=o),a?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},p._ssrRegister=u):t&&(u=i?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),u)if(p.functional){var d=p.render;p.render=function(e,t){return u.call(t),d(e,t)}}else{var f=p.beforeCreate;p.beforeCreate=f?[].concat(f,u):[u]}return n}"undefined"!==typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var O=g,_=void 0,w=void 0,j=void 0,L=void 0,C=x({},_,O,w,L,j,!1,void 0,void 0,void 0),E=C,R=n("1ebb"),$=n("18ba"),S=n("a766"),k=n("2f62");function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P={name:"DeviceMap",props:["search","devices","statuses","types"],mixins:[S["e"],S["c"]],created:function(){console.log("created DevicesMap"),""!==this.tilelayer&&null!==this.tilelayer&&(this.url=this.tilelayer),this.refreshMapOptions(),this.refreshLayerGroups()},components:{LControl:i["a"],LMap:s["a"],LTileLayer:c["a"],LMarker:l["a"],LPopup:u["a"],LControlZoom:p["a"],LControlLayers:E,LLayerGroup:R["a"]},mounted:function(){},computed:A({},Object(k["b"])({tilelayer:"getHomeMapTileLayer"})),data:function(){return{zoom:1,maxZoom:18,minZoom:5,center:[],url:"",layersPosition:"topright",layers:{raingauge:{name:"Rain Gauges",devices:[],icon:$["C"],icon_disabled:$["B"]},waterlevel:{name:"Water Level Station",devices:[],icon:$["l"],icon_disabled:$["k"]},tandem:{name:"Tandem",devices:[],icon:$["pb"],icon_disabled:$["ob"]},aws:{name:"Automated Weather Station",devices:[],icon:$["nb"],icon_disabled:$["mb"]}}}},watch:{devices:function(e,t){console.log("devices Updating ".concat(t," to ").concat(e)),null==e||this.refreshLayerGroups()},search:function(e,t){console.log("search Updating ".concat(t," to ").concat(e)),this.refreshLayerGroups()},statuses:function(e,t){console.log("statuses Updating ".concat(t," to ").concat(e)),this.refreshLayerGroups()},types:function(e,t){console.log("types Updating ".concat(t," to ").concat(e)),this.refreshLayerGroups()}},methods:{onclick:function(e){this.$emit("device-selected",e)},refreshLayerGroups:function(){this.layers.raingauge.devices=[],this.layers.waterlevel.devices=[],this.layers.tandem.devices=[],this.layers.aws.devices=[];for(var e=0;e<this.devices.length;e++){var t=this.devices[e];if(!1!==this.$_searchMixin_deviceFilter(t,this.search,this.statuses,this.types))switch(t.type_name){case"Rain1":case"Rain2":this.layers.raingauge.devices.push(t);break;case"Waterlevel":this.layers.waterlevel.devices.push(t);break;case"Waterlevel & Rain 2":this.layers.tandem.devices.push(t);break;case"BSWM_Lufft":case"VAISALA":case"UAAWS":this.layers.aws.devices.push(t);break}}},refreshMapOptions:function(){var e=this;this.zoom=$["a"].find((function(t){return t.regCode===e.regCode})).zoomLevel,this.center=$["a"].find((function(t){return t.regCode===e.regCode})).center},onUpdateMapCenter:function(e){},onUpdateMapZoom:function(e){this.zoom=e},onDblClick:function(e){e.stopPropagation()},onRegCodeChange:function(){console.log("DeviceMap.vue onRegCodeChange()"),this.refreshMapOptions()}}},T=P,U=(n("a2b4"),n("2877")),M=Object(U["a"])(T,o,r,!1,null,"4be2e4c3",null);t["default"]=M.exports},"841c":function(e,t,n){"use strict";var o=n("d784"),r=n("825a"),a=n("1d80"),i=n("129f"),s=n("14c3");o("search",1,(function(e,t,n){return[function(t){var n=a(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,n):new RegExp(t)[e](String(n))},function(e){var o=n(t,e,this);if(o.done)return o.value;var a=r(e),c=String(this),l=a.lastIndex;i(l,0)||(a.lastIndex=0);var u=s(a,c);return i(a.lastIndex,l)||(a.lastIndex=l),null===u?-1:u.index}]}))},9263:function(e,t,n){"use strict";var o=n("ad6d"),r=n("9f7f"),a=RegExp.prototype.exec,i=String.prototype.replace,s=a,c=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],p=c||u||l;p&&(s=function(e){var t,n,r,s,p=this,d=l&&p.sticky,f=o.call(p),h=p.source,v=0,y=e;return d&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),y=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(h="(?: "+h+")",y=" "+y,v++),n=new RegExp("^(?:"+h+")",f)),u&&(n=new RegExp("^"+h+"$(?!\\s)",f)),c&&(t=p.lastIndex),r=a.call(d?n:p,y),d?r?(r.input=r.input.slice(v),r[0]=r[0].slice(v),r.index=p.lastIndex,p.lastIndex+=r[0].length):p.lastIndex=0:c&&r&&(p.lastIndex=p.global?r.index+r[0].length:t),u&&r&&r.length>1&&i.call(r[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(r[s]=void 0)})),r}),e.exports=s},"9f7f":function(e,t,n){"use strict";var o=n("d039");function r(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=o((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=o((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a2b4:function(e,t,n){"use strict";var o=n("e0cf"),r=n.n(o);r.a},ac1f:function(e,t,n){"use strict";var o=n("23e7"),r=n("9263");o({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},d784:function(e,t,n){"use strict";n("ac1f");var o=n("6eeb"),r=n("d039"),a=n("b622"),i=n("9263"),s=n("9112"),c=a("species"),l=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),p=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var f=a(e),h=!r((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),v=h&&!r((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!h||!v||"replace"===e&&(!l||!u)||"split"===e&&!p){var y=/./[f],b=n(f,""[e],(function(e,t,n,o,r){return t.exec===i?h&&!r?{done:!0,value:y.call(t,n,o)}:{done:!0,value:e.call(n,t,o)}:{done:!1}}),{REPLACE_KEEPS_$0:u}),m=b[0],g=b[1];o(String.prototype,e,m),o(RegExp.prototype,f,2==t?function(e,t){return g.call(e,this,t)}:function(e){return g.call(e,this)})}d&&s(RegExp.prototype[f],"sham",!0)}},e0cf:function(e,t,n){}}]);