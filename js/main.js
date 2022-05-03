/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("$(function(){\r\n\r\n   var mixer = mixitup('.products__inner-box');\r\n\r\n   $(\".rate-star\").rateYo({\r\n      rating: 5,\r\n      starWidth: \"12px\",\r\n      readOnly: true\r\n    });\r\n\r\n   $('.product-slider__inner').slick({\r\n      arrows: false,\r\n      dots: true,\r\n      infinite: false,\r\n      speed: 300,\r\n      slidesToShow: 4,\r\n      slidesToScroll: 4,\r\n   });\r\n\r\n});\n\n//# sourceURL=webpack://start/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;