(self.webpackChunk=self.webpackChunk||[]).push([[6],{1006:(r,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});const o={metaInfo:function(){return{title:"Login - Rising Star Boarding"}},data:function(){return{form:new Form({email:"",password:"",remember:!1}),loginFailed:!1}},methods:{login:function(){var r=this;this.form.post("/custom-login").then((function(r){return r.data})).then((function(e){"fail"==e.status?r.loginFailed=!0:"ok"==e.status&&(window.location.href="/home")})).catch((function(r){console.error(r.response.data)}))}},mounted:function(){}};const s=(0,t(1900).Z)(o,(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("section",{attrs:{id:"login"}},[t("div",{staticClass:"container"},[t("div",{staticClass:"row justify-content-center mt-5 pb-5"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"login-card"},[t("h4",[r._v("Login")]),r._v(" "),t("div",{staticClass:"login-card-body pb-4"},[t("form",{on:{submit:function(e){return e.preventDefault(),r.login.apply(null,arguments)}}},[t("div",{staticClass:"form-group mt-4 my-form"},[t("label",{attrs:{for:""}},[r._v("Email")]),r._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:r.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":r.form.errors.has("email")},attrs:{type:"email",name:"email",placeholder:"Your email address..."},domProps:{value:r.form.email},on:{input:function(e){e.target.composing||r.$set(r.form,"email",e.target.value)}}}),r._v(" "),t("HasError",{attrs:{form:r.form,field:"email"}})],1),r._v(" "),t("div",{staticClass:"form-group mt-4 my-form"},[t("label",{attrs:{for:""}},[r._v("Password")]),r._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:r.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":r.form.errors.has("password")},attrs:{type:"password",name:"password",placeholder:"Your password..."},domProps:{value:r.form.password},on:{input:function(e){e.target.composing||r.$set(r.form,"password",e.target.value)}}}),r._v(" "),t("HasError",{attrs:{form:r.form,field:"password"}})],1),r._v(" "),t("div",{staticClass:"form-group mt-4 d-flex justify-content-between"},[t("label",{attrs:{for:"remember"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:r.form.remember,expression:"form.remember"}],attrs:{id:"remember",type:"checkbox"},domProps:{checked:Array.isArray(r.form.remember)?r._i(r.form.remember,null)>-1:r.form.remember},on:{change:function(e){var t=r.form.remember,o=e.target,s=!!o.checked;if(Array.isArray(t)){var a=r._i(t,null);o.checked?a<0&&r.$set(r.form,"remember",t.concat([null])):a>-1&&r.$set(r.form,"remember",t.slice(0,a).concat(t.slice(a+1)))}else r.$set(r.form,"remember",s)}}}),r._v(" Remember me")]),r._v(" "),t("a",{attrs:{href:"/password/reset"}},[r._v("Forgot your password?")])]),r._v(" "),t("div",{staticClass:"form-group mt-4"},[t("Button",{staticClass:"rising-btn rising-btn-pink",attrs:{form:r.form}},[r._v("Login")])],1),r._v(" "),r.loginFailed?t("div",{staticClass:"form-group mt-4"},[t("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[r._v("\n                                    Invalid email or password !\n                                ")])]):r._e()])])])])])])])}),[],!1,null,null,null).exports}}]);