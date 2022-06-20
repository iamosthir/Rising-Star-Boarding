(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Contact_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Contact/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Contact/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      contact: {},
      is_loading: true
    };
  },
  metaInfo: function metaInfo() {
    return {
      title: "Contact Us"
    };
  },
  methods: {
    getContactData: function getContactData() {
      var _this = this;

      axios.get("/api/v1/get-contact-data").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this.contact = data;
        _this.is_loading = false;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    openMap: function openMap(lat, lng) {
      window.open("https://www.google.com/maps/embed/v1/place?key=AIzaSyA5m6020IXSvsDrZFPnViyCpthJVqpGOkw\n                        &q=".concat(lat, ",").concat(lng), "_blank");
    },
    callToPhone: function callToPhone(mobile) {
      window.open("tel:".concat(mobile));
    },
    sendMail: function sendMail(email) {
      window.open("mailto:".concat(email));
    }
  },
  created: function created() {
    this.getContactData();
  }
});

/***/ }),

/***/ "./resources/js/components/Contact/Index.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Contact/Index.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_51b227b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=51b227b0& */ "./resources/js/components/Contact/Index.vue?vue&type=template&id=51b227b0&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Contact/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Index_vue_vue_type_template_id_51b227b0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_51b227b0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Contact/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Contact/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Contact/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Contact/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Contact/Index.vue?vue&type=template&id=51b227b0&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Contact/Index.vue?vue&type=template&id=51b227b0& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_51b227b0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_51b227b0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_51b227b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=51b227b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Contact/Index.vue?vue&type=template&id=51b227b0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Contact/Index.vue?vue&type=template&id=51b227b0&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Contact/Index.vue?vue&type=template&id=51b227b0& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "section-content" }, [
        _c(
          "div",
          { staticClass: "row justify-content-center mt-5" },
          [
            _c(
              "div",
              { staticClass: "col-12" },
              [
                !_vm.is_loading && _vm.contact.lat && _vm.contact.lng
                  ? _c("iframe", {
                      staticClass: "map-iframe",
                      attrs: {
                        width: "100%",
                        height: "450",
                        loading: "lazy",
                        allowfullscreen: "",
                        src:
                          "https://www.google.com/maps/embed/v1/place?key=AIzaSyA5m6020IXSvsDrZFPnViyCpthJVqpGOkw\n                          &q=" +
                          _vm.contact.lat +
                          "," +
                          _vm.contact.lng
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.is_loading
                  ? _c("skeleton", {
                      attrs: { width: "100%", height: "450px" }
                    })
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            !_vm.is_loading
              ? [
                  _c(
                    "div",
                    {
                      staticClass: "col-md-3 mt-5 text-center",
                      attrs: { title: "Get Direction" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "contact-card",
                          on: {
                            click: function($event) {
                              return _vm.openMap(
                                _vm.contact.lat,
                                _vm.contact.lng
                              )
                            }
                          }
                        },
                        [
                          _vm._m(1),
                          _vm._v(" "),
                          _vm._m(2),
                          _vm._v(" "),
                          _c("p", { staticClass: "mt-3" }, [
                            _vm._v(_vm._s(_vm.contact.address))
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-md-3 mt-5 text-center",
                      attrs: { title: "Call to number" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "contact-card",
                          on: {
                            click: function($event) {
                              return _vm.callToPhone(_vm.contact.mobile)
                            }
                          }
                        },
                        [
                          _vm._m(3),
                          _vm._v(" "),
                          _vm._m(4),
                          _vm._v(" "),
                          _c("p", { staticClass: "mt-3" }, [
                            _vm._v(_vm._s(_vm.contact.mobile))
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-md-3 mt-5 text-center",
                      attrs: { title: "Send email" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "contact-card",
                          on: {
                            click: function($event) {
                              return _vm.sendMail(_vm.contact.email)
                            }
                          }
                        },
                        [
                          _vm._m(5),
                          _vm._v(" "),
                          _vm._m(6),
                          _vm._v(" "),
                          _c("p", { staticClass: "mt-3" }, [
                            _vm._v(_vm._s(_vm.contact.email))
                          ])
                        ]
                      )
                    ]
                  )
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.is_loading
              ? [
                  _c(
                    "div",
                    { staticClass: "col-md-3 mt-5" },
                    [
                      _c("skeleton", {
                        attrs: { width: "100%", height: "200px" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-3 mt-5" },
                    [
                      _c("skeleton", {
                        attrs: { width: "100%", height: "200px" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-3 mt-5" },
                    [
                      _c("skeleton", {
                        attrs: { width: "100%", height: "200px" }
                      })
                    ],
                    1
                  )
                ]
              : _vm._e()
          ],
          2
        )
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
      _c("h4", { staticClass: "text-blue" }, [_vm._v("Contact Us")]),
      _vm._v(" "),
      _c("img", { attrs: { src: "/image/title_img.png", alt: "" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", { staticClass: "text-blue" }, [
      _c("i", { staticClass: "fas fa-map-marker-alt" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "text-choco" }, [
      _c("b", [_vm._v("Address")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", { staticClass: "text-blue" }, [
      _c("i", { staticClass: "fas fa-phone" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "text-choco" }, [
      _c("b", [_vm._v("Contact Number")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", { staticClass: "text-blue" }, [
      _c("i", { staticClass: "fas fa-envelope" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "text-choco" }, [_c("b", [_vm._v("Email")])])
  }
]
render._withStripped = true



/***/ })

}]);