"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/components/login.tsx":
/*!**********************************!*\
  !*** ./app/components/login.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Login: function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _login_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.module.scss */ \"(app-client)/./app/components/login.module.scss\");\n/* harmony import */ var _login_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_login_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _icons_logo_utc_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/logo_utc.png */ \"(app-client)/./app/icons/logo_utc.png\");\n/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/tabs */ \"(app-client)/./node_modules/antd/lib/tabs/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/button */ \"(app-client)/./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form */ \"(app-client)/./node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ \"(app-client)/./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons/lib/icons/LockOutlined */ \"(app-client)/./node_modules/@ant-design/icons/lib/icons/LockOutlined.js\");\n\n\n\n\n\n\n\n\nconst Login = ()=>{\n    const onFinish = (values)=>{\n        console.log(\"Received values of form: \", values);\n    };\n    const renderRegister = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            name: \"normal_login\",\n            className: \"login-form\",\n            onFinish: onFinish,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                    name: \"username\",\n                    rules: [\n                        {\n                            required: true,\n                            message: \"请输入手机号\"\n                        }\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        placeholder: \"手机号\",\n                        prefix: \"+86\"\n                    }, void 0, false, {\n                        fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                    name: \"validate\",\n                    rules: [\n                        {\n                            message: \"请输入验证码\"\n                        }\n                    ],\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            prefix: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \"site-form-item-icon\"\n                            }, void 0, false, void 0, void 0),\n                            placeholder: \"验证码\"\n                        }, void 0, false, {\n                            fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            id: \"startButton\",\n                            onClick: startCountdown,\n                            className: (_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"login-form-validate\"]),\n                            children: \"获取验证码\"\n                        }, void 0, false, {\n                            fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                    className: \"login-form-container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        type: \"primary\",\n                        htmlType: \"submit\",\n                        style: {\n                            width: \"100%\"\n                        },\n                        className: \"login-form-button\",\n                        children: \"登 录\"\n                    }, void 0, false, {\n                        fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 15\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, undefined);\n    };\n    let seconds = 60;\n    let countdownTimer = 0;\n    function updateCountdown() {\n        document.getElementById(\"startButton\").innerText = \"重新发送(\".concat(seconds, \"s)\");\n    }\n    function startCountdown() {\n        // 禁用按钮以防止多次点击\n        document.getElementById(\"startButton\").disabled = true;\n        countdownTimer = setInterval(function() {\n            seconds--;\n            updateCountdown();\n            if (seconds <= 0) {\n                clearInterval(countdownTimer);\n                // 倒计时结束后重新启用按钮\n                document.getElementById(\"startButton\").disabled = false;\n                seconds = 60; // 重置秒数\n                updateCountdown();\n            }\n        }, 1000);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default().login),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"login-container\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"login-top\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"login-header\"]),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"login-logo\"]),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: _icons_logo_utc_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"].src,\n                                        width: 40,\n                                        height: 40,\n                                        alt: \"logoUtcPic\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"login-title\"]),\n                                    children: \"UTC \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"login-desc\"]),\n                            children: \"人工智能工具\"\n                        }, void 0, false, {\n                            fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"login-main\"]),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        defaultActiveKey: \"1\",\n                        centered: true,\n                        items: [\n                            {\n                                label: \"手机号登录\",\n                                key: \"2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: renderRegister()\n                                }, void 0, false)\n                            }\n                        ]\n                    }, void 0, false, {\n                        fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n            lineNumber: 74,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvbG9naW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNBO0FBQzZCO0FBQUE7QUFBQTtBQUFBO0FBQ1A7QUFFeEQsTUFBTU8sUUFBUTtJQUVqQixNQUFNQyxXQUFXLENBQUNDO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQyw2QkFBNkJGO0lBQzNDO0lBSUYsTUFBTUcsaUJBQWlCO1FBQ25CLHFCQUNJLDhEQUFDUixxREFBSUE7WUFDSFMsTUFBSztZQUNMQyxXQUFVO1lBQ1ZOLFVBQVVBOzs4QkFFViw4REFBQ0oscURBQUlBLENBQUNXLElBQUk7b0JBQ1JGLE1BQUs7b0JBQ0xHLE9BQU87d0JBQUM7NEJBQUVDLFVBQVU7NEJBQU1DLFNBQVM7d0JBQVM7cUJBQUU7OEJBRTlDLDRFQUFDYixzREFBS0E7d0JBQUNjLGFBQVk7d0JBQU1DLFFBQVE7Ozs7Ozs7Ozs7OzhCQUVuQyw4REFBQ2hCLHFEQUFJQSxDQUFDVyxJQUFJO29CQUNSRixNQUFLO29CQUNMRyxPQUFPO3dCQUFDOzRCQUFFRSxTQUFTO3dCQUFTO3FCQUFFOztzQ0FDOUIsOERBQUNiLHNEQUFLQTs0QkFDSmUsc0JBQVEsOERBQUNkLGdGQUFZQTtnQ0FBQ1EsV0FBVTs7NEJBQ2hDSyxhQUFZOzs7Ozs7c0NBRWQsOERBQUNFOzRCQUFFQyxJQUFHOzRCQUFjQyxTQUFTQzs0QkFBZ0JWLFdBQVdkLGtGQUE2QjtzQ0FBRTs7Ozs7Ozs7Ozs7OzhCQUl6Riw4REFBQ0kscURBQUlBLENBQUNXLElBQUk7b0JBQUNELFdBQVU7OEJBQ25CLDRFQUFDWCx3REFBTUE7d0JBQUNzQixNQUFLO3dCQUFVQyxVQUFTO3dCQUFTQyxPQUFPOzRCQUFDQyxPQUFNO3dCQUFNO3dCQUFHZCxXQUFVO2tDQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNMUc7SUFFQSxJQUFJZSxVQUFVO0lBQ2QsSUFBSUMsaUJBQWlCO0lBRXJCLFNBQVNDO1FBQ0xDLFNBQVNDLGNBQWMsQ0FBQyxlQUFlQyxTQUFTLEdBQUcsUUFBZ0IsT0FBUkwsU0FBUTtJQUN2RTtJQUVBLFNBQVNMO1FBQ0wsY0FBYztRQUNkUSxTQUFTQyxjQUFjLENBQUMsZUFBZUUsUUFBUSxHQUFHO1FBRWxETCxpQkFBaUJNLFlBQVk7WUFDekJQO1lBQ0FFO1lBRUEsSUFBSUYsV0FBVyxHQUFHO2dCQUNkUSxjQUFjUDtnQkFDZCxlQUFlO2dCQUNmRSxTQUFTQyxjQUFjLENBQUMsZUFBZUUsUUFBUSxHQUFHO2dCQUNsRE4sVUFBVSxJQUFJLE9BQU87Z0JBQ3JCRTtZQUNKO1FBQ0osR0FBRztJQUNQO0lBRUEscUJBQ0EsOERBQUNPO1FBQUl4QixXQUFXZCxpRUFBZTtrQkFDM0IsNEVBQUNzQztZQUFJeEIsV0FBV2QsOEVBQXlCOzs4QkFDckMsOERBQUNzQztvQkFBSXhCLFdBQVdkLHdFQUFtQjs7c0NBQy9CLDhEQUFDc0M7NEJBQUl4QixXQUFXZCwyRUFBc0I7OzhDQUNsQyw4REFBQ3VDO29DQUFLekIsV0FBV2QseUVBQW9COzhDQUNqQyw0RUFBQ3dDO3dDQUFJQyxLQUFLeEMsMkRBQUlBLENBQUN3QyxHQUFHO3dDQUFFYixPQUFPO3dDQUFJYyxRQUFRO3dDQUFJQyxLQUFJOzs7Ozs7Ozs7Ozs4Q0FFbkQsOERBQUNKO29DQUFLekIsV0FBV2QsMEVBQXFCOzhDQUFFOzs7Ozs7Ozs7Ozs7c0NBRTVDLDhEQUFDc0M7NEJBQUl4QixXQUFXZCx5RUFBb0I7c0NBQUU7Ozs7Ozs7Ozs7Ozs4QkFJMUMsOERBQUNzQztvQkFBSXhCLFdBQVdkLHlFQUFvQjs4QkFDcEMsNEVBQUNFLHFEQUFJQTt3QkFDRDBDLGtCQUFpQjt3QkFDakJDLFFBQVE7d0JBQ1JDLE9BQU87NEJBQ0Q7Z0NBQ0VDLE9BQU87Z0NBQ1BDLEtBQUs7Z0NBQ0xDLHdCQUFVOzhDQUNUckM7OzRCQUVIO3lCQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pCLEVBQUM7S0FqR1lMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2xvZ2luLnRzeD9jNTIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbG9naW4ubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9pY29ucy9sb2dvX3V0Yy5wbmdcIjtcbmltcG9ydCB7IFRhYnMsQnV0dG9uLCBDaGVja2JveCwgRm9ybSwgSW5wdXQsSW5wdXROdW1iZXIgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IExvY2tPdXRsaW5lZCwgVXNlck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuXG5leHBvcnQgY29uc3QgTG9naW4gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBvbkZpbmlzaCA9ICh2YWx1ZXM6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQgdmFsdWVzIG9mIGZvcm06ICcsIHZhbHVlcyk7XG4gICAgICB9O1xuXG5cblxuICAgIGNvbnN0IHJlbmRlclJlZ2lzdGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgbmFtZT1cIm5vcm1hbF9sb2dpblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIlxuICAgICAgICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+ivt+i+k+WFpeaJi+acuuWPtycgfV19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCLmiYvmnLrlj7dcIiBwcmVmaXg9e1wiKzg2XCJ9Lz5cbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICBuYW1lPVwidmFsaWRhdGVcIlxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyBtZXNzYWdlOiAn6K+36L6T5YWl6aqM6K+B56CBJyB9XX0+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICBwcmVmaXg9ezxMb2NrT3V0bGluZWQgY2xhc3NOYW1lPVwic2l0ZS1mb3JtLWl0ZW0taWNvblwiIC8+fVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLpqozor4HnoIFcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGEgaWQ9XCJzdGFydEJ1dHRvblwiIG9uQ2xpY2s9e3N0YXJ0Q291bnRkb3dufSBjbGFzc05hbWU9e3N0eWxlc1snbG9naW4tZm9ybS12YWxpZGF0ZSddfT5cbiAgICAgICAgICAgICAgICAgIOiOt+WPlumqjOivgeeggVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwibG9naW4tZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBzdHlsZT17e3dpZHRoOicxMDAlJ319IGNsYXNzTmFtZT1cImxvZ2luLWZvcm0tYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICDnmbsg5b2VXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgbGV0IHNlY29uZHMgPSA2MDtcbiAgICBsZXQgY291bnRkb3duVGltZXIgPSAwO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ291bnRkb3duKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRCdXR0b24nKS5pbm5lclRleHQgPSBg6YeN5paw5Y+R6YCBKCR7c2Vjb25kc31zKWA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oKSB7XG4gICAgICAgIC8vIOemgeeUqOaMiemSruS7pemYsuatouWkmuasoeeCueWHu1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRCdXR0b24nKS5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgY291bnRkb3duVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWNvbmRzLS07XG4gICAgICAgICAgICB1cGRhdGVDb3VudGRvd24oKTtcblxuICAgICAgICAgICAgaWYgKHNlY29uZHMgPD0gMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duVGltZXIpO1xuICAgICAgICAgICAgICAgIC8vIOWAkuiuoeaXtue7k+adn+WQjumHjeaWsOWQr+eUqOaMiemSrlxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEJ1dHRvbicpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IDYwOyAvLyDph43nva7np5LmlbBcbiAgICAgICAgICAgICAgICB1cGRhdGVDb3VudGRvd24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydsb2dpbiddfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbG9naW4tY29udGFpbmVyJ119PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbG9naW4tdG9wJ119PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2xvZ2luLWhlYWRlciddfT4gXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzWydsb2dpbi1sb2dvJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0xvZ28uc3JjfSB3aWR0aD17NDB9IGhlaWdodD17NDB9IGFsdD1cImxvZ29VdGNQaWNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzWydsb2dpbi10aXRsZSddfT5VVEMgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2xvZ2luLWRlc2MnXX0+XG4gICAgICAgICAgICAgICAgICDkurrlt6Xmmbrog73lt6XlhbdcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbG9naW4tbWFpbiddfT5cbiAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgZGVmYXVsdEFjdGl2ZUtleT1cIjFcIlxuICAgICAgICAgICAgICAgIGNlbnRlcmVkXG4gICAgICAgICAgICAgICAgaXRlbXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ+aJi+acuuWPt+eZu+W9lScsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICcyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiA8PlxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlclJlZ2lzdGVyKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz4sXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2Pilcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwiTG9nbyIsIlRhYnMiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJMb2NrT3V0bGluZWQiLCJMb2dpbiIsIm9uRmluaXNoIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsInJlbmRlclJlZ2lzdGVyIiwibmFtZSIsImNsYXNzTmFtZSIsIkl0ZW0iLCJydWxlcyIsInJlcXVpcmVkIiwibWVzc2FnZSIsInBsYWNlaG9sZGVyIiwicHJlZml4IiwiYSIsImlkIiwib25DbGljayIsInN0YXJ0Q291bnRkb3duIiwidHlwZSIsImh0bWxUeXBlIiwic3R5bGUiLCJ3aWR0aCIsInNlY29uZHMiLCJjb3VudGRvd25UaW1lciIsInVwZGF0ZUNvdW50ZG93biIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJkaXNhYmxlZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsInNwYW4iLCJpbWciLCJzcmMiLCJoZWlnaHQiLCJhbHQiLCJkZWZhdWx0QWN0aXZlS2V5IiwiY2VudGVyZWQiLCJpdGVtcyIsImxhYmVsIiwia2V5IiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/login.tsx\n"));

/***/ })

});