(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8ffc46e"],{7277:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:""}},e._l(e.regionSummaries,(function(t,a){return e.loaded?r("v-flex",{key:a,attrs:{xs12:"","d-flex":""}},[r("device-summary-region",{attrs:{region:t.name,provinces:t.provinces}})],1):e._e()})),1)},n=[],i=r("c0d6"),o=r("a766"),l=r("d722"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:"","pa-1":""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card",{attrs:{color:"primary lighten-2"}},[r("v-card-title",{staticClass:"white--text",attrs:{"primary-title":""}},[r("h3",[e._v(e._s(e.$_regionNameMixin_regionName(e.region)))])])],1)],1),e._l(e.provinces,(function(e,t){return r("v-flex",{key:t,attrs:{xs12:"",md6:"","mt-1":""}},[r("device-summary-province",{attrs:{province:e}})],1)}))],2)},c=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",{attrs:{"primary-title":""}},[r("div",{staticClass:"chart-container",staticStyle:{position:"relative",height:"400px",width:"100%"}},[e.loaded?r("province-summary-chart",{attrs:{title:e.betterTitle,enabled:e.enabled,disabled:e.disabled}}):e._e()],1)])],1)},u=[],h=r("30ef"),f=r.n(h),v=r("1fca"),x=r("a9be"),y=r.n(x);f.a.plugins.unregister(y.a);var b,p,m={name:"ProvinceSummaryChart",extends:v["b"],props:["title","enabled","disabled"],created:function(){},mounted:function(){this.addPlugin(y.a),this.renderChart(this.chartdata,this.options)},computed:{},data:function(){return{total:"Hello",chartdata:{datasets:[{label:"Enabled",backgroundColor:"rgba(0,105,255,0.7)",borderColor:"#0044f4",data:this.enabled},{label:"Disabled",backgroundColor:"rgb(255,0,52)",borderColor:"#c8001e",data:this.disabled}]},options:{title:{display:!0,text:this.title},responsive:!0,maintainAspectRatio:!1,layout:{left:50,right:0,top:0,bottom:0},scales:{xAxes:[{ticks:{min:0,suggestedMax:30,stepSize:2,autoSkip:!0,autoSkipPadding:20,maxRotation:0},stacked:!0}],yAxes:[{type:"category",labels:["ARG","WLMS","TNDM","AWS"],stacked:!0}]},tooltips:{callbacks:{title:function(e,t){var r="";switch(e[0].label){case"ARG":r="Automatic Rain Gauge";break;case"WLMS":r="Waterlevel Monitoring System";break;case"TNDM":r="Tandem (ARG+WLMS)";break;case"AWS":r="Automated Weather Station";break}if(e.length>1){var a=e[0].xLabel+e[1].xLabel;return r+" - Total: "+a}return r}}},plugins:{datalabels:{color:"#FFF",labels:{title:{font:{weight:"bold"}}},display:function(e){return e.dataset.data[e.dataIndex]>0}},crosshair:!1}}}}},g=m,_=r("2877"),w=Object(_["a"])(g,b,p,!1,null,"344c0352",null),k=w.exports,S={name:"DeviceSummaryProvince",props:["province"],components:{ProvinceSummaryChart:k},created:function(){var e=this;["Rain1","Rain2"].forEach((function(t){e.province.hasOwnProperty(t)&&(e.enabled[0]+=e.province[t].enabled,e.disabled[0]+=e.province[t].disabled)})),this.province.hasOwnProperty("Waterlevel")&&(this.enabled[1]+=this.province["Waterlevel"].enabled,this.disabled[1]+=this.province["Waterlevel"].disabled),this.province.hasOwnProperty("Waterlevel & Rain 2")&&(this.enabled[2]+=this.province["Waterlevel & Rain 2"].enabled,this.disabled[2]+=this.province["Waterlevel & Rain 2"].disabled),["VAISALA","UAAWS","BSWM_Lufft","UPAWS","Davis"].forEach((function(t){e.province.hasOwnProperty(t)&&(e.enabled[3]+=e.province[t].enabled,e.disabled[3]+=e.province[t].disabled)})),this.total=this.province.total,this.loaded=!0},computed:{betterTitle:function(){return this.province.province+" - Total: "+this.total}},data:function(){return{loaded:!1,enabled:[0,0,0,0],disabled:[0,0,0,0],total:0}},methods:{sum:function(e,t){return e+t}}},C=S,M=r("6544"),A=r.n(M),D=r("b0af"),O=r("12b2"),R=Object(_["a"])(C,d,u,!1,null,"6f98be50",null),W=R.exports;A()(R,{VCard:D["a"],VCardTitle:O["a"]});var P={name:"DeviceSummaryRegion",mixins:[o["d"]],components:{DeviceSummaryProvince:W},props:["region","provinces"]},$=P,z=r("0e8f"),E=r("a722"),F=Object(_["a"])($,s,c,!1,null,"52672b0f",null),N=F.exports;A()(F,{VCard:D["a"],VCardTitle:O["a"],VFlex:z["a"],VLayout:E["a"]});var T={name:"Dashboard",components:{DeviceSummaryRegion:N},mixins:[o["c"]],created:function(){console.log("created Dashboard"),this.loadDeviceSummary(this.regCode)},data:function(){return{loaded:!1,regionSummaries:[]}},methods:{loadDeviceSummary:function(e){var t,r=this;i["a"].commit("showLoader"),i["a"].commit("clearErrors"),this.loaded=!1,console.log("fetching device summary for regCode ".concat(e)),t="V"===e?Object(l["d"])():Object(l["e"])(e),t.then((function(e){i["a"].commit("hideLoader"),r.regionSummaries=e.data,r.loaded=!0})).catch((function(e){i["a"].commit("hideLoader"),i["a"].commit("setErrors",["Cannot connect to server. Please try again."])}))},onRegCodeChange:function(){console.log("Dashboard.vue onRegCodeChange()"),this.loadDeviceSummary(this.regCode)}}},L=T,I=Object(_["a"])(L,a,n,!1,null,"7b8218d2",null);t["default"]=I.exports;A()(I,{VFlex:z["a"],VLayout:E["a"]})},a9be:function(e,t,r){
/*!
 * chartjs-plugin-datalabels v0.7.0
 * https://chartjs-plugin-datalabels.netlify.com
 * (c) 2019 Chart.js Contributors
 * Released under the MIT license
 */
(function(t,a){e.exports=a(r("30ef"))})(0,(function(e){"use strict";e=e&&e.hasOwnProperty("default")?e["default"]:e;var t=e.helpers,r=function(){if("undefined"!==typeof window){if(window.devicePixelRatio)return window.devicePixelRatio;var e=window.screen;if(e)return(e.deviceXDPI||1)/(e.logicalXDPI||1)}return 1}(),a={toTextLines:function(e){var r,a=[];e=[].concat(e);while(e.length)r=e.pop(),"string"===typeof r?a.unshift.apply(a,r.split("\n")):Array.isArray(r)?e.push.apply(e,r):t.isNullOrUndef(e)||a.unshift(""+r);return a},toFontString:function(e){return!e||t.isNullOrUndef(e.size)||t.isNullOrUndef(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family},textSize:function(e,t,r){var a,n=[].concat(t),i=n.length,o=e.font,l=0;for(e.font=r.string,a=0;a<i;++a)l=Math.max(e.measureText(n[a]).width,l);return e.font=o,{height:i*r.lineHeight,width:l}},parseFont:function(r){var n=e.defaults.global,i=t.valueOrDefault(r.size,n.defaultFontSize),o={family:t.valueOrDefault(r.family,n.defaultFontFamily),lineHeight:t.options.toLineHeight(r.lineHeight,i),size:i,style:t.valueOrDefault(r.style,n.defaultFontStyle),weight:t.valueOrDefault(r.weight,null),string:""};return o.string=a.toFontString(o),o},bound:function(e,t,r){return Math.max(e,Math.min(t,r))},arrayDiff:function(e,t){var r,a,n,i,o=e.slice(),l=[];for(r=0,n=t.length;r<n;++r)i=t[r],a=o.indexOf(i),-1===a?l.push([i,1]):o.splice(a,1);for(r=0,n=o.length;r<n;++r)l.push([o[r],-1]);return l},rasterize:function(e){return Math.round(e*r)/r}};function n(e,t){var r=t.x,a=t.y;if(null===r)return{x:0,y:-1};if(null===a)return{x:1,y:0};var n=e.x-r,i=e.y-a,o=Math.sqrt(n*n+i*i);return{x:o?n/o:0,y:o?i/o:-1}}function i(e,t,r,a,n){switch(n){case"center":r=a=0;break;case"bottom":r=0,a=1;break;case"right":r=1,a=0;break;case"left":r=-1,a=0;break;case"top":r=0,a=-1;break;case"start":r=-r,a=-a;break;case"end":break;default:n*=Math.PI/180,r=Math.cos(n),a=Math.sin(n);break}return{x:e,y:t,vx:r,vy:a}}var o=0,l=1,s=2,c=4,d=8;function u(e,t,r){var a=o;return e<r.left?a|=l:e>r.right&&(a|=s),t<r.top?a|=d:t>r.bottom&&(a|=c),a}function h(e,t){var r,a,n,i=e.x0,o=e.y0,h=e.x1,f=e.y1,v=u(i,o,t),x=u(h,f,t);while(1){if(!(v|x)||v&x)break;r=v||x,r&d?(a=i+(h-i)*(t.top-o)/(f-o),n=t.top):r&c?(a=i+(h-i)*(t.bottom-o)/(f-o),n=t.bottom):r&s?(n=o+(f-o)*(t.right-i)/(h-i),a=t.right):r&l&&(n=o+(f-o)*(t.left-i)/(h-i),a=t.left),r===v?(i=a,o=n,v=u(i,o,t)):(h=a,f=n,x=u(h,f,t))}return{x0:i,x1:h,y0:o,y1:f}}function f(e,t){var r,a,n=t.anchor,o=e;return t.clamp&&(o=h(o,t.area)),"start"===n?(r=o.x0,a=o.y0):"end"===n?(r=o.x1,a=o.y1):(r=(o.x0+o.x1)/2,a=(o.y0+o.y1)/2),i(r,a,e.vx,e.vy,t.align)}var v={arc:function(e,t){var r=(e.startAngle+e.endAngle)/2,a=Math.cos(r),n=Math.sin(r),i=e.innerRadius,o=e.outerRadius;return f({x0:e.x+a*i,y0:e.y+n*i,x1:e.x+a*o,y1:e.y+n*o,vx:a,vy:n},t)},point:function(e,t){var r=n(e,t.origin),a=r.x*e.radius,i=r.y*e.radius;return f({x0:e.x-a,y0:e.y-i,x1:e.x+a,y1:e.y+i,vx:r.x,vy:r.y},t)},rect:function(e,t){var r=n(e,t.origin),a=e.x,i=e.y,o=0,l=0;return e.horizontal?(a=Math.min(e.x,e.base),o=Math.abs(e.base-e.x)):(i=Math.min(e.y,e.base),l=Math.abs(e.base-e.y)),f({x0:a,y0:i+l,x1:a+o,y1:i,vx:r.x,vy:r.y},t)},fallback:function(e,t){var r=n(e,t.origin);return f({x0:e.x,y0:e.y,x1:e.x,y1:e.y,vx:r.x,vy:r.y},t)}},x=e.helpers,y=a.rasterize;function b(e){var t=e.borderWidth||0,r=e.padding,a=e.size.height,n=e.size.width,i=-n/2,o=-a/2;return{frame:{x:i-r.left-t,y:o-r.top-t,w:n+r.width+2*t,h:a+r.height+2*t},text:{x:i,y:o,w:n,h:a}}}function p(e){var t=e._model.horizontal,r=e._scale||t&&e._xScale||e._yScale;if(!r)return null;if(void 0!==r.xCenter&&void 0!==r.yCenter)return{x:r.xCenter,y:r.yCenter};var a=r.getBasePixel();return t?{x:a,y:null}:{x:null,y:a}}function m(t){return t instanceof e.elements.Arc?v.arc:t instanceof e.elements.Point?v.point:t instanceof e.elements.Rectangle?v.rect:v.fallback}function g(e,t,r){var a=r.backgroundColor,n=r.borderColor,i=r.borderWidth;(a||n&&i)&&(e.beginPath(),x.canvas.roundedRect(e,y(t.x)+i/2,y(t.y)+i/2,y(t.w)-i,y(t.h)-i,r.borderRadius),e.closePath(),a&&(e.fillStyle=a,e.fill()),n&&i&&(e.strokeStyle=n,e.lineWidth=i,e.lineJoin="miter",e.stroke()))}function _(e,t,r){var a=r.lineHeight,n=e.w,i=e.x,o=e.y+a/2;return"center"===t?i+=n/2:"end"!==t&&"right"!==t||(i+=n),{h:a,w:n,x:i,y:o}}function w(e,t,r){var a=e.shadowBlur,n=r.stroked,i=y(r.x),o=y(r.y),l=y(r.w);n&&e.strokeText(t,i,o,l),r.filled&&(a&&n&&(e.shadowBlur=0),e.fillText(t,i,o,l),a&&n&&(e.shadowBlur=a))}function k(e,t,r,a){var n,i=a.textAlign,o=a.color,l=!!o,s=a.font,c=t.length,d=a.textStrokeColor,u=a.textStrokeWidth,h=d&&u;if(c&&(l||h))for(r=_(r,i,s),e.font=s.string,e.textAlign=i,e.textBaseline="middle",e.shadowBlur=a.textShadowBlur,e.shadowColor=a.textShadowColor,l&&(e.fillStyle=o),h&&(e.lineJoin="round",e.lineWidth=u,e.strokeStyle=d),n=0,c=t.length;n<c;++n)w(e,t[n],{stroked:h,filled:l,w:r.w,x:r.x,y:r.y+r.h*n})}var S=function(e,t,r,a){var n=this;n._config=e,n._index=a,n._model=null,n._rects=null,n._ctx=t,n._el=r};x.extend(S.prototype,{_modelize:function(t,r,n,i){var o=this,l=o._index,s=x.options.resolve,c=a.parseFont(s([n.font,{}],i,l)),d=s([n.color,e.defaults.global.defaultFontColor],i,l);return{align:s([n.align,"center"],i,l),anchor:s([n.anchor,"center"],i,l),area:i.chart.chartArea,backgroundColor:s([n.backgroundColor,null],i,l),borderColor:s([n.borderColor,null],i,l),borderRadius:s([n.borderRadius,0],i,l),borderWidth:s([n.borderWidth,0],i,l),clamp:s([n.clamp,!1],i,l),clip:s([n.clip,!1],i,l),color:d,display:t,font:c,lines:r,offset:s([n.offset,0],i,l),opacity:s([n.opacity,1],i,l),origin:p(o._el),padding:x.options.toPadding(s([n.padding,0],i,l)),positioner:m(o._el),rotation:s([n.rotation,0],i,l)*(Math.PI/180),size:a.textSize(o._ctx,r,c),textAlign:s([n.textAlign,"start"],i,l),textShadowBlur:s([n.textShadowBlur,0],i,l),textShadowColor:s([n.textShadowColor,d],i,l),textStrokeColor:s([n.textStrokeColor,d],i,l),textStrokeWidth:s([n.textStrokeWidth,0],i,l)}},update:function(e){var t,r,n,i=this,o=null,l=null,s=i._index,c=i._config,d=x.options.resolve([c.display,!0],e,s);d&&(t=e.dataset.data[s],r=x.valueOrDefault(x.callback(c.formatter,[t,e]),t),n=x.isNullOrUndef(r)?[]:a.toTextLines(r),n.length&&(o=i._modelize(d,n,c,e),l=b(o))),i._model=o,i._rects=l},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(e,t){var r,n=this,i=e.ctx,o=n._model,l=n._rects;this.visible()&&(i.save(),o.clip&&(r=o.area,i.beginPath(),i.rect(r.left,r.top,r.right-r.left,r.bottom-r.top),i.clip()),i.globalAlpha=a.bound(0,o.opacity,1),i.translate(y(t.x),y(t.y)),i.rotate(o.rotation),g(i,l.frame,o),k(i,o.lines,l.text,o),i.restore())}});var C=e.helpers,M=Number.MIN_SAFE_INTEGER||-9007199254740991,A=Number.MAX_SAFE_INTEGER||9007199254740991;function D(e,t,r){var a=Math.cos(r),n=Math.sin(r),i=t.x,o=t.y;return{x:i+a*(e.x-i)-n*(e.y-o),y:o+n*(e.x-i)+a*(e.y-o)}}function O(e,t){var r,a,n,i,o,l=A,s=M,c=t.origin;for(r=0;r<e.length;++r)a=e[r],n=a.x-c.x,i=a.y-c.y,o=t.vx*n+t.vy*i,l=Math.min(l,o),s=Math.max(s,o);return{min:l,max:s}}function R(e,t){var r=t.x-e.x,a=t.y-e.y,n=Math.sqrt(r*r+a*a);return{vx:(t.x-e.x)/n,vy:(t.y-e.y)/n,origin:e,ln:n}}var W=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};function P(e,t,r){var a=t.positioner(e,t),n=a.vx,i=a.vy;if(!n&&!i)return{x:a.x,y:a.y};var o=r.w,l=r.h,s=t.rotation,c=Math.abs(o/2*Math.cos(s))+Math.abs(l/2*Math.sin(s)),d=Math.abs(o/2*Math.sin(s))+Math.abs(l/2*Math.cos(s)),u=1/Math.max(Math.abs(n),Math.abs(i));return c*=n*u,d*=i*u,c+=t.offset*n,d+=t.offset*i,{x:a.x+c,y:a.y+d}}function $(e,t){var r,a,n,i;for(r=e.length-1;r>=0;--r)for(n=e[r].$layout,a=r-1;a>=0&&n._visible;--a)i=e[a].$layout,i._visible&&n._box.intersects(i._box)&&t(n,i);return e}function z(e){var t,r,a,n,i,o;for(t=0,r=e.length;t<r;++t)a=e[t],n=a.$layout,n._visible&&(i=a.geometry(),o=P(a._el._model,a.model(),i),n._box.update(o,i,a.rotation()));return $(e,(function(e,t){var r=e._hidable,a=t._hidable;r&&a||a?t._visible=!1:r&&(e._visible=!1)}))}C.extend(W.prototype,{center:function(){var e=this._rect;return{x:e.x+e.w/2,y:e.y+e.h/2}},update:function(e,t,r){this._rotation=r,this._rect={x:t.x+e.x,y:t.y+e.y,w:t.w,h:t.h}},contains:function(e){var t=this,r=1,a=t._rect;return e=D(e,t.center(),-t._rotation),!(e.x<a.x-r||e.y<a.y-r||e.x>a.x+a.w+2*r||e.y>a.y+a.h+2*r)},intersects:function(e){var t,r,a,n=this._points(),i=e._points(),o=[R(n[0],n[1]),R(n[0],n[3])];for(this._rotation!==e._rotation&&o.push(R(i[0],i[1]),R(i[0],i[3])),t=0;t<o.length;++t)if(r=O(n,o[t]),a=O(i,o[t]),r.max<a.min||a.max<r.min)return!1;return!0},_points:function(){var e=this,t=e._rect,r=e._rotation,a=e.center();return[D({x:t.x,y:t.y},a,r),D({x:t.x+t.w,y:t.y},a,r),D({x:t.x+t.w,y:t.y+t.h},a,r),D({x:t.x,y:t.y+t.h},a,r)]}});var E={prepare:function(e){var t,r,a,n,i,o=[];for(t=0,a=e.length;t<a;++t)for(r=0,n=e[t].length;r<n;++r)i=e[t][r],o.push(i),i.$layout={_box:new W,_hidable:!1,_visible:!0,_set:t,_idx:r};return o.sort((function(e,t){var r=e.$layout,a=t.$layout;return r._idx===a._idx?a._set-r._set:a._idx-r._idx})),this.update(o),o},update:function(e){var t,r,a,n,i,o=!1;for(t=0,r=e.length;t<r;++t)a=e[t],n=a.model(),i=a.$layout,i._hidable=n&&"auto"===n.display,i._visible=a.visible(),o|=i._hidable;o&&z(e)},lookup:function(e,t){var r,a;for(r=e.length-1;r>=0;--r)if(a=e[r].$layout,a&&a._visible&&a._box.contains(t))return e[r];return null},draw:function(e,t){var r,a,n,i,o,l;for(r=0,a=t.length;r<a;++r)n=t[r],i=n.$layout,i._visible&&(o=n.geometry(),l=P(n._el._view,n.model(),o),i._box.update(l,o,n.rotation()),n.draw(e,l))}},F=e.helpers,N=function(e){if(F.isNullOrUndef(e))return null;var t,r,a,n=e;if(F.isObject(e))if(F.isNullOrUndef(e.label))if(F.isNullOrUndef(e.r))for(n="",t=Object.keys(e),a=0,r=t.length;a<r;++a)n+=(0!==a?", ":"")+t[a]+": "+e[t[a]];else n=e.r;else n=e.label;return""+n},T={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:N,labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},L=e.helpers,I="$datalabels",U="$default";function B(e,t){var r,a,n=e.datalabels,i={},o=[];return!1===n?null:(!0===n&&(n={}),t=L.merge({},[t,n]),r=t.labels||{},a=Object.keys(r),delete t.labels,a.length?a.forEach((function(e){r[e]&&o.push(L.merge({},[t,r[e],{_key:e}]))})):o.push(t),i=o.reduce((function(e,t){return L.each(t.listeners||{},(function(r,a){e[a]=e[a]||{},e[a][t._key||U]=r})),delete t.listeners,e}),{}),{labels:o,listeners:i})}function V(e,t,r){if(t){var a,n=r.$context,i=r.$groups;t[i._set]&&(a=t[i._set][i._key],a&&!0===L.callback(a,[n])&&(e[I]._dirty=!0,r.update(n)))}}function j(e,t,r,a){var n,i;(r||a)&&(r?a?r!==a&&(i=n=!0):i=!0:n=!0,i&&V(e,t.leave,r),n&&V(e,t.enter,a))}function H(e,t){var r,a,n=e[I],i=n._listeners;if(i.enter||i.leave){if("mousemove"===t.type)a=E.lookup(n._labels,t);else if("mouseout"!==t.type)return;r=n._hovered,n._hovered=a,j(e,i,r,a)}}function G(e,t){var r=e[I],a=r._listeners.click,n=a&&E.lookup(r._labels,t);n&&V(e,a,n)}function J(t){if(!t.animating){for(var r=e.animationService.animations,a=0,n=r.length;a<n;++a)if(r[a].chart===t)return;t.render({duration:1,lazy:!0})}}e.defaults.global.plugins.datalabels=T;var X={id:"datalabels",beforeInit:function(e){e[I]={_actives:[]}},beforeUpdate:function(e){var t=e[I];t._listened=!1,t._listeners={},t._datasets=[],t._labels=[]},afterDatasetUpdate:function(e,t,r){var a,n,i,o,l,s,c,d,u=t.index,h=e[I],f=h._datasets[u]=[],v=e.isDatasetVisible(u),x=e.data.datasets[u],y=B(x,r),b=t.meta.data||[],p=e.ctx;for(p.save(),a=0,i=b.length;a<i;++a)if(c=b[a],c[I]=[],v&&c&&!c.hidden&&!c._model.skip)for(n=0,o=y.labels.length;n<o;++n)l=y.labels[n],s=l._key,d=new S(l,p,c,a),d.$groups={_set:u,_key:s||U},d.$context={active:!1,chart:e,dataIndex:a,dataset:x,datasetIndex:u},d.update(d.$context),c[I].push(d),f.push(d);p.restore(),L.merge(h._listeners,y.listeners,{merger:function(e,r,a){r[e]=r[e]||{},r[e][t.index]=a[e],h._listened=!0}})},afterUpdate:function(e,t){e[I]._labels=E.prepare(e[I]._datasets,t)},afterDatasetsDraw:function(e){E.draw(e,e[I]._labels)},beforeEvent:function(e,t){if(e[I]._listened)switch(t.type){case"mousemove":case"mouseout":H(e,t);break;case"click":G(e,t);break;default:}},afterEvent:function(e){var t,r,n,i,o,l,s,c=e[I],d=c._actives,u=c._actives=e.lastActive||[],h=a.arrayDiff(d,u);for(t=0,r=h.length;t<r;++t)if(o=h[t],o[1])for(s=o[0][I]||[],n=0,i=s.length;n<i;++n)l=s[n],l.$context.active=1===o[1],l.update(l.$context);(c._dirty||h.length)&&(E.update(c._labels),J(e)),delete c._dirty}};return e.plugins.register(X),X}))}}]);