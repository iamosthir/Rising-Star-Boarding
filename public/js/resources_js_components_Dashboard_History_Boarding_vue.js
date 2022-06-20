(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_History_Boarding_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/History/Boarding.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/History/Boarding.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      is_loading: true,
      boardings: [],
      paginateData: {}
    };
  },
  methods: {
    getBoardingHistory: function getBoardingHistory() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get(api2 + "get-boarding-history?page=" + page).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this.boardings = data.mainData;
        _this.paginateData = data.paginateData;
        _this.is_loading = false;
      })["catch"](function (err) {
        console.error(err.response.data);
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
              _this2.boardings[index].status = 'canceled';
              _this2.boardings[index].statusText = 'Canceled';
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
    this.getBoardingHistory();
  }
});

/***/ }),

/***/ "./resources/js/components/Dashboard/History/Boarding.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Dashboard/History/Boarding.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Boarding_vue_vue_type_template_id_73a7d25d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Boarding.vue?vue&type=template&id=73a7d25d& */ "./resources/js/components/Dashboard/History/Boarding.vue?vue&type=template&id=73a7d25d&");
/* harmony import */ var _Boarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Boarding.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/History/Boarding.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Boarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Boarding_vue_vue_type_template_id_73a7d25d___WEBPACK_IMPORTED_MODULE_0__.render,
  _Boarding_vue_vue_type_template_id_73a7d25d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/History/Boarding.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/History/Boarding.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/History/Boarding.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Boarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Boarding.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/History/Boarding.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Boarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Dashboard/History/Boarding.vue?vue&type=template&id=73a7d25d&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/History/Boarding.vue?vue&type=template&id=73a7d25d& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Boarding_vue_vue_type_template_id_73a7d25d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Boarding_vue_vue_type_template_id_73a7d25d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Boarding_vue_vue_type_template_id_73a7d25d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Boarding.vue?vue&type=template&id=73a7d25d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/History/Boarding.vue?vue&type=template&id=73a7d25d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/History/Boarding.vue?vue&type=template&id=73a7d25d&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/History/Boarding.vue?vue&type=template&id=73a7d25d& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _vm.is_loading
      ? _c("div", { staticClass: "col-12 mt-4" }, [
          _c("h3", { staticClass: "p-2 hs-title" }, [
            _vm._v("Recent Boarding History")
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(10, function(n) {
              return _c(
                "div",
                { key: n, staticClass: "col-12" },
                [_c("skeleton", { attrs: { width: "100%", height: "30px" } })],
                1
              )
            }),
            0
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    !_vm.is_loading
      ? _c("div", { staticClass: "col-md-12 mt-4" }, [
          _c("h3", { staticClass: "p-2 hs-title" }, [
            _vm._v("Recent Boarding History")
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "p-2 table-responsive" }, [
            _c("table", { staticClass: "table table-hover booking-table" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                { staticClass: "table-body-c" },
                [
                  _vm.boardings.length > 0
                    ? _vm._l(_vm.boardings, function(boarding, i) {
                        return _c("tr", { key: i }, [
                          _c("td", [_vm._v("#" + _vm._s(boarding.id))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(boarding.range))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(boarding.stay_day) + " Days")
                          ]),
                          _vm._v(" "),
                          boarding.price
                            ? _c("td", [
                                _vm._v(_vm._s(boarding.price) + " USD")
                              ])
                            : _c("td", [_vm._v("-")]),
                          _vm._v(" "),
                          _c("td", [
                            boarding.status == "pending"
                              ? _c(
                                  "span",
                                  { staticClass: "badge bg-warning" },
                                  [_vm._v(_vm._s(boarding.statusText))]
                                )
                              : boarding.status == "onprogress"
                              ? _c("span", { staticClass: "badge bg-info" }, [
                                  _vm._v(_vm._s(boarding.statusText))
                                ])
                              : boarding.status == "canceled"
                              ? _c("span", { staticClass: "badge bg-danger" }, [
                                  _vm._v(_vm._s(boarding.statusText))
                                ])
                              : boarding.status == "completed"
                              ? _c(
                                  "span",
                                  { staticClass: "badge bg-success" },
                                  [_vm._v(_vm._s(boarding.statusText))]
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("div", { staticClass: "dropdown" }, [
                              _c("button", {
                                staticClass:
                                  "btn btn-outline-success dropdown-toggle",
                                attrs: {
                                  type: "button",
                                  id: "dropdownMenu2",
                                  "data-bs-toggle": "dropdown",
                                  "aria-expanded": "false"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                {
                                  staticClass: "dropdown-menu",
                                  attrs: { "aria-labelledby": "dropdownMenu2" }
                                },
                                [
                                  _c(
                                    "li",
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "dropdown-item",
                                          attrs: {
                                            to: {
                                              name: "boarding-details",
                                              params: { id: boarding.id }
                                            },
                                            type: "button"
                                          }
                                        },
                                        [_vm._v("See Details")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  boarding.status == "pending"
                                    ? _c("li", [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "dropdown-item text-danger",
                                            attrs: { type: "button" },
                                            on: {
                                              click: function($event) {
                                                return _vm.cancelBooking(
                                                  boarding.id,
                                                  i
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("Cancel Booking")]
                                        )
                                      ])
                                    : _vm._e()
                                ]
                              )
                            ])
                          ])
                        ])
                      })
                    : [_vm._m(1)]
                ],
                2
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex justify-content-center" },
            [
              _c("pagination", {
                attrs: { data: _vm.paginateData },
                on: { "pagination-change-page": _vm.getBoardingHistory }
              })
            ],
            1
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "table-head" }, [
        _c("th", [_vm._v("Booking ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Reservation Range")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Days")]),
        _vm._v(" "),
        _c("th", [_vm._v("Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticClass: "text-danger", attrs: { colspan: "6" } }, [
        _vm._v("No booking records")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);