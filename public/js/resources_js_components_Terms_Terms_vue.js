(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Terms_Terms_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Terms/Terms.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Terms/Terms.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Terms & Condition"
  },
  data: function data() {
    return {
      content: "",
      is_loading: true
    };
  },
  methods: {
    getTerms: function getTerms() {
      var _this = this;

      axios.get(api + "get-terms-and-conditions").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this.content = data.content;
        _this.is_loading = false;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    }
  },
  created: function created() {
    this.getTerms();
  }
});

/***/ }),

/***/ "./resources/js/components/Terms/Terms.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Terms/Terms.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Terms_vue_vue_type_template_id_2deb4b78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Terms.vue?vue&type=template&id=2deb4b78& */ "./resources/js/components/Terms/Terms.vue?vue&type=template&id=2deb4b78&");
/* harmony import */ var _Terms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Terms.vue?vue&type=script&lang=js& */ "./resources/js/components/Terms/Terms.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Terms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Terms_vue_vue_type_template_id_2deb4b78___WEBPACK_IMPORTED_MODULE_0__.render,
  _Terms_vue_vue_type_template_id_2deb4b78___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Terms/Terms.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Terms/Terms.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Terms/Terms.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Terms.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Terms/Terms.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Terms/Terms.vue?vue&type=template&id=2deb4b78&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Terms/Terms.vue?vue&type=template&id=2deb4b78& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_template_id_2deb4b78___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_template_id_2deb4b78___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_template_id_2deb4b78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Terms.vue?vue&type=template&id=2deb4b78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Terms/Terms.vue?vue&type=template&id=2deb4b78&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Terms/Terms.vue?vue&type=template&id=2deb4b78&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Terms/Terms.vue?vue&type=template&id=2deb4b78& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c(
            "h4",
            {
              staticClass: "term-title",
              staticStyle: { "font-family": "'Cabin" }
            },
            [_vm._v("Terms & Conditions")]
          ),
          _vm._v(" "),
          _vm.is_loading
            ? _c("div", { staticClass: "row mt-5" }, [
                _c(
                  "div",
                  { staticClass: "col-12" },
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
                    _c("skeleton", { attrs: { width: "80%", height: "15px" } }),
                    _vm._v(" "),
                    _c("skeleton", { attrs: { width: "80%", height: "15px" } }),
                    _vm._v(" "),
                    _c("skeleton", { attrs: { width: "70%", height: "15px" } }),
                    _vm._v(" "),
                    _c("skeleton", { attrs: { width: "70%", height: "15px" } }),
                    _vm._v(" "),
                    _c("skeleton", { attrs: { width: "90%", height: "15px" } }),
                    _vm._v(" "),
                    _c("skeleton", { attrs: { width: "90%", height: "15px" } }),
                    _vm._v(" "),
                    _c("skeleton", { attrs: { width: "90%", height: "15px" } }),
                    _vm._v(" "),
                    _c("skeleton", {
                      attrs: { width: "100%", height: "15px" }
                    }),
                    _vm._v(" "),
                    _c("skeleton", {
                      attrs: { width: "100%", height: "15px" }
                    }),
                    _vm._v(" "),
                    _c("skeleton", { attrs: { width: "60%", height: "15px" } }),
                    _vm._v(" "),
                    _c("skeleton", { attrs: { width: "60%", height: "15px" } }),
                    _vm._v(" "),
                    _c("skeleton", { attrs: { width: "50%", height: "15px" } }),
                    _vm._v(" "),
                    _c("skeleton", { attrs: { width: "50%", height: "15px" } }),
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
                    _c("skeleton", { attrs: { width: "100%", height: "15px" } })
                  ],
                  1
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          !_vm.is_loading
            ? _c("div", {
                staticClass: "mt-5",
                staticStyle: { "font-family": "'Cabin' !important" },
                domProps: { innerHTML: _vm._s(_vm.content) }
              })
            : _vm._e()
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);