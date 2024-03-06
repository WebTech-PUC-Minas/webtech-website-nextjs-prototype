"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/indent-string";
exports.ids = ["vendor-chunks/indent-string"];
exports.modules = {

/***/ "(rsc)/./node_modules/indent-string/index.js":
/*!*********************************************!*\
  !*** ./node_modules/indent-string/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = (string, count = 1, options) => {\n\toptions = {\n\t\tindent: ' ',\n\t\tincludeEmptyLines: false,\n\t\t...options\n\t};\n\n\tif (typeof string !== 'string') {\n\t\tthrow new TypeError(\n\t\t\t`Expected \\`input\\` to be a \\`string\\`, got \\`${typeof string}\\``\n\t\t);\n\t}\n\n\tif (typeof count !== 'number') {\n\t\tthrow new TypeError(\n\t\t\t`Expected \\`count\\` to be a \\`number\\`, got \\`${typeof count}\\``\n\t\t);\n\t}\n\n\tif (typeof options.indent !== 'string') {\n\t\tthrow new TypeError(\n\t\t\t`Expected \\`options.indent\\` to be a \\`string\\`, got \\`${typeof options.indent}\\``\n\t\t);\n\t}\n\n\tif (count === 0) {\n\t\treturn string;\n\t}\n\n\tconst regex = options.includeEmptyLines ? /^/gm : /^(?!\\s*$)/gm;\n\n\treturn string.replace(regex, options.indent.repeat(count));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaW5kZW50LXN0cmluZy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRCxjQUFjO0FBQ2pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRCxhQUFhO0FBQ2hFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDREQUE0RCxzQkFBc0I7QUFDbEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbmRlbnQtc3RyaW5nL2luZGV4LmpzPzY5NTAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChzdHJpbmcsIGNvdW50ID0gMSwgb3B0aW9ucykgPT4ge1xuXHRvcHRpb25zID0ge1xuXHRcdGluZGVudDogJyAnLFxuXHRcdGluY2x1ZGVFbXB0eUxpbmVzOiBmYWxzZSxcblx0XHQuLi5vcHRpb25zXG5cdH07XG5cblx0aWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcblx0XHRcdGBFeHBlY3RlZCBcXGBpbnB1dFxcYCB0byBiZSBhIFxcYHN0cmluZ1xcYCwgZ290IFxcYCR7dHlwZW9mIHN0cmluZ31cXGBgXG5cdFx0KTtcblx0fVxuXG5cdGlmICh0eXBlb2YgY291bnQgIT09ICdudW1iZXInKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcblx0XHRcdGBFeHBlY3RlZCBcXGBjb3VudFxcYCB0byBiZSBhIFxcYG51bWJlclxcYCwgZ290IFxcYCR7dHlwZW9mIGNvdW50fVxcYGBcblx0XHQpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBvcHRpb25zLmluZGVudCAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFxuXHRcdFx0YEV4cGVjdGVkIFxcYG9wdGlvbnMuaW5kZW50XFxgIHRvIGJlIGEgXFxgc3RyaW5nXFxgLCBnb3QgXFxgJHt0eXBlb2Ygb3B0aW9ucy5pbmRlbnR9XFxgYFxuXHRcdCk7XG5cdH1cblxuXHRpZiAoY291bnQgPT09IDApIHtcblx0XHRyZXR1cm4gc3RyaW5nO1xuXHR9XG5cblx0Y29uc3QgcmVnZXggPSBvcHRpb25zLmluY2x1ZGVFbXB0eUxpbmVzID8gL14vZ20gOiAvXig/IVxccyokKS9nbTtcblxuXHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UocmVnZXgsIG9wdGlvbnMuaW5kZW50LnJlcGVhdChjb3VudCkpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/indent-string/index.js\n");

/***/ })

};
;