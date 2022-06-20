(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_BookingDetails_Grooming_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/BookingDetails/Grooming.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/BookingDetails/Grooming.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      is_loading: true,
      bookingData: {}
    };
  },
  methods: {
    getGroomingData: function getGroomingData() {
      var _this = this;

      axios.get(api2 + "get-grooming-data", {
        params: {
          id: this.$route.params.id
        }
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          _this.bookingData = data.data;
          _this.is_loading = false;
        } else {
          _this.$router.push({
            name: 'booking-history.grooming'
          });
        }
      })["catch"](function (err) {
        console.error(err.response.data);

        _this.$router.push({
          name: 'booking-history.grooming'
        });
      });
    },
    cancelOrder: function cancelOrder(groomingId) {
      var _this2 = this;

      swal.fire({
        title: "Alert!",
        text: "Are you sure you want to cancel your booking?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then(function (res) {
        if (res.isConfirmed) {
          axios.post(api2 + "cancel-grooming", {
            groomingId: groomingId
          }).then(function (resp) {
            return resp.data;
          }).then(function (data) {
            if (data.status == "ok") {
              swal.fire("Booking Canceled", data.msg, "success");
              _this2.bookingData.status = "canceled";
              _this2.bookingData.statusText = "Canceled";
            } else {
              swal.fire("Failed", data.msg, "error");
            }
          })["catch"](function (err) {
            console.error(err.response.data);
          });
        }
      });
    }
  },
  created: function created() {
    this.getGroomingData();
  }
});

/***/ }),

/***/ "./resources/js/components/Dashboard/BookingDetails/Grooming.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Dashboard/BookingDetails/Grooming.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Grooming_vue_vue_type_template_id_0ae401b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grooming.vue?vue&type=template&id=0ae401b0& */ "./resources/js/components/Dashboard/BookingDetails/Grooming.vue?vue&type=template&id=0ae401b0&");
/* harmony import */ var _Grooming_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grooming.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/BookingDetails/Grooming.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Grooming_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Grooming_vue_vue_type_template_id_0ae401b0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Grooming_vue_vue_type_template_id_0ae401b0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/BookingDetails/Grooming.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/BookingDetails/Grooming.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/BookingDetails/Grooming.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grooming_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Grooming.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/BookingDetails/Grooming.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grooming_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Dashboard/BookingDetails/Grooming.vue?vue&type=template&id=0ae401b0&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/BookingDetails/Grooming.vue?vue&type=template&id=0ae401b0& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grooming_vue_vue_type_template_id_0ae401b0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grooming_vue_vue_type_template_id_0ae401b0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grooming_vue_vue_type_template_id_0ae401b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Grooming.vue?vue&type=template&id=0ae401b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/BookingDetails/Grooming.vue?vue&type=template&id=0ae401b0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/BookingDetails/Grooming.vue?vue&type=template&id=0ae401b0&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/BookingDetails/Grooming.vue?vue&type=template&id=0ae401b0& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "section" }, [
    _c("div", { staticClass: "container" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-8" }, [
          _c("div", { staticClass: "booking-card" }, [
            _c("div", { staticClass: "card-header text-end" }, [
              _c(
                "div",
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn-back",
                      attrs: {
                        to: { name: "booking-history.grooming" },
                        title: "Go back"
                      }
                    },
                    [
                      _c("i", { staticClass: "fas fa-arrow-left" }),
                      _vm._v(" Go back")
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            !_vm.is_loading
              ? _c("div", { staticClass: "card-body" }, [
                  _c("ul", { staticClass: "list-group" }, [
                    _c(
                      "li",
                      {
                        staticClass:
                          "list-group-item ap-item d-flex justify-content-between align-items-center"
                      },
                      [
                        _c("b", { staticClass: "text-choco" }, [
                          _vm._v("Appointment ID")
                        ]),
                        _vm._v(" "),
                        _c("strong", [_vm._v("#" + _vm._s(_vm.bookingData.id))])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass:
                          "list-group-item ap-item d-flex justify-content-between align-items-center"
                      },
                      [
                        _c("b", { staticClass: "text-choco" }, [
                          _vm._v("Appointment Date")
                        ]),
                        _vm._v(" "),
                        _c("strong", [
                          _vm._v(_vm._s(_vm.bookingData.startDate))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass:
                          "list-group-item ap-item d-flex justify-content-between align-items-center"
                      },
                      [
                        _c("b", { staticClass: "text-choco" }, [
                          _vm._v("Appointment Ended At")
                        ]),
                        _vm._v(" "),
                        _c("strong", [
                          _vm._v(_vm._s(_vm.bookingData.endTime || "-"))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass:
                          "list-group-item ap-item d-flex justify-content-between align-items-center"
                      },
                      [
                        _c("b", { staticClass: "text-choco" }, [
                          _vm._v("Appointment Status")
                        ]),
                        _vm._v(" "),
                        _vm.bookingData.status == "pending"
                          ? _c(
                              "span",
                              { staticClass: "badge badge-pill bg-warning" },
                              [_vm._v(_vm._s(_vm.bookingData.statusText))]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.bookingData.status == "ongoing"
                          ? _c(
                              "span",
                              { staticClass: "badge badge-pill bg-primary" },
                              [_vm._v(_vm._s(_vm.bookingData.statusText))]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.bookingData.status == "canceled"
                          ? _c(
                              "span",
                              { staticClass: "badge badge-pill bg-danger" },
                              [_vm._v(_vm._s(_vm.bookingData.statusText))]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.bookingData.status == "completed"
                          ? _c(
                              "span",
                              { staticClass: "badge badge-pill bg-success" },
                              [_vm._v(_vm._s(_vm.bookingData.statusText))]
                            )
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass:
                          "list-group-item ap-item d-flex justify-content-between align-items-center"
                      },
                      [
                        _c("b", { staticClass: "text-choco" }, [
                          _vm._v("Bill")
                        ]),
                        _vm._v(" "),
                        _c("strong", [
                          _vm._v(_vm._s(_vm.bookingData.price || "-"))
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "table-responsive mb-5" }, [
                    _c(
                      "table",
                      { staticClass: "mt-3 pet-table" },
                      _vm._l(_vm.bookingData.pets, function(pet, i) {
                        return _c(
                          "tr",
                          { key: i, staticClass: "grooming-table" },
                          [
                            _c("td", [
                              _c("img", {
                                staticClass: "pet-thumb",
                                attrs: { src: pet.photo, alt: "" }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-choco" }, [
                              _c("strong", [_vm._v(_vm._s(pet.name))])
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.bookingData.note || "---"))]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _vm.bookingData.status == "pending"
                    ? _c("div", { staticClass: "col-12 mt-4" }, [
                        _c(
                          "button",
                          {
                            staticClass: "booking-btn",
                            on: {
                              click: function($event) {
                                return _vm.cancelOrder(_vm.bookingData.id)
                              }
                            }
                          },
                          [_vm._v("Cancel Booking")]
                        )
                      ])
                    : _vm._e()
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.is_loading
              ? _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    _c("ul", { staticClass: "list-group" }, [
                      _c(
                        "li",
                        {
                          staticClass:
                            "list-group-item d-flex justify-content-between align-items-center"
                        },
                        [
                          _c("skeleton", {
                            attrs: { width: "200px", height: "25px" }
                          }),
                          _vm._v(" "),
                          _c("skeleton", {
                            attrs: { width: "100px", height: "25px" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass:
                            "list-group-item d-flex justify-content-between align-items-center"
                        },
                        [
                          _c("skeleton", {
                            attrs: { width: "200px", height: "25px" }
                          }),
                          _vm._v(" "),
                          _c("skeleton", {
                            attrs: { width: "100px", height: "25px" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass:
                            "list-group-item d-flex justify-content-between align-items-center"
                        },
                        [
                          _c("skeleton", {
                            attrs: { width: "200px", height: "25px" }
                          }),
                          _vm._v(" "),
                          _c("skeleton", {
                            attrs: { width: "100px", height: "25px" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass:
                            "list-group-item d-flex justify-content-between align-items-center"
                        },
                        [
                          _c("skeleton", {
                            attrs: { width: "200px", height: "25px" }
                          }),
                          _vm._v(" "),
                          _c("skeleton", {
                            attrs: { width: "100px", height: "25px" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass:
                            "list-group-item d-flex justify-content-between align-items-center"
                        },
                        [
                          _c("skeleton", {
                            attrs: { width: "200px", height: "25px" }
                          }),
                          _vm._v(" "),
                          _c("skeleton", {
                            attrs: { width: "100px", height: "25px" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr")
                    ]),
                    _vm._v(" "),
                    _vm._m(3),
                    _vm._v(" "),
                    _c("div", { staticClass: "table-responsive mb-5" }, [
                      _c(
                        "table",
                        { staticClass: "mt-3" },
                        _vm._l(4, function(n) {
                          return _c(
                            "tr",
                            { key: n, staticClass: "grooming-table" },
                            [
                              _c(
                                "td",
                                [
                                  _c("skeleton", {
                                    attrs: { width: "50px", height: "50px" }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "text-muted" },
                                [
                                  _c("skeleton", {
                                    attrs: { width: "200px", height: "25px" }
                                  })
                                ],
                                1
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(4),
                    _vm._v(" "),
                    _c("skeleton", {
                      attrs: { width: "100%", height: "15px" }
                    }),
                    _vm._v(" "),
                    _c("skeleton", { attrs: { width: "90%", height: "15px" } }),
                    _vm._v(" "),
                    _c("skeleton", { attrs: { width: "80%", height: "15px" } }),
                    _vm._v(" "),
                    _c("hr")
                  ],
                  1
                )
              : _vm._e()
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
    return _c("div", { staticClass: "seciton-title" }, [
      _c("h4", { staticClass: "text-choco" }, [_vm._v("Appointment Details")]),
      _vm._v(" "),
      _c("img", { attrs: { src: "/image/title_img.png", alt: "" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", [_c("strong", [_vm._v("Pets")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", [_c("strong", [_vm._v("Note")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", [_c("strong", [_vm._v("Pets")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", [_c("strong", [_vm._v("Note")])])
  }
]
render._withStripped = true



/***/ })

}]);