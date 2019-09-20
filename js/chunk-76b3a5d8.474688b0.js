(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76b3a5d8"],{"0f0f":function(e,t,a){"use strict";var r=a("c03a"),n=a.n(r);n.a},"2fa2":function(e,t,a){"use strict";var r=a("d7bc"),n=a.n(r);n.a},c03a:function(e,t,a){},d301:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-expansion-panel",{attrs:{expand:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},[a("v-expansion-panel-content",{scopedSlots:e._u([{key:"header",fn:function(){return[a("h3",[e._v("Select device: ")])]},proxy:!0}])},[a("device-tree",{staticClass:"ma-1",attrs:{id:"rainfall-device-tree",items:e.deviceTreeItems,"selected-items":e.deviceTreeSelectedItems,"restore-items":e.deviceRestoreItems},on:{onsave:e.saveSelectionToStore,onrestore:e.restoreSelectionFromStore,onselectionupdate:e.onSelectionUpdate}})],1),a("v-expansion-panel-content",{scopedSlots:e._u([{key:"header",fn:function(){return[a("h3",[e._v("Select duration: ")])]},proxy:!0}])},[a("v-select",{staticClass:"ma-1",attrs:{items:e.durations,"item-text":"name",label:"Hours:","item-value":"duration",outline:""},model:{value:e.selectedDuration,callback:function(t){e.selectedDuration=t},expression:"selectedDuration"}})],1),a("v-expansion-panel-content",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],scopedSlots:e._u([{key:"header",fn:function(){return[a("h3",[e._v("Select date: ")])]},proxy:!0}])},[a("v-date-picker",{staticClass:"ma-1",attrs:{reactive:!0,landscape:!0},model:{value:e.datepicker,callback:function(t){e.datepicker=t},expression:"datepicker"}})],1),a("v-expansion-panel-content",{staticClass:"grey lighten-2",attrs:{value:!0},scopedSlots:e._u([{key:"header",fn:function(){return[a("h3",[e._v("Actions: ")])]},proxy:!0}])},[a("div",[a("v-btn",{attrs:{color:"primary",disabled:!e.isvalid},on:{click:e.loadRainfallDataForDevices}},[e._v("Load Rainfall\n\t\t\t\t\t")])],1)])],1)],1),a("v-flex",{attrs:{xs12:"","d-flex":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"","d-flex":""}},[e.loading&&!e.errorRequest?a("v-layout",{attrs:{"justify-center":"","align-center":"","pa-1":"","ma-1":""}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):e.errorRequest?a("v-layout",{attrs:{"justify-center":"","align-center":"","pa-1":"","ma-1":""}},[a("v-btn",{attrs:{color:"error"},on:{click:e.loadRainfallDataForDevices}},[e._v("Try Again")])],1):e._e()],1),e.results.length>0?a("v-layout",{attrs:{row:"",wrap:""}},e._l(e.results,function(e){return a("v-flex",{staticClass:"pt-3",attrs:{xs12:""}},[a("rainfall-region-result",{attrs:{results:e.results,region:e.name}})],1)}),1):e._e()],1)],1)],1)},n=[],i=(a("8e6e"),a("456d"),a("ac6a"),a("bd86")),o=a("c0d6"),s=a("2f62"),c=a("cc6d"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("region-result",{attrs:{results:e.results,region:e.region},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.device,r=e.chartWidth,n=e.chartHeight;return[a("rainfall-chart",{staticClass:"chart-container",attrs:{width:r,height:n,title:t.tooltip+" "+t.raincumulative+" mm",mydata:t.chart}})]}}])})},d=[],u=a("bdd7"),f=a("1fca"),h=a("30ef"),p=a.n(h),v=a("c1df"),m=a.n(v);p.a.Tooltip.positioners.cursor=function(e,t){return t};var g,b,y={extends:f["a"],mixins:[f["c"]],name:"RainfallChart",props:["mydata","dev_id","title"],mounted:function(){this.loadrainchart(this.mydata),this.lastbreakpoint=this.breakpoint},computed:{breakpoint:function(){return this.$vuetify.breakpoint.name}},data:function(){return{chartdata:{dataset:[]},options:{title:{display:!0,text:this.title},responsive:!1,maintainAspectRatio:!1,layout:{padding:10},scales:{xAxes:[{type:"time",distribution:"series",ticks:{source:"data",autoSkip:!0}}],yAxes:[{position:"left",id:"y-axis-1",ticks:{min:0,max:50}},{ticks:{min:0,suggestedMax:300,reverse:!0},position:"right",id:"y-axis-2",gridLines:{drawOnChartArea:!1}}]},tooltips:{mode:"index",position:"cursor",intersect:!1}},lastbreakpoint:""}},methods:{loadrainchart:function(e){var t=[],a=[];e.forEach(function(e){var r=m()(e[0],"YYYY-MM-DD HH:mm:ss");t.push({t:r.valueOf(),y:e[1]}),a.push({t:r.valueOf(),y:e[2]})}),this.chartdata={datasets:[{label:"Rainfall (mm)",backgroundColor:"rgba(255, 205, 210, 0.7)",borderColor:"#F44336",borderWidth:1,data:t,lineTension:0,yAxisID:"y-axis-1"},{label:"Cumulative Rainfall (mm)",backgroundColor:"#d9000d",borderColor:"#d9000d",borderWidth:1,fill:!1,type:"line",lineTension:0,pointRadius:1,data:a,yAxisID:"y-axis-2"}]},this.renderChart(this.chartdata,this.options)}},watch:{breakpoint:function(e,t){var a=this;this.lastbreakpoint!==e&&(this.lastbreakpoint=e,this._data._chart.destroy(),this.$nextTick(function(){a.renderChart(a.chartdata,a.options)}))}}},x=y,R=a("2877"),k=Object(R["a"])(x,g,b,!1,null,null,null),D=k.exports,S={name:"RainfallRegionResult",props:["results","region"],components:{RegionResult:u["a"],RainfallChart:D}},O=S,C=(a("2fa2"),Object(R["a"])(O,l,d,!1,null,null,null)),w=C.exports,j=a("d722");function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach(function(t){Object(i["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var T={name:"Rainfall",components:{DeviceTree:c["a"],RainfallRegionResult:w},computed:I({},Object(s["b"])(["deviceRegion","getRainfallSavedSelectedItems"]),{regCode:function(){return this.deviceRegion.regCode},isvalid:function(){return this.selectedDevID.length>0}}),created:function(){console.log("created Rainfall"),this.loadRainfallDeviceTree(this.regCode)},data:function(){return{panel:[!1,!1,!1,!0],deviceTreeItems:[],deviceTreeSelectedItems:[],deviceRestoreItems:[],selectedDevID:[],selectedDuration:1440,durations:[{name:"1 hour",duration:60},{name:"3 hours",duration:180},{name:"6 hours",duration:360},{name:"12 hours",duration:720},{name:"24 hours",duration:1440}],datepicker:(new Date).toISOString().substr(0,10),loading:!1,errorRequest:!1,results:[]}},methods:{loadRainfallDeviceTree:function(e){var t,a=this;o["a"].commit("showLoader"),o["a"].commit("clearErrors"),console.log("fetching rainfall devices for regCode ".concat(e)),t="V"===e?Object(j["s"])():Object(j["t"])(e),t.then(function(e){o["a"].commit("hideLoader"),a.deviceTreeSelectedItems=[],a.deviceTreeItems=e.data,a.panel=[!0,!1,!1,!0]}).catch(function(e){o["a"].commit("hideLoader"),o["a"].commit("setErrors",["Cannot connect to server. Please try again."])})},saveSelectionToStore:function(e){var t={regCode:this.regCode,items:e};o["a"].commit("setRainfallSavedSelectedDevices",t)},restoreSelectionFromStore:function(){var e=this;this.deviceRestoreItems=this.getRainfallSavedSelectedItems(this.regCode),this.$nextTick().then(function(){e.deviceRestoreItems=[]})},onSelectionUpdate:function(e){this.selectedDevID=e},loadRainfallDataForDevices:function(){var e=this;this.loading=!0,this.errorRequest=!1,this.panel=[!1,!1,!1,!0],Object(j["r"])(this.selectedDevID,this.selectedDuration).then(function(t){e.loading=!1,e.results=[],e.$nextTick(function(){var a=t.data;Object.keys(a).forEach(function(t){console.log(t);var r={name:t,results:e.extractResultArr(a[t])};console.log(r),e.results.push(r)})})}).catch(function(t){e.loading=!1,e.errorRequest=!0})},extractResultArr:function(e){var t=[];return Object.keys(e).forEach(function(a){var r={header:a,charts:[]},n=e[a];Object.keys(n).forEach(function(e){var t=n[e];t.forEach(function(e){r.charts.push(e)})}),t.push(r)}),t}},watch:{deviceRegion:function(e,t){console.log("deviceRegion Updating ".concat(t.regCode," to ").concat(e.regCode)),this.deviceTreeItems=[],this.results=[],this.loadRainfallDeviceTree(this.regCode)}}},E=T,P=(a("0f0f"),a("6544")),A=a.n(P),V=a("8336"),F=a("2e4b"),L=a("cd55"),$=a("49e2"),q=a("0e8f"),H=a("a722"),Y=a("490a"),M=a("b56d"),U=Object(R["a"])(E,r,n,!1,null,"bfef91e4",null);t["default"]=U.exports;A()(U,{VBtn:V["a"],VDatePicker:F["a"],VExpansionPanel:L["a"],VExpansionPanelContent:$["a"],VFlex:q["a"],VLayout:H["a"],VProgressCircular:Y["a"],VSelect:M["a"]})},d7bc:function(e,t,a){}}]);