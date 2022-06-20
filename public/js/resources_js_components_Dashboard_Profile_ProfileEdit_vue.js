(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_Profile_ProfileEdit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Profile/ProfileEdit.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Profile/ProfileEdit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      form: new Form({
        first_name: '',
        last_name: "",
        email: "",
        cell_phone: "",
        home_phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        vetName: "",
        vetNumber: "",
        emergencyPerson: "",
        emergencyContact: ""
      }),
      is_loading: true,
      welcomeText: false
    };
  },
  metaInfo: function metaInfo() {
    return {
      title: "Edit Profile"
    };
  },
  methods: {
    getProfileData: function getProfileData() {
      var _this = this;

      axios.get(api2 + "get-profile-data").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this.form.first_name = data.first_name;
        _this.form.last_name = data.last_name;
        _this.form.email = data.email;
        _this.form.cell_phone = data.profile.cell_phone;
        _this.form.home_phone = data.profile.home_phone;
        _this.form.city = data.profile.city;
        _this.form.state = data.profile.state;
        _this.form.zip = data.profile.zip;
        _this.form.vetName = data.profile.vet_name;
        _this.form.vetNumber = data.profile.vet_number;
        _this.form.emergencyPerson = data.profile.emergency_person;
        _this.form.emergencyContact = data.profile.emergency_contact;
        _this.form.address1 = data.profile.address1;
        _this.form.address2 = data.profile.address2;
        _this.is_loading = false;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    updateProfileData: function updateProfileData() {
      var _this2 = this;

      this.form.post(api2 + "update-profile-data").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          if (_this2.welcomeText == true) {
            $("#popupModal1").modal({
              backdrop: 'static',
              keyboard: false
            });
            $("#popupModal1").modal("show");
          } else {
            swal.fire("Profile updated", data.msg, "success");
          }

          _this2.welcomeText = false;

          _this2.remove_hash_from_url();
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    remove_hash_from_url: function remove_hash_from_url() {
      var uri = window.location.toString();

      if (uri.indexOf("#") > 0) {
        var clean_uri = uri.substring(0, uri.indexOf("#"));
        window.history.replaceState({}, document.title, clean_uri);
      }
    },
    returnHome: function returnHome() {
      $("#popupModal1").modal("hide");
      this.$router.push({
        name: "home.profile"
      });
    },
    addPet: function addPet() {
      $("#popupModal1").modal("hide");
      this.$router.push({
        name: "home.add-pet"
      });
    }
  },
  mounted: function mounted() {
    $('#popupModal1').on('show.bs.modal', function (e) {
      $(this).find('[role=document]').removeClass().addClass('modal-dialog a-lightSpeed');
    });

    if (window.location.hash == "#welcome") {
      this.welcomeText = true;
    }
  },
  created: function created() {
    this.getProfileData();
  }
});

/***/ }),

/***/ "./resources/js/components/Dashboard/Profile/ProfileEdit.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Dashboard/Profile/ProfileEdit.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfileEdit_vue_vue_type_template_id_7e9cfc57___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileEdit.vue?vue&type=template&id=7e9cfc57& */ "./resources/js/components/Dashboard/Profile/ProfileEdit.vue?vue&type=template&id=7e9cfc57&");
/* harmony import */ var _ProfileEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/Profile/ProfileEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProfileEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProfileEdit_vue_vue_type_template_id_7e9cfc57___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProfileEdit_vue_vue_type_template_id_7e9cfc57___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/Profile/ProfileEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/Profile/ProfileEdit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Profile/ProfileEdit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Profile/ProfileEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Dashboard/Profile/ProfileEdit.vue?vue&type=template&id=7e9cfc57&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Profile/ProfileEdit.vue?vue&type=template&id=7e9cfc57& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_template_id_7e9cfc57___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_template_id_7e9cfc57___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_template_id_7e9cfc57___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileEdit.vue?vue&type=template&id=7e9cfc57& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Profile/ProfileEdit.vue?vue&type=template&id=7e9cfc57&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Profile/ProfileEdit.vue?vue&type=template&id=7e9cfc57&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Profile/ProfileEdit.vue?vue&type=template&id=7e9cfc57& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "dashboard" }, [
    _c("div", { staticClass: "cover" }),
    _vm._v(" "),
    _c("div", { staticClass: "content" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row justify-content-center" }, [
          _vm.welcomeText
            ? _c("div", { staticClass: "col-md-9 mb-4" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "alert alert-success alert-dismissible fade show",
                    attrs: { role: "alert" }
                  },
                  [
                    _c("strong", [
                      _vm._v("Welcome, " + _vm._s(_vm.form.last_name))
                    ]),
                    _vm._v(
                      "    You should complete your profile before making any reservation\n                          "
                    ),
                    _c("button", {
                      staticClass: "btn-close",
                      attrs: {
                        type: "button",
                        "data-bs-dismiss": "alert",
                        "aria-label": "Close"
                      }
                    })
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-9" }, [
            _c("div", { staticClass: "profile-card" }, [
              _c(
                "div",
                { staticClass: "header d-flex justify-content-between" },
                [
                  _c("h5", { staticClass: "text-muted" }, [
                    _vm._v("Edit Profile")
                  ]),
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
              _vm.is_loading
                ? _c("div", { staticClass: "body mt-4" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-6 mb-3" },
                        [
                          _c("skeleton", {
                            attrs: { width: "100%", height: "40px" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6 mb-3" },
                        [
                          _c("skeleton", {
                            attrs: { width: "100%", height: "40px" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-12 mb-3" },
                        [
                          _c("skeleton", {
                            attrs: { width: "100%", height: "40px" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6 mb-3" },
                        [
                          _c("skeleton", {
                            attrs: { width: "100%", height: "40px" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6 mb-3" },
                        [
                          _c("skeleton", {
                            attrs: { width: "100%", height: "40px" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4 col-6 mb-3" },
                        [
                          _c("skeleton", {
                            attrs: { width: "100%", height: "40px" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4 col-6 mb-3" },
                        [
                          _c("skeleton", {
                            attrs: { width: "100%", height: "40px" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4 col-6 mb-3" },
                        [
                          _c("skeleton", {
                            attrs: { width: "100%", height: "40px" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6 mb-3" },
                        [
                          _c("skeleton", {
                            attrs: { width: "100%", height: "40px" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6 mb-3" },
                        [
                          _c("skeleton", {
                            attrs: { width: "100%", height: "40px" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6 mb-3" },
                        [
                          _c("skeleton", {
                            attrs: { width: "100%", height: "40px" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6 mb-3" },
                        [
                          _c("skeleton", {
                            attrs: { width: "100%", height: "40px" }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.is_loading
                ? _c("div", { staticClass: "card-body" }, [
                    _c(
                      "form",
                      {
                        staticClass: "login-form",
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.updateProfileData.apply(null, arguments)
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
                                _vm._v("First name")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.first_name,
                                    expression: "form.first_name"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "first_name"
                                  )
                                },
                                attrs: { type: "text" },
                                domProps: { value: _vm.form.first_name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "first_name",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("HasError", {
                                attrs: { form: _vm.form, field: "first_name" }
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
                                _vm._v("Last name")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.last_name,
                                    expression: "form.last_name"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("last_name")
                                },
                                attrs: { type: "text" },
                                domProps: { value: _vm.form.last_name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "last_name",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("HasError", {
                                attrs: { form: _vm.form, field: "last_name" }
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
                                _vm._v("Email")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.email,
                                    expression: "form.email"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("email")
                                },
                                attrs: { type: "email" },
                                domProps: { value: _vm.form.email },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "email",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("HasError", {
                                attrs: { form: _vm.form, field: "email" }
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
                                _vm._v("Cell phone number")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.cell_phone,
                                    expression: "form.cell_phone"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "cell_phone"
                                  )
                                },
                                attrs: { type: "tel" },
                                domProps: { value: _vm.form.cell_phone },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "cell_phone",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("HasError", {
                                attrs: { form: _vm.form, field: "cell_phone" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6 group" }, [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Home Phone")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.home_phone,
                                  expression: "form.home_phone"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.form.home_phone },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "home_phone",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-6 group" },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Address line 1")
                              ]),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.address1,
                                    expression: "form.address1"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("address1")
                                },
                                attrs: { maxlength: "100" },
                                domProps: { value: _vm.form.address1 },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "address1",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("HasError", {
                                attrs: { form: _vm.form, field: "address1" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6 group" }, [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Address line 2 (Optional)")
                            ]),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.address2,
                                  expression: "form.address2"
                                }
                              ],
                              staticClass: "form-control",
                              domProps: { value: _vm.form.address2 },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "address2",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-4 col-6 group" },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("City")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.city,
                                    expression: "form.city"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("city")
                                },
                                attrs: { type: "text" },
                                domProps: { value: _vm.form.city },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "city",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("HasError", {
                                attrs: { form: _vm.form, field: "city" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-4 col-6 group" },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("State")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.state,
                                    expression: "form.state"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("state")
                                },
                                attrs: { type: "text" },
                                domProps: { value: _vm.form.state },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "state",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("HasError", {
                                attrs: { form: _vm.form, field: "state" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-4 col-6 group" },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Zip Code")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.zip,
                                    expression: "form.zip"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("zip")
                                },
                                attrs: { type: "text" },
                                domProps: { value: _vm.form.zip },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "zip",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("HasError", {
                                attrs: { form: _vm.form, field: "zip" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6 group" }, [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Vet Name")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.vetName,
                                  expression: "form.vetName"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.form.vetName },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "vetName",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6 group" }, [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Vet Number")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.vetNumber,
                                  expression: "form.vetNumber"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.form.vetNumber },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "vetNumber",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6 group" }, [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Emergency Person")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.emergencyPerson,
                                  expression: "form.emergencyPerson"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.form.emergencyPerson },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "emergencyPerson",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6 group" }, [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Emergency Person Contact")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.emergencyContact,
                                  expression: "form.emergencyContact"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "tel" },
                              domProps: { value: _vm.form.emergencyContact },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "emergencyContact",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-12 mb-3" },
                            [
                              _c(
                                "Button",
                                {
                                  staticClass: "update-btn",
                                  attrs: { form: _vm.form }
                                },
                                [_vm._v("Update")]
                              )
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
            id: "popupModal1"
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-body text-center p-lg" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("p", [_vm._v("Great ! Profile Updated")]),
                  _vm._v(" "),
                  _c("h2", [_vm._v("Let's add some pets")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-4" }, [
                    _c(
                      "button",
                      {
                        staticClass: "rising-btn rising-btn-success mr-2",
                        attrs: { type: "button" },
                        on: { click: _vm.addPet }
                      },
                      [
                        _c("i", { staticClass: "fas fa-plus" }),
                        _vm._v(" Add Pets")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "rising-btn rising-btn-pink mr-2",
                        attrs: { type: "button", "data-dismiss": "modal" },
                        on: { click: _vm.returnHome }
                      },
                      [
                        _c("i", { staticClass: "fas fa-home" }),
                        _vm._v(" Return home")
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
  ])
}
var staticRenderFns = [
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