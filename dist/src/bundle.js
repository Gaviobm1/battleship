/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/corrdinate.js":
/*!***************************!*\
  !*** ./src/corrdinate.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Coordinate {\n  constructor() {\n    let x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    let y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    this.x = x;\n    this.y = y;\n  }\n  generateRandomCoords() {\n    let maxX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;\n    let maxY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;\n    let minX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n    let minY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;\n    this.x = Math.floor(Math.random() * maxX + minX);\n    this.y = Math.floor(Math.random() * maxY + minY);\n  }\n  getHorizontalRange(max, length) {\n    const coords = [];\n    let xLimit;\n    if (this.x + length > max) {\n      xLimit = this.x - (length - 1);\n      for (let i = 0; i < length; i += 1) {\n        coords[i] = [];\n        coords[i].push(xLimit);\n        coords[i].push(this.y);\n        xLimit += 1;\n      }\n    } else {\n      xLimit = this.x + (length - 1);\n      for (let i = 0; i < length; i += 1) {\n        coords[i] = [];\n        coords[i].push(xLimit);\n        coords[i].push(this.y);\n        xLimit -= 1;\n      }\n    }\n    return coords;\n  }\n  getVerticalRange(max, length) {\n    const coords = [];\n    let yLimit;\n    if (this.y + length > max) {\n      yLimit = this.y - (length - 1);\n      for (let i = 0; i < length; i += 1) {\n        coords[i] = [];\n        coords[i].push(this.x);\n        coords[i].push(yLimit);\n        yLimit += 1;\n      }\n    } else {\n      yLimit = this.y + (length - 1);\n      for (let i = 0; i < length; i += 1) {\n        coords[i] = [];\n        coords[i].push(this.x);\n        coords[i].push(yLimit);\n        yLimit -= 1;\n      }\n    }\n    return coords;\n  }\n  coordinateArray() {\n    return [this.x, this.y];\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Coordinate);\n\n//# sourceURL=webpack://project-template/./src/corrdinate.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _corrdinate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./corrdinate */ \"./src/corrdinate.js\");\n\n\nclass Gameboard {\n  constructor() {\n    let xMax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;\n    let xMin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n    let yMax = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;\n    let yMin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;\n    this.xMax = xMax;\n    this.xMin = xMin;\n    this.yMax = yMax;\n    this.yMin = yMin;\n    this.moves = new Set();\n    this.occupied = new Set();\n    this.missed = [];\n    this.hits = [];\n    this.ships = [];\n  }\n  addShips() {\n    for (let i = 0; i < 5; i += 1) {\n      const obj = {};\n      const length = Math.floor(Math.random() * 4 + 2);\n      const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](length);\n      obj.ship = ship;\n      obj.coordinates = this.findLegalSpaces(ship.length);\n      this.ships.push(obj);\n    }\n  }\n  legalStart(coord) {\n    if (!this.occupied.has(coord.join(''))) {\n      return true;\n    }\n    return false;\n  }\n  findLegalSpaces(length) {\n    let coords = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _corrdinate__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    coords.generateRandomCoords();\n    const start = coords.coordinateArray();\n    const n = Math.floor(Math.random() * 2);\n    if (n === 0) {\n      if (this.legalStart(start)) {\n        const results = coords.getVerticalRange(this.xMax, length);\n        if (results.some(this.spaceOccupied, this)) {\n          return this.findLegalSpaces(length);\n        }\n        this.addOccupiedSpaces(results);\n        return results;\n      }\n      return this.findLegalSpaces(length);\n    }\n    if (n === 1) {\n      if (this.legalStart(start)) {\n        const results = coords.getHorizontalRange(this.xMax, length);\n        if (results.some(this.spaceOccupied, this)) {\n          return this.findLegalSpaces(length);\n        }\n        this.addOccupiedSpaces(results);\n        return results;\n      }\n      return this.findLegalSpaces(length);\n    }\n  }\n  addOccupiedSpaces(arr) {\n    arr.forEach(coord => {\n      this.occupied.add(coord.join(''));\n    });\n  }\n  spaceOccupied(coord) {\n    if (this.occupied.has(coord.join(''))) {\n      return true;\n    }\n    return false;\n  }\n  makeMove(arr) {\n    if (arr[0] > this.xMax || arr[0] < this.xMin || arr[1] > this.yMax || arr[1] < this.yMin) {\n      throw new Error('Invalid move');\n    }\n    if (this.moves.has(String(arr[0]) + String(arr[1]))) {\n      throw new Error('Move already made');\n    }\n    this.moves.add(String(arr[0]) + String(arr[1]));\n  }\n  receiveAttack(attack) {\n    this.ships.forEach(ship => {\n      ship.coordinates.forEach(coord => {\n        if (coord.join('') === attack.join('')) {\n          return true;\n        }\n      });\n    });\n    return false;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://project-template/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\nconst gb = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ngb.addShips();\nconsole.log(gb.ships);\nconsole.log(gb.receiveAttack([5, 6]));\n\n//# sourceURL=webpack://project-template/./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.hits = 0;\n    this.sunk = false;\n    this.maxLength = 5;\n    this.minLength = 2;\n  }\n  hit() {\n    this.hits += 1;\n    this.isSunk();\n  }\n  isSunk() {\n    if (this.length === this.hits) {\n      this.sunk = true;\n    }\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://project-template/./src/ship.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;