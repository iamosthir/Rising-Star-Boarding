(self.webpackChunk=self.webpackChunk||[]).push([[231],{1231:(t,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const r={data:function(){return{form:new Form({email:"",password:"",first_name:"",last_name:"",password_confrimation:""}),registerStatus:""}},metaInfo:function(){return{title:"Register - Rising Star Boarding"}},methods:{register:function(){var t=this;this.form.post("/cutomer-registration").then((function(t){return t.data})).then((function(s){"ok"==s.status?(t.registerStatus="ok",setTimeout((function(){window.location.href="/home"}),2e3)):t.registerStatus="fail"})).catch((function(t){console.error(t.response.data)}))}}};const e=(0,a(1900).Z)(r,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{attrs:{id:"login"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center mt-5 pb-5"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"login-card"},[a("h4",[t._v("Register new account")]),t._v(" "),a("div",{staticClass:"login-card-body"},[a("form",{on:{submit:function(s){return s.preventDefault(),t.register.apply(null,arguments)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 mt-4 my-form"},[t._m(0),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.first_name,expression:"form.first_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("first_name")},attrs:{type:"text",maxlength:"20",placeholder:"First name..."},domProps:{value:t.form.first_name},on:{input:function(s){s.target.composing||t.$set(t.form,"first_name",s.target.value)}}}),t._v(" "),a("HasError",{attrs:{form:t.form,field:"first_name"}})],1),t._v(" "),a("div",{staticClass:"col-md-6 mt-4 my-form"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.last_name,expression:"form.last_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("last_name")},attrs:{type:"text",maxlength:"20",placeholder:"Last name..."},domProps:{value:t.form.last_name},on:{input:function(s){s.target.composing||t.$set(t.form,"last_name",s.target.value)}}}),t._v(" "),a("HasError",{attrs:{form:t.form,field:"last_name"}})],1),t._v(" "),a("div",{staticClass:"col-md-12 mt-4 my-form"},[t._m(2),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",placeholder:"Email..."},domProps:{value:t.form.email},on:{input:function(s){s.target.composing||t.$set(t.form,"email",s.target.value)}}}),t._v(" "),a("HasError",{attrs:{form:t.form,field:"email"}})],1),t._v(" "),a("div",{staticClass:"col-md-6 mt-4 my-form"},[t._m(3),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",placeholder:"Choose a strong password"},domProps:{value:t.form.password},on:{input:function(s){s.target.composing||t.$set(t.form,"password",s.target.value)}}}),t._v(" "),a("HasError",{attrs:{form:t.form,field:"password"}})],1),t._v(" "),a("div",{staticClass:"col-md-6 mt-4 my-form"},[t._m(4),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Confirm your password"},domProps:{value:t.form.password_confirmation},on:{input:function(s){s.target.composing||t.$set(t.form,"password_confirmation",s.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-md-12 mt-4"},[a("input",{attrs:{type:"checkbox",id:"terms",required:""}}),t._v(" "),a("label",{attrs:{for:"terms"}},[t._v("I accept the "),a("router-link",{attrs:{target:"_blank",to:{name:"terms"}}},[t._v("Terms & Conditions")])],1)]),t._v(" "),a("div",{staticClass:"col-md-12 mt-4 my-form"},[a("Button",{staticClass:"rising-btn rising-btn-pink",attrs:{form:t.form}},[t._v("Register")])],1),t._v(" "),t.registerStatus?a("div",{staticClass:"col-md-12 mt-4"},["ok"==t.registerStatus?a("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[a("i",{staticClass:"fas fa-check"}),t._v(" Registration is successful. Please wait...\n                                    ")]):"fail"==t.registerStatus?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[a("i",{staticClass:"fas fa-check"}),t._v(" Failed to register new account.\n                                    ")]):t._e()]):t._e()])])])])])])])])}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("label",{attrs:{for:""}},[t._v("First name "),a("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("label",{attrs:{for:""}},[t._v("Last name "),a("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("label",{attrs:{for:""}},[t._v("Email "),a("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("label",{attrs:{for:""}},[t._v("Password "),a("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("label",{attrs:{for:""}},[t._v("Confirm Password "),a("span",{staticClass:"text-danger"},[t._v("*")])])}],!1,null,null,null).exports}}]);