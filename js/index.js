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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/components/home-banner.hbs":
/*!********************************************!*\
  !*** ./src/app/components/home-banner.hbs ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/app/components/home-banner.hbs?");

/***/ }),

/***/ "./src/app/components/solution-data.json":
/*!***********************************************!*\
  !*** ./src/app/components/solution-data.json ***!
  \***********************************************/
/*! exports provided: solution, default */
/***/ (function(module) {

eval("module.exports = {\"solution\":[{\"default\":true,\"id\":\"market-landscape\",\"name\":\"Market Landscape\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.\"},{\"id\":\"competitve-intelligence\",\"name\":\"Competitve Intelligence\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.\"},{\"id\":\"automated-connections\",\"name\":\"Automated Connections\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.\"},{\"id\":\"open-innovation\",\"name\":\"Open Innovation\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.\"},{\"id\":\"trend-analysis\",\"name\":\"Trend Analysis\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.\"}]};\n\n//# sourceURL=webpack:///./src/app/components/solution-data.json?");

/***/ }),

/***/ "./src/app/components/solutions.hbs":
/*!******************************************!*\
  !*** ./src/app/components/solutions.hbs ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/app/components/solutions.hbs?");

/***/ }),

/***/ "./src/app/components/who-uses-us-data.json":
/*!**************************************************!*\
  !*** ./src/app/components/who-uses-us-data.json ***!
  \**************************************************/
/*! exports provided: client, default */
/***/ (function(module) {

eval("module.exports = {\"client\":[{\"id\":\"beiersdorf-logo\",\"img-src\":\"./assets/Beiersdorf_Logo.svg\"},{\"id\":\"estee-lauder-logo\",\"img-src\":\"./assets/Estee-Lauder-Logo.svg\"},{\"id\":\"honeywell-logo\",\"img-src\":\"./assets/Honeywell_logo.svg\"},{\"id\":\"syngenta-logo\",\"img-src\":\"./assets/Syngenta_Logo.svg\"},{\"id\":\"huawei-logo\",\"img-src\":\"./assets/Huawei.svg\"},{\"id\":\"wacker-chemie-logo\",\"img-src\":\"./assets/Wacker_Chemie.svg\"}]};\n\n//# sourceURL=webpack:///./src/app/components/who-uses-us-data.json?");

/***/ }),

/***/ "./src/app/components/who-uses-us.hbs":
/*!********************************************!*\
  !*** ./src/app/components/who-uses-us.hbs ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/app/components/who-uses-us.hbs?");

/***/ }),

/***/ "./src/app/layouts/default.hbs":
/*!*************************************!*\
  !*** ./src/app/layouts/default.hbs ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/app/layouts/default.hbs?");

/***/ }),

/***/ "./src/app/pages/contact-us.hbs":
/*!**************************************!*\
  !*** ./src/app/pages/contact-us.hbs ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/app/pages/contact-us.hbs?");

/***/ }),

/***/ "./src/app/pages/index.hbs":
/*!*********************************!*\
  !*** ./src/app/pages/index.hbs ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/app/pages/index.hbs?");

/***/ }),

/***/ "./src/app/pages/request-demo.hbs":
/*!****************************************!*\
  !*** ./src/app/pages/request-demo.hbs ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/app/pages/request-demo.hbs?");

/***/ }),

/***/ "./src/app/partials/button.hbs":
/*!*************************************!*\
  !*** ./src/app/partials/button.hbs ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/app/partials/button.hbs?");

/***/ }),

/***/ "./src/app/partials/demo-ribbon.hbs":
/*!******************************************!*\
  !*** ./src/app/partials/demo-ribbon.hbs ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/app/partials/demo-ribbon.hbs?");

/***/ }),

/***/ "./src/app/partials/footer.hbs":
/*!*************************************!*\
  !*** ./src/app/partials/footer.hbs ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/app/partials/footer.hbs?");

/***/ }),

/***/ "./src/app/partials/global-data.json":
/*!*******************************************!*\
  !*** ./src/app/partials/global-data.json ***!
  \*******************************************/
/*! exports provided: author, keywords, default */
/***/ (function(module) {

eval("module.exports = {\"author\":\"Resolute Innovation\",\"keywords\":[\"enterprise search\",\"scientific data\",\"deep learning\",\"technology transfer\"]};\n\n//# sourceURL=webpack:///./src/app/partials/global-data.json?");

/***/ }),

/***/ "./src/app/partials/graphic-text.hbs":
/*!*******************************************!*\
  !*** ./src/app/partials/graphic-text.hbs ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/app/partials/graphic-text.hbs?");

/***/ }),

/***/ "./src/app/partials/logo.hbs":
/*!***********************************!*\
  !*** ./src/app/partials/logo.hbs ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/app/partials/logo.hbs?");

/***/ }),

/***/ "./src/app/partials/nav-bar.hbs":
/*!**************************************!*\
  !*** ./src/app/partials/nav-bar.hbs ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/app/partials/nav-bar.hbs?");

/***/ }),

/***/ "./src/app/scripts/navBarBG.js":
/*!*************************************!*\
  !*** ./src/app/scripts/navBarBG.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addScrollListener; });\nlet navBar = document.getElementById(\"navbar-header\");\n\nfunction setNavBarBgColor() {\n  const navBarHasBackground = navBar.classList.contains(\"has-bg\");\n  const scrollPosition = Math.max(document.documentElement.scrollTop, document.body.scrollTop);\n\n  if (scrollPosition < 20 && navBarHasBackground) {\n    navBar.classList.remove(\"has-bg\");\n  } else if (scrollPosition > 25 && !navBarHasBackground) {\n    navBar.classList.add(\"has-bg\");\n  }\n}\n\nfunction addScrollListener() {\n  navBar = document.getElementById(\"navbar-header\");\n\n  if (navBar.classList.contains(\"clear\")) {\n    document.body.onscroll = setNavBarBgColor;\n    setNavBarBgColor();\n  }\n}\n\n//# sourceURL=webpack:///./src/app/scripts/navBarBG.js?");

/***/ }),

/***/ "./src/app/scripts/selectArticle.js":
/*!******************************************!*\
  !*** ./src/app/scripts/selectArticle.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return selectArticle; });\nfunction selectArticle(id) {\n  if (typeof id !== \"string\") {\n    return;\n  }\n\n  const articles = document.querySelectorAll(\".article\");\n  let selectedArticleIndex;\n  let activeArticleIndex;\n\n  for (let i = 0; i < articles.length; i++) {\n    const article = articles[i];\n\n    if (article.id === id) {\n      selectedArticleIndex = i;\n    }\n\n    if (article.classList.contains(\"active\")) {\n      activeArticleIndex = i;\n    }\n  }\n\n  if (activeArticleIndex === selectArticle) {\n    return;\n  }\n\n  const activeArticle = articles[activeArticleIndex];\n  const selectedArticle = articles[selectedArticleIndex];\n\n  const activateSelected = () => {\n    selectedArticle.classList.add(\"active\");\n\n    if (!activeArticle) {\n      return;\n    }\n\n    activeArticle.removeEventListener(\"transitionend\", deactivate);\n  };\n\n  if (!activeArticle) {\n    return activateSelected();\n  }\n\n  const deactivate = () => {\n    activeArticle.classList.remove(\"visible\");\n    selectedArticle.classList.add(\"visible\");\n    window.setTimeout(activateSelected, 0);\n  };\n\n  activeArticle.addEventListener(\"transitionend\", deactivate);\n  activeArticle.classList.remove(\"active\");\n}\n\n//# sourceURL=webpack:///./src/app/scripts/selectArticle.js?");

/***/ }),

/***/ "./src/app/scripts/toggleBurger.js":
/*!*****************************************!*\
  !*** ./src/app/scripts/toggleBurger.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toggleBurger; });\nfunction toggleBurger() {\n  const navBar = document.getElementById(\"navbar\"); // const burger = document.getElementById(\"navbar-burger\");\n  // const links = document.getElementById(\"navbar-links\");\n\n  if (navBar.classList.contains(\"active\")) {\n    navBar.classList.remove(\"active\"); // burger.classList.remove(\"active\");\n    // links.classList.remove(\"active\");\n\n    return;\n  }\n\n  navBar.classList.add(\"active\"); // burger.classList.add(\"active\");\n  // links.classList.add(\"active\");\n}\n\n//# sourceURL=webpack:///./src/app/scripts/toggleBurger.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_partials_global_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/partials/global-data.json */ \"./src/app/partials/global-data.json\");\nvar _app_partials_global_data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./app/partials/global-data.json */ \"./src/app/partials/global-data.json\", 1);\n/* harmony import */ var _app_layouts_default_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/layouts/default.hbs */ \"./src/app/layouts/default.hbs\");\n/* harmony import */ var _app_layouts_default_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_layouts_default_hbs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_partials_demo_ribbon_hbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/partials/demo-ribbon.hbs */ \"./src/app/partials/demo-ribbon.hbs\");\n/* harmony import */ var _app_partials_demo_ribbon_hbs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_partials_demo_ribbon_hbs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_partials_graphic_text_hbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/partials/graphic-text.hbs */ \"./src/app/partials/graphic-text.hbs\");\n/* harmony import */ var _app_partials_graphic_text_hbs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_partials_graphic_text_hbs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_partials_nav_bar_hbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/partials/nav-bar.hbs */ \"./src/app/partials/nav-bar.hbs\");\n/* harmony import */ var _app_partials_nav_bar_hbs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_partials_nav_bar_hbs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_partials_footer_hbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/partials/footer.hbs */ \"./src/app/partials/footer.hbs\");\n/* harmony import */ var _app_partials_footer_hbs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_partials_footer_hbs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _app_partials_button_hbs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/partials/button.hbs */ \"./src/app/partials/button.hbs\");\n/* harmony import */ var _app_partials_button_hbs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_app_partials_button_hbs__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _app_partials_logo_hbs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/partials/logo.hbs */ \"./src/app/partials/logo.hbs\");\n/* harmony import */ var _app_partials_logo_hbs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_app_partials_logo_hbs__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _app_components_home_banner_hbs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/components/home-banner.hbs */ \"./src/app/components/home-banner.hbs\");\n/* harmony import */ var _app_components_home_banner_hbs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_app_components_home_banner_hbs__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _app_components_solution_data_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app/components/solution-data.json */ \"./src/app/components/solution-data.json\");\nvar _app_components_solution_data_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./app/components/solution-data.json */ \"./src/app/components/solution-data.json\", 1);\n/* harmony import */ var _app_components_solutions_hbs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app/components/solutions.hbs */ \"./src/app/components/solutions.hbs\");\n/* harmony import */ var _app_components_solutions_hbs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_app_components_solutions_hbs__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _app_components_who_uses_us_data_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app/components/who-uses-us-data.json */ \"./src/app/components/who-uses-us-data.json\");\nvar _app_components_who_uses_us_data_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./app/components/who-uses-us-data.json */ \"./src/app/components/who-uses-us-data.json\", 1);\n/* harmony import */ var _app_components_who_uses_us_hbs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app/components/who-uses-us.hbs */ \"./src/app/components/who-uses-us.hbs\");\n/* harmony import */ var _app_components_who_uses_us_hbs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_app_components_who_uses_us_hbs__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _app_pages_index_hbs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app/pages/index.hbs */ \"./src/app/pages/index.hbs\");\n/* harmony import */ var _app_pages_index_hbs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_app_pages_index_hbs__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _app_pages_contact_us_hbs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app/pages/contact-us.hbs */ \"./src/app/pages/contact-us.hbs\");\n/* harmony import */ var _app_pages_contact_us_hbs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_app_pages_contact_us_hbs__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _app_pages_request_demo_hbs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app/pages/request-demo.hbs */ \"./src/app/pages/request-demo.hbs\");\n/* harmony import */ var _app_pages_request_demo_hbs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_app_pages_request_demo_hbs__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _app_scripts_selectArticle_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app/scripts/selectArticle.js */ \"./src/app/scripts/selectArticle.js\");\n/* harmony import */ var _app_scripts_toggleBurger_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app/scripts/toggleBurger.js */ \"./src/app/scripts/toggleBurger.js\");\n/* harmony import */ var _app_scripts_navBarBG_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app/scripts/navBarBG.js */ \"./src/app/scripts/navBarBG.js\");\n// callscreen.us entry point\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nwindow.selectArticle = _app_scripts_selectArticle_js__WEBPACK_IMPORTED_MODULE_16__[\"default\"];\nwindow.toggleBurger = _app_scripts_toggleBurger_js__WEBPACK_IMPORTED_MODULE_17__[\"default\"];\nwindow.onload = _app_scripts_navBarBG_js__WEBPACK_IMPORTED_MODULE_18__[\"default\"];\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });