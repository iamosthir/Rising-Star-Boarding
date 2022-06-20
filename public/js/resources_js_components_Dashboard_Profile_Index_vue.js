(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_Profile_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Profile/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Profile/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: function metaInfo() {
    return {
      title: "Profile - Rising Star Boarding"
    };
  },
  data: function data() {
    return {
      is_loading: true,
      profile: {},
      userName: '',
      customerExists: true,
      pets: [],
      cdn: cdn,
      userEmail: ""
    };
  },
  methods: {
    getProfileData: function getProfileData() {
      var _this = this;

      axios.get(api2 + "get-profile-data").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this.profile = data.profile;
        _this.userName = data.userName;
        _this.customerExists = data.customerExists;
        _this.pets = data.pets;
        _this.userEmail = data.email;
        _this.is_loading = false;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    }
  },
  created: function created() {
    this.getProfileData();
  }
});

/***/ }),

/***/ "./resources/js/components/Dashboard/Profile/Index.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Dashboard/Profile/Index.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_5bc73f56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=5bc73f56& */ "./resources/js/components/Dashboard/Profile/Index.vue?vue&type=template&id=5bc73f56&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/Profile/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Index_vue_vue_type_template_id_5bc73f56___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_5bc73f56___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/Profile/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/Profile/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Profile/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Profile/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Dashboard/Profile/Index.vue?vue&type=template&id=5bc73f56&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Profile/Index.vue?vue&type=template&id=5bc73f56& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5bc73f56___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5bc73f56___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5bc73f56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=5bc73f56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Profile/Index.vue?vue&type=template&id=5bc73f56&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Profile/Index.vue?vue&type=template&id=5bc73f56&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Profile/Index.vue?vue&type=template&id=5bc73f56& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
        _vm.is_loading
          ? _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-7" }, [
                _c(
                  "div",
                  { staticClass: "profile-card" },
                  [
                    _c("skeleton", {
                      attrs: { width: "100%", height: "400px" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5" }, [
                _c(
                  "div",
                  { staticClass: "profile-card" },
                  [
                    _c("skeleton", {
                      attrs: { width: "100%", height: "400px" }
                    })
                  ],
                  1
                )
              ])
            ])
          : _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-7" }, [
                _c("div", { staticClass: "profile-card" }, [
                  _c(
                    "div",
                    { staticClass: "text-end" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "edit-profile-btn",
                          attrs: { to: { name: "home.profile.setting" } }
                        },
                        [
                          _vm._v("Edit Profile "),
                          _c("i", { staticClass: "fas fa-pen" })
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "row mt-5" }, [
                    _c("div", { staticClass: "col-md-5" }, [
                      _c("img", {
                        staticClass: "user-thumb",
                        attrs: { src: "/image/user.png", alt: "" }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "user-basic" }, [
                        _c("h4", [_vm._v(_vm._s(_vm.userName))]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.userEmail))]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.profile.cell_phone))]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "Address : " +
                              _vm._s(
                                _vm.profile.address1 +
                                  " " +
                                  _vm.profile.address2
                              )
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v("Pets - " + _vm._s(_vm.pets.length))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-7" }, [
                      _c("div", { staticClass: "user-item" }, [
                        _c("h4", [_vm._v("City")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.profile.city || "-"))])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "user-item" }, [
                        _c("h4", [_vm._v("State")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.profile.state || "-"))])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "user-item" }, [
                        _c("h4", [_vm._v("Zip Code")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.profile.zip || "-"))])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "user-item" }, [
                        _c("h4", [_vm._v("Home Phone")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.profile.home_phone || "-"))])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "user-item" }, [
                        _c("h4", [_vm._v("Vet Name")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.profile.vet_name || "-"))])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "user-item" }, [
                        _c("h4", [_vm._v("Vet number")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.profile.vet_number || "-"))])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "user-item" }, [
                        _c("h4", [_vm._v("Emergency Person")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(_vm._s(_vm.profile.emergency_person || "-"))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "user-item" }, [
                        _c("h4", [_vm._v("Emergency Person Contact")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(_vm._s(_vm.profile.emergency_contact || "-"))
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mt-2 text-center" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "edit-profile-btn bg-choco",
                          attrs: { to: { name: "booking-history" } }
                        },
                        [
                          _c("i", { staticClass: "fas fa-clock" }),
                          _vm._v(" My Bookings")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "edit-profile-btn bg-orange",
                          attrs: { to: { name: "home.reservation" } }
                        },
                        [
                          _c("i", { staticClass: "fas fa-plus" }),
                          _vm._v(" Start new booking")
                        ]
                      )
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5" }, [
                _c("div", { staticClass: "profile-card" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm.pets.length > 0
                    ? _c("div", { staticClass: "pet-table" }, [
                        _c(
                          "table",
                          _vm._l(_vm.pets, function(pet, i) {
                            return _c("tr", { key: i }, [
                              _c("td", [
                                pet.photo == null
                                  ? _c("img", {
                                      staticClass: "pet-thumb",
                                      attrs: {
                                        src: "/image/dog-placeholder-tall.svg",
                                        alt: ""
                                      }
                                    })
                                  : _c("img", {
                                      staticClass: "pet-thumb",
                                      attrs: {
                                        src:
                                          _vm.cdn +
                                          "/uploads/customer/" +
                                          _vm.profile.id +
                                          "/" +
                                          pet.photo,
                                        alt: ""
                                      }
                                    })
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "pet-name" }, [
                                _vm._v(_vm._s(pet.name))
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "sm-btn sm-bt-choco",
                                      attrs: {
                                        to: {
                                          name: "home.pet-details",
                                          params: { id: pet.id }
                                        }
                                      }
                                    },
                                    [_vm._v("View / Edit")]
                                  )
                                ],
                                1
                              )
                            ])
                          }),
                          0
                        )
                      ])
                    : _c("div", { staticClass: "mt-5 mb-5 text-center" }, [
                        _c(
                          "h4",
                          {
                            staticClass: "text-choco",
                            staticStyle: { "font-family": "'Bubblegum Sans" }
                          },
                          [_vm._v("You have no pets")]
                        )
                      ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-center mt-5" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "edit-profile-btn",
                          attrs: { to: { name: "home.add-pet" } }
                        },
                        [
                          _c("i", { staticClass: "fas fa-plus" }),
                          _vm._v(" Add pet")
                        ]
                      )
                    ],
                    1
                  )
                ])
              ])
            ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header" }, [_c("h4", [_vm._v("My Pets")])])
  }
]
render._withStripped = true



/***/ })

}]);