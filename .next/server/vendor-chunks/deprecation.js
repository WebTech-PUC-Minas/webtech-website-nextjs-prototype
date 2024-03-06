"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/deprecation";
exports.ids = ["vendor-chunks/deprecation"];
exports.modules = {

/***/ "(rsc)/./node_modules/deprecation/dist-web/index.js":
/*!****************************************************!*\
  !*** ./node_modules/deprecation/dist-web/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Deprecation: () => (/* binding */ Deprecation)\n/* harmony export */ });\nclass Deprecation extends Error {\n  constructor(message) {\n    super(message); // Maintains proper stack trace (only available on V8)\n\n    /* istanbul ignore next */\n\n    if (Error.captureStackTrace) {\n      Error.captureStackTrace(this, this.constructor);\n    }\n\n    this.name = 'Deprecation';\n  }\n\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZGVwcmVjYXRpb24vZGlzdC13ZWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQSxvQkFBb0I7O0FBRXBCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUV1QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZXByZWNhdGlvbi9kaXN0LXdlYi9pbmRleC5qcz9lZjBhIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERlcHJlY2F0aW9uIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7IC8vIE1haW50YWlucyBwcm9wZXIgc3RhY2sgdHJhY2UgKG9ubHkgYXZhaWxhYmxlIG9uIFY4KVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgdGhpcy5uYW1lID0gJ0RlcHJlY2F0aW9uJztcbiAgfVxuXG59XG5cbmV4cG9ydCB7IERlcHJlY2F0aW9uIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/deprecation/dist-web/index.js\n");

/***/ })

};
;