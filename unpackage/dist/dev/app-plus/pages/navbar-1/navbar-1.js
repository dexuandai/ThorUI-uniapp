"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../work/uniapp/ThorUI/main.js?{\"page\":\"pages%2Fnavbar-1%2Fnavbar-1\"}");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../work/uniapp/ThorUI/components/tabNvue/mediaList.nvue":
/*!***************************************************************!*\
  !*** D:/work/uniapp/ThorUI/components/tabNvue/mediaList.nvue ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mediaList_nvue_vue_type_template_id_70b2fa51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mediaList.nvue?vue&type=template&id=70b2fa51& */ "../../../../../work/uniapp/ThorUI/components/tabNvue/mediaList.nvue?vue&type=template&id=70b2fa51&");
/* harmony import */ var _mediaList_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mediaList.nvue?vue&type=script&lang=js& */ "../../../../../work/uniapp/ThorUI/components/tabNvue/mediaList.nvue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mediaList_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mediaList_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! ./mediaList.nvue?vue&type=style&index=0&lang=css& */ "../../../../../work/uniapp/ThorUI/components/tabNvue/mediaList.nvue?vue&type=style&index=0&lang=css&").default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! ./mediaList.nvue?vue&type=style&index=0&lang=css& */ "../../../../../work/uniapp/ThorUI/components/tabNvue/mediaList.nvue?vue&type=style&index=0&lang=css&").default)
          }

}

/* normalize component */

var component = Object(_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _mediaList_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mediaList_nvue_vue_type_template_id_70b2fa51___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mediaList_nvue_vue_type_template_id_70b2fa51___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "69a547c9"
  
)

component.options.__file = "work/uniapp/ThorUI/components/tabNvue/mediaList.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../work/uniapp/ThorUI/components/tabNvue/mediaList.nvue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** D:/work/uniapp/ThorUI/components/tabNvue/mediaList.nvue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_mediaList_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--1-0!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--1-1!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??ref--2-0!./mediaList.nvue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../work/uniapp/ThorUI/components/tabNvue/mediaList.nvue?vue&type=script&lang=js&");
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_mediaList_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_mediaList_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_mediaList_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_mediaList_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_mediaList_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../work/uniapp/ThorUI/components/tabNvue/mediaList.nvue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** D:/work/uniapp/ThorUI/components/tabNvue/mediaList.nvue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_5_oneOf_0_2_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_3_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_mediaList_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-oneOf-0-1!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--5-oneOf-0-2!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-oneOf-0-3!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??ref--2-0!./mediaList.nvue?vue&type=style&index=0&lang=css& */ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../work/uniapp/ThorUI/components/tabNvue/mediaList.nvue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_5_oneOf_0_2_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_3_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_mediaList_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_5_oneOf_0_2_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_3_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_mediaList_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_5_oneOf_0_2_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_3_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_mediaList_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_5_oneOf_0_2_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_3_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_mediaList_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_5_oneOf_0_2_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_3_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_mediaList_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../work/uniapp/ThorUI/components/tabNvue/mediaList.nvue?vue&type=template&id=70b2fa51&":
/*!**********************************************************************************************!*\
  !*** D:/work/uniapp/ThorUI/components/tabNvue/mediaList.nvue?vue&type=template&id=70b2fa51& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_mediaList_nvue_vue_type_template_id_70b2fa51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??ref--2-0!./mediaList.nvue?vue&type=template&id=70b2fa51& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../../../../../work/uniapp/ThorUI/components/tabNvue/mediaList.nvue?vue&type=template&id=70b2fa51&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_mediaList_nvue_vue_type_template_id_70b2fa51___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_mediaList_nvue_vue_type_template_id_70b2fa51___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../../../../../work/uniapp/ThorUI/components/tabNvue/tabBar.nvue":
/*!************************************************************!*\
  !*** D:/work/uniapp/ThorUI/components/tabNvue/tabBar.nvue ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabBar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabBar.nvue?vue&type=script&lang=js& */ "../../../../../work/uniapp/ThorUI/components/tabNvue/tabBar.nvue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tabBar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tabBar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _tabBar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  "53f2d283"
  
)

component.options.__file = "work/uniapp/ThorUI/components/tabNvue/tabBar.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../work/uniapp/ThorUI/components/tabNvue/tabBar.nvue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** D:/work/uniapp/ThorUI/components/tabNvue/tabBar.nvue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_tabBar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--1-0!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--1-1!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??ref--2-0!./tabBar.nvue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../work/uniapp/ThorUI/components/tabNvue/tabBar.nvue?vue&type=script&lang=js&");
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_tabBar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_tabBar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_tabBar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_tabBar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_tabBar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../work/uniapp/ThorUI/components/tabNvue/tabContent.nvue":
/*!****************************************************************!*\
  !*** D:/work/uniapp/ThorUI/components/tabNvue/tabContent.nvue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabContent_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabContent.nvue?vue&type=script&lang=js& */ "../../../../../work/uniapp/ThorUI/components/tabNvue/tabContent.nvue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tabContent_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tabContent_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _tabContent_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  "348f51dd"
  
)

component.options.__file = "work/uniapp/ThorUI/components/tabNvue/tabContent.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../work/uniapp/ThorUI/components/tabNvue/tabContent.nvue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** D:/work/uniapp/ThorUI/components/tabNvue/tabContent.nvue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_tabContent_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--1-0!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--1-1!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??ref--2-0!./tabContent.nvue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../work/uniapp/ThorUI/components/tabNvue/tabContent.nvue?vue&type=script&lang=js&");
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_tabContent_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_tabContent_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_tabContent_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_tabContent_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_tabContent_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../work/uniapp/ThorUI/components/tabNvue/tabs.nvue":
/*!**********************************************************!*\
  !*** D:/work/uniapp/ThorUI/components/tabNvue/tabs.nvue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.nvue?vue&type=script&lang=js& */ "../../../../../work/uniapp/ThorUI/components/tabNvue/tabs.nvue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tabs_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tabs_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _tabs_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6a772a03"
  
)

component.options.__file = "work/uniapp/ThorUI/components/tabNvue/tabs.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../work/uniapp/ThorUI/components/tabNvue/tabs.nvue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** D:/work/uniapp/ThorUI/components/tabNvue/tabs.nvue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_tabs_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--1-0!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--1-1!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??ref--2-0!./tabs.nvue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../work/uniapp/ThorUI/components/tabNvue/tabs.nvue?vue&type=script&lang=js&");
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_tabs_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_tabs_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_tabs_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_tabs_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_tabs_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../work/uniapp/ThorUI/main.js?{\"page\":\"pages%2Fnavbar-1%2Fnavbar-1\"}":
/*!****************************************************************************!*\
  !*** D:/work/uniapp/ThorUI/main.js?{"page":"pages%2Fnavbar-1%2Fnavbar-1"} ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_navbar_1_navbar_1_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/navbar-1/navbar-1.nvue?mpType=page */ "../../../../../work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue?mpType=page");


_pages_navbar_1_navbar_1_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].mpType='page'
_pages_navbar_1_navbar_1_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].el = '#root'

new Vue(_pages_navbar_1_navbar_1_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"])


/***/ }),

/***/ "../../../../../work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue?mpType=page":
/*!**********************************************************************!*\
  !*** D:/work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue?mpType=page ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar_1_nvue_vue_type_template_id_b5bc48c0_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar-1.nvue?vue&type=template&id=b5bc48c0&mpType=page */ "../../../../../work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue?vue&type=template&id=b5bc48c0&mpType=page");
/* harmony import */ var _navbar_1_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar-1.nvue?vue&type=script&lang=js&mpType=page */ "../../../../../work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue?vue&type=script&lang=js&mpType=page");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _navbar_1_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _navbar_1_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! ./navbar-1.nvue?vue&type=style&index=0&lang=css&mpType=page */ "../../../../../work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue?vue&type=style&index=0&lang=css&mpType=page").default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! ./navbar-1.nvue?vue&type=style&index=0&lang=css&mpType=page */ "../../../../../work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue?vue&type=style&index=0&lang=css&mpType=page").default)
          }

}

/* normalize component */

var component = Object(_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _navbar_1_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _navbar_1_nvue_vue_type_template_id_b5bc48c0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _navbar_1_nvue_vue_type_template_id_b5bc48c0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "276d4fa2"
  
)

component.options.__file = "work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue?vue&type=script&lang=js&mpType=page":
/*!**********************************************************************************************!*\
  !*** D:/work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_navbar_1_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--1-0!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--1-1!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??ref--2-0!./navbar-1.nvue?vue&type=script&lang=js&mpType=page */ "./node_modules/babel-loader/lib/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue?vue&type=script&lang=js&mpType=page");
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_navbar_1_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_navbar_1_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_navbar_1_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_navbar_1_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_navbar_1_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue?vue&type=style&index=0&lang=css&mpType=page":
/*!******************************************************************************************************!*\
  !*** D:/work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_5_oneOf_0_2_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_3_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_navbar_1_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-oneOf-0-1!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--5-oneOf-0-2!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-oneOf-0-3!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??ref--2-0!./navbar-1.nvue?vue&type=style&index=0&lang=css&mpType=page */ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue?vue&type=style&index=0&lang=css&mpType=page");
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_5_oneOf_0_2_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_3_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_navbar_1_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_5_oneOf_0_2_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_3_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_navbar_1_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_5_oneOf_0_2_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_3_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_navbar_1_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_5_oneOf_0_2_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_3_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_navbar_1_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_5_oneOf_0_2_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_oneOf_0_3_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_navbar_1_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue?vue&type=template&id=b5bc48c0&mpType=page":
/*!****************************************************************************************************!*\
  !*** D:/work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue?vue&type=template&id=b5bc48c0&mpType=page ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_navbar_1_nvue_vue_type_template_id_b5bc48c0_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??ref--2-0!./navbar-1.nvue?vue&type=template&id=b5bc48c0&mpType=page */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../../../../../work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue?vue&type=template&id=b5bc48c0&mpType=page");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_navbar_1_nvue_vue_type_template_id_b5bc48c0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_2_0_navbar_1_nvue_vue_type_template_id_b5bc48c0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: default, weexPlus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weexPlus", function() { return weexPlus; });
function initUni() {

    var isFn = function isFn(v) {
        return typeof v === 'function';
    };

    var handlePromise = function handlePromise(promise) {
        return promise.then(function(data) {
            return [null, data];
        }).catch(function(err) {
            return [err];
        });
    };

    var REGEX = /^\$|^on|^create|Sync$|Manager$|^pause/;
    var API_NORMAL_LIST = ['os', 'getCurrentSubNVue', 'getSubNVueById', 'stopRecord', 'stopVoice',
        'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading',
        'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket',
        'pageScrollTo', 'drawCanvas'
    ];

    var shouldPromise = function shouldPromise(name) {
        if (REGEX.test(name) && name !== 'createBLEConnection') {
            return false;
        }
        if (~API_NORMAL_LIST.indexOf(name)) {
            return false;
        }
        return true;
    };

    var promisify = function promisify(api) {
        return function() {
            for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                params[_key - 1] = arguments[_key];
            }

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
                return api.apply(undefined, [options].concat(params));
            }
            return handlePromise(new Promise(function(resolve, reject) {
                api.apply(undefined, [Object.assign({}, options, {
                    success: resolve,
                    fail: reject
                })].concat(params));
                /* eslint-disable no-extend-native */
                Promise.prototype.finally = function(callback) {
                    var promise = this.constructor;
                    return this.then(function(value) {
                        return promise.resolve(callback()).then(function() {
                            return value;
                        });
                    }, function(reason) {
                        return promise.resolve(callback()).then(function() {
                            throw reason;
                        });
                    });
                };
            }));
        };
    };

    var onMessageCallbacks = [];

    var origin = void 0;

    function onSubNVueMessage(data) {
        onMessageCallbacks.forEach(function(callback) {
            return callback({
                origin: origin,
                data: data
            });
        });
    }

    var webviewId = weexPlus.webview.currentWebview().id;

    var channel = new BroadcastChannel('UNI-APP-SUBNVUE');
    channel.onmessage = function(event) {
        if (event.data.to === webviewId) {
            onSubNVueMessage(event.data.data);
        }
    };

    function wrapper(webview) {
        webview.$processed = true;

        var currentWebviewId = weexPlus.webview.currentWebview().id;
        var isPopupNVue = currentWebviewId === webview.id;

        var hostNVueId = webview.__uniapp_origin_type === 'uniNView' && webview.__uniapp_origin_id;
        var popupNVueId = webview.id;

        webview.postMessage = function(data) {
            if (hostNVueId) {
                channel.postMessage({
                    data: data,
                    to: isPopupNVue ? hostNVueId : popupNVueId
                });
            } else {
                postMessage({
                    type: 'UniAppSubNVue',
                    data: data
                });
            }
        };
        webview.onMessage = function(callback) {
            onMessageCallbacks.push(callback);
        };

        if (!webview.__uniapp_mask_id) {
            return;
        }
        origin = webview.__uniapp_host;

        var maskColor = webview.__uniapp_mask;

        var maskWebview = weexPlus.webview.getWebviewById(webview.__uniapp_mask_id);
        maskWebview = maskWebview.parent() || maskWebview;//再次检测父
        var oldShow = webview.show;
        var oldHide = webview.hide;
        var oldClose = webview.close;

        var showMask = function showMask() {
            maskWebview.setStyle({
                mask: maskColor
            });
        };
        var closeMask = function closeMask() {
            maskWebview.setStyle({
                mask: 'none'
            });
        };
        webview.show = function() {
            showMask();

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return oldShow.apply(webview, args);
        };
        webview.hide = function() {
            closeMask();

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            return oldHide.apply(webview, args);
        };
        webview.close = function() {
            closeMask();

            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            return oldClose.apply(webview, args);
        };
    }

    function getSubNVueById(id) {
        var webview = weexPlus.webview.getWebviewById(id);
        if (webview && !webview.$processed) {
            wrapper(webview);
        }
        return webview;
    }

    function getCurrentSubNVue() {
        return getSubNVueById(weexPlus.webview.currentWebview().id);
    }

    var plus = weex.requireModule('plus');
    var globalEvent = weex.requireModule('globalEvent');

    var id = 0;
    var callbacks = {};

    var UNIAPP_SERVICE_NVUE_ID = '__uniapp__service';

    globalEvent.addEventListener('plusMessage', function(e) {
        if (e.data.type === 'UniAppJsApi') {
            invoke(e.data.id, e.data.data);
        } else if (e.data.type === 'UniAppSubNVue') {
            onSubNVueMessage(e.data.data, e.data.options);
        } else if (e.data.type === 'onNavigationBarButtonTap') {
            if (typeof onNavigationBarButtonTapCallback === 'function') {
                onNavigationBarButtonTapCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputChanged') {
            if (typeof onNavigationBarSearchInputChangedCallback === 'function') {
                onNavigationBarSearchInputChangedCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputConfirmed') {
            if (typeof onNavigationBarSearchInputConfirmedCallback === 'function') {
                onNavigationBarSearchInputConfirmedCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputClicked') {
            if (typeof onNavigationBarSearchInputClickedCallback === 'function') {
                onNavigationBarSearchInputClickedCallback(e.data.data);
            }
        }
    });

    var createCallback = function createCallback(args, type) {
        var callback = function callback(res) {
            if (isFn(args)) {
                args(res);
            } else if (args) {
                if (~res.errMsg.indexOf(':ok')) {
                    isFn(args.success) && args.success(res);
                } else if (~res.errMsg.indexOf(':fail')) {
                    isFn(args.fail) && args.fail(res);
                }
                isFn(args.complete) && args.complete(res);
            }
        };
        if (isFn(args) || args && isFn(args.callback)) {
            callback.keepAlive = true;
        }
        return callback;
    };

    var invoke = function invoke(callbackId, data) {
        var callback = callbacks[callbackId];
        if (callback) {
            callback(data);
            if (!callback.keepAlive) {
                delete callbacks[callbackId];
            }
        } else {
            console.error('callback[' + callbackId + '] is undefined');
        }
    };

    var publish = function publish(_ref) {
        var id = _ref.id,
            type = _ref.type,
            params = _ref.params;

        callbacks[id] = createCallback(params, type);
        plus.postMessage({
            id: id,
            type: type,
            params: params
        }, UNIAPP_SERVICE_NVUE_ID);
    };

    function postMessage(data) {
        plus.postMessage(data, UNIAPP_SERVICE_NVUE_ID);
    }

    var createPublish = function createPublish(name) {
        return function(args) {
            publish({
                id: id++,
                type: name,
                params: args
            });
        };
    };

    var onNavigationBarButtonTapCallback = void 0;
    var onNavigationBarSearchInputChangedCallback = void 0;
    var onNavigationBarSearchInputConfirmedCallback = void 0;
    var onNavigationBarSearchInputClickedCallback = void 0;

    function onNavigationBarButtonTap(callback) {
        onNavigationBarButtonTapCallback = callback;
    }

    function onNavigationBarSearchInputChanged(callback) {
        onNavigationBarSearchInputChangedCallback = callback;
    }

    function onNavigationBarSearchInputConfirmed(callback) {
        onNavigationBarSearchInputConfirmedCallback = callback;
    }

    function onNavigationBarSearchInputClicked(callback) {
        onNavigationBarSearchInputClickedCallback = callback;
    }

    function requireNativePlugin(pluginName) {
        return weex.requireModule(pluginName);
    }

    var dom = weex.requireModule('dom');

    function loadFontFace(_ref) {
        var family = _ref.family,
            source = _ref.source,
            desc = _ref.desc,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        dom.addRule('fontFace', {
            fontFamily: family,
            src: source.replace(/"/g, '\'')
        });
        var res = {
            errMsg: 'loadFontFace:ok',
            status: 'loaded'
        };
        isFn(success) && success(res);
        isFn(complete) && complete(res);
    }

    var globalEvent$1 = weex.requireModule('globalEvent');

    var callbacks$1 = [];

    globalEvent$1.addEventListener('plusMessage', function(e) {
        if (e.data.type === 'UniAppReady') {
            ready.isUniAppReady = true;
            if (callbacks$1.length) {
                callbacks$1.forEach(function(callback) {
                    return callback();
                });
                callbacks$1 = [];
            }
        }
    });

    function ready(callback) {
        if (typeof callback === 'function') {
            if (this.isUniAppReady) {
                callback();
            } else {
                callbacks$1.push(callback);
            }
        }
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ?
            "symbol" : typeof obj;
    };

    var stream = weex.requireModule('stream');

    // let requestTaskId = 0

    var METHOD_GET = 'GET';
    var METHOD_POST = 'POST';
    var CONTENT_TYPE_JSON = 'application/json';
    var CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded';

    var serialize = function serialize(data) {
        var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : METHOD_GET;
        var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONTENT_TYPE_FORM;

        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
            if (method.toUpperCase() === METHOD_POST && contentType.toLowerCase() === CONTENT_TYPE_JSON) {
                return JSON.stringify(data);
            } else {
                return Object.keys(data).map(function(key) {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
                }).join('&');
            }
        }
        return data;
    };

    function request(_ref) {
        var url = _ref.url,
            data = _ref.data,
            header = _ref.header,
            _ref$method = _ref.method,
            method = _ref$method === undefined ? 'GET' : _ref$method,
            _ref$dataType = _ref.dataType,
            dataType = _ref$dataType === undefined ? 'json' : _ref$dataType,
            responseType = _ref.responseType,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        // requestTaskId++
        var aborted = false;

        var hasContentType = false;
        var headers = {};
        if (header) {
            for (var name in header) {
                if (!hasContentType && name.toLowerCase() === 'content-type') {
                    hasContentType = true;
                    headers['Content-Type'] = header[name];
                } else {
                    headers[name] = header[name];
                }
            }
        }
        if (method === METHOD_GET && data) {
            url = url + (~url.indexOf('?') ? url.substr(-1) === '&' || url.substr(-1) === '?' ? '' : '&' : '?') +
                serialize(data);
        }
        stream.fetch({
            url: url,
            method: method,
            headers: headers,
            type: dataType === 'json' ? 'json' : 'text',
            body: method !== METHOD_GET ? serialize(data, method, headers['Content-Type']) : ''
        }, function(_ref2) {
            var status = _ref2.status,
                ok = _ref2.ok,
                statusText = _ref2.statusText,
                data = _ref2.data,
                headers = _ref2.headers;

            var ret = {};
            if (!status || status === -1 || aborted) {
                ret.errMsg = 'request:fail';
                isFn(fail) && fail(ret);
            } else {
                ret.data = data;
                ret.statusCode = status;
                ret.header = headers;
                isFn(success) && success(ret);
            }
            isFn(complete) && complete(ret);
        });
        return {
            abort: function abort() {
                aborted = true;
            }
        };
    }

    var storage = weex.requireModule('plusstorage');
    var UNIAPP_STORAGE_DATA_TYPE = '__TYPE';

    function getStorage(_ref) {
        var key = _ref.key,
            data = _ref.data,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        storage.getItem(key + UNIAPP_STORAGE_DATA_TYPE, function(ret) {
            if (ret.result === 'success') {
                var dataType = ret.data;
                storage.getItem(key, function(res) {
                    if (res.result === 'success') {
                        var result = res.data;
                        if (dataType && result) {
                            if (dataType !== 'String') {
                                result = JSON.parse(result);
                            }
                            isFn(success) && success({
                                errMsg: 'getStorage:ok',
                                data: result
                            });
                        } else {
                            res.errMsg = 'setStorage:fail';
                            isFn(fail) && fail(res);
                        }
                    } else {
                        res.errMsg = 'setStorage:fail';
                        isFn(fail) && fail(res);
                    }
                    isFn(complete) && complete(res);
                });
            } else {
                ret.errMsg = 'setStorage:fail';
                isFn(fail) && fail(ret);
                isFn(complete) && complete(ret);
            }
        });
    }

    function setStorage(_ref2) {
        var key = _ref2.key,
            data = _ref2.data,
            success = _ref2.success,
            fail = _ref2.fail,
            complete = _ref2.complete;

        var dataType = 'String';
        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
            dataType = 'Object';
            data = JSON.stringify(data);
        }
        storage.setItem(key, data, function(res) {
            if (res.result === 'success') {
                storage.setItem(key + UNIAPP_STORAGE_DATA_TYPE, dataType, function(ret) {
                    if (ret.result === 'success') {
                        isFn(success) && success({
                            errMsg: 'setStorage:ok'
                        });
                    } else {
                        ret.errMsg = 'setStorage:fail';
                        isFn(fail) && fail(ret);
                    }
                });
            } else {
                res.errMsg = 'setStorage:fail';
                isFn(fail) && fail(res);
            }
            isFn(complete) && complete(res);
        });
    }

    function removeStorage(_ref3) {
        var key = _ref3.key,
            data = _ref3.data,
            success = _ref3.success,
            fail = _ref3.fail,
            complete = _ref3.complete;

        storage.removeItem(key, function(res) {
            if (res.result === 'success') {
                isFn(success) && success({
                    errMsg: 'removeStorage:ok'
                });
            } else {
                res.errMsg = 'removeStorage:fail';
                isFn(fail) && fail(res);
            }
            isFn(complete) && complete(res);
        });
        storage.removeItem(key + UNIAPP_STORAGE_DATA_TYPE);
    }

    function clearStorage(_ref4) {
        var key = _ref4.key,
            data = _ref4.data,
            success = _ref4.success,
            fail = _ref4.fail,
            complete = _ref4.complete;
    }

    var clipboard = weex.requireModule('clipboard');

    function getClipboardData(_ref) {
        var success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        clipboard.getString(function(_ref2) {
            var data = _ref2.data;

            var res = {
                errMsg: 'getClipboardData:ok',
                data: data
            };
            isFn(success) && success(res);
            isFn(complete) && complete(res);
        });
    }

    function setClipboardData(_ref3) {
        var data = _ref3.data,
            success = _ref3.success,
            fail = _ref3.fail,
            complete = _ref3.complete;

        var res = {
            errMsg: 'setClipboardData:ok'
        };
        clipboard.setString(data);
        isFn(success) && success(res);
        isFn(complete) && complete(res);
    }

    var getEmitter = function() {
        if (typeof getUniEmitter === 'function') {
            /* eslint-disable no-undef */
            return getUniEmitter;
        }
        var Emitter = {
            $on: function $on() {
                console.warn('uni.$on failed');
            },
            $off: function $off() {
                console.warn('uni.$off failed');
            },
            $once: function $once() {
                console.warn('uni.$once failed');
            },
            $emit: function $emit() {
                console.warn('uni.$emit failed');
            }
        };
        return function getUniEmitter() {
            return Emitter;
        };
    }();

    function apply(ctx, method, args) {
        return ctx[method].apply(ctx, args);
    }

    function $on() {
        return apply(getEmitter(), '$on', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $off() {
        return apply(getEmitter(), '$off', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $once() {
        return apply(getEmitter(), '$once', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $emit() {
        return apply(getEmitter(), '$emit', [].concat(Array.prototype.slice.call(arguments)));
    }



    var api = /*#__PURE__*/ Object.freeze({
        loadFontFace: loadFontFace,
        ready: ready,
        request: request,
        getStorage: getStorage,
        setStorage: setStorage,
        removeStorage: removeStorage,
        clearStorage: clearStorage,
        getClipboardData: getClipboardData,
        setClipboardData: setClipboardData,
        onSubNVueMessage: onSubNVueMessage,
        getSubNVueById: getSubNVueById,
        getCurrentSubNVue: getCurrentSubNVue,
        $on: $on,
        $off: $off,
        $once: $once,
        $emit: $emit
    });


    var wx = {
        uploadFile: true,
        downloadFile: true,
        chooseImage: true,
        previewImage: true,
        getImageInfo: true,
        saveImageToPhotosAlbum: true,
        chooseVideo: true,
        saveVideoToPhotosAlbum: true,
        saveFile: true,
        getSavedFileList: true,
        getSavedFileInfo: true,
        removeSavedFile: true,
        openDocument: true,
        setStorage: true,
        getStorage: true,
        getStorageInfo: true,
        removeStorage: true,
        clearStorage: true,
        getLocation: true,
        chooseLocation: true,
        openLocation: true,
        getSystemInfo: true,
        getNetworkType: true,
        makePhoneCall: true,
        scanCode: true,
        setScreenBrightness: true,
        getScreenBrightness: true,
        setKeepScreenOn: true,
        vibrateLong: true,
        vibrateShort: true,
        addPhoneContact: true,
        showToast: true,
        showLoading: true,
        hideToast: true,
        hideLoading: true,
        showModal: true,
        showActionSheet: true,
        setNavigationBarTitle: true,
        setNavigationBarColor: true,
        navigateTo: true,
        redirectTo: true,
        reLaunch: true,
        switchTab: true,
        navigateBack: true,
        getProvider: true,
        login: true,
        getUserInfo: true,
        share: true,
        requestPayment: true,
        subscribePush: true,
        unsubscribePush: true,
        onPush: true,
        offPush: true
    };

    var baseUni = {
        os: {
            nvue: true
        }
    };

    var uni = {};

    if (typeof Proxy !== 'undefined') {
        uni = new Proxy({}, {
            get: function get(target, name) {
                if (name === 'os') {
                    return {
                        nvue: true
                    };
                }
                if (name === 'postMessage') {
                    return postMessage;
                }
                if (name === 'requireNativePlugin') {
                    return requireNativePlugin;
                }
                if (name === 'onNavigationBarButtonTap') {
                    return onNavigationBarButtonTap;
                }
                if (name === 'onNavigationBarSearchInputChanged') {
                    return onNavigationBarSearchInputChanged;
                }
                if (name === 'onNavigationBarSearchInputConfirmed') {
                    return onNavigationBarSearchInputConfirmed;
                }
                if (name === 'onNavigationBarSearchInputClicked') {
                    return onNavigationBarSearchInputClicked;
                }
                var method = api[name];
                if (!method) {
                    method = createPublish(name);
                }
                if (shouldPromise(name)) {
                    return promisify(method);
                }
                return method;
            }
        });
    } else {
        Object.keys(baseUni).forEach(function(key) {
            uni[key] = baseUni[key];
        });

        uni.postMessage = postMessage;

        uni.requireNativePlugin = requireNativePlugin;

        uni.onNavigationBarButtonTap = onNavigationBarButtonTap;

        uni.onNavigationBarSearchInputChanged = onNavigationBarSearchInputChanged;

        uni.onNavigationBarSearchInputConfirmed = onNavigationBarSearchInputConfirmed;

        uni.onNavigationBarSearchInputClicked = onNavigationBarSearchInputClicked;

        Object.keys(wx).forEach(function(name) {
            var method = api[name];
            if (!method) {
                method = createPublish(name);
            }
            if (shouldPromise(name)) {
                uni[name] = promisify(method);
            } else {
                uni[name] = method;
            }
        });
    }
    return uni;
}

var createUni;

if (typeof getUni === 'function') {
    createUni = getUni;
} else {
    createUni = initUni;
}
var weexPlus = new WeexPlus(weex);
/* harmony default export */ __webpack_exports__["default"] = (createUni(weex, weexPlus, BroadcastChannel));



/***/ }),

/***/ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../work/uniapp/ThorUI/components/tabNvue/mediaList.nvue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-oneOf-0-1!./node_modules/postcss-loader/src??ref--5-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-oneOf-0-3!./node_modules/vue-loader/lib??ref--2-0!D:/work/uniapp/ThorUI/components/tabNvue/mediaList.nvue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "tui-list-view": {
    "width": "750",
    "paddingLeft": "30",
    "backgroundColor": "#ffffff",
    "backgroundColor:active": "#eeeeee"
  },
  "tui-list-cell": {
    "width": "750",
    "paddingTop": "30",
    "paddingBottom": "30",
    "paddingRight": "30",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#E6E6E6"
  },
  "tui-last-child": {
    "borderBottomWidth": 0
  },
  "tui-title-box": {
    "width": "690",
    "flex": 1,
    "lines": 2
  },
  "tui-cell-title": {
    "fontSize": "36",
    "lineHeight": "56",
    "flex": 1,
    "lines": 2,
    "textOverflow": "ellipsis",
    "color": "#333333"
  },
  "tui-img-container": {
    "width": "690",
    "paddingTop": "24",
    "height": "184",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "tui-cell-img": {
    "width": "220",
    "overflow": "hidden",
    "position": "relative"
  },
  "tui-img": {
    "width": "220",
    "height": "184",
    "borderRadius": "4"
  },
  "tui-sub-title": {
    "paddingTop": "24",
    "alignItems": "center",
    "flexDirection": "row"
  },
  "tui-sub-content": {
    "fontSize": "28",
    "color": "#BCBCBC"
  },
  "tui-badge": {
    "paddingTop": "5",
    "paddingBottom": "5",
    "paddingLeft": "10",
    "paddingRight": "10",
    "fontSize": "24",
    "borderRadius": "4",
    "marginRight": "20"
  },
  "tui-red": {
    "backgroundColor": "#FCEBEF",
    "color": "#8A5966"
  },
  "tui-blue": {
    "backgroundColor": "#ECF6FD",
    "color": "#4DABEB"
  },
  "tui-orange": {
    "backgroundColor": "#FEF5EB",
    "color": "#FAA851"
  },
  "tui-green": {
    "backgroundColor": "#E8F6E8",
    "color": "#44CF85"
  }
}

/***/ }),

/***/ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue?vue&type=style&index=0&lang=css&mpType=page":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-oneOf-0-1!./node_modules/postcss-loader/src??ref--5-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-oneOf-0-3!./node_modules/vue-loader/lib??ref--2-0!D:/work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "tui-white": {
    "backgroundColor": "#FFFFFF"
  },
  "tui-gray": {
    "backgroundColor": "#fafafa"
  },
  "tui-slider-box": {
    "width": "750",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "tui-slider": {
    "width": "690",
    "height": "220",
    "borderRadius": "12",
    "overflow": "hidden"
  },
  "tui-img-radius": {
    "borderRadius": "12"
  },
  "tui-frame": {
    "width": "690",
    "height": "220",
    "backgroundColor": "#ffffff"
  },
  "tui-slider-img": {
    "width": "690",
    "height": "220"
  },
  "tui-indicator": {
    "width": "690",
    "height": "20",
    "itemColor": "rgba(255,255,255,0.4)",
    "itemSelectedColor": "#FFFFFF",
    "itemSize": "14",
    "position": "absolute",
    "bottom": "24",
    "left": 0
  },
  "tui-loading": {
    "marginRight": "15",
    "height": "60",
    "width": "60",
    "color": "#999999"
  },
  "tab-bar-item": {
    "height": "100",
    "width": "150",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "tab-bar-title": {
    "height": "100",
    "lineHeight": "100",
    "fontSize": "32",
    "color": "#999999",
    "fontWeight": "400"
  },
  "tui-active": {
    "color": "#5677fc",
    "fontSize": "36",
    "fontWeight": "bold",
    "borderBottomWidth": "6",
    "borderStyle": "solid",
    "borderColor": "#5677fc",
    "width": "80",
    "textAlign": "center"
  },
  "tui-loadmore": {
    "height": "100",
    "width": "750",
    "flexDirection": "column",
    "justifyContent": "center",
    "position": "relative",
    "alignItems": "center"
  },
  "loadmore-text": {
    "fontSize": "26",
    "textAlign": "center",
    "color": "#999999",
    "paddingLeft": "6",
    "paddingRight": "6"
  },
  "loadmore-line": {
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#e5e5e5",
    "width": "320",
    "position": "absolute",
    "zIndex": -1
  },
  "tui-refresh": {
    "width": "750",
    "height": "80",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "refresh-text": {
    "textAlign": "center",
    "fontSize": "26",
    "color": "#999999"
  },
  "ios-arrow": {
    "color": "#999999",
    "fontSize": "42",
    "fontWeight": "300",
    "paddingRight": "20",
    "marginLeft": "-75"
  }
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../work/uniapp/ThorUI/components/tabNvue/mediaList.nvue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--1-1!./node_modules/vue-loader/lib??ref--2-0!D:/work/uniapp/ThorUI/components/tabNvue/mediaList.nvue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default2 =
{
  props: {
    data: {
      type: Object,
      default: function _default(e) {
        return {};
      } },

    lastChild: {
      type: Boolean,
      default: function _default(e) {
        return false;
      } } },


  methods: {
    bindClick: function bindClick() {
      this.$emit('click');
    },
    getClass: function getClass(type) {
      //1-tui-red 2-tui-blue  3-tui-orange 4-tui-green
      return ["tui-red", "tui-blue", "tui-orange", "tui-green"][type - 1];
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../work/uniapp/ThorUI/components/tabNvue/tabBar.nvue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--1-1!./node_modules/vue-loader/lib??ref--2-0!D:/work/uniapp/ThorUI/components/tabNvue/tabBar.nvue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =
{
  render: function render(createElement) {
    var vnodes = this.$slots.default;
    if (vnodes && vnodes.length) {
      for (var i = 0; i < vnodes.length; i++) {
        var vnode = vnodes[i];
        if (!vnode.data) {
          vnode.data = Object.create(null);
        }
        if (!vnode.data.on) {
          vnode.data.on = Object.create(null);
        }
        vnode.data.on.click = this._change;
      }
    }
    return createElement('div', { //如果需要左右滑动用scroller，不需要的话用div就行,添加个属性需要时将scroller添加 children
      style: {
        height: '100px',
        width: '750px',
        flexDirection: 'row',
        borderBottomWidth: "1px",
        borderColor: "#F0F0F0",
        borderBottomStyle: "solid" } },

    [
    createElement('scroller', {
      attrs: {
        scrollDirection: 'horizontal',
        showScrollbar: 'false' },

      style: {
        height: '100px',
        width: '750px',
        flexDirection: 'row' } },

    this.$slots.default)]);

  },
  methods: {
    _change: function _change(e) {
      var ret = {
        index: e.index };

      if (e.type === 'click') {
        var target = e.target;
        ret.index = target.parentNode.children.findIndex(function (node) {return node === target;});
      }
      this.$emit('_tabBarClick', ret);
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../work/uniapp/ThorUI/components/tabNvue/tabContent.nvue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--1-1!./node_modules/vue-loader/lib??ref--2-0!D:/work/uniapp/ThorUI/components/tabNvue/tabContent.nvue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =
{
  render: function render(createElement) {
    return createElement('slider', {
      style: {
        flex: 1 },

      attrs: {
        index: 0,
        infinite: false } },

    this.$slots.default);
  } };exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../work/uniapp/ThorUI/components/tabNvue/tabs.nvue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--1-1!./node_modules/vue-loader/lib??ref--2-0!D:/work/uniapp/ThorUI/components/tabNvue/tabs.nvue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _tabContent = _interopRequireDefault(__webpack_require__(/*! ./tabContent.nvue */ "../../../../../work/uniapp/ThorUI/components/tabNvue/tabContent.nvue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  props: {
    index: {
      type: Number,
      default: 0 } },


  data: function data() {
    return {
      tabIndex: this.index };

  },
  components: {
    tabContent: _tabContent.default },

  render: function render(createElement) {
    var vnodes = this.$slots.default;
    var newVNodes = [];
    if (vnodes && vnodes.length) {
      for (var i = 0; i < vnodes.length; i++) {
        var vnode = vnodes[i];
        if (!vnode || !vnode.componentOptions) {
          continue;
        }
        if (vnode.componentOptions.tag === 'tab-content') {

          var newVNode = createElement('tab-content', {
            staticClass: vnode.data.staticClass,
            'class': vnode.data['class'],
            style: vnode.data.style },
          vnode.componentOptions.children);

          if (!newVNode.data) {
            newVNode.data = Object.create(null);
          }
          if (!newVNode.data.attrs) {
            newVNode.data.attrs = Object.create(null);
          }
          if (!newVNode.data.props) {
            newVNode.data.props = Object.create(null);
          }
          if (!newVNode.data.on) {
            newVNode.data.on = Object.create(null);
          }
          newVNode.data.attrs.index = this.index;
          newVNode.data.on.change = this._change;
          newVNodes.push(newVNode);
        }
        if (vnode.componentOptions.tag === 'tab-bar') {
          if (!vnode.componentOptions.listeners) {//监听子元素传递过来的事件
            vnode.componentOptions.listeners = Object.create(null);
          }
          vnode.componentOptions.listeners._tabBarClick = this._tabBarClick;
          newVNodes.push(vnode);
        }
      }
    }
    var newNode = createElement('div', {
      style: {
        flex: 1,
        flexDirection: 'column' },

      on: {
        change2: this._change2 } },

    newVNodes);
    return newNode;
  },
  methods: {
    _tabBarClick: function _tabBarClick(e) {
      this.tabIndex = e.index;
      this.$emit('change', e);
    },
    _change: function _change(e) {
      if (this.tabIndex === e.index) {
        return;
      }
      this.tabIndex = e.index;
      this.$emit('change', {
        index: e.index,
        change: true });

    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue?vue&type=script&lang=js&mpType=page":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--1-1!./node_modules/vue-loader/lib??ref--2-0!D:/work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));











































var _tabContent = _interopRequireDefault(__webpack_require__(/*! @/components/tabNvue/tabContent.nvue */ "../../../../../work/uniapp/ThorUI/components/tabNvue/tabContent.nvue"));
var _tabBar = _interopRequireDefault(__webpack_require__(/*! @/components/tabNvue/tabBar.nvue */ "../../../../../work/uniapp/ThorUI/components/tabNvue/tabBar.nvue"));
var _tabs = _interopRequireDefault(__webpack_require__(/*! @/components/tabNvue/tabs.nvue */ "../../../../../work/uniapp/ThorUI/components/tabNvue/tabs.nvue"));
var _mediaList = _interopRequireDefault(__webpack_require__(/*! @/components/tabNvue/mediaList.nvue */ "../../../../../work/uniapp/ThorUI/components/tabNvue/mediaList.nvue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}
var dom = weex.requireModule('dom');var _default =
{
  components: {
    tabContent: _tabContent.default,
    tabBar: _tabBar.default,
    tabs: _tabs.default,
    mediaList: _mediaList.default },

  data: function data() {
    return {
      isIos: false,
      arrow: "",
      iosRefresh: false,
      refreshing: false,
      refreshText: "下拉可以刷新",
      tabIndex: 0,
      newsitems: [],
      newsData: [{
        title: "温故知心习近平这些话要牢记",
        imgArr: ["../../static/images/product/2.jpg", "../../static/images/product/3.jpg",
        "../../static/images/product/4.jpg"],

        badgeType: 1,
        badgeText: "要闻",
        subContent: "央视网新闻" },
      {
        title: "美国会表决通过新驻华大使 月底有望赴华",
        imgArr: [],
        badgeType: 2,
        badgeText: "要闻",
        subContent: "央视网新闻" },
      {
        title: "哪些专业毕业后收入高?计算机、金融专业排前列金融专业排前列金融专业排前列金融专业排前列金融专业排前列",
        imgArr: ["../../static/images/product/2.jpg", "../../static/images/product/3.jpg",
        "../../static/images/product/4.jpg"],

        badgeType: 3,
        badgeText: "本地资讯",
        subContent: "粤港精英联盟" },
      {
        title: "科创板交易系统准备就绪,不存在首批名单",
        imgArr: [],
        badgeType: 4,
        badgeText: "朋友都看过",
        subContent: "百科故事大全" },
      {
        title: "哪些专业毕业后收入高?计算机、金融专业排前列金融专业排前列金融专业排前列金融专业排前列金融专业排前列",
        imgArr: ["../../static/images/product/2.jpg", "../../static/images/product/3.jpg",
        "../../static/images/product/4.jpg"],

        badgeType: 1,
        badgeText: "本地资讯",
        subContent: "粤港精英联盟" },
      {
        title: "温故知心习近平这些话要牢记",
        imgArr: ["../../static/images/product/2.jpg", "../../static/images/product/3.jpg",
        "../../static/images/product/4.jpg"],

        badgeType: 1,
        badgeText: "要闻",
        subContent: "央视网新闻" },
      {
        title: "温故知心习近平这些话要牢记",
        imgArr: ["../../static/images/product/2.jpg", "../../static/images/product/3.jpg",
        "../../static/images/product/4.jpg"],

        badgeType: 1,
        badgeText: "要闻",
        subContent: "央视网新闻" },
      {
        title: "美国会表决通过新驻华大使 月底有望赴华",
        imgArr: [],
        badgeType: 2,
        badgeText: "要闻",
        subContent: "央视网新闻" },
      {
        title: "哪些专业毕业后收入高?计算机、金融专业排前列金融专业排前列金融专业排前列金融专业排前列金融专业排前列",
        imgArr: ["../../static/images/product/2.jpg", "../../static/images/product/3.jpg",
        "../../static/images/product/4.jpg"],

        badgeType: 3,
        badgeText: "本地资讯",
        subContent: "粤港精英联盟" },
      {
        title: "科创板交易系统准备就绪,不存在首批名单",
        imgArr: [],
        badgeType: 4,
        badgeText: "朋友都看过",
        subContent: "百科故事大全" },
      {
        title: "哪些专业毕业后收入高?计算机、金融专业排前列金融专业排前列金融专业排前列金融专业排前列金融专业排前列",
        imgArr: ["../../static/images/product/2.jpg", "../../static/images/product/3.jpg",
        "../../static/images/product/4.jpg"],

        badgeType: 1,
        badgeText: "本地资讯",
        subContent: "粤港精英联盟" },
      {
        title: "温故知心习近平这些话要牢记",
        imgArr: ["../../static/images/product/2.jpg", "../../static/images/product/3.jpg",
        "../../static/images/product/4.jpg"],

        badgeType: 1,
        badgeText: "要闻",
        subContent: "央视网新闻" }],

      tabBars: [{
        name: '热门',
        id: 'hot' },
      {
        name: '娱乐',
        id: 'yule' },
      {
        name: '体育',
        id: 'sports' },
      {
        name: '国内',
        id: 'domestic' },
      {
        name: '财经',
        id: 'finance' },
      {
        name: '科技',
        id: 'keji' },
      {
        name: '教育',
        id: 'education' },
      {
        name: '汽车',
        id: 'car' }] };


  },
  created: function created() {var _this = this;
    setTimeout(function () {
      _this.newsitems = _this.randomfn();
      uni.getSystemInfo({
        success: function success(res) {
          _this.isIos = "ios" == res.platform.toLocaleLowerCase();
        } });

    }, 150);
  },
  methods: {
    pullrefresh: function pullrefresh(e, ispullDowm) {var _this2 = this;
      var key = e == 0 ? "" : this.tabBars[e].id;
      var pageIndex = ispullDowm ? 1 : this.newsitems[e].pageIndex;
      if (ispullDowm) {
        this.newsitems[e].data = [];
        this.newsitems[e].loadingText = "正在加载...";
        this.newsitems[e].pageIndex = 2;
        this.newsitems[e].data = this.newsData || [];
        //这里实际判断应该是数据条数是不是小于每页条数【或者能判断第一页就加载完全部数据】
        if (this.newsitems[e].pageIndex > 3) {
          this.newsitems[e].loadingText = "没有更多了";
          this.newsitems[e].canPullUp = false;
        } else {
          this.newsitems[e].canPullUp = true;
          this.$refs['tab' + e][0].resetLoadmore();
        }
        setTimeout(function () {
          _this2.refreshing = false;
        }, 0);
      } else {
        var list = this.newsData || [];
        this.newsitems[e].data = this.newsitems[e].data.concat(list);
        this.newsitems[e].pageIndex++;
        if (this.newsitems[e].pageIndex > 3) {
          this.newsitems[e].loadingText = '没有更多了';
          this.newsitems[e].canPullUp = false;
        }
      }
    },
    goDetail: function goDetail(e) {
      uni.navigateTo({
        url: '../extend-view/newsDetail/newsDetail' });

    },
    loadMore: function loadMore(e) {var _this3 = this;
      if (!this.newsitems[e].canPullUp) {
        this.newsitems[e].loadingText = '没有更多了';
        return;
      }
      setTimeout(function () {
        _this3.pullrefresh(e);
      }, 200);
    },
    changeTab: function () {var _changeTab = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {var el, elSize, index, newEl;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                this.tabIndex = e.index;
                if (this.newsitems[this.tabIndex].pageIndex === 1) {
                  this.pullrefresh(this.tabIndex);
                }
                el = this.$refs[this.tabBars[e.index].id + e.index][0];_context.next = 5;return (
                  this.getElSize(el));case 5:elSize = _context.sent;if (!(
                elSize.left + elSize.width > 750)) {_context.next = 11;break;}
                index = e.index - 4;
                newEl = this.$refs[this.tabBars[index].id + index][0];
                dom.scrollToElement(newEl, {});return _context.abrupt("return");case 11:


                if (elSize.left < 0) {
                  dom.scrollToElement(el, {});
                }case 12:case "end":return _context.stop();}}}, _callee, this);}));function changeTab(_x) {return _changeTab.apply(this, arguments);}return changeTab;}(),

    getElSize: function getElSize(el) {//得到元素的size
      return new Promise(function (res, rej) {
        var result = dom.getComponentRect(el, function (option) {
          res(option.size);
        });
      });
    },
    randomfn: function randomfn() {
      var ary = [];
      for (var i = 0, length = this.tabBars.length; i < length; i++) {
        var aryItem = {
          loadingText: "正在加载...",
          data: [],
          canPullUp: true,
          pageIndex: 1 };

        if (i === 0) {
          aryItem.pageIndex = 2;
          aryItem.data = aryItem.data.concat(this.newsData);
        }
        ary.push(aryItem);
      }
      return ary;
    },
    onrefresh: function onrefresh(event) {var _this4 = this;
      this.iosRefresh = false;
      this.arrow = "";
      this.refreshText = "正在刷新...";
      this.refreshing = true;
      setTimeout(function () {
        _this4.pullrefresh(_this4.tabIndex, true);
      }, 200);
    },
    onpullingdown: function onpullingdown(event) {
      if (this.refreshing) {
        return;
      }
      this.iosRefresh = this.isIos;
      if (Math.abs(event.pullingDistance) > Math.abs(event.viewHeight)) {
        this.arrow = "↑";
        this.refreshText = "释放立即刷新";
      } else {
        this.arrow = "↓";
        this.refreshText = "下拉可以刷新";
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../../../../../work/uniapp/ThorUI/components/tabNvue/mediaList.nvue?vue&type=template&id=70b2fa51&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--2-0!D:/work/uniapp/ThorUI/components/tabNvue/mediaList.nvue?vue&type=template&id=70b2fa51& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: ["tui-list-view"] }, [
    _c(
      "div",
      {
        staticClass: ["tui-list-cell"],
        class: [_vm.lastChild ? "tui-last-child" : ""],
        on: { click: _vm.bindClick }
      },
      [
        _c("div", { staticClass: ["tui-title-box"] }, [
          _c("text", { staticClass: ["tui-cell-title"] }, [
            _vm._v(_vm._s(_vm.data.title))
          ])
        ]),
        _vm.data.imgArr && _vm.data.imgArr.length > 0
          ? _c(
              "div",
              { staticClass: ["tui-img-container"] },
              _vm._l(_vm.data.imgArr, function(item, index) {
                return _c(
                  "div",
                  { key: index, staticClass: ["tui-cell-img"] },
                  [
                    _c("image", {
                      staticClass: ["tui-img"],
                      attrs: { src: item }
                    })
                  ]
                )
              }),
              0
            )
          : _vm._e(),
        _c("div", { staticClass: ["tui-sub-title"] }, [
          _vm.data.badgeType != 0
            ? _c(
                "text",
                {
                  staticClass: ["tui-badge"],
                  class: [_vm.getClass(_vm.data.badgeType)]
                },
                [_vm._v(_vm._s(_vm.data.badgeText))]
              )
            : _vm._e(),
          _c("text", { staticClass: ["tui-sub-content"] }, [
            _vm._v(_vm._s(_vm.data.subContent))
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../../../../../work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue?vue&type=template&id=b5bc48c0&mpType=page":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--2-0!D:/work/uniapp/ThorUI/pages/navbar-1/navbar-1.nvue?vue&type=template&id=b5bc48c0&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: ["tui-slider-box", "tui-white"] }, [
        _c(
          "slider",
          {
            staticClass: ["tui-slider"],
            attrs: {
              interval: "5000",
              autoPlay: "true",
              showIndicators: "true"
            }
          },
          [
            _c(
              "div",
              { staticClass: ["tui-frame"], on: { click: _vm.goDetail } },
              [
                _c("image", {
                  staticClass: ["tui-slider-img"],
                  class: [_vm.isIos ? "" : "tui-img-radius"],
                  attrs: {
                    resize: "cover",
                    src: "../../static/images/mall/banner/2.jpg"
                  }
                })
              ]
            ),
            _c(
              "div",
              { staticClass: ["tui-frame"], on: { click: _vm.goDetail } },
              [
                _c("image", {
                  staticClass: ["tui-slider-img"],
                  class: [_vm.isIos ? "" : "tui-img-radius"],
                  attrs: {
                    resize: "cover",
                    src: "../../static/images/mall/banner/4.jpg"
                  }
                })
              ]
            ),
            _c(
              "div",
              { staticClass: ["tui-frame"], on: { click: _vm.goDetail } },
              [
                _c("image", {
                  staticClass: ["tui-slider-img"],
                  class: [_vm.isIos ? "" : "tui-img-radius"],
                  attrs: {
                    resize: "cover",
                    src: "../../static/images/mall/banner/5.jpg"
                  }
                })
              ]
            ),
            _c("indicator", { staticClass: ["tui-indicator"] })
          ]
        )
      ]),
      _c(
        "tabs",
        { attrs: { index: _vm.tabIndex }, on: { change: _vm.changeTab } },
        [
          _c(
            "tab-bar",
            { staticClass: ["tui-white"] },
            _vm._l(_vm.tabBars, function(tabBar, index) {
              return _c(
                "div",
                {
                  key: index,
                  ref: tabBar.id + index,
                  refInFor: true,
                  staticClass: ["tab-bar-item"]
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: ["tab-bar-title"],
                      class: [_vm.tabIndex == index ? "tui-active" : ""]
                    },
                    [_vm._v(_vm._s(tabBar.name))]
                  )
                ]
              )
            }),
            0
          ),
          _c(
            "tab-content",
            _vm._l(_vm.newsitems, function(tab, index1) {
              return _c(
                "list",
                {
                  key: index1,
                  ref: "tab" + index1,
                  refInFor: true,
                  staticClass: ["tui-list"],
                  attrs: { loadmoreoffset: "10" },
                  on: {
                    loadmore: function($event) {
                      return _vm.loadMore(index1)
                    }
                  }
                },
                [
                  _c(
                    "refresh",
                    {
                      staticClass: ["tui-refresh"],
                      attrs: { display: _vm.refreshing ? "show" : "hide" },
                      on: {
                        refresh: _vm.onrefresh,
                        pullingdown: _vm.onpullingdown
                      }
                    },
                    [
                      _c("loading-indicator", { staticClass: ["tui-loading"] }),
                      _vm.isIos
                        ? _c(
                            "text",
                            { class: [_vm.iosRefresh ? "ios-arrow" : ""] },
                            [_vm._v(_vm._s(_vm.arrow))]
                          )
                        : _vm._e(),
                      _c("text", { staticClass: ["refresh-text"] }, [
                        _vm._v(_vm._s(_vm.refreshText))
                      ])
                    ]
                  ),
                  _vm._l(tab.data, function(newsitem, index2) {
                    return _c(
                      "cell",
                      {
                        key: index2,
                        appendAsTree: true,
                        attrs: { append: "tree" }
                      },
                      [
                        _c("media-list", {
                          attrs: {
                            data: newsitem,
                            lastChild: index2 === tab.data.length - 1
                          },
                          on: {
                            close: function($event) {
                              return _vm.close(index1, index2)
                            },
                            click: function($event) {
                              return _vm.goDetail(newsitem)
                            }
                          }
                        })
                      ],
                      1
                    )
                  }),
                  _c(
                    "cell",
                    {
                      staticClass: ["tui-loadmore"],
                      appendAsTree: true,
                      attrs: { append: "tree" }
                    },
                    [
                      !tab.canPullUp
                        ? _c("text", { staticClass: ["loadmore-line"] })
                        : _vm._e(),
                      _c(
                        "text",
                        {
                          staticClass: ["loadmore-text"],
                          class: [_vm.isIos ? "tui-gray" : "tui-white"]
                        },
                        [_vm._v(_vm._s(tab.loadingText))]
                      )
                    ]
                  )
                ],
                2
              )
            }),
            0
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9EOi93b3JrL3VuaWFwcC9UaG9yVUkvY29tcG9uZW50cy90YWJOdnVlL21lZGlhTGlzdC5udnVlPzM4ZWEiLCJ3ZWJwYWNrOi8vL0Q6L3dvcmsvdW5pYXBwL1Rob3JVSS9jb21wb25lbnRzL3RhYk52dWUvbWVkaWFMaXN0Lm52dWU/NjlhZiIsIndlYnBhY2s6Ly8vRDovd29yay91bmlhcHAvVGhvclVJL2NvbXBvbmVudHMvdGFiTnZ1ZS9tZWRpYUxpc3QubnZ1ZT8xMjdjIiwid2VicGFjazovLy9EOi93b3JrL3VuaWFwcC9UaG9yVUkvY29tcG9uZW50cy90YWJOdnVlL21lZGlhTGlzdC5udnVlPzE0YWUiLCJ3ZWJwYWNrOi8vL0Q6L3dvcmsvdW5pYXBwL1Rob3JVSS9jb21wb25lbnRzL3RhYk52dWUvdGFiQmFyLm52dWU/MTJjNiIsIndlYnBhY2s6Ly8vRDovd29yay91bmlhcHAvVGhvclVJL2NvbXBvbmVudHMvdGFiTnZ1ZS90YWJCYXIubnZ1ZT9lZmE5Iiwid2VicGFjazovLy9EOi93b3JrL3VuaWFwcC9UaG9yVUkvY29tcG9uZW50cy90YWJOdnVlL3RhYkNvbnRlbnQubnZ1ZT9iZTgzIiwid2VicGFjazovLy9EOi93b3JrL3VuaWFwcC9UaG9yVUkvY29tcG9uZW50cy90YWJOdnVlL3RhYkNvbnRlbnQubnZ1ZT9hZGVmIiwid2VicGFjazovLy9EOi93b3JrL3VuaWFwcC9UaG9yVUkvY29tcG9uZW50cy90YWJOdnVlL3RhYnMubnZ1ZT9mNWZlIiwid2VicGFjazovLy9EOi93b3JrL3VuaWFwcC9UaG9yVUkvY29tcG9uZW50cy90YWJOdnVlL3RhYnMubnZ1ZT9iMTljIiwid2VicGFjazovLy9EOi93b3JrL3VuaWFwcC9UaG9yVUkvbWFpbi5qcz81OTViIiwid2VicGFjazovLy9EOi93b3JrL3VuaWFwcC9UaG9yVUkvcGFnZXMvbmF2YmFyLTEvbmF2YmFyLTEubnZ1ZT85OWU2Iiwid2VicGFjazovLy9EOi93b3JrL3VuaWFwcC9UaG9yVUkvcGFnZXMvbmF2YmFyLTEvbmF2YmFyLTEubnZ1ZT8yYmIyIiwid2VicGFjazovLy9EOi93b3JrL3VuaWFwcC9UaG9yVUkvcGFnZXMvbmF2YmFyLTEvbmF2YmFyLTEubnZ1ZT84MjRkIiwid2VicGFjazovLy9EOi93b3JrL3VuaWFwcC9UaG9yVUkvcGFnZXMvbmF2YmFyLTEvbmF2YmFyLTEubnZ1ZT81ZTYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcz9hMzRhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3VuaS1hcHAtcGx1cy1udnVlLXY4L2Rpc3QvaW5kZXguanM/OTkyYSIsIndlYnBhY2s6Ly8vRDovd29yay91bmlhcHAvVGhvclVJL2NvbXBvbmVudHMvdGFiTnZ1ZS9tZWRpYUxpc3QubnZ1ZT8zYjZkIiwid2VicGFjazovLy9EOi93b3JrL3VuaWFwcC9UaG9yVUkvcGFnZXMvbmF2YmFyLTEvbmF2YmFyLTEubnZ1ZT80MDVlIiwidW5pLWFwcDovLy9jb21wb25lbnRzL3RhYk52dWUvbWVkaWFMaXN0Lm52dWUiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvdGFiTnZ1ZS90YWJCYXIubnZ1ZSIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy90YWJOdnVlL3RhYkNvbnRlbnQubnZ1ZSIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy90YWJOdnVlL3RhYnMubnZ1ZSIsInVuaS1hcHA6Ly8vcGFnZXMvbmF2YmFyLTEvbmF2YmFyLTEubnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcz9iYmRkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanM/OTZjZiIsIndlYnBhY2s6Ly8vRDovd29yay91bmlhcHAvVGhvclVJL2NvbXBvbmVudHMvdGFiTnZ1ZS9tZWRpYUxpc3QubnZ1ZT83ZTVhIiwid2VicGFjazovLy9EOi93b3JrL3VuaWFwcC9UaG9yVUkvcGFnZXMvbmF2YmFyLTEvbmF2YmFyLTEubnZ1ZT82ZGM4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/Mjg3NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQSx5R0FBaUcseUNBQXlDOzs7Ozs7Ozs7Ozs7O0FDbEYxSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlGO0FBQzNCO0FBQ0w7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUJBQU8sQ0FBQywrSkFBbUQ7QUFDNUYsV0FBVztBQUNYLGdEQUFnRCxtQkFBTyxDQUFDLCtKQUFtRDtBQUMzRzs7QUFFQTs7QUFFQTtBQUNtSztBQUNuSyxnQkFBZ0Isd0tBQVU7QUFDMUIsRUFBRSxnRkFBTTtBQUNSLEVBQUUscUZBQU07QUFDUixFQUFFLDhGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ2pDZjtBQUFBO0FBQUE7QUFBQTtBQUEyZSxDQUFnQiw4ZkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvZjtBQUFBO0FBQUE7QUFBQTtBQUF5MkIsQ0FBZ0IsbzFCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTczQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzJEO0FBQ0w7OztBQUd0RDtBQUNtSztBQUNuSyxnQkFBZ0Isd0tBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUFBO0FBQUE7QUFBd2UsQ0FBZ0IsMmZBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBNWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMrRDtBQUNMOzs7QUFHMUQ7QUFDbUs7QUFDbkssZ0JBQWdCLHdLQUFVO0FBQzFCLEVBQUUsaUZBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDbkJmO0FBQUE7QUFBQTtBQUFBO0FBQTRlLENBQWdCLCtmQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWhnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3lEO0FBQ0w7OztBQUdwRDtBQUNtSztBQUNuSyxnQkFBZ0Isd0tBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUFBO0FBQUE7QUFBc2UsQ0FBZ0IseWZBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7QUNDOWI7QUFDNUQsaUZBQUc7QUFDSCxpRkFBRzs7QUFFSCxRQUFRLGlGQUFHOzs7Ozs7Ozs7Ozs7O0FDTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRztBQUMzQjtBQUNMO0FBQ25FOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG1CQUFPLENBQUMsK0tBQTZEO0FBQ3RHLFdBQVc7QUFDWCxnREFBZ0QsbUJBQU8sQ0FBQywrS0FBNkQ7QUFDckg7O0FBRUE7O0FBRUE7QUFDbUs7QUFDbkssZ0JBQWdCLHdLQUFVO0FBQzFCLEVBQUUsMEZBQU07QUFDUixFQUFFLCtGQUFNO0FBQ1IsRUFBRSx3R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUNqQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBcWYsQ0FBZ0Isd2dCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXpnQjtBQUFBO0FBQUE7QUFBQTtBQUFtM0IsQ0FBZ0IsODFCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXY0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBLGlCQUFpQixtQkFBTyxDQUFDLGlGQUFxQjs7Ozs7Ozs7Ozs7OztBQ0E5QztBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnR0FBZ0csYUFBYTtBQUM3RztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQSwyRUFBMkUsYUFBYTtBQUN4RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhFQUE4RSxlQUFlO0FBQzdGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEVBQThFLGVBQWU7QUFDN0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDZSwwR0FBMkMsRUFBQztBQUd6RDs7Ozs7Ozs7Ozs7O0FDNXdCRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFDQTtBQUNBLE9BSkEsRUFEQTs7QUFPQTtBQUNBLG1CQURBO0FBRUE7QUFDQTtBQUNBLE9BSkEsRUFQQSxFQURBOzs7QUFlQTtBQUNBLGFBREEsdUJBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxZQUpBLG9CQUlBLElBSkEsRUFJQTtBQUNBO0FBQ0E7QUFDQSxLQVBBLEVBZkEsRTs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBLFFBREEsa0JBQ0EsYUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSxzQkFGQTtBQUdBLDRCQUhBO0FBSUEsZ0NBSkE7QUFLQSw4QkFMQTtBQU1BLGtDQU5BLEVBREE7O0FBU0E7QUFDQTtBQUNBO0FBQ0EscUNBREE7QUFFQSw4QkFGQSxFQURBOztBQUtBO0FBQ0EsdUJBREE7QUFFQSxzQkFGQTtBQUdBLDRCQUhBLEVBTEE7O0FBVUEsdUJBVkEsQ0FEQSxDQVRBOztBQXNCQSxHQXJDQTtBQXNDQTtBQUNBLFdBREEsbUJBQ0EsQ0FEQSxFQUNBO0FBQ0E7QUFDQSxzQkFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FWQSxFQXRDQSxFOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQSxRQURBLGtCQUNBLGFBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxlQURBLEVBREE7O0FBSUE7QUFDQSxnQkFEQTtBQUVBLHVCQUZBLEVBSkE7O0FBUUEsdUJBUkE7QUFTQSxHQVhBLEU7Ozs7Ozs7Ozs7Ozs7QUNBQSwrSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkEsRUFEQSxFQURBOzs7QUFPQSxNQVBBLGtCQU9BO0FBQ0E7QUFDQSwwQkFEQTs7QUFHQSxHQVhBO0FBWUE7QUFDQSxtQ0FEQSxFQVpBOztBQWVBLFFBZkEsa0JBZUEsYUFmQSxFQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBREE7QUFFQSx3Q0FGQTtBQUdBLG1DQUhBO0FBSUEseUNBSkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFEQTtBQUVBLCtCQUZBLEVBREE7O0FBS0E7QUFDQSw4QkFEQSxFQUxBOztBQVFBLGFBUkE7QUFTQTtBQUNBLEdBbkVBO0FBb0VBO0FBQ0EsZ0JBREEsd0JBQ0EsQ0FEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7QUFLQSxXQUxBLG1CQUtBLENBTEEsRUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLG9CQUZBOztBQUlBLEtBZEEsRUFwRUEsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMwQ0E7QUFDQTtBQUNBO0FBQ0EsK0s7QUFDQSxvQztBQUNBO0FBQ0E7QUFDQSxtQ0FEQTtBQUVBLDJCQUZBO0FBR0EsdUJBSEE7QUFJQSxpQ0FKQSxFQURBOztBQU9BLE1BUEEsa0JBT0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsZUFGQTtBQUdBLHVCQUhBO0FBSUEsdUJBSkE7QUFLQSwyQkFMQTtBQU1BLGlCQU5BO0FBT0EsbUJBUEE7QUFRQTtBQUNBLDhCQURBO0FBRUE7QUFDQSwyQ0FEQSxDQUZBOztBQUtBLG9CQUxBO0FBTUEsdUJBTkE7QUFPQSwyQkFQQTtBQVFBO0FBQ0Esb0NBREE7QUFFQSxrQkFGQTtBQUdBLG9CQUhBO0FBSUEsdUJBSkE7QUFLQSwyQkFMQSxFQVJBO0FBY0E7QUFDQSxtRUFEQTtBQUVBO0FBQ0EsMkNBREEsQ0FGQTs7QUFLQSxvQkFMQTtBQU1BLHlCQU5BO0FBT0EsNEJBUEEsRUFkQTtBQXNCQTtBQUNBLG9DQURBO0FBRUEsa0JBRkE7QUFHQSxvQkFIQTtBQUlBLDBCQUpBO0FBS0EsNEJBTEEsRUF0QkE7QUE0QkE7QUFDQSxtRUFEQTtBQUVBO0FBQ0EsMkNBREEsQ0FGQTs7QUFLQSxvQkFMQTtBQU1BLHlCQU5BO0FBT0EsNEJBUEEsRUE1QkE7QUFvQ0E7QUFDQSw4QkFEQTtBQUVBO0FBQ0EsMkNBREEsQ0FGQTs7QUFLQSxvQkFMQTtBQU1BLHVCQU5BO0FBT0EsMkJBUEEsRUFwQ0E7QUE0Q0E7QUFDQSw4QkFEQTtBQUVBO0FBQ0EsMkNBREEsQ0FGQTs7QUFLQSxvQkFMQTtBQU1BLHVCQU5BO0FBT0EsMkJBUEEsRUE1Q0E7QUFvREE7QUFDQSxvQ0FEQTtBQUVBLGtCQUZBO0FBR0Esb0JBSEE7QUFJQSx1QkFKQTtBQUtBLDJCQUxBLEVBcERBO0FBMERBO0FBQ0EsbUVBREE7QUFFQTtBQUNBLDJDQURBLENBRkE7O0FBS0Esb0JBTEE7QUFNQSx5QkFOQTtBQU9BLDRCQVBBLEVBMURBO0FBa0VBO0FBQ0Esb0NBREE7QUFFQSxrQkFGQTtBQUdBLG9CQUhBO0FBSUEsMEJBSkE7QUFLQSw0QkFMQSxFQWxFQTtBQXdFQTtBQUNBLG1FQURBO0FBRUE7QUFDQSwyQ0FEQSxDQUZBOztBQUtBLG9CQUxBO0FBTUEseUJBTkE7QUFPQSw0QkFQQSxFQXhFQTtBQWdGQTtBQUNBLDhCQURBO0FBRUE7QUFDQSwyQ0FEQSxDQUZBOztBQUtBLG9CQUxBO0FBTUEsdUJBTkE7QUFPQSwyQkFQQSxFQWhGQSxDQVJBOztBQWlHQTtBQUNBLGtCQURBO0FBRUEsaUJBRkE7QUFHQTtBQUNBLGtCQURBO0FBRUEsa0JBRkEsRUFIQTtBQU1BO0FBQ0Esa0JBREE7QUFFQSxvQkFGQSxFQU5BO0FBU0E7QUFDQSxrQkFEQTtBQUVBLHNCQUZBLEVBVEE7QUFZQTtBQUNBLGtCQURBO0FBRUEscUJBRkEsRUFaQTtBQWVBO0FBQ0Esa0JBREE7QUFFQSxrQkFGQSxFQWZBO0FBa0JBO0FBQ0Esa0JBREE7QUFFQSx1QkFGQSxFQWxCQTtBQXFCQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUFyQkEsQ0FqR0E7OztBQTJIQSxHQW5JQTtBQW9JQSxTQXBJQSxxQkFvSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQTs7QUFLQSxLQVBBLEVBT0EsR0FQQTtBQVFBLEdBN0lBO0FBOElBO0FBQ0EsZUFEQSx1QkFDQSxDQURBLEVBQ0EsVUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLEVBRUEsQ0FGQTtBQUdBLE9BaEJBLE1BZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBN0JBO0FBOEJBLFlBOUJBLG9CQThCQSxDQTlCQSxFQThCQTtBQUNBO0FBQ0EsbURBREE7O0FBR0EsS0FsQ0E7QUFtQ0EsWUFuQ0Esb0JBbUNBLENBbkNBLEVBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLEdBRkE7QUFHQSxLQTNDQTtBQTRDQSxhQTVDQSwyR0E0Q0EsQ0E1Q0E7QUE2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFqREEsR0FpREEsaURBakRBO0FBa0RBLG9DQWxEQSxTQWtEQSxNQWxEQTtBQW1EQSxnREFuREE7QUFvREEscUJBcERBLEdBb0RBLFdBcERBO0FBcURBLHFCQXJEQSxHQXFEQSw2Q0FyREE7QUFzREEsK0NBdERBOzs7QUF5REE7QUFDQTtBQUNBLGlCQTNEQTs7QUE2REEsYUE3REEscUJBNkRBLEVBN0RBLEVBNkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBLE9BSkE7QUFLQSxLQW5FQTtBQW9FQSxZQXBFQSxzQkFvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLGtCQUZBO0FBR0EseUJBSEE7QUFJQSxzQkFKQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBcEZBO0FBcUZBLGFBckZBLHFCQXFGQSxLQXJGQSxFQXFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsRUFFQSxHQUZBO0FBR0EsS0E3RkE7QUE4RkEsaUJBOUZBLHlCQThGQSxLQTlGQSxFQThGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0ExR0EsRUE5SUEsRTs7Ozs7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBTyxDQUFDLGdFQUFXOztBQUVwQztBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNodEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlDQUFpQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLE9BQU87QUFDUDtBQUNBLG1CQUFtQixpQ0FBaUM7QUFDcEQsc0JBQXNCLGtDQUFrQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFDQUFxQztBQUNwRDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNENBQTRDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUNBQWlDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsK0NBQStDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtDQUFrQyxzQkFBc0IsRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrQ0FBa0Msc0JBQXNCLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0NBQWtDLHNCQUFzQixFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLDZCQUE2QixpQ0FBaUM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxzQkFBc0IsT0FBTyx3QkFBd0IsRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsdUJBQXVCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw0Q0FBNEM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSwrQ0FBK0MsK0JBQStCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw2Q0FBNkM7QUFDMUU7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGdDQUFnQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxzQ0FBc0MsaUNBQWlDO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZNQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InBhZ2VzL25hdmJhci0xL25hdmJhci0xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi4vLi4vLi4vLi4vLi4vd29yay91bmlhcHAvVGhvclVJL21haW4uanM/e1xcXCJwYWdlXFxcIjpcXFwicGFnZXMlMkZuYXZiYXItMSUyRm5hdmJhci0xXFxcIn1cIik7XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL21lZGlhTGlzdC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcwYjJmYTUxJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21lZGlhTGlzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9tZWRpYUxpc3QubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy4kb3B0aW9ucy5zdHlsZSl7XG4gICAgdGhpcy4kb3B0aW9ucy5zdHlsZSA9IHt9XG59XG5pZih0aGlzLl9fbWVyZ2Vfc3R5bGUgJiYgdGhpcy4kcm9vdCAmJiB0aGlzLiRyb290LiRvcHRpb25zLmFwcFN0eWxlKXtcbiAgdGhpcy5fX21lcmdlX3N0eWxlKHRoaXMuJHJvb3QuJG9wdGlvbnMuYXBwU3R5bGUpXG59XG5pZih0aGlzLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICB0aGlzLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vbWVkaWFMaXN0Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLiRvcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL21lZGlhTGlzdC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4wLjEuMzMuMjAxODA1MDUtYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBudWxsLFxuICBcIjY5YTU0N2M5XCJcbiAgXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwid29yay91bmlhcHAvVGhvclVJL2NvbXBvbmVudHMvdGFiTnZ1ZS9tZWRpYUxpc3QubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4wLjEuMzMuMjAxODA1MDUtYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4wLjEuMzMuMjAxODA1MDUtYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjAuMS4zMy4yMDE4MDUwNS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi9tZWRpYUxpc3QubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjAuMS4zMy4yMDE4MDUwNS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjAuMS4zMy4yMDE4MDUwNS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMC4xLjMzLjIwMTgwNTA1LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuL21lZGlhTGlzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjAuMS4zMy4yMDE4MDUwNS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjAuMS4zMy4yMDE4MDUwNS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4wLjEuMzMuMjAxODA1MDUtYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMC0yIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMC4xLjMzLjIwMTgwNTA1LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjAuMS4zMy4yMDE4MDUwNS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi9tZWRpYUxpc3QubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMC4xLjMzLjIwMTgwNTA1LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMC4xLjMzLjIwMTgwNTA1LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjAuMS4zMy4yMDE4MDUwNS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4wLjEuMzMuMjAxODA1MDUtYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMC0zIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMC4xLjMzLjIwMTgwNTA1LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuL21lZGlhTGlzdC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjAuMS4zMy4yMDE4MDUwNS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4wLjEuMzMuMjAxODA1MDUtYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4vbWVkaWFMaXN0Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzBiMmZhNTEmXCIiLCJ2YXIgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGFiQmFyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RhYkJhci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjAuMS4zMy4yMDE4MDUwNS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjUzZjJkMjgzXCJcbiAgXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwid29yay91bmlhcHAvVGhvclVJL2NvbXBvbmVudHMvdGFiTnZ1ZS90YWJCYXIubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4wLjEuMzMuMjAxODA1MDUtYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4wLjEuMzMuMjAxODA1MDUtYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjAuMS4zMy4yMDE4MDUwNS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi90YWJCYXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjAuMS4zMy4yMDE4MDUwNS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjAuMS4zMy4yMDE4MDUwNS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMC4xLjMzLjIwMTgwNTA1LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuL3RhYkJhci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RhYkNvbnRlbnQubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGFiQ29udGVudC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjAuMS4zMy4yMDE4MDUwNS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjM0OGY1MWRkXCJcbiAgXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwid29yay91bmlhcHAvVGhvclVJL2NvbXBvbmVudHMvdGFiTnZ1ZS90YWJDb250ZW50Lm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMC4xLjMzLjIwMTgwNTA1LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMC4xLjMzLjIwMTgwNTA1LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4wLjEuMzMuMjAxODA1MDUtYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4vdGFiQ29udGVudC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMC4xLjMzLjIwMTgwNTA1LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMC4xLjMzLjIwMTgwNTA1LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4wLjEuMzMuMjAxODA1MDUtYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4vdGFiQ29udGVudC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RhYnMubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGFicy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjAuMS4zMy4yMDE4MDUwNS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjZhNzcyYTAzXCJcbiAgXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwid29yay91bmlhcHAvVGhvclVJL2NvbXBvbmVudHMvdGFiTnZ1ZS90YWJzLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMC4xLjMzLjIwMTgwNTA1LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMC4xLjMzLjIwMTgwNTA1LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4wLjEuMzMuMjAxODA1MDUtYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4vdGFicy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMC4xLjMzLjIwMTgwNTA1LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMC4xLjMzLjIwMTgwNTA1LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4wLjEuMzMuMjAxODA1MDUtYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4vdGFicy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiXG5pbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvbmF2YmFyLTEvbmF2YmFyLTEubnZ1ZT9tcFR5cGU9cGFnZSdcbkFwcC5tcFR5cGU9J3BhZ2UnXG5BcHAuZWwgPSAnI3Jvb3QnXG5cbm5ldyBWdWUoQXBwKVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9uYXZiYXItMS5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI1YmM0OGMwJm1wVHlwZT1wYWdlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbmF2YmFyLTEubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9uYXZiYXItMS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMuJG9wdGlvbnMuc3R5bGUpe1xuICAgIHRoaXMuJG9wdGlvbnMuc3R5bGUgPSB7fVxufVxuaWYodGhpcy5fX21lcmdlX3N0eWxlICYmIHRoaXMuJHJvb3QgJiYgdGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSl7XG4gIHRoaXMuX19tZXJnZV9zdHlsZSh0aGlzLiRyb290LiRvcHRpb25zLmFwcFN0eWxlKVxufVxuaWYodGhpcy5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgdGhpcy5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL25hdmJhci0xLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuJG9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vbmF2YmFyLTEubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4wLjEuMzMuMjAxODA1MDUtYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBudWxsLFxuICBcIjI3NmQ0ZmEyXCJcbiAgXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwid29yay91bmlhcHAvVGhvclVJL3BhZ2VzL25hdmJhci0xL25hdmJhci0xLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMC4xLjMzLjIwMTgwNTA1LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMC4xLjMzLjIwMTgwNTA1LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4wLjEuMzMuMjAxODA1MDUtYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4vbmF2YmFyLTEubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMC4xLjMzLjIwMTgwNTA1LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMC4xLjMzLjIwMTgwNTA1LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4wLjEuMzMuMjAxODA1MDUtYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4vbmF2YmFyLTEubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjAuMS4zMy4yMDE4MDUwNS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjAuMS4zMy4yMDE4MDUwNS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4wLjEuMzMuMjAxODA1MDUtYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMC0yIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMC4xLjMzLjIwMTgwNTA1LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjAuMS4zMy4yMDE4MDUwNS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi9uYXZiYXItMS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjAuMS4zMy4yMDE4MDUwNS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjAuMS4zMy4yMDE4MDUwNS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4v6L2v5Lu2L0hCdWlsZGVyWC4wLjEuMzMuMjAxODA1MDUtYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMC0yIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMC4xLjMzLjIwMTgwNTA1LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjAuMS4zMy4yMDE4MDUwNS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi9uYXZiYXItMS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL+i9r+S7ti9IQnVpbGRlclguMC4xLjMzLjIwMTgwNTA1LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi/ova/ku7YvSEJ1aWxkZXJYLjAuMS4zMy4yMDE4MDUwNS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi9uYXZiYXItMS5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI1YmM0OGMwJm1wVHlwZT1wYWdlXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiZnVuY3Rpb24gaW5pdFVuaSgpIHtcclxuXHJcbiAgICB2YXIgaXNGbiA9IGZ1bmN0aW9uIGlzRm4odikge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ2Z1bmN0aW9uJztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGhhbmRsZVByb21pc2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9taXNlKHByb21pc2UpIHtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtudWxsLCBkYXRhXTtcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtlcnJdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgUkVHRVggPSAvXlxcJHxeb258XmNyZWF0ZXxTeW5jJHxNYW5hZ2VyJHxecGF1c2UvO1xyXG4gICAgdmFyIEFQSV9OT1JNQUxfTElTVCA9IFsnb3MnLCAnZ2V0Q3VycmVudFN1Yk5WdWUnLCAnZ2V0U3ViTlZ1ZUJ5SWQnLCAnc3RvcFJlY29yZCcsICdzdG9wVm9pY2UnLFxyXG4gICAgICAgICdzdG9wQmFja2dyb3VuZEF1ZGlvJywgJ3N0b3BQdWxsRG93blJlZnJlc2gnLCAnaGlkZUtleWJvYXJkJywgJ2hpZGVUb2FzdCcsICdoaWRlTG9hZGluZycsXHJcbiAgICAgICAgJ3Nob3dOYXZpZ2F0aW9uQmFyTG9hZGluZycsICdoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcnLCAnY2FuSVVzZScsICduYXZpZ2F0ZUJhY2snLCAnY2xvc2VTb2NrZXQnLFxyXG4gICAgICAgICdwYWdlU2Nyb2xsVG8nLCAnZHJhd0NhbnZhcydcclxuICAgIF07XHJcblxyXG4gICAgdmFyIHNob3VsZFByb21pc2UgPSBmdW5jdGlvbiBzaG91bGRQcm9taXNlKG5hbWUpIHtcclxuICAgICAgICBpZiAoUkVHRVgudGVzdChuYW1lKSAmJiBuYW1lICE9PSAnY3JlYXRlQkxFQ29ubmVjdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAofkFQSV9OT1JNQUxfTElTVC5pbmRleE9mKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwcm9taXNpZnkgPSBmdW5jdGlvbiBwcm9taXNpZnkoYXBpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzRm4ob3B0aW9ucy5zdWNjZXNzKSB8fCBpc0ZuKG9wdGlvbnMuZmFpbCkgfHwgaXNGbihvcHRpb25zLmNvbXBsZXRlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaS5hcHBseSh1bmRlZmluZWQsIFtvcHRpb25zXS5jb25jYXQocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVByb21pc2UobmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBhcGkuYXBwbHkodW5kZWZpbmVkLCBbT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogcmVqZWN0XHJcbiAgICAgICAgICAgICAgICB9KV0uY29uY2F0KHBhcmFtcykpO1xyXG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tZXh0ZW5kLW5hdGl2ZSAqL1xyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25NZXNzYWdlQ2FsbGJhY2tzID0gW107XHJcblxyXG4gICAgdmFyIG9yaWdpbiA9IHZvaWQgMDtcclxuXHJcbiAgICBmdW5jdGlvbiBvblN1Yk5WdWVNZXNzYWdlKGRhdGEpIHtcclxuICAgICAgICBvbk1lc3NhZ2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luOiBvcmlnaW4sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB3ZWJ2aWV3SWQgPSB3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQ7XHJcblxyXG4gICAgdmFyIGNoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbCgnVU5JLUFQUC1TVUJOVlVFJyk7XHJcbiAgICBjaGFubmVsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEudG8gPT09IHdlYnZpZXdJZCkge1xyXG4gICAgICAgICAgICBvblN1Yk5WdWVNZXNzYWdlKGV2ZW50LmRhdGEuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiB3cmFwcGVyKHdlYnZpZXcpIHtcclxuICAgICAgICB3ZWJ2aWV3LiRwcm9jZXNzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB2YXIgY3VycmVudFdlYnZpZXdJZCA9IHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZDtcclxuICAgICAgICB2YXIgaXNQb3B1cE5WdWUgPSBjdXJyZW50V2Vidmlld0lkID09PSB3ZWJ2aWV3LmlkO1xyXG5cclxuICAgICAgICB2YXIgaG9zdE5WdWVJZCA9IHdlYnZpZXcuX191bmlhcHBfb3JpZ2luX3R5cGUgPT09ICd1bmlOVmlldycgJiYgd2Vidmlldy5fX3VuaWFwcF9vcmlnaW5faWQ7XHJcbiAgICAgICAgdmFyIHBvcHVwTlZ1ZUlkID0gd2Vidmlldy5pZDtcclxuXHJcbiAgICAgICAgd2Vidmlldy5wb3N0TWVzc2FnZSA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGhvc3ROVnVlSWQpIHtcclxuICAgICAgICAgICAgICAgIGNoYW5uZWwucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IGlzUG9wdXBOVnVlID8gaG9zdE5WdWVJZCA6IHBvcHVwTlZ1ZUlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnVW5pQXBwU3ViTlZ1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcub25NZXNzYWdlID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgb25NZXNzYWdlQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghd2Vidmlldy5fX3VuaWFwcF9tYXNrX2lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3JpZ2luID0gd2Vidmlldy5fX3VuaWFwcF9ob3N0O1xyXG5cclxuICAgICAgICB2YXIgbWFza0NvbG9yID0gd2Vidmlldy5fX3VuaWFwcF9tYXNrO1xyXG5cclxuICAgICAgICB2YXIgbWFza1dlYnZpZXcgPSB3ZWV4UGx1cy53ZWJ2aWV3LmdldFdlYnZpZXdCeUlkKHdlYnZpZXcuX191bmlhcHBfbWFza19pZCk7XG4gICAgICAgIG1hc2tXZWJ2aWV3ID0gbWFza1dlYnZpZXcucGFyZW50KCkgfHwgbWFza1dlYnZpZXc7Ly/lho3mrKHmo4DmtYvniLZcclxuICAgICAgICB2YXIgb2xkU2hvdyA9IHdlYnZpZXcuc2hvdztcclxuICAgICAgICB2YXIgb2xkSGlkZSA9IHdlYnZpZXcuaGlkZTtcclxuICAgICAgICB2YXIgb2xkQ2xvc2UgPSB3ZWJ2aWV3LmNsb3NlO1xyXG5cclxuICAgICAgICB2YXIgc2hvd01hc2sgPSBmdW5jdGlvbiBzaG93TWFzaygpIHtcclxuICAgICAgICAgICAgbWFza1dlYnZpZXcuc2V0U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgbWFzazogbWFza0NvbG9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGNsb3NlTWFzayA9IGZ1bmN0aW9uIGNsb3NlTWFzaygpIHtcclxuICAgICAgICAgICAgbWFza1dlYnZpZXcuc2V0U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgbWFzazogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5zaG93ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNob3dNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZFNob3cuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LmhpZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkSGlkZS5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuY2xvc2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkQ2xvc2UuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdWJOVnVlQnlJZChpZCkge1xyXG4gICAgICAgIHZhciB3ZWJ2aWV3ID0gd2VleFBsdXMud2Vidmlldy5nZXRXZWJ2aWV3QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKHdlYnZpZXcgJiYgIXdlYnZpZXcuJHByb2Nlc3NlZCkge1xyXG4gICAgICAgICAgICB3cmFwcGVyKHdlYnZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2VidmlldztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50U3ViTlZ1ZSgpIHtcclxuICAgICAgICByZXR1cm4gZ2V0U3ViTlZ1ZUJ5SWQod2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcGx1cyA9IHdlZXgucmVxdWlyZU1vZHVsZSgncGx1cycpO1xyXG4gICAgdmFyIGdsb2JhbEV2ZW50ID0gd2VleC5yZXF1aXJlTW9kdWxlKCdnbG9iYWxFdmVudCcpO1xyXG5cclxuICAgIHZhciBpZCA9IDA7XHJcbiAgICB2YXIgY2FsbGJhY2tzID0ge307XHJcblxyXG4gICAgdmFyIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQgPSAnX191bmlhcHBfX3NlcnZpY2UnO1xyXG5cclxuICAgIGdsb2JhbEV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BsdXNNZXNzYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcEpzQXBpJykge1xyXG4gICAgICAgICAgICBpbnZva2UoZS5kYXRhLmlkLCBlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcFN1Yk5WdWUnKSB7XHJcbiAgICAgICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2UoZS5kYXRhLmRhdGEsIGUuZGF0YS5vcHRpb25zKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgY3JlYXRlQ2FsbGJhY2sgPSBmdW5jdGlvbiBjcmVhdGVDYWxsYmFjayhhcmdzLCB0eXBlKSB7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2socmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0ZuKGFyZ3MpKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzKHJlcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncykge1xyXG4gICAgICAgICAgICAgICAgaWYgKH5yZXMuZXJyTXNnLmluZGV4T2YoJzpvaycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihhcmdzLnN1Y2Nlc3MpICYmIGFyZ3Muc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh+cmVzLmVyck1zZy5pbmRleE9mKCc6ZmFpbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihhcmdzLmZhaWwpICYmIGFyZ3MuZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXNGbihhcmdzLmNvbXBsZXRlKSAmJiBhcmdzLmNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChpc0ZuKGFyZ3MpIHx8IGFyZ3MgJiYgaXNGbihhcmdzLmNhbGxiYWNrKSkge1xyXG4gICAgICAgICAgICBjYWxsYmFjay5rZWVwQWxpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2FsbGJhY2s7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBpbnZva2UgPSBmdW5jdGlvbiBpbnZva2UoY2FsbGJhY2tJZCwgZGF0YSkge1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc1tjYWxsYmFja0lkXTtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2sua2VlcEFsaXZlKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY2FsbGJhY2tzW2NhbGxiYWNrSWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignY2FsbGJhY2tbJyArIGNhbGxiYWNrSWQgKyAnXSBpcyB1bmRlZmluZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwdWJsaXNoID0gZnVuY3Rpb24gcHVibGlzaChfcmVmKSB7XHJcbiAgICAgICAgdmFyIGlkID0gX3JlZi5pZCxcclxuICAgICAgICAgICAgdHlwZSA9IF9yZWYudHlwZSxcclxuICAgICAgICAgICAgcGFyYW1zID0gX3JlZi5wYXJhbXM7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrc1tpZF0gPSBjcmVhdGVDYWxsYmFjayhwYXJhbXMsIHR5cGUpO1xyXG4gICAgICAgIHBsdXMucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICAgICAgfSwgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHBvc3RNZXNzYWdlKGRhdGEpIHtcclxuICAgICAgICBwbHVzLnBvc3RNZXNzYWdlKGRhdGEsIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjcmVhdGVQdWJsaXNoID0gZnVuY3Rpb24gY3JlYXRlUHVibGlzaChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICAgICAgcHVibGlzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogaWQrKyxcclxuICAgICAgICAgICAgICAgIHR5cGU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IGFyZ3NcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWlyZU5hdGl2ZVBsdWdpbihwbHVnaW5OYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHdlZXgucmVxdWlyZU1vZHVsZShwbHVnaW5OYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZG9tID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKTtcclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkRm9udEZhY2UoX3JlZikge1xyXG4gICAgICAgIHZhciBmYW1pbHkgPSBfcmVmLmZhbWlseSxcclxuICAgICAgICAgICAgc291cmNlID0gX3JlZi5zb3VyY2UsXHJcbiAgICAgICAgICAgIGRlc2MgPSBfcmVmLmRlc2MsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgZG9tLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBmYW1pbHksXHJcbiAgICAgICAgICAgIHNyYzogc291cmNlLnJlcGxhY2UoL1wiL2csICdcXCcnKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgIGVyck1zZzogJ2xvYWRGb250RmFjZTpvaycsXHJcbiAgICAgICAgICAgIHN0YXR1czogJ2xvYWRlZCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdsb2JhbEV2ZW50JDEgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2dsb2JhbEV2ZW50Jyk7XHJcblxyXG4gICAgdmFyIGNhbGxiYWNrcyQxID0gW107XHJcblxyXG4gICAgZ2xvYmFsRXZlbnQkMS5hZGRFdmVudExpc3RlbmVyKCdwbHVzTWVzc2FnZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5kYXRhLnR5cGUgPT09ICdVbmlBcHBSZWFkeScpIHtcclxuICAgICAgICAgICAgcmVhZHkuaXNVbmlBcHBSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3MkMS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyQxLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlYWR5KGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1VuaUFwcFJlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xyXG4gICAgfSA6IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/XHJcbiAgICAgICAgICAgIFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc3RyZWFtID0gd2VleC5yZXF1aXJlTW9kdWxlKCdzdHJlYW0nKTtcclxuXHJcbiAgICAvLyBsZXQgcmVxdWVzdFRhc2tJZCA9IDBcclxuXHJcbiAgICB2YXIgTUVUSE9EX0dFVCA9ICdHRVQnO1xyXG4gICAgdmFyIE1FVEhPRF9QT1NUID0gJ1BPU1QnO1xyXG4gICAgdmFyIENPTlRFTlRfVFlQRV9KU09OID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG4gICAgdmFyIENPTlRFTlRfVFlQRV9GT1JNID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XHJcblxyXG4gICAgdmFyIHNlcmlhbGl6ZSA9IGZ1bmN0aW9uIHNlcmlhbGl6ZShkYXRhKSB7XHJcbiAgICAgICAgdmFyIG1ldGhvZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogTUVUSE9EX0dFVDtcclxuICAgICAgICB2YXIgY29udGVudFR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IENPTlRFTlRfVFlQRV9GT1JNO1xyXG5cclxuICAgICAgICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXRob2QudG9VcHBlckNhc2UoKSA9PT0gTUVUSE9EX1BPU1QgJiYgY29udGVudFR5cGUudG9Mb3dlckNhc2UoKSA9PT0gQ09OVEVOVF9UWVBFX0pTT04pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9KS5qb2luKCcmJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlcXVlc3QoX3JlZikge1xyXG4gICAgICAgIHZhciB1cmwgPSBfcmVmLnVybCxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyID0gX3JlZi5oZWFkZXIsXHJcbiAgICAgICAgICAgIF9yZWYkbWV0aG9kID0gX3JlZi5tZXRob2QsXHJcbiAgICAgICAgICAgIG1ldGhvZCA9IF9yZWYkbWV0aG9kID09PSB1bmRlZmluZWQgPyAnR0VUJyA6IF9yZWYkbWV0aG9kLFxyXG4gICAgICAgICAgICBfcmVmJGRhdGFUeXBlID0gX3JlZi5kYXRhVHlwZSxcclxuICAgICAgICAgICAgZGF0YVR5cGUgPSBfcmVmJGRhdGFUeXBlID09PSB1bmRlZmluZWQgPyAnanNvbicgOiBfcmVmJGRhdGFUeXBlLFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGUgPSBfcmVmLnJlc3BvbnNlVHlwZSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICAvLyByZXF1ZXN0VGFza0lkKytcclxuICAgICAgICB2YXIgYWJvcnRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB2YXIgaGFzQ29udGVudFR5cGUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBoZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaGFzQ29udGVudFR5cGUgJiYgbmFtZS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc0NvbnRlbnRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IGhlYWRlcltuYW1lXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1tuYW1lXSA9IGhlYWRlcltuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWV0aG9kID09PSBNRVRIT0RfR0VUICYmIGRhdGEpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsICsgKH51cmwuaW5kZXhPZignPycpID8gdXJsLnN1YnN0cigtMSkgPT09ICcmJyB8fCB1cmwuc3Vic3RyKC0xKSA9PT0gJz8nID8gJycgOiAnJicgOiAnPycpICtcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyZWFtLmZldGNoKHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICB0eXBlOiBkYXRhVHlwZSA9PT0gJ2pzb24nID8gJ2pzb24nIDogJ3RleHQnLFxyXG4gICAgICAgICAgICBib2R5OiBtZXRob2QgIT09IE1FVEhPRF9HRVQgPyBzZXJpYWxpemUoZGF0YSwgbWV0aG9kLCBoZWFkZXJzWydDb250ZW50LVR5cGUnXSkgOiAnJ1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKF9yZWYyKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSBfcmVmMi5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBvayA9IF9yZWYyLm9rLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9IF9yZWYyLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgICAgICBkYXRhID0gX3JlZjIuZGF0YSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMgPSBfcmVmMi5oZWFkZXJzO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJldCA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoIXN0YXR1cyB8fCBzdGF0dXMgPT09IC0xIHx8IGFib3J0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAncmVxdWVzdDpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0LmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0LnN0YXR1c0NvZGUgPSBzdGF0dXM7XHJcbiAgICAgICAgICAgICAgICByZXQuaGVhZGVyID0gaGVhZGVycztcclxuICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uIGFib3J0KCkge1xyXG4gICAgICAgICAgICAgICAgYWJvcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzdG9yYWdlID0gd2VleC5yZXF1aXJlTW9kdWxlKCdwbHVzc3RvcmFnZScpO1xyXG4gICAgdmFyIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSA9ICdfX1RZUEUnO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0b3JhZ2UoX3JlZikge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBzdG9yYWdlLmdldEl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFLCBmdW5jdGlvbihyZXQpIHtcclxuICAgICAgICAgICAgaWYgKHJldC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFUeXBlID0gcmV0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLmdldEl0ZW0oa2V5LCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUeXBlICYmIHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUeXBlICE9PSAnU3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAnZ2V0U3RvcmFnZTpvaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0U3RvcmFnZShfcmVmMikge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmMi5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjIuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYyLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjIuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHZhciBkYXRhVHlwZSA9ICdTdHJpbmcnO1xyXG4gICAgICAgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgZGF0YVR5cGUgPSAnT2JqZWN0JztcclxuICAgICAgICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhLCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSwgZGF0YVR5cGUsIGZ1bmN0aW9uKHJldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXQucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ3NldFN0b3JhZ2U6b2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVN0b3JhZ2UoX3JlZjMpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZjMua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZjMuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMy5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYzLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oa2V5LCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdyZW1vdmVTdG9yYWdlOm9rJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3JlbW92ZVN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyU3RvcmFnZShfcmVmNCkge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmNC5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmNC5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjQuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWY0LmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjQuY29tcGxldGU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNsaXBib2FyZCA9IHdlZXgucmVxdWlyZU1vZHVsZSgnY2xpcGJvYXJkJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q2xpcGJvYXJkRGF0YShfcmVmKSB7XHJcbiAgICAgICAgdmFyIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgY2xpcGJvYXJkLmdldFN0cmluZyhmdW5jdGlvbihfcmVmMikge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IF9yZWYyLmRhdGE7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiAnZ2V0Q2xpcGJvYXJkRGF0YTpvaycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENsaXBib2FyZERhdGEoX3JlZjMpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IF9yZWYzLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMy5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjMuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMy5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgZXJyTXNnOiAnc2V0Q2xpcGJvYXJkRGF0YTpvaydcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNsaXBib2FyZC5zZXRTdHJpbmcoZGF0YSk7XHJcbiAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2V0RW1pdHRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ2V0VW5pRW1pdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0VW5pRW1pdHRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIEVtaXR0ZXIgPSB7XHJcbiAgICAgICAgICAgICRvbjogZnVuY3Rpb24gJG9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9uIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkb2ZmOiBmdW5jdGlvbiAkb2ZmKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9mZiBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJG9uY2U6IGZ1bmN0aW9uICRvbmNlKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9uY2UgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRlbWl0OiBmdW5jdGlvbiAkZW1pdCgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRlbWl0IGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZ2V0VW5pRW1pdHRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVtaXR0ZXI7XHJcbiAgICAgICAgfTtcclxuICAgIH0oKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhcHBseShjdHgsIG1ldGhvZCwgYXJncykge1xyXG4gICAgICAgIHJldHVybiBjdHhbbWV0aG9kXS5hcHBseShjdHgsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvbigpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb2ZmKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb2ZmJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb25jZSgpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uY2UnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRlbWl0KCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckZW1pdCcsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB2YXIgYXBpID0gLyojX19QVVJFX18qLyBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICBsb2FkRm9udEZhY2U6IGxvYWRGb250RmFjZSxcclxuICAgICAgICByZWFkeTogcmVhZHksXHJcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICBnZXRTdG9yYWdlOiBnZXRTdG9yYWdlLFxyXG4gICAgICAgIHNldFN0b3JhZ2U6IHNldFN0b3JhZ2UsXHJcbiAgICAgICAgcmVtb3ZlU3RvcmFnZTogcmVtb3ZlU3RvcmFnZSxcclxuICAgICAgICBjbGVhclN0b3JhZ2U6IGNsZWFyU3RvcmFnZSxcclxuICAgICAgICBnZXRDbGlwYm9hcmREYXRhOiBnZXRDbGlwYm9hcmREYXRhLFxyXG4gICAgICAgIHNldENsaXBib2FyZERhdGE6IHNldENsaXBib2FyZERhdGEsXHJcbiAgICAgICAgb25TdWJOVnVlTWVzc2FnZTogb25TdWJOVnVlTWVzc2FnZSxcclxuICAgICAgICBnZXRTdWJOVnVlQnlJZDogZ2V0U3ViTlZ1ZUJ5SWQsXHJcbiAgICAgICAgZ2V0Q3VycmVudFN1Yk5WdWU6IGdldEN1cnJlbnRTdWJOVnVlLFxyXG4gICAgICAgICRvbjogJG9uLFxyXG4gICAgICAgICRvZmY6ICRvZmYsXHJcbiAgICAgICAgJG9uY2U6ICRvbmNlLFxyXG4gICAgICAgICRlbWl0OiAkZW1pdFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHZhciB3eCA9IHtcclxuICAgICAgICB1cGxvYWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIGRvd25sb2FkRmlsZTogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VJbWFnZTogdHJ1ZSxcclxuICAgICAgICBwcmV2aWV3SW1hZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0SW1hZ2VJbmZvOiB0cnVlLFxyXG4gICAgICAgIHNhdmVJbWFnZVRvUGhvdG9zQWxidW06IHRydWUsXHJcbiAgICAgICAgY2hvb3NlVmlkZW86IHRydWUsXHJcbiAgICAgICAgc2F2ZVZpZGVvVG9QaG90b3NBbGJ1bTogdHJ1ZSxcclxuICAgICAgICBzYXZlRmlsZTogdHJ1ZSxcclxuICAgICAgICBnZXRTYXZlZEZpbGVMaXN0OiB0cnVlLFxyXG4gICAgICAgIGdldFNhdmVkRmlsZUluZm86IHRydWUsXHJcbiAgICAgICAgcmVtb3ZlU2F2ZWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIG9wZW5Eb2N1bWVudDogdHJ1ZSxcclxuICAgICAgICBzZXRTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldFN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0U3RvcmFnZUluZm86IHRydWUsXHJcbiAgICAgICAgcmVtb3ZlU3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBjbGVhclN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0TG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgY2hvb3NlTG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgb3BlbkxvY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIGdldFN5c3RlbUluZm86IHRydWUsXHJcbiAgICAgICAgZ2V0TmV0d29ya1R5cGU6IHRydWUsXHJcbiAgICAgICAgbWFrZVBob25lQ2FsbDogdHJ1ZSxcclxuICAgICAgICBzY2FuQ29kZTogdHJ1ZSxcclxuICAgICAgICBzZXRTY3JlZW5CcmlnaHRuZXNzOiB0cnVlLFxyXG4gICAgICAgIGdldFNjcmVlbkJyaWdodG5lc3M6IHRydWUsXHJcbiAgICAgICAgc2V0S2VlcFNjcmVlbk9uOiB0cnVlLFxyXG4gICAgICAgIHZpYnJhdGVMb25nOiB0cnVlLFxyXG4gICAgICAgIHZpYnJhdGVTaG9ydDogdHJ1ZSxcclxuICAgICAgICBhZGRQaG9uZUNvbnRhY3Q6IHRydWUsXHJcbiAgICAgICAgc2hvd1RvYXN0OiB0cnVlLFxyXG4gICAgICAgIHNob3dMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGhpZGVUb2FzdDogdHJ1ZSxcclxuICAgICAgICBoaWRlTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBzaG93TW9kYWw6IHRydWUsXHJcbiAgICAgICAgc2hvd0FjdGlvblNoZWV0OiB0cnVlLFxyXG4gICAgICAgIHNldE5hdmlnYXRpb25CYXJUaXRsZTogdHJ1ZSxcclxuICAgICAgICBzZXROYXZpZ2F0aW9uQmFyQ29sb3I6IHRydWUsXHJcbiAgICAgICAgbmF2aWdhdGVUbzogdHJ1ZSxcclxuICAgICAgICByZWRpcmVjdFRvOiB0cnVlLFxyXG4gICAgICAgIHJlTGF1bmNoOiB0cnVlLFxyXG4gICAgICAgIHN3aXRjaFRhYjogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0ZUJhY2s6IHRydWUsXHJcbiAgICAgICAgZ2V0UHJvdmlkZXI6IHRydWUsXHJcbiAgICAgICAgbG9naW46IHRydWUsXHJcbiAgICAgICAgZ2V0VXNlckluZm86IHRydWUsXHJcbiAgICAgICAgc2hhcmU6IHRydWUsXHJcbiAgICAgICAgcmVxdWVzdFBheW1lbnQ6IHRydWUsXHJcbiAgICAgICAgc3Vic2NyaWJlUHVzaDogdHJ1ZSxcclxuICAgICAgICB1bnN1YnNjcmliZVB1c2g6IHRydWUsXHJcbiAgICAgICAgb25QdXNoOiB0cnVlLFxyXG4gICAgICAgIG9mZlB1c2g6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhc2VVbmkgPSB7XHJcbiAgICAgICAgb3M6IHtcclxuICAgICAgICAgICAgbnZ1ZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHVuaSA9IHt9O1xyXG5cclxuICAgIGlmICh0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdW5pID0gbmV3IFByb3h5KHt9LCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KHRhcmdldCwgbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvcycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBudnVlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAncG9zdE1lc3NhZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdyZXF1aXJlTmF0aXZlUGx1Z2luJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXF1aXJlTmF0aXZlUGx1Z2luO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbWV0aG9kID0gYXBpW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtZXRob2QpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSBjcmVhdGVQdWJsaXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFByb21pc2UobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KG1ldGhvZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGJhc2VVbmkpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgIHVuaVtrZXldID0gYmFzZVVuaVtrZXldO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1bmkucG9zdE1lc3NhZ2UgPSBwb3N0TWVzc2FnZTtcclxuXHJcbiAgICAgICAgdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4gPSByZXF1aXJlTmF0aXZlUGx1Z2luO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwID0gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZDtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZDtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMod3gpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gYXBpW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoIW1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gY3JlYXRlUHVibGlzaChuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkUHJvbWlzZShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdW5pW25hbWVdID0gcHJvbWlzaWZ5KG1ldGhvZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bmlbbmFtZV0gPSBtZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmk7XHJcbn1cclxuXHJcbnZhciBjcmVhdGVVbmk7XHJcblxyXG5pZiAodHlwZW9mIGdldFVuaSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgY3JlYXRlVW5pID0gZ2V0VW5pO1xyXG59IGVsc2Uge1xyXG4gICAgY3JlYXRlVW5pID0gaW5pdFVuaTtcclxufVxyXG52YXIgd2VleFBsdXMgPSBuZXcgV2VleFBsdXMod2VleCk7XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVVuaSh3ZWV4LCB3ZWV4UGx1cywgQnJvYWRjYXN0Q2hhbm5lbCk7XHJcbmV4cG9ydCB7XHJcbiAgICB3ZWV4UGx1c1xyXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHVpLWxpc3Qtdmlld1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yOmFjdGl2ZVwiOiBcIiNlZWVlZWVcIlxuICB9LFxuICBcInR1aS1saXN0LWNlbGxcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxXCIsXG4gICAgXCJib3JkZXJCb3R0b21TdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNFNkU2RTZcIlxuICB9LFxuICBcInR1aS1sYXN0LWNoaWxkXCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IDBcbiAgfSxcbiAgXCJ0dWktdGl0bGUtYm94XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjkwXCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJsaW5lc1wiOiAyXG4gIH0sXG4gIFwidHVpLWNlbGwtdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzNlwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjU2XCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJsaW5lc1wiOiAyLFxuICAgIFwidGV4dE92ZXJmbG93XCI6IFwiZWxsaXBzaXNcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwidHVpLWltZy1jb250YWluZXJcIjoge1xuICAgIFwid2lkdGhcIjogXCI2OTBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyNFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTg0XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcInR1aS1jZWxsLWltZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjIyMFwiLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIlxuICB9LFxuICBcInR1aS1pbWdcIjoge1xuICAgIFwid2lkdGhcIjogXCIyMjBcIixcbiAgICBcImhlaWdodFwiOiBcIjE4NFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNFwiXG4gIH0sXG4gIFwidHVpLXN1Yi10aXRsZVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcInR1aS1zdWItY29udGVudFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNCQ0JDQkNcIlxuICB9LFxuICBcInR1aS1iYWRnZVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNVwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjVcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI0XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI0XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwXCJcbiAgfSxcbiAgXCJ0dWktcmVkXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGQ0VCRUZcIixcbiAgICBcImNvbG9yXCI6IFwiIzhBNTk2NlwiXG4gIH0sXG4gIFwidHVpLWJsdWVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0VDRjZGRFwiLFxuICAgIFwiY29sb3JcIjogXCIjNERBQkVCXCJcbiAgfSxcbiAgXCJ0dWktb3JhbmdlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRUY1RUJcIixcbiAgICBcImNvbG9yXCI6IFwiI0ZBQTg1MVwiXG4gIH0sXG4gIFwidHVpLWdyZWVuXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNFOEY2RThcIixcbiAgICBcImNvbG9yXCI6IFwiIzQ0Q0Y4NVwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0dWktd2hpdGVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIFwidHVpLWdyYXlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZhZmFmYVwiXG4gIH0sXG4gIFwidHVpLXNsaWRlci1ib3hcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ0dWktc2xpZGVyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjkwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIyMjBcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEyXCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiXG4gIH0sXG4gIFwidHVpLWltZy1yYWRpdXNcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTJcIlxuICB9LFxuICBcInR1aS1mcmFtZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjY5MFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjIwXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJ0dWktc2xpZGVyLWltZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjY5MFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjIwXCJcbiAgfSxcbiAgXCJ0dWktaW5kaWNhdG9yXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjkwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIyMFwiLFxuICAgIFwiaXRlbUNvbG9yXCI6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjQpXCIsXG4gICAgXCJpdGVtU2VsZWN0ZWRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcIml0ZW1TaXplXCI6IFwiMTRcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiBcIjI0XCIsXG4gICAgXCJsZWZ0XCI6IDBcbiAgfSxcbiAgXCJ0dWktbG9hZGluZ1wiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjE1XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2MFwiLFxuICAgIFwid2lkdGhcIjogXCI2MFwiLFxuICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCJcbiAgfSxcbiAgXCJ0YWItYmFyLWl0ZW1cIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTAwXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjE1MFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInRhYi1iYXItdGl0bGVcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTAwXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMTAwXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMyXCIsXG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI0MDBcIlxuICB9LFxuICBcInR1aS1hY3RpdmVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNTY3N2ZjXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjM2XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCI2XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiM1Njc3ZmNcIixcbiAgICBcIndpZHRoXCI6IFwiODBcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwidHVpLWxvYWRtb3JlXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjEwMFwiLFxuICAgIFwid2lkdGhcIjogXCI3NTBcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJsb2FkbW9yZS10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjZcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjZcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjZcIlxuICB9LFxuICBcImxvYWRtb3JlLWxpbmVcIjoge1xuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxXCIsXG4gICAgXCJib3JkZXJCb3R0b21TdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNlNWU1ZTVcIixcbiAgICBcIndpZHRoXCI6IFwiMzIwXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ6SW5kZXhcIjogLTFcbiAgfSxcbiAgXCJ0dWktcmVmcmVzaFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODBcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJyZWZyZXNoLXRleHRcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI2XCIsXG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIlxuICB9LFxuICBcImlvcy1hcnJvd1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIixcbiAgICBcImZvbnRTaXplXCI6IFwiNDJcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCIzMDBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiLTc1XCJcbiAgfVxufSIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInR1aS1saXN0LXZpZXdcIj5cblx0XHQ8ZGl2IGNsYXNzPVwidHVpLWxpc3QtY2VsbFwiIDpjbGFzcz1cIltsYXN0Q2hpbGQ/J3R1aS1sYXN0LWNoaWxkJzonJ11cIiBAY2xpY2s9XCJiaW5kQ2xpY2tcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ0dWktdGl0bGUtYm94XCI+XG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwidHVpLWNlbGwtdGl0bGVcIj57e2RhdGEudGl0bGV9fTwvdGV4dD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInR1aS1pbWctY29udGFpbmVyXCIgdi1pZj1cImRhdGEuaW1nQXJyICYmIGRhdGEuaW1nQXJyLmxlbmd0aD4wXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ0dWktY2VsbC1pbWdcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBkYXRhLmltZ0FyclwiIDprZXk9XCJpbmRleFwiPlxuXHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbVwiIGNsYXNzPVwidHVpLWltZ1wiPjwvaW1hZ2U+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidHVpLXN1Yi10aXRsZVwiPlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInR1aS1iYWRnZVwiIDpjbGFzcz1cIltnZXRDbGFzcyhkYXRhLmJhZGdlVHlwZSldXCIgdi1pZj1cImRhdGEuYmFkZ2VUeXBlIT0wXCI+e3tkYXRhLmJhZGdlVGV4dH19PC90ZXh0PlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInR1aS1zdWItY29udGVudFwiPnt7ZGF0YS5zdWJDb250ZW50fX08L3RleHQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0XHRkZWZhdWx0OiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHt9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRsYXN0Q2hpbGQ6IHtcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRiaW5kQ2xpY2soKSB7XG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrJylcblx0XHRcdH0sXG5cdFx0XHRnZXRDbGFzcyh0eXBlKSB7XG5cdFx0XHRcdC8vMS10dWktcmVkIDItdHVpLWJsdWUgIDMtdHVpLW9yYW5nZSA0LXR1aS1ncmVlblxuXHRcdFx0XHRyZXR1cm4gW1widHVpLXJlZFwiLCBcInR1aS1ibHVlXCIsIFwidHVpLW9yYW5nZVwiLCBcInR1aS1ncmVlblwiXVt0eXBlIC0gMV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHQudHVpLWxpc3QtdmlldyB7XG5cdFx0d2lkdGg6IDc1MHB4O1xuXHRcdHBhZGRpbmctbGVmdDogMzBweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRcdC8qIHBhZGRpbmctYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7ICovXG5cdH1cblxuXHQudHVpLWxpc3QtdmlldzphY3RpdmUge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG5cdH1cblxuXHQudHVpLWxpc3QtY2VsbCB7XG5cdFx0d2lkdGg6IDc1MHB4O1xuXHRcdHBhZGRpbmctdG9wOiAzMHB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiAzMHB4O1xuXHRcdHBhZGRpbmctcmlnaHQ6IDMwcHg7XG5cdFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuXHRcdGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuXHRcdGJvcmRlci1ib3R0b20tY29sb3I6ICNFNkU2RTY7XG5cdH1cblxuXG5cblx0LnR1aS1sYXN0LWNoaWxkIHtcblx0XHRib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuXHR9XG5cblx0LnR1aS10aXRsZS1ib3gge1xuXHRcdHdpZHRoOiA2OTBweDtcblx0XHRmbGV4OiAxO1xuXHRcdGxpbmVzOiAyO1xuXHR9XG5cblx0LnR1aS1jZWxsLXRpdGxlIHtcblx0XHRmb250LXNpemU6IDM2cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDU2cHg7XG5cdFx0ZmxleDogMTtcblx0XHRsaW5lczogMjtcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0XHRjb2xvcjogIzMzMzMzMztcblx0fVxuXG5cdC50dWktaW1nLWNvbnRhaW5lciB7XG5cdFx0d2lkdGg6IDY5MHB4O1xuXHRcdHBhZGRpbmctdG9wOiAyNHB4O1xuXHRcdGhlaWdodDogMTg0cHg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdH1cblxuXHQudHVpLWNlbGwtaW1nIHtcblx0XHR3aWR0aDogMjIwcHg7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdH1cblxuXHQudHVpLWltZyB7XG5cdFx0d2lkdGg6IDIyMHB4O1xuXHRcdGhlaWdodDogMTg0cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHR9XG5cblx0LnR1aS1zdWItdGl0bGUge1xuXHRcdHBhZGRpbmctdG9wOiAyNHB4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0fVxuXG5cdC50dWktc3ViLWNvbnRlbnQge1xuXHRcdGZvbnQtc2l6ZTogMjhweDtcblx0XHRjb2xvcjogI0JDQkNCQztcblx0fVxuXG5cdC50dWktYmFkZ2Uge1xuXHRcdHBhZGRpbmctdG9wOiA1cHg7XG5cdFx0cGFkZGluZy1ib3R0b206IDVweDtcblx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdFx0cGFkZGluZy1yaWdodDogMTBweDtcblx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdG1hcmdpbi1yaWdodDogMjBweDtcblx0fVxuXG5cdC50dWktcmVkIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkNFQkVGO1xuXHRcdGNvbG9yOiAjOEE1OTY2O1xuXHR9XG5cblx0LnR1aS1ibHVlIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGNkZEO1xuXHRcdGNvbG9yOiAjNERBQkVCO1xuXHR9XG5cblx0LnR1aS1vcmFuZ2Uge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRUY1RUI7XG5cdFx0Y29sb3I6ICNGQUE4NTFcblx0fVxuXG5cdC50dWktZ3JlZW4ge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNFOEY2RTg7XG5cdFx0Y29sb3I6ICM0NENGODVcblx0fVxuPC9zdHlsZT5cbiIsIjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICByZW5kZXIoY3JlYXRlRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3Qgdm5vZGVzID0gdGhpcy4kc2xvdHMuZGVmYXVsdDtcbiAgICAgICAgICAgIGlmICh2bm9kZXMgJiYgdm5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgXHRmb3IgKGxldCBpID0gMDsgaSA8IHZub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdm5vZGUgPSB2bm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghdm5vZGUuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBcdHZub2RlLmRhdGEgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2bm9kZS5kYXRhLm9uKSB7XG4gICAgICAgICAgICAgICAgICAgIFx0dm5vZGUuZGF0YS5vbiA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2bm9kZS5kYXRhLm9uLmNsaWNrID0gdGhpcy5fY2hhbmdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Ly/lpoLmnpzpnIDopoHlt6blj7Pmu5HliqjnlKhzY3JvbGxlcu+8jOS4jemcgOimgeeahOivneeUqGRpduWwseihjCzmt7vliqDkuKrlsZ7mgKfpnIDopoHml7blsIZzY3JvbGxlcua3u+WKoCBjaGlsZHJlblxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDonMTAwcHgnLFxuXHRcdFx0XHRcdHdpZHRoOic3NTBweCcsXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246J3JvdycsXG5cdFx0XHRcdFx0Ym9yZGVyQm90dG9tV2lkdGg6IFwiMXB4XCIsXG5cdFx0XHRcdFx0Ym9yZGVyQ29sb3I6IFwiI0YwRjBGMFwiLFxuXHRcdFx0XHRcdGJvcmRlckJvdHRvbVN0eWxlOiBcInNvbGlkXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBbXG5cdFx0XHRcdGNyZWF0ZUVsZW1lbnQoJ3Njcm9sbGVyJywge1xuXHRcdFx0XHRcdGF0dHJzOiB7XG5cdFx0XHRcdFx0XHRzY3JvbGxEaXJlY3Rpb246J2hvcml6b250YWwnLFxuXHRcdFx0XHRcdFx0c2hvd1Njcm9sbGJhcjonZmFsc2UnXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0aGVpZ2h0OicxMDBweCcsXG5cdFx0XHRcdFx0XHR3aWR0aDonNzUwcHgnLFxuXHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjoncm93J1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgdGhpcy4kc2xvdHMuZGVmYXVsdClcblx0XHRcdF0pXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6e1xuICAgICAgICAgICAgX2NoYW5nZShlKXtcbiAgICAgICAgICAgIFx0bGV0IHJldCA9IHtcbiAgICAgICAgICAgIFx0XHRpbmRleDplLmluZGV4XG4gICAgICAgICAgICBcdH1cbiAgICAgICAgICAgIFx0aWYoZS50eXBlID09PSAnY2xpY2snKXtcbiAgICAgICAgICAgIFx0XHRsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBcdFx0cmV0LmluZGV4ID0gdGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW4uZmluZEluZGV4KG5vZGU9Pm5vZGU9PT10YXJnZXQpXG4gICAgICAgICAgICBcdH1cbiAgICAgICAgICAgIFx0dGhpcy4kZW1pdCgnX3RhYkJhckNsaWNrJywgcmV0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG4iLCI8c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdzbGlkZXInLCB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6MCxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcy4kc2xvdHMuZGVmYXVsdClcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwiPHNjcmlwdD5cblx0aW1wb3J0IHRhYkNvbnRlbnQgZnJvbSAnLi90YWJDb250ZW50Lm52dWUnXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRwcm9wczoge1xuXHRcdFx0aW5kZXg6IHtcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxuXHRcdFx0XHRkZWZhdWx0OiAwXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dGFiSW5kZXg6IHRoaXMuaW5kZXhcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbXBvbmVudHM6IHtcblx0XHRcdHRhYkNvbnRlbnQsXG5cdFx0fSxcblx0XHRyZW5kZXIoY3JlYXRlRWxlbWVudCkge1xuXHRcdFx0Y29uc3Qgdm5vZGVzID0gdGhpcy4kc2xvdHMuZGVmYXVsdDtcblx0XHRcdGNvbnN0IG5ld1ZOb2RlcyA9IFtdXG5cdFx0XHRpZiAodm5vZGVzICYmIHZub2Rlcy5sZW5ndGgpIHtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB2bm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRsZXQgdm5vZGUgPSB2bm9kZXNbaV1cblx0XHRcdFx0XHRpZiAoIXZub2RlIHx8ICF2bm9kZS5jb21wb25lbnRPcHRpb25zKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodm5vZGUuY29tcG9uZW50T3B0aW9ucy50YWcgPT09ICd0YWItY29udGVudCcpIHtcblxuXHRcdFx0XHRcdFx0Y29uc3QgbmV3Vk5vZGUgPSBjcmVhdGVFbGVtZW50KCd0YWItY29udGVudCcsIHtcblx0XHRcdFx0XHRcdFx0c3RhdGljQ2xhc3M6IHZub2RlLmRhdGEuc3RhdGljQ2xhc3MsXG5cdFx0XHRcdFx0XHRcdCdjbGFzcyc6IHZub2RlLmRhdGFbJ2NsYXNzJ10sXG5cdFx0XHRcdFx0XHRcdHN0eWxlOiB2bm9kZS5kYXRhLnN0eWxlXG5cdFx0XHRcdFx0XHR9LCB2bm9kZS5jb21wb25lbnRPcHRpb25zLmNoaWxkcmVuKVxuXG5cdFx0XHRcdFx0XHRpZiAoIW5ld1ZOb2RlLmRhdGEpIHtcblx0XHRcdFx0XHRcdFx0bmV3Vk5vZGUuZGF0YSA9IE9iamVjdC5jcmVhdGUobnVsbClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghbmV3Vk5vZGUuZGF0YS5hdHRycykge1xuXHRcdFx0XHRcdFx0XHRuZXdWTm9kZS5kYXRhLmF0dHJzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCFuZXdWTm9kZS5kYXRhLnByb3BzKSB7XG5cdFx0XHRcdFx0XHRcdG5ld1ZOb2RlLmRhdGEucHJvcHMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIW5ld1ZOb2RlLmRhdGEub24pIHtcblx0XHRcdFx0XHRcdFx0bmV3Vk5vZGUuZGF0YS5vbiA9IE9iamVjdC5jcmVhdGUobnVsbClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG5ld1ZOb2RlLmRhdGEuYXR0cnMuaW5kZXggPSB0aGlzLmluZGV4XG5cdFx0XHRcdFx0XHRuZXdWTm9kZS5kYXRhLm9uLmNoYW5nZSA9IHRoaXMuX2NoYW5nZVxuXHRcdFx0XHRcdFx0bmV3Vk5vZGVzLnB1c2gobmV3Vk5vZGUpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh2bm9kZS5jb21wb25lbnRPcHRpb25zLnRhZyA9PT0gJ3RhYi1iYXInKSB7XG5cdFx0XHRcdFx0XHRpZiAoIXZub2RlLmNvbXBvbmVudE9wdGlvbnMubGlzdGVuZXJzKSB7IC8v55uR5ZCs5a2Q5YWD57Sg5Lyg6YCS6L+H5p2l55qE5LqL5Lu2XG5cdFx0XHRcdFx0XHRcdHZub2RlLmNvbXBvbmVudE9wdGlvbnMubGlzdGVuZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dm5vZGUuY29tcG9uZW50T3B0aW9ucy5saXN0ZW5lcnMuX3RhYkJhckNsaWNrID0gdGhpcy5fdGFiQmFyQ2xpY2s7XG5cdFx0XHRcdFx0XHRuZXdWTm9kZXMucHVzaCh2bm9kZSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHZhciBuZXdOb2RlID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuXHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdGZsZXg6IDEsXG5cdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uOiB7XG5cdFx0XHRcdFx0Y2hhbmdlMjogdGhpcy5fY2hhbmdlMlxuXHRcdFx0XHR9XG5cdFx0XHR9LCBuZXdWTm9kZXMpO1xuXHRcdFx0cmV0dXJuIG5ld05vZGU7XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRfdGFiQmFyQ2xpY2soZSkge1xuXHRcdFx0XHR0aGlzLnRhYkluZGV4ID0gZS5pbmRleDtcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywgZSk7XG5cdFx0XHR9LFxuXHRcdFx0X2NoYW5nZShlKSB7XG5cdFx0XHRcdGlmICh0aGlzLnRhYkluZGV4ID09PSBlLmluZGV4KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMudGFiSW5kZXggPSBlLmluZGV4O1xuXHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdFx0aW5kZXg6IGUuaW5kZXgsXG5cdFx0XHRcdFx0Y2hhbmdlOnRydWVcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJ0dWktc2xpZGVyLWJveCB0dWktd2hpdGVcIj5cblx0XHRcdDxzbGlkZXIgY2xhc3M9XCJ0dWktc2xpZGVyXCIgaW50ZXJ2YWw9XCI1MDAwXCIgYXV0by1wbGF5PVwidHJ1ZVwiIHNob3ctaW5kaWNhdG9ycz1cInRydWVcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInR1aS1mcmFtZVwiIEBjbGljaz1cImdvRGV0YWlsXCI+XG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwidHVpLXNsaWRlci1pbWdcIiA6Y2xhc3M9XCJbaXNJb3M/Jyc6J3R1aS1pbWctcmFkaXVzJ11cIiByZXNpemU9XCJjb3ZlclwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbWFsbC9iYW5uZXIvMi5qcGdcIj48L2ltYWdlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInR1aS1mcmFtZVwiIEBjbGljaz1cImdvRGV0YWlsXCI+XG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwidHVpLXNsaWRlci1pbWdcIiA6Y2xhc3M9XCJbaXNJb3M/Jyc6J3R1aS1pbWctcmFkaXVzJ11cIiByZXNpemU9XCJjb3ZlclwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbWFsbC9iYW5uZXIvNC5qcGdcIj48L2ltYWdlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInR1aS1mcmFtZVwiIEBjbGljaz1cImdvRGV0YWlsXCI+XG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwidHVpLXNsaWRlci1pbWdcIiA6Y2xhc3M9XCJbaXNJb3M/Jyc6J3R1aS1pbWctcmFkaXVzJ11cIiByZXNpemU9XCJjb3ZlclwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbWFsbC9iYW5uZXIvNS5qcGdcIj48L2ltYWdlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGluZGljYXRvciBjbGFzcz1cInR1aS1pbmRpY2F0b3JcIj48L2luZGljYXRvcj5cblx0XHRcdDwvc2xpZGVyPlxuXHRcdDwvZGl2PlxuXHRcdDx0YWJzIEBjaGFuZ2U9XCJjaGFuZ2VUYWJcIiA6aW5kZXg9XCJ0YWJJbmRleFwiPlxuXHRcdFx0PHRhYi1iYXIgY2xhc3M9XCJ0dWktd2hpdGVcIj5cblx0XHRcdFx0PGRpdiB2LWZvcj1cIih0YWJCYXIsaW5kZXgpIGluIHRhYkJhcnNcIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cInRhYi1iYXItaXRlbVwiIDpyZWY9XCJ0YWJCYXIuaWQgKyBpbmRleFwiPlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGFiLWJhci10aXRsZVwiIDpjbGFzcz1cIlt0YWJJbmRleD09aW5kZXggPyAndHVpLWFjdGl2ZScgOiAnJ11cIj57e3RhYkJhci5uYW1lfX08L3RleHQ+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC90YWItYmFyPlxuXHRcdFx0PHRhYi1jb250ZW50PlxuXHRcdFx0XHQ8bGlzdCBjbGFzcz1cInR1aS1saXN0XCIgQGxvYWRtb3JlPVwibG9hZE1vcmUoaW5kZXgxKVwiIDpyZWY9XCIndGFiJytpbmRleDFcIiBsb2FkbW9yZW9mZnNldD1cIjEwXCIgdi1mb3I9XCIodGFiLGluZGV4MSkgaW4gbmV3c2l0ZW1zXCJcblx0XHRcdFx0IDprZXk9XCJpbmRleDFcIj5cblx0XHRcdFx0XHQ8cmVmcmVzaCBjbGFzcz1cInR1aS1yZWZyZXNoXCIgQHJlZnJlc2g9XCJvbnJlZnJlc2hcIiBAcHVsbGluZ2Rvd249XCJvbnB1bGxpbmdkb3duXCIgOmRpc3BsYXk9XCJyZWZyZXNoaW5nID8gJ3Nob3cnIDogJ2hpZGUnXCI+XG5cdFx0XHRcdFx0XHQ8bG9hZGluZy1pbmRpY2F0b3IgY2xhc3M9XCJ0dWktbG9hZGluZ1wiPjwvbG9hZGluZy1pbmRpY2F0b3I+XG5cdFx0XHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJbaW9zUmVmcmVzaD8naW9zLWFycm93JzonJ11cIiB2LWlmPVwiaXNJb3NcIj57e2Fycm93fX08L3RleHQ+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInJlZnJlc2gtdGV4dFwiPnt7cmVmcmVzaFRleHR9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3JlZnJlc2g+XG5cdFx0XHRcdFx0PGNlbGwgdi1mb3I9XCIobmV3c2l0ZW0saW5kZXgyKSBpbiB0YWIuZGF0YVwiIDprZXk9XCJpbmRleDJcIj5cblx0XHRcdFx0XHRcdDxtZWRpYS1saXN0IDpkYXRhPVwibmV3c2l0ZW1cIiBAY2xvc2U9XCJjbG9zZShpbmRleDEsaW5kZXgyKVwiIDpsYXN0Q2hpbGQ9XCJpbmRleDI9PT10YWIuZGF0YS5sZW5ndGgtMVwiIEBjbGljaz1cImdvRGV0YWlsKG5ld3NpdGVtKVwiPjwvbWVkaWEtbGlzdD5cblx0XHRcdFx0XHQ8L2NlbGw+XG5cdFx0XHRcdFx0PGNlbGwgY2xhc3M9XCJ0dWktbG9hZG1vcmVcIj5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibG9hZG1vcmUtbGluZVwiIHYtaWY9XCIhdGFiLmNhblB1bGxVcFwiPjwvdGV4dD5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibG9hZG1vcmUtdGV4dFwiIDpjbGFzcz1cIltpc0lvcz8ndHVpLWdyYXknOid0dWktd2hpdGUnXVwiPnt7dGFiLmxvYWRpbmdUZXh0fX08L3RleHQ+XG5cdFx0XHRcdFx0PC9jZWxsPlxuXHRcdFx0XHQ8L2xpc3Q+XG5cdFx0XHQ8L3RhYi1jb250ZW50PlxuXHRcdDwvdGFicz5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgdGFiQ29udGVudCBmcm9tICdAL2NvbXBvbmVudHMvdGFiTnZ1ZS90YWJDb250ZW50Lm52dWUnXG5cdGltcG9ydCB0YWJCYXIgZnJvbSAnQC9jb21wb25lbnRzL3RhYk52dWUvdGFiQmFyLm52dWUnXG5cdGltcG9ydCB0YWJzIGZyb20gJ0AvY29tcG9uZW50cy90YWJOdnVlL3RhYnMubnZ1ZSdcblx0aW1wb3J0IG1lZGlhTGlzdCBmcm9tICdAL2NvbXBvbmVudHMvdGFiTnZ1ZS9tZWRpYUxpc3QubnZ1ZSdcblx0Y29uc3QgZG9tID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKVxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0dGFiQ29udGVudCxcblx0XHRcdHRhYkJhcixcblx0XHRcdHRhYnMsXG5cdFx0XHRtZWRpYUxpc3Rcblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpc0lvczogZmFsc2UsXG5cdFx0XHRcdGFycm93OiBcIlwiLFxuXHRcdFx0XHRpb3NSZWZyZXNoOiBmYWxzZSxcblx0XHRcdFx0cmVmcmVzaGluZzogZmFsc2UsXG5cdFx0XHRcdHJlZnJlc2hUZXh0OiBcIuS4i+aLieWPr+S7peWIt+aWsFwiLFxuXHRcdFx0XHR0YWJJbmRleDogMCxcblx0XHRcdFx0bmV3c2l0ZW1zOiBbXSxcblx0XHRcdFx0bmV3c0RhdGE6IFt7XG5cdFx0XHRcdFx0dGl0bGU6IFwi5rip5pWF55+l5b+D5Lmg6L+R5bmz6L+Z5Lqb6K+d6KaB54mi6K6wXCIsXG5cdFx0XHRcdFx0aW1nQXJyOiBbXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3Byb2R1Y3QvMi5qcGdcIiwgXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3Byb2R1Y3QvMy5qcGdcIixcblx0XHRcdFx0XHRcdFwiLi4vLi4vc3RhdGljL2ltYWdlcy9wcm9kdWN0LzQuanBnXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdGJhZGdlVHlwZTogMSxcblx0XHRcdFx0XHRiYWRnZVRleHQ6IFwi6KaB6Ze7XCIsXG5cdFx0XHRcdFx0c3ViQ29udGVudDogXCLlpK7op4bnvZHmlrDpl7tcIlxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0dGl0bGU6IFwi576O5Zu95Lya6KGo5Yaz6YCa6L+H5paw6am75Y2O5aSn5L2/IOaciOW6leacieacm+i1tOWNjlwiLFxuXHRcdFx0XHRcdGltZ0FycjogW10sXG5cdFx0XHRcdFx0YmFkZ2VUeXBlOiAyLFxuXHRcdFx0XHRcdGJhZGdlVGV4dDogXCLopoHpl7tcIixcblx0XHRcdFx0XHRzdWJDb250ZW50OiBcIuWkruinhue9keaWsOmXu1wiXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHR0aXRsZTogXCLlk6rkupvkuJPkuJrmr5XkuJrlkI7mlLblhaXpq5g/6K6h566X5py644CB6YeR6J6N5LiT5Lia5o6S5YmN5YiX6YeR6J6N5LiT5Lia5o6S5YmN5YiX6YeR6J6N5LiT5Lia5o6S5YmN5YiX6YeR6J6N5LiT5Lia5o6S5YmN5YiX6YeR6J6N5LiT5Lia5o6S5YmN5YiXXCIsXG5cdFx0XHRcdFx0aW1nQXJyOiBbXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3Byb2R1Y3QvMi5qcGdcIiwgXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3Byb2R1Y3QvMy5qcGdcIixcblx0XHRcdFx0XHRcdFwiLi4vLi4vc3RhdGljL2ltYWdlcy9wcm9kdWN0LzQuanBnXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdGJhZGdlVHlwZTogMyxcblx0XHRcdFx0XHRiYWRnZVRleHQ6IFwi5pys5Zyw6LWE6K6vXCIsXG5cdFx0XHRcdFx0c3ViQ29udGVudDogXCLnsqTmuK/nsr7oi7HogZTnm59cIlxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0dGl0bGU6IFwi56eR5Yib5p2/5Lqk5piT57O757uf5YeG5aSH5bCx57uqLOS4jeWtmOWcqOmmluaJueWQjeWNlVwiLFxuXHRcdFx0XHRcdGltZ0FycjogW10sXG5cdFx0XHRcdFx0YmFkZ2VUeXBlOiA0LFxuXHRcdFx0XHRcdGJhZGdlVGV4dDogXCLmnIvlj4vpg73nnIvov4dcIixcblx0XHRcdFx0XHRzdWJDb250ZW50OiBcIueZvuenkeaVheS6i+Wkp+WFqFwiXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHR0aXRsZTogXCLlk6rkupvkuJPkuJrmr5XkuJrlkI7mlLblhaXpq5g/6K6h566X5py644CB6YeR6J6N5LiT5Lia5o6S5YmN5YiX6YeR6J6N5LiT5Lia5o6S5YmN5YiX6YeR6J6N5LiT5Lia5o6S5YmN5YiX6YeR6J6N5LiT5Lia5o6S5YmN5YiX6YeR6J6N5LiT5Lia5o6S5YmN5YiXXCIsXG5cdFx0XHRcdFx0aW1nQXJyOiBbXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3Byb2R1Y3QvMi5qcGdcIiwgXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3Byb2R1Y3QvMy5qcGdcIixcblx0XHRcdFx0XHRcdFwiLi4vLi4vc3RhdGljL2ltYWdlcy9wcm9kdWN0LzQuanBnXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdGJhZGdlVHlwZTogMSxcblx0XHRcdFx0XHRiYWRnZVRleHQ6IFwi5pys5Zyw6LWE6K6vXCIsXG5cdFx0XHRcdFx0c3ViQ29udGVudDogXCLnsqTmuK/nsr7oi7HogZTnm59cIlxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0dGl0bGU6IFwi5rip5pWF55+l5b+D5Lmg6L+R5bmz6L+Z5Lqb6K+d6KaB54mi6K6wXCIsXG5cdFx0XHRcdFx0aW1nQXJyOiBbXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3Byb2R1Y3QvMi5qcGdcIiwgXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3Byb2R1Y3QvMy5qcGdcIixcblx0XHRcdFx0XHRcdFwiLi4vLi4vc3RhdGljL2ltYWdlcy9wcm9kdWN0LzQuanBnXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdGJhZGdlVHlwZTogMSxcblx0XHRcdFx0XHRiYWRnZVRleHQ6IFwi6KaB6Ze7XCIsXG5cdFx0XHRcdFx0c3ViQ29udGVudDogXCLlpK7op4bnvZHmlrDpl7tcIlxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0dGl0bGU6IFwi5rip5pWF55+l5b+D5Lmg6L+R5bmz6L+Z5Lqb6K+d6KaB54mi6K6wXCIsXG5cdFx0XHRcdFx0aW1nQXJyOiBbXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3Byb2R1Y3QvMi5qcGdcIiwgXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3Byb2R1Y3QvMy5qcGdcIixcblx0XHRcdFx0XHRcdFwiLi4vLi4vc3RhdGljL2ltYWdlcy9wcm9kdWN0LzQuanBnXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdGJhZGdlVHlwZTogMSxcblx0XHRcdFx0XHRiYWRnZVRleHQ6IFwi6KaB6Ze7XCIsXG5cdFx0XHRcdFx0c3ViQ29udGVudDogXCLlpK7op4bnvZHmlrDpl7tcIlxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0dGl0bGU6IFwi576O5Zu95Lya6KGo5Yaz6YCa6L+H5paw6am75Y2O5aSn5L2/IOaciOW6leacieacm+i1tOWNjlwiLFxuXHRcdFx0XHRcdGltZ0FycjogW10sXG5cdFx0XHRcdFx0YmFkZ2VUeXBlOiAyLFxuXHRcdFx0XHRcdGJhZGdlVGV4dDogXCLopoHpl7tcIixcblx0XHRcdFx0XHRzdWJDb250ZW50OiBcIuWkruinhue9keaWsOmXu1wiXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHR0aXRsZTogXCLlk6rkupvkuJPkuJrmr5XkuJrlkI7mlLblhaXpq5g/6K6h566X5py644CB6YeR6J6N5LiT5Lia5o6S5YmN5YiX6YeR6J6N5LiT5Lia5o6S5YmN5YiX6YeR6J6N5LiT5Lia5o6S5YmN5YiX6YeR6J6N5LiT5Lia5o6S5YmN5YiX6YeR6J6N5LiT5Lia5o6S5YmN5YiXXCIsXG5cdFx0XHRcdFx0aW1nQXJyOiBbXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3Byb2R1Y3QvMi5qcGdcIiwgXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3Byb2R1Y3QvMy5qcGdcIixcblx0XHRcdFx0XHRcdFwiLi4vLi4vc3RhdGljL2ltYWdlcy9wcm9kdWN0LzQuanBnXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdGJhZGdlVHlwZTogMyxcblx0XHRcdFx0XHRiYWRnZVRleHQ6IFwi5pys5Zyw6LWE6K6vXCIsXG5cdFx0XHRcdFx0c3ViQ29udGVudDogXCLnsqTmuK/nsr7oi7HogZTnm59cIlxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0dGl0bGU6IFwi56eR5Yib5p2/5Lqk5piT57O757uf5YeG5aSH5bCx57uqLOS4jeWtmOWcqOmmluaJueWQjeWNlVwiLFxuXHRcdFx0XHRcdGltZ0FycjogW10sXG5cdFx0XHRcdFx0YmFkZ2VUeXBlOiA0LFxuXHRcdFx0XHRcdGJhZGdlVGV4dDogXCLmnIvlj4vpg73nnIvov4dcIixcblx0XHRcdFx0XHRzdWJDb250ZW50OiBcIueZvuenkeaVheS6i+Wkp+WFqFwiXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHR0aXRsZTogXCLlk6rkupvkuJPkuJrmr5XkuJrlkI7mlLblhaXpq5g/6K6h566X5py644CB6YeR6J6N5LiT5Lia5o6S5YmN5YiX6YeR6J6N5LiT5Lia5o6S5YmN5YiX6YeR6J6N5LiT5Lia5o6S5YmN5YiX6YeR6J6N5LiT5Lia5o6S5YmN5YiX6YeR6J6N5LiT5Lia5o6S5YmN5YiXXCIsXG5cdFx0XHRcdFx0aW1nQXJyOiBbXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3Byb2R1Y3QvMi5qcGdcIiwgXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3Byb2R1Y3QvMy5qcGdcIixcblx0XHRcdFx0XHRcdFwiLi4vLi4vc3RhdGljL2ltYWdlcy9wcm9kdWN0LzQuanBnXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdGJhZGdlVHlwZTogMSxcblx0XHRcdFx0XHRiYWRnZVRleHQ6IFwi5pys5Zyw6LWE6K6vXCIsXG5cdFx0XHRcdFx0c3ViQ29udGVudDogXCLnsqTmuK/nsr7oi7HogZTnm59cIlxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0dGl0bGU6IFwi5rip5pWF55+l5b+D5Lmg6L+R5bmz6L+Z5Lqb6K+d6KaB54mi6K6wXCIsXG5cdFx0XHRcdFx0aW1nQXJyOiBbXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3Byb2R1Y3QvMi5qcGdcIiwgXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3Byb2R1Y3QvMy5qcGdcIixcblx0XHRcdFx0XHRcdFwiLi4vLi4vc3RhdGljL2ltYWdlcy9wcm9kdWN0LzQuanBnXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdGJhZGdlVHlwZTogMSxcblx0XHRcdFx0XHRiYWRnZVRleHQ6IFwi6KaB6Ze7XCIsXG5cdFx0XHRcdFx0c3ViQ29udGVudDogXCLlpK7op4bnvZHmlrDpl7tcIlxuXHRcdFx0XHR9XSxcblx0XHRcdFx0dGFiQmFyczogW3tcblx0XHRcdFx0XHRuYW1lOiAn54Ot6ZeoJyxcblx0XHRcdFx0XHRpZDogJ2hvdCdcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICflqLHkuZAnLFxuXHRcdFx0XHRcdGlkOiAneXVsZSdcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICfkvZPogrInLFxuXHRcdFx0XHRcdGlkOiAnc3BvcnRzJ1xuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ+WbveWGhScsXG5cdFx0XHRcdFx0aWQ6ICdkb21lc3RpYydcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICfotKLnu48nLFxuXHRcdFx0XHRcdGlkOiAnZmluYW5jZSdcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICfnp5HmioAnLFxuXHRcdFx0XHRcdGlkOiAna2VqaSdcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICfmlZnogrInLFxuXHRcdFx0XHRcdGlkOiAnZWR1Y2F0aW9uJ1xuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ+axvei9picsXG5cdFx0XHRcdFx0aWQ6ICdjYXInXG5cdFx0XHRcdH1dXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjcmVhdGVkKCkge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMubmV3c2l0ZW1zID0gdGhpcy5yYW5kb21mbigpO1xuXHRcdFx0XHR1bmkuZ2V0U3lzdGVtSW5mbyh7XG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5pc0lvcyA9IFwiaW9zXCIgPT0gcmVzLnBsYXRmb3JtLnRvTG9jYWxlTG93ZXJDYXNlKClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9LCAxNTApXG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRwdWxscmVmcmVzaChlLCBpc3B1bGxEb3dtKSB7XG5cdFx0XHRcdGNvbnN0IGtleSA9IGUgPT0gMCA/IFwiXCIgOiB0aGlzLnRhYkJhcnNbZV0uaWQ7XG5cdFx0XHRcdGNvbnN0IHBhZ2VJbmRleCA9IGlzcHVsbERvd20gPyAxIDogdGhpcy5uZXdzaXRlbXNbZV0ucGFnZUluZGV4O1xuXHRcdFx0XHRpZiAoaXNwdWxsRG93bSkge1xuXHRcdFx0XHRcdHRoaXMubmV3c2l0ZW1zW2VdLmRhdGEgPSBbXTtcblx0XHRcdFx0XHR0aGlzLm5ld3NpdGVtc1tlXS5sb2FkaW5nVGV4dCA9IFwi5q2j5Zyo5Yqg6L29Li4uXCI7XG5cdFx0XHRcdFx0dGhpcy5uZXdzaXRlbXNbZV0ucGFnZUluZGV4ID0gMlxuXHRcdFx0XHRcdHRoaXMubmV3c2l0ZW1zW2VdLmRhdGEgPSB0aGlzLm5ld3NEYXRhIHx8IFtdO1xuXHRcdFx0XHRcdC8v6L+Z6YeM5a6e6ZmF5Yik5pat5bqU6K+l5piv5pWw5o2u5p2h5pWw5piv5LiN5piv5bCP5LqO5q+P6aG15p2h5pWw44CQ5oiW6ICF6IO95Yik5pat56ys5LiA6aG15bCx5Yqg6L295a6M5YWo6YOo5pWw5o2u44CRXG5cdFx0XHRcdFx0aWYgKHRoaXMubmV3c2l0ZW1zW2VdLnBhZ2VJbmRleCA+IDMpIHtcblx0XHRcdFx0XHRcdHRoaXMubmV3c2l0ZW1zW2VdLmxvYWRpbmdUZXh0ID0gXCLmsqHmnInmm7TlpJrkuoZcIjtcblx0XHRcdFx0XHRcdHRoaXMubmV3c2l0ZW1zW2VdLmNhblB1bGxVcCA9IGZhbHNlO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLm5ld3NpdGVtc1tlXS5jYW5QdWxsVXAgPSB0cnVlO1xuXHRcdFx0XHRcdFx0dGhpcy4kcmVmc1sndGFiJyArIGVdWzBdLnJlc2V0TG9hZG1vcmUoKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMucmVmcmVzaGluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdH0sIDApXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc3QgbGlzdCA9IHRoaXMubmV3c0RhdGEgfHwgW11cblx0XHRcdFx0XHR0aGlzLm5ld3NpdGVtc1tlXS5kYXRhID0gdGhpcy5uZXdzaXRlbXNbZV0uZGF0YS5jb25jYXQobGlzdClcblx0XHRcdFx0XHR0aGlzLm5ld3NpdGVtc1tlXS5wYWdlSW5kZXgrKztcblx0XHRcdFx0XHRpZiAodGhpcy5uZXdzaXRlbXNbZV0ucGFnZUluZGV4ID4gMykge1xuXHRcdFx0XHRcdFx0dGhpcy5uZXdzaXRlbXNbZV0ubG9hZGluZ1RleHQgPSAn5rKh5pyJ5pu05aSa5LqGJztcblx0XHRcdFx0XHRcdHRoaXMubmV3c2l0ZW1zW2VdLmNhblB1bGxVcCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGdvRGV0YWlsKGUpIHtcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdHVybDogJy4uL2V4dGVuZC12aWV3L25ld3NEZXRhaWwvbmV3c0RldGFpbCdcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRsb2FkTW9yZShlKSB7XG5cdFx0XHRcdGlmICghdGhpcy5uZXdzaXRlbXNbZV0uY2FuUHVsbFVwKSB7XG5cdFx0XHRcdFx0dGhpcy5uZXdzaXRlbXNbZV0ubG9hZGluZ1RleHQgPSAn5rKh5pyJ5pu05aSa5LqGJztcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0fVxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLnB1bGxyZWZyZXNoKGUpXG5cdFx0XHRcdH0sIDIwMCk7XG5cdFx0XHR9LFxuXHRcdFx0YXN5bmMgY2hhbmdlVGFiKGUpIHtcblx0XHRcdFx0dGhpcy50YWJJbmRleCA9IGUuaW5kZXg7XG5cdFx0XHRcdGlmICh0aGlzLm5ld3NpdGVtc1t0aGlzLnRhYkluZGV4XS5wYWdlSW5kZXggPT09IDEpIHtcblx0XHRcdFx0XHR0aGlzLnB1bGxyZWZyZXNoKHRoaXMudGFiSW5kZXgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGVsID0gdGhpcy4kcmVmc1t0aGlzLnRhYkJhcnNbZS5pbmRleF0uaWQgKyBlLmluZGV4XVswXVxuXHRcdFx0XHRsZXQgZWxTaXplID0gYXdhaXQgdGhpcy5nZXRFbFNpemUoZWwpO1xuXHRcdFx0XHRpZiAoZWxTaXplLmxlZnQgKyBlbFNpemUud2lkdGggPiA3NTApIHtcblx0XHRcdFx0XHRsZXQgaW5kZXggPSBlLmluZGV4IC0gNDtcblx0XHRcdFx0XHRsZXQgbmV3RWwgPSB0aGlzLiRyZWZzW3RoaXMudGFiQmFyc1tpbmRleF0uaWQgKyBpbmRleF1bMF1cblx0XHRcdFx0XHRkb20uc2Nyb2xsVG9FbGVtZW50KG5ld0VsLCB7fSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlbFNpemUubGVmdCA8IDApIHtcblx0XHRcdFx0XHRkb20uc2Nyb2xsVG9FbGVtZW50KGVsLCB7fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRnZXRFbFNpemUoZWwpIHsgLy/lvpfliLDlhYPntKDnmoRzaXplXG5cdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBkb20uZ2V0Q29tcG9uZW50UmVjdChlbCwgb3B0aW9uID0+IHtcblx0XHRcdFx0XHRcdHJlcyhvcHRpb24uc2l6ZSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRyYW5kb21mbigpIHtcblx0XHRcdFx0bGV0IGFyeSA9IFtdO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gdGhpcy50YWJCYXJzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0bGV0IGFyeUl0ZW0gPSB7XG5cdFx0XHRcdFx0XHRsb2FkaW5nVGV4dDogXCLmraPlnKjliqDovb0uLi5cIixcblx0XHRcdFx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0XHRcdFx0Y2FuUHVsbFVwOiB0cnVlLFxuXHRcdFx0XHRcdFx0cGFnZUluZGV4OiAxXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRpZiAoaSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0YXJ5SXRlbS5wYWdlSW5kZXggPSAyO1xuXHRcdFx0XHRcdFx0YXJ5SXRlbS5kYXRhID0gYXJ5SXRlbS5kYXRhLmNvbmNhdCh0aGlzLm5ld3NEYXRhKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YXJ5LnB1c2goYXJ5SXRlbSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGFyeTtcblx0XHRcdH0sXG5cdFx0XHRvbnJlZnJlc2goZXZlbnQpIHtcblx0XHRcdFx0dGhpcy5pb3NSZWZyZXNoID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuYXJyb3cgPSBcIlwiO1xuXHRcdFx0XHR0aGlzLnJlZnJlc2hUZXh0ID0gXCLmraPlnKjliLfmlrAuLi5cIjtcblx0XHRcdFx0dGhpcy5yZWZyZXNoaW5nID0gdHJ1ZTtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5wdWxscmVmcmVzaCh0aGlzLnRhYkluZGV4LCB0cnVlKVxuXHRcdFx0XHR9LCAyMDApO1xuXHRcdFx0fSxcblx0XHRcdG9ucHVsbGluZ2Rvd24oZXZlbnQpIHtcblx0XHRcdFx0aWYgKHRoaXMucmVmcmVzaGluZykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmlvc1JlZnJlc2ggPSB0aGlzLmlzSW9zXG5cdFx0XHRcdGlmIChNYXRoLmFicyhldmVudC5wdWxsaW5nRGlzdGFuY2UpID4gTWF0aC5hYnMoZXZlbnQudmlld0hlaWdodCkpIHtcblx0XHRcdFx0XHR0aGlzLmFycm93ID0gXCLihpFcIjtcblx0XHRcdFx0XHR0aGlzLnJlZnJlc2hUZXh0ID0gXCLph4rmlL7nq4vljbPliLfmlrBcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmFycm93ID0gXCLihpNcIjtcblx0XHRcdFx0XHR0aGlzLnJlZnJlc2hUZXh0ID0gXCLkuIvmi4nlj6/ku6XliLfmlrBcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0LnR1aS13aGl0ZSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xuXHR9XG5cblx0LnR1aS1ncmF5IHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuXHR9XG5cblx0LnR1aS1zbGlkZXItYm94IHtcblx0XHR3aWR0aDogNzUwcHg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0fVxuXG5cdC50dWktc2xpZGVyIHtcblx0XHR3aWR0aDogNjkwcHg7XG5cdFx0aGVpZ2h0OiAyMjBweDtcblx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdH1cblxuXHQudHVpLWltZy1yYWRpdXMge1xuXHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdH1cblxuXHQudHVpLWZyYW1lIHtcblx0XHR3aWR0aDogNjkwcHg7XG5cdFx0aGVpZ2h0OiAyMjBweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHR9XG5cblx0LnR1aS1zbGlkZXItaW1nIHtcblx0XHR3aWR0aDogNjkwcHg7XG5cdFx0aGVpZ2h0OiAyMjBweDtcblx0fVxuXG5cdC50dWktaW5kaWNhdG9yIHtcblx0XHR3aWR0aDogNjkwcHg7XG5cdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdGl0ZW0tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcblx0XHRpdGVtLXNlbGVjdGVkLWNvbG9yOiAjRkZGRkZGO1xuXHRcdGl0ZW0tc2l6ZTogMTRweDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiAyNHB4O1xuXHRcdGxlZnQ6IDA7XG5cdH1cblxuXHQudHVpLWxvYWRpbmcge1xuXHRcdG1hcmdpbi1yaWdodDogMTVweDtcblx0XHRoZWlnaHQ6IDYwcHg7XG5cdFx0d2lkdGg6IDYwcHg7XG5cdFx0Y29sb3I6ICM5OTk5OTk7XG5cdH1cblxuXHQudHVpLWxpc3Qge1xuXHRcdC8qIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcblx0XHRib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjRTZFNkU2OyAqL1xuXHR9XG5cblxuXHQudGFiLWJhci1pdGVtIHtcblx0XHRoZWlnaHQ6IDEwMHB4O1xuXHRcdHdpZHRoOiAxNTBweDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdH1cblxuXHQudGFiLWJhci10aXRsZSB7XG5cdFx0aGVpZ2h0OiAxMDBweDtcblx0XHRsaW5lLWhlaWdodDogMTAwcHg7XG5cdFx0Zm9udC1zaXplOiAzMnB4O1xuXHRcdGNvbG9yOiAjOTk5O1xuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdH1cblxuXHQudHVpLWFjdGl2ZSB7XG5cdFx0Y29sb3I6ICM1Njc3ZmM7XG5cdFx0Zm9udC1zaXplOiAzNnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdGJvcmRlci1ib3R0b20td2lkdGg6IDZweDtcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xuXHRcdGJvcmRlci1jb2xvcjogIzU2NzdmYztcblx0XHR3aWR0aDogODBweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHQudHVpLWxvYWRtb3JlIHtcblx0XHRoZWlnaHQ6IDEwMHB4O1xuXHRcdHdpZHRoOiA3NTBweDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cblx0LmxvYWRtb3JlLXRleHQge1xuXHRcdGZvbnQtc2l6ZTogMjZweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Y29sb3I6ICM5OTk5OTk7XG5cdFx0cGFkZGluZy1sZWZ0OiA2cHg7XG5cdFx0cGFkZGluZy1yaWdodDogNnB4O1xuXHR9XG5cblx0LmxvYWRtb3JlLWxpbmUge1xuXHRcdGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcblx0XHRib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjZTVlNWU1O1xuXHRcdHdpZHRoOiAzMjBweDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0ei1pbmRleDogLTE7XG5cdH1cblxuXHQudHVpLXJlZnJlc2gge1xuXHRcdHdpZHRoOiA3NTBweDtcblx0XHRoZWlnaHQ6IDgwcHg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR9XG5cblx0LnJlZnJlc2gtdGV4dCB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogMjZweDtcblx0XHRjb2xvcjogIzk5OTk5OTtcblx0fVxuXG5cdC5pb3MtYXJyb3cge1xuXHRcdGNvbG9yOiAjOTk5OTk5O1xuXHRcdGZvbnQtc2l6ZTogNDJweDtcblx0XHRmb250LXdlaWdodDogMzAwO1xuXHRcdHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cdFx0bWFyZ2luLWxlZnQ6IC03NXB4O1xuXHR9XG48L3N0eWxlPlxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzIHx8ICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiAmJiBzZWxmKTtcbn0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xuICB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1widHVpLWxpc3Qtdmlld1wiXSB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogW1widHVpLWxpc3QtY2VsbFwiXSxcbiAgICAgICAgY2xhc3M6IFtfdm0ubGFzdENoaWxkID8gXCJ0dWktbGFzdC1jaGlsZFwiIDogXCJcIl0sXG4gICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uYmluZENsaWNrIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcInR1aS10aXRsZS1ib3hcIl0gfSwgW1xuICAgICAgICAgIF9jKFwidGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ0dWktY2VsbC10aXRsZVwiXSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kYXRhLnRpdGxlKSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLmRhdGEuaW1nQXJyICYmIF92bS5kYXRhLmltZ0Fyci5sZW5ndGggPiAwXG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widHVpLWltZy1jb250YWluZXJcIl0gfSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5kYXRhLmltZ0FyciwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBzdGF0aWNDbGFzczogW1widHVpLWNlbGwtaW1nXCJdIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ0dWktaW1nXCJdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaXRlbSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcInR1aS1zdWItdGl0bGVcIl0gfSwgW1xuICAgICAgICAgIF92bS5kYXRhLmJhZGdlVHlwZSAhPSAwXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ0dWktYmFkZ2VcIl0sXG4gICAgICAgICAgICAgICAgICBjbGFzczogW192bS5nZXRDbGFzcyhfdm0uZGF0YS5iYWRnZVR5cGUpXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmRhdGEuYmFkZ2VUZXh0KSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX2MoXCJ0ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInR1aS1zdWItY29udGVudFwiXSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kYXRhLnN1YkNvbnRlbnQpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ0dWktc2xpZGVyLWJveFwiLCBcInR1aS13aGl0ZVwiXSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwic2xpZGVyXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInR1aS1zbGlkZXJcIl0sXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpbnRlcnZhbDogXCI1MDAwXCIsXG4gICAgICAgICAgICAgIGF1dG9QbGF5OiBcInRydWVcIixcbiAgICAgICAgICAgICAgc2hvd0luZGljYXRvcnM6IFwidHJ1ZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widHVpLWZyYW1lXCJdLCBvbjogeyBjbGljazogX3ZtLmdvRGV0YWlsIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInR1aS1zbGlkZXItaW1nXCJdLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IFtfdm0uaXNJb3MgPyBcIlwiIDogXCJ0dWktaW1nLXJhZGl1c1wiXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICBzcmM6IFwiLi4vLi4vc3RhdGljL2ltYWdlcy9tYWxsL2Jhbm5lci8yLmpwZ1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ0dWktZnJhbWVcIl0sIG9uOiB7IGNsaWNrOiBfdm0uZ29EZXRhaWwgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widHVpLXNsaWRlci1pbWdcIl0sXG4gICAgICAgICAgICAgICAgICBjbGFzczogW192bS5pc0lvcyA/IFwiXCIgOiBcInR1aS1pbWctcmFkaXVzXCJdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplOiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHNyYzogXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL21hbGwvYmFubmVyLzQuanBnXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInR1aS1mcmFtZVwiXSwgb246IHsgY2xpY2s6IF92bS5nb0RldGFpbCB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ0dWktc2xpZGVyLWltZ1wiXSxcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBbX3ZtLmlzSW9zID8gXCJcIiA6IFwidHVpLWltZy1yYWRpdXNcIl0sXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICByZXNpemU6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi4uLy4uL3N0YXRpYy9pbWFnZXMvbWFsbC9iYW5uZXIvNS5qcGdcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcImluZGljYXRvclwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ0dWktaW5kaWNhdG9yXCJdIH0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF9jKFxuICAgICAgICBcInRhYnNcIixcbiAgICAgICAgeyBhdHRyczogeyBpbmRleDogX3ZtLnRhYkluZGV4IH0sIG9uOiB7IGNoYW5nZTogX3ZtLmNoYW5nZVRhYiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidGFiLWJhclwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widHVpLXdoaXRlXCJdIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnRhYkJhcnMsIGZ1bmN0aW9uKHRhYkJhciwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgIHJlZjogdGFiQmFyLmlkICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ0YWItYmFyLWl0ZW1cIl1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ0YWItYmFyLXRpdGxlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbX3ZtLnRhYkluZGV4ID09IGluZGV4ID8gXCJ0dWktYWN0aXZlXCIgOiBcIlwiXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh0YWJCYXIubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidGFiLWNvbnRlbnRcIixcbiAgICAgICAgICAgIF92bS5fbChfdm0ubmV3c2l0ZW1zLCBmdW5jdGlvbih0YWIsIGluZGV4MSkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJsaXN0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBpbmRleDEsXG4gICAgICAgICAgICAgICAgICByZWY6IFwidGFiXCIgKyBpbmRleDEsXG4gICAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ0dWktbGlzdFwiXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxvYWRtb3Jlb2Zmc2V0OiBcIjEwXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRtb3JlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmxvYWRNb3JlKGluZGV4MSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicmVmcmVzaFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInR1aS1yZWZyZXNoXCJdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc3BsYXk6IF92bS5yZWZyZXNoaW5nID8gXCJzaG93XCIgOiBcImhpZGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoOiBfdm0ub25yZWZyZXNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHVsbGluZ2Rvd246IF92bS5vbnB1bGxpbmdkb3duXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsb2FkaW5nLWluZGljYXRvclwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ0dWktbG9hZGluZ1wiXSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNJb3NcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzczogW192bS5pb3NSZWZyZXNoID8gXCJpb3MtYXJyb3dcIiA6IFwiXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmFycm93KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInJlZnJlc2gtdGV4dFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5yZWZyZXNoVGV4dCkpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbCh0YWIuZGF0YSwgZnVuY3Rpb24obmV3c2l0ZW0sIGluZGV4Mikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJjZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRBc1RyZWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBhcHBlbmQ6IFwidHJlZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWVkaWEtbGlzdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbmV3c2l0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdENoaWxkOiBpbmRleDIgPT09IHRhYi5kYXRhLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNsb3NlKGluZGV4MSwgaW5kZXgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nb0RldGFpbChuZXdzaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiY2VsbFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInR1aS1sb2FkbW9yZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRBc1RyZWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYXBwZW5kOiBcInRyZWVcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAhdGFiLmNhblB1bGxVcFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wibG9hZG1vcmUtbGluZVwiXSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wibG9hZG1vcmUtdGV4dFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtfdm0uaXNJb3MgPyBcInR1aS1ncmF5XCIgOiBcInR1aS13aGl0ZVwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHRhYi5sb2FkaW5nVGV4dCkpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9