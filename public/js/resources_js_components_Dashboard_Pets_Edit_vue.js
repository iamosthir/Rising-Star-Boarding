(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_Pets_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Pets/Edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Pets/Edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      is_loading: true,
      petData: {},
      cdn: cdn,
      moment: moment,
      deleting: false,
      deleteText: 'Delete',
      editMode: false,
      form: new Form({
        petId: this.$route.params.id,
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
      title: "Edit Pet"
    };
  },
  methods: {
    getPetData: function getPetData() {
      var _this = this;

      axios.get(api2 + "get-pet-data", {
        params: {
          petId: this.$route.params.id
        }
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          _this.petData = data.petData;
          _this.form.petName = data.petData.name;
          _this.form.petColor = data.petData.color;
          _this.form.petAge = data.petData.age;
          _this.form.rabiesExpDate = data.petData.rabies;
          _this.form.petBreed = data.petData.breed;
          _this.form.feed = data.petData.feeding;
          _this.form.medic = data.petData.medic;
          _this.form.gender = data.petData.gender;
          _this.is_loading = false;
        } else {
          _this.$router.push({
            name: "home.profile"
          });
        }
      })["catch"](function (err) {
        console.error(err.response.data);

        _this.$router.push({
          name: "home.profile"
        });
      });
    },
    deletePet: function deletePet() {
      var _this2 = this;

      swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          _this2.deleting = true;
          _this2.deleteText = "Please wait";
          axios.post(api2 + 'delete-pet', {
            petId: _this2.$route.params.id
          }).then(function (resp) {
            return resp.data;
          }).then(function (data) {
            console.log(data);

            if (data.status == "ok") {
              swal.fire({
                title: "Deleted",
                text: data.msg,
                icon: "success"
              }).then(function () {
                _this2.$router.push({
                  name: "home.profile"
                });
              });
            } else {
              swal.fire("Failed", data.msg, "error");
            }
          })["catch"](function (err) {
            console.error(err.response.data);
          });
        }
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
    updatePet: function updatePet() {
      var _this3 = this;

      this.form.post(api2 + "update-pet-data").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        console.log(data);

        if (data.status == "ok") {
          $('input[type="file"]').val("");
          swal.fire("Updated", data.msg, "success");

          _this3.getPetData();

          _this3.editMode = false;
        } else {
          swal.fire("Fail to update", data.msg, "error");
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    }
  },
  created: function created() {
    this.getPetData();
  }
});

/***/ }),

/***/ "./resources/js/components/Dashboard/Pets/Edit.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Dashboard/Pets/Edit.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_0a9b21a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=0a9b21a2& */ "./resources/js/components/Dashboard/Pets/Edit.vue?vue&type=template&id=0a9b21a2&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/Pets/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Edit_vue_vue_type_template_id_0a9b21a2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_0a9b21a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/Pets/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/Pets/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Pets/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Pets/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Dashboard/Pets/Edit.vue?vue&type=template&id=0a9b21a2&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Pets/Edit.vue?vue&type=template&id=0a9b21a2& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_0a9b21a2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_0a9b21a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_0a9b21a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=0a9b21a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Pets/Edit.vue?vue&type=template&id=0a9b21a2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Pets/Edit.vue?vue&type=template&id=0a9b21a2&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Pets/Edit.vue?vue&type=template&id=0a9b21a2& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
        _vm.editMode
          ? _c("div", { staticClass: "col-md-8" }, [
              _c("div", { staticClass: "profile-card bg-bg" }, [
                _c(
                  "div",
                  { staticClass: "header d-flex justify-content-between" },
                  [
                    _c("h4", { staticClass: "text-muted" }, [
                      _vm._v("Edit Mode")
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn my-btn",
                        on: {
                          click: function($event) {
                            _vm.editMode = false
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fas fa-times" }),
                        _vm._v("   Cancel")
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "form",
                    {
                      staticClass: "login-form",
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.updatePet.apply(null, arguments)
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
                                      .call($event.target.options, function(o) {
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
                              attrs: { form: _vm.form, field: "rabiesExpDate" }
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
                              _vm._v("Change Pet Photograph")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "mt-2",
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
                              _vm._v("Change Vaccination Record")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "mt-2",
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
                                staticClass: "rising-btn rising-btn-pink",
                                attrs: { form: _vm.form }
                              },
                              [_vm._v("Update")]
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
                                          _vm._s(_vm.form.progress.percentage) +
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
                              _vm._v("Failed to update")
                            ])
                          ],
                          1
                        )
                      ])
                    ]
                  )
                ])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.editMode
          ? _c("div", { staticClass: "col-md-8" }, [
              _c("div", { staticClass: "profile-card bg-bg" }, [
                _c(
                  "div",
                  { staticClass: "header d-flex justify-content-between" },
                  [
                    _c("h4", [_vm._v(_vm._s(_vm.petData.name))]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "btn",
                        attrs: { to: { name: "home.profile" } }
                      },
                      [
                        _c("i", { staticClass: "fas fa-arrow-left" }),
                        _vm._v(" Go back")
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _vm.is_loading
                    ? _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-12 text-center mb-3" },
                          [
                            _c("skeleton", {
                              staticClass: "user-round",
                              attrs: { width: "100px", height: "100px" }
                            }),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("skeleton", {
                              attrs: { width: "150px", height: "20px" }
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
                              attrs: { width: "100%", height: "20px" }
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
                              attrs: { width: "100%", height: "20px" }
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
                              attrs: { width: "100%", height: "20px" }
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
                              attrs: { width: "100%", height: "20px" }
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
                              attrs: { width: "100%", height: "20px" }
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
                              attrs: { width: "100%", height: "20px" }
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
                              attrs: { width: "100%", height: "15px" }
                            }),
                            _vm._v(" "),
                            _c("skeleton", {
                              attrs: { width: "100%", height: "15px" }
                            }),
                            _vm._v(" "),
                            _c("skeleton", {
                              attrs: { width: "100%", height: "15px" }
                            }),
                            _vm._v(" "),
                            _c("skeleton", {
                              attrs: { width: "100%", height: "15px" }
                            }),
                            _vm._v(" "),
                            _c("skeleton", {
                              attrs: { width: "100%", height: "15px" }
                            }),
                            _vm._v(" "),
                            _c("skeleton", {
                              attrs: { width: "100%", height: "15px" }
                            }),
                            _vm._v(" "),
                            _c("skeleton", {
                              attrs: { width: "100%", height: "15px" }
                            }),
                            _vm._v(" "),
                            _c("skeleton", {
                              attrs: { width: "100%", height: "15px" }
                            }),
                            _vm._v(" "),
                            _c("skeleton", {
                              attrs: { width: "100%", height: "15px" }
                            }),
                            _vm._v(" "),
                            _c("skeleton", {
                              attrs: { width: "100%", height: "15px" }
                            })
                          ],
                          1
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.is_loading
                    ? _c("div", { staticClass: "pet-info mt-3" }, [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-12 text-center mb-5" },
                            [
                              _vm.petData.photo
                                ? _c("img", {
                                    staticClass: "user-thumb",
                                    attrs: {
                                      src:
                                        _vm.cdn +
                                        "/uploads/customer/" +
                                        _vm.petData.customer_id +
                                        "/" +
                                        _vm.petData.photo,
                                      alt: ""
                                    }
                                  })
                                : _c("img", {
                                    staticClass: "user-thumb",
                                    attrs: {
                                      src: "/image/dog-placeholder-tall.svg",
                                      alt: ""
                                    }
                                  }),
                              _vm._v(" "),
                              _c("h3", { staticClass: "mt-2 text-muted" }, [
                                _c("b", [_vm._v(_vm._s(_vm.petData.name))])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-4 col-6 mb-3" }, [
                            _vm._m(1),
                            _vm._v(" "),
                            _c("p", { staticClass: "pet-details-text" }, [
                              _vm._v(_vm._s(_vm.petData.color))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-4 col-6 mb-3" }, [
                            _vm._m(2),
                            _vm._v(" "),
                            _c("p", { staticClass: "pet-details-text" }, [
                              _vm._v(_vm._s(_vm.petData.breed))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-4 col-6 mb-3" }, [
                            _vm._m(3),
                            _vm._v(" "),
                            _c("p", { staticClass: "pet-details-text" }, [
                              _vm._v(_vm._s(_vm.petData.age) + " Years")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-4 col-6 mb-3" }, [
                            _vm._m(4),
                            _vm._v(" "),
                            _c("p", { staticClass: "pet-details-text" }, [
                              _vm._v(_vm._s(_vm.petData.gender))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-4 col-6 mb-3" }, [
                            _vm._m(5),
                            _vm._v(" "),
                            _c("p", { staticClass: "pet-details-text" }, [
                              _vm._v(
                                _vm._s(
                                  _vm
                                    .moment(_vm.petData.rabies)
                                    .format("DD MMM YYYY")
                                )
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-4 col-6 mb-3" }, [
                            _vm._m(6),
                            _vm._v(" "),
                            _vm.petData.vac_record == null
                              ? _c("p", { staticClass: "pet-details-text" }, [
                                  _vm._m(7)
                                ])
                              : _c("p", { staticClass: "pet-details-text" }, [
                                  _vm._m(8),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "btn text-primary",
                                      attrs: {
                                        title: "Preview",
                                        target: "_blank",
                                        href:
                                          _vm.cdn +
                                          "/uploads/customer/" +
                                          _vm.petData.customer_id +
                                          "/" +
                                          _vm.petData.vac_record
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-download"
                                      })
                                    ]
                                  )
                                ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-12 mb-3" }, [
                            _vm._m(9),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-info" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(_vm.petData.feeding) +
                                  "\n                                    "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-12 mb-3" }, [
                            _vm._m(10),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-info" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(_vm.petData.medic) +
                                  "\n                                    "
                              )
                            ])
                          ])
                        ])
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mt-5" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "button",
                        {
                          staticClass: "edit-profile-btn",
                          on: {
                            click: function($event) {
                              _vm.editMode = true
                            }
                          }
                        },
                        [_vm._v("Edit")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "edit-profile-btn bg-danger",
                          attrs: { disabled: _vm.deleting },
                          on: { click: _vm.deletePet }
                        },
                        [
                          _vm.deleting == true
                            ? _c("span", {
                                staticClass: "spinner-border spinner-border-sm",
                                attrs: { role: "status", "aria-hidden": "true" }
                              })
                            : _vm._e(),
                          _vm._v(
                            "\n                                      " +
                              _vm._s(_vm.deleteText) +
                              "\n                                  "
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ])
            ])
          : _vm._e()
      ])
    ])
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
    return _c("div", { staticClass: "pet-items" }, [
      _c("h6", [_c("b", [_vm._v("Color")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pet-items" }, [
      _c("h6", [_c("b", [_vm._v("Breed")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pet-items" }, [
      _c("h6", [_c("b", [_vm._v("Age")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pet-items" }, [
      _c("h6", [_c("b", [_vm._v("Gender")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pet-items" }, [
      _c("h6", [_c("b", [_vm._v("Rabies Expiration Date")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pet-items" }, [
      _c("h6", [_c("b", [_vm._v("Vaccination Record")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "text-danger" }, [
      _c("i", { staticClass: "fas fa-times" }),
      _vm._v(" No")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "text-success" }, [
      _c("i", { staticClass: "fas fa-check" }),
      _vm._v(" Yes")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pet-items" }, [
      _c("h6", [_c("b", [_vm._v("Feeding Instruction")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pet-items" }, [
      _c("h6", [_c("b", [_vm._v("Medication")])])
    ])
  }
]
render._withStripped = true



/***/ })

}]);