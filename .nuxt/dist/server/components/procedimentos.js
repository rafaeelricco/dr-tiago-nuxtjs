exports.ids = [23,4,15,16,19];
exports.modules = {

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(197);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("00536e44", content, true, context)
};

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Bucofacial.vue?vue&type=template&id=5dc4efb2&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "bucomaxiloCard"
  }, [_c('vs-card', {
    scopedSlots: _vm._u([{
      key: "title",
      fn: function () {
        return [_c('h3', {
          staticClass: "titleCard"
        }, [_vm._v("Bucomaxilofacial")])];
      },
      proxy: true
    }, {
      key: "img",
      fn: function () {
        return [_c('img', {
          attrs: {
            "src": "https://res.cloudinary.com/dnqiosdb6/image/upload/v1652051215/WEBP/bucomaxilofacial_yut2mu_p4rhvo.webp",
            "alt": "Especialidade Bucomaxilofacial"
          }
        })];
      },
      proxy: true
    }, {
      key: "text",
      fn: function () {
        return [_c('p', {
          staticClass: "textCard"
        }, [_vm._v("\n        A cirurgia e traumatologia bucomaxilofacial é uma área da odontologia\n        que realiza o diagnóstico e tratamento cirúrgico as doenças da\n        cavidade bucal, do crânio, face e pescoço.\n      ")]), _vm._v(" "), _c('vs-button', {
          attrs: {
            "id": "vs-button"
          }
        }, [_c('NuxtLink', {
          attrs: {
            "to": "/procedimentos/bucomaxilo"
          }
        }, [_vm._v("Ver procedimentos")])], 1)];
      },
      proxy: true
    }, {
      key: "interactions",
      fn: function () {
        return [_c('vs-button', {
          staticClass: "btn-chat",
          attrs: {
            "shadow": "",
            "primary": ""
          }
        }, [_c('i', {
          staticClass: "bx bx-chat"
        }), _vm._v(" "), _c('span', {
          staticClass: "span"
        }, [_vm._v(" 9 Procedimentos ")])])];
      },
      proxy: true
    }])
  })], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/atoms/Bucofacial.vue?vue&type=template&id=5dc4efb2&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/atoms/Bucofacial.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "30dc7732"
  
)

/* harmony default export */ var Bucofacial = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/ImplantodontiaCard.vue?vue&type=template&id=7c97578f&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "implantodontia"
  }, [_c('vs-card', {
    scopedSlots: _vm._u([{
      key: "title",
      fn: function () {
        return [_c('h3', {
          staticClass: "titleCard"
        }, [_vm._v("Implantodontia")])];
      },
      proxy: true
    }, {
      key: "img",
      fn: function () {
        return [_c('img', {
          attrs: {
            "src": "https://res.cloudinary.com/dnqiosdb6/image/upload/v1652051149/WEBP/implantodontia_ir39ib_s2ksvm.webp",
            "alt": "Especialidade Implantodontia"
          }
        })];
      },
      proxy: true
    }, {
      key: "text",
      fn: function () {
        return [_c('p', {
          staticClass: "textCard"
        }, [_vm._v("\n        Implantodontia é a área da odontologia que se destina ao tratamento do\n        edentulismo com reabilitações protéticas suportadas ou retidas por\n        implantes dentários.\n      ")]), _vm._v(" "), _c('vs-button', {
          attrs: {
            "id": "vs-button"
          }
        }, [_c('NuxtLink', {
          attrs: {
            "to": "/procedimentos/implantodontia"
          }
        }, [_vm._v("Ver procedimentos")])], 1)];
      },
      proxy: true
    }, {
      key: "interactions",
      fn: function () {
        return [_c('vs-button', {
          staticClass: "btn-chat",
          attrs: {
            "shadow": "",
            "primary": ""
          }
        }, [_c('i', {
          staticClass: "bx bx-chat"
        }), _vm._v(" "), _c('span', {
          staticClass: "span"
        }, [_vm._v(" 7 Procedimentos")])])];
      },
      proxy: true
    }])
  })], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/atoms/ImplantodontiaCard.vue?vue&type=template&id=7c97578f&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/atoms/ImplantodontiaCard.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "71db6e70"
  
)

/* harmony default export */ var ImplantodontiaCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/HofCard.vue?vue&type=template&id=adb63d44&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "HOF"
  }, [_c('vs-card', {
    scopedSlots: _vm._u([{
      key: "title",
      fn: function () {
        return [_c('h3', {
          staticClass: "titleCard"
        }, [_vm._v("Harmonização Orofacial")])];
      },
      proxy: true
    }, {
      key: "img",
      fn: function () {
        return [_c('img', {
          attrs: {
            "src": "https://res.cloudinary.com/dnqiosdb6/image/upload/v1652051149/WEBP/HOF_sunaio_mx50qn.webp",
            "alt": "Especialidade Harmonização Orofacial"
          }
        })];
      },
      proxy: true
    }, {
      key: "text",
      fn: function () {
        return [_c('p', {
          staticClass: "textCard"
        }, [_vm._v("\n        A harmonização Orofacial é uma área da odontologia responsável por\n        buscar o equilíbrio da estética facial, amenizar os defeitos causados\n        pelo tempo e contribuir para o rejuvenescimento.\n      ")]), _vm._v(" "), _c('vs-button', {
          attrs: {
            "id": "vs-button"
          }
        }, [_c('NuxtLink', {
          attrs: {
            "to": "/procedimentos/HOF"
          }
        }, [_vm._v("Ver procedimentos")])], 1)];
      },
      proxy: true
    }, {
      key: "interactions",
      fn: function () {
        return [_c('vs-button', {
          staticClass: "btn-chat",
          attrs: {
            "shadow": "",
            "primary": ""
          }
        }, [_c('i', {
          staticClass: "bx bx-chat"
        }), _vm._v(" "), _c('span', {
          staticClass: "span"
        }, [_vm._v(" 6 Procedimentos ")])])];
      },
      proxy: true
    }])
  })], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/atoms/HofCard.vue?vue&type=template&id=adb63d44&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/atoms/HofCard.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "49740258"
  
)

/* harmony default export */ var HofCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/HofCirurgicaCard.vue?vue&type=template&id=875a9c94&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "HofCirurgicaCard"
  }, [_c('vs-card', {
    scopedSlots: _vm._u([{
      key: "title",
      fn: function () {
        return [_c('h3', {
          staticClass: "titleCard"
        }, [_vm._v("Harmonização Orofacial Cirurgica")])];
      },
      proxy: true
    }, {
      key: "img",
      fn: function () {
        return [_c('img', {
          attrs: {
            "src": "https://res.cloudinary.com/dnqiosdb6/image/upload/v1652051149/WEBP/HOFC_mtojtr_v0mfxn.webp",
            "alt": "Especialidade Harmonização Orofacial"
          }
        })];
      },
      proxy: true
    }, {
      key: "text",
      fn: function () {
        return [_c('p', {
          staticClass: "textCard"
        }, [_vm._v("\n        A Harmonização Orofacial Cirúrgica consiste de microcirurgias da face,\n        seu propósito são as técnicas cirúrgicas com resultados definitivos\n        realizadas em consultório odontológico.\n      ")]), _vm._v(" "), _c('vs-button', {
          attrs: {
            "id": "vs-button"
          }
        }, [_c('NuxtLink', {
          attrs: {
            "to": "/procedimentos/HOFCirurgica"
          }
        }, [_vm._v("Ver procedimentos")])], 1)];
      },
      proxy: true
    }, {
      key: "interactions",
      fn: function () {
        return [_c('vs-button', {
          staticClass: "btn-chat",
          attrs: {
            "shadow": "",
            "primary": ""
          }
        }, [_c('i', {
          staticClass: "bx bx-chat"
        }), _vm._v(" "), _c('span', {
          staticClass: "span"
        }, [_vm._v("4 Procedimentos")])])];
      },
      proxy: true
    }])
  })], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/atoms/HofCirurgicaCard.vue?vue&type=template&id=875a9c94&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/atoms/HofCirurgicaCard.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "326c5a7e"
  
)

/* harmony default export */ var HofCirurgicaCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Procedimentos_vue_vue_type_style_index_0_id_2c22322a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(173);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Procedimentos_vue_vue_type_style_index_0_id_2c22322a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Procedimentos_vue_vue_type_style_index_0_id_2c22322a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Procedimentos_vue_vue_type_style_index_0_id_2c22322a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Procedimentos_vue_vue_type_style_index_0_id_2c22322a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a[data-v-2c22322a]{color:#00f}.WpAnchor[data-v-2c22322a]{text-decoration:underline}.TitleProcedimentos[data-v-2c22322a]{font-family:Hellix Bold;font-size:3rem;margin-top:4rem;margin-bottom:.618rem}.ParghProcedimentos[data-v-2c22322a]{font-family:Hellix Normal;margin:.618rem 0 1.618rem}.ProcedimentosCard[data-v-2c22322a]{display:grid;grid-gap:1rem;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;justify-items:center}@media(max-width:992px){.ProcedimentosCard[data-v-2c22322a]{grid-template-columns:1fr 1fr}}@media(max-width:600px){.ProcedimentosCard[data-v-2c22322a]{grid-template-columns:1fr;grid-auto-flow:dense}}.TitleEspecialidade[data-v-2c22322a]{font-size:1.5rem;font-family:Hellix Semibold;margin:2rem 0 .618rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/Procedimentos.vue?vue&type=template&id=2c22322a&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('Container', [_c('div', {
    staticClass: "Procedimentos",
    attrs: {
      "id": "procedimentos"
    }
  }, [_c('h1', {
    staticClass: "TitleProcedimentos hvr-forward"
  }, [_vm._v("Procedimentos")]), _vm._v(" "), _c('p', {
    staticClass: "ParghProcedimentos"
  }, [_vm._v("\n      Veja aqui os principais procedimentos dentro do campo da Cirurgia\n      Bucomaxilofacial, Harmonização Orofacial, e Implantodontia.\n      "), _c('br'), _vm._v(" "), _c('br'), _vm._v("\n      Caso tenha interesse em algum desses procedimentos, entre em contato\n      "), _c('a', {
    staticClass: "WpAnchor",
    attrs: {
      "href": "https://api.whatsapp.com/send?phone=555185020228&text=Ol%C3%A1!%20vim%20pelo%20site!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
    }
  }, [_vm._v("aqui mesmo")]), _vm._v("\n      pelo site.\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "ProcedimentosCard"
  }, [_c('Bucofacial'), _vm._v(" "), _c('ImplantodontiaCard'), _vm._v(" "), _c('HofCard'), _vm._v(" "), _c('HofCirurgicaCard')], 1)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/organisms/Procedimentos.vue?vue&type=template&id=2c22322a&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/organisms/Procedimentos.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(196)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2c22322a",
  "8e190944"
  
)

/* harmony default export */ var Procedimentos = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Bucofacial: __webpack_require__(182).default,ImplantodontiaCard: __webpack_require__(183).default,HofCard: __webpack_require__(184).default,HofCirurgicaCard: __webpack_require__(185).default,Container: __webpack_require__(15).default})


/***/ })

};;
//# sourceMappingURL=procedimentos.js.map