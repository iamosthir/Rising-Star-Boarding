(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_Pets_Add_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Pets/Add.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Pets/Add.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      status: '',
      is_loading: true,
      form: new Form({
        petName: '',
        petColor: '',
        petBreed: "",
        petAge: "",
        rabiesExpDate: null,
        feed: '',
        medic: '',
        photo: '',
        vaccine: '',
        gender: ''
      })
    };
  },
  metaInfo: function metaInfo() {
    return {
      title: "Add pet"
    };
  },
  mounted: function mounted() {
    $('#popupModal2').on('show.bs.modal', function (e) {
      $(this).find('[role=document]').removeClass().addClass('modal-dialog a-lightSpeed');
    });
  },
  methods: {
    isProfileCompleted: function isProfileCompleted() {
      var _this = this;

      axios.get(api2 + "profile-check").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this.status = data.status;
        _this.is_loading = false;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    photoChange: function photoChange(e) {
      var file = e.target.files[0];

      if (file) {
        this.form.photo = file;
      } else {
        this.form.photo = "";
      }
    },
    vacChange: function vacChange(e) {
      var file = e.target.files[0];

      if (file) {
        this.form.vaccine = file;
      } else {
        this.form.vaccine = "";
      }
    },
    createPet: function createPet() {
      var _this2 = this;

      this.form.post(api2 + "add-pet").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          // swal.fire("Success",data.msg,"success");
          _this2.form.reset();

          $("input[type='file']").val("");

          _this2.openModal();
        } else if (data.status == "fail") {
          swal.fire("Failed", data.msg, "error");
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    openModal: function openModal() {
      $("#popupModal2").modal({
        backdrop: 'static',
        keyboard: false
      });
      $("#popupModal2").modal("show");
    },
    closeModal: function closeModal() {
      $("#popupModal2").modal("hide");
    },
    bookingPage: function bookingPage() {
      this.closeModal();
      this.$router.push({
        name: "reservation.choose"
      });
    },
    homePage: function homePage() {
      this.closeModal();
      this.$router.push({
        name: "home.profile"
      });
    }
  },
  created: function created() {
    this.isProfileCompleted();
  }
});

/***/ }),

/***/ "./resources/js/components/Dashboard/Pets/Add.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Dashboard/Pets/Add.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Add_vue_vue_type_template_id_4d7d2ce8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=4d7d2ce8& */ "./resources/js/components/Dashboard/Pets/Add.vue?vue&type=template&id=4d7d2ce8&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/Pets/Add.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Add_vue_vue_type_template_id_4d7d2ce8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Add_vue_vue_type_template_id_4d7d2ce8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/Pets/Add.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/Pets/Add.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Pets/Add.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Pets/Add.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Dashboard/Pets/Add.vue?vue&type=template&id=4d7d2ce8&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Pets/Add.vue?vue&type=template&id=4d7d2ce8& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_4d7d2ce8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_4d7d2ce8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_4d7d2ce8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=template&id=4d7d2ce8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Pets/Add.vue?vue&type=template&id=4d7d2ce8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Pets/Add.vue?vue&type=template&id=4d7d2ce8&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Pets/Add.vue?vue&type=template&id=4d7d2ce8& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mt-5" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-8" }, [
          _c("div", { staticClass: "profile-card bg-bg" }, [
            _c(
              "div",
              { staticClass: "header d-flex justify-content-between" },
              [
                _c("h4", [_vm._v("Add new pet")]),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn my-btn",
                        attrs: { to: { name: "home" }, title: "Go back" }
                      },
                      [_c("i", { staticClass: "fas fa-arrow-left" })]
                    )
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _vm.is_loading
                ? _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-12" },
                      [
                        _c("skeleton", {
                          attrs: { width: "100%", height: "400px" }
                        })
                      ],
                      1
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.is_loading && _vm.status == "denied"
                ? _c(
                    "div",
                    { staticClass: "complete-profile-box text-center" },
                    [
                      _c(
                        "h5",
                        {
                          staticClass: "text-muted mb-4 mt-5",
                          staticStyle: { "font-family": "'Bubblegum Sans" }
                        },
                        [_vm._v("Complete your profile before adding pets")]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "edit-profile-btn",
                          attrs: { to: { name: "home.profile.setting" } }
                        },
                        [_vm._v("Profile Settings")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.is_loading && _vm.status == "completed"
                ? _c("div", { staticClass: "pet-form" }, [
                    _c(
                      "form",
                      {
                        staticClass: "login-form",
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.createPet.apply(null, arguments)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-md-6 group" },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Pet name")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.petName,
                                    expression: "form.petName"
                                  }
                                ],
                                class: {
                                  "is-invalid": _vm.form.errors.has("petName")
                                },
                                attrs: {
                                  type: "text",
                                  placeholder: "Pet name..."
                                },
                                domProps: { value: _vm.form.petName },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "petName",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("HasError", {
                                attrs: { form: _vm.form, field: "petName" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-6 group" },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Pet Color")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.petColor,
                                    expression: "form.petColor"
                                  }
                                ],
                                class: {
                                  "is-invalid": _vm.form.errors.has("petColor")
                                },
                                attrs: {
                                  type: "text",
                                  placeholder: "Pet color..."
                                },
                                domProps: { value: _vm.form.petColor },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "petColor",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("HasError", {
                                attrs: { form: _vm.form, field: "petColor" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-6 group" },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Pet Breed")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.petBreed,
                                    expression: "form.petBreed"
                                  }
                                ],
                                class: {
                                  "is-invalid": _vm.form.errors.has("petBreed")
                                },
                                attrs: {
                                  type: "text",
                                  placeholder: "Pet breed..."
                                },
                                domProps: { value: _vm.form.petBreed },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "petBreed",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("HasError", {
                                attrs: { form: _vm.form, field: "petBreed" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-6 group" },
                            [
                              _vm._m(0),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.petAge,
                                    expression: "form.petAge"
                                  }
                                ],
                                class: {
                                  "is-invalid": _vm.form.errors.has("petAge")
                                },
                                attrs: {
                                  type: "number",
                                  placeholder: "Pet age..."
                                },
                                domProps: { value: _vm.form.petAge },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "petAge",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("HasError", {
                                attrs: { form: _vm.form, field: "petAge" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-6 group" },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Gender")
                              ]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.gender,
                                      expression: "form.gender"
                                    }
                                  ],
                                  class: {
                                    "is-invalid": _vm.form.errors.has("gender")
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.form,
                                        "gender",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "option",
                                    { attrs: { value: "", hidden: "" } },
                                    [_vm._v("Select Gender")]
                                  ),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "Male" } }, [
                                    _vm._v("Male")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "Female" } }, [
                                    _vm._v("Female")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("HasError", {
                                attrs: { form: _vm.form, field: "gender" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-6 group" },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Rabies Exp. Date")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.rabiesExpDate,
                                    expression: "form.rabiesExpDate"
                                  }
                                ],
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "rabiesExpDate"
                                  )
                                },
                                attrs: { type: "date" },
                                domProps: { value: _vm.form.rabiesExpDate },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "rabiesExpDate",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("HasError", {
                                attrs: {
                                  form: _vm.form,
                                  field: "rabiesExpDate"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-6 group" },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Pet Photograph")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                staticClass: "mt-3",
                                attrs: { type: "file", accept: "image/*" },
                                on: { change: _vm.photoChange }
                              }),
                              _vm._v(" "),
                              _c("HasError", {
                                attrs: { form: _vm.form, field: "photo" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-6 group" },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Vaccination Record")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                staticClass: "mt-3",
                                attrs: { type: "file", accept: "image/*" },
                                on: { change: _vm.vacChange }
                              }),
                              _vm._v(" "),
                              _c("HasError", {
                                attrs: { form: _vm.form, field: "vaccine" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-12 group" },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Feeding Instruction")
                              ]),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.feed,
                                    expression: "form.feed"
                                  }
                                ],
                                class: {
                                  "is-invalid": _vm.form.errors.has("feed")
                                },
                                staticStyle: { height: "200px !important" },
                                attrs: { rows: "15" },
                                domProps: { value: _vm.form.feed },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "feed",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("HasError", {
                                attrs: { form: _vm.form, field: "feed" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-12 group" },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Medication")
                              ]),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.medic,
                                    expression: "form.medic"
                                  }
                                ],
                                class: {
                                  "is-invalid": _vm.form.errors.has("medic")
                                },
                                staticStyle: { height: "200px !important" },
                                attrs: { rows: "15" },
                                domProps: { value: _vm.form.medic },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "medic",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("HasError", {
                                attrs: { form: _vm.form, field: "medic" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "col-md-12 mb-3 d-flex justify-content-start"
                            },
                            [
                              _c(
                                "Button",
                                {
                                  staticClass: "edit-profile-btn",
                                  attrs: { form: _vm.form }
                                },
                                [_vm._v("Add")]
                              ),
                              _vm._v(" "),
                              _vm.form.progress
                                ? _c(
                                    "p",
                                    { staticClass: "text-muted ms-4 mt-2" },
                                    [
                                      _c("strong", [
                                        _vm._v(
                                          "Uploading .... " +
                                            _vm._s(
                                              _vm.form.progress.percentage
                                            ) +
                                            "%"
                                        )
                                      ])
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-12 mb-3" },
                            [
                              _c("AlertError", { attrs: { form: _vm.form } }, [
                                _vm._v("Failed to create new pet")
                              ])
                            ],
                            1
                          )
                        ])
                      ]
                    )
                  ])
                : _vm._e()
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal animate a-lightSpeed",
        attrs: {
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true",
          "data-backdrop": "static",
          id: "popupModal2"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-body text-center p-lg" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("h3", { staticClass: "mt-4" }, [
                  _vm._v("Your pet was added successfully !")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mt-4" }, [
                  _c(
                    "button",
                    {
                      staticClass: "edit-profile-btn",
                      attrs: { type: "button" },
                      on: { click: _vm.closeModal }
                    },
                    [
                      _c("i", { staticClass: "fas fa-plus" }),
                      _vm._v(" Add Another Pet")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "edit-profile-btn bg-choco",
                      attrs: { type: "button", "data-dismiss": "modal" },
                      on: { click: _vm.bookingPage }
                    },
                    [
                      _c("i", { staticClass: "fas fa-arrow-right" }),
                      _vm._v(" Make Reservation")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "edit-profile-btn bg-orange mt-4",
                      attrs: { type: "button", "data-dismiss": "modal" },
                      on: { click: _vm.homePage }
                    },
                    [
                      _c("i", { staticClass: "fas fa-home" }),
                      _vm._v(" Return Home")
                    ]
                  )
                ])
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _vm._v("Pet Age "),
      _c("small", [_vm._v("(in years)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", { staticClass: "text-success" }, [
      _c("i", { staticClass: "fas fa-check-circle" })
    ])
  }
]
render._withStripped = true



/***/ })

}]);