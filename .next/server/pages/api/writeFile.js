"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/writeFile";
exports.ids = ["pages/api/writeFile"];
exports.modules = {

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("fs-extra");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/writeFile.ts":
/*!********************************!*\
  !*** ./pages/api/writeFile.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs-extra */ \"fs-extra\");\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction handler(req, res) {\n    try {\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\", \"new_restaurants.txt\");\n        const { search  } = req.body;\n        fs_extra__WEBPACK_IMPORTED_MODULE_0___default().appendFileSync(filePath, search + \"\\n\");\n        res.status(200).json({\n            message: \"Data successfully written to file!\"\n        });\n    } catch (error) {\n        console.error(\"Error writing to file:\", error);\n        res.status(500).json({\n            error: \"Error writing to file\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvd3JpdGVGaWxlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRUY7QUFFVCxTQUFTRSxPQUFPLENBQUNDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDekUsSUFBSTtRQUNGLE1BQU1DLFFBQVEsR0FBR0osZ0RBQVMsQ0FBQ00sT0FBTyxDQUFDQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUscUJBQXFCLENBQUM7UUFDeEUsTUFBTSxFQUFFQyxNQUFNLEdBQUUsR0FBR04sR0FBRyxDQUFDTyxJQUFJO1FBQzNCViw4REFBaUIsQ0FBQ0ssUUFBUSxFQUFFSSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDM0NMLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLG9DQUFvQztTQUFFLENBQUMsQ0FBQztLQUN6RSxDQUFDLE9BQU9DLEtBQUssRUFBRTtRQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyx3QkFBd0IsRUFBRUEsS0FBSyxDQUFDLENBQUM7UUFDL0NYLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUUsS0FBSyxFQUFFLHVCQUF1QjtTQUFFLENBQUMsQ0FBQztLQUMxRDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veWVscC8uL3BhZ2VzL2FwaS93cml0ZUZpbGUudHM/ZTNlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzLWV4dHJhXCI7XHJcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImRhdGFcIiwgXCJuZXdfcmVzdGF1cmFudHMudHh0XCIpO1xyXG4gICAgY29uc3QgeyBzZWFyY2ggfSA9IHJlcS5ib2R5O1xyXG4gICAgZnMuYXBwZW5kRmlsZVN5bmMoZmlsZVBhdGgsIHNlYXJjaCArIFwiXFxuXCIpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIkRhdGEgc3VjY2Vzc2Z1bGx5IHdyaXR0ZW4gdG8gZmlsZSFcIiB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHdyaXRpbmcgdG8gZmlsZTpcIiwgZXJyb3IpO1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJFcnJvciB3cml0aW5nIHRvIGZpbGVcIiB9KTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJzZWFyY2giLCJib2R5IiwiYXBwZW5kRmlsZVN5bmMiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/writeFile.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/writeFile.ts"));
module.exports = __webpack_exports__;

})();