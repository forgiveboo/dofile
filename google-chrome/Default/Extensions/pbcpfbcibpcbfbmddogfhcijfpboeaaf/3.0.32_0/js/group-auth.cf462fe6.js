(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["group-auth"],{"01c4":function(t,e,n){},2452:function(t,e,n){t.exports=n.p+"img/icon.0ebc9d7d.svg"},2877:function(t,e,n){"use strict";function s(t,e,n,s,i,a,r,o){var c,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),s&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),r?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):i&&(c=o?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:l}}n.d(e,"a",(function(){return s}))},"2af9":function(t,e,n){"use strict";n("01c4")},"54e2":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column w-100 h-100"},[t.hasLoggedIn?n("div",{staticClass:"d-flex flex-column w-100 h-100 sign-in"},[t._m(0),n("div",{staticClass:"d-flex flex-column px-5 pb-5"},[n("b-button",{staticClass:"w-100",attrs:{pill:"",variant:"primary"},on:{click:function(e){return e.preventDefault(),t.openExternal(t.signInUrl)}}},[t._v(" Sign In ")]),n("div",{staticClass:"font-weight-bold text-center small mt-4"},[t._v(" Don't have an account? "),n("div",[n("a",{staticClass:"text-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openExternal(t.signUpUrl)}}},[t._v("Create one for free")])])])],1)]):n("div",{staticClass:"d-flex flex-column w-100 h-100 sign-in"},[t._m(1),n("div",{staticClass:"d-flex flex-column px-5 pb-5"},[n("b-button",{staticClass:"w-100",attrs:{pill:"",variant:"primary"},on:{click:function(e){return e.preventDefault(),t.openExternal(t.signUpUrl)}}},[t._v(" Sign Up ")]),n("div",{staticClass:"font-weight-bold text-center small mt-4"},[t._v(" Already have an account? "),n("div",[n("a",{staticClass:"text-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openExternal(t.signInUrl)}}},[t._v("Sign in here")])])])],1)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex flex-column justify-content-center align-items-center flex-grow-1 px-5"},[s("img",{staticClass:"logo d-block mx-auto mb-5",attrs:{src:n("2452"),width:"48"}}),s("div",{staticClass:"h3 mb-1"},[t._v(" Welcome back. ")]),s("div",{staticClass:"lead text-muted"},[t._v(" Let's get you signed in. ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex flex-column justify-content-center align-items-center flex-grow-1 px-5"},[s("img",{staticClass:"logo d-block mx-auto mb-5",attrs:{src:n("2452"),width:"48"}}),s("div",{staticClass:"h3 mb-1"},[t._v(" Hey, welcome! ")]),s("div",{staticClass:"lead text-muted"},[t._v(" Create a free account to start using Amino. ")])])}],a=n("1da1"),r=(n("96cf"),n("d3b7"),{name:"SignIn",data:function(){return{hasLoggedIn:!1}},computed:{signInUrl:function(){return"https://aminoeditor.com/sign-in?context=extension"},signUpUrl:function(){return"https://aminoeditor.com/create-account?context=extension"}},beforeMount:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){t.$chrome.storage.sync.get(["___extension__flags_has_logged_in"],(function(t){e(t.___extension__flags_has_logged_in||!1)}))}));case 2:t.hasLoggedIn=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}),o=r,c=(n("2af9"),n("2877")),l=Object(c["a"])(o,s,i,!1,null,"8365ab1c",null);e["default"]=l.exports}}]);
//# sourceMappingURL=group-auth.cf462fe6.js.map