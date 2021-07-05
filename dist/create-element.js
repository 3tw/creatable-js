/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addClass.js":
/*!*************************!*\
  !*** ./src/addClass.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createClassArray(classString) {
  return classString.trim().split(/^|\s+/);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(classes) {
  var _this$el$classList;

  var classNames = createClassArray(classes);

  (_this$el$classList = this.el.classList).add.apply(_this$el$classList, _toConsumableArray(classNames));

  return this;
}

/***/ }),

/***/ "./src/append.js":
/*!***********************!*\
  !*** ./src/append.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element) {
  this.el = this.el.appendChild(document.createElement(element));
  return this;
}

/***/ }),

/***/ "./src/attribute.js":
/*!**************************!*\
  !*** ./src/attribute.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(attribute, value) {
  this.el.setAttribute(attribute, value);
  return this;
}

/***/ }),

/***/ "./src/insertAfter.js":
/*!****************************!*\
  !*** ./src/insertAfter.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element) {
  this.el = this.el.insertAdjacentElement('afterend', document.createElement(element));
  return this;
}

/***/ }),

/***/ "./src/insertBefore.js":
/*!*****************************!*\
  !*** ./src/insertBefore.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element) {
  this.el = this.el.insertAdjacentElement('beforebegin', document.createElement(element));
  return this;
}

/***/ }),

/***/ "./src/prepend.js":
/*!************************!*\
  !*** ./src/prepend.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element) {
  this.el = this.el.insertBefore(document.createElement(element), this.el.firstChild);
  return this;
}

/***/ }),

/***/ "./src/removeClass.js":
/*!****************************!*\
  !*** ./src/removeClass.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createClassArray(classString) {
  return classString.trim().split(/^|\s+/);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(classes) {
  var _this$el$classList;

  var classNames = createClassArray(classes);

  (_this$el$classList = this.el.classList).remove.apply(_this$el$classList, _toConsumableArray(classNames));

  return this;
}

/***/ }),

/***/ "./src/select.js":
/*!***********************!*\
  !*** ./src/select.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  this.el = document.querySelector(selector);

  if (!this.el) {
    throw new Error("Element with selector '".concat(selector, "' could not be found."));
  }

  return this;
}

/***/ }),

/***/ "./src/selectChild.js":
/*!****************************!*\
  !*** ./src/selectChild.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  this.el = this.el.querySelector(selector);

  if (!this.el) {
    throw new Error("Element with selector '".concat(selector, "' could not be found."));
  }

  return this;
}

/***/ }),

/***/ "./src/selectNext.js":
/*!***************************!*\
  !*** ./src/selectNext.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  this.el = this.el.nextSibling;
  return this;
}

/***/ }),

/***/ "./src/selectParent.js":
/*!*****************************!*\
  !*** ./src/selectParent.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  this.el = this.el.parentNode;
  return this;
}

/***/ }),

/***/ "./src/selectPrev.js":
/*!***************************!*\
  !*** ./src/selectPrev.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  this.el = this.el.previousSibling;
  return this;
}

/***/ }),

/***/ "./src/text.js":
/*!*********************!*\
  !*** ./src/text.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(text) {
  this.el.appendChild(document.createTextNode(text));
  return this;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Creatable": () => (/* binding */ Creatable)
/* harmony export */ });
/* harmony import */ var _append_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./append.js */ "./src/append.js");
/* harmony import */ var _attribute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attribute.js */ "./src/attribute.js");
/* harmony import */ var _addClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addClass.js */ "./src/addClass.js");
/* harmony import */ var _insertBefore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insertBefore.js */ "./src/insertBefore.js");
/* harmony import */ var _insertAfter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./insertAfter.js */ "./src/insertAfter.js");
/* harmony import */ var _prepend_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prepend.js */ "./src/prepend.js");
/* harmony import */ var _removeClass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./removeClass.js */ "./src/removeClass.js");
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select.js */ "./src/select.js");
/* harmony import */ var _selectChild_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selectChild.js */ "./src/selectChild.js");
/* harmony import */ var _selectNext_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selectNext.js */ "./src/selectNext.js");
/* harmony import */ var _selectParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selectParent.js */ "./src/selectParent.js");
/* harmony import */ var _selectPrev_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./selectPrev.js */ "./src/selectPrev.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./text.js */ "./src/text.js");













function Creatable() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  this.el = selector;
}
Creatable.prototype = {
  constructor: Creatable,
  append: _append_js__WEBPACK_IMPORTED_MODULE_0__.default,
  attribute: _attribute_js__WEBPACK_IMPORTED_MODULE_1__.default,
  addClass: _addClass_js__WEBPACK_IMPORTED_MODULE_2__.default,
  insertAfter: _insertAfter_js__WEBPACK_IMPORTED_MODULE_4__.default,
  insertBefore: _insertBefore_js__WEBPACK_IMPORTED_MODULE_3__.default,
  prepend: _prepend_js__WEBPACK_IMPORTED_MODULE_5__.default,
  removeClass: _removeClass_js__WEBPACK_IMPORTED_MODULE_6__.default,
  select: _select_js__WEBPACK_IMPORTED_MODULE_7__.default,
  selectChild: _selectChild_js__WEBPACK_IMPORTED_MODULE_8__.default,
  selectNext: _selectNext_js__WEBPACK_IMPORTED_MODULE_9__.default,
  selectParent: _selectParent_js__WEBPACK_IMPORTED_MODULE_10__.default,
  selectPrev: _selectPrev_js__WEBPACK_IMPORTED_MODULE_11__.default,
  text: _text_js__WEBPACK_IMPORTED_MODULE_12__.default
};
})();

/******/ })()
;