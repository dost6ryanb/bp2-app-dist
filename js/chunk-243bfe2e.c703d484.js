(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-243bfe2e","chunk-504f7f6f"],{"0481":function(e,t,a){"use strict";var i=a("23e7"),n=a("a2bf"),r=a("7b0b"),o=a("50c4"),c=a("a691"),l=a("65f0");i({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=r(this),a=o(t.length),i=l(t,0);return i.length=n(i,t,t,a,0,void 0===e?1:c(e)),i}})},"1dad":function(e,t,a){"use strict";var i=a("7024"),n=a("d0c8"),r=a("a714"),o=a("8b4e"),c="toString",l=RegExp.prototype,s=l[c],d=r((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),u=s.name!=c;(d||u)&&i(RegExp.prototype,c,(function(){var e=n(this),t=String(e.source),a=e.flags,i=String(void 0===a&&e instanceof RegExp&&!("flags"in l)?o.call(e):a);return"/"+t+"/"+i}),{unsafe:!0})},"34f5":function(e,t,a){"use strict";var i=a("73c6").charAt,n=a("a547"),r=a("a580"),o="String Iterator",c=n.set,l=n.getterFor(o);r(String,"String",(function(e){c(this,{type:o,string:String(e),index:0})}),(function(){var e,t=l(this),a=t.string,n=t.index;return n>=a.length?{value:void 0,done:!0}:(e=i(a,n),t.index+=e.length,{value:e,done:!1})}))},4069:function(e,t,a){var i=a("44d2");i("flat")},"42c7":function(e,t,a){var i=a("09e4"),n=a("277d"),r=a("e623"),o=a("3261"),c=a("8b0e"),l=c("iterator"),s=c("toStringTag"),d=r.values;for(var u in n){var v=i[u],f=v&&v.prototype;if(f){if(f[l]!==d)try{o(f,l,d)}catch(m){f[l]=d}if(f[s]||o(f,s,u),n[u])for(var h in r)if(f[h]!==r[h])try{o(f,h,r[h])}catch(m){f[h]=r[h]}}}},"511b":function(e,t,a){"use strict";var i=a("199f"),n=a("0368"),r=a("09e4"),o=a("7f34"),c=a("bb6e"),l=a("4c07").f,s=a("2d0a"),d=r.Symbol;if(n&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},v=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof v?new d(e):void 0===e?d():d(e);return""===e&&(u[t]=!0),t};s(v,d);var f=v.prototype=d.prototype;f.constructor=v;var h=f.toString,m="Symbol(test)"==String(d("test")),p=/^Symbol\((.*)\)[^)]+$/;l(f,"description",{configurable:!0,get:function(){var e=c(this)?this.valueOf():this,t=h.call(e);if(o(u,e))return"";var a=m?t.slice(7,-1):t.replace(p,"$1");return""===a?void 0:a}}),i({global:!0,forced:!0},{Symbol:v})}},"73c6":function(e,t,a){var i=a("59c2"),n=a("76af"),r=function(e){return function(t,a){var r,o,c=String(n(t)),l=i(a),s=c.length;return l<0||l>=s?e?"":void 0:(r=c.charCodeAt(l),r<55296||r>56319||l+1===s||(o=c.charCodeAt(l+1))<56320||o>57343?e?c.charAt(l):r:e?c.slice(l,l+2):o-56320+(r-55296<<10)+65536)}};e.exports={codeAt:r(!1),charAt:r(!0)}},"89be":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-layout",{attrs:{row:"",wrap:""}},["loaded"===e.loading||"nodata"===e.loading?a("v-flex",{attrs:{xs12:"","d-flex":""}},[a("device-info",{attrs:{dev_id:e.device.dev_id,province:e.device.province,citymun:e.device.citymun,location:e.device.location,status:e.device.status},on:{updatedStatus:e.onUpdatedDeviceStatus}})],1):e._e(),"loading"===e.loading?a("v-flex",{attrs:{xs12:"","d-flex":""}},[a("v-layout",{attrs:{"justify-center":"","align-center":"","pa-4":""}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)],1):e._e(),"loaded"===e.loading?a("v-flex",{attrs:{xs12:"","d-flex":""}},[a("v-card-text",{staticClass:"pt-0"},[a("v-layout",{staticStyle:{"max-height":"calc(90vh - 200px)"},attrs:{column:""}},[a("v-flex",{staticStyle:{overflow:"auto"},attrs:{xs12:""}},["last_data"===e.selectedView?a("device-data-peek",{attrs:{data:e.latest_response}}):"table"===e.selectedView?a("device-data-table",{attrs:{data:e.response,columns:e.columns}}):"rainfall"===e.selectedView?a("device-data-rainfall-chart",{attrs:{data:e.rainfall_response,title:e.title}}):"waterlevel"===e.selectedView?a("device-data-waterlevel-chart",{attrs:{data:e.waterlevel_response,title:e.title}}):"heat_index"===e.selectedView?a("device-data-heat-index-chart",{attrs:{data:e.heatindex_response,title:e.title}}):e._e()],1)],1)],1)],1):e._e(),"nodata"===e.loading?a("v-flex",{attrs:{xs12:"","d-flex":""}},[a("v-container",{staticClass:"px-3 pb-3 pt-0 ma-0"},[a("h3",[e._v("No Data")])])],1):e._e(),"loaded"===e.loading||"nodata"===e.loading?a("v-flex",{attrs:{xs12:"","d-flex":""}},[a("v-card-actions",{staticClass:"grey lighten-3"},[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{attrs:{xs8:""}},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[a("v-text-field",e._g({staticClass:"pa-0",staticStyle:{"min-width":"200px","max-width":"200px"},attrs:{value:e.computedDateFormattedMomentjs(e.selectedDate),"prepend-icon":"event",readonly:"",clearable:""},on:{"click:clear":e.onDateClear}},i))]}}],null,!1,4022347716),model:{value:e.menuDate,callback:function(t){e.menuDate=t},expression:"menuDate"}},[a("v-date-picker",{attrs:{max:e.maxDateWMO,"no-title":"",scrollable:""},on:{input:e.onDateInput},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)],1),"loaded"===e.loading?a("v-flex",{staticClass:"text-xs-right",attrs:{xs4:""}},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedView,expression:"selectedView"}],staticClass:"primary white--text pa-1 text-xs-center",staticStyle:{"border-style":"solid"},attrs:{id:"selectedView"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedView=t.target.multiple?a:a[0]}}},e._l(e.viewSelection,(function(t){return a("option",{key:t.name,domProps:{value:t.value}},[e._v(e._s(t.name))])})),0)]):e._e()],1)],1)],1):e._e()],1)],1)},n=[],r=(a("99af"),a("caad"),a("d81d"),a("c1df")),o=a.n(r),c=a("c0d6"),l=a("d722"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},e._l(e.data,(function(t,i,n){return a("v-text-field",{key:i,attrs:{label:e.$_deviceColumnUnitMixin_withUnit(i),value:t,readonly:""}})})),1)],1)},d=[],u=a("a766"),v={name:"DeviceDataPeek",props:["data"],mixins:[u["b"]],created:function(){console.log("created DeviceDataPeek")},filters:{withUnit:function(e){var t=this.$_deviceColumnUnitMixin_getUnit(e);return""!==t?"".concat(e," (").concat(t,")"):e}}},f=v,h=a("2877"),m=a("6544"),p=a.n(m),g=a("0e8f"),_=a("a722"),x=a("2677"),b=Object(h["a"])(f,s,d,!1,null,"5822e5a1",null),y=b.exports;p()(b,{VFlex:g["a"],VLayout:_["a"],VTextField:x["a"]});var D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-data-table",{staticClass:"elevation-1 pa-0 ma-0",attrs:{headers:e.headers,items:e.data,"rows-per-page-items":e.rowsPerPageItems,pagination:e.pagination},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"items",fn:function(t){return e._l(e.columns,(function(i){return a("td",[e._v(e._s(t.item[i]))])}))}}])})},w=[],S={name:"DeviceDataTable",props:["data","columns"],mixins:[u["b"]],created:function(){console.log("created DeviceDatatable")},computed:{headers:function(){var e=this,t=[];return t=this.columns.map((function(t){var a=e.$_deviceColumnUnitMixin_getUnit(t);return{text:""!==a?"".concat(t," (").concat(a,")"):t,value:t,align:"left"}})),t}},data:function(){return{rowsPerPageItems:[10,20,30,40,{text:"All",value:-1}],pagination:{rowsPerPage:10,sortBy:"Datetime Read",descending:!0}}}},C=S,A=(a("b27b"),a("8fea")),k=Object(h["a"])(C,D,w,!1,null,"401e27a1",null),V=k.exports;p()(k,{VDataTable:A["a"]});a("4160"),a("159b");var R,M,T,O,$,I,j=a("1fca"),W=a("bbf4"),F={extends:j["a"],name:"DeviceDataRainfallChart",props:["data","title"],mixins:[W["b"]],mounted:function(){console.log("created DeviceDataRainfallChart"),this.loadrainchart()},methods:{loadrainchart:function(){var e=[],t=[];this.data.forEach((function(a){var i=o()(a["Datetime Read"],"YYYY-MM-DD HH:mm:ss");e.push({t:i.valueOf(),y:parseFloat(a["Rainfall Amount"])}),t.push({t:i.valueOf(),y:parseFloat(a["Rain Cumulative"])})})),this.$_rainfallChartMixin_setRainfall(e),this.$_rainfallChartMixin_setRainCumulative(t);var a="[NODATA]",i=this.data.length;i>0&&(a=this.data[0]["Datetime Read"]+" -- "+this.data[0]["Rain Cumulative"]+" mm");var n=[this.title,a];this.$_rainfallChartMixin_setTitle(n),this.$_rainfallChartMixin_render()}},watch:{data:function(e,t){console.log("data updated"),this.loadrainchart()}}},L=F,U=Object(h["a"])(L,R,M,!1,null,"2617a8d2",null),E=U.exports,P={extends:j["c"],name:"DeviceDataWaterlevelChart",props:["data","title"],mixins:[W["c"]],mounted:function(){this.loadwaterlevelchart()},methods:{loadwaterlevelchart:function(){var e=this.data.map((function(e){var t=o()(e["Datetime Read"],"YYYY-MM-DD HH:mm:ss");return{t:t.valueOf(),y:parseFloat(e["Waterlevel"])}}));this.$_waterlevelChartMixin_setWaterlevel(e);var t="[NODATA]",a=this.data.length;a>0&&(t=this.data[0]["Datetime Read"]+" -- "+this.data[0]["Waterlevel"]+" m");var i=[this.title,t];this.$_waterlevelChartMixin_setTitle(i),this.$_waterlevelChartMixin_render()}},watch:{data:function(e,t){console.log("data updated"),this.loadwaterlevelchart()}}},H=P,Y=Object(h["a"])(H,T,O,!1,null,"7dc88f11",null),B=Y.exports,N={extends:j["c"],name:"DeviceDataHeatIndex",mixins:[W["a"]],props:["data","title"],mounted:function(){this.loadheatindexchart()},methods:{loadheatindexchart:function(){var e=[],t=[];this.data.forEach((function(a){var i=o()(a["Datetime Read"],"YYYY-MM-DD HH:mm:ss");e.push({t:i.valueOf(),y:parseFloat(a["Air Temperature"])}),t.push({t:i.valueOf(),y:parseInt(a["Heat Index"])})})),this.$_heatIndexChartMixin_setTemperature(e),this.$_heatIndexChartMixin_setHeatIndex(t);var a="[NODATA]",i=this.data.length;i>0&&(a=this.data[0]["Datetime Read"]+" -- "+this.data[0]["Air Temperature"]+" / "+this.data[0]["Heat Index"]+" °C");var n=[this.title,a];this.$_heatIndexChartMixin_setTitle(n),this.$_heatIndexChartMixin_render()}},watch:{data:function(e,t){console.log("data updated"),this.loadheatindexchart()}}},z=N,J=Object(h["a"])(z,$,I,!1,null,"10b6f47c",null),G=J.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-card-title",{staticClass:"pb-1",attrs:{"primary-title":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{grow:""}},[a("h3",{staticClass:"mb-0"},[e._v(e._s(e.citymun)+" - "+e._s(e.province)+" ("+e._s(e.dev_id)+")"),a("v-icon",{staticClass:"ml-2",attrs:{color:"secondary"},on:{click:function(e){}}},[e._v("edit")])],1),a("div",[e._v(" "+e._s(e.location))])]),a("v-flex",{attrs:{shrink:""}},[e.loading?a("div",[a("v-chip",{attrs:{"text-color":"white",small:""}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"18",color:"secondary"}})],1)],1):a("div",[0===e.selectedStatus||e.selectionMode?a("v-chip",{attrs:{color:"green","text-color":"white",small:""},on:{click:function(t){return e.onToggle(0)}}},[e._v(" Enabled "),a("v-icon",{attrs:{right:""}},[e._v("check_circle")])],1):e._e(),1===e.selectedStatus||e.selectionMode?a("v-chip",{attrs:{color:"red darken-1","text-color":"white",small:""},on:{click:function(t){return e.onToggle(1)}}},[e._v(" Disabled "),a("v-icon",{attrs:{right:""}},[e._v("error")])],1):e._e(),2===e.selectedStatus||e.selectionMode?a("v-chip",{attrs:{color:"red darken-1","text-color":"white",small:""},on:{click:function(t){return e.onToggle(2)}}},[e._v(" Disabled Rain "),a("v-icon",{attrs:{right:""}},[e._v("error")])],1):e._e(),3===e.selectedStatus||e.selectionMode?a("v-chip",{attrs:{color:"red darken-1","text-color":"white",small:""},on:{click:function(t){return e.onToggle(3)}}},[e._v(" Disabled Water Level "),a("v-icon",{attrs:{right:""}},[e._v("error")])],1):e._e()],1)])],1)],1)],1)},K=[],Q=(a("2532"),a("f3f3")),X=a("2f62"),Z={created:function(){console.log("permissionsMixin")},computed:Object(Q["a"])({},Object(X["b"])(["userPermissions"])),methods:{$__permissionsMixin_canUpdateDeviceInfo:function(){return this.userPermissions.includes("device-update-status")}}},ee={name:"DeviceInfo",props:["dev_id","province","citymun","location","status"],mixins:[Z],created:function(){console.log("created DeviceInfo"),this.selectedStatus=this.status},data:function(){return{selectedStatus:-1,selectionMode:!1,loading:!1}},methods:{onToggle:function(e){var t=this;if(!this.$__permissionsMixin_canUpdateDeviceInfo())return!1;this.selectionMode?(this.loading=!0,this.$nextTick((function(){Object(l["O"])(t.dev_id,e).then((function(a){a.data.success&&(t.selectedStatus=e,t.$emit("updatedStatus",{dev_id:t.dev_id,status:e}))})).catch((function(e){console.log(e)})),t.loading=!1,t.selectionMode=!1}))):this.selectionMode=!0}}},te=ee,ae=a("12b2"),ie=a("cc20"),ne=a("132d"),re=a("490a"),oe=Object(h["a"])(te,q,K,!1,null,"51ae559a",null),ce=oe.exports;p()(oe,{VCardTitle:ae["a"],VChip:ie["a"],VFlex:g["a"],VIcon:ne["a"],VLayout:_["a"],VProgressCircular:re["a"]});var le=a("0261"),se={name:"DeviceDataLatest",props:["dev_id"],mixins:[le["a"]],components:{DeviceDataPeek:y,DeviceDataTable:V,DeviceDataRainfallChart:E,DeviceDataWaterlevelChart:B,DeviceDataHeatIndexChart:G,DeviceInfo:ce},created:function(){var e=this;console.log("created DeviceView"),this.selectedDate=c["a"].getters.getDevicesLastDate,Object(l["i"])(this.dev_id).then((function(t){c["a"].commit("clearErrors"),e.device.dev_id=t.data.dev_id,e.device.citymun=t.data.citymun_desc,e.device.province=t.data.province_desc,e.device.location=t.data.locationDesc,e.device.status=t.data.status,e.device.type_name=t.data.type_name,e.title="".concat(e.device.citymun," - ").concat(e.device.location," (").concat(e.device.dev_id,")"),["VAISALA","Rain1","Rain2","UAAWS","BSWM_Lufft","Davis"].includes(e.device.type_name)?e.selectedView="rainfall":["Waterlevel","Waterlevel & Rain 2"].includes(e.device.type_name)&&(e.selectedView="waterlevel"),e.loadDeviceData()})).catch((function(){c["a"].commit("setErrors",["Cannot connect to server. Please try again."]),e.$emit("error-loading")}))},computed:{viewSelection:function(){var e=[{name:"Last Data",icon:"remove_red_eye",color:"primary",value:"last_data"},{name:"Table",icon:"table_chart",color:"amber",value:"table"}];return["VAISALA","Rain1","Rain2","Waterlevel & Rain 2","UAAWS","BSWM_Lufft","Davis"].includes(this.device.type_name)&&e.push({name:"Rainfall",icon:"cloud",color:"green",value:"rainfall"}),["Waterlevel","Waterlevel & Rain 2"].includes(this.device.type_name)&&e.push({name:"Waterlevel",icon:"waves",color:"blue",value:"waterlevel"}),["VAISALA","UAAWS","BSWM_Lufft","Davis"].includes(this.device.type_name)&&e.push({name:"Heat Index",icon:"ac_unit",color:"purple",value:"heat_index"}),e},latest_response:function(){var e=this.response.length;return"Datetime Read"in this.response[e-1]?this.response[e-1]:"dateTimeRead"in this.response[0]?this.response[0]:void 0},rainfall_response:function(){return this.response.map((function(e){return{"Datetime Read":e["Datetime Read"],"Rainfall Amount":e["Rainfall Amount"],"Rain Cumulative":e["Rain Cumulative"]}}))},waterlevel_response:function(){return this.response.map((function(e){return{"Datetime Read":e["Datetime Read"],Waterlevel:e["Waterlevel"]}}))},heatindex_response:function(){return this.response.map((function(e){return{"Datetime Read":e["Datetime Read"],"Air Temperature":e["Air Temperature"],"Heat Index":e["Heat Index"]}}))}},data:function(){return{device:{dev_id:0,citymun:"",province:"",location:"",status:0,type_name:""},loading:"loading",response:[],columns:[],title:"",selectedView:"last_data",menuDate:"",selectedDate:""}},methods:{loadDeviceData:function(){var e,t=this;e=""===this.selectedDate||this.selectedDate===this.nowDateISOStr?Object(l["B"])(this.dev_id):Object(l["g"])(this.dev_id,this.selectedDate),e.then((function(e){c["a"].commit("clearErrors");var a=e.data.Data.length;0!==a&&("Datetime Read"in e.data.Data[a-1]||"dateTimeRead"in e.data.Data[0])?(t.response=e.data.Data,t.columns=e.data.Columns,t.loading="loaded"):t.loading="nodata"})).catch((function(e){c["a"].commit("setErrors",["Cannot connect to server. Please try again."]),t.$emit("error-loading")}))},onDateClear:function(){console.log("onDateClear"),this.selectedDate=""},onDateInput:function(e){this.menuDate=!1,console.log(e)},onUpdatedDeviceStatus:function(e){console.log("onUpdatedDeviceStatus"),this.$emit("deviceUpdatedStatus",e)}},watch:{selectedDate:function(e,t){console.log("selectedDate Updating ".concat(t," ---to--- ").concat(e)),e!==c["a"].getters.getDevicesLastDate&&(c["a"].commit("setDevicesLastDate",e),this.loadDeviceData())}}},de=se,ue=a("b0af"),ve=a("99d9"),fe=a("a523"),he=a("2e4b"),me=a("e449"),pe=Object(h["a"])(de,i,n,!1,null,"2ca960de",null);t["default"]=pe.exports;p()(pe,{VCard:ue["a"],VCardActions:ve["a"],VCardText:ve["b"],VContainer:fe["a"],VDatePicker:he["a"],VFlex:g["a"],VLayout:_["a"],VMenu:me["a"],VProgressCircular:re["a"],VTextField:x["a"]})},"8b4e":function(e,t,a){"use strict";var i=a("d0c8");e.exports=function(){var e=i(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"8ffc":function(e,t,a){"use strict";var i=a("4dd8"),n=a("ebca"),r=a("cf9e"),o=a("caad1"),c=a("09d1"),l=a("5655"),s=a("c35a");e.exports=function(e){var t,a,d,u,v,f,h=n(e),m="function"==typeof this?this:Array,p=arguments.length,g=p>1?arguments[1]:void 0,_=void 0!==g,x=s(h),b=0;if(_&&(g=i(g,p>2?arguments[2]:void 0,2)),void 0==x||m==Array&&o(x))for(t=c(h.length),a=new m(t);t>b;b++)f=_?g(h[b],b):h[b],l(a,b,f);else for(u=x.call(h),v=u.next,a=new m;!(d=v.call(u)).done;b++)f=_?r(u,g,[d.value,b],!0):d.value,l(a,b,f);return a.length=b,a}},a2bf:function(e,t,a){"use strict";var i=a("e8b5"),n=a("50c4"),r=a("0366"),o=function(e,t,a,c,l,s,d,u){var v,f=l,h=0,m=!!d&&r(d,u,3);while(h<c){if(h in a){if(v=m?m(a[h],h,t):a[h],s>0&&i(v))f=o(e,t,v,n(v.length),f,s-1)-1;else{if(f>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[f]=v}f++}h++}return f};e.exports=o},aa72:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{column:""}},[e.loaded&&!e.errorFromServer?a("v-flex",{attrs:{"d-flex":""}},[a("v-card",{attrs:{raised:""}},[a("v-card-title",[a("v-layout",{attrs:{"align-center":"","justify-start":"",row:""}},[a("v-flex",{attrs:{xs12:"",md7:"",lg6:""}},[a("v-text-field",{attrs:{"prepend-icon":"search",label:"Search...","single-line":"","hide-details":"",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-flex",{attrs:{shrink:""}},[e.$vuetify.breakpoint.xsOnly?a("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialogFilter=!0}}},[a("v-icon",[e._v("filter_list")])],1):a("v-btn",{attrs:{color:"secondary"},on:{click:function(t){e.dialogFilter=!0}}},[e._v(" Filters "),a("v-icon",{attrs:{right:""}},[e._v("filter_list")])],1)],1)],1)],1)],1)],1):e._e(),e.errorFromServer?a("v-flex",{attrs:{"d-flex":""}},[a("v-layout",{attrs:{"justify-center":"","align-center":"","pa-1":"","ma-1":""}},[a("v-btn",{attrs:{color:"error"},on:{click:e.loadDevices}},[e._v("Try Again")])],1)],1):e._e(),e.loaded&!e.errorFromServer?a("v-flex",{attrs:{"d-flex":"","fill-height":""}},[a("router-view",{attrs:{search:e.search,devices:e.devices,statuses:e.selectedStatus,types:e.selectedTypes},on:{"device-selected":e.onDeviceSelected}})],1):e._e(),a("v-dialog",{attrs:{id:"dialog","max-width":"90vw"},model:{value:e.dialog.show,callback:function(t){e.$set(e.dialog,"show",t)},expression:"dialog.show"}},[e.dialog.show?a("device-data-latest",{attrs:{dev_id:e.dialog.dev_id},on:{"error-loading":function(t){e.dialog.show=!1},deviceUpdatedStatus:e.onDeviceUpdatedStatus}}):e._e()],1),a("v-dialog",{attrs:{"max-width":e.$vuetify.breakpoint.smAndDown?"90vw":"50vw"},model:{value:e.dialogFilter,callback:function(t){e.dialogFilter=t},expression:"dialogFilter"}},[a("v-card",[a("v-list",[a("v-subheader",[e._v(" Filter by Device Type ")]),e._l(e.types,(function(t){return a("v-list-tile",{key:t.text,on:{click:function(e){}}},[a("v-list-tile-avatar",[a("v-icon",{attrs:{color:t.color}},[e._v(e._s(t.icon))])],1),a("v-list-tile-content",{on:{click:function(e){t.model=!t.model}}},[e._v(" "+e._s(t.text)+" ")]),a("v-list-tile-action",[a("v-checkbox",{model:{value:t.model,callback:function(a){e.$set(t,"model",a)},expression:"item.model"}})],1)],1)})),a("v-divider"),a("v-subheader",[e._v(" Filter by Status ")]),e._l(e.statuses,(function(t){return a("v-list-tile",{key:t.name,on:{click:function(e){}}},[a("v-list-tile-avatar",[a("v-icon",{attrs:{color:t.color}},[e._v(e._s(t.icon))])],1),a("v-list-tile-content",{on:{click:function(e){t.model=!t.model}}},[e._v(" "+e._s(t.text)+" ")]),a("v-list-tile-action",[a("v-checkbox",{model:{value:t.model,callback:function(a){e.$set(t,"model",a)},expression:"item.model"}})],1)],1)}))],2)],1)],1)],1)},n=[];a("4de4"),a("0481"),a("d81d"),a("4069"),a("4cc1"),a("511b"),a("f8d5"),a("ceda"),a("34f5"),a("42c7"),a("dbcf"),a("e855"),a("1dad");function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}function o(e,t){if(e){if("string"===typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}function c(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=o(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return c=e.done,e},e:function(e){l=!0,r=e},f:function(){try{c||null==a["return"]||a["return"]()}finally{if(l)throw r}}}}var l=a("f3f3"),s=a("c0d6"),d=a("2f62"),u=a("89be"),v=a("a766"),f=a("d722"),h={name:"Devices",components:{DeviceDataLatest:u["default"]},mixins:[v["c"]],computed:Object(l["a"])(Object(l["a"])({},Object(d["b"])({isauthenticated:"isauthenticated",deviceRegion:"deviceRegion"})),{},{canmodifydevices:function(){return this.isauthenticated},selectedStatus:function(){var e=this.statuses.map((function(e){if(e.model)return e.value})).filter((function(e){return"undefined"!==typeof e}));return e.length>0?e:[]},selectedTypes:function(){var e=this.types.map((function(e){if(e.model)return e.typeStr})).flat().filter((function(e){return"undefined"!==typeof e}));return e.length>0?e:[]},icon:function(){return this.selectedAllStatus?"check_box":this.selectedSomeStatus?"indeterminate_check_box":"check_box_outline_blank"}}),created:function(){console.log("created Devices"),this.loadDevices(this.regCode)},data:function(){return{devices:[],errorFromServer:!1,statuses:[{text:"Enabled",value:0,icon:"check_circle",color:"green",model:!0},{text:"Disabled",value:1,icon:"error",color:"red",model:!0},{text:"Disabled Rainfall",value:2,icon:"error",color:"red",model:!0},{text:"Disabled Waterlevel",value:3,icon:"error",color:"red",model:!0}],types:[{text:"Automatic Rain Gauge",typeStr:["Rain1","Rain2"],model:!0,icon:"brightness_1",color:"green"},{text:"Water Level Monitoring",typeStr:["Waterlevel"],model:!0,icon:"brightness_1",color:"blue"},{text:"Tandem",typeStr:["Waterlevel & Rain 2"],model:!0,icon:"brightness_1",color:"yellow"},{text:"Automated Weather Station",typeStr:["VAISALA","UAAWS","BSWM_Lufft","UPAWS"],model:!0,icon:"brightness_1",color:"purple"}],dialog:{dev_id:0,show:!1},dialogFilter:!1,search:"",loaded:!1,action:v["a"].view}},methods:{loadDevices:function(){var e,t=this;s["a"].commit("showLoader"),s["a"].commit("clearErrors"),this.errorFromServer=!1,this.devices=[],this.loaded=!1,e="V"===this.regCode?Object(f["h"])():Object(f["j"])(this.regCode),e.then((function(e){s["a"].commit("hideLoader"),t.devices=e.data.devices,t.loaded=!0})).catch((function(e){t.errorFromServer=!0,s["a"].commit("hideLoader"),s["a"].commit("setErrors",["Cannot connect to server. Please try again."])}))},onDeviceSelected:function(e){console.log("onDeviceSelected "+e),this.action===v["a"].view&&(this.dialog.dev_id=e,this.dialog.show=!0)},onDeviceUpdatedStatus:function(e){var t,a=c(this.devices);try{for(a.s();!(t=a.n()).done;){var i=t.value;if(i.dev_id===e.dev_id){i.status=e.status;break}}}catch(n){a.e(n)}finally{a.f()}},onRegCodeChange:function(){console.log("Devices.vue onRegCodeChange()"),this.loadDevices()}},watch:{selectedStatus:function(e,t){console.log(e)}}},m=h,p=a("2877"),g=a("6544"),_=a.n(g),x=a("8336"),b=a("b0af"),y=a("12b2"),D=a("ac7c"),w=a("169a"),S=a("ce7e"),C=a("0e8f"),A=a("132d"),k=a("a722"),V=a("8860"),R=a("ba95"),M=a("40fe"),T=a("c954"),O=a("5d23"),$=a("e0c7"),I=a("2677"),j=Object(p["a"])(m,i,n,!1,null,"69c12e29",null);t["default"]=j.exports;_()(j,{VBtn:x["a"],VCard:b["a"],VCardTitle:y["a"],VCheckbox:D["a"],VDialog:w["a"],VDivider:S["a"],VFlex:C["a"],VIcon:A["a"],VLayout:k["a"],VList:V["a"],VListTile:R["a"],VListTileAction:M["a"],VListTileAvatar:T["a"],VListTileContent:O["a"],VSubheader:$["a"],VTextField:I["a"]})},b27b:function(e,t,a){"use strict";var i=a("d665"),n=a.n(i);n.a},c377:function(e,t,a){"use strict";var i=a("61175"),n=a("7820");e.exports=i?{}.toString:function(){return"[object "+n(this)+"]"}},ceda:function(e,t,a){var i=a("61175"),n=a("7024"),r=a("c377");i||n(Object.prototype,"toString",r,{unsafe:!0})},cf9e:function(e,t,a){var i=a("d0c8"),n=a("8181");e.exports=function(e,t,a,r){try{return r?t(i(a)[0],a[1]):t(a)}catch(o){throw n(e),o}}},d665:function(e,t,a){},dbcf:function(e,t,a){var i=a("199f"),n=a("8ffc"),r=a("808c"),o=!r((function(e){Array.from(e)}));i({target:"Array",stat:!0,forced:o},{from:n})},e855:function(e,t,a){"use strict";var i=a("199f"),n=a("bb6e"),r=a("20b5"),o=a("fb8a"),c=a("09d1"),l=a("a84f"),s=a("5655"),d=a("8b0e"),u=a("85b7"),v=a("0a05"),f=u("slice"),h=v("slice",{ACCESSORS:!0,0:0,1:2}),m=d("species"),p=[].slice,g=Math.max;i({target:"Array",proto:!0,forced:!f||!h},{slice:function(e,t){var a,i,d,u=l(this),v=c(u.length),f=o(e,v),h=o(void 0===t?v:t,v);if(r(u)&&(a=u.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?n(a)&&(a=a[m],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return p.call(u,f,h);for(i=new(void 0===a?Array:a)(g(h-f,0)),d=0;f<h;f++,d++)f in u&&s(i,d,u[f]);return i.length=d,i}})},f8d5:function(e,t,a){var i=a("cf01");i("iterator")}}]);