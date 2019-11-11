(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6828d5e8"],{"02d0":function(e,t,a){"use strict";var r=a("c64a"),n=a.n(r);n.a},3177:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{"align-start":"",row:"",wrap:""}},[a("v-flex",{staticClass:"hidden-md-and-up",attrs:{xs12:""}},[a("v-tabs",{model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},[a("v-tab",{key:"device"},[e._v("Device")]),a("v-tab",[e._v("Start Date")]),a("v-tab",[e._v("End Date")]),a("v-tab",[e._v("Result")])],1)],1),a("v-flex",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.mdAndUp||0===e.currentTab,expression:"$vuetify.breakpoint.mdAndUp || currentTab === 0 "}],attrs:{xs12:"",md6:""}},[a("device-tree",{staticClass:"ma-1",attrs:{id:"waterlevel-device-tree",items:e.deviceTreeItems,"selected-items":e.deviceTreeSelectedItems,"restore-items":e.deviceRestoreItems},on:{onselectionupdate:e.onSelectionUpdate}})],1),a("v-flex",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.mdAndUp||1===e.currentTab,expression:"$vuetify.breakpoint.mdAndUp || currentTab === 1"}],attrs:{xs12:"",md3:""}},[a("v-menu",{attrs:{"offset-y":"","full-width":"",lazy:"","min-width":"290px",transition:"scale-transition","close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-text-field",e._g({staticClass:"ma-1",attrs:{value:e.humanFormattedDateStr(e.dateStartPicker),label:"Date:",outline:"",readonly:"",disabled:""}},r))]}}]),model:{value:e.dateStartMenu,callback:function(t){e.dateStartMenu=t},expression:"dateStartMenu"}},[a("v-date-picker",{attrs:{max:e.nowDateISOStr,"no-title":"",scrollable:""},on:{input:function(t){e.dateStartMenu=!1}},model:{value:e.dateStartPicker,callback:function(t){e.dateStartPicker=t},expression:"dateStartPicker"}})],1)],1),a("v-flex",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.mdAndUp||2===e.currentTab,expression:"$vuetify.breakpoint.mdAndUp || currentTab === 2"}],attrs:{xs12:"",md3:""}},[a("v-menu",{attrs:{"offset-y":"","full-width":"",lazy:"","min-width":"290px",transition:"scale-transition","close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-text-field",e._g({staticClass:"ma-1",attrs:{value:e.humanFormattedDateStr(e.dateEndPicker),label:"Date:",outline:"",readonly:"",disabled:""}},r))]}}]),model:{value:e.dateEndMenu,callback:function(t){e.dateEndMenu=t},expression:"dateEndMenu"}},[a("v-date-picker",{attrs:{max:e.nowDateISOStr,"no-title":"",scrollable:""},on:{input:function(t){e.dateEndMenu=!1}},model:{value:e.dateEndPicker,callback:function(t){e.dateEndPicker=t},expression:"dateEndPicker"}})],1)],1),a("v-flex",{attrs:{xs12:"","d-flex":""}},[a("v-card",{staticClass:"my-1"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-btn",{attrs:{color:"primary",disabled:!e.isvalid},on:{click:e.loadWaterlevelDataForDevices}},[e._v("Load Waterlevel")]),a("v-btn",{on:{click:e.reset}},[e._v("Reset")])],1)],1)],1)],1),a("v-flex",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.mdAndUp||3===e.currentTab,expression:"$vuetify.breakpoint.mdAndUp || currentTab === 3"}],attrs:{xs12:"","d-flex":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"","d-flex":""}},[e.loading&&!e.errorRequest?a("v-layout",{attrs:{"justify-center":"","align-center":"","pa-1":"","ma-1":""}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):e.loaded&e.errorRequest?a("v-layout",{attrs:{"justify-center":"","align-center":"","pa-1":"","ma-1":""}},[a("v-btn",{attrs:{color:"error"},on:{click:e.loadWaterlevelDataForDevices}},[e._v("Try Again")])],1):e.loaded?e._e():a("v-layout",[a("v-flex",{staticClass:"grey lighten-4",attrs:{xs12:""}},[a("h2",{staticClass:"grey--text text--lighten-1 text-xs-center pa-3"},[e._v("Results Here")])])],1)],1),e.results.length>0?a("v-layout",{attrs:{row:"",wrap:""}},e._l(e.results,(function(e,t){return a("v-flex",{key:t,staticClass:"pt-3",attrs:{xs12:""}},[a("waterlevel-region-result",{attrs:{results:e.results,region:e.name}})],1)})),1):e._e()],1)],1)],1)},n=[],s=(a("a4d3"),a("4de4"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("2fa7")),i=a("c0d6"),o=a("2f62"),c=a("cc6d"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("region-result",{attrs:{results:e.results,region:e.region},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.device,r=e.chartWidth,n=e.chartHeight;return[a("waterlevel-chart",{staticClass:"chart-container",attrs:{width:r,height:n,title:[t.tooltip,t.datetimeread+" -- "+t.waterlevel/100+" m"],mydata:t.chart}})]}}])})},d=[],u=a("bdd7"),v=a("1fca"),f=a("30ef"),h=a.n(f),m=a("c1df"),p=a.n(m);h.a.Tooltip.positioners.cursor=function(e,t){return t};var b,g,x={name:"WaterlevelChart",extends:v["c"],props:["mydata","title"],mounted:function(){this.loadwaterlevelchart(this.mydata),this.lastbreakpoint=this.breakpoint},computed:{breakpoint:function(){return this.$vuetify.breakpoint.name}},data:function(){return{chartdata:{datasets:[]},options:{title:{display:!0,text:this.title},responsive:!1,maintainAspectRatio:!1,layout:{padding:10},scales:{xAxes:[{type:"time",distribution:"linear",time:{unit:"minute"},ticks:{source:"auto",autoSkip:!0,maxRotation:0,autoSkipPadding:20}}],yAxes:[{ticks:{min:0,suggestedMax:12}}]},tooltips:{mode:"index",position:"cursor",intersect:!1},plugins:{crosshair:{sync:{enabled:!1},zoom:{enabled:!1}}}},lastbreakpoint:""}},methods:{loadwaterlevelchart:function(e){var t=[];e.forEach((function(e){var a=p()(e[0],"YYYY-MM-DD HH:mm:ss");t.push({t:a.valueOf(),y:(e[1]/100).toFixed(2)})})),this.chartdata={datasets:[{label:"Waterlevel (m)",backgroundColor:"#8ad0ff",borderColor:"#1464f4",borderWidth:1,pointRadius:0,fill:"start",data:t}]},this.renderChart(this.chartdata,this.options)}},watch:{breakpoint:function(e,t){var a=this;this.lastbreakpoint!==e&&(this.lastbreakpoint=e,this._data._chart.destroy(),this.$nextTick((function(){a.renderChart(a.chartdata,a.options)})))}}},y=x,k=a("2877"),S=Object(k["a"])(y,b,g,!1,null,null,null),w=S.exports,D={name:"WaterlevelRegionResult",props:["results","region"],components:{RegionResult:u["a"],WaterlevelChart:w}},T=D,O=(a("02d0"),Object(k["a"])(T,l,d,!1,null,null,null)),C=O.exports,R=a("a766"),I=a("0261"),j=a("d722");function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){Object(s["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _={name:"Waterlevel",components:{DeviceTree:c["a"],WaterlevelRegionResult:C},mixins:[R["c"],I["a"]],computed:P({},Object(o["b"])(["getWaterlevelSavedSelectedItems"]),{isvalid:function(){return this.selectedDevID.length>0}}),created:function(){console.log("created Waterlevel"),this.loadWaterlevelDeviceTree(this.regCode)},data:function(){return{deviceTreeItems:[],deviceTreeSelectedItems:[],deviceRestoreItems:[],selectedDevID:[],dateStartPicker:(new Date).toISOString().substr(0,10),dateEndPicker:(new Date).toISOString().substr(0,10),dateStartMenu:!1,dateEndMenu:!1,loading:!1,loaded:!1,errorRequest:!1,results:[],currentTab:0}},methods:{loadWaterlevelDeviceTree:function(e){var t,a=this;i["a"].commit("showLoader"),i["a"].commit("clearErrors"),console.log("fetching waterlevel devices for regCode ".concat(e)),t="V"===e?Object(j["y"])():Object(j["z"])(e),t.then((function(e){i["a"].commit("hideLoader"),a.deviceTreeSelectedItems=[],a.deviceTreeItems=e.data,a.restoreSelectionFromStore(),a.$nextTick((function(){a.selectedDevID.length>0&&a.loadWaterlevelDataForDevices()}))})).catch((function(e){i["a"].commit("hideLoader"),i["a"].commit("setErrors",["Cannot connect to server. Please try again."])}))},saveSelectionToStore:function(e){var t={regCode:this.regCode,items:e};i["a"].commit("setWaterlevelSavedSelectedDevices",t)},restoreSelectionFromStore:function(){var e=this.getWaterlevelSavedSelectedItems(this.regCode);e.length>0?this.setSelection(e):this.setSelection(-1)},onSelectionUpdate:function(e){this.selectedDevID=e},loadWaterlevelDataForDevices:function(){var e=this;this.loading=!0,this.errorRequest=!1,this.currentTab=3,Object(j["x"])(this.selectedDevID).then((function(t){e.loading=!1,e.results=[],e.loaded=!0,e.saveSelectionToStore(e.selectedDevID),e.$nextTick((function(){var a=t.data;Object.keys(a).forEach((function(t){var r={name:t,results:e.extractResultArr(a[t])};e.results.push(r)}))}))})).catch((function(t){e.loading=!1,e.loaded=!0,e.errorRequest=!0}))},reset:function(){this.setSelection(-1)},setSelection:function(e){var t=this;this.deviceRestoreItems=e,this.$nextTick().then((function(){t.deviceRestoreItems=[]}))},extractResultArr:function(e){var t=[];return Object.keys(e).forEach((function(a){var r={header:a,charts:[]},n=e[a];Object.keys(n).forEach((function(e){var t=n[e];t.forEach((function(e){r.charts.push(e)}))})),t.push(r)})),t},onRegCodeChange:function(){console.log("Waterlevel.vue onRegCodeChange()"),this.deviceTreeItems=[],this.results=[],this.loadWaterlevelDeviceTree(this.regCode)}}},W=_,$=(a("5965"),a("6544")),A=a.n($),M=a("8336"),F=a("b0af"),V=a("2e4b"),U=a("0e8f"),q=a("a722"),L=a("e449"),z=a("490a"),H=a("71a3"),N=a("fe57"),Y=a("2677"),J=Object(k["a"])(W,r,n,!1,null,"cec66518",null);t["default"]=J.exports;A()(J,{VBtn:M["a"],VCard:F["a"],VDatePicker:V["a"],VFlex:U["a"],VLayout:q["a"],VMenu:L["a"],VProgressCircular:z["a"],VTab:H["a"],VTabs:N["a"],VTextField:Y["a"]})},"48a4":function(e,t,a){},5965:function(e,t,a){"use strict";var r=a("48a4"),n=a.n(r);n.a},c64a:function(e,t,a){}}]);