(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{361:function(t,e,o){var content=o(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("dda59298",content,!0,{sourceMap:!1})},374:function(t,e,o){"use strict";o.r(e);o(29),o(28),o(38),o(26),o(39);var c=o(14),r=o(7),n=(o(5),o(30),o(378),o(376)),l=o(391),h=o(398),v=o(383),d=o(393),f=o(386),x=o(0);function m(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return x.default.extend({name:"toggleable",model:{prop:e,event:o},props:Object(r.a)({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Object(r.a)(t,e,(function(t){this.isActive=!!t})),Object(r.a)(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(o,t)})),t)})}m(),o(380),o(129),o(36),o(31),o(51);var y=o(394),k=o(25);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=x.default.extend({name:"routable",directives:{Ripple:y.a},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:function(){return{isActive:!1,proxyClass:""}},computed:{classes:function(){var t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple:function(){var t;return null!==(t=this.ripple)&&void 0!==t?t:!this.disabled&&this.isClickable},isClickable:function(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink:function(){return this.to||this.href||this.link},styles:function(){return{}}},watch:{$route:"onRouteChange"},mounted:function(){this.onRouteChange()},methods:{generateRouteLink:function(){var t,e,o=this.exact,data=(t={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}]},Object(r.a)(t,this.to?"nativeOn":"on",C(C({},this.$listeners),"click"in this?{click:this.click}:void 0)),Object(r.a)(t,"ref","link"),t);if(void 0===this.exact&&(o="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var c=this.activeClass,n=this.exactActiveClass||c;this.proxyClass&&(c="".concat(c," ").concat(this.proxyClass).trim(),n="".concat(n," ").concat(this.proxyClass).trim()),e=this.nuxt?"nuxt-link":"router-link",Object.assign(data.props,{to:this.to,exact:o,exactPath:this.exactPath,activeClass:c,exactActiveClass:n,append:this.append,replace:this.replace})}else"a"===(e=(this.href?"a":this.tag)||"div")&&this.href&&(data.attrs.href=this.href);return this.target&&(data.attrs.target=this.target),{tag:e,data:data}},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link&&this.$route){var e="".concat(this.activeClass||""," ").concat(this.proxyClass||"").trim(),o="".concat(this.exactActiveClass||""," ").concat(this.proxyClass||"").trim()||e,path="_vnode.data.class."+(this.exact?o:e);this.$nextTick((function(){!Object(k.g)(t.$refs.link,path)===t.isActive&&t.toggle()}))}},toggle:function(){this.isActive=!this.isActive}}}),j=o(395),w=o(46);function B(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var P=Object(n.a)(v.a,j.a,_,f.a,Object(d.a)("chipGroup"),m("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return $($($($({"v-chip":!0},_.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(_.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var o=Object(c.a)(e,2),r=o[0],n=o[1];t.$attrs.hasOwnProperty(r)&&Object(w.a)(r,n,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(h.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.b,t)},genClose:function(){var t=this;return this.$createElement(h.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],o=this.generateRouteLink(),c=o.tag,data=o.data;data.attrs=$($({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var r=this.textColor||this.outlined&&this.color;return t(c,this.setTextColor(r,data),e)}}),z=(o(381),o(11)),component=Object(z.a)({},(function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Outras especialidades")]),t._v(" "),e("div",{staticClass:"internal-links"},[e("NuxtLink",{attrs:{to:"/procedimentos/bucomaxilo"}},[e(P,{staticClass:"hvr-float",attrs:{color:"#2b8599",outlined:"","close-icon":"mdi-delete",link:""}},[t._v("Bucomaxilo")])],1),t._v(" "),e("NuxtLink",{attrs:{to:"/procedimentos/implantodontia"}},[e(P,{staticClass:"hvr-float",attrs:{color:"#2b8599",outlined:"","close-icon":"mdi-delete",link:""}},[t._v("Implantodontia")])],1),t._v(" "),e("NuxtLink",{attrs:{to:"/procedimentos/hof"}},[e(P,{staticClass:"hvr-float",attrs:{color:"#2b8599",outlined:"","close-icon":"mdi-delete",link:""}},[t._v("Har. Orofacial")])],1),t._v(" "),e("NuxtLink",{attrs:{to:"/procedimentos/hofcirurgica"}},[e(P,{staticClass:"hvr-float",attrs:{color:"#2b8599",outlined:"","close-icon":"mdi-delete",link:""}},[t._v("Har. Orofacial Cirurgica")])],1)],1)])}),[],!1,null,"b7cf9ed4",null);e.default=component.exports},378:function(t,e,o){var content=o(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("197fcea4",content,!0,{sourceMap:!1})},379:function(t,e,o){var c=o(19)(!1);c.push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=c},380:function(t,e,o){"use strict";var c=o(2),r=o(229);c({target:"String",proto:!0,forced:o(230)("link")},{link:function(t){return r(this,"a","href",t)}})},381:function(t,e,o){"use strict";o(361)},382:function(t,e,o){var c=o(19)(!1);c.push([t.i,"h1[data-v-b7cf9ed4]{font-family:Hellix Bold;font-style:normal;font-weight:700;margin-bottom:1rem}a[data-v-b7cf9ed4]{font-family:Hellix Normal}.nuxt-link-active[data-v-b7cf9ed4]{color:#2b8599!important;font-family:Hellix Bold}.nuxt-link-exact-active[data-v-b7cf9ed4]{color:#2b8599;font-family:Hellix Bold}.nuxt-link--active[data-v-b7cf9ed4]{color:#2b8599!important}.v-chip[data-v-b7cf9ed4]{cursor:pointer;transition:all .5s ease-out}.v-chip[data-v-b7cf9ed4]:hover{color:#2189a1!important;transition:all .2s ease-out}",""]),t.exports=c}}]);