(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-745e9107"],{"0391":function(e,t,r){},"0396":function(e,t,r){"use strict";var n=r("0391"),o=r.n(n);o.a},"9b82":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[e.componentError?r("v-btn",{style:{left:"50%",transform:"translate(-50%, 100%)","z-index":5},attrs:{absolute:"",top:"",color:"error"},on:{click:function(t){return e.tryAgainMarker()}}},[e._v("Try Again ")]):e._e()],1),r("v-flex",{attrs:{xs12:""}},[r("div",{class:{withOutNav:e.$vuetify.breakpoint.smAndDown,withOutNavMd:e.$vuetify.breakpoint.mdOnly,withNav:e.$vuetify.breakpoint.lgAndUp}},[e.regCode?r("l-map",{attrs:{id:"map",zoom:e.zoom,center:e.center,crs:e.crs,"min-zoom":e.minZoom,options:{zoomControl:!1,preferCanvas:!0,doubleClickZoom:!1,attributionControl:!1}},on:{"update:zoom":e.onUpdateMapZoom}},[r("l-tile-layer",{attrs:{url:e.url}}),r("l-control-zoom",{attrs:{position:"topright"}}),r("l-control",{attrs:{position:"topleft",id:"control-container"}},[r("v-layout",{attrs:{wrap:"","fill-height":""}},[r("v-card",{staticClass:"pa-2 ma-0"},[r("v-flex",{attrs:{xs12:"","d-flex":""}},[r("v-select",{staticClass:"pa-0",attrs:{items:e.markers,label:"Marker:","prepend-icon":e.markerPrependIcon,"hide-details":"","single-line":""},model:{value:e.activeMarker,callback:function(t){e.activeMarker=t},expression:"activeMarker"}})],1),r("v-flex",{attrs:{xs12:"","d-flex":""}},[r("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-text-field",e._g({staticClass:"pa-0",staticStyle:{"min-width":"230px","max-width":"230px"},attrs:{value:e.computedDateFormattedMomentjs(e.selectedDate),"prepend-icon":"event",label:"Date:",clearable:"","persistent-hint":"","hide-details":"",readonly:"","single-line":""},on:{"click:clear":e.onDateClear}},n))]}}],null,!1,3830865609),model:{value:e.menuDate,callback:function(t){e.menuDate=t},expression:"menuDate"}},[r("v-date-picker",{attrs:{max:e.maxDateWMO,"no-title":"",scrollable:""},on:{input:e.onDateInput},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)],1)],1)],1)],1),""!==e.activeMarker?r(e.activeMarker,{tag:"component",attrs:{regCode:e.regCode,"archive-date":e.selectedDate},on:{"error-server":function(t){return e.onComponentError()},loaded:function(t){return e.onLoaded()}}}):e._e()],1):e._e()],1)])],1)},o=[],a=(r("a4d3"),r("99af"),r("4de4"),r("7db0"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),i=r("2699"),c=r("a40a"),l=r("2253"),s=r("c8b6"),u=r("a766"),p=r("18ba"),d=r("0261"),f=r("2ed7"),m=r("3b9c"),v=r("2f62");function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g={name:"ArchiveMap",components:{LMap:i["a"],LTileLayer:c["a"],LControl:l["a"],LControlZoom:s["a"],MapRain:f["a"],MapWaterLevel:m["a"]},mixins:[u["c"],d["a"]],created:function(){console.log("created ArchiveMap"),""!==this.tilelayer&&null!==this.tilelayer&&(this.url=this.tilelayer),this.refreshMapOptions()},computed:b({},Object(v["b"])({tilelayer:"getHomeMapTileLayer"}),{crs:function(){return L.CRS.EPSG3857},mapName:function(){var e=this;return this.tilesets.find((function(t){return t.url===e.url})).name},markerPrependIcon:function(){return"cloud"}}),data:function(){return{zoom:8,minZoom:5,center:[],url:"",componentError:!1,markers:[{text:"Rainfall",value:"MapRain"},{text:"Waterlevel",value:"MapWaterLevel"}],activeMarker:"",menuDate:"",selectedDate:""}},methods:{onUpdateMapZoom:function(e){console.log("zoom changed ".concat(e)),this.zoom=e},refreshMapOptions:function(){var e=this;null!=this.regCode&&(this.zoom=p["a"].find((function(t){return t.regCode===e.regCode})).zoomLevel,this.center=p["a"].find((function(t){return t.regCode===e.regCode})).center,console.log("refreshMapOptions regCode: ".concat(this.deviceRegion.regCode," Codezoom:").concat(this.zoom," ").concat(this.center)))},onRegCodeChange:function(){console.log("Home.vue onRegCodeChange()"),this.refreshMapOptions(),this.componentError=!1},onDateInput:function(e){this.menuDate=!1},onDateClear:function(){this.selectedDate=""},onLoaded:function(){this.componentError=!1},onComponentError:function(){this.componentError=!0},tryAgainMarker:function(){var e=this,t=this.activeMarker;this.activeMarker="",this.componentError=!1,this.$nextTick((function(){e.activeMarker=t}))}}},k=g,y=(r("0396"),r("2877")),C=r("6544"),M=r.n(C),x=r("8336"),O=r("b0af"),D=r("2e4b"),w=r("0e8f"),j=r("a722"),z=r("e449"),E=r("b56d"),P=r("2677"),V=Object(y["a"])(k,n,o,!1,null,"0b4301d1",null);t["default"]=V.exports;M()(V,{VBtn:x["a"],VCard:O["a"],VDatePicker:D["a"],VFlex:w["a"],VLayout:j["a"],VMenu:z["a"],VSelect:E["a"],VTextField:P["a"]})}}]);