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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Login: function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _login_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.module.scss */ \"(app-client)/./app/components/login.module.scss\");\n/* harmony import */ var _login_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_login_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _icons_logo_utc_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/logo_utc.png */ \"(app-client)/./app/icons/logo_utc.png\");\n/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/tabs */ \"(app-client)/./node_modules/antd/lib/tabs/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/button */ \"(app-client)/./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form */ \"(app-client)/./node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ \"(app-client)/./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons/lib/icons/LockOutlined */ \"(app-client)/./node_modules/@ant-design/icons/lib/icons/LockOutlined.js\");\n\n\n\n\n\n\n\n\nconst Login = ()=>{\n    const onFinish = (values)=>{\n        console.log(\"Received values of form: \", values);\n    };\n    const renderRegister = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            name: \"normal_login\",\n            className: \"login-form\",\n            initialValues: {\n                remember: true\n            },\n            onFinish: onFinish,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                    name: \"username\",\n                    rules: [\n                        {\n                            required: true,\n                            message: \"请输入手机号\"\n                        }\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        placeholder: \"手机号\",\n                        prefix: \"+86\"\n                    }, void 0, false, {\n                        fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                    name: \"password\",\n                    rules: [\n                        {\n                            required: true,\n                            message: \"请输入验证码\"\n                        }\n                    ],\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            prefix: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \"site-form-item-icon\"\n                            }, void 0, false, void 0, void 0),\n                            placeholder: \"验证码\"\n                        }, void 0, false, {\n                            fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            id: \"startButton\",\n                            onClick: startCountdown,\n                            className: (_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"login-form-validate\"]),\n                            children: \"获取验证码\"\n                        }, void 0, false, {\n                            fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                    className: \"login-form-container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        type: \"primary\",\n                        htmlType: \"submit\",\n                        style: {\n                            width: \"100%\"\n                        },\n                        className: \"login-form-button\",\n                        children: \"登 录\"\n                    }, void 0, false, {\n                        fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 15\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, undefined);\n    };\n    let seconds = 60;\n    let countdownTimer = 0;\n    function updateCountdown() {\n        document.getElementById(\"startButton\").innerText = \"重新发送(\".concat(seconds, \"s)\");\n    }\n    function startCountdown() {\n        // 禁用按钮以防止多次点击\n        document.getElementById(\"startButton\").disabled = true;\n        countdownTimer = setInterval(function() {\n            seconds--;\n            updateCountdown();\n            if (seconds <= 0) {\n                clearInterval(countdownTimer);\n                // 倒计时结束后重新启用按钮\n                document.getElementById(\"startButton\").disabled = false;\n                seconds = 60; // 重置秒数\n                updateCountdown();\n            }\n        }, 1000);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default().login),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"login-container\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"login-top\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"login-header\"]),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"login-logo\"]),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: _icons_logo_utc_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"].src,\n                                        width: 40,\n                                        height: 40,\n                                        alt: \"logoUtcPic\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"login-title\"]),\n                                    children: \"UTC \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"login-desc\"]),\n                            children: \"人工智能工具\"\n                        }, void 0, false, {\n                            fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_login_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"login-main\"]),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        defaultActiveKey: \"1\",\n                        centered: true,\n                        items: [\n                            {\n                                label: \"手机号登录\",\n                                key: \"2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: renderRegister()\n                                }, void 0, false)\n                            }\n                        ]\n                    }, void 0, false, {\n                        fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n            lineNumber: 75,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/github/gpt/UTC_LLM_WEB_NEXT/app/components/login.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvbG9naW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNBO0FBQzZCO0FBQUE7QUFBQTtBQUFBO0FBQ1A7QUFFeEQsTUFBTU8sUUFBUTtJQUVqQixNQUFNQyxXQUFXLENBQUNDO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQyw2QkFBNkJGO0lBQzNDO0lBSUYsTUFBTUcsaUJBQWlCO1FBQ25CLHFCQUNJLDhEQUFDUixxREFBSUE7WUFDSFMsTUFBSztZQUNMQyxXQUFVO1lBQ1ZDLGVBQWU7Z0JBQUVDLFVBQVU7WUFBSztZQUNoQ1IsVUFBVUE7OzhCQUVWLDhEQUFDSixxREFBSUEsQ0FBQ2EsSUFBSTtvQkFDUkosTUFBSztvQkFDTEssT0FBTzt3QkFBQzs0QkFBRUMsVUFBVTs0QkFBTUMsU0FBUzt3QkFBUztxQkFBRTs4QkFFOUMsNEVBQUNmLHNEQUFLQTt3QkFBQ2dCLGFBQVk7d0JBQU1DLFFBQVE7Ozs7Ozs7Ozs7OzhCQUVuQyw4REFBQ2xCLHFEQUFJQSxDQUFDYSxJQUFJO29CQUNSSixNQUFLO29CQUNMSyxPQUFPO3dCQUFDOzRCQUFFQyxVQUFVOzRCQUFNQyxTQUFTO3dCQUFTO3FCQUFFOztzQ0FDOUMsOERBQUNmLHNEQUFLQTs0QkFDSmlCLHNCQUFRLDhEQUFDaEIsZ0ZBQVlBO2dDQUFDUSxXQUFVOzs0QkFDaENPLGFBQVk7Ozs7OztzQ0FFZCw4REFBQ0U7NEJBQUVDLElBQUc7NEJBQWNDLFNBQVNDOzRCQUFnQlosV0FBV2Qsa0ZBQTZCO3NDQUFFOzs7Ozs7Ozs7Ozs7OEJBSXpGLDhEQUFDSSxxREFBSUEsQ0FBQ2EsSUFBSTtvQkFBQ0gsV0FBVTs4QkFDbkIsNEVBQUNYLHdEQUFNQTt3QkFBQ3dCLE1BQUs7d0JBQVVDLFVBQVM7d0JBQVNDLE9BQU87NEJBQUNDLE9BQU07d0JBQU07d0JBQUdoQixXQUFVO2tDQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNMUc7SUFFQSxJQUFJaUIsVUFBVTtJQUNkLElBQUlDLGlCQUFpQjtJQUVyQixTQUFTQztRQUNMQyxTQUFTQyxjQUFjLENBQUMsZUFBZUMsU0FBUyxHQUFHLFFBQWdCLE9BQVJMLFNBQVE7SUFDdkU7SUFFQSxTQUFTTDtRQUNMLGNBQWM7UUFDZFEsU0FBU0MsY0FBYyxDQUFDLGVBQWVFLFFBQVEsR0FBRztRQUVsREwsaUJBQWlCTSxZQUFZO1lBQ3pCUDtZQUNBRTtZQUVBLElBQUlGLFdBQVcsR0FBRztnQkFDZFEsY0FBY1A7Z0JBQ2QsZUFBZTtnQkFDZkUsU0FBU0MsY0FBYyxDQUFDLGVBQWVFLFFBQVEsR0FBRztnQkFDbEROLFVBQVUsSUFBSSxPQUFPO2dCQUNyQkU7WUFDSjtRQUNKLEdBQUc7SUFDUDtJQUVBLHFCQUNBLDhEQUFDTztRQUFJMUIsV0FBV2QsaUVBQWU7a0JBQzNCLDRFQUFDd0M7WUFBSTFCLFdBQVdkLDhFQUF5Qjs7OEJBQ3JDLDhEQUFDd0M7b0JBQUkxQixXQUFXZCx3RUFBbUI7O3NDQUMvQiw4REFBQ3dDOzRCQUFJMUIsV0FBV2QsMkVBQXNCOzs4Q0FDbEMsOERBQUN5QztvQ0FBSzNCLFdBQVdkLHlFQUFvQjs4Q0FDakMsNEVBQUMwQzt3Q0FBSUMsS0FBSzFDLDJEQUFJQSxDQUFDMEMsR0FBRzt3Q0FBRWIsT0FBTzt3Q0FBSWMsUUFBUTt3Q0FBSUMsS0FBSTs7Ozs7Ozs7Ozs7OENBRW5ELDhEQUFDSjtvQ0FBSzNCLFdBQVdkLDBFQUFxQjs4Q0FBRTs7Ozs7Ozs7Ozs7O3NDQUU1Qyw4REFBQ3dDOzRCQUFJMUIsV0FBV2QseUVBQW9CO3NDQUFFOzs7Ozs7Ozs7Ozs7OEJBSTFDLDhEQUFDd0M7b0JBQUkxQixXQUFXZCx5RUFBb0I7OEJBQ3BDLDRFQUFDRSxxREFBSUE7d0JBQ0Q0QyxrQkFBaUI7d0JBQ2pCQyxRQUFRO3dCQUNSQyxPQUFPOzRCQUNEO2dDQUNFQyxPQUFPO2dDQUNQQyxLQUFLO2dDQUNMQyx3QkFBVTs4Q0FDVHZDOzs0QkFFSDt5QkFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtqQixFQUFDO0tBbEdZTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9sb2dpbi50c3g/YzUyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL2xvZ2luLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vaWNvbnMvbG9nb191dGMucG5nXCI7XG5pbXBvcnQgeyBUYWJzLEJ1dHRvbiwgQ2hlY2tib3gsIEZvcm0sIElucHV0LElucHV0TnVtYmVyIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBMb2NrT3V0bGluZWQsIFVzZXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcblxuZXhwb3J0IGNvbnN0IExvZ2luID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIHZhbHVlcyBvZiBmb3JtOiAnLCB2YWx1ZXMpO1xuICAgICAgfTtcblxuXG5cbiAgICBjb25zdCByZW5kZXJSZWdpc3RlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgIG5hbWU9XCJub3JtYWxfbG9naW5cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCJcbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyByZW1lbWJlcjogdHJ1ZSB9fVxuICAgICAgICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+ivt+i+k+WFpeaJi+acuuWPtycgfV19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCLmiYvmnLrlj7dcIiBwcmVmaXg9e1wiKzg2XCJ9Lz5cbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+ivt+i+k+WFpemqjOivgeeggScgfV19PlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgcHJlZml4PXs8TG9ja091dGxpbmVkIGNsYXNzTmFtZT1cInNpdGUtZm9ybS1pdGVtLWljb25cIiAvPn1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6aqM6K+B56CBXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxhIGlkPVwic3RhcnRCdXR0b25cIiBvbkNsaWNrPXtzdGFydENvdW50ZG93bn0gY2xhc3NOYW1lPXtzdHlsZXNbJ2xvZ2luLWZvcm0tdmFsaWRhdGUnXX0+XG4gICAgICAgICAgICAgICAgICDojrflj5bpqozor4HnoIFcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT1cImxvZ2luLWZvcm0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgc3R5bGU9e3t3aWR0aDonMTAwJSd9fSBjbGFzc05hbWU9XCJsb2dpbi1mb3JtLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAg55m7IOW9lVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICApO1xuICAgIH1cblxuICAgIGxldCBzZWNvbmRzID0gNjA7XG4gICAgbGV0IGNvdW50ZG93blRpbWVyID0gMDtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNvdW50ZG93bigpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0QnV0dG9uJykuaW5uZXJUZXh0ID0gYOmHjeaWsOWPkemAgSgke3NlY29uZHN9cylgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKCkge1xuICAgICAgICAvLyDnpoHnlKjmjInpkq7ku6XpmLLmraLlpJrmrKHngrnlh7tcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0QnV0dG9uJykuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgIGNvdW50ZG93blRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2Vjb25kcy0tO1xuICAgICAgICAgICAgdXBkYXRlQ291bnRkb3duKCk7XG5cbiAgICAgICAgICAgIGlmIChzZWNvbmRzIDw9IDApIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGNvdW50ZG93blRpbWVyKTtcbiAgICAgICAgICAgICAgICAvLyDlgJLorqHml7bnu5PmnZ/lkI7ph43mlrDlkK/nlKjmjInpkq5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRCdXR0b24nKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNlY29uZHMgPSA2MDsgLy8g6YeN572u56eS5pWwXG4gICAgICAgICAgICAgICAgdXBkYXRlQ291bnRkb3duKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbG9naW4nXX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2xvZ2luLWNvbnRhaW5lciddfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2xvZ2luLXRvcCddfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydsb2dpbi1oZWFkZXInXX0+IFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1snbG9naW4tbG9nbyddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtMb2dvLnNyY30gd2lkdGg9ezQwfSBoZWlnaHQ9ezQwfSBhbHQ9XCJsb2dvVXRjUGljXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1snbG9naW4tdGl0bGUnXX0+VVRDIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydsb2dpbi1kZXNjJ119PlxuICAgICAgICAgICAgICAgICAg5Lq65bel5pm66IO95bel5YW3XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2xvZ2luLW1haW4nXX0+XG4gICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVLZXk9XCIxXCJcbiAgICAgICAgICAgICAgICBjZW50ZXJlZFxuICAgICAgICAgICAgICAgIGl0ZW1zPXtbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICfmiYvmnLrlj7fnmbvlvZUnLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJSZWdpc3RlcigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+LFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIkxvZ28iLCJUYWJzIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTG9ja091dGxpbmVkIiwiTG9naW4iLCJvbkZpbmlzaCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJSZWdpc3RlciIsIm5hbWUiLCJjbGFzc05hbWUiLCJpbml0aWFsVmFsdWVzIiwicmVtZW1iZXIiLCJJdGVtIiwicnVsZXMiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJwbGFjZWhvbGRlciIsInByZWZpeCIsImEiLCJpZCIsIm9uQ2xpY2siLCJzdGFydENvdW50ZG93biIsInR5cGUiLCJodG1sVHlwZSIsInN0eWxlIiwid2lkdGgiLCJzZWNvbmRzIiwiY291bnRkb3duVGltZXIiLCJ1cGRhdGVDb3VudGRvd24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJUZXh0IiwiZGlzYWJsZWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJzcGFuIiwiaW1nIiwic3JjIiwiaGVpZ2h0IiwiYWx0IiwiZGVmYXVsdEFjdGl2ZUtleSIsImNlbnRlcmVkIiwiaXRlbXMiLCJsYWJlbCIsImtleSIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/login.tsx\n"));

/***/ })

});