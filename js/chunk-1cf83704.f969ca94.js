(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cf83704"],{"0335":function(t,e,o){"use strict";var n=o("f7dd"),i=o.n(n);i.a},"81aa":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:{withOutNav:t.$vuetify.breakpoint.smAndDown,withOutNavMd:t.$vuetify.breakpoint.mdOnly,withNav:t.$vuetify.breakpoint.lgAndUp}},[o("l-map",{attrs:{id:"map",zoom:t.zoom,center:t.center,"max-zoom":t.maxZoom,"min-zoom":t.minZoom,options:{zoomControl:!1,preferCanvas:!1,attributionControl:!1}},on:{"update:zoom":t.onUpdateMapZoom}},[o("l-control-zoom",{attrs:{position:"bottomright"}}),o("l-control-layers",{attrs:{position:t.layersPosition,"sort-layers":!0}}),o("l-tile-layer",{attrs:{url:t.url}}),o("l-control",{attrs:{position:"bottomright"}},t._l(t.layers,(function(e){return o("l-layer-group",{attrs:{"layer-type":"overlay",name:e.name}},t._l(e.devices,(function(n){return o("l-marker",{attrs:{"lat-lng":[n.posx,n.posy],icon:0===n.status?e.icon:e.icon_disabled},on:{click:function(e){return t.onclick(n.dev_id)}}},[o("l-tooltip",{attrs:{content:t.getTooltip(n)}})],1)})),1)})),1)],1)],1)},i=[],r=(o("99af"),o("7db0"),o("841c"),o("2253")),s=o("2699"),a=o("a40a"),c=o("4e2b"),p=o("31dc"),u=o("e11e"),d=function(t){return t&&"function"===typeof t.charAt?t.charAt(0).toUpperCase()+t.slice(1):t},l=function(t,e,o,n){var i=function(n){var i="set"+d(n),r=o[n].type===Object||o[n].type===Array||Array.isArray(o[n].type);o[n].custom&&t[i]?t.$watch(n,(function(e,o){t[i](e,o)}),{deep:r}):"setOptions"===i?t.$watch(n,(function(t,o){Object(u["setOptions"])(e,t)}),{deep:r}):e[i]&&t.$watch(n,(function(t,o){e[i](t)}),{deep:r})};for(var r in o)i(r)},h=function(t){var e={};for(var o in t){var n=t[o];null!==n&&void 0!==n&&(e[o]=n)}return e},f=function(t,e){var o=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var n=h(o);t=h(t);var i=e.$options.props;for(var r in t){var s=i[r]?i[r].default:Symbol("unique");n[r]&&s!==t[r]?(console.warn(r+" props is overriding the value passed in the options props"),n[r]=t[r]):n[r]||(n[r]=t[r])}return n},v=function(t){var e=!1;while(t&&!e)void 0===t.mapObject?t=t.$parent:e=!0;return t},m={props:{content:{type:String,default:null,custom:!0}},mounted:function(){this.popperOptions={}},methods:{setContent:function(t){this.mapObject&&null!==t&&void 0!==t&&this.mapObject.setContent(t)}},render:function(t){return this.$slots.default?t("div",this.$slots.default):null}},y={props:{options:{type:Object,default:function(){return{}}}}},b={name:"LPopup",mixins:[m,y],props:{latLng:{type:[Object,Array],default:function(){return[]}}},mounted:function(){var t=this,e=f(this.popperOptions,this);this.mapObject=Object(u["popup"])(e),void 0!==this.latLng&&this.mapObject.setLatLng(this.latLng),u["DomEvent"].on(this.mapObject,this.$listeners),l(this,this.mapObject,this.$options.props),this.mapObject.setContent(this.content||this.$el),this.parentContainer=v(this.$parent),this.parentContainer.mapObject.bindPopup(this.mapObject),this.$nextTick((function(){t.$emit("ready",t.mapObject)}))},beforeDestroy:function(){this.parentContainer&&(this.parentContainer.unbindPopup?this.parentContainer.unbindPopup():this.parentContainer.mapObject&&this.parentContainer.mapObject.unbindPopup&&this.parentContainer.mapObject.unbindPopup())}};function O(t,e,o,n,i,r,s,a,c,p){"boolean"!==typeof s&&(c=a,a=s,s=!1);var u,d="function"===typeof o?o.options:o;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,i&&(d.functional=!0)),n&&(d._scopeId=n),r?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=u):e&&(u=s?function(){e.call(this,p(this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),u)if(d.functional){var l=d.render;d.render=function(t,e){return u.call(e),l(t,e)}}else{var h=d.beforeCreate;d.beforeCreate=h?[].concat(h,u):[u]}return o}var _=O,g=b,C=void 0,$=void 0,j=void 0,L=void 0,T=_({},C,g,$,L,j,void 0,void 0),w=T,S=function(t){return t&&"function"===typeof t.charAt?t.charAt(0).toUpperCase()+t.slice(1):t},x=function(t,e,o,n){var i=function(n){var i="set"+S(n),r=o[n].type===Object||o[n].type===Array||Array.isArray(o[n].type);o[n].custom&&t[i]?t.$watch(n,(function(e,o){t[i](e,o)}),{deep:r}):"setOptions"===i?t.$watch(n,(function(t,o){Object(u["setOptions"])(e,t)}),{deep:r}):e[i]&&t.$watch(n,(function(t,o){e[i](t)}),{deep:r})};for(var r in o)i(r)},z=function(t){var e={};for(var o in t){var n=t[o];null!==n&&void 0!==n&&(e[o]=n)}return e},A=function(t,e){var o=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var n=z(o);t=z(t);var i=e.$options.props;for(var r in t){var s=i[r]?i[r].default:Symbol("unique");n[r]&&s!==t[r]?(console.warn(r+" props is overriding the value passed in the options props"),n[r]=t[r]):n[r]||(n[r]=t[r])}return n},R={props:{position:{type:String,default:"topright"}},mounted:function(){this.controlOptions={position:this.position}},beforeDestroy:function(){this.mapObject&&this.mapObject.remove()}},k={props:{options:{type:Object,default:function(){return{}}}}},U={name:"LControlZoom",mixins:[R,k],props:{zoomInText:{type:String,default:"+"},zoomInTitle:{type:String,default:"Zoom in"},zoomOutText:{type:String,default:"-"},zoomOutTitle:{type:String,default:"Zoom out"}},mounted:function(){var t=this,e=A(Object.assign({},this.controlOptions,{zoomInText:this.zoomInText,zoomInTitle:this.zoomInTitle,zoomOutText:this.zoomOutText,zoomOutTitle:this.zoomOutTitle}),this);this.mapObject=u["control"].zoom(e),x(this,this.mapObject,this.$options.props),this.mapObject.addTo(this.$parent.mapObject),this.$nextTick((function(){t.$emit("ready",t.mapObject)}))},render:function(){return null}};function E(t,e,o,n,i,r,s,a,c,p){"boolean"!==typeof s&&(c=a,a=s,s=!1);var u,d="function"===typeof o?o.options:o;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,i&&(d.functional=!0)),n&&(d._scopeId=n),r?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=u):e&&(u=s?function(){e.call(this,p(this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),u)if(d.functional){var l=d.render;d.render=function(t,e){return u.call(e),l(t,e)}}else{var h=d.beforeCreate;d.beforeCreate=h?[].concat(h,u):[u]}return o}var M=E,I=U,Z=void 0,P=void 0,F=void 0,D=void 0,B=M({},Z,I,P,D,F,void 0,void 0),N=B,G=function(t){return t&&"function"===typeof t.charAt?t.charAt(0).toUpperCase()+t.slice(1):t},V=function(t,e,o,n){var i=function(n){var i="set"+G(n),r=o[n].type===Object||o[n].type===Array||Array.isArray(o[n].type);o[n].custom&&t[i]?t.$watch(n,(function(e,o){t[i](e,o)}),{deep:r}):"setOptions"===i?t.$watch(n,(function(t,o){Object(u["setOptions"])(e,t)}),{deep:r}):e[i]&&t.$watch(n,(function(t,o){e[i](t)}),{deep:r})};for(var r in o)i(r)},W=function(t){var e={};for(var o in t){var n=t[o];null!==n&&void 0!==n&&(e[o]=n)}return e},X=function(t,e){var o=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var n=W(o);t=W(t);var i=e.$options.props;for(var r in t){var s=i[r]?i[r].default:Symbol("unique");n[r]&&s!==t[r]?(console.warn(r+" props is overriding the value passed in the options props"),n[r]=t[r]):n[r]||(n[r]=t[r])}return n},q={props:{position:{type:String,default:"topright"}},mounted:function(){this.controlOptions={position:this.position}},beforeDestroy:function(){this.mapObject&&this.mapObject.remove()}},J={props:{options:{type:Object,default:function(){return{}}}}},H={name:"LControlLayers",mixins:[q,J],props:{collapsed:{type:Boolean,default:!0},autoZIndex:{type:Boolean,default:!0},hideSingleBase:{type:Boolean,default:!1},sortLayers:{type:Boolean,default:!1},sortFunction:{type:Function,default:void 0}},mounted:function(){var t=this,e=X(Object.assign({},this.controlOptions,{collapsed:this.collapsed,autoZIndex:this.autoZIndex,hideSingleBase:this.hideSingleBase,sortLayers:this.sortLayers,sortFunction:this.sortFunction}),this);this.mapObject=u["control"].layers(null,null,e),V(this,this.mapObject,this.$options.props),this.$parent.registerLayerControl(this),this.$nextTick((function(){t.$emit("ready",t.mapObject)}))},methods:{addLayer:function(t){"base"===t.layerType?this.mapObject.addBaseLayer(t.mapObject,t.name):"overlay"===t.layerType&&this.mapObject.addOverlay(t.mapObject,t.name)},removeLayer:function(t){this.mapObject.removeLayer(t.mapObject)}},render:function(){return null}};function K(t,e,o,n,i,r,s,a,c,p){"boolean"!==typeof s&&(c=a,a=s,s=!1);var u,d="function"===typeof o?o.options:o;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,i&&(d.functional=!0)),n&&(d._scopeId=n),r?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=u):e&&(u=s?function(){e.call(this,p(this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),u)if(d.functional){var l=d.render;d.render=function(t,e){return u.call(e),l(t,e)}}else{var h=d.beforeCreate;d.beforeCreate=h?[].concat(h,u):[u]}return o}var Q=K,Y=H,tt=void 0,et=void 0,ot=void 0,nt=void 0,it=Q({},tt,Y,et,nt,ot,void 0,void 0),rt=it,st=o("1ebb"),at=o("18ba"),ct=o("a766"),pt={name:"DeviceMap",props:["search","devices","status"],mixins:[ct["e"],ct["c"]],created:function(){console.log("created DevicesMap"),this.refreshMapOptions(),this.refreshLayerGroups()},components:{LControl:r["a"],LMap:s["a"],LTileLayer:a["a"],LMarker:c["a"],LTooltip:p["a"],LPopup:w,LControlZoom:N,LControlLayers:rt,LLayerGroup:st["a"]},mounted:function(){},data:function(){return{zoom:1,maxZoom:12,minZoom:5,center:[],url:"http://v2.geoportal.gov.ph/tiles/v2/PGP/{z}/{x}/{y}.png",layersPosition:"topright",layers:{raingauge:{name:"Rain Gauges",devices:[],icon:at["t"],icon_disabled:at["s"]},waterlevel:{name:"Water Level Station",devices:[],icon:at["i"],icon_disabled:at["h"]},tandem:{name:"Tandem",devices:[],icon:at["W"],icon_disabled:at["V"]},aws:{name:"Automated Weather Station",devices:[],icon:at["U"],icon_disabled:at["T"]}}}},watch:{devices:function(t,e){null==t||this.refreshLayerGroups()},search:function(t,e){console.log("search Updating ".concat(e," to ").concat(t)),this.refreshLayerGroups()},status:function(t,e){console.log("status Updating ".concat(e," to ").concat(t)),this.refreshLayerGroups()}},methods:{getTooltip:function(t){return"".concat(t.citymun_desc," - ").concat(t.locationDesc," (").concat(t.dev_id,")")},onclick:function(t){this.$emit("device-selected",t)},refreshLayerGroups:function(){this.layers.raingauge.devices=[],this.layers.waterlevel.devices=[],this.layers.tandem.devices=[],this.layers.aws.devices=[];for(var t=0;t<this.devices.length;t++){var e=this.devices[t];if(null==this.search||!1!==this.$_searchMixin_deviceFilter(e,this.search,this.status))switch(e.type_name){case"Rain1":case"Rain2":this.layers.raingauge.devices.push(e);break;case"Waterlevel":this.layers.waterlevel.devices.push(e);break;case"Waterlevel & Rain 2":this.layers.tandem.devices.push(e);break;case"BSWM_Lufft":case"VAISALA":case"UAAWS":this.layers.aws.devices.push(e);break}}},refreshMapOptions:function(){var t=this;this.zoom=at["a"].find((function(e){return e.regCode===t.regCode})).zoomLevel,this.center=at["a"].find((function(e){return e.regCode===t.regCode})).center},onUpdateMapCenter:function(t){},onUpdateMapZoom:function(t){this.zoom=t},onDblClick:function(t){t.stopPropagation()},onRegCodeChange:function(){console.log("DeviceMap.vue onRegCodeChange()"),this.refreshMapOptions()}}},ut=pt,dt=(o("0335"),o("2877")),lt=Object(dt["a"])(ut,n,i,!1,null,"d094d25e",null);e["default"]=lt.exports},f7dd:function(t,e,o){}}]);