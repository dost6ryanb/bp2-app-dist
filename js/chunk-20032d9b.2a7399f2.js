(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20032d9b"],{"3bbe":function(e,t,n){var i=n("861d");e.exports=function(e){if(!i(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},"5cf1":function(e,t,n){"use strict";var i=n("6e8e"),s=n.n(i);s.a},"5e89":function(e,t,n){var i=n("861d"),s=Math.floor;e.exports=function(e){return!i(e)&&isFinite(e)&&s(e)===e}},"6e8e":function(e,t,n){},7156:function(e,t,n){var i=n("861d"),s=n("d2bb");e.exports=function(e,t,n){var r,a;return s&&"function"==typeof(r=t.constructor)&&r!==n&&i(a=r.prototype)&&a!==n.prototype&&s(e,a),e}},"7b16":function(e,t,n){},"8ba4":function(e,t,n){var i=n("23e7"),s=n("5e89");i({target:"Number",stat:!0},{isInteger:s})},a9e3:function(e,t,n){"use strict";var i=n("83ab"),s=n("da84"),r=n("94ca"),a=n("6eeb"),c=n("5135"),o=n("c6b6"),l=n("7156"),h=n("c04e"),d=n("d039"),u=n("7c73"),p=n("241c").f,f=n("06cf").f,v=n("9bf2").f,m=n("58a8").trim,g="Number",b=s[g],y=b.prototype,C=o(u(y))==g,O=function(e){var t,n,i,s,r,a,c,o,l=h(e,!1);if("string"==typeof l&&l.length>2)if(l=m(l),t=l.charCodeAt(0),43===t||45===t){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:i=2,s=49;break;case 79:case 111:i=8,s=55;break;default:return+l}for(r=l.slice(2),a=r.length,c=0;c<a;c++)if(o=r.charCodeAt(c),o<48||o>s)return NaN;return parseInt(r,i)}return+l};if(r(g,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var S,I=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof I&&(C?d((function(){y.valueOf.call(n)})):o(n)!=g)?l(new b(O(t)),n,I):O(t)},w=i?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;w.length>x;x++)c(b,S=w[x])&&!c(I,S)&&v(I,S,f(b,S));I.prototype=y,y.constructor=I,a(s,g,I)}},bdd7:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-expansion-panel",{attrs:{expand:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},[n("h1",[e._v(e._s(e.$_regionNameMixin_regionName(e.region)))]),e._l(e.results,(function(t,i){return n("v-expansion-panel-content",{key:i,staticClass:"result_expansionpanel",scopedSlots:e._u([{key:"header",fn:function(){return[n("h3",{staticClass:"white--text"},[e._v(e._s(t.header))])]},proxy:!0}],null,!0)},[n("v-layout",{attrs:{row:"",wrap:""}},e._l(t.charts,(function(t){return n("v-flex",{attrs:{xs12:"",md6:"","align-self-center":""}},[n("v-card",[t.chart.length>0?n("div",[e._t("default",null,{device:t,chartWidth:e.chartWidth,chartHeight:e.chartHeight})],2):n("div",{staticClass:"grey lighten-1"},[n("h2",{staticClass:"text-xs-center"},[e._v(e._s(t.tooltip))]),n("h3",{staticClass:"text-xs-center error--text"},[e._v("No Data")])])])],1)})),1)],1)}))],2)},s=[],r=n("a766"),a={name:"RegionResult",props:["results","region"],mixins:[r["d"]],computed:{chartWidth:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 320;case"sm":return 540;case"md":return 420;case"lg":return 540;case"xl":return 540}},chartHeight:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 320;case"sm":return 400;case"md":return 400;case"lg":return 400;case"xl":return 400}}},data:function(){return{panel:0}}},c=a,o=(n("5cf1"),n("2877")),l=n("6544"),h=n.n(l),d=n("b0af"),u=n("cd55"),p=n("49e2"),f=n("0e8f"),v=n("a722"),m=Object(o["a"])(c,i,s,!1,null,null,null);t["a"]=m.exports;h()(m,{VCard:d["a"],VExpansionPanel:u["a"],VExpansionPanelContent:p["a"],VFlex:f["a"],VLayout:v["a"]})},cc6d:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto my-1"},[n("v-sheet",{staticClass:"pa-2 primary lighten-3"},[n("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[n("v-flex",{attrs:{grow:""}},[n("v-text-field",{attrs:{label:"Search",flat:"",outline:"","hide-details":"",solo:"",clearable:"",hright:"20"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),n("v-flex",{attrs:{shrink:""}},[n("v-btn",{staticClass:"pa-0 ma-0 ml-1",attrs:{icon:""},on:{click:e.selectAll}},[n("v-icon",[e._v("select_all")])],1),n("v-btn",{staticClass:"pa-0 ma-0 ml-1",attrs:{icon:""},on:{click:function(t){e.mySelectedItems=[]}}},[n("v-icon",[e._v("clear_all")])],1)],1)],1)],1),n("v-card-text",{staticClass:"pa-2"},[n("v-treeview",{attrs:{items:e.items,search:e.search,"active-class":"grey lighten-4 indigo--text","selected-color":"indigo","open-on-click":"",selectable:""},model:{value:e.mySelectedItems,callback:function(t){e.mySelectedItems=t},expression:"mySelectedItems"}})],1)],1)},s=[],r=(n("99af"),n("4de4"),n("a9e3"),n("8ba4"),n("159b"),{name:"DeviceTree",props:["items","selectedItems","restoreItems"],created:function(){console.log("created DeviceTree"),this.mySelectedItems=this.selectedItems},computed:{allDeviceTreeItemsID:function(){return this.forEachX(this.items)}},data:function(){return{search:"",mySelectedItems:[]}},methods:{selectAll:function(){this.mySelectedItems=this.allDeviceTreeItemsID},saveSelectionToStore:function(){this.$emit("onsave",this.mySelectedItems)},restoreSelectionFromStore:function(){this.$emit("onrestore")},forEachX:function(e){var t=this,n=[];return e.forEach((function(e){e.hasOwnProperty("id")&&n.push(e.id),e.hasOwnProperty("children")&&(n=n.concat(t.forEachX(e.children)))})),n}},watch:{mySelectedItems:function(e,t){Array.isArray(e)&&e.length;var n=e.filter((function(e){return Number.isInteger(e)}));this.$emit("onselectionupdate",n)},restoreItems:function(e,t){e.length>0&&(this.mySelectedItems=e)}}}),a=r,c=n("2877"),o=n("6544"),l=n.n(o),h=n("8336"),d=n("b0af"),u=n("99d9"),p=n("0e8f"),f=n("132d"),v=n("a722"),m=n("8dd9"),g=n("2677"),b=(n("7b16"),n("0789")),y=n("94ab"),C=n("58df"),O=n("80d2"),S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w={activatable:Boolean,activeClass:{type:String,default:"v-treeview-node--active"},selectable:Boolean,selectedColor:{type:String,default:"accent"},indeterminateIcon:{type:String,default:"$vuetify.icons.checkboxIndeterminate"},onIcon:{type:String,default:"$vuetify.icons.checkboxOn"},offIcon:{type:String,default:"$vuetify.icons.checkboxOff"},expandIcon:{type:String,default:"$vuetify.icons.subgroup"},loadingIcon:{type:String,default:"$vuetify.icons.loading"},itemKey:{type:String,default:"id"},itemText:{type:String,default:"name"},itemChildren:{type:String,default:"children"},loadChildren:Function,openOnClick:Boolean,transition:Boolean},x=Object(C["a"])(Object(y["a"])("treeview")).extend({name:"v-treeview-node",inject:{treeview:{default:null}},props:S({item:{type:Object,default:function(){return null}}},w),data:function(){return{isOpen:!1,isSelected:!1,isIndeterminate:!1,isActive:!1,isLoading:!1,hasLoaded:!1}},computed:{key:function(){return Object(O["l"])(this.item,this.itemKey)},children:function(){return Object(O["l"])(this.item,this.itemChildren)},text:function(){return Object(O["l"])(this.item,this.itemText)},scopedProps:function(){return{item:this.item,leaf:!this.children,selected:this.isSelected,indeterminate:this.isIndeterminate,active:this.isActive,open:this.isOpen}},computedIcon:function(){return this.isIndeterminate?this.indeterminateIcon:this.isSelected?this.onIcon:this.offIcon},hasChildren:function(){return!!this.children&&(!!this.children.length||!!this.loadChildren)}},created:function(){this.treeview.register(this)},beforeDestroy:function(){this.treeview.unregister(this)},methods:{checkChildren:function(){var e=this;return new Promise((function(t){if(!e.children||e.children.length||!e.loadChildren||e.hasLoaded)return t();e.isLoading=!0,t(e.loadChildren(e.item))})).then((function(){e.isLoading=!1,e.hasLoaded=!0}))},open:function(){this.isOpen=!this.isOpen,this.treeview.updateOpen(this.key,this.isOpen),this.treeview.emitOpen()},genLabel:function(){var e=[];return this.$scopedSlots.label?e.push(this.$scopedSlots.label(this.scopedProps)):e.push(this.text),this.$createElement("div",{slot:"label",staticClass:"v-treeview-node__label"},e)},genContent:function(){var e=[this.$scopedSlots.prepend&&this.$scopedSlots.prepend(this.scopedProps),this.genLabel(),this.$scopedSlots.append&&this.$scopedSlots.append(this.scopedProps)];return this.$createElement("div",{staticClass:"v-treeview-node__content"},e)},genToggle:function(){var e=this;return this.$createElement(f["a"],{staticClass:"v-treeview-node__toggle",class:{"v-treeview-node__toggle--open":this.isOpen,"v-treeview-node__toggle--loading":this.isLoading},slot:"prepend",on:{click:function(t){t.stopPropagation(),e.isLoading||e.checkChildren().then((function(){return e.open()}))}}},[this.isLoading?this.loadingIcon:this.expandIcon])},genCheckbox:function(){var e=this;return this.$createElement(f["a"],{staticClass:"v-treeview-node__checkbox",props:{color:this.isSelected?this.selectedColor:void 0},on:{click:function(t){t.stopPropagation(),e.isLoading||e.checkChildren().then((function(){e.$nextTick((function(){e.isSelected=!e.isSelected,e.isIndeterminate=!1,e.treeview.updateSelected(e.key,e.isSelected),e.treeview.emitSelected()}))}))}}},[this.computedIcon])},genNode:function(){var e=this,t=[this.genContent()];return this.selectable&&t.unshift(this.genCheckbox()),this.hasChildren&&t.unshift(this.genToggle()),this.$createElement("div",{staticClass:"v-treeview-node__root",class:I({},this.activeClass,this.isActive),on:{click:function(){e.openOnClick&&e.children?e.open():e.activatable&&(e.isActive=!e.isActive,e.treeview.updateActive(e.key,e.isActive),e.treeview.emitActive())}}},t)},genChild:function(e){return this.$createElement(x,{key:Object(O["l"])(e,this.itemKey),props:{activatable:this.activatable,activeClass:this.activeClass,item:e,selectable:this.selectable,selectedColor:this.selectedColor,expandIcon:this.expandIcon,indeterminateIcon:this.indeterminateIcon,offIcon:this.offIcon,onIcon:this.onIcon,loadingIcon:this.loadingIcon,itemKey:this.itemKey,itemText:this.itemText,itemChildren:this.itemChildren,loadChildren:this.loadChildren,transition:this.transition,openOnClick:this.openOnClick},scopedSlots:this.$scopedSlots})},genChildrenWrapper:function(){if(!this.isOpen||!this.children)return null;var e=[this.children.map(this.genChild)];return this.$createElement("div",{staticClass:"v-treeview-node__children"},e)},genTransition:function(){return this.$createElement(b["a"],[this.genChildrenWrapper()])}},render:function(e){var t=[this.genNode()];return this.transition?t.push(this.genTransition()):t.push(this.genChildrenWrapper()),e("div",{staticClass:"v-treeview-node",class:{"v-treeview-node--leaf":!this.hasChildren,"v-treeview-node--click":this.openOnClick,"v-treeview-node--selected":this.isSelected,"v-treeview-node--excluded":this.treeview.isExcluded(this.key)}},t)}}),_=n("6a18"),A=n("d9bd");function j(e,t,n){var i=Object(O["l"])(e,n);return i.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}function k(e,t,n,i,s,r,a){if(e(t,n,s))return!0;var c=Object(O["l"])(t,r);if(c){for(var o=!1,l=0;l<c.length;l++)k(e,c[l],n,i,s,r,a)&&(o=!0);if(o)return!0}return a.add(Object(O["l"])(t,i)),!1}var E=function(){function e(e,t){var n=[],i=!0,s=!1,r=void 0;try{for(var a,c=e[Symbol.iterator]();!(i=(a=c.next()).done);i=!0)if(n.push(a.value),t&&n.length===t)break}catch(o){s=!0,r=o}finally{try{!i&&c["return"]&&c["return"]()}finally{if(s)throw r}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};function $(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var T=Object(C["a"])(Object(y["b"])("treeview"),_["a"]).extend({name:"v-treeview",provide:function(){return{treeview:this}},props:N({active:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},hoverable:Boolean,multipleActive:Boolean,open:{type:Array,default:function(){return[]}},openAll:Boolean,returnObject:{type:Boolean,default:!1},value:{type:Array,default:function(){return[]}},search:String,filter:Function},w),data:function(){return{nodes:{},selectedCache:new Set,activeCache:new Set,openCache:new Set}},computed:{excludedItems:function(){var e=new Set;if(!this.search)return e;for(var t=0;t<this.items.length;t++)k(this.filter||j,this.items[t],this.search,this.itemKey,this.itemText,this.itemChildren,e);return e}},watch:{items:{handler:function(){var e=this,t=Object.keys(this.nodes).map((function(t){return Object(O["l"])(e.nodes[t].item,e.itemKey)})),n=this.getKeys(this.items),i=Object(O["b"])(n,t);if(i.length||!(n.length<t.length)){i.forEach((function(t){return delete e.nodes[t]}));var s=[].concat($(this.selectedCache));this.selectedCache=new Set,this.activeCache=new Set,this.openCache=new Set,this.buildTree(this.items),Object(O["i"])(s,[].concat($(this.selectedCache)))||this.emitSelected()}},deep:!0},active:function(e){this.handleNodeCacheWatcher(e,this.activeCache,this.updateActive,this.emitActive)},value:function(e){this.handleNodeCacheWatcher(e,this.selectedCache,this.updateSelected,this.emitSelected)},open:function(e){this.handleNodeCacheWatcher(e,this.openCache,this.updateOpen,this.emitOpen)}},created:function(){var e=this;this.buildTree(this.items),this.value.forEach((function(t){return e.updateSelected(t,!0)})),this.emitSelected(),this.active.forEach((function(t){return e.updateActive(t,!0)})),this.emitActive()},mounted:function(){var e=this;(this.$slots.prepend||this.$slots.append)&&Object(A["c"])("The prepend and append slots require a slot-scope attribute",this),this.openAll?this.updateAll(!0):(this.open.forEach((function(t){return e.updateOpen(t,!0)})),this.emitOpen())},methods:{updateAll:function(e){var t=this;Object.keys(this.nodes).forEach((function(n){return t.updateOpen(Object(O["l"])(t.nodes[n].item,t.itemKey),e)})),this.emitOpen()},getKeys:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=0;n<e.length;n++){var i=Object(O["l"])(e[n],this.itemKey);t.push(i);var s=Object(O["l"])(e[n],this.itemChildren);s&&t.push.apply(t,$(this.getKeys(s)))}return t},buildTree:function(e){for(var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=0;i<e.length;i++){var s=e[i],r=Object(O["l"])(s,this.itemKey),a=Object(O["l"])(s,this.itemChildren,[]),c=this.nodes.hasOwnProperty(r)?this.nodes[r]:{isSelected:!1,isIndeterminate:!1,isActive:!1,isOpen:!1,vnode:null},o={vnode:c.vnode,parent:n,children:a.map((function(e){return Object(O["l"])(e,t.itemKey)})),item:s};this.buildTree(a,r),!this.nodes.hasOwnProperty(r)&&null!==n&&this.nodes.hasOwnProperty(n)?(o.isSelected=this.nodes[n].isSelected,o.isIndeterminate=this.nodes[n].isIndeterminate):(o.isSelected=c.isSelected,o.isIndeterminate=c.isIndeterminate),o.isActive=c.isActive,o.isOpen=c.isOpen,this.nodes[r]=a.length?this.calculateState(o,this.nodes):o,this.nodes[r].isSelected&&this.selectedCache.add(r),this.nodes[r].isActive&&this.activeCache.add(r),this.nodes[r].isOpen&&this.openCache.add(r),this.updateVnodeState(r)}},calculateState:function(e,t){var n=e.children.reduce((function(e,n){return e[0]+=+Boolean(t[n].isSelected),e[1]+=+Boolean(t[n].isIndeterminate),e}),[0,0]);return e.isSelected=!!e.children.length&&n[0]===e.children.length,e.isIndeterminate=!e.isSelected&&(n[0]>0||n[1]>0),e},emitOpen:function(){this.emitNodeCache("update:open",this.openCache)},emitSelected:function(){this.emitNodeCache("input",this.selectedCache)},emitActive:function(){this.emitNodeCache("update:active",this.activeCache)},emitNodeCache:function(e,t){var n=this;this.$emit(e,this.returnObject?[].concat($(t)).map((function(e){return n.nodes[e].item})):[].concat($(t)))},handleNodeCacheWatcher:function(e,t,n,i){var s=this;e=this.returnObject?e.map((function(e){return Object(O["l"])(e,s.itemKey)})):e;var r=[].concat($(t));Object(O["i"])(r,e)||(r.forEach((function(e){return n(e,!1)})),e.forEach((function(e){return n(e,!0)})),i())},getDescendants:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=this.nodes[e].children;(t=n).push.apply(t,$(i));for(var s=0;s<i.length;s++)n=this.getDescendants(i[s],n);return n},getParents:function(e){var t=this.nodes[e].parent,n=[];while(null!==t)n.push(t),t=this.nodes[t].parent;return n},register:function(e){var t=Object(O["l"])(e.item,this.itemKey);this.nodes[t].vnode=e,this.updateVnodeState(t)},unregister:function(e){var t=Object(O["l"])(e.item,this.itemKey);this.nodes[t]&&(this.nodes[t].vnode=null)},updateActive:function(e,t){var n=this;if(this.nodes.hasOwnProperty(e)){this.multipleActive||this.activeCache.forEach((function(e){n.nodes[e].isActive=!1,n.updateVnodeState(e),n.activeCache.delete(e)}));var i=this.nodes[e];i&&(t?this.activeCache.add(e):this.activeCache.delete(e),i.isActive=t,this.updateVnodeState(e))}},updateSelected:function(e,t){var n=this;if(this.nodes.hasOwnProperty(e)){var i=new Map,s=[e].concat($(this.getDescendants(e)));s.forEach((function(e){n.nodes[e].isSelected=t,n.nodes[e].isIndeterminate=!1,i.set(e,t)}));var r=this.getParents(e);r.forEach((function(e){n.nodes[e]=n.calculateState(n.nodes[e],n.nodes),i.set(e,n.nodes[e].isSelected)}));var a=[e].concat($(s),$(r));a.forEach(this.updateVnodeState);var c=!0,o=!1,l=void 0;try{for(var h,d=i.entries()[Symbol.iterator]();!(c=(h=d.next()).done);c=!0){var u=h.value,p=E(u,2),f=p[0],v=p[1];!0===v?this.selectedCache.add(f):this.selectedCache.delete(f)}}catch(m){o=!0,l=m}finally{try{!c&&d.return&&d.return()}finally{if(o)throw l}}}},updateOpen:function(e,t){var n=this;if(this.nodes.hasOwnProperty(e)){var i=this.nodes[e],s=Object(O["l"])(i.item,this.itemChildren);s&&!s.length&&i.vnode&&!i.vnode.hasLoaded?i.vnode.checkChildren().then((function(){return n.updateOpen(e,t)})):s&&s.length&&(i.isOpen=t,i.isOpen?this.openCache.add(e):this.openCache.delete(e),this.updateVnodeState(e))}},updateVnodeState:function(e){var t=this.nodes[e];t&&t.vnode&&(t.vnode.isSelected=t.isSelected,t.vnode.isIndeterminate=t.isIndeterminate,t.vnode.isActive=t.isActive,t.vnode.isOpen=t.isOpen)},isExcluded:function(e){return!!this.search&&this.excludedItems.has(e)}},render:function(e){var t=this.items.length?this.items.map(x.options.methods.genChild.bind(this)):this.$slots.default;return e("div",{staticClass:"v-treeview",class:N({"v-treeview--hoverable":this.hoverable},this.themeClasses)},t)}}),P=Object(c["a"])(a,i,s,!1,null,"c2c2baf8",null);t["a"]=P.exports;l()(P,{VBtn:h["a"],VCard:d["a"],VCardText:u["b"],VFlex:p["a"],VIcon:f["a"],VLayout:v["a"],VSheet:m["a"],VTextField:g["a"],VTreeview:T})},d2bb:function(e,t,n){var i=n("825a"),s=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(n,[]),t=n instanceof Array}catch(r){}return function(n,r){return i(n),s(r),t?e.call(n,r):n.__proto__=r,n}}():void 0)}}]);