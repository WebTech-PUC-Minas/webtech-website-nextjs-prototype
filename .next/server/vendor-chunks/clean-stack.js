"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/clean-stack";
exports.ids = ["vendor-chunks/clean-stack"];
exports.modules = {

/***/ "(rsc)/./node_modules/clean-stack/index.js":
/*!*******************************************!*\
  !*** ./node_modules/clean-stack/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst os = __webpack_require__(/*! os */ \"os\");\n\nconst extractPathRegex = /\\s+at.*(?:\\(|\\s)(.*)\\)?/;\nconst pathRegex = /^(?:(?:(?:node|(?:internal\\/[\\w/]*|.*node_modules\\/(?:babel-polyfill|pirates)\\/.*)?\\w+)\\.js:\\d+:\\d+)|native)/;\nconst homeDir = typeof os.homedir === 'undefined' ? '' : os.homedir();\n\nmodule.exports = (stack, options) => {\n\toptions = Object.assign({pretty: false}, options);\n\n\treturn stack.replace(/\\\\/g, '/')\n\t\t.split('\\n')\n\t\t.filter(line => {\n\t\t\tconst pathMatches = line.match(extractPathRegex);\n\t\t\tif (pathMatches === null || !pathMatches[1]) {\n\t\t\t\treturn true;\n\t\t\t}\n\n\t\t\tconst match = pathMatches[1];\n\n\t\t\t// Electron\n\t\t\tif (\n\t\t\t\tmatch.includes('.app/Contents/Resources/electron.asar') ||\n\t\t\t\tmatch.includes('.app/Contents/Resources/default_app.asar')\n\t\t\t) {\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\treturn !pathRegex.test(match);\n\t\t})\n\t\t.filter(line => line.trim() !== '')\n\t\t.map(line => {\n\t\t\tif (options.pretty) {\n\t\t\t\treturn line.replace(extractPathRegex, (m, p1) => m.replace(p1, p1.replace(homeDir, '~')));\n\t\t\t}\n\n\t\t\treturn line;\n\t\t})\n\t\t.join('\\n');\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvY2xlYW4tc3RhY2svaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYixXQUFXLG1CQUFPLENBQUMsY0FBSTs7QUFFdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLGNBQWM7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGVhbi1zdGFjay9pbmRleC5qcz8yYzk3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTtcblxuY29uc3QgZXh0cmFjdFBhdGhSZWdleCA9IC9cXHMrYXQuKig/OlxcKHxcXHMpKC4qKVxcKT8vO1xuY29uc3QgcGF0aFJlZ2V4ID0gL14oPzooPzooPzpub2RlfCg/OmludGVybmFsXFwvW1xcdy9dKnwuKm5vZGVfbW9kdWxlc1xcLyg/OmJhYmVsLXBvbHlmaWxsfHBpcmF0ZXMpXFwvLiopP1xcdyspXFwuanM6XFxkKzpcXGQrKXxuYXRpdmUpLztcbmNvbnN0IGhvbWVEaXIgPSB0eXBlb2Ygb3MuaG9tZWRpciA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6IG9zLmhvbWVkaXIoKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoc3RhY2ssIG9wdGlvbnMpID0+IHtcblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe3ByZXR0eTogZmFsc2V9LCBvcHRpb25zKTtcblxuXHRyZXR1cm4gc3RhY2sucmVwbGFjZSgvXFxcXC9nLCAnLycpXG5cdFx0LnNwbGl0KCdcXG4nKVxuXHRcdC5maWx0ZXIobGluZSA9PiB7XG5cdFx0XHRjb25zdCBwYXRoTWF0Y2hlcyA9IGxpbmUubWF0Y2goZXh0cmFjdFBhdGhSZWdleCk7XG5cdFx0XHRpZiAocGF0aE1hdGNoZXMgPT09IG51bGwgfHwgIXBhdGhNYXRjaGVzWzFdKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBtYXRjaCA9IHBhdGhNYXRjaGVzWzFdO1xuXG5cdFx0XHQvLyBFbGVjdHJvblxuXHRcdFx0aWYgKFxuXHRcdFx0XHRtYXRjaC5pbmNsdWRlcygnLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvZWxlY3Ryb24uYXNhcicpIHx8XG5cdFx0XHRcdG1hdGNoLmluY2x1ZGVzKCcuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9kZWZhdWx0X2FwcC5hc2FyJylcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAhcGF0aFJlZ2V4LnRlc3QobWF0Y2gpO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSAnJylcblx0XHQubWFwKGxpbmUgPT4ge1xuXHRcdFx0aWYgKG9wdGlvbnMucHJldHR5KSB7XG5cdFx0XHRcdHJldHVybiBsaW5lLnJlcGxhY2UoZXh0cmFjdFBhdGhSZWdleCwgKG0sIHAxKSA9PiBtLnJlcGxhY2UocDEsIHAxLnJlcGxhY2UoaG9tZURpciwgJ34nKSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbGluZTtcblx0XHR9KVxuXHRcdC5qb2luKCdcXG4nKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/clean-stack/index.js\n");

/***/ })

};
;