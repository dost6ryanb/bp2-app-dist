(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d63f1"],{7277:function(e,t,a){"use strict";a.r(t);var r,i,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"",wrap:""}},e._l(e.regionSummaries,function(t,r){return e.loaded?a("v-flex",{key:r,attrs:{xs12:"","d-flex":""}},[a("device-summary-region",{attrs:{region:t.name,provinces:t.provinces}})],1):e._e()}),1)},o=[],s=a("c0d6"),l=a("a766"),c=a("d722"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"",wrap:"","pa-1":""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{attrs:{color:"primary lighten-2"}},[a("v-card-title",{staticClass:"white--text",attrs:{"primary-title":""}},[a("h3",[e._v(e._s(e.$_regionNameMixin_regionName(e.region)))])])],1)],1),e._l(e.provinces,function(e,t){return a("v-flex",{key:t,attrs:{xs12:"",md6:"","mt-1":""}},[a("device-summary-province",{attrs:{province:e}})],1)})],2)},u=[],m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticClass:"chart-container",staticStyle:{position:"relative",height:"400px",width:"100%"}},[e.loaded?a("province-summary-chart",{attrs:{title:e.betterTitle,enabled:e.enabled,disabled:e.disabled}}):e._e()],1)])],1)},v=[],h=(a("ac6a"),a("1fca")),b={name:"ProvinceSummaryChart",extends:h["b"],props:["title","enabled","disabled"],created:function(){},mounted:function(){this.renderChart(this.chartdata,this.options)},computed:{},data:function(){return{total:"Hello",chartdata:{datasets:[{label:"Enabled",backgroundColor:"rgba(0,105,255,0.7)",borderColor:"#0044f4",data:this.enabled},{label:"Disabled",backgroundColor:"rgb(255,0,52)",borderColor:"#c8001e",data:this.disabled}]},options:{title:{display:!0,text:this.title},responsive:!0,maintainAspectRatio:!1,layout:{left:50,right:0,top:0,bottom:0},scales:{xAxes:[{ticks:{min:0,suggestedMax:30,stepSize:2},stacked:!0}],yAxes:[{type:"category",labels:["ARG","WLMS","TNDM","AWS"],stacked:!0}]},tooltips:{callbacks:{title:function(e,t){var a="";switch(e[0].label){case"ARG":a="Automatic Rain Gauge";break;case"WLMS":a="Waterlevel Monitoring System";break;case"TNDM":a="Tandem (ARG+WLMS)";break;case"AWS":a="Automated Weather Station";break}if(e.length>1){var r=e[0].xLabel+e[1].xLabel;return a+" - Total: "+r}return a}}}}}}},p=b,f=a("2877"),g=Object(f["a"])(p,r,i,!1,null,"59419183",null),y=g.exports,x={name:"DeviceSummaryProvince",props:["province"],components:{ProvinceSummaryChart:y},created:function(){var e=this;["Rain1","Rain2"].forEach(function(t){e.province.hasOwnProperty(t)&&(e.enabled[0]+=e.province[t].enabled,e.disabled[0]+=e.province[t].disabled)}),this.province.hasOwnProperty("Waterlevel")&&(this.enabled[1]+=this.province["Waterlevel"].enabled,this.disabled[1]+=this.province["Waterlevel"].disabled),this.province.hasOwnProperty("Waterlevel & Rain 2")&&(this.enabled[2]+=this.province["Waterlevel & Rain 2"].enabled,this.disabled[2]+=this.province["Waterlevel & Rain 2"].disabled),["VAISALA","UAAWS","BSWM_Lufft","UPAWS","Davis"].forEach(function(t){e.province.hasOwnProperty(t)&&(e.enabled[3]+=e.province[t].enabled,e.disabled[3]+=e.province[t].disabled)}),this.total=this.province.total,this.loaded=!0},computed:{betterTitle:function(){return this.province.province+" - Total: "+this.total}},data:function(){return{loaded:!1,enabled:[0,0,0,0],disabled:[0,0,0,0],total:0}},methods:{sum:function(e,t){return e+t}}},S=x,C=a("6544"),w=a.n(C),A=a("b0af"),W=a("12b2"),k=Object(f["a"])(S,m,v,!1,null,"6f98be50",null),_=k.exports;w()(k,{VCard:A["a"],VCardTitle:W["a"]});var D={name:"DeviceSummaryRegion",mixins:[l["d"]],components:{DeviceSummaryProvince:_},props:["region","provinces"]},R=D,L=a("0e8f"),O=a("a722"),P=Object(f["a"])(R,d,u,!1,null,"52672b0f",null),V=P.exports;w()(P,{VCard:A["a"],VCardTitle:W["a"],VFlex:L["a"],VLayout:O["a"]});var M={name:"Dashboard",components:{DeviceSummaryRegion:V},mixins:[l["c"]],created:function(){console.log("created Dashboard"),this.loadDeviceSummary(this.regCode)},data:function(){return{loaded:!1,regionSummaries:[]}},methods:{loadDeviceSummary:function(e){var t,a=this;s["a"].commit("showLoader"),s["a"].commit("clearErrors"),this.loaded=!1,console.log("fetching device summary for regCode ".concat(e)),t="V"===e?Object(c["d"])():Object(c["e"])(e),t.then(function(e){s["a"].commit("hideLoader"),a.regionSummaries=e.data,a.loaded=!0}).catch(function(e){s["a"].commit("hideLoader"),s["a"].commit("setErrors",["Cannot connect to server. Please try again."])})},onRegCodeChange:function(){console.log("Dashboard.vue onRegCodeChange()"),this.loadDeviceSummary(this.regCode)}}},T=M,E=Object(f["a"])(T,n,o,!1,null,"7b8218d2",null);t["default"]=E.exports;w()(E,{VFlex:L["a"],VLayout:O["a"]})}}]);