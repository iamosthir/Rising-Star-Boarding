(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Login_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login/Login.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login/Login.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      title: "Login - Rising Star Boarding"
    };
  },
  data: function data() {
    return {
      form: new Form({
        email: '',
        password: '',
        remember: false
      }),
      loginFailed: false
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      this.form.post("/custom-login").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "fail") {
          _this.loginFailed = true;
        } else if (data.status == "ok") {
          window.location.href = "/home";
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./resources/js/components/Login/Login.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Login/Login.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_74b91af0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=74b91af0& */ "./resources/js/components/Login/Login.vue?vue&type=template&id=74b91af0&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/components/Login/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Login_vue_vue_type_template_id_74b91af0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_74b91af0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Login/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Login/Login.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Login/Login.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Login/Login.vue?vue&type=template&id=74b91af0&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Login/Login.vue?vue&type=template&id=74b91af0& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_74b91af0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_74b91af0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_74b91af0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=74b91af0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login/Login.vue?vue&type=template&id=74b91af0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login/Login.vue?vue&type=template&id=74b91af0&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login/Login.vue?vue&type=template&id=74b91af0& ***!
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
  return _c("section", { staticClass: "login" }, [
    _c("div", { staticClass: "container" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-6" }, [
          _c(
            "form",
            {
              staticClass: "login-form",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.login.apply(null, arguments)
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "group" },
                [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Email")]),
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
                    class: { "is-invalid": _vm.form.errors.has("email") },
                    attrs: {
                      type: "email",
                      placeholder: "Your valid email address..."
                    },
                    domProps: { value: _vm.form.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "email", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("HasError", { attrs: { form: _vm.form, field: "email" } })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "group" },
                [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Password")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.password,
                        expression: "form.password"
                      }
                    ],
                    class: { "is-invalid": _vm.form.errors.has("password") },
                    attrs: {
                      type: "password",
                      placeholder: "Your valid email address..."
                    },
                    domProps: { value: _vm.form.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "password", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("HasError", {
                    attrs: { form: _vm.form, field: "password" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "group d-flex justify-content-between" },
                [
                  _c("div", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.remember,
                          expression: "form.remember"
                        }
                      ],
                      attrs: { type: "checkbox", id: "remember" },
                      domProps: {
                        checked: Array.isArray(_vm.form.remember)
                          ? _vm._i(_vm.form.remember, null) > -1
                          : _vm.form.remember
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.form.remember,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.form,
                                  "remember",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.form,
                                  "remember",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.form, "remember", $$c)
                          }
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "remember", attrs: { for: "remember" } },
                      [_vm._v("Remember me")]
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(1)
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "group" },
                [
                  _c(
                    "Button",
                    {
                      staticClass: "login-btn btn-blue",
                      attrs: { form: _vm.form }
                    },
                    [_vm._v("Login")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.loginFailed
                ? _c("div", { staticClass: "group" }, [
                    _c(
                      "div",
                      {
                        staticClass: "alert alert-danger",
                        staticStyle: { "font-family": "'Bubblegum Sans'" },
                        attrs: { role: "alert" }
                      },
                      [
                        _vm._v(
                          "\n                                Invalid email or password !\n                            "
                        )
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "group" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "login-btn btn-choco",
                      attrs: { to: { name: "register" } }
                    },
                    [_vm._v("Create new account")]
                  )
                ],
                1
              )
            ]
          )
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
      _c("h4", { staticClass: "text-choco" }, [_vm._v("Login")]),
      _vm._v(" "),
      _c("p", [_vm._v("Login to start using our online booking services")]),
      _vm._v(" "),
      _c("img", { attrs: { src: "img/title_img.png", alt: "" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "a",
        { staticClass: "forgot-pass", attrs: { href: "/password/reset" } },
        [_vm._v("Forgot password?")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "group text-center" }, [
      _c(
        "p",
        { staticStyle: { "font-size": "20px", "font-family": "'Cabin'" } },
        [_vm._v("Don't have an account ?")]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);