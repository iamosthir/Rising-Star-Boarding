(self.webpackChunk=self.webpackChunk||[]).push([[774],{8774:(t,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>r});const e={data:function(){return{form:new Form({email:"",password:"",first_name:"",last_name:"",password_confrimation:""}),registerStatus:""}},metaInfo:function(){return{title:"Register - Rising Star Boarding"}},methods:{register:function(){var t=this;this.form.post("/cutomer-registration").then((function(t){return t.data})).then((function(s){"ok"==s.status?(t.registerStatus="ok",setTimeout((function(){window.location.href="/home/profile/edit-profile#welcome"}),2e3)):t.registerStatus="fail"})).catch((function(t){console.error(t.response.data)}))}}};const r=(0,a(1900).Z)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"login"},[a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"row justify-content-center mt-5 pb-5"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"login-card"},[a("div",{staticClass:"login-card-body"},[a("form",{staticClass:"login-form",on:{submit:function(s){return s.preventDefault(),t.register.apply(null,arguments)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 group"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.first_name,expression:"form.first_name"}],class:{"is-invalid":t.form.errors.has("first_name")},attrs:{type:"text",maxlength:"20",placeholder:"First name..."},domProps:{value:t.form.first_name},on:{input:function(s){s.target.composing||t.$set(t.form,"first_name",s.target.value)}}}),t._v(" "),a("HasError",{attrs:{form:t.form,field:"first_name"}})],1),t._v(" "),a("div",{staticClass:"col-md-6 group"},[t._m(2),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.last_name,expression:"form.last_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("last_name")},attrs:{type:"text",maxlength:"20",placeholder:"Last name..."},domProps:{value:t.form.last_name},on:{input:function(s){s.target.composing||t.$set(t.form,"last_name",s.target.value)}}}),t._v(" "),a("HasError",{attrs:{form:t.form,field:"last_name"}})],1),t._v(" "),a("div",{staticClass:"col-md-12 group"},[t._m(3),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",placeholder:"Email..."},domProps:{value:t.form.email},on:{input:function(s){s.target.composing||t.$set(t.form,"email",s.target.value)}}}),t._v(" "),a("HasError",{attrs:{form:t.form,field:"email"}})],1),t._v(" "),a("div",{staticClass:"col-md-6 group"},[t._m(4),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",placeholder:"Choose a strong password"},domProps:{value:t.form.password},on:{input:function(s){s.target.composing||t.$set(t.form,"password",s.target.value)}}}),t._v(" "),a("HasError",{attrs:{form:t.form,field:"password"}})],1),t._v(" "),a("div",{staticClass:"col-md-6 group"},[t._m(5),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Confirm your password"},domProps:{value:t.form.password_confirmation},on:{input:function(s){s.target.composing||t.$set(t.form,"password_confirmation",s.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-md-12 group"},[a("input",{attrs:{type:"checkbox",id:"terms",required:""}}),t._v(" "),a("label",{attrs:{for:"terms"}},[t._v("  I accept the "),a("router-link",{attrs:{target:"_blank",to:{name:"terms"}}},[t._v("Terms & Conditions")])],1)]),t._v(" "),a("div",{staticClass:"col-md-12 group"},[a("Button",{staticClass:"login-btn btn-choco",attrs:{form:t.form}},[t._v("Register")])],1),t._v(" "),t.registerStatus?a("div",{staticClass:"col-md-12 mt-4"},["ok"==t.registerStatus?a("div",{staticClass:"alert alert-success",staticStyle:{"font-family":"'Bubblegum Sans"},attrs:{role:"alert"}},[a("i",{staticClass:"fas fa-check"}),t._v(" Registration is successful. Please wait...\n                                    ")]):"fail"==t.registerStatus?a("div",{staticClass:"alert alert-danger",staticStyle:{"font-family":"'Bubblegum Sans"},attrs:{role:"alert"}},[a("i",{staticClass:"fas fa-check"}),t._v(" Failed to register new account.\n                                    ")]):t._e()]):t._e(),t._v(" "),t._m(6),t._v(" "),a("div",{staticClass:"col-md-12 group"},[a("router-link",{staticClass:"btn-blue login-btn mt-4",attrs:{to:{name:"login"}}},[t._v("Login")])],1)])])])])])])])])}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"seciton-title"},[a("h4",{staticClass:"text-choco"},[t._v("Register new account")]),t._v(" "),a("p",[t._v("Get your free account today and start using our booking services")]),t._v(" "),a("img",{attrs:{src:"img/title_img.png",alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("label",{attrs:{for:""}},[t._v("First name "),a("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("label",{attrs:{for:""}},[t._v("Last name "),a("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("label",{attrs:{for:""}},[t._v("Email "),a("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("label",{attrs:{for:""}},[t._v("Password "),a("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("label",{attrs:{for:""}},[t._v("Confirm Password "),a("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"group text-center"},[a("p",{staticStyle:{"font-size":"20px","font-family":"'Cabin'"}},[t._v("Already have an account ?")])])}],!1,null,null,null).exports}}]);