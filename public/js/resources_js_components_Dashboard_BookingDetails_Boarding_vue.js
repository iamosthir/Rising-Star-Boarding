(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_BookingDetails_Boarding_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/BookingDetails/Boarding.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/BookingDetails/Boarding.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      bookingDetails: {},
      pets: [],
      pricing: {}
    };
  },
  methods: {
    getBoardingData: function getBoardingData() {
      var _this = this;

      axios.get(api2 + "get-boarding-details", {
        params: {
          boardingId: this.$route.params.id
        }
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          _this.bookingDetails = data.data.bookingData;
          _this.pets = data.data.pets;
          _this.pricing = data.data.pricing;
          _this.is_loading = false;
        } else {
          _this.$router.push({
            name: "booking-history.boarding"
          });
        }
      })["catch"](function (err) {
        console.error(err.response.data);

        _this.$router.push({
          name: "booking-history.boarding"
        });
      });
    },
    cancelBooking: function cancelBooking(boardingId, index) {
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
          axios.post(api2 + "cancel-boarding", {
            boardingId: boardingId
          }).then(function (resp) {
            return resp.data;
          }).then(function (data) {
            if (data.status == "ok") {
              swal.fire("Booking canceled", data.msg, "success");
              _this2.bookingDetails.status = 'canceled';
              _this2.bookingDetails.statusText = 'Canceled';
            } else {
              swal.fire("Something Went Wrong", data.msg, "error");
            }
          })["catch"](function (err) {
            console.error(err.response.data);
          });
        }
      });
    }
  },
  created: function created() {
    this.getBoardingData();
  }
});

/***/ }),

/***/ "./resources/js/components/Dashboard/BookingDetails/Boarding.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Dashboard/BookingDetails/Boarding.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Boarding_vue_vue_type_template_id_40c78fe8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Boarding.vue?vue&type=template&id=40c78fe8& */ "./resources/js/components/Dashboard/BookingDetails/Boarding.vue?vue&type=template&id=40c78fe8&");
/* harmony import */ var _Boarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Boarding.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/BookingDetails/Boarding.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Boarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Boarding_vue_vue_type_template_id_40c78fe8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Boarding_vue_vue_type_template_id_40c78fe8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/BookingDetails/Boarding.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/BookingDetails/Boarding.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/BookingDetails/Boarding.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Boarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Boarding.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/BookingDetails/Boarding.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Boarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Dashboard/BookingDetails/Boarding.vue?vue&type=template&id=40c78fe8&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/BookingDetails/Boarding.vue?vue&type=template&id=40c78fe8& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Boarding_vue_vue_type_template_id_40c78fe8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Boarding_vue_vue_type_template_id_40c78fe8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Boarding_vue_vue_type_template_id_40c78fe8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Boarding.vue?vue&type=template&id=40c78fe8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/BookingDetails/Boarding.vue?vue&type=template&id=40c78fe8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/BookingDetails/Boarding.vue?vue&type=template&id=40c78fe8&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/BookingDetails/Boarding.vue?vue&type=template&id=40c78fe8& ***!
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
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
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
                        to: { name: "booking-history.boarding" },
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
            _vm.is_loading
              ? _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 mt-2 mb-5 text-end" },
                      [
                        _c("skeleton", {
                          attrs: { width: "200px", height: "20px" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-3 col-6 mt-2" },
                      [
                        _c("skeleton", {
                          attrs: { width: "200px", height: "20px" }
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
                      { staticClass: "col-md-3 col-6 mt-2" },
                      [
                        _c("skeleton", {
                          attrs: { width: "200px", height: "20px" }
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
                      { staticClass: "col-md-3 col-6 mt-2" },
                      [
                        _c("skeleton", {
                          attrs: { width: "200px", height: "20px" }
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
                      { staticClass: "col-md-3 col-6 mt-2" },
                      [
                        _c("skeleton", {
                          attrs: { width: "200px", height: "20px" }
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
                      { staticClass: "col-md-3 col-6 mt-2" },
                      [
                        _c("skeleton", {
                          attrs: { width: "200px", height: "20px" }
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
                      { staticClass: "col-md-3 col-6 mt-2" },
                      [
                        _c("skeleton", {
                          attrs: { width: "200px", height: "20px" }
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
                      { staticClass: "col-md-12 mt-4" },
                      _vm._l(10, function(n) {
                        return _c("skeleton", {
                          key: n,
                          staticClass: "mt-2",
                          attrs: { width: "100%", height: "30px" }
                        })
                      }),
                      1
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            !_vm.is_loading
              ? _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12 mt-2 mb-5 text-end" }, [
                      _vm.bookingDetails.status == "pending"
                        ? _c(
                            "span",
                            {
                              staticClass:
                                "badge badge-pill bg-warning ps-5 pe-5 pt-3 pb-3"
                            },
                            [_vm._v(_vm._s(_vm.bookingDetails.statusText))]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.bookingDetails.status == "onprogress"
                        ? _c(
                            "span",
                            {
                              staticClass:
                                "badge badge-pill bg-info ps-5 pe-5 pt-3 pb-3"
                            },
                            [_vm._v(_vm._s(_vm.bookingDetails.statusText))]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.bookingDetails.status == "canceled"
                        ? _c(
                            "span",
                            {
                              staticClass:
                                "badge badge-pill bg-danger ps-5 pe-5 pt-3 pb-3"
                            },
                            [_vm._v(_vm._s(_vm.bookingDetails.statusText))]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.bookingDetails.status == "completed"
                        ? _c(
                            "span",
                            {
                              staticClass:
                                "badge badge-pill bg-success ps-5 pe-5 pt-3 pb-3"
                            },
                            [_vm._v(_vm._s(_vm.bookingDetails.statusText))]
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3 col-6 mt-2" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("p", [_vm._v("# " + _vm._s(_vm.bookingDetails.id))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3 col-6 mt-2" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.bookingDetails.date))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3 col-6 mt-2" }, [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.bookingDetails.startingDate))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3 col-6 mt-2" }, [
                      _vm._m(4),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.bookingDetails.endingDate))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3 col-6 mt-2" }, [
                      _vm._m(5),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(_vm._s(_vm.bookingDetails.totalDays) + " Days")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3 col-6 mt-2" }, [
                      _vm._m(6),
                      _vm._v(" "),
                      _vm.bookingDetails.price
                        ? _c("p", [
                            _vm._v(_vm._s(_vm.bookingDetails.price) + " USD")
                          ])
                        : _c("p", [_vm._v("---")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3 col-6 mt-2" }, [
                      _vm._m(7),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(_vm._s(_vm.bookingDetails.checkIn || "---"))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3 col-6 mt-2" }, [
                      _vm._m(8),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(_vm._s(_vm.bookingDetails.checkOut || "---"))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12 mt-4" }, [
                      _c("h4", { staticClass: "text-center text-blue" }, [
                        _vm._v("Booking Summary")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "table-responsive mt-4" }, [
                        _c(
                          "table",
                          { staticClass: "table pet-table booking-details-tb" },
                          [
                            _vm._m(9),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              { staticClass: "table-body-c" },
                              [
                                _vm._l(_vm.pets, function(pet, i) {
                                  return _c("tr", { key: i }, [
                                    _c("td", { staticClass: "text-end" }, [
                                      _c("img", {
                                        staticClass: "pet-thumb",
                                        attrs: { src: pet.photo, alt: "" }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(pet.petName))]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(pet.kennel || "---"))
                                    ])
                                  ])
                                }),
                                _vm._v(" "),
                                _c("tr", { staticClass: "table-footer" }, [
                                  _c("td"),
                                  _vm._v(" "),
                                  _vm._m(10),
                                  _vm._v(" "),
                                  _vm.bookingDetails.price
                                    ? _c("td", [
                                        _vm._v(
                                          _vm._s(_vm.bookingDetails.price) +
                                            " USD"
                                        )
                                      ])
                                    : _c("td", [_vm._v("---")])
                                ])
                              ],
                              2
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.bookingDetails.status == "pending"
                      ? _c("div", { staticClass: "col-md-12 mt-4" }, [
                          _c(
                            "button",
                            {
                              staticClass: "booking-btn",
                              on: {
                                click: function($event) {
                                  return _vm.cancelBooking(
                                    _vm.bookingDetails.id,
                                    _vm.i
                                  )
                                }
                              }
                            },
                            [_vm._v("Cancel Booking")]
                          )
                        ])
                      : _vm._e()
                  ])
                ])
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
      _c("h4", { staticClass: "text-choco" }, [_vm._v("Booking Details")]),
      _vm._v(" "),
      _c("img", { attrs: { src: "/image/title_img.png", alt: "" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("strong", [_vm._v("Booking ID")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("strong", [_vm._v("Booking Date")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("strong", [_vm._v("Starting Date")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("strong", [_vm._v("Ending Date")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("strong", [_vm._v("Total Days")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("strong", [_vm._v("Price")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("strong", [_vm._v("Drop off time")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("strong", [_vm._v("Pick up time")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "table-head" }, [
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Pet Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Assigned Kennel")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Grand Total")])])
  }
]
render._withStripped = true



/***/ })

}]);