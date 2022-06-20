(self.webpackChunk=self.webpackChunk||[]).push([[65],{1065:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>o});const a={data:function(){return{status:"",is_loading:!0,form:new Form({petName:"",petColor:"",petBreed:"",petAge:"",rabiesExpDate:null,feed:"",medic:"",photo:"",vaccine:"",gender:""})}},metaInfo:function(){return{title:"Add pet"}},methods:{isProfileCompleted:function(){var t=this;axios.get(api2+"profile-check").then((function(t){return t.data})).then((function(e){t.status=e.status,t.is_loading=!1})).catch((function(t){console.error(t.response.data)}))},photoChange:function(t){var e=t.target.files[0];this.form.photo=e||""},vacChange:function(t){var e=t.target.files[0];this.form.vaccine=e||""},createPet:function(){var t=this;this.form.post(api2+"add-pet").then((function(t){return t.data})).then((function(e){console.log(e),"ok"==e.status?(swal.fire("Success",e.msg,"success"),t.form.reset(),$("input[type='file']").val("")):"fail"==e.status&&swal.fire("Failed",e.msg,"error")})).catch((function(t){console.error(t.response.data)}))}},created:function(){this.isProfileCompleted()}};const o=(0,r(1900).Z)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section",attrs:{id:"add-pet"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header d-flex justify-content-between"},[r("p",[t._v("Add new pet")]),t._v(" "),r("div",[r("router-link",{staticClass:"btn my-btn",attrs:{to:{name:"home"},title:"Go back"}},[r("i",{staticClass:"fas fa-arrow-left"})])],1)]),t._v(" "),r("div",{staticClass:"card-body"},[t.is_loading?r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("skeleton",{attrs:{width:"100%",height:"400px"}})],1)]):t._e(),t._v(" "),t.is_loading||"denied"!=t.status?t._e():r("div",{staticClass:"complete-profile-box text-center"},[r("h5",{staticClass:"text-muted mb-4"},[t._v("Complete your profile before adding pets")]),t._v(" "),r("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"home.profile.setting"}}},[t._v("Profile Settings")])],1),t._v(" "),t.is_loading||"completed"!=t.status?t._e():r("div",{staticClass:"pet-form"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.createPet.apply(null,arguments)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-form mb-3"},[r("label",{attrs:{for:""}},[t._v("Pet name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.petName,expression:"form.petName"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("petName")},attrs:{type:"text",placeholder:"Pet name..."},domProps:{value:t.form.petName},on:{input:function(e){e.target.composing||t.$set(t.form,"petName",e.target.value)}}}),t._v(" "),r("HasError",{attrs:{form:t.form,field:"petName"}})],1),t._v(" "),r("div",{staticClass:"col-md-6 my-form mb-3"},[r("label",{attrs:{for:""}},[t._v("Pet Color")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.petColor,expression:"form.petColor"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("petColor")},attrs:{type:"text",placeholder:"Pet color..."},domProps:{value:t.form.petColor},on:{input:function(e){e.target.composing||t.$set(t.form,"petColor",e.target.value)}}}),t._v(" "),r("HasError",{attrs:{form:t.form,field:"petColor"}})],1),t._v(" "),r("div",{staticClass:"col-md-6 my-form mb-3"},[r("label",{attrs:{for:""}},[t._v("Pet Breed")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.petBreed,expression:"form.petBreed"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("petBreed")},attrs:{type:"text",placeholder:"Pet breed..."},domProps:{value:t.form.petBreed},on:{input:function(e){e.target.composing||t.$set(t.form,"petBreed",e.target.value)}}}),t._v(" "),r("HasError",{attrs:{form:t.form,field:"petBreed"}})],1),t._v(" "),r("div",{staticClass:"col-md-6 my-form mb-3"},[t._m(0),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.petAge,expression:"form.petAge"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("petAge")},attrs:{type:"number",placeholder:"Pet age..."},domProps:{value:t.form.petAge},on:{input:function(e){e.target.composing||t.$set(t.form,"petAge",e.target.value)}}}),t._v(" "),r("HasError",{attrs:{form:t.form,field:"petAge"}})],1),t._v(" "),r("div",{staticClass:"col-md-6 my-form mb-3"},[r("label",{attrs:{for:""}},[t._v("Gender")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.gender,expression:"form.gender"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("gender")},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"gender",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"",hidden:""}},[t._v("Select Gender")]),t._v(" "),r("option",{attrs:{value:"Male"}},[t._v("Male")]),t._v(" "),r("option",{attrs:{value:"Female"}},[t._v("Female")])]),t._v(" "),r("HasError",{attrs:{form:t.form,field:"gender"}})],1),t._v(" "),r("div",{staticClass:"col-md-6 my-form mb-3"},[r("label",{attrs:{for:""}},[t._v("Rabies Exp. Date")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.rabiesExpDate,expression:"form.rabiesExpDate"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("rabiesExpDate")},attrs:{type:"date"},domProps:{value:t.form.rabiesExpDate},on:{input:function(e){e.target.composing||t.$set(t.form,"rabiesExpDate",e.target.value)}}}),t._v(" "),r("HasError",{attrs:{form:t.form,field:"rabiesExpDate"}})],1),t._v(" "),r("div",{staticClass:"col-md-6 mb-3 my-form"},[r("label",{attrs:{for:""}},[t._v("Pet Photograph")]),t._v(" "),r("input",{staticClass:"form-control-file",attrs:{type:"file",accept:"image/*"},on:{change:t.photoChange}}),t._v(" "),r("HasError",{attrs:{form:t.form,field:"photo"}})],1),t._v(" "),r("div",{staticClass:"col-md-6 mb-3 my-form"},[r("label",{attrs:{for:""}},[t._v("Vaccination Record")]),t._v(" "),r("input",{staticClass:"form-control-file",attrs:{type:"file",accept:"image/*"},on:{change:t.vacChange}}),t._v(" "),r("HasError",{attrs:{form:t.form,field:"vaccine"}})],1),t._v(" "),r("div",{staticClass:"col-md-12 mb-3 my-form"},[r("label",{attrs:{for:""}},[t._v("Feeding Instruction")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.feed,expression:"form.feed"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("feed")},staticStyle:{height:"200px !important"},attrs:{rows:"15"},domProps:{value:t.form.feed},on:{input:function(e){e.target.composing||t.$set(t.form,"feed",e.target.value)}}}),t._v(" "),r("HasError",{attrs:{form:t.form,field:"feed"}})],1),t._v(" "),r("div",{staticClass:"col-md-12 mb-3 my-form"},[r("label",{attrs:{for:""}},[t._v("Medication")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.medic,expression:"form.medic"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("medic")},staticStyle:{height:"200px !important"},attrs:{rows:"15"},domProps:{value:t.form.medic},on:{input:function(e){e.target.composing||t.$set(t.form,"medic",e.target.value)}}}),t._v(" "),r("HasError",{attrs:{form:t.form,field:"medic"}})],1),t._v(" "),r("div",{staticClass:"col-md-12 mb-3 d-flex justify-content-start"},[r("Button",{staticClass:"rising-btn rising-btn-pink",attrs:{form:t.form}},[t._v("Add")]),t._v(" "),t.form.progress?r("p",{staticClass:"text-muted ms-4 mt-2"},[r("strong",[t._v("Uploading .... "+t._s(t.form.progress.percentage)+"%")])]):t._e()],1),t._v(" "),r("div",{staticClass:"col-md-12 mb-3"},[r("AlertError",{attrs:{form:t.form}},[t._v("Failed to create new pet")])],1)])])])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:""}},[t._v("Pet Age "),r("small",[t._v("(in years)")])])}],!1,null,null,null).exports}}]);