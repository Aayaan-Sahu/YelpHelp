/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/input",{

/***/ "./node_modules/next/dist/build/polyfills/process.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/process.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("\nvar ref, ref1;\nmodule.exports = ((ref = __webpack_require__.g.process) == null ? void 0 : ref.env) && typeof ((ref1 = __webpack_require__.g.process) == null ? void 0 : ref1.env) === \"object\" ? __webpack_require__.g.process : __webpack_require__(/*! ../../compiled/process */ \"./node_modules/next/dist/compiled/process/browser.js\");\n\n//# sourceMappingURL=process.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9wcm9jZXNzLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQSx5QkFBeUIscUJBQU0seURBQXlELHFCQUFNLHNEQUFzRCxxQkFBTSxXQUFXLG1CQUFPLENBQUMsb0ZBQXdCOztBQUVyTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9wcm9jZXNzLmpzP2NhNjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgcmVmLCByZWYxO1xubW9kdWxlLmV4cG9ydHMgPSAoKHJlZiA9IGdsb2JhbC5wcm9jZXNzKSA9PSBudWxsID8gdm9pZCAwIDogcmVmLmVudikgJiYgdHlwZW9mICgocmVmMSA9IGdsb2JhbC5wcm9jZXNzKSA9PSBudWxsID8gdm9pZCAwIDogcmVmMS5lbnYpID09PSBcIm9iamVjdFwiID8gZ2xvYmFsLnByb2Nlc3MgOiByZXF1aXJlKFwiLi4vLi4vY29tcGlsZWQvcHJvY2Vzc1wiKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvY2Vzcy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/polyfills/process.js\n"));

/***/ }),

/***/ "./pages/input.tsx":
/*!*************************!*\
  !*** ./pages/input.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Nav/Nav */ \"./src/components/Nav/Nav.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_MountedContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/MountedContext */ \"./src/MountedContext.ts\");\n/* harmony import */ var _src_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Footer/Footer */ \"./src/components/Footer/Footer.tsx\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Search() {\n    _s();\n    var ref = (0,_src_MountedContext__WEBPACK_IMPORTED_MODULE_3__.useMountedContext)(), mounted = ref.mounted, setMounted = ref.setMounted;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setMounted(true);\n    // eslint-disable-next-line\n    }, []);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), search = ref1[0], setSearch = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), searchSelected = ref2[0], setSearchSelected = ref2[1];\n    var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    // focus the input field when the page loads\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref;\n        (ref = inputRef.current) === null || ref === void 0 ? void 0 : ref.focus();\n    }, []);\n    // focus the input field when the enter key is pressed\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var handleKeyDown = function(e) {\n            if (e.key === \"Enter\") {\n                var ref;\n                (ref = inputRef.current) === null || ref === void 0 ? void 0 : ref.focus();\n            }\n        };\n        document.addEventListener(\"keydown\", handleKeyDown);\n    }, []);\n    var handleSearch = function() {\n        console.log(search);\n        var filePath = path.join(process.cwd(), \"data\", \"new_restaurants.txt\");\n        fs.appendFileSync(filePath, search + \"\\n\");\n        setSearch(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                mounted: mounted\n            }, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\yelp\\\\pages\\\\input.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"80%\",\n                    marginLeft: \"auto\",\n                    marginRight: \"auto\"\n                },\n                className: \"flex flex-col justify-center text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-5xl font-semibold text-center pt-8 mt-8\",\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\yelp\\\\pages\\\\input.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"pb-8 mb-8 text-gray-500 dark:text-gray-400\",\n                        children: [\n                            \"Add \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"new\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\yelp\\\\pages\\\\input.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, this),\n                            \" restaurants to our database!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Dev\\\\yelp\\\\pages\\\\input.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        style: {\n                            width: \"50%\",\n                            marginLeft: \"auto\",\n                            marginRight: \"auto\"\n                        },\n                        className: \"bg-gray-200 dark:bg-gray-600 border-2 border-gray-300 dark:border-gray-500 rounded-lg py-2 px-4 text-gray-700 dark:text-gray-200 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400\",\n                        type: \"text\",\n                        name: \"name\",\n                        ref: inputRef,\n                        value: search,\n                        placeholder: \"Press Enter to Search\",\n                        onChange: function(e) {\n                            setSearch(e.target.value.toLowerCase());\n                        },\n                        onKeyDown: function(e) {\n                            if (e.key === \"Enter\") {\n                                handleSearch();\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\yelp\\\\pages\\\\input.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\yelp\\\\pages\\\\input.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\yelp\\\\pages\\\\input.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Dev\\\\yelp\\\\pages\\\\input.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Search, \"NEDJwaTUVDDbCoxCfzAW+GC4AlA=\", false, function() {\n    return [\n        _src_MountedContext__WEBPACK_IMPORTED_MODULE_3__.useMountedContext\n    ];\n});\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEJBQUVDLFVBQVUsRUFBRSxNQUFNOzRCQUFFQyxXQUFXLEVBQUUsTUFBTTt5QkFBRTt3QkFDaEVDLFNBQVMsRUFBQyxzTUFBc007d0JBQ2hOSyxJQUFJLEVBQUMsTUFBTTt3QkFDWEMsSUFBSSxFQUFDLE1BQU07d0JBQ1hDLEdBQUcsRUFBRTlCLFFBQVE7d0JBQ2IrQixLQUFLLEVBQUVuQyxNQUFNO3dCQUNib0MsV0FBVyxFQUFDLHVCQUF1Qjt3QkFDbkNDLFFBQVEsRUFBRSxTQUFDN0IsQ0FBQyxFQUFLOzRCQUNmUCxTQUFTLENBQUNPLENBQUMsQ0FBQzhCLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDSSxXQUFXLEVBQUUsQ0FBQyxDQUFDO3lCQUN6Qzt3QkFDREMsU0FBUyxFQUFFLFNBQUNoQyxDQUFDLEVBQUs7NEJBQ2hCLElBQUlBLENBQUMsQ0FBQ0MsR0FBRyxLQUFLLE9BQU8sRUFBRTtnQ0FDckJHLFlBQVksRUFBRSxDQUFDOzZCQUNoQjt5QkFDRjs7Ozs7NEJBRUQ7a0NBQ0YsOERBQUNVLEtBQUc7Ozs7NEJBQ0U7a0NBQ04sOERBQUMxQixxRUFBTTs7Ozs0QkFBRzs7Ozs7O29CQUNOOztvQkFDTCxDQUNIO0NBQ0g7R0FyRXVCQyxNQUFNOztRQUNJRixrRUFBaUI7OztBQUQzQkUsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbnB1dC50c3g/OGFkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL05hdi9OYXZcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1vdW50ZWRDb250ZXh0LCB1c2VNb3VudGVkQ29udGV4dCB9IGZyb20gXCIuLi9zcmMvTW91bnRlZENvbnRleHRcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgYWRkTmV3UmVzdGF1cmFudCB9IGZyb20gXCIuLi9zcmMvcmVzdGF1cmFudC1hcGkvYXBpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XHJcbiAgY29uc3QgeyBtb3VudGVkLCBzZXRNb3VudGVkIH0gPSB1c2VNb3VudGVkQ29udGV4dCgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRNb3VudGVkKHRydWUpO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2hTZWxlY3RlZCwgc2V0U2VhcmNoU2VsZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICAvLyBmb2N1cyB0aGUgaW5wdXQgZmllbGQgd2hlbiB0aGUgcGFnZSBsb2Fkc1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbnB1dFJlZi5jdXJyZW50Py5mb2N1cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gZm9jdXMgdGhlIGlucHV0IGZpZWxkIHdoZW4gdGhlIGVudGVyIGtleSBpcyBwcmVzc2VkXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQ/LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHNlYXJjaCk7XHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScsICduZXdfcmVzdGF1cmFudHMudHh0Jyk7XHJcbiAgICBmcy5hcHBlbmRGaWxlU3luYyhmaWxlUGF0aCwgc2VhcmNoICsgXCJcXG5cIik7XHJcbiAgICBzZXRTZWFyY2goXCJcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdiBtb3VudGVkPXttb3VudGVkfSAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiODAlXCIsIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLCBtYXJnaW5SaWdodDogXCJhdXRvXCIgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LXNlbWlib2xkIHRleHQtY2VudGVyIHB0LTggbXQtOFwiPlNlYXJjaDwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicGItOCBtYi04IHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAgICAgICBBZGQgPHN0cm9uZz5uZXc8L3N0cm9uZz4gcmVzdGF1cmFudHMgdG8gb3VyIGRhdGFiYXNlIVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiLCBtYXJnaW5MZWZ0OiBcImF1dG9cIiwgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBkYXJrOmJnLWdyYXktNjAwIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBkYXJrOmJvcmRlci1ncmF5LTUwMCByb3VuZGVkLWxnIHB5LTIgcHgtNCB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTIwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNDAwXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmVzcyBFbnRlciB0byBTZWFyY2hcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgICAgaGFuZGxlU2VhcmNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIk5hdiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlTW91bnRlZENvbnRleHQiLCJGb290ZXIiLCJTZWFyY2giLCJtb3VudGVkIiwic2V0TW91bnRlZCIsInNlYXJjaCIsInNldFNlYXJjaCIsInNlYXJjaFNlbGVjdGVkIiwic2V0U2VhcmNoU2VsZWN0ZWQiLCJpbnB1dFJlZiIsImN1cnJlbnQiLCJmb2N1cyIsImhhbmRsZUtleURvd24iLCJlIiwia2V5IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlU2VhcmNoIiwiY29uc29sZSIsImxvZyIsImZpbGVQYXRoIiwicGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZnMiLCJhcHBlbmRGaWxlU3luYyIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJzdHJvbmciLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwicmVmIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidG9Mb3dlckNhc2UiLCJvbktleURvd24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/input.tsx\n"));

/***/ }),

/***/ "./node_modules/next/dist/compiled/process/browser.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/compiled/process/browser.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var __dirname = \"/\";\n(function(){var e={308:function(e){var t=e.exports={};var r;var n;function defaultSetTimout(){throw new Error(\"setTimeout has not been defined\")}function defaultClearTimeout(){throw new Error(\"clearTimeout has not been defined\")}(function(){try{if(typeof setTimeout===\"function\"){r=setTimeout}else{r=defaultSetTimout}}catch(e){r=defaultSetTimout}try{if(typeof clearTimeout===\"function\"){n=clearTimeout}else{n=defaultClearTimeout}}catch(e){n=defaultClearTimeout}})();function runTimeout(e){if(r===setTimeout){return setTimeout(e,0)}if((r===defaultSetTimout||!r)&&setTimeout){r=setTimeout;return setTimeout(e,0)}try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function runClearTimeout(e){if(n===clearTimeout){return clearTimeout(e)}if((n===defaultClearTimeout||!n)&&clearTimeout){n=clearTimeout;return clearTimeout(e)}try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}var i=[];var o=false;var u;var a=-1;function cleanUpNextTick(){if(!o||!u){return}o=false;if(u.length){i=u.concat(i)}else{a=-1}if(i.length){drainQueue()}}function drainQueue(){if(o){return}var e=runTimeout(cleanUpNextTick);o=true;var t=i.length;while(t){u=i;i=[];while(++a<t){if(u){u[a].run()}}a=-1;t=i.length}u=null;o=false;runClearTimeout(e)}t.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1){for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}}i.push(new Item(e,t));if(i.length===1&&!o){runTimeout(drainQueue)}};function Item(e,t){this.fun=e;this.array=t}Item.prototype.run=function(){this.fun.apply(null,this.array)};t.title=\"browser\";t.browser=true;t.env={};t.argv=[];t.version=\"\";t.versions={};function noop(){}t.on=noop;t.addListener=noop;t.once=noop;t.off=noop;t.removeListener=noop;t.removeAllListeners=noop;t.emit=noop;t.prependListener=noop;t.prependOnceListener=noop;t.listeners=function(e){return[]};t.binding=function(e){throw new Error(\"process.binding is not supported\")};t.cwd=function(){return\"/\"};t.chdir=function(e){throw new Error(\"process.chdir is not supported\")};t.umask=function(){return 0}}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var o=true;try{e[r](i,i.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return i.exports}if(typeof __nccwpck_require__!==\"undefined\")__nccwpck_require__.ab=__dirname+\"/\";var r=__nccwpck_require__(308);module.exports=r})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Byb2Nlc3MvYnJvd3Nlci5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsWUFBWSxPQUFPLGdCQUFnQixtQkFBbUIsTUFBTSxNQUFNLDRCQUE0QixtREFBbUQsK0JBQStCLHFEQUFxRCxZQUFZLElBQUksbUNBQW1DLGFBQWEsS0FBSyxvQkFBb0IsU0FBUyxtQkFBbUIsSUFBSSxxQ0FBcUMsZUFBZSxLQUFLLHVCQUF1QixTQUFTLHVCQUF1QixJQUFJLHVCQUF1QixtQkFBbUIsdUJBQXVCLDJDQUEyQyxhQUFhLHVCQUF1QixJQUFJLGNBQWMsU0FBUyxJQUFJLHdCQUF3QixTQUFTLDBCQUEwQiw0QkFBNEIscUJBQXFCLHVCQUF1QixnREFBZ0QsZUFBZSx1QkFBdUIsSUFBSSxZQUFZLFNBQVMsSUFBSSxzQkFBc0IsU0FBUyx3QkFBd0IsU0FBUyxZQUFZLE1BQU0sU0FBUywyQkFBMkIsV0FBVyxPQUFPLFFBQVEsYUFBYSxjQUFjLEtBQUssS0FBSyxhQUFhLGNBQWMsc0JBQXNCLE1BQU0sT0FBTyxrQ0FBa0MsT0FBTyxlQUFlLFNBQVMsSUFBSSxLQUFLLGFBQWEsTUFBTSxZQUFZLEtBQUssV0FBVyxPQUFPLFFBQVEsbUJBQW1CLHVCQUF1QixvQ0FBb0MsdUJBQXVCLFlBQVksbUJBQW1CLEtBQUsscUJBQXFCLHNCQUFzQixxQkFBcUIseUJBQXlCLG1CQUFtQixXQUFXLGFBQWEsOEJBQThCLGlDQUFpQyxrQkFBa0IsZUFBZSxTQUFTLFVBQVUsYUFBYSxjQUFjLGlCQUFpQixVQUFVLG1CQUFtQixZQUFZLFdBQVcsc0JBQXNCLDBCQUEwQixZQUFZLHVCQUF1QiwyQkFBMkIsd0JBQXdCLFVBQVUsc0JBQXNCLHFEQUFxRCxpQkFBaUIsV0FBVyxvQkFBb0IsbURBQW1ELG1CQUFtQixZQUFZLFNBQVMsZ0NBQWdDLFdBQVcsa0JBQWtCLGlCQUFpQixZQUFZLFlBQVksV0FBVyxJQUFJLHNDQUFzQyxRQUFRLFFBQVEsaUJBQWlCLGlCQUFpQixtRUFBbUUsU0FBUyxLQUFLLCtCQUErQixpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wcm9jZXNzL2Jyb3dzZXIuanM/MWIxZCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXt2YXIgZT17MzA4OmZ1bmN0aW9uKGUpe3ZhciB0PWUuZXhwb3J0cz17fTt2YXIgcjt2YXIgbjtmdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCl7dGhyb3cgbmV3IEVycm9yKFwic2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0KCl7dGhyb3cgbmV3IEVycm9yKFwiY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfShmdW5jdGlvbigpe3RyeXtpZih0eXBlb2Ygc2V0VGltZW91dD09PVwiZnVuY3Rpb25cIil7cj1zZXRUaW1lb3V0fWVsc2V7cj1kZWZhdWx0U2V0VGltb3V0fX1jYXRjaChlKXtyPWRlZmF1bHRTZXRUaW1vdXR9dHJ5e2lmKHR5cGVvZiBjbGVhclRpbWVvdXQ9PT1cImZ1bmN0aW9uXCIpe249Y2xlYXJUaW1lb3V0fWVsc2V7bj1kZWZhdWx0Q2xlYXJUaW1lb3V0fX1jYXRjaChlKXtuPWRlZmF1bHRDbGVhclRpbWVvdXR9fSkoKTtmdW5jdGlvbiBydW5UaW1lb3V0KGUpe2lmKHI9PT1zZXRUaW1lb3V0KXtyZXR1cm4gc2V0VGltZW91dChlLDApfWlmKChyPT09ZGVmYXVsdFNldFRpbW91dHx8IXIpJiZzZXRUaW1lb3V0KXtyPXNldFRpbWVvdXQ7cmV0dXJuIHNldFRpbWVvdXQoZSwwKX10cnl7cmV0dXJuIHIoZSwwKX1jYXRjaCh0KXt0cnl7cmV0dXJuIHIuY2FsbChudWxsLGUsMCl9Y2F0Y2godCl7cmV0dXJuIHIuY2FsbCh0aGlzLGUsMCl9fX1mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQoZSl7aWYobj09PWNsZWFyVGltZW91dCl7cmV0dXJuIGNsZWFyVGltZW91dChlKX1pZigobj09PWRlZmF1bHRDbGVhclRpbWVvdXR8fCFuKSYmY2xlYXJUaW1lb3V0KXtuPWNsZWFyVGltZW91dDtyZXR1cm4gY2xlYXJUaW1lb3V0KGUpfXRyeXtyZXR1cm4gbihlKX1jYXRjaCh0KXt0cnl7cmV0dXJuIG4uY2FsbChudWxsLGUpfWNhdGNoKHQpe3JldHVybiBuLmNhbGwodGhpcyxlKX19fXZhciBpPVtdO3ZhciBvPWZhbHNlO3ZhciB1O3ZhciBhPS0xO2Z1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpe2lmKCFvfHwhdSl7cmV0dXJufW89ZmFsc2U7aWYodS5sZW5ndGgpe2k9dS5jb25jYXQoaSl9ZWxzZXthPS0xfWlmKGkubGVuZ3RoKXtkcmFpblF1ZXVlKCl9fWZ1bmN0aW9uIGRyYWluUXVldWUoKXtpZihvKXtyZXR1cm59dmFyIGU9cnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO289dHJ1ZTt2YXIgdD1pLmxlbmd0aDt3aGlsZSh0KXt1PWk7aT1bXTt3aGlsZSgrK2E8dCl7aWYodSl7dVthXS5ydW4oKX19YT0tMTt0PWkubGVuZ3RofXU9bnVsbDtvPWZhbHNlO3J1bkNsZWFyVGltZW91dChlKX10Lm5leHRUaWNrPWZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSl7Zm9yKHZhciByPTE7cjxhcmd1bWVudHMubGVuZ3RoO3IrKyl7dFtyLTFdPWFyZ3VtZW50c1tyXX19aS5wdXNoKG5ldyBJdGVtKGUsdCkpO2lmKGkubGVuZ3RoPT09MSYmIW8pe3J1blRpbWVvdXQoZHJhaW5RdWV1ZSl9fTtmdW5jdGlvbiBJdGVtKGUsdCl7dGhpcy5mdW49ZTt0aGlzLmFycmF5PXR9SXRlbS5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7dGhpcy5mdW4uYXBwbHkobnVsbCx0aGlzLmFycmF5KX07dC50aXRsZT1cImJyb3dzZXJcIjt0LmJyb3dzZXI9dHJ1ZTt0LmVudj17fTt0LmFyZ3Y9W107dC52ZXJzaW9uPVwiXCI7dC52ZXJzaW9ucz17fTtmdW5jdGlvbiBub29wKCl7fXQub249bm9vcDt0LmFkZExpc3RlbmVyPW5vb3A7dC5vbmNlPW5vb3A7dC5vZmY9bm9vcDt0LnJlbW92ZUxpc3RlbmVyPW5vb3A7dC5yZW1vdmVBbGxMaXN0ZW5lcnM9bm9vcDt0LmVtaXQ9bm9vcDt0LnByZXBlbmRMaXN0ZW5lcj1ub29wO3QucHJlcGVuZE9uY2VMaXN0ZW5lcj1ub29wO3QubGlzdGVuZXJzPWZ1bmN0aW9uKGUpe3JldHVybltdfTt0LmJpbmRpbmc9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIil9O3QuY3dkPWZ1bmN0aW9uKCl7cmV0dXJuXCIvXCJ9O3QuY2hkaXI9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpfTt0LnVtYXNrPWZ1bmN0aW9uKCl7cmV0dXJuIDB9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXt2YXIgbj10W3JdO2lmKG4hPT11bmRlZmluZWQpe3JldHVybiBuLmV4cG9ydHN9dmFyIGk9dFtyXT17ZXhwb3J0czp7fX07dmFyIG89dHJ1ZTt0cnl7ZVtyXShpLGkuZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtvPWZhbHNlfWZpbmFsbHl7aWYobylkZWxldGUgdFtyXX1yZXR1cm4gaS5leHBvcnRzfWlmKHR5cGVvZiBfX25jY3dwY2tfcmVxdWlyZV9fIT09XCJ1bmRlZmluZWRcIilfX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjt2YXIgcj1fX25jY3dwY2tfcmVxdWlyZV9fKDMwOCk7bW9kdWxlLmV4cG9ydHM9cn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/process/browser.js\n"));

/***/ })

});