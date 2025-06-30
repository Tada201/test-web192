/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useRouteContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _routeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61760);


function useRouteContext() {
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_routeContext__WEBPACK_IMPORTED_MODULE_1__/* .Context */ .o);
  if (!context) {
    throw new Error("Unexpected: no Docusaurus route context found");
  }
  return context;
}


/***/ }),

/***/ 608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _theme_ThemeProvider_TitleFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95209);


function ThemeProvider({ children }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_ThemeProvider_TitleFormatter__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, children);
}


/***/ }),

/***/ 908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useDocusaurusContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27631);


function useDocusaurusContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_docusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* .Context */ .o);
}


/***/ }),

/***/ 914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Head)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80545);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};


function Head(props) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__/* .Helmet */ .mg, __spreadValues({}, props));
}


/***/ }),

/***/ 1433:
/***/ (() => {



/***/ }),

/***/ 1822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ThemedComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42517);
/* harmony import */ var _contexts_colorMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42055);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6878);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);





const AllThemes = (/* unused pure expression or super */ null && (["light", "dark"]));
function ThemedComponent({ className, children }) {
  const isBrowser = (0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  const { colorMode } = (0,_contexts_colorMode__WEBPACK_IMPORTED_MODULE_3__/* .useColorMode */ .G)();
  function getThemesToRender() {
    if (isBrowser) {
      return colorMode === "dark" ? ["dark"] : ["light"];
    }
    return ["light", "dark"];
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, getThemesToRender().map((theme) => {
    const themedElement = children({
      theme,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(className, (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().themedComponent), (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default())[`themedComponent--${theme}`])
    });
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: theme }, themedElement);
  }));
}


/***/ }),

/***/ 2075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a2: () => (/* binding */ ErrorBoundaryTryAgainButton),
/* harmony export */   bq: () => (/* binding */ ErrorBoundaryError),
/* harmony export */   k2: () => (/* binding */ ErrorCauseBoundary)
/* harmony export */ });
/* unused harmony export ErrorBoundaryErrorMessageFallback */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91096);
/* harmony import */ var _docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59350);
/* harmony import */ var _errorBoundaryUtils_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37983);
/* harmony import */ var _errorBoundaryUtils_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_errorBoundaryUtils_module_css__WEBPACK_IMPORTED_MODULE_2__);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};




function ErrorBoundaryTryAgainButton(props) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", __spreadValues({ type: "button" }, props), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { id: "theme.ErrorPageContent.tryAgain", description: "The label of the button to try again rendering when the React error boundary captures an error" }, "Try again"));
}
function ErrorBoundaryErrorMessageFallback({ error, tryAgain }) {
  return /* @__PURE__ */ React.createElement("div", { className: styles.errorBoundaryFallback }, /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement(ErrorBoundaryTryAgainButton, { onClick: tryAgain }));
}
function ErrorBoundaryError({ error }) {
  const causalChain = (0,_docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_3__/* .getErrorCausalChain */ .rA)(error);
  const fullMessage = causalChain.map((e) => e.message).join("\n\nCause:\n");
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: (_errorBoundaryUtils_module_css__WEBPACK_IMPORTED_MODULE_2___default().errorBoundaryError) }, fullMessage);
}
class ErrorCauseBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  componentDidCatch(error, errorInfo) {
    throw this.props.onError(error, errorInfo);
  }
  render() {
    return this.props.children;
  }
}


/***/ }),

/***/ 2203:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 2694:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(6925);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 2833:
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ 3228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarLogo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _theme_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23247);


function NavbarLogo() {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _theme_Logo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    {
      className: "navbar__brand",
      imageClassName: "navbar__logo",
      titleClassName: "navbar__title text--truncate"
    }
  );
}


/***/ }),

/***/ 3276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(914);
/* harmony import */ var _docusaurus_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36022);
/* harmony import */ var _docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59350);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28350);
/* harmony import */ var _routeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61760);






function ErrorDisplay({ error, tryAgain }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    minHeight: "100vh",
    width: "100%",
    maxWidth: "80ch",
    fontSize: "20px",
    margin: "0 auto",
    padding: "1rem"
  } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { style: { fontSize: "3rem" } }, "This page crashed"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", onClick: tryAgain, style: {
    margin: "1rem 0",
    fontSize: "2rem",
    cursor: "pointer",
    borderRadius: 20,
    padding: "1rem"
  } }, "Try again"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundaryError, { error }));
}
function ErrorBoundaryError({ error }) {
  const causalChain = (0,_docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_5__/* .getErrorCausalChain */ .rA)(error);
  const fullMessage = causalChain.map((e) => e.message).join("\n\nCause:\n");
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { style: { whiteSpace: "pre-wrap" } }, fullMessage);
}
function ErrorRouteContextProvider({ children }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_routeContext__WEBPACK_IMPORTED_MODULE_4__/* .RouteContextProvider */ .W, { value: {
    plugin: { name: "docusaurus-core-error-boundary", id: "default" }
  } }, children);
}
function Error({ error, tryAgain }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorRouteContextProvider, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _docusaurus_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
    {
      fallback: () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorDisplay, { error, tryAgain })
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Page Error")),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorDisplay, { error, tryAgain }))
  ));
}


/***/ }),

/***/ 3289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ FooterLinks)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80740);
/* harmony import */ var _theme_Footer_Links_MultiColumn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11273);
/* harmony import */ var _theme_Footer_Links_Simple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58920);




function FooterLinks({ links }) {
  return (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .isMultiColumnFooterLinks */ .C)(links) ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Footer_Links_MultiColumn__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { columns: links }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Footer_Links_Simple__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { links });
}


/***/ }),

/***/ 4020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IconLanguage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

function IconLanguage(_a) {
  var _b = _a, { width = 20, height = 20 } = _b, props = __objRest(_b, ["width", "height"]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "svg",
    __spreadValues({
      viewBox: "0 0 24 24",
      width,
      height,
      "aria-hidden": true
    }, props),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "path",
      {
        fill: "currentColor",
        d: "M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
      }
    )
  );
}


/***/ }),

/***/ 4052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ renderToHtml)
/* harmony export */ });
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97422);
/* harmony import */ var node_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57075);
/* harmony import */ var node_stream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_stream__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_stream_consumers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38321);
/* harmony import */ var node_stream_consumers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_stream_consumers__WEBPACK_IMPORTED_MODULE_2__);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};



function renderToHtml(app) {
  return __async(this, null, function* () {
    return new Promise((resolve, reject) => {
      const passThrough = new node_stream__WEBPACK_IMPORTED_MODULE_1__.PassThrough();
      const { pipe } = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_0__.renderToPipeableStream)(app, {
        onError(error) {
          reject(error);
        },
        onAllReady() {
          pipe(passThrough);
          (0,node_stream_consumers__WEBPACK_IMPORTED_MODULE_2__.text)(passThrough).then(resolve, reject);
        }
      });
    });
  });
}


/***/ }),

/***/ 4146:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(44363);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 4784:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "title": "My Docusaurus Site",
  "tagline": "Docs are cool",
  "url": "https://your-docusaurus-site.com",
  "baseUrl": "/docs/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "./sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          "include": [
            "**/*.md",
            "**/*.mdx"
          ]
        },
        "theme": {
          "customCss": "./src/css/custom.css"
        }
      }
    ]
  ],
  "plugins": [],
  "webpack": {},
  "themeConfig": {
    "navbar": {
      "title": "My Docusaurus Site",
      "logo": {
        "alt": "My Docusaurus Logo",
        "src": "img/logo.webp"
      },
      "items": [
        {
          "type": "docSidebar",
          "sidebarId": "tutorialSidebar",
          "position": "left",
          "label": "Tutorial"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/facebook/docusaurus",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Tutorial",
              "to": "/docs/intro"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/facebook/docusaurus"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2025 My Project, Inc. Built with Docusaurus."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "blog": {
      "sidebar": {
        "groupByYear": true
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "path": "i18n",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "future": {
    "v4": {
      "removeLegacyPostBuildHeadAttribute": false,
      "useCssCascadeLayers": false
    },
    "experimental_faster": {
      "swcJsLoader": false,
      "swcJsMinimizer": false,
      "swcHtmlMinimizer": false,
      "lightningCssMinimizer": false,
      "mdxCrossCompilerCache": false,
      "rspackBundler": false,
      "rspackPersistentCache": false,
      "ssgWorkerThreads": false
    },
    "experimental_storage": {
      "type": "localStorage",
      "namespace": false
    },
    "experimental_router": "browser"
  },
  "onBrokenAnchors": "warn",
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "themes": [],
  "scripts": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "format": "mdx",
    "mermaid": false,
    "mdx1Compat": {
      "comments": true,
      "admonitions": true,
      "headingIds": true
    },
    "anchors": {
      "maintainCase": false
    }
  }
});


/***/ }),

/***/ 5556:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) // removed by dead control flow
{ var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(2694)();
}


/***/ }),

/***/ 5832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocsVersionDropdownNavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95730);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48290);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48392);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91096);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56347);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71238);
/* harmony import */ var _theme_NavbarItem_DropdownNavbarItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19770);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};






function getVersionItems(versions, configs) {
  if (configs) {
    const versionMap = new Map(
      versions.map((version) => [version.name, version])
    );
    const toVersionItem = (name, config) => {
      var _a;
      const version = versionMap.get(name);
      if (!version) {
        throw new Error(`No docs version exist for name '${name}', please verify your 'docsVersionDropdown' navbar item versions config.
Available version names:
- ${versions.map((v) => `${v.name}`).join("\n- ")}`);
      }
      return { version, label: (_a = config == null ? void 0 : config.label) != null ? _a : version.label };
    };
    if (Array.isArray(configs)) {
      return configs.map((name) => toVersionItem(name, void 0));
    } else {
      return Object.entries(configs).map(
        ([name, config]) => toVersionItem(name, config)
      );
    }
  } else {
    return versions.map((version) => ({ version, label: version.label }));
  }
}
function useVersionItems({ docsPluginId, configs }) {
  const versions = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__/* .useVersions */ .jh)(docsPluginId);
  return getVersionItems(versions, configs);
}
function getVersionMainDoc(version) {
  return version.docs.find((doc) => doc.id === version.mainDocId);
}
function getVersionTargetDoc(version, activeDocContext) {
  var _a;
  return (_a = activeDocContext.alternateDocVersions[version.name]) != null ? _a : getVersionMainDoc(version);
}
function useDisplayedVersionItem({ docsPluginId, versionItems }) {
  var _a;
  const candidates = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__/* .useDocsVersionCandidates */ .Vd)(docsPluginId);
  const candidateItems = candidates.map((candidate) => versionItems.find((vi) => vi.version === candidate)).filter((vi) => vi !== void 0);
  return (_a = candidateItems[0]) != null ? _a : versionItems[0];
}
function DocsVersionDropdownNavbarItem(_a) {
  var _b = _a, {
    mobile,
    docsPluginId,
    dropdownActiveClassDisabled,
    dropdownItemsBefore,
    dropdownItemsAfter,
    versions: configs
  } = _b, props = __objRest(_b, [
    "mobile",
    "docsPluginId",
    "dropdownActiveClassDisabled",
    "dropdownItemsBefore",
    "dropdownItemsAfter",
    "versions"
  ]);
  const { search, hash } = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_6__/* .useLocation */ .zy)();
  const activeDocContext = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__/* .useActiveDocContext */ .zK)(docsPluginId);
  const { savePreferredVersionName } = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_7__/* .useDocsPreferredVersion */ .g1)(docsPluginId);
  const versionItems = useVersionItems({ docsPluginId, configs });
  const displayedVersionItem = useDisplayedVersionItem({
    docsPluginId,
    versionItems
  });
  function versionItemToLink({ version, label }) {
    const targetDoc = getVersionTargetDoc(version, activeDocContext);
    return {
      label,
      // preserve ?search#hash suffix on version switches
      to: `${targetDoc.path}${search}${hash}`,
      isActive: () => version === activeDocContext.activeVersion,
      onClick: () => savePreferredVersionName(version.name)
    };
  }
  const items = [
    ...dropdownItemsBefore,
    ...versionItems.map(versionItemToLink),
    ...dropdownItemsAfter
  ];
  const dropdownLabel = mobile && items.length > 1 ? (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({
    id: "theme.navbar.mobileVersionsDropdown.label",
    message: "Versions",
    description: "The label for the navbar versions dropdown on mobile view"
  }) : displayedVersionItem.label;
  const dropdownTo = mobile && items.length > 1 ? void 0 : getVersionTargetDoc(displayedVersionItem.version, activeDocContext).path;
  if (items.length <= 1) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
      __spreadProps(__spreadValues({}, props), {
        mobile,
        label: dropdownLabel,
        to: dropdownTo,
        isActive: dropdownActiveClassDisabled ? () => false : void 0
      })
    );
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _theme_NavbarItem_DropdownNavbarItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
    __spreadProps(__spreadValues({}, props), {
      mobile,
      label: dropdownLabel,
      to: dropdownTo,
      items,
      isActive: dropdownActiveClassDisabled ? () => false : void 0
    })
  );
}


/***/ }),

/***/ 6513:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-dom-server.node.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa=__webpack_require__(39023),ba=__webpack_require__(96540),k=null,l=0,q=!0;
function r(a,b){if("string"===typeof b){if(0!==b.length)if(2048<3*b.length)0<l&&(t(a,k.subarray(0,l)),k=new Uint8Array(2048),l=0),t(a,u.encode(b));else{var c=k;0<l&&(c=k.subarray(l));c=u.encodeInto(b,c);var d=c.read;l+=c.written;d<b.length&&(t(a,k),k=new Uint8Array(2048),l=u.encodeInto(b.slice(d),k).written);2048===l&&(t(a,k),k=new Uint8Array(2048),l=0)}}else 0!==b.byteLength&&(2048<b.byteLength?(0<l&&(t(a,k.subarray(0,l)),k=new Uint8Array(2048),l=0),t(a,b)):(c=k.length-l,c<b.byteLength&&(0===c?t(a,
k):(k.set(b.subarray(0,c),l),l+=c,t(a,k),b=b.subarray(c)),k=new Uint8Array(2048),l=0),k.set(b,l),l+=b.byteLength,2048===l&&(t(a,k),k=new Uint8Array(2048),l=0)))}function t(a,b){a=a.write(b);q=q&&a}function w(a,b){r(a,b);return q}function ca(a){k&&0<l&&a.write(k.subarray(0,l));k=null;l=0;q=!0}var u=new aa.TextEncoder;function x(a){return u.encode(a)}
var y=Object.prototype.hasOwnProperty,da=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ea={},fa={};
function ha(a){if(y.call(fa,a))return!0;if(y.call(ea,a))return!1;if(da.test(a))return fa[a]=!0;ea[a]=!0;return!1}function z(a,b,c,d,f,e,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=e;this.removeEmptyString=g}var A={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){A[a]=new z(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];A[b]=new z(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){A[a]=new z(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){A[a]=new z(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){A[a]=new z(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){A[a]=new z(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){A[a]=new z(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){A[a]=new z(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){A[a]=new z(a,5,!1,a.toLowerCase(),null,!1,!1)});var ia=/[\-:]([a-z])/g;function ja(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ia,
ja);A[b]=new z(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ia,ja);A[b]=new z(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ia,ja);A[b]=new z(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){A[a]=new z(a,1,!1,a.toLowerCase(),null,!1,!1)});
A.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){A[a]=new z(a,1,!1,a.toLowerCase(),null,!0,!0)});
var B={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ka=["Webkit","ms","Moz","O"];Object.keys(B).forEach(function(a){ka.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);B[b]=B[a]})});var la=/["'&<>]/;
function F(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=la.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b}a=f!==d?c+a.substring(f,d):c}return a}
var ma=/([A-Z])/g,pa=/^ms-/,qa=Array.isArray,ra=x("<script>"),sa=x("\x3c/script>"),ta=x('<script src="'),ua=x('<script type="module" src="'),va=x('" async="">\x3c/script>'),wa=/(<\/|<)(s)(cript)/gi;function xa(a,b,c,d){return""+b+("s"===c?"\\u0073":"\\u0053")+d}function G(a,b){return{insertionMode:a,selectedValue:b}}
function ya(a,b,c){switch(b){case "select":return G(1,null!=c.value?c.value:c.defaultValue);case "svg":return G(2,null);case "math":return G(3,null);case "foreignObject":return G(1,null);case "table":return G(4,null);case "thead":case "tbody":case "tfoot":return G(5,null);case "colgroup":return G(7,null);case "tr":return G(6,null)}return 4<=a.insertionMode||0===a.insertionMode?G(1,null):a}var za=x("\x3c!-- --\x3e");function Aa(a,b,c,d){if(""===b)return d;d&&a.push(za);a.push(F(b));return!0}
var Ba=new Map,Ca=x(' style="'),Da=x(":"),Ea=x(";");
function Fa(a,b,c){if("object"!==typeof c)throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");b=!0;for(var d in c)if(y.call(c,d)){var f=c[d];if(null!=f&&"boolean"!==typeof f&&""!==f){if(0===d.indexOf("--")){var e=F(d);f=F((""+f).trim())}else{e=d;var g=Ba.get(e);void 0!==g?e=g:(g=x(F(e.replace(ma,"-$1").toLowerCase().replace(pa,"-ms-"))),Ba.set(e,g),e=g);f="number"===typeof f?0===f||y.call(B,
d)?""+f:f+"px":F((""+f).trim())}b?(b=!1,a.push(Ca,e,Da,f)):a.push(Ea,e,Da,f)}}b||a.push(H)}var I=x(" "),J=x('="'),H=x('"'),Ga=x('=""');
function K(a,b,c,d){switch(c){case "style":Fa(a,b,d);return;case "defaultValue":case "defaultChecked":case "innerHTML":case "suppressContentEditableWarning":case "suppressHydrationWarning":return}if(!(2<c.length)||"o"!==c[0]&&"O"!==c[0]||"n"!==c[1]&&"N"!==c[1])if(b=A.hasOwnProperty(c)?A[c]:null,null!==b){switch(typeof d){case "function":case "symbol":return;case "boolean":if(!b.acceptsBooleans)return}c=b.attributeName;switch(b.type){case 3:d&&a.push(I,c,Ga);break;case 4:!0===d?a.push(I,c,Ga):!1!==
d&&a.push(I,c,J,F(d),H);break;case 5:isNaN(d)||a.push(I,c,J,F(d),H);break;case 6:!isNaN(d)&&1<=d&&a.push(I,c,J,F(d),H);break;default:b.sanitizeURL&&(d=""+d),a.push(I,c,J,F(d),H)}}else if(ha(c)){switch(typeof d){case "function":case "symbol":return;case "boolean":if(b=c.toLowerCase().slice(0,5),"data-"!==b&&"aria-"!==b)return}a.push(I,c,J,F(d),H)}}var L=x(">"),Ha=x("/>");
function M(a,b,c){if(null!=b){if(null!=c)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if("object"!==typeof b||!("__html"in b))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");b=b.__html;null!==b&&void 0!==b&&a.push(""+b)}}function Ia(a){var b="";ba.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}var Ja=x(' selected=""');
function Ka(a,b,c,d){a.push(N(c));var f=c=null,e;for(e in b)if(y.call(b,e)){var g=b[e];if(null!=g)switch(e){case "children":c=g;break;case "dangerouslySetInnerHTML":f=g;break;default:K(a,d,e,g)}}a.push(L);M(a,f,c);return"string"===typeof c?(a.push(F(c)),null):c}var La=x("\n"),Ma=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Na=new Map;function N(a){var b=Na.get(a);if(void 0===b){if(!Ma.test(a))throw Error("Invalid tag: "+a);b=x("<"+a);Na.set(a,b)}return b}var Oa=x("<!DOCTYPE html>");
function Pa(a,b,c,d,f){switch(b){case "select":a.push(N("select"));var e=null,g=null;for(p in c)if(y.call(c,p)){var h=c[p];if(null!=h)switch(p){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "defaultValue":case "value":break;default:K(a,d,p,h)}}a.push(L);M(a,g,e);return e;case "option":g=f.selectedValue;a.push(N("option"));var m=h=null,n=null;var p=null;for(e in c)if(y.call(c,e)){var v=c[e];if(null!=v)switch(e){case "children":h=v;break;case "selected":n=v;break;case "dangerouslySetInnerHTML":p=
v;break;case "value":m=v;default:K(a,d,e,v)}}if(null!=g)if(c=null!==m?""+m:Ia(h),qa(g))for(d=0;d<g.length;d++){if(""+g[d]===c){a.push(Ja);break}}else""+g===c&&a.push(Ja);else n&&a.push(Ja);a.push(L);M(a,p,h);return h;case "textarea":a.push(N("textarea"));p=g=e=null;for(h in c)if(y.call(c,h)&&(m=c[h],null!=m))switch(h){case "children":p=m;break;case "value":e=m;break;case "defaultValue":g=m;break;case "dangerouslySetInnerHTML":throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
default:K(a,d,h,m)}null===e&&null!==g&&(e=g);a.push(L);if(null!=p){if(null!=e)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(qa(p)&&1<p.length)throw Error("<textarea> can only have at most one child.");e=""+p}"string"===typeof e&&"\n"===e[0]&&a.push(La);null!==e&&a.push(F(""+e));return null;case "input":a.push(N("input"));m=p=h=e=null;for(g in c)if(y.call(c,g)&&(n=c[g],null!=n))switch(g){case "children":case "dangerouslySetInnerHTML":throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
case "defaultChecked":m=n;break;case "defaultValue":h=n;break;case "checked":p=n;break;case "value":e=n;break;default:K(a,d,g,n)}null!==p?K(a,d,"checked",p):null!==m&&K(a,d,"checked",m);null!==e?K(a,d,"value",e):null!==h&&K(a,d,"value",h);a.push(Ha);return null;case "menuitem":a.push(N("menuitem"));for(var C in c)if(y.call(c,C)&&(e=c[C],null!=e))switch(C){case "children":case "dangerouslySetInnerHTML":throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");default:K(a,d,C,e)}a.push(L);
return null;case "title":a.push(N("title"));e=null;for(v in c)if(y.call(c,v)&&(g=c[v],null!=g))switch(v){case "children":e=g;break;case "dangerouslySetInnerHTML":throw Error("`dangerouslySetInnerHTML` does not make sense on <title>.");default:K(a,d,v,g)}a.push(L);return e;case "listing":case "pre":a.push(N(b));g=e=null;for(m in c)if(y.call(c,m)&&(h=c[m],null!=h))switch(m){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;default:K(a,d,m,h)}a.push(L);if(null!=g){if(null!=e)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
if("object"!==typeof g||!("__html"in g))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");c=g.__html;null!==c&&void 0!==c&&("string"===typeof c&&0<c.length&&"\n"===c[0]?a.push(La,c):a.push(""+c))}"string"===typeof e&&"\n"===e[0]&&a.push(La);return e;case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":a.push(N(b));
for(var D in c)if(y.call(c,D)&&(e=c[D],null!=e))switch(D){case "children":case "dangerouslySetInnerHTML":throw Error(b+" is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:K(a,d,D,e)}a.push(Ha);return null;case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return Ka(a,c,b,d);case "html":return 0===f.insertionMode&&a.push(Oa),Ka(a,c,
b,d);default:if(-1===b.indexOf("-")&&"string"!==typeof c.is)return Ka(a,c,b,d);a.push(N(b));g=e=null;for(n in c)if(y.call(c,n)&&(h=c[n],null!=h))switch(n){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "style":Fa(a,d,h);break;case "suppressContentEditableWarning":case "suppressHydrationWarning":break;default:ha(n)&&"function"!==typeof h&&"symbol"!==typeof h&&a.push(I,n,J,F(h),H)}a.push(L);M(a,g,e);return e}}
var Qa=x("</"),Ra=x(">"),Sa=x('<template id="'),Ta=x('"></template>'),Ua=x("\x3c!--$--\x3e"),Va=x('\x3c!--$?--\x3e<template id="'),Wa=x('"></template>'),Xa=x("\x3c!--$!--\x3e"),Ya=x("\x3c!--/$--\x3e"),Za=x("<template"),$a=x('"'),ab=x(' data-dgst="');x(' data-msg="');x(' data-stck="');var bb=x("></template>");function cb(a,b,c){r(a,Va);if(null===c)throw Error("An ID must have been assigned before we can complete the boundary.");r(a,c);return w(a,Wa)}
var db=x('<div hidden id="'),eb=x('">'),fb=x("</div>"),gb=x('<svg aria-hidden="true" style="display:none" id="'),hb=x('">'),ib=x("</svg>"),jb=x('<math aria-hidden="true" style="display:none" id="'),kb=x('">'),lb=x("</math>"),mb=x('<table hidden id="'),nb=x('">'),ob=x("</table>"),pb=x('<table hidden><tbody id="'),qb=x('">'),rb=x("</tbody></table>"),sb=x('<table hidden><tr id="'),tb=x('">'),ub=x("</tr></table>"),vb=x('<table hidden><colgroup id="'),wb=x('">'),xb=x("</colgroup></table>");
function yb(a,b,c,d){switch(c.insertionMode){case 0:case 1:return r(a,db),r(a,b.segmentPrefix),r(a,d.toString(16)),w(a,eb);case 2:return r(a,gb),r(a,b.segmentPrefix),r(a,d.toString(16)),w(a,hb);case 3:return r(a,jb),r(a,b.segmentPrefix),r(a,d.toString(16)),w(a,kb);case 4:return r(a,mb),r(a,b.segmentPrefix),r(a,d.toString(16)),w(a,nb);case 5:return r(a,pb),r(a,b.segmentPrefix),r(a,d.toString(16)),w(a,qb);case 6:return r(a,sb),r(a,b.segmentPrefix),r(a,d.toString(16)),w(a,tb);case 7:return r(a,vb),r(a,
b.segmentPrefix),r(a,d.toString(16)),w(a,wb);default:throw Error("Unknown insertion mode. This is a bug in React.");}}function zb(a,b){switch(b.insertionMode){case 0:case 1:return w(a,fb);case 2:return w(a,ib);case 3:return w(a,lb);case 4:return w(a,ob);case 5:return w(a,rb);case 6:return w(a,ub);case 7:return w(a,xb);default:throw Error("Unknown insertion mode. This is a bug in React.");}}
var Ab=x('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),Bb=x('$RS("'),Cb=x('","'),Db=x('")\x3c/script>'),Fb=x('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),
Gb=x('$RC("'),Hb=x('","'),Ib=x('")\x3c/script>'),Jb=x('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),Kb=x('$RX("'),Lb=x('"'),Mb=x(")\x3c/script>"),Nb=x(","),Ob=/[<\u2028\u2029]/g;
function Pb(a){return JSON.stringify(a).replace(Ob,function(a){switch(a){case "<":return"\\u003c";case "\u2028":return"\\u2028";case "\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");}})}
var O=Object.assign,Qb=Symbol.for("react.element"),Rb=Symbol.for("react.portal"),Sb=Symbol.for("react.fragment"),Tb=Symbol.for("react.strict_mode"),Ub=Symbol.for("react.profiler"),Vb=Symbol.for("react.provider"),Wb=Symbol.for("react.context"),Xb=Symbol.for("react.forward_ref"),Yb=Symbol.for("react.suspense"),Zb=Symbol.for("react.suspense_list"),$b=Symbol.for("react.memo"),ac=Symbol.for("react.lazy"),bc=Symbol.for("react.scope"),cc=Symbol.for("react.debug_trace_mode"),dc=Symbol.for("react.legacy_hidden"),
ec=Symbol.for("react.default_value"),fc=Symbol.iterator;
function gc(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Sb:return"Fragment";case Rb:return"Portal";case Ub:return"Profiler";case Tb:return"StrictMode";case Yb:return"Suspense";case Zb:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Wb:return(a.displayName||"Context")+".Consumer";case Vb:return(a._context.displayName||"Context")+".Provider";case Xb:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case $b:return b=a.displayName||null,null!==b?b:gc(a.type)||"Memo";case ac:b=a._payload;a=a._init;try{return gc(a(b))}catch(c){}}return null}var hc={};function ic(a,b){a=a.contextTypes;if(!a)return hc;var c={},d;for(d in a)c[d]=b[d];return c}var P=null;
function Q(a,b){if(a!==b){a.context._currentValue=a.parentValue;a=a.parent;var c=b.parent;if(null===a){if(null!==c)throw Error("The stacks must reach the root at the same time. This is a bug in React.");}else{if(null===c)throw Error("The stacks must reach the root at the same time. This is a bug in React.");Q(a,c)}b.context._currentValue=b.value}}function jc(a){a.context._currentValue=a.parentValue;a=a.parent;null!==a&&jc(a)}
function kc(a){var b=a.parent;null!==b&&kc(b);a.context._currentValue=a.value}function lc(a,b){a.context._currentValue=a.parentValue;a=a.parent;if(null===a)throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");a.depth===b.depth?Q(a,b):lc(a,b)}
function mc(a,b){var c=b.parent;if(null===c)throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");a.depth===c.depth?Q(a,c):mc(a,c);b.context._currentValue=b.value}function nc(a){var b=P;b!==a&&(null===b?kc(a):null===a?jc(b):b.depth===a.depth?Q(b,a):b.depth>a.depth?lc(b,a):mc(b,a),P=a)}
var oc={isMounted:function(){return!1},enqueueSetState:function(a,b){a=a._reactInternals;null!==a.queue&&a.queue.push(b)},enqueueReplaceState:function(a,b){a=a._reactInternals;a.replace=!0;a.queue=[b]},enqueueForceUpdate:function(){}};
function pc(a,b,c,d){var f=void 0!==a.state?a.state:null;a.updater=oc;a.props=c;a.state=f;var e={queue:[],replace:!1};a._reactInternals=e;var g=b.contextType;a.context="object"===typeof g&&null!==g?g._currentValue:d;g=b.getDerivedStateFromProps;"function"===typeof g&&(g=g(c,f),f=null===g||void 0===g?f:O({},f,g),a.state=f);if("function"!==typeof b.getDerivedStateFromProps&&"function"!==typeof a.getSnapshotBeforeUpdate&&("function"===typeof a.UNSAFE_componentWillMount||"function"===typeof a.componentWillMount))if(b=
a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),b!==a.state&&oc.enqueueReplaceState(a,a.state,null),null!==e.queue&&0<e.queue.length)if(b=e.queue,g=e.replace,e.queue=null,e.replace=!1,g&&1===b.length)a.state=b[0];else{e=g?b[0]:a.state;f=!0;for(g=g?1:0;g<b.length;g++){var h=b[g];h="function"===typeof h?h.call(a,e,c,d):h;null!=h&&(f?(f=!1,e=O({},e,h)):O(e,h))}a.state=e}else e.queue=null}
var qc={id:1,overflow:""};function rc(a,b,c){var d=a.id;a=a.overflow;var f=32-sc(d)-1;d&=~(1<<f);c+=1;var e=32-sc(b)+f;if(30<e){var g=f-f%5;e=(d&(1<<g)-1).toString(32);d>>=g;f-=g;return{id:1<<32-sc(b)+f|c<<f|d,overflow:e+a}}return{id:1<<e|c<<f|d,overflow:a}}var sc=Math.clz32?Math.clz32:tc,uc=Math.log,vc=Math.LN2;function tc(a){a>>>=0;return 0===a?32:31-(uc(a)/vc|0)|0}function wc(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var xc="function"===typeof Object.is?Object.is:wc,R=null,yc=null,zc=null,S=null,T=!1,Ac=!1,U=0,V=null,Bc=0;
function W(){if(null===R)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");return R}
function Cc(){if(0<Bc)throw Error("Rendered more hooks than during the previous render");return{memoizedState:null,queue:null,next:null}}function Dc(){null===S?null===zc?(T=!1,zc=S=Cc()):(T=!0,S=zc):null===S.next?(T=!1,S=S.next=Cc()):(T=!0,S=S.next);return S}function Ec(){yc=R=null;Ac=!1;zc=null;Bc=0;S=V=null}function Fc(a,b){return"function"===typeof b?b(a):b}
function Gc(a,b,c){R=W();S=Dc();if(T){var d=S.queue;b=d.dispatch;if(null!==V&&(c=V.get(d),void 0!==c)){V.delete(d);d=S.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);S.memoizedState=d;return[d,b]}return[S.memoizedState,b]}a=a===Fc?"function"===typeof b?b():b:void 0!==c?c(b):b;S.memoizedState=a;a=S.queue={last:null,dispatch:null};a=a.dispatch=Hc.bind(null,R,a);return[S.memoizedState,a]}
function Ic(a,b){R=W();S=Dc();b=void 0===b?null:b;if(null!==S){var c=S.memoizedState;if(null!==c&&null!==b){var d=c[1];a:if(null===d)d=!1;else{for(var f=0;f<d.length&&f<b.length;f++)if(!xc(b[f],d[f])){d=!1;break a}d=!0}if(d)return c[0]}}a=a();S.memoizedState=[a,b];return a}
function Hc(a,b,c){if(25<=Bc)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(a===R)if(Ac=!0,a={action:c,next:null},null===V&&(V=new Map),c=V.get(b),void 0===c)V.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}}function Jc(){throw Error("startTransition cannot be called during server rendering.");}function Kc(){}
var Mc={readContext:function(a){return a._currentValue},useContext:function(a){W();return a._currentValue},useMemo:Ic,useReducer:Gc,useRef:function(a){R=W();S=Dc();var b=S.memoizedState;return null===b?(a={current:a},S.memoizedState=a):b},useState:function(a){return Gc(Fc,a)},useInsertionEffect:Kc,useLayoutEffect:function(){},useCallback:function(a,b){return Ic(function(){return a},b)},useImperativeHandle:Kc,useEffect:Kc,useDebugValue:Kc,useDeferredValue:function(a){W();return a},useTransition:function(){W();
return[!1,Jc]},useId:function(){var a=yc.treeContext;var b=a.overflow;a=a.id;a=(a&~(1<<32-sc(a)-1)).toString(32)+b;var c=Lc;if(null===c)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");b=U++;a=":"+c.idPrefix+"R"+a;0<b&&(a+="H"+b.toString(32));return a+":"},useMutableSource:function(a,b){W();return b(a._source)},useSyncExternalStore:function(a,b,c){if(void 0===c)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
return c()}},Lc=null,Nc=ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function Oc(a){console.error(a);return null}function X(){}function Pc(a,b){var c=a.pingedTasks;c.push(b);1===c.length&&setImmediate(function(){return Qc(a)})}
function Rc(a,b,c,d,f,e,g,h){a.allPendingTasks++;null===c?a.pendingRootTasks++:c.pendingTasks++;var m={node:b,ping:function(){return Pc(a,m)},blockedBoundary:c,blockedSegment:d,abortSet:f,legacyContext:e,context:g,treeContext:h};f.add(m);return m}function Sc(a,b,c,d,f,e){return{status:0,id:-1,index:b,parentFlushed:!1,chunks:[],children:[],formatContext:d,boundary:c,lastPushedText:f,textEmbedded:e}}
function Y(a,b){a=a.onError(b);if(null!=a&&"string"!==typeof a)throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof a+'" instead');return a}function Tc(a,b){var c=a.onShellError;c(b);c=a.onFatalError;c(b);null!==a.destination?(a.status=2,a.destination.destroy(b)):(a.status=1,a.fatalError=b)}
function Uc(a,b,c,d,f){R={};yc=b;U=0;for(a=c(d,f);Ac;)Ac=!1,U=0,Bc+=1,S=null,a=c(d,f);Ec();return a}function Vc(a,b,c,d){var f=c.render(),e=d.childContextTypes;if(null!==e&&void 0!==e){var g=b.legacyContext;if("function"!==typeof c.getChildContext)d=g;else{c=c.getChildContext();for(var h in c)if(!(h in e))throw Error((gc(d)||"Unknown")+'.getChildContext(): key "'+h+'" is not defined in childContextTypes.');d=O({},g,c)}b.legacyContext=d;Z(a,b,f);b.legacyContext=g}else Z(a,b,f)}
function Wc(a,b){if(a&&a.defaultProps){b=O({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}
function Xc(a,b,c,d,f){if("function"===typeof c)if(c.prototype&&c.prototype.isReactComponent){f=ic(c,b.legacyContext);var e=c.contextType;e=new c(d,"object"===typeof e&&null!==e?e._currentValue:f);pc(e,c,d,f);Vc(a,b,e,c)}else{e=ic(c,b.legacyContext);f=Uc(a,b,c,d,e);var g=0!==U;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof)pc(f,c,d,e),Vc(a,b,f,c);else if(g){d=b.treeContext;b.treeContext=rc(d,1,0);try{Z(a,b,f)}finally{b.treeContext=d}}else Z(a,b,f)}else if("string"===
typeof c){f=b.blockedSegment;e=Pa(f.chunks,c,d,a.responseState,f.formatContext);f.lastPushedText=!1;g=f.formatContext;f.formatContext=ya(g,c,d);Yc(a,b,e);f.formatContext=g;switch(c){case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "input":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":break;default:f.chunks.push(Qa,c,Ra)}f.lastPushedText=!1}else{switch(c){case dc:case cc:case Tb:case Ub:case Sb:Z(a,b,d.children);return;case Zb:Z(a,
b,d.children);return;case bc:throw Error("ReactDOMServer does not yet support scope components.");case Yb:a:{c=b.blockedBoundary;f=b.blockedSegment;e=d.fallback;d=d.children;g=new Set;var h={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:g,errorDigest:null},m=Sc(a,f.chunks.length,h,f.formatContext,!1,!1);f.children.push(m);f.lastPushedText=!1;var n=Sc(a,0,null,f.formatContext,!1,!1);n.parentFlushed=!0;b.blockedBoundary=
h;b.blockedSegment=n;try{if(Yc(a,b,d),n.lastPushedText&&n.textEmbedded&&n.chunks.push(za),n.status=1,Zc(h,n),0===h.pendingTasks)break a}catch(p){n.status=4,h.forceClientRender=!0,h.errorDigest=Y(a,p)}finally{b.blockedBoundary=c,b.blockedSegment=f}b=Rc(a,e,c,m,g,b.legacyContext,b.context,b.treeContext);a.pingedTasks.push(b)}return}if("object"===typeof c&&null!==c)switch(c.$$typeof){case Xb:d=Uc(a,b,c.render,d,f);if(0!==U){c=b.treeContext;b.treeContext=rc(c,1,0);try{Z(a,b,d)}finally{b.treeContext=c}}else Z(a,
b,d);return;case $b:c=c.type;d=Wc(c,d);Xc(a,b,c,d,f);return;case Vb:f=d.children;c=c._context;d=d.value;e=c._currentValue;c._currentValue=d;g=P;P=d={parent:g,depth:null===g?0:g.depth+1,context:c,parentValue:e,value:d};b.context=d;Z(a,b,f);a=P;if(null===a)throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");d=a.parentValue;a.context._currentValue=d===ec?a.context._defaultValue:d;a=P=a.parent;b.context=a;return;case Wb:d=d.children;d=d(c._currentValue);Z(a,b,d);return;
case ac:f=c._init;c=f(c._payload);d=Wc(c,d);Xc(a,b,c,d,void 0);return}throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+((null==c?c:typeof c)+"."));}}
function Z(a,b,c){b.node=c;if("object"===typeof c&&null!==c){switch(c.$$typeof){case Qb:Xc(a,b,c.type,c.props,c.ref);return;case Rb:throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");case ac:var d=c._init;c=d(c._payload);Z(a,b,c);return}if(qa(c)){$c(a,b,c);return}null===c||"object"!==typeof c?d=null:(d=fc&&c[fc]||c["@@iterator"],d="function"===typeof d?d:null);if(d&&(d=d.call(c))){c=d.next();if(!c.done){var f=
[];do f.push(c.value),c=d.next();while(!c.done);$c(a,b,f)}return}a=Object.prototype.toString.call(c);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===a?"object with keys {"+Object.keys(c).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");}"string"===typeof c?(d=b.blockedSegment,d.lastPushedText=Aa(b.blockedSegment.chunks,c,a.responseState,d.lastPushedText)):"number"===typeof c&&(d=b.blockedSegment,d.lastPushedText=Aa(b.blockedSegment.chunks,
""+c,a.responseState,d.lastPushedText))}function $c(a,b,c){for(var d=c.length,f=0;f<d;f++){var e=b.treeContext;b.treeContext=rc(e,d,f);try{Yc(a,b,c[f])}finally{b.treeContext=e}}}
function Yc(a,b,c){var d=b.blockedSegment.formatContext,f=b.legacyContext,e=b.context;try{return Z(a,b,c)}catch(m){if(Ec(),"object"===typeof m&&null!==m&&"function"===typeof m.then){c=m;var g=b.blockedSegment,h=Sc(a,g.chunks.length,null,g.formatContext,g.lastPushedText,!0);g.children.push(h);g.lastPushedText=!1;a=Rc(a,b.node,b.blockedBoundary,h,b.abortSet,b.legacyContext,b.context,b.treeContext).ping;c.then(a,a);b.blockedSegment.formatContext=d;b.legacyContext=f;b.context=e;nc(e)}else throw b.blockedSegment.formatContext=
d,b.legacyContext=f,b.context=e,nc(e),m;}}function ad(a){var b=a.blockedBoundary;a=a.blockedSegment;a.status=3;bd(this,b,a)}
function cd(a,b,c){var d=a.blockedBoundary;a.blockedSegment.status=3;null===d?(b.allPendingTasks--,2!==b.status&&(b.status=2,null!==b.destination&&b.destination.end())):(d.pendingTasks--,d.forceClientRender||(d.forceClientRender=!0,d.errorDigest=b.onError(void 0===c?Error("The render was aborted by the server without a reason."):c),d.parentFlushed&&b.clientRenderedBoundaries.push(d)),d.fallbackAbortableTasks.forEach(function(a){return cd(a,b,c)}),d.fallbackAbortableTasks.clear(),b.allPendingTasks--,
0===b.allPendingTasks&&(a=b.onAllReady,a()))}function Zc(a,b){if(0===b.chunks.length&&1===b.children.length&&null===b.children[0].boundary){var c=b.children[0];c.id=b.id;c.parentFlushed=!0;1===c.status&&Zc(a,c)}else a.completedSegments.push(b)}
function bd(a,b,c){if(null===b){if(c.parentFlushed){if(null!==a.completedRootSegment)throw Error("There can only be one root segment. This is a bug in React.");a.completedRootSegment=c}a.pendingRootTasks--;0===a.pendingRootTasks&&(a.onShellError=X,b=a.onShellReady,b())}else b.pendingTasks--,b.forceClientRender||(0===b.pendingTasks?(c.parentFlushed&&1===c.status&&Zc(b,c),b.parentFlushed&&a.completedBoundaries.push(b),b.fallbackAbortableTasks.forEach(ad,a),b.fallbackAbortableTasks.clear()):c.parentFlushed&&
1===c.status&&(Zc(b,c),1===b.completedSegments.length&&b.parentFlushed&&a.partialBoundaries.push(b)));a.allPendingTasks--;0===a.allPendingTasks&&(a=a.onAllReady,a())}
function Qc(a){if(2!==a.status){var b=P,c=Nc.current;Nc.current=Mc;var d=Lc;Lc=a.responseState;try{var f=a.pingedTasks,e;for(e=0;e<f.length;e++){var g=f[e];var h=a,m=g.blockedSegment;if(0===m.status){nc(g.context);try{Z(h,g,g.node),m.lastPushedText&&m.textEmbedded&&m.chunks.push(za),g.abortSet.delete(g),m.status=1,bd(h,g.blockedBoundary,m)}catch(E){if(Ec(),"object"===typeof E&&null!==E&&"function"===typeof E.then){var n=g.ping;E.then(n,n)}else{g.abortSet.delete(g);m.status=4;var p=g.blockedBoundary,
v=E,C=Y(h,v);null===p?Tc(h,v):(p.pendingTasks--,p.forceClientRender||(p.forceClientRender=!0,p.errorDigest=C,p.parentFlushed&&h.clientRenderedBoundaries.push(p)));h.allPendingTasks--;if(0===h.allPendingTasks){var D=h.onAllReady;D()}}}finally{}}}f.splice(0,e);null!==a.destination&&dd(a,a.destination)}catch(E){Y(a,E),Tc(a,E)}finally{Lc=d,Nc.current=c,c===Mc&&nc(b)}}}
function ed(a,b,c){c.parentFlushed=!0;switch(c.status){case 0:var d=c.id=a.nextSegmentId++;c.lastPushedText=!1;c.textEmbedded=!1;a=a.responseState;r(b,Sa);r(b,a.placeholderPrefix);a=d.toString(16);r(b,a);return w(b,Ta);case 1:c.status=2;var f=!0;d=c.chunks;var e=0;c=c.children;for(var g=0;g<c.length;g++){for(f=c[g];e<f.index;e++)r(b,d[e]);f=fd(a,b,f)}for(;e<d.length-1;e++)r(b,d[e]);e<d.length&&(f=w(b,d[e]));return f;default:throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
}}
function fd(a,b,c){var d=c.boundary;if(null===d)return ed(a,b,c);d.parentFlushed=!0;if(d.forceClientRender)d=d.errorDigest,w(b,Xa),r(b,Za),d&&(r(b,ab),r(b,F(d)),r(b,$a)),w(b,bb),ed(a,b,c);else if(0<d.pendingTasks){d.rootSegmentID=a.nextSegmentId++;0<d.completedSegments.length&&a.partialBoundaries.push(d);var f=a.responseState;var e=f.nextSuspenseID++;f=x(f.boundaryPrefix+e.toString(16));d=d.id=f;cb(b,a.responseState,d);ed(a,b,c)}else if(d.byteSize>a.progressiveChunkSize)d.rootSegmentID=a.nextSegmentId++,a.completedBoundaries.push(d),
cb(b,a.responseState,d.id),ed(a,b,c);else{w(b,Ua);c=d.completedSegments;if(1!==c.length)throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");fd(a,b,c[0])}return w(b,Ya)}function gd(a,b,c){yb(b,a.responseState,c.formatContext,c.id);fd(a,b,c);return zb(b,c.formatContext)}
function hd(a,b,c){for(var d=c.completedSegments,f=0;f<d.length;f++)id(a,b,c,d[f]);d.length=0;a=a.responseState;d=c.id;c=c.rootSegmentID;r(b,a.startInlineScript);a.sentCompleteBoundaryFunction?r(b,Gb):(a.sentCompleteBoundaryFunction=!0,r(b,Fb));if(null===d)throw Error("An ID must have been assigned before we can complete the boundary.");c=c.toString(16);r(b,d);r(b,Hb);r(b,a.segmentPrefix);r(b,c);return w(b,Ib)}
function id(a,b,c,d){if(2===d.status)return!0;var f=d.id;if(-1===f){if(-1===(d.id=c.rootSegmentID))throw Error("A root segment ID must have been assigned by now. This is a bug in React.");return gd(a,b,d)}gd(a,b,d);a=a.responseState;r(b,a.startInlineScript);a.sentCompleteSegmentFunction?r(b,Bb):(a.sentCompleteSegmentFunction=!0,r(b,Ab));r(b,a.segmentPrefix);f=f.toString(16);r(b,f);r(b,Cb);r(b,a.placeholderPrefix);r(b,f);return w(b,Db)}
function dd(a,b){k=new Uint8Array(2048);l=0;q=!0;try{var c=a.completedRootSegment;if(null!==c&&0===a.pendingRootTasks){fd(a,b,c);a.completedRootSegment=null;var d=a.responseState.bootstrapChunks;for(c=0;c<d.length-1;c++)r(b,d[c]);c<d.length&&w(b,d[c])}var f=a.clientRenderedBoundaries,e;for(e=0;e<f.length;e++){var g=f[e];d=b;var h=a.responseState,m=g.id,n=g.errorDigest,p=g.errorMessage,v=g.errorComponentStack;r(d,h.startInlineScript);h.sentClientRenderFunction?r(d,Kb):(h.sentClientRenderFunction=!0,
r(d,Jb));if(null===m)throw Error("An ID must have been assigned before we can complete the boundary.");r(d,m);r(d,Lb);if(n||p||v)r(d,Nb),r(d,Pb(n||""));if(p||v)r(d,Nb),r(d,Pb(p||""));v&&(r(d,Nb),r(d,Pb(v)));if(!w(d,Mb)){a.destination=null;e++;f.splice(0,e);return}}f.splice(0,e);var C=a.completedBoundaries;for(e=0;e<C.length;e++)if(!hd(a,b,C[e])){a.destination=null;e++;C.splice(0,e);return}C.splice(0,e);ca(b);k=new Uint8Array(2048);l=0;q=!0;var D=a.partialBoundaries;for(e=0;e<D.length;e++){var E=D[e];
a:{f=a;g=b;var na=E.completedSegments;for(h=0;h<na.length;h++)if(!id(f,g,E,na[h])){h++;na.splice(0,h);var Eb=!1;break a}na.splice(0,h);Eb=!0}if(!Eb){a.destination=null;e++;D.splice(0,e);return}}D.splice(0,e);var oa=a.completedBoundaries;for(e=0;e<oa.length;e++)if(!hd(a,b,oa[e])){a.destination=null;e++;oa.splice(0,e);return}oa.splice(0,e)}finally{ca(b),"function"===typeof b.flush&&b.flush(),0===a.allPendingTasks&&0===a.pingedTasks.length&&0===a.clientRenderedBoundaries.length&&0===a.completedBoundaries.length&&
b.end()}}function jd(a){setImmediate(function(){return Qc(a)})}function kd(a,b){if(1===a.status)a.status=2,b.destroy(a.fatalError);else if(2!==a.status&&null===a.destination){a.destination=b;try{dd(a,b)}catch(c){Y(a,c),Tc(a,c)}}}function ld(a,b){try{var c=a.abortableTasks;c.forEach(function(c){return cd(c,a,b)});c.clear();null!==a.destination&&dd(a,a.destination)}catch(d){Y(a,d),Tc(a,d)}}function md(a,b){return function(){return kd(b,a)}}function nd(a,b){return function(){return ld(a,b)}}
function od(a,b){var c=b?b.identifierPrefix:void 0,d=b?b.nonce:void 0,f=b?b.bootstrapScriptContent:void 0,e=b?b.bootstrapScripts:void 0;var g=b?b.bootstrapModules:void 0;c=void 0===c?"":c;d=void 0===d?ra:x('<script nonce="'+F(d)+'">');var h=[];void 0!==f&&h.push(d,(""+f).replace(wa,xa),sa);if(void 0!==e)for(f=0;f<e.length;f++)h.push(ta,F(e[f]),va);if(void 0!==g)for(e=0;e<g.length;e++)h.push(ua,F(g[e]),va);g={bootstrapChunks:h,startInlineScript:d,placeholderPrefix:x(c+"P:"),segmentPrefix:x(c+"S:"),
boundaryPrefix:c+"B:",idPrefix:c,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1};e=b?b.namespaceURI:void 0;e=G("http://www.w3.org/2000/svg"===e?2:"http://www.w3.org/1998/Math/MathML"===e?3:0,null);f=b?b.progressiveChunkSize:void 0;d=b?b.onError:void 0;h=b?b.onAllReady:void 0;var m=b?b.onShellReady:void 0,n=b?b.onShellError:void 0;b=[];c=new Set;g={destination:null,responseState:g,progressiveChunkSize:void 0===f?12800:f,status:0,fatalError:null,
nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:c,pingedTasks:b,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:void 0===d?Oc:d,onAllReady:void 0===h?X:h,onShellReady:void 0===m?X:m,onShellError:void 0===n?X:n,onFatalError:X};e=Sc(g,0,null,e,!1,!1);e.parentFlushed=!0;a=Rc(g,a,null,e,c,hc,null,qc);b.push(a);return g}
exports.renderToPipeableStream=function(a,b){var c=od(a,b),d=!1;jd(c);return{pipe:function(a){if(d)throw Error("React currently only supports piping to one writable stream.");d=!0;kd(c,a);a.on("drain",md(a,c));a.on("error",nd(c,Error("The destination stream errored while writing data.")));a.on("close",nd(c,Error("The destination stream closed early.")));return a},abort:function(a){ld(c,a)}}};exports.version="18.3.1";


/***/ }),

/***/ 6878:
/***/ ((module) => {

// Exports
module.exports = {
	"themedComponent": `themedComponent_mlkZ`,
	"themedComponent--light": `themedComponent--light_NVdE`,
	"themedComponent--dark": `themedComponent--dark_xIcU`
};


/***/ }),

/***/ 6925:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 8244:
/***/ ((module) => {

// Exports
module.exports = {
	"iconLanguage": `iconLanguage_nlXk`
};


/***/ }),

/***/ 10650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

function Loading({ error, retry, pastDelay }) {
  if (error) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
      textAlign: "center",
      color: "#fff",
      backgroundColor: "#fa383e",
      borderColor: "#fa383e",
      borderStyle: "solid",
      borderRadius: "0.25rem",
      borderWidth: "1px",
      boxSizing: "border-box",
      display: "block",
      padding: "1rem",
      flex: "0 0 50%",
      marginLeft: "25%",
      marginRight: "25%",
      marginTop: "5rem",
      maxWidth: "50%",
      width: "100%"
    } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, String(error)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", onClick: retry }, "Retry")));
  }
  if (pastDelay) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { id: "loader", style: {
      width: 128,
      height: 110,
      position: "absolute",
      top: "calc(100vh - 64%)"
    }, viewBox: "0 0 45 45", xmlns: "http://www.w3.org/2000/svg", stroke: "#61dafb" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", { fill: "none", fillRule: "evenodd", transform: "translate(1 1)", strokeWidth: "2" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "22", cy: "22", r: "6", strokeOpacity: "0" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("animate", { attributeName: "r", begin: "1.5s", dur: "3s", values: "6;22", calcMode: "linear", repeatCount: "indefinite" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("animate", { attributeName: "stroke-opacity", begin: "1.5s", dur: "3s", values: "1;0", calcMode: "linear", repeatCount: "indefinite" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("animate", { attributeName: "stroke-width", begin: "1.5s", dur: "3s", values: "2;0", calcMode: "linear", repeatCount: "indefinite" })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "22", cy: "22", r: "6", strokeOpacity: "0" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("animate", { attributeName: "r", begin: "3s", dur: "3s", values: "6;22", calcMode: "linear", repeatCount: "indefinite" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("animate", { attributeName: "stroke-opacity", begin: "3s", dur: "3s", values: "1;0", calcMode: "linear", repeatCount: "indefinite" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("animate", { attributeName: "stroke-width", begin: "3s", dur: "3s", values: "2;0", calcMode: "linear", repeatCount: "indefinite" })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "22", cy: "22", r: "8" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("animate", { attributeName: "r", begin: "0s", dur: "1.5s", values: "6;1;2;3;4;5;6", calcMode: "linear", repeatCount: "indefinite" })))));
  }
  return null;
}


/***/ }),

/***/ 11273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ FooterLinksMultiColumn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62513);
/* harmony import */ var _theme_Footer_LinkItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40059);




function ColumnLinkItem({ item }) {
  var _a;
  return item.html ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "li",
    {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)("footer__item", item.className),
      dangerouslySetInnerHTML: { __html: item.html }
    }
  ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { key: (_a = item.href) != null ? _a : item.to, className: "footer__item" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Footer_LinkItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { item }));
}
function Column({ column }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(
        _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .ThemeClassNames */ .G.layout.footer.column,
        "col footer__col",
        column.className
      )
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "footer__title" }, column.title),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: "footer__items clean-list" }, column.items.map((item, i) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ColumnLinkItem, { key: i, item })))
  );
}
function FooterLinksMultiColumn({ columns }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row footer__links" }, columns.map((column, i) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Column, { key: i, column })));
}


/***/ }),

/***/ 11561:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ invariant)
/* harmony export */ });
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
}




/***/ }),

/***/ 12388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sb: () => (/* binding */ uniq)
/* harmony export */ });
/* unused harmony exports duplicates, groupBy */
function duplicates(arr, comparator = (a, b) => a === b) {
  return arr.filter((v, vIndex) => arr.findIndex((u) => comparator(u, v)) !== vIndex);
}
function uniq(arr) {
  return Array.from(new Set(arr));
}
function groupBy(items, keySelector) {
  var _a;
  const result = {};
  let index = 0;
  for (const item of items) {
    const key = keySelector(item, index);
    (_a = result[key]) != null ? _a : result[key] = [];
    result[key].push(item);
    index += 1;
  }
  return result;
}


/***/ }),

/***/ 12451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ DEFAULT_PLUGIN_ID)
/* harmony export */ });
const DEFAULT_PLUGIN_ID = "default";


/***/ }),

/***/ 12615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ preload)
/* harmony export */ });
/* harmony import */ var _generated_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97272);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22831);


function preload(pathname) {
  const matches = Array.from(/* @__PURE__ */ new Set([pathname, decodeURI(pathname)])).map((p) => (0,react_router_config__WEBPACK_IMPORTED_MODULE_1__/* .matchRoutes */ .u)(_generated_routes__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, p)).flat();
  return Promise.all(matches.map((match) => {
    var _a, _b;
    return (_b = (_a = match.route.component).preload) == null ? void 0 : _b.call(_a);
  }));
}


/***/ }),

/***/ 13277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ComponentCreator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53259);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _generated_routesChunkNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84054);
/* harmony import */ var _generated_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26861);
/* harmony import */ var _theme_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10650);
/* harmony import */ var _flat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50563);
/* harmony import */ var _routeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61760);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};







function ComponentCreator(path, hash) {
  if (path === "*") {
    return react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
      loading: _theme_Loading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
      loader: () => __webpack_require__.e(/* import() */ 931).then(__webpack_require__.bind(__webpack_require__, 11931)),
      modules: ["@theme/NotFound"],
      webpack: () => [/*require.resolve*/(11931)],
      render(loaded, props) {
        const NotFound = loaded.default;
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _routeContext__WEBPACK_IMPORTED_MODULE_5__/* .RouteContextProvider */ .W,
          {
            value: { plugin: { name: "native", id: "default" } }
          },
          /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(NotFound, __spreadValues({}, props))
        );
      }
    });
  }
  const chunkNames = _generated_routesChunkNames__WEBPACK_IMPORTED_MODULE_2__[`${path}-${hash}`];
  const loader = {};
  const modules = [];
  const optsWebpack = [];
  const flatChunkNames = (0,_flat__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(chunkNames);
  Object.entries(flatChunkNames).forEach(([keyPath, chunkName]) => {
    const chunkRegistry = _generated_registry__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A[chunkName];
    if (chunkRegistry) {
      loader[keyPath] = chunkRegistry[0];
      modules.push(chunkRegistry[1]);
      optsWebpack.push(chunkRegistry[2]);
    }
  });
  return react_loadable__WEBPACK_IMPORTED_MODULE_1___default().Map({
    loading: _theme_Loading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
    loader,
    modules,
    webpack: () => optsWebpack,
    render(loaded, props) {
      const loadedModules = JSON.parse(JSON.stringify(chunkNames));
      Object.entries(loaded).forEach(([keyPath, loadedModule]) => {
        const chunk = loadedModule.default;
        if (!chunk) {
          throw new Error(`The page component at ${path} doesn't have a default export. This makes it impossible to render anything. Consider default-exporting a React component.`);
        }
        if (typeof chunk === "object" || typeof chunk === "function") {
          Object.keys(loadedModule).filter((k) => k !== "default").forEach((nonDefaultKey) => {
            chunk[nonDefaultKey] = loadedModule[nonDefaultKey];
          });
        }
        let val = loadedModules;
        const keyPaths = keyPath.split(".");
        keyPaths.slice(0, -1).forEach((k) => {
          val = val[k];
        });
        val[keyPaths[keyPaths.length - 1]] = chunk;
      });
      const Component = loadedModules.__comp;
      delete loadedModules.__comp;
      const routeContext = loadedModules.__context;
      delete loadedModules.__context;
      const routeProps = loadedModules.__props;
      delete loadedModules.__props;
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_routeContext__WEBPACK_IMPORTED_MODULE_5__/* .RouteContextProvider */ .W, { value: routeContext }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __spreadValues(__spreadValues(__spreadValues({}, loadedModules), routeProps), props)));
    }
  });
}


/***/ }),

/***/ 13763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ useWindowSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93099);


const windowSizes = {
  desktop: "desktop",
  mobile: "mobile",
  ssr: "ssr"
};
const DesktopBreakpoint = 996;
function getWindowSize(desktopBreakpoint) {
  if (!_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.canUseDOM) {
    throw new Error("getWindowSize() should only be called after React hydration");
  }
  return window.innerWidth > desktopBreakpoint ? windowSizes.desktop : windowSizes.mobile;
}
function useWindowSize({ desktopBreakpoint = DesktopBreakpoint } = {}) {
  const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => (
    // super important to return a constant value to avoid hydration mismatch
    // see https://github.com/facebook/docusaurus/issues/9379
    "ssr"
  ));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function updateWindowSize() {
      setWindowSize(getWindowSize(desktopBreakpoint));
    }
    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, [desktopBreakpoint]);
  return windowSize;
}


/***/ }),

/***/ 14138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ FooterLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62513);



function FooterLayout({ style, links, logo, copyright }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "footer",
    {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .ThemeClassNames */ .G.layout.footer.container, "footer", {
        "footer--dark": style === "dark"
      })
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "container container-fluid" }, links, (logo || copyright) && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "footer__bottom text--center" }, logo && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "margin-bottom--sm" }, logo), copyright))
  );
}


/***/ }),

/***/ 15287:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;exports.act=X;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=X;exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};
exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return U.current.useTransition()};exports.version="18.3.1";


/***/ }),

/***/ 15497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarColorModeToggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74728);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42055);
/* harmony import */ var _theme_ColorModeToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86640);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83127);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);




function NavbarColorModeToggle({ className }) {
  const navbarStyle = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .useThemeConfig */ .p)().navbar.style;
  const { disableSwitch, respectPrefersColorScheme } = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .useThemeConfig */ .p)().colorMode;
  const { colorModeChoice, setColorMode } = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .useColorMode */ .G)();
  if (disableSwitch) {
    return null;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _theme_ColorModeToggle__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    {
      className,
      buttonClassName: navbarStyle === "dark" ? (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().darkNavbarColorModeToggle) : void 0,
      respectPrefersColorScheme,
      value: colorModeChoice,
      onChange: setColorMode
    }
  );
}


/***/ }),

/***/ 16017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ useKeyboardNavigation),
/* harmony export */   w: () => (/* binding */ keyboardFocusedClassName)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1433);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);


const keyboardFocusedClassName = "navigation-with-keyboard";
function useKeyboardNavigation() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function handleOutlineStyles(e) {
      if (e.type === "keydown" && e.key === "Tab") {
        document.body.classList.add(keyboardFocusedClassName);
      }
      if (e.type === "mousedown") {
        document.body.classList.remove(keyboardFocusedClassName);
      }
    }
    document.addEventListener("keydown", handleOutlineStyles);
    document.addEventListener("mousedown", handleOutlineStyles);
    return () => {
      document.body.classList.remove(keyboardFocusedClassName);
      document.removeEventListener("keydown", handleOutlineStyles);
      document.removeEventListener("mousedown", handleOutlineStyles);
    };
  }, []);
}


/***/ }),

/***/ 17227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useBrokenLinks)
/* harmony export */ });
/* harmony import */ var _BrokenLinksContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72213);

function useBrokenLinks() {
  return (0,_BrokenLinksContext__WEBPACK_IMPORTED_MODULE_0__/* .useBrokenLinksContext */ .B6)();
}


/***/ }),

/***/ 17639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ DocsVersionProvider),
/* harmony export */   r: () => (/* binding */ useDocsVersion)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31450);


const Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
function DocsVersionProvider({ children, version }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, { value: version }, children);
}
function useDocsVersion() {
  const version = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
  if (version === null) {
    throw new _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__/* .ReactContextError */ .dV("DocsVersionProvider");
  }
  return version;
}


/***/ }),

/***/ 18389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SearchMetadata)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(914);


function SearchMetadata({ locale, version, tag }) {
  const language = locale;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, locale && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { name: "docusaurus_locale", content: locale }), version && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { name: "docusaurus_version", content: version }), tag && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { name: "docusaurus_tag", content: tag }), language && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { name: "docsearch:language", content: language }), version && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { name: "docsearch:version", content: version }), tag && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { name: "docsearch:docusaurus_tag", content: tag }));
}


/***/ }),

/***/ 18689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ interpolate)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

function interpolate(text, values) {
  const segments = text.split(/(\{\w+\})/).map((seg, index) => {
    if (index % 2 === 1) {
      const value = values == null ? void 0 : values[seg.slice(1, -1)];
      if (value !== void 0) {
        return value;
      }
    }
    return seg;
  });
  if (segments.some((seg) => (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(seg))) {
    return segments.map((seg, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(seg) ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(seg, { key: index }) : seg).filter((seg) => seg !== "");
  }
  return segments.join("");
}
function Interpolate({ children, values }) {
  if (typeof children !== "string") {
    throw new Error(`The Docusaurus <Interpolate> component only accept simple string values. Received: ${isValidElement(children) ? "React element" : typeof children}`);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, interpolate(children, values));
}


/***/ }),

/***/ 18923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CA: () => (/* binding */ getLatestVersion),
/* harmony export */   QA: () => (/* binding */ getDocVersionSuggestions),
/* harmony export */   Yz: () => (/* binding */ getActiveDocContext),
/* harmony export */   uX: () => (/* binding */ getActivePlugin)
/* harmony export */ });
/* unused harmony export getActiveVersion */
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56347);

function getActivePlugin(allPluginData, pathname, options = {}) {
  const activeEntry = Object.entries(allPluginData).sort((a, b) => b[1].path.localeCompare(a[1].path)).find(([, pluginData]) => !!(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_0__/* .matchPath */ .B6)(pathname, {
    path: pluginData.path,
    exact: false,
    strict: false
  }));
  const activePlugin = activeEntry ? { pluginId: activeEntry[0], pluginData: activeEntry[1] } : void 0;
  if (!activePlugin && options.failfast) {
    throw new Error(`Can't find active docs plugin for "${pathname}" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(allPluginData).map((plugin) => plugin.path).join(", ")}`);
  }
  return activePlugin;
}
const getLatestVersion = (data) => data.versions.find((version) => version.isLast);
function getActiveVersion(data, pathname) {
  const sortedVersions = [...data.versions].sort((a, b) => {
    if (a.path === b.path) {
      return 0;
    }
    if (a.path.includes(b.path)) {
      return -1;
    }
    if (b.path.includes(a.path)) {
      return 1;
    }
    return 0;
  });
  return sortedVersions.find((version) => !!(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_0__/* .matchPath */ .B6)(pathname, {
    path: version.path,
    exact: false,
    strict: false
  }));
}
function getActiveDocContext(data, pathname) {
  const activeVersion = getActiveVersion(data, pathname);
  const activeDoc = activeVersion == null ? void 0 : activeVersion.docs.find((doc) => !!(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_0__/* .matchPath */ .B6)(pathname, {
    path: doc.path,
    exact: true,
    strict: false
  }));
  function getAlternateVersionDocs(docId) {
    const result = {};
    data.versions.forEach((version) => {
      version.docs.forEach((doc) => {
        if (doc.id === docId) {
          result[version.name] = doc;
        }
      });
    });
    return result;
  }
  const alternateVersionDocs = activeDoc ? getAlternateVersionDocs(activeDoc.id) : {};
  return {
    activeVersion,
    activeDoc,
    alternateDocVersions: alternateVersionDocs
  };
}
function getDocVersionSuggestions(data, pathname) {
  const latestVersion = getLatestVersion(data);
  const activeDocContext = getActiveDocContext(data, pathname);
  const latestDocSuggestion = activeDocContext.alternateDocVersions[latestVersion.name];
  return { latestDocSuggestion, latestVersionSuggestion: latestVersion };
}


/***/ }),

/***/ 19634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Root)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

function Root({ children }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children);
}


/***/ }),

/***/ 19758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ normalizeLocation)
/* harmony export */ });
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22831);
/* harmony import */ var _generated_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97272);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));


const pathnames = /* @__PURE__ */ new Map();
function normalizeLocation(location) {
  if (pathnames.has(location.pathname)) {
    return __spreadProps(__spreadValues({}, location), {
      pathname: pathnames.get(location.pathname)
    });
  }
  const matchedRoutes = (0,react_router_config__WEBPACK_IMPORTED_MODULE_1__/* .matchRoutes */ .u)(_generated_routes__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, location.pathname);
  if (matchedRoutes.some(({ route }) => route.exact === true)) {
    pathnames.set(location.pathname, location.pathname);
    return location;
  }
  const pathname = location.pathname.trim().replace(/(?:\/index)?\.html$/, "") || "/";
  pathnames.set(location.pathname, pathname);
  return __spreadProps(__spreadValues({}, location), {
    pathname
  });
}


/***/ }),

/***/ 19770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DropdownNavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _theme_NavbarItem_DropdownNavbarItem_Mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31853);
/* harmony import */ var _theme_NavbarItem_DropdownNavbarItem_Desktop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77209);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};



function DropdownNavbarItem(_a) {
  var _b = _a, { mobile = false } = _b, props = __objRest(_b, ["mobile"]);
  const Comp = mobile ? _theme_NavbarItem_DropdownNavbarItem_Mobile__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A : _theme_NavbarItem_DropdownNavbarItem_Desktop__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp, __spreadValues({}, props));
}


/***/ }),

/***/ 21162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mq: () => (/* binding */ useScrollPosition),
/* harmony export */   Tv: () => (/* binding */ ScrollControllerProvider),
/* harmony export */   gk: () => (/* binding */ useSmoothScrollTo)
/* harmony export */ });
/* unused harmony exports useScrollController, useScrollPositionBlocker */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93099);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42517);
/* harmony import */ var _docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24759);
/* harmony import */ var _reactUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31450);





function useScrollControllerContextValue() {
  const scrollEventsEnabledRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    scrollEventsEnabledRef,
    enableScrollEvents: () => {
      scrollEventsEnabledRef.current = true;
    },
    disableScrollEvents: () => {
      scrollEventsEnabledRef.current = false;
    }
  }), []);
}
const ScrollMonitorContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);
function ScrollControllerProvider({ children }) {
  const value = useScrollControllerContextValue();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ScrollMonitorContext.Provider, { value }, children);
}
function useScrollController() {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ScrollMonitorContext);
  if (context == null) {
    throw new _reactUtils__WEBPACK_IMPORTED_MODULE_4__/* .ReactContextError */ .dV("ScrollControllerProvider");
  }
  return context;
}
const getScrollPosition = () => _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.canUseDOM ? {
  scrollX: window.pageXOffset,
  scrollY: window.pageYOffset
} : null;
function useScrollPosition(effect, deps = []) {
  const { scrollEventsEnabledRef } = useScrollController();
  const lastPositionRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(getScrollPosition());
  const dynamicEffect = (0,_reactUtils__WEBPACK_IMPORTED_MODULE_4__/* .useEvent */ ._q)(effect);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleScroll = () => {
      if (!scrollEventsEnabledRef.current) {
        return;
      }
      const currentPosition = getScrollPosition();
      dynamicEffect(currentPosition, lastPositionRef.current);
      lastPositionRef.current = currentPosition;
    };
    const opts = {
      passive: true
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, opts);
    return () => window.removeEventListener("scroll", handleScroll, opts);
  }, [dynamicEffect, scrollEventsEnabledRef, ...deps]);
}
function useScrollPositionSaver() {
  const lastElementRef = useRef({
    elem: null,
    top: 0
  });
  const save = useCallback((elem) => {
    lastElementRef.current = {
      elem,
      top: elem.getBoundingClientRect().top
    };
  }, []);
  const restore = useCallback(() => {
    const { current: { elem, top } } = lastElementRef;
    if (!elem) {
      return { restored: false };
    }
    const newTop = elem.getBoundingClientRect().top;
    const heightDiff = newTop - top;
    if (heightDiff) {
      window.scrollBy({ left: 0, top: heightDiff });
    }
    lastElementRef.current = { elem: null, top: 0 };
    return { restored: heightDiff !== 0 };
  }, []);
  return useMemo(() => ({ save, restore }), [restore, save]);
}
function useScrollPositionBlocker() {
  const scrollController = useScrollController();
  const scrollPositionSaver = useScrollPositionSaver();
  const nextLayoutEffectCallbackRef = useRef(void 0);
  const blockElementScrollPositionUntilNextRender = useCallback((el) => {
    scrollPositionSaver.save(el);
    scrollController.disableScrollEvents();
    nextLayoutEffectCallbackRef.current = () => {
      const { restored } = scrollPositionSaver.restore();
      nextLayoutEffectCallbackRef.current = void 0;
      if (restored) {
        const handleScrollRestoreEvent = () => {
          scrollController.enableScrollEvents();
          window.removeEventListener("scroll", handleScrollRestoreEvent);
        };
        window.addEventListener("scroll", handleScrollRestoreEvent);
      } else {
        scrollController.enableScrollEvents();
      }
    };
  }, [scrollController, scrollPositionSaver]);
  useIsomorphicLayoutEffect(() => {
    queueMicrotask(() => {
      var _a;
      return (_a = nextLayoutEffectCallbackRef.current) == null ? void 0 : _a.call(nextLayoutEffectCallbackRef);
    });
  });
  return {
    blockElementScrollPositionUntilNextRender
  };
}
function smoothScrollNative(top) {
  window.scrollTo({ top, behavior: "smooth" });
  return () => {
  };
}
function smoothScrollPolyfill(top) {
  let raf = null;
  const isUpScroll = document.documentElement.scrollTop > top;
  function rafRecursion() {
    const currentScroll = document.documentElement.scrollTop;
    if (isUpScroll && currentScroll > top || !isUpScroll && currentScroll < top) {
      raf = requestAnimationFrame(rafRecursion);
      window.scrollTo(0, Math.floor((currentScroll - top) * 0.85) + top);
    }
  }
  rafRecursion();
  return () => raf && cancelAnimationFrame(raf);
}
function useSmoothScrollTo() {
  const cancelRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isBrowser = (0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
  const supportsNativeSmoothScrolling = isBrowser && getComputedStyle(document.documentElement).scrollBehavior === "smooth";
  return {
    startScroll: (top) => {
      cancelRef.current = supportsNativeSmoothScrolling ? smoothScrollNative(top) : smoothScrollPolyfill(top);
    },
    cancelScroll: () => {
      var _a;
      return (_a = cancelRef.current) == null ? void 0 : _a.call(cancelRef);
    }
  };
}


/***/ }),

/***/ 22654:
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ 22692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ useLockBodyScroll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

function useLockBodyScroll(lock = true) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.body.style.overflow = lock ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [lock]);
}


/***/ }),

/***/ 22754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AnnouncementBarContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74728);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89034);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));




function AnnouncementBarContent(props) {
  const { announcementBar } = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .useThemeConfig */ .p)();
  const { content } = announcementBar;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    __spreadProps(__spreadValues({}, props), {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)((_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().content), props.className),
      dangerouslySetInnerHTML: { __html: content }
    })
  );
}


/***/ }),

/***/ 22799:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 22804:
/***/ ((module) => {

// Exports
module.exports = {
	"announcementBar": `announcementBar_mb4j`,
	"announcementBarPlaceholder": `announcementBarPlaceholder_vyr4`,
	"announcementBarClose": `announcementBarClose_gvF7`,
	"announcementBarContent": `announcementBarContent_xLdY`
};


/***/ }),

/***/ 22831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ matchRoutes),
/* harmony export */   v: () => (/* binding */ renderRoutes)
/* harmony export */ });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56347);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);




function matchRoutes(routes, pathname,
/*not public API*/
branch) {
  if (branch === void 0) {
    branch = [];
  }

  routes.some(function (route) {
    var match = route.path ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__/* .matchPath */ .B6)(pathname, route) : branch.length ? branch[branch.length - 1].match // use parent match
    : react_router__WEBPACK_IMPORTED_MODULE_1__/* .Router */ .Ix.computeRootMatch(pathname); // use default "root" match

    if (match) {
      branch.push({
        route: route,
        match: match
      });

      if (route.routes) {
        matchRoutes(route.routes, pathname, branch);
      }
    }

    return match;
  });
  return branch;
}

function renderRoutes(routes, extraProps, switchProps) {
  if (extraProps === void 0) {
    extraProps = {};
  }

  if (switchProps === void 0) {
    switchProps = {};
  }

  return routes ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__/* .Switch */ .dO, switchProps, routes.map(function (route, i) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__/* .Route */ .qh, {
      key: route.key || i,
      path: route.path,
      exact: route.exact,
      strict: route.strict,
      render: function render(props) {
        return route.render ? route.render((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, {}, extraProps, {
          route: route
        })) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, extraProps, {
          route: route
        }));
      }
    });
  })) : null;
}


//# sourceMappingURL=react-router-config.js.map


/***/ }),

/***/ 23247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46100);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97951);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(908);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74728);
/* harmony import */ var _theme_ThemedImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81700);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};






function LogoThemedImage({ logo, alt, imageClassName }) {
  const sources = {
    light: (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)(logo.src),
    dark: (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)(logo.srcDark || logo.src)
  };
  const themedImage = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _theme_ThemedImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
    {
      className: logo.className,
      sources,
      height: logo.height,
      width: logo.width,
      alt,
      style: logo.style
    }
  );
  return imageClassName ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: imageClassName }, themedImage) : themedImage;
}
function Logo(props) {
  var _b;
  const {
    siteConfig: { title }
  } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();
  const {
    navbar: { title: navbarTitle, logo }
  } = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .useThemeConfig */ .p)();
  const _a = props, { imageClassName, titleClassName } = _a, propsRest = __objRest(_a, ["imageClassName", "titleClassName"]);
  const logoLink = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)((logo == null ? void 0 : logo.href) || "/");
  const fallbackAlt = navbarTitle ? "" : title;
  const alt = (_b = logo == null ? void 0 : logo.alt) != null ? _b : fallbackAlt;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    __spreadValues(__spreadValues({
      to: logoLink
    }, propsRest), (logo == null ? void 0 : logo.target) && { target: logo.target }),
    logo && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      LogoThemedImage,
      {
        logo,
        alt,
        imageClassName
      }
    ),
    navbarTitle != null && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", { className: titleClassName }, navbarTitle)
  );
}


/***/ }),

/***/ 24180:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"N":"localStorage","M":""}');

/***/ }),

/***/ 24759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93099);


const useIsomorphicLayoutEffect = _ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.canUseDOM ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsomorphicLayoutEffect);


/***/ }),

/***/ 25321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ toPageCollectedMetadataInternal)
/* harmony export */ });
function getBuildMetaTags(helmet) {
  var _a;
  const metaElements = (_a = helmet.meta.toComponent()) != null ? _a : [];
  return metaElements.map((el) => el.props);
}
function isNoIndexTag(tag) {
  if (!tag.name || !tag.content) {
    return false;
  }
  return (
    // meta name is not case-sensitive
    tag.name.toLowerCase() === "robots" && // Robots directives are not case-sensitive
    tag.content.toLowerCase().includes("noindex")
  );
}
function toPageCollectedMetadataInternal({ helmet }) {
  const tags = getBuildMetaTags(helmet);
  const noIndex = tags.some(isNoIndexTag);
  return {
    helmet,
    // TODO Docusaurus v4 remove
    public: {
      noIndex
    },
    internal: {
      htmlAttributes: helmet.htmlAttributes.toString(),
      bodyAttributes: helmet.bodyAttributes.toString(),
      title: helmet.title.toString(),
      meta: helmet.meta.toString(),
      link: helmet.link.toString(),
      script: helmet.script.toString()
    }
  };
}


/***/ }),

/***/ 25543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ prefersReducedMotion)
/* harmony export */ });
function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}


/***/ }),

/***/ 26711:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-dom-server-legacy.node.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ea=__webpack_require__(96540),fa=__webpack_require__(2203),n=Object.prototype.hasOwnProperty,ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia={},ja={};
function ka(a){if(n.call(ja,a))return!0;if(n.call(ia,a))return!1;if(ha.test(a))return ja[a]=!0;ia[a]=!0;return!1}function q(a,b,c,d,f,e,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=e;this.removeEmptyString=g}var r={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){r[a]=new q(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];r[b]=new q(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){r[a]=new q(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){r[a]=new q(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){r[a]=new q(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){r[a]=new q(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){r[a]=new q(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){r[a]=new q(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){r[a]=new q(a,5,!1,a.toLowerCase(),null,!1,!1)});var la=/[\-:]([a-z])/g;function ma(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(la,
ma);r[b]=new q(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(la,ma);r[b]=new q(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(la,ma);r[b]=new q(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){r[a]=new q(a,1,!1,a.toLowerCase(),null,!1,!1)});
r.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){r[a]=new q(a,1,!1,a.toLowerCase(),null,!0,!0)});
var t={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},na=["Webkit","ms","Moz","O"];Object.keys(t).forEach(function(a){na.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);t[b]=t[a]})});var oa=/["'&<>]/;
function u(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=oa.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b}a=f!==d?c+a.substring(f,d):c}return a}var pa=/([A-Z])/g,qa=/^ms-/,ra=Array.isArray;function v(a,b){return{insertionMode:a,selectedValue:b}}
function sa(a,b,c){switch(b){case "select":return v(1,null!=c.value?c.value:c.defaultValue);case "svg":return v(2,null);case "math":return v(3,null);case "foreignObject":return v(1,null);case "table":return v(4,null);case "thead":case "tbody":case "tfoot":return v(5,null);case "colgroup":return v(7,null);case "tr":return v(6,null)}return 4<=a.insertionMode||0===a.insertionMode?v(1,null):a}var ta=new Map;
function ua(a,b,c){if("object"!==typeof c)throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");b=!0;for(var d in c)if(n.call(c,d)){var f=c[d];if(null!=f&&"boolean"!==typeof f&&""!==f){if(0===d.indexOf("--")){var e=u(d);f=u((""+f).trim())}else{e=d;var g=ta.get(e);void 0!==g?e=g:(g=u(e.replace(pa,"-$1").toLowerCase().replace(qa,"-ms-")),ta.set(e,g),e=g);f="number"===typeof f?0===f||n.call(t,
d)?""+f:f+"px":u((""+f).trim())}b?(b=!1,a.push(' style="',e,":",f)):a.push(";",e,":",f)}}b||a.push('"')}
function w(a,b,c,d){switch(c){case "style":ua(a,b,d);return;case "defaultValue":case "defaultChecked":case "innerHTML":case "suppressContentEditableWarning":case "suppressHydrationWarning":return}if(!(2<c.length)||"o"!==c[0]&&"O"!==c[0]||"n"!==c[1]&&"N"!==c[1])if(b=r.hasOwnProperty(c)?r[c]:null,null!==b){switch(typeof d){case "function":case "symbol":return;case "boolean":if(!b.acceptsBooleans)return}c=b.attributeName;switch(b.type){case 3:d&&a.push(" ",c,'=""');break;case 4:!0===d?a.push(" ",c,'=""'):
!1!==d&&a.push(" ",c,'="',u(d),'"');break;case 5:isNaN(d)||a.push(" ",c,'="',u(d),'"');break;case 6:!isNaN(d)&&1<=d&&a.push(" ",c,'="',u(d),'"');break;default:b.sanitizeURL&&(d=""+d),a.push(" ",c,'="',u(d),'"')}}else if(ka(c)){switch(typeof d){case "function":case "symbol":return;case "boolean":if(b=c.toLowerCase().slice(0,5),"data-"!==b&&"aria-"!==b)return}a.push(" ",c,'="',u(d),'"')}}
function x(a,b,c){if(null!=b){if(null!=c)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if("object"!==typeof b||!("__html"in b))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");b=b.__html;null!==b&&void 0!==b&&a.push(""+b)}}function va(a){var b="";ea.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function wa(a,b,c,d){a.push(z(c));var f=c=null,e;for(e in b)if(n.call(b,e)){var g=b[e];if(null!=g)switch(e){case "children":c=g;break;case "dangerouslySetInnerHTML":f=g;break;default:w(a,d,e,g)}}a.push(">");x(a,f,c);return"string"===typeof c?(a.push(u(c)),null):c}var xa=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,ya=new Map;function z(a){var b=ya.get(a);if(void 0===b){if(!xa.test(a))throw Error("Invalid tag: "+a);b="<"+a;ya.set(a,b)}return b}
function za(a,b,c,d,f){switch(b){case "select":a.push(z("select"));var e=null,g=null;for(l in c)if(n.call(c,l)){var h=c[l];if(null!=h)switch(l){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "defaultValue":case "value":break;default:w(a,d,l,h)}}a.push(">");x(a,g,e);return e;case "option":g=f.selectedValue;a.push(z("option"));var k=h=null,m=null;var l=null;for(e in c)if(n.call(c,e)){var p=c[e];if(null!=p)switch(e){case "children":h=p;break;case "selected":m=p;break;case "dangerouslySetInnerHTML":l=
p;break;case "value":k=p;default:w(a,d,e,p)}}if(null!=g)if(c=null!==k?""+k:va(h),ra(g))for(d=0;d<g.length;d++){if(""+g[d]===c){a.push(' selected=""');break}}else""+g===c&&a.push(' selected=""');else m&&a.push(' selected=""');a.push(">");x(a,l,h);return h;case "textarea":a.push(z("textarea"));l=g=e=null;for(h in c)if(n.call(c,h)&&(k=c[h],null!=k))switch(h){case "children":l=k;break;case "value":e=k;break;case "defaultValue":g=k;break;case "dangerouslySetInnerHTML":throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
default:w(a,d,h,k)}null===e&&null!==g&&(e=g);a.push(">");if(null!=l){if(null!=e)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(ra(l)&&1<l.length)throw Error("<textarea> can only have at most one child.");e=""+l}"string"===typeof e&&"\n"===e[0]&&a.push("\n");null!==e&&a.push(u(""+e));return null;case "input":a.push(z("input"));k=l=h=e=null;for(g in c)if(n.call(c,g)&&(m=c[g],null!=m))switch(g){case "children":case "dangerouslySetInnerHTML":throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
case "defaultChecked":k=m;break;case "defaultValue":h=m;break;case "checked":l=m;break;case "value":e=m;break;default:w(a,d,g,m)}null!==l?w(a,d,"checked",l):null!==k&&w(a,d,"checked",k);null!==e?w(a,d,"value",e):null!==h&&w(a,d,"value",h);a.push("/>");return null;case "menuitem":a.push(z("menuitem"));for(var B in c)if(n.call(c,B)&&(e=c[B],null!=e))switch(B){case "children":case "dangerouslySetInnerHTML":throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");default:w(a,d,B,
e)}a.push(">");return null;case "title":a.push(z("title"));e=null;for(p in c)if(n.call(c,p)&&(g=c[p],null!=g))switch(p){case "children":e=g;break;case "dangerouslySetInnerHTML":throw Error("`dangerouslySetInnerHTML` does not make sense on <title>.");default:w(a,d,p,g)}a.push(">");return e;case "listing":case "pre":a.push(z(b));g=e=null;for(k in c)if(n.call(c,k)&&(h=c[k],null!=h))switch(k){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;default:w(a,d,k,h)}a.push(">");if(null!=g){if(null!=
e)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if("object"!==typeof g||!("__html"in g))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");c=g.__html;null!==c&&void 0!==c&&("string"===typeof c&&0<c.length&&"\n"===c[0]?a.push("\n",c):a.push(""+c))}"string"===typeof e&&"\n"===e[0]&&a.push("\n");return e;case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":a.push(z(b));
for(var C in c)if(n.call(c,C)&&(e=c[C],null!=e))switch(C){case "children":case "dangerouslySetInnerHTML":throw Error(b+" is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:w(a,d,C,e)}a.push("/>");return null;case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return wa(a,c,b,d);case "html":return 0===f.insertionMode&&a.push("<!DOCTYPE html>"),
wa(a,c,b,d);default:if(-1===b.indexOf("-")&&"string"!==typeof c.is)return wa(a,c,b,d);a.push(z(b));g=e=null;for(m in c)if(n.call(c,m)&&(h=c[m],null!=h))switch(m){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "style":ua(a,d,h);break;case "suppressContentEditableWarning":case "suppressHydrationWarning":break;default:ka(m)&&"function"!==typeof h&&"symbol"!==typeof h&&a.push(" ",m,'="',u(h),'"')}a.push(">");x(a,g,e);return e}}
function Aa(a,b,c){a.push('\x3c!--$?--\x3e<template id="');if(null===c)throw Error("An ID must have been assigned before we can complete the boundary.");a.push(c);return a.push('"></template>')}
function Ba(a,b,c,d){switch(c.insertionMode){case 0:case 1:return a.push('<div hidden id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 2:return a.push('<svg aria-hidden="true" style="display:none" id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 3:return a.push('<math aria-hidden="true" style="display:none" id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 4:return a.push('<table hidden id="'),a.push(b.segmentPrefix),
b=d.toString(16),a.push(b),a.push('">');case 5:return a.push('<table hidden><tbody id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 6:return a.push('<table hidden><tr id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 7:return a.push('<table hidden><colgroup id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');default:throw Error("Unknown insertion mode. This is a bug in React.");}}
function Ca(a,b){switch(b.insertionMode){case 0:case 1:return a.push("</div>");case 2:return a.push("</svg>");case 3:return a.push("</math>");case 4:return a.push("</table>");case 5:return a.push("</tbody></table>");case 6:return a.push("</tr></table>");case 7:return a.push("</colgroup></table>");default:throw Error("Unknown insertion mode. This is a bug in React.");}}var Da=/[<\u2028\u2029]/g;
function Ea(a){return JSON.stringify(a).replace(Da,function(a){switch(a){case "<":return"\\u003c";case "\u2028":return"\\u2028";case "\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");}})}
function Fa(a,b){b=void 0===b?"":b;return{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:b+"P:",segmentPrefix:b+"S:",boundaryPrefix:b+"B:",idPrefix:b,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:a}}function Ga(){return{insertionMode:1,selectedValue:null}}function Ha(a,b,c,d){if(c.generateStaticMarkup)return a.push(u(b)),!1;""===b?a=d:(d&&a.push("\x3c!-- --\x3e"),a.push(u(b)),a=!0);return a}
var A=Object.assign,Ia=Symbol.for("react.element"),Ja=Symbol.for("react.portal"),Ka=Symbol.for("react.fragment"),La=Symbol.for("react.strict_mode"),Ma=Symbol.for("react.profiler"),Na=Symbol.for("react.provider"),Oa=Symbol.for("react.context"),Pa=Symbol.for("react.forward_ref"),Qa=Symbol.for("react.suspense"),Ra=Symbol.for("react.suspense_list"),Sa=Symbol.for("react.memo"),Ta=Symbol.for("react.lazy"),Ua=Symbol.for("react.scope"),Va=Symbol.for("react.debug_trace_mode"),Wa=Symbol.for("react.legacy_hidden"),
Xa=Symbol.for("react.default_value"),Ya=Symbol.iterator;
function Za(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Ka:return"Fragment";case Ja:return"Portal";case Ma:return"Profiler";case La:return"StrictMode";case Qa:return"Suspense";case Ra:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Oa:return(a.displayName||"Context")+".Consumer";case Na:return(a._context.displayName||"Context")+".Provider";case Pa:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Sa:return b=a.displayName||null,null!==b?b:Za(a.type)||"Memo";case Ta:b=a._payload;a=a._init;try{return Za(a(b))}catch(c){}}return null}var $a={};function ab(a,b){a=a.contextTypes;if(!a)return $a;var c={},d;for(d in a)c[d]=b[d];return c}var D=null;
function E(a,b){if(a!==b){a.context._currentValue2=a.parentValue;a=a.parent;var c=b.parent;if(null===a){if(null!==c)throw Error("The stacks must reach the root at the same time. This is a bug in React.");}else{if(null===c)throw Error("The stacks must reach the root at the same time. This is a bug in React.");E(a,c)}b.context._currentValue2=b.value}}function bb(a){a.context._currentValue2=a.parentValue;a=a.parent;null!==a&&bb(a)}
function cb(a){var b=a.parent;null!==b&&cb(b);a.context._currentValue2=a.value}function db(a,b){a.context._currentValue2=a.parentValue;a=a.parent;if(null===a)throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");a.depth===b.depth?E(a,b):db(a,b)}
function eb(a,b){var c=b.parent;if(null===c)throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");a.depth===c.depth?E(a,c):eb(a,c);b.context._currentValue2=b.value}function F(a){var b=D;b!==a&&(null===b?cb(a):null===a?bb(b):b.depth===a.depth?E(b,a):b.depth>a.depth?db(b,a):eb(b,a),D=a)}
var fb={isMounted:function(){return!1},enqueueSetState:function(a,b){a=a._reactInternals;null!==a.queue&&a.queue.push(b)},enqueueReplaceState:function(a,b){a=a._reactInternals;a.replace=!0;a.queue=[b]},enqueueForceUpdate:function(){}};
function gb(a,b,c,d){var f=void 0!==a.state?a.state:null;a.updater=fb;a.props=c;a.state=f;var e={queue:[],replace:!1};a._reactInternals=e;var g=b.contextType;a.context="object"===typeof g&&null!==g?g._currentValue2:d;g=b.getDerivedStateFromProps;"function"===typeof g&&(g=g(c,f),f=null===g||void 0===g?f:A({},f,g),a.state=f);if("function"!==typeof b.getDerivedStateFromProps&&"function"!==typeof a.getSnapshotBeforeUpdate&&("function"===typeof a.UNSAFE_componentWillMount||"function"===typeof a.componentWillMount))if(b=
a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),b!==a.state&&fb.enqueueReplaceState(a,a.state,null),null!==e.queue&&0<e.queue.length)if(b=e.queue,g=e.replace,e.queue=null,e.replace=!1,g&&1===b.length)a.state=b[0];else{e=g?b[0]:a.state;f=!0;for(g=g?1:0;g<b.length;g++){var h=b[g];h="function"===typeof h?h.call(a,e,c,d):h;null!=h&&(f?(f=!1,e=A({},e,h)):A(e,h))}a.state=e}else e.queue=null}
var hb={id:1,overflow:""};function ib(a,b,c){var d=a.id;a=a.overflow;var f=32-G(d)-1;d&=~(1<<f);c+=1;var e=32-G(b)+f;if(30<e){var g=f-f%5;e=(d&(1<<g)-1).toString(32);d>>=g;f-=g;return{id:1<<32-G(b)+f|c<<f|d,overflow:e+a}}return{id:1<<e|c<<f|d,overflow:a}}var G=Math.clz32?Math.clz32:jb,kb=Math.log,lb=Math.LN2;function jb(a){a>>>=0;return 0===a?32:31-(kb(a)/lb|0)|0}function mb(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var nb="function"===typeof Object.is?Object.is:mb,H=null,ob=null,I=null,J=null,K=!1,L=!1,M=0,N=null,O=0;
function P(){if(null===H)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");return H}
function rb(){if(0<O)throw Error("Rendered more hooks than during the previous render");return{memoizedState:null,queue:null,next:null}}function sb(){null===J?null===I?(K=!1,I=J=rb()):(K=!0,J=I):null===J.next?(K=!1,J=J.next=rb()):(K=!0,J=J.next);return J}function tb(){ob=H=null;L=!1;I=null;O=0;J=N=null}function ub(a,b){return"function"===typeof b?b(a):b}
function vb(a,b,c){H=P();J=sb();if(K){var d=J.queue;b=d.dispatch;if(null!==N&&(c=N.get(d),void 0!==c)){N.delete(d);d=J.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);J.memoizedState=d;return[d,b]}return[J.memoizedState,b]}a=a===ub?"function"===typeof b?b():b:void 0!==c?c(b):b;J.memoizedState=a;a=J.queue={last:null,dispatch:null};a=a.dispatch=wb.bind(null,H,a);return[J.memoizedState,a]}
function xb(a,b){H=P();J=sb();b=void 0===b?null:b;if(null!==J){var c=J.memoizedState;if(null!==c&&null!==b){var d=c[1];a:if(null===d)d=!1;else{for(var f=0;f<d.length&&f<b.length;f++)if(!nb(b[f],d[f])){d=!1;break a}d=!0}if(d)return c[0]}}a=a();J.memoizedState=[a,b];return a}
function wb(a,b,c){if(25<=O)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(a===H)if(L=!0,a={action:c,next:null},null===N&&(N=new Map),c=N.get(b),void 0===c)N.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}}function yb(){throw Error("startTransition cannot be called during server rendering.");}function Q(){}
var zb={readContext:function(a){return a._currentValue2},useContext:function(a){P();return a._currentValue2},useMemo:xb,useReducer:vb,useRef:function(a){H=P();J=sb();var b=J.memoizedState;return null===b?(a={current:a},J.memoizedState=a):b},useState:function(a){return vb(ub,a)},useInsertionEffect:Q,useLayoutEffect:function(){},useCallback:function(a,b){return xb(function(){return a},b)},useImperativeHandle:Q,useEffect:Q,useDebugValue:Q,useDeferredValue:function(a){P();return a},useTransition:function(){P();
return[!1,yb]},useId:function(){var a=ob.treeContext;var b=a.overflow;a=a.id;a=(a&~(1<<32-G(a)-1)).toString(32)+b;var c=R;if(null===c)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");b=M++;a=":"+c.idPrefix+"R"+a;0<b&&(a+="H"+b.toString(32));return a+":"},useMutableSource:function(a,b){P();return b(a._source)},useSyncExternalStore:function(a,b,c){if(void 0===c)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
return c()}},R=null,Ab=ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function Bb(a){console.error(a);return null}function S(){}
function Cb(a,b,c,d,f,e,g,h,k){var m=[],l=new Set;b={destination:null,responseState:b,progressiveChunkSize:void 0===d?12800:d,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:l,pingedTasks:m,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:void 0===f?Bb:f,onAllReady:void 0===e?S:e,onShellReady:void 0===g?S:g,onShellError:void 0===h?S:h,onFatalError:void 0===k?S:k};c=T(b,0,null,c,!1,!1);c.parentFlushed=
!0;a=Db(b,a,null,c,l,$a,null,hb);m.push(a);return b}function Db(a,b,c,d,f,e,g,h){a.allPendingTasks++;null===c?a.pendingRootTasks++:c.pendingTasks++;var k={node:b,ping:function(){var b=a.pingedTasks;b.push(k);1===b.length&&Eb(a)},blockedBoundary:c,blockedSegment:d,abortSet:f,legacyContext:e,context:g,treeContext:h};f.add(k);return k}function T(a,b,c,d,f,e){return{status:0,id:-1,index:b,parentFlushed:!1,chunks:[],children:[],formatContext:d,boundary:c,lastPushedText:f,textEmbedded:e}}
function U(a,b){a=a.onError(b);if(null!=a&&"string"!==typeof a)throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof a+'" instead');return a}function V(a,b){var c=a.onShellError;c(b);c=a.onFatalError;c(b);null!==a.destination?(a.status=2,a.destination.destroy(b)):(a.status=1,a.fatalError=b)}
function Fb(a,b,c,d,f){H={};ob=b;M=0;for(a=c(d,f);L;)L=!1,M=0,O+=1,J=null,a=c(d,f);tb();return a}function Gb(a,b,c,d){var f=c.render(),e=d.childContextTypes;if(null!==e&&void 0!==e){var g=b.legacyContext;if("function"!==typeof c.getChildContext)d=g;else{c=c.getChildContext();for(var h in c)if(!(h in e))throw Error((Za(d)||"Unknown")+'.getChildContext(): key "'+h+'" is not defined in childContextTypes.');d=A({},g,c)}b.legacyContext=d;W(a,b,f);b.legacyContext=g}else W(a,b,f)}
function Hb(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}
function Ib(a,b,c,d,f){if("function"===typeof c)if(c.prototype&&c.prototype.isReactComponent){f=ab(c,b.legacyContext);var e=c.contextType;e=new c(d,"object"===typeof e&&null!==e?e._currentValue2:f);gb(e,c,d,f);Gb(a,b,e,c)}else{e=ab(c,b.legacyContext);f=Fb(a,b,c,d,e);var g=0!==M;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof)gb(f,c,d,e),Gb(a,b,f,c);else if(g){d=b.treeContext;b.treeContext=ib(d,1,0);try{W(a,b,f)}finally{b.treeContext=d}}else W(a,b,f)}else if("string"===
typeof c){f=b.blockedSegment;e=za(f.chunks,c,d,a.responseState,f.formatContext);f.lastPushedText=!1;g=f.formatContext;f.formatContext=sa(g,c,d);Jb(a,b,e);f.formatContext=g;switch(c){case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "input":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":break;default:f.chunks.push("</",c,">")}f.lastPushedText=!1}else{switch(c){case Wa:case Va:case La:case Ma:case Ka:W(a,b,d.children);return;
case Ra:W(a,b,d.children);return;case Ua:throw Error("ReactDOMServer does not yet support scope components.");case Qa:a:{c=b.blockedBoundary;f=b.blockedSegment;e=d.fallback;d=d.children;g=new Set;var h={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:g,errorDigest:null},k=T(a,f.chunks.length,h,f.formatContext,!1,!1);f.children.push(k);f.lastPushedText=!1;var m=T(a,0,null,f.formatContext,!1,!1);m.parentFlushed=!0;
b.blockedBoundary=h;b.blockedSegment=m;try{if(Jb(a,b,d),a.responseState.generateStaticMarkup||m.lastPushedText&&m.textEmbedded&&m.chunks.push("\x3c!-- --\x3e"),m.status=1,X(h,m),0===h.pendingTasks)break a}catch(l){m.status=4,h.forceClientRender=!0,h.errorDigest=U(a,l)}finally{b.blockedBoundary=c,b.blockedSegment=f}b=Db(a,e,c,k,g,b.legacyContext,b.context,b.treeContext);a.pingedTasks.push(b)}return}if("object"===typeof c&&null!==c)switch(c.$$typeof){case Pa:d=Fb(a,b,c.render,d,f);if(0!==M){c=b.treeContext;
b.treeContext=ib(c,1,0);try{W(a,b,d)}finally{b.treeContext=c}}else W(a,b,d);return;case Sa:c=c.type;d=Hb(c,d);Ib(a,b,c,d,f);return;case Na:f=d.children;c=c._context;d=d.value;e=c._currentValue2;c._currentValue2=d;g=D;D=d={parent:g,depth:null===g?0:g.depth+1,context:c,parentValue:e,value:d};b.context=d;W(a,b,f);a=D;if(null===a)throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");d=a.parentValue;a.context._currentValue2=d===Xa?a.context._defaultValue:d;a=D=a.parent;
b.context=a;return;case Oa:d=d.children;d=d(c._currentValue2);W(a,b,d);return;case Ta:f=c._init;c=f(c._payload);d=Hb(c,d);Ib(a,b,c,d,void 0);return}throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+((null==c?c:typeof c)+"."));}}
function W(a,b,c){b.node=c;if("object"===typeof c&&null!==c){switch(c.$$typeof){case Ia:Ib(a,b,c.type,c.props,c.ref);return;case Ja:throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");case Ta:var d=c._init;c=d(c._payload);W(a,b,c);return}if(ra(c)){Kb(a,b,c);return}null===c||"object"!==typeof c?d=null:(d=Ya&&c[Ya]||c["@@iterator"],d="function"===typeof d?d:null);if(d&&(d=d.call(c))){c=d.next();if(!c.done){var f=
[];do f.push(c.value),c=d.next();while(!c.done);Kb(a,b,f)}return}a=Object.prototype.toString.call(c);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===a?"object with keys {"+Object.keys(c).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");}"string"===typeof c?(d=b.blockedSegment,d.lastPushedText=Ha(b.blockedSegment.chunks,c,a.responseState,d.lastPushedText)):"number"===typeof c&&(d=b.blockedSegment,d.lastPushedText=Ha(b.blockedSegment.chunks,
""+c,a.responseState,d.lastPushedText))}function Kb(a,b,c){for(var d=c.length,f=0;f<d;f++){var e=b.treeContext;b.treeContext=ib(e,d,f);try{Jb(a,b,c[f])}finally{b.treeContext=e}}}
function Jb(a,b,c){var d=b.blockedSegment.formatContext,f=b.legacyContext,e=b.context;try{return W(a,b,c)}catch(k){if(tb(),"object"===typeof k&&null!==k&&"function"===typeof k.then){c=k;var g=b.blockedSegment,h=T(a,g.chunks.length,null,g.formatContext,g.lastPushedText,!0);g.children.push(h);g.lastPushedText=!1;a=Db(a,b.node,b.blockedBoundary,h,b.abortSet,b.legacyContext,b.context,b.treeContext).ping;c.then(a,a);b.blockedSegment.formatContext=d;b.legacyContext=f;b.context=e;F(e)}else throw b.blockedSegment.formatContext=
d,b.legacyContext=f,b.context=e,F(e),k;}}function Lb(a){var b=a.blockedBoundary;a=a.blockedSegment;a.status=3;Mb(this,b,a)}
function Nb(a,b,c){var d=a.blockedBoundary;a.blockedSegment.status=3;null===d?(b.allPendingTasks--,2!==b.status&&(b.status=2,null!==b.destination&&b.destination.push(null))):(d.pendingTasks--,d.forceClientRender||(d.forceClientRender=!0,d.errorDigest=b.onError(void 0===c?Error("The render was aborted by the server without a reason."):c),d.parentFlushed&&b.clientRenderedBoundaries.push(d)),d.fallbackAbortableTasks.forEach(function(a){return Nb(a,b,c)}),d.fallbackAbortableTasks.clear(),b.allPendingTasks--,
0===b.allPendingTasks&&(a=b.onAllReady,a()))}function X(a,b){if(0===b.chunks.length&&1===b.children.length&&null===b.children[0].boundary){var c=b.children[0];c.id=b.id;c.parentFlushed=!0;1===c.status&&X(a,c)}else a.completedSegments.push(b)}
function Mb(a,b,c){if(null===b){if(c.parentFlushed){if(null!==a.completedRootSegment)throw Error("There can only be one root segment. This is a bug in React.");a.completedRootSegment=c}a.pendingRootTasks--;0===a.pendingRootTasks&&(a.onShellError=S,b=a.onShellReady,b())}else b.pendingTasks--,b.forceClientRender||(0===b.pendingTasks?(c.parentFlushed&&1===c.status&&X(b,c),b.parentFlushed&&a.completedBoundaries.push(b),b.fallbackAbortableTasks.forEach(Lb,a),b.fallbackAbortableTasks.clear()):c.parentFlushed&&
1===c.status&&(X(b,c),1===b.completedSegments.length&&b.parentFlushed&&a.partialBoundaries.push(b)));a.allPendingTasks--;0===a.allPendingTasks&&(a=a.onAllReady,a())}
function Eb(a){if(2!==a.status){var b=D,c=Ab.current;Ab.current=zb;var d=R;R=a.responseState;try{var f=a.pingedTasks,e;for(e=0;e<f.length;e++){var g=f[e];var h=a,k=g.blockedSegment;if(0===k.status){F(g.context);try{W(h,g,g.node),h.responseState.generateStaticMarkup||k.lastPushedText&&k.textEmbedded&&k.chunks.push("\x3c!-- --\x3e"),g.abortSet.delete(g),k.status=1,Mb(h,g.blockedBoundary,k)}catch(y){if(tb(),"object"===typeof y&&null!==y&&"function"===typeof y.then){var m=g.ping;y.then(m,m)}else{g.abortSet.delete(g);
k.status=4;var l=g.blockedBoundary,p=y,B=U(h,p);null===l?V(h,p):(l.pendingTasks--,l.forceClientRender||(l.forceClientRender=!0,l.errorDigest=B,l.parentFlushed&&h.clientRenderedBoundaries.push(l)));h.allPendingTasks--;if(0===h.allPendingTasks){var C=h.onAllReady;C()}}}finally{}}}f.splice(0,e);null!==a.destination&&Ob(a,a.destination)}catch(y){U(a,y),V(a,y)}finally{R=d,Ab.current=c,c===zb&&F(b)}}}
function Y(a,b,c){c.parentFlushed=!0;switch(c.status){case 0:var d=c.id=a.nextSegmentId++;c.lastPushedText=!1;c.textEmbedded=!1;a=a.responseState;b.push('<template id="');b.push(a.placeholderPrefix);a=d.toString(16);b.push(a);return b.push('"></template>');case 1:c.status=2;var f=!0;d=c.chunks;var e=0;c=c.children;for(var g=0;g<c.length;g++){for(f=c[g];e<f.index;e++)b.push(d[e]);f=Z(a,b,f)}for(;e<d.length-1;e++)b.push(d[e]);e<d.length&&(f=b.push(d[e]));return f;default:throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
}}
function Z(a,b,c){var d=c.boundary;if(null===d)return Y(a,b,c);d.parentFlushed=!0;if(d.forceClientRender)return a.responseState.generateStaticMarkup||(d=d.errorDigest,b.push("\x3c!--$!--\x3e"),b.push("<template"),d&&(b.push(' data-dgst="'),d=u(d),b.push(d),b.push('"')),b.push("></template>")),Y(a,b,c),a=a.responseState.generateStaticMarkup?!0:b.push("\x3c!--/$--\x3e"),a;if(0<d.pendingTasks){d.rootSegmentID=a.nextSegmentId++;0<d.completedSegments.length&&a.partialBoundaries.push(d);var f=a.responseState;var e=
f.nextSuspenseID++;f=f.boundaryPrefix+e.toString(16);d=d.id=f;Aa(b,a.responseState,d);Y(a,b,c);return b.push("\x3c!--/$--\x3e")}if(d.byteSize>a.progressiveChunkSize)return d.rootSegmentID=a.nextSegmentId++,a.completedBoundaries.push(d),Aa(b,a.responseState,d.id),Y(a,b,c),b.push("\x3c!--/$--\x3e");a.responseState.generateStaticMarkup||b.push("\x3c!--$--\x3e");c=d.completedSegments;if(1!==c.length)throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
Z(a,b,c[0]);a=a.responseState.generateStaticMarkup?!0:b.push("\x3c!--/$--\x3e");return a}function Pb(a,b,c){Ba(b,a.responseState,c.formatContext,c.id);Z(a,b,c);return Ca(b,c.formatContext)}
function Qb(a,b,c){for(var d=c.completedSegments,f=0;f<d.length;f++)Rb(a,b,c,d[f]);d.length=0;a=a.responseState;d=c.id;c=c.rootSegmentID;b.push(a.startInlineScript);a.sentCompleteBoundaryFunction?b.push('$RC("'):(a.sentCompleteBoundaryFunction=!0,b.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'));if(null===
d)throw Error("An ID must have been assigned before we can complete the boundary.");c=c.toString(16);b.push(d);b.push('","');b.push(a.segmentPrefix);b.push(c);return b.push('")\x3c/script>')}
function Rb(a,b,c,d){if(2===d.status)return!0;var f=d.id;if(-1===f){if(-1===(d.id=c.rootSegmentID))throw Error("A root segment ID must have been assigned by now. This is a bug in React.");return Pb(a,b,d)}Pb(a,b,d);a=a.responseState;b.push(a.startInlineScript);a.sentCompleteSegmentFunction?b.push('$RS("'):(a.sentCompleteSegmentFunction=!0,b.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'));
b.push(a.segmentPrefix);f=f.toString(16);b.push(f);b.push('","');b.push(a.placeholderPrefix);b.push(f);return b.push('")\x3c/script>')}
function Ob(a,b){try{var c=a.completedRootSegment;if(null!==c&&0===a.pendingRootTasks){Z(a,b,c);a.completedRootSegment=null;var d=a.responseState.bootstrapChunks;for(c=0;c<d.length-1;c++)b.push(d[c]);c<d.length&&b.push(d[c])}var f=a.clientRenderedBoundaries,e;for(e=0;e<f.length;e++){var g=f[e];d=b;var h=a.responseState,k=g.id,m=g.errorDigest,l=g.errorMessage,p=g.errorComponentStack;d.push(h.startInlineScript);h.sentClientRenderFunction?d.push('$RX("'):(h.sentClientRenderFunction=!0,d.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'));
if(null===k)throw Error("An ID must have been assigned before we can complete the boundary.");d.push(k);d.push('"');if(m||l||p){d.push(",");var B=Ea(m||"");d.push(B)}if(l||p){d.push(",");var C=Ea(l||"");d.push(C)}if(p){d.push(",");var y=Ea(p);d.push(y)}if(!d.push(")\x3c/script>")){a.destination=null;e++;f.splice(0,e);return}}f.splice(0,e);var aa=a.completedBoundaries;for(e=0;e<aa.length;e++)if(!Qb(a,b,aa[e])){a.destination=null;e++;aa.splice(0,e);return}aa.splice(0,e);var ba=a.partialBoundaries;for(e=
0;e<ba.length;e++){var pb=ba[e];a:{f=a;g=b;var ca=pb.completedSegments;for(h=0;h<ca.length;h++)if(!Rb(f,g,pb,ca[h])){h++;ca.splice(0,h);var qb=!1;break a}ca.splice(0,h);qb=!0}if(!qb){a.destination=null;e++;ba.splice(0,e);return}}ba.splice(0,e);var da=a.completedBoundaries;for(e=0;e<da.length;e++)if(!Qb(a,b,da[e])){a.destination=null;e++;da.splice(0,e);return}da.splice(0,e)}finally{0===a.allPendingTasks&&0===a.pingedTasks.length&&0===a.clientRenderedBoundaries.length&&0===a.completedBoundaries.length&&
b.push(null)}}function Sb(a,b){if(1===a.status)a.status=2,b.destroy(a.fatalError);else if(2!==a.status&&null===a.destination){a.destination=b;try{Ob(a,b)}catch(c){U(a,c),V(a,c)}}}function Tb(a,b){try{var c=a.abortableTasks;c.forEach(function(c){return Nb(c,a,b)});c.clear();null!==a.destination&&Ob(a,a.destination)}catch(d){U(a,d),V(a,d)}}function Ub(){}
function Vb(a,b,c,d){var f=!1,e=null,g="",h=!1;a=Cb(a,Fa(c,b?b.identifierPrefix:void 0),Ga(),Infinity,Ub,void 0,function(){h=!0},void 0,void 0);Eb(a);Tb(a,d);Sb(a,{push:function(a){null!==a&&(g+=a);return!0},destroy:function(a){f=!0;e=a}});if(f)throw e;if(!h)throw Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");return g}
function Wb(a,b){a.prototype=Object.create(b.prototype);a.prototype.constructor=a;a.__proto__=b}var Xb=function(a){function b(){var b=a.call(this,{})||this;b.request=null;b.startedFlowing=!1;return b}Wb(b,a);var c=b.prototype;c._destroy=function(a,b){Tb(this.request);b(a)};c._read=function(){this.startedFlowing&&Sb(this.request,this)};return b}(fa.Readable);function Yb(){}
function Zb(a,b){var c=new Xb,d=Cb(a,Fa(!1,b?b.identifierPrefix:void 0),Ga(),Infinity,Yb,function(){c.startedFlowing=!0;Sb(d,c)},void 0,void 0);c.request=d;Eb(d);return c}exports.renderToNodeStream=function(a,b){return Zb(a,b)};exports.renderToStaticMarkup=function(a,b){return Vb(a,b,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server')};
exports.renderToStaticNodeStream=function(a,b){return Zb(a,b)};exports.renderToString=function(a,b){return Vb(a,b,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server')};
exports.version="18.3.1";


/***/ }),

/***/ 26861:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "03e73f1b": [() => __webpack_require__.e(/* import() | 03e73f1b */ 130).then(__webpack_require__.bind(__webpack_require__, 54149)), "@site/docs/Syllabus_mat/sheet004.mdx", require.resolveWeak("@site/docs/Syllabus_mat/sheet004.mdx")],
  "0ea3f922": [() => __webpack_require__.e(/* import() | 0ea3f922 */ 197).then(__webpack_require__.bind(__webpack_require__, 64494)), "@site/docs/Syllabus_mat/sheet003.mdx", require.resolveWeak("@site/docs/Syllabus_mat/sheet003.mdx")],
  "17896441": [() => __webpack_require__.e(/* import() | 17896441 */ 401).then(__webpack_require__.bind(__webpack_require__, 47681)), "@theme/DocItem", require.resolveWeak("@theme/DocItem")],
  "2172d8b3": [() => __webpack_require__.e(/* import() | 2172d8b3 */ 542).then(__webpack_require__.bind(__webpack_require__, 52048)), "@site/src/pages/SectionPage.tsx", require.resolveWeak("@site/src/pages/SectionPage.tsx")],
  "2ef55f61": [() => __webpack_require__.e(/* import() | 2ef55f61 */ 325).then(__webpack_require__.bind(__webpack_require__, 64794)), "@site/src/pages/SearchResults.tsx", require.resolveWeak("@site/src/pages/SearchResults.tsx")],
  "46233e38": [() => __webpack_require__.e(/* import() | 46233e38 */ 273).then(__webpack_require__.bind(__webpack_require__, 39627)), "@site/docs/Syllabus_mat/sheet002.mdx", require.resolveWeak("@site/docs/Syllabus_mat/sheet002.mdx")],
  "46d93119": [() => __webpack_require__.e(/* import() | 46d93119 */ 162).then(__webpack_require__.bind(__webpack_require__, 58601)), "@site/src/pages/CustomDesign.tsx", require.resolveWeak("@site/src/pages/CustomDesign.tsx")],
  "516a6320": [() => __webpack_require__.e(/* import() | 516a6320 */ 605).then(__webpack_require__.bind(__webpack_require__, 31822)), "@site/src/pages/syllabus-pro192-spring2021.tsx", require.resolveWeak("@site/src/pages/syllabus-pro192-spring2021.tsx")],
  "528a0945": [() => __webpack_require__.e(/* import() | 528a0945 */ 947).then(__webpack_require__.bind(__webpack_require__, 25259)), "@site/docs/Syllabus_mat/tabstrip.mdx", require.resolveWeak("@site/docs/Syllabus_mat/tabstrip.mdx")],
  "5910515f": [() => __webpack_require__.e(/* import() | 5910515f */ 877).then(__webpack_require__.bind(__webpack_require__, 80068)), "@site/docs/Syllabus_mat/sheet001.mdx", require.resolveWeak("@site/docs/Syllabus_mat/sheet001.mdx")],
  "5e95c892": [() => __webpack_require__.e(/* import() | 5e95c892 */ 647).then(__webpack_require__.bind(__webpack_require__, 2267)), "@theme/DocsRoot", require.resolveWeak("@theme/DocsRoot")],
  "5e9f5e1a": [() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 4784)), "@generated/docusaurus.config", require.resolveWeak("@generated/docusaurus.config")],
  "5f9c5a64": [() => __webpack_require__.e(/* import() | 5f9c5a64 */ 686).then(__webpack_require__.bind(__webpack_require__, 99063)), "@site/src/pages/Home.tsx", require.resolveWeak("@site/src/pages/Home.tsx")],
  "631cd4eb": [() => __webpack_require__.e(/* import() | 631cd4eb */ 575).then(__webpack_require__.bind(__webpack_require__, 93904)), "@site/docs/Syllabus_mat/sheet005.mdx", require.resolveWeak("@site/docs/Syllabus_mat/sheet005.mdx")],
  "892c8049": [() => __webpack_require__.e(/* import() | 892c8049 */ 286).then(__webpack_require__.bind(__webpack_require__, 91462)), "@site/src/pages/syllabus-tabs.tsx", require.resolveWeak("@site/src/pages/syllabus-tabs.tsx")],
  "9a512cec": [() => __webpack_require__.e(/* import() | 9a512cec */ 142).then(__webpack_require__.bind(__webpack_require__, 3581)), "@site/src/pages/loading/index.tsx", require.resolveWeak("@site/src/pages/loading/index.tsx")],
  "a2065270": [() => __webpack_require__.e(/* import() | a2065270 */ 816).then(__webpack_require__.t.bind(__webpack_require__, 18333, 17)), "@generated/docusaurus-plugin-content-docs/default/p/docs-docs-fbb.json", require.resolveWeak("@generated/docusaurus-plugin-content-docs/default/p/docs-docs-fbb.json")],
  "a7456010": [() => __webpack_require__.e(/* import() | a7456010 */ 235).then(__webpack_require__.t.bind(__webpack_require__, 88552, 17)), "@generated/docusaurus-plugin-content-pages/default/__plugin.json", require.resolveWeak("@generated/docusaurus-plugin-content-pages/default/__plugin.json")],
  "a7bd4aaa": [() => __webpack_require__.e(/* import() | a7bd4aaa */ 98).then(__webpack_require__.bind(__webpack_require__, 302)), "@theme/DocVersionRoot", require.resolveWeak("@theme/DocVersionRoot")],
  "a94703ab": [() => __webpack_require__.e(/* import() | a94703ab */ 48).then(__webpack_require__.bind(__webpack_require__, 71306)), "@theme/DocRoot", require.resolveWeak("@theme/DocRoot")],
  "aba21aa0": [() => __webpack_require__.e(/* import() | aba21aa0 */ 742).then(__webpack_require__.t.bind(__webpack_require__, 27093, 17)), "@generated/docusaurus-plugin-content-docs/default/__plugin.json", require.resolveWeak("@generated/docusaurus-plugin-content-docs/default/__plugin.json")],
  "d719c951": [() => __webpack_require__.e(/* import() | d719c951 */ 376).then(__webpack_require__.bind(__webpack_require__, 65968)), "@site/src/pages/loading/loading-animation.tsx", require.resolveWeak("@site/src/pages/loading/loading-animation.tsx")],
  "e84a2a50": [() => __webpack_require__.e(/* import() | e84a2a50 */ 653).then(__webpack_require__.bind(__webpack_require__, 23)), "@site/src/pages/loading/TextWaveLoading.tsx", require.resolveWeak("@site/src/pages/loading/TextWaveLoading.tsx")]
});


/***/ }),

/***/ 27098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GX: () => (/* binding */ NavbarSecondaryMenuFiller),
/* harmony export */   YL: () => (/* binding */ useNavbarSecondaryMenuContent),
/* harmony export */   y_: () => (/* binding */ NavbarSecondaryMenuContentProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31450);


const Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
function NavbarSecondaryMenuContentProvider({ children }) {
  const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({ component: null, props: null });
  return (
    // @ts-expect-error: this context is hard to type
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, { value }, children)
  );
}
function useNavbarSecondaryMenuContent() {
  const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
  if (!value) {
    throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__/* .ReactContextError */ .dV("NavbarSecondaryMenuContentProvider");
  }
  return value[0];
}
function NavbarSecondaryMenuFiller({ component, props }) {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
  if (!context) {
    throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__/* .ReactContextError */ .dV("NavbarSecondaryMenuContentProvider");
  }
  const [, setContent] = context;
  const memoizedProps = (0,_utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__/* .useShallowMemoObject */ .Be)(props);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setContent({ component, props: memoizedProps });
  }, [setContent, component, memoizedProps]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => setContent({ component: null, props: null }), [setContent]);
  return null;
}


/***/ }),

/***/ 27631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ DocusaurusContextProvider),
/* harmony export */   o: () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _generated_docusaurus_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4784);
/* harmony import */ var _generated_globalData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59568);
/* harmony import */ var _generated_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31435);
/* harmony import */ var _generated_codeTranslations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22654);
/* harmony import */ var _generated_site_metadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44350);






const contextValue = {
  siteConfig: _generated_docusaurus_config__WEBPACK_IMPORTED_MODULE_1__["default"],
  siteMetadata: _generated_site_metadata__WEBPACK_IMPORTED_MODULE_5__,
  globalData: _generated_globalData__WEBPACK_IMPORTED_MODULE_2__,
  i18n: _generated_i18n__WEBPACK_IMPORTED_MODULE_3__,
  codeTranslations: _generated_codeTranslations__WEBPACK_IMPORTED_MODULE_4__
};
const Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(contextValue);
function DocusaurusContextProvider({ children }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, { value: contextValue }, children);
}


/***/ }),

/***/ 28350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36022);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99462);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42982);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(62513);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16017);
/* harmony import */ var _theme_SkipToContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45259);
/* harmony import */ var _theme_AnnouncementBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36260);
/* harmony import */ var _theme_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80634);
/* harmony import */ var _theme_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57843);
/* harmony import */ var _theme_Layout_Provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94266);
/* harmony import */ var _theme_ErrorPageContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97473);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86218);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_8__);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};












function Layout(props) {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description
  } = props;
  (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_9__/* .useKeyboardNavigation */ .J)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Layout_Provider__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__/* .PageMetadata */ .be, { title, description }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_SkipToContent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_AnnouncementBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Navbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      id: _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_11__/* .SkipToContentFallbackId */ .j,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(
        _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_13__/* .ThemeClassNames */ .G.layout.main.container,
        _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_13__/* .ThemeClassNames */ .G.wrapper.main,
        (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().mainWrapper),
        wrapperClassName
      )
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { fallback: (params) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_ErrorPageContent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, __spreadValues({}, params)) }, children)
  ), !noFooter && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null));
}


/***/ }),

/***/ 29777:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addTrailingSlash = addTrailingSlash;
exports["default"] = applyTrailingSlash;
exports.addLeadingSlash = addLeadingSlash;
exports.removeTrailingSlash = removeTrailingSlash;
const stringUtils_1 = __webpack_require__(83068);
function addTrailingSlash(str) {
  return str.endsWith("/") ? str : `${str}/`;
}
function applyTrailingSlash(path, options) {
  const { trailingSlash, baseUrl } = options;
  if (path.startsWith("#")) {
    return path;
  }
  function handleTrailingSlash(str, trailing) {
    return trailing ? addTrailingSlash(str) : removeTrailingSlash(str);
  }
  if (typeof trailingSlash === "undefined") {
    return path;
  }
  const [pathname] = path.split(/[#?]/);
  const shouldNotApply = pathname === "/" || pathname === baseUrl;
  const newPathname = shouldNotApply ? pathname : handleTrailingSlash(pathname, trailingSlash);
  return path.replace(pathname, newPathname);
}
function addLeadingSlash(str) {
  return (0, stringUtils_1.addPrefix)(str, "/");
}
function removeTrailingSlash(str) {
  return (0, stringUtils_1.removeSuffix)(str, "/");
}


/***/ }),

/***/ 30115:
/***/ ((module) => {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.3
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    // START: Modifications:
    // Apply guards for `Object.create(null)` handling. See:
    // - https://github.com/FormidableLabs/react-fast-compare/issues/64
    // - https://github.com/epoberezkin/fast-deep-equal/issues/49
    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();
    // END: Modifications

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ 30231:
/***/ ((module) => {

// Exports
module.exports = {
	"navbarHideable": `navbarHideable_m1mJ`,
	"navbarHidden": `navbarHidden_jGov`
};


/***/ }),

/***/ 31309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocsVersionNavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48290);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71238);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};



const getVersionMainDoc = (version) => version.docs.find((doc) => doc.id === version.mainDocId);
function DocsVersionNavbarItem(_a) {
  var _b = _a, {
    label: staticLabel,
    to: staticTo,
    docsPluginId
  } = _b, props = __objRest(_b, [
    "label",
    "to",
    "docsPluginId"
  ]);
  const version = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_2__/* .useDocsVersionCandidates */ .Vd)(docsPluginId)[0];
  const label = staticLabel != null ? staticLabel : version.label;
  const path = staticTo != null ? staticTo : getVersionMainDoc(version).path;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, __spreadProps(__spreadValues({}, props), { label, to: path }));
}


/***/ }),

/***/ 31435:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"defaultLocale":"en","locales":["en"],"path":"i18n","currentLocale":"en","localeConfigs":{"en":{"label":"English","direction":"ltr","htmlLang":"en","calendar":"gregory","path":"en"}}}');

/***/ }),

/***/ 31450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Be: () => (/* binding */ useShallowMemoObject),
/* harmony export */   ZC: () => (/* binding */ usePrevious),
/* harmony export */   _q: () => (/* binding */ useEvent),
/* harmony export */   dV: () => (/* binding */ ReactContextError),
/* harmony export */   fM: () => (/* binding */ composeProviders)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24759);


function useEvent(callback) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);
  (0,_docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(() => {
    ref.current = callback;
  }, [callback]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...args) => ref.current(...args), []);
}
function usePrevious(value) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(() => {
    ref.current = value;
  });
  return ref.current;
}
class ReactContextError extends Error {
  constructor(providerName, additionalInfo) {
    var _a, _b, _c, _d;
    super();
    this.name = "ReactContextError";
    this.message = `Hook ${(_d = (_c = (_b = (_a = this.stack) == null ? void 0 : _a.split("\n")[1]) == null ? void 0 : _b.match(new RegExp("at (?:\\w+\\.)?(?<name>\\w+)"))) == null ? void 0 : _c.groups.name) != null ? _d : ""} is called outside the <${providerName}>. ${additionalInfo != null ? additionalInfo : ""}`;
  }
}
function useShallowMemoObject(obj) {
  const deps = Object.entries(obj);
  deps.sort((a, b) => a[0].localeCompare(b[0]));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => obj, deps.flat());
}
function composeProviders(providers) {
  return ({ children }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, providers.reduceRight((element, CurrentProvider) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(CurrentProvider, null, element), children));
}


/***/ }),

/***/ 31635:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __rewriteRelativeImportExtension: () => (/* binding */ __rewriteRelativeImportExtension),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});


/***/ }),

/***/ 31647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ DocsSidebarProvider),
/* harmony export */   t: () => (/* binding */ useDocsSidebar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31450);


const EmptyContext = Symbol("EmptyContext");
const Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(EmptyContext);
function DocsSidebarProvider({ children, name, items }) {
  const stableValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => name && items ? { name, items } : null, [name, items]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, { value: stableValue }, children);
}
function useDocsSidebar() {
  const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
  if (value === EmptyContext) {
    throw new _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__/* .ReactContextError */ .dV("DocsSidebarProvider");
  }
  return value;
}


/***/ }),

/***/ 31853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DropdownNavbarItemMobile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62462);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57932);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45295);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34968);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91096);
/* harmony import */ var _theme_NavbarItem_NavbarNavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99186);
/* harmony import */ var _theme_NavbarItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84989);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69907);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};








function isItemActive(item, localPathname) {
  if ((0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__/* .isSamePath */ .ys)(item.to, localPathname)) {
    return true;
  }
  if ((0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__/* .isRegexpStringMatch */ .G)(item.activeBaseRegex, localPathname)) {
    return true;
  }
  if (item.activeBasePath && localPathname.startsWith(item.activeBasePath)) {
    return true;
  }
  return false;
}
function containsActiveItems(items, localPathname) {
  return items.some((item) => isItemActive(item, localPathname));
}
function CollapseButton({ collapsed, onClick }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "button",
    {
      "aria-label": collapsed ? (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({
        id: "theme.navbar.mobileDropdown.collapseButton.expandAriaLabel",
        message: "Expand the dropdown",
        description: "The ARIA label of the button to expand the mobile dropdown navbar item"
      }) : (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({
        id: "theme.navbar.mobileDropdown.collapseButton.collapseAriaLabel",
        message: "Collapse the dropdown",
        description: "The ARIA label of the button to collapse the mobile dropdown navbar item"
      }),
      "aria-expanded": !collapsed,
      type: "button",
      className: "clean-btn menu__caret",
      onClick
    }
  );
}
function useItemCollapsible({ active }) {
  const { collapsed, toggleCollapsed, setCollapsed } = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__/* .useCollapsible */ .u)({
    initialState: () => !active
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (active) {
      setCollapsed(false);
    }
  }, [active, setCollapsed]);
  return {
    collapsed,
    toggleCollapsed
  };
}
function DropdownNavbarItemMobile(_a) {
  var _b = _a, {
    items,
    className,
    position,
    onClick: onClick
  } = _b, props = __objRest(_b, [
    "items",
    "className",
    "position",
    // Need to destructure position from props so that it doesn't get passed on.
    "onClick"
  ]);
  var _a2;
  const localPathname = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_8__/* .useLocalPathname */ .B)();
  const isActive = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__/* .isSamePath */ .ys)(props.to, localPathname);
  const containsActive = containsActiveItems(items, localPathname);
  const { collapsed, toggleCollapsed } = useItemCollapsible({
    active: isActive || containsActive
  });
  const href = props.to ? void 0 : "#";
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "li",
    {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)("menu__list-item", {
        "menu__list-item--collapsed": collapsed
      })
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)("menu__list-item-collapsible", {
          "menu__list-item-collapsible--active": isActive
        })
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _theme_NavbarItem_NavbarNavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
        __spreadProps(__spreadValues({
          role: "button",
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(
            (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().dropdownNavbarItemMobile),
            "menu__link menu__link--sublist",
            className
          ),
          href
        }, props), {
          onClick: (e) => {
            if (href === "#") {
              e.preventDefault();
            }
            toggleCollapsed();
          }
        }),
        (_a2 = props.children) != null ? _a2 : props.label
      ),
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        CollapseButton,
        {
          collapsed,
          onClick: (e) => {
            e.preventDefault();
            toggleCollapsed();
          }
        }
      )
    ),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__/* .Collapsible */ .N, { lazy: true, as: "ul", className: "menu__list", collapsed }, items.map((childItemProps, i) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _theme_NavbarItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
      __spreadProps(__spreadValues({
        mobile: true,
        isDropdownItem: true,
        onClick,
        activeClassName: "menu__link--active"
      }, childItemProps), {
        key: i
      })
    )))
  );
}


/***/ }),

/***/ 34164:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export clsx */
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ 34307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolvePathname);


/***/ }),

/***/ 34968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ useLocalPathname)
/* harmony export */ });
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56347);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(908);


function useLocalPathname() {
  const { siteConfig: { baseUrl } } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)();
  const { pathname } = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useLocation */ .zy)();
  return pathname.replace(baseUrl, "/");
}


/***/ }),

/***/ 35302:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isarray = __webpack_require__(64634)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = prefix || defaultDelimiter
    var pattern = capture || group
    var prevText = prefix || (typeof tokens[tokens.length - 1] === 'string' ? tokens[tokens.length - 1] : '')

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : restrictBacktrack(delimiter, prevText))
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

function restrictBacktrack(delimiter, prevText) {
  if (!prevText || prevText.indexOf(delimiter) > -1) {
    return '[^' + escapeString(delimiter) + ']+?'
  }

  return escapeString(prevText) + '|(?:(?!' + escapeString(prevText) + ')[^' + escapeString(delimiter) + '])+?'
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ 36022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ErrorBoundary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93099);
/* harmony import */ var _theme_Error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3276);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};



const DefaultFallback = (params) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Error__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, __spreadValues({}, params));
class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  componentDidCatch(error) {
    if (_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.canUseDOM) {
      this.setState({ error });
    }
  }
  render() {
    var _a;
    const { children } = this.props;
    const { error } = this.state;
    if (error) {
      const fallbackParams = {
        error,
        tryAgain: () => this.setState({ error: null })
      };
      const fallback = (_a = this.props.fallback) != null ? _a : DefaultFallback;
      return fallback(fallbackParams);
    }
    return children != null ? children : null;
  }
}


/***/ }),

/***/ 36260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AnnouncementBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74728);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62513);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62391);
/* harmony import */ var _theme_AnnouncementBar_CloseButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59371);
/* harmony import */ var _theme_AnnouncementBar_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22754);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22804);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);







function AnnouncementBar() {
  const { announcementBar } = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .useThemeConfig */ .p)();
  const { isActive, close } = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__/* .useAnnouncementBar */ .M)();
  if (!isActive) {
    return null;
  }
  const { backgroundColor, textColor, isCloseable } = announcementBar;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(
        _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__/* .ThemeClassNames */ .G.announcementBar.container,
        (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().announcementBar)
      ),
      style: { backgroundColor, color: textColor },
      role: "banner"
    },
    isCloseable && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().announcementBarPlaceholder) }),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_AnnouncementBar_Content__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().announcementBarContent) }),
    isCloseable && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _theme_AnnouncementBar_CloseButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
      {
        onClick: close,
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().announcementBarClose)
      }
    )
  );
}


/***/ }),

/***/ 36334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SiteMetadata)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(914);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(908);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97951);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74728);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99462);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99653);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16017);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(98141);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56347);
/* harmony import */ var _docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59350);
/* harmony import */ var _theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18389);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};









function AlternateLangHeaders() {
  const {
    i18n: { currentLocale, defaultLocale, localeConfigs }
  } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
  const alternatePageUtils = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__/* .useAlternatePageUtils */ .o)();
  const currentHtmlLang = localeConfigs[currentLocale].htmlLang;
  const bcp47ToOpenGraphLocale = (code) => code.replace("-", "_");
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, Object.entries(localeConfigs).map(([locale, { htmlLang }]) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "link",
    {
      key: locale,
      rel: "alternate",
      href: alternatePageUtils.createUrl({
        locale,
        fullyQualified: true
      }),
      hrefLang: htmlLang
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "link",
    {
      rel: "alternate",
      href: alternatePageUtils.createUrl({
        locale: defaultLocale,
        fullyQualified: true
      }),
      hrefLang: "x-default"
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "meta",
    {
      property: "og:locale",
      content: bcp47ToOpenGraphLocale(currentHtmlLang)
    }
  ), Object.values(localeConfigs).filter((config) => currentHtmlLang !== config.htmlLang).map((config) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "meta",
    {
      key: `meta-og-${config.htmlLang}`,
      property: "og:locale:alternate",
      content: bcp47ToOpenGraphLocale(config.htmlLang)
    }
  )));
}
function useDefaultCanonicalUrl() {
  const {
    siteConfig: { url: siteUrl, baseUrl, trailingSlash }
  } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
  const { pathname } = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_6__/* .useLocation */ .zy)();
  const canonicalPathname = (0,_docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_7__/* .applyTrailingSlash */ .Ks)((0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay)(pathname), {
    trailingSlash,
    baseUrl
  });
  return siteUrl + canonicalPathname;
}
function CanonicalUrlHeaders({ permalink }) {
  const {
    siteConfig: { url: siteUrl }
  } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
  const defaultCanonicalUrl = useDefaultCanonicalUrl();
  const canonicalUrl = permalink ? `${siteUrl}${permalink}` : defaultCanonicalUrl;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { property: "og:url", content: canonicalUrl }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", { rel: "canonical", href: canonicalUrl }));
}
function SiteMetadata() {
  const {
    i18n: { currentLocale }
  } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
  const { metadata, image: defaultImage } = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .useThemeConfig */ .p)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { name: "twitter:card", content: "summary_large_image" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("body", { className: _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_9__/* .keyboardFocusedClassName */ .w })), defaultImage && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__/* .PageMetadata */ .be, { image: defaultImage }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(CanonicalUrlHeaders, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(AlternateLangHeaders, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, { tag: _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_11__/* .DEFAULT_SEARCH_TAG */ .C, locale: currentLocale }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, metadata.map((metadatum, i) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", __spreadValues({ key: i }, metadatum)))));
}


/***/ }),

/***/ 37161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74728);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62513);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48983);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42856);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91096);
/* harmony import */ var _theme_Navbar_MobileSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46203);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30231);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));







function NavbarBackdrop(props) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    __spreadProps(__spreadValues({
      role: "presentation"
    }, props), {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)("navbar-sidebar__backdrop", props.className)
    })
  );
}
function NavbarLayout({ children }) {
  const {
    navbar: { hideOnScroll, style }
  } = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .useThemeConfig */ .p)();
  const mobileSidebar = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__/* .useNavbarMobileSidebar */ .M)();
  const { navbarRef, isNavbarVisible } = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_7__/* .useHideableNavbar */ .S)(hideOnScroll);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "nav",
    {
      ref: navbarRef,
      "aria-label": (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({
        id: "theme.NavBar.navAriaLabel",
        message: "Main",
        description: "The ARIA label for the main navigation"
      }),
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(
        _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .ThemeClassNames */ .G.layout.navbar.container,
        "navbar",
        "navbar--fixed-top",
        hideOnScroll && [
          (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbarHideable),
          !isNavbarVisible && (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbarHidden)
        ],
        {
          "navbar--dark": style === "dark",
          "navbar--primary": style === "primary",
          "navbar-sidebar--show": mobileSidebar.shown
        }
      )
    },
    children,
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavbarBackdrop, { onClick: mobileSidebar.toggle }),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Navbar_MobileSidebar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null)
  );
}


/***/ }),

/***/ 37921:
/***/ ((module) => {

// Exports
module.exports = {
	"navbarSearchContainer": `navbarSearchContainer_Bca1`
};


/***/ }),

/***/ 37983:
/***/ ((module) => {

// Exports
module.exports = {
	"errorBoundaryError": `errorBoundaryError_a6uf`,
	"errorBoundaryFallback": `errorBoundaryFallback_VBag`
};


/***/ }),

/***/ 38321:
/***/ ((module) => {

"use strict";
module.exports = require("node:stream/consumers");

/***/ }),

/***/ 39023:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 39321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IconLightMode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

function IconLightMode(props) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __spreadValues({ viewBox: "0 0 24 24", width: 24, height: 24 }, props), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "path",
    {
      fill: "currentColor",
      d: "M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"
    }
  ));
}


/***/ }),

/***/ 39657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DefaultNavbarItemMobile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34164);
/* harmony import */ var _theme_NavbarItem_NavbarNavLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99186);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};



function DefaultNavbarItemMobile(_a) {
  var _b = _a, {
    className,
    isDropdownItem
  } = _b, props = __objRest(_b, [
    "className",
    "isDropdownItem"
  ]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: "menu__list-item" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_NavbarItem_NavbarNavLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, __spreadValues({ className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)("menu__link", className) }, props)));
}


/***/ }),

/***/ 39915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   n: () => (/* binding */ dispatchLifecycleAction)
/* harmony export */ });
/* harmony import */ var _generated_client_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43733);
/* harmony import */ var _exports_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24759);


function dispatchLifecycleAction(lifecycleAction, ...args) {
  const callbacks = _generated_client_modules__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.map((clientModule) => {
    var _a, _b;
    const lifecycleFunction = (_b = (_a = clientModule.default) == null ? void 0 : _a[lifecycleAction]) != null ? _b : clientModule[lifecycleAction];
    return lifecycleFunction == null ? void 0 : lifecycleFunction(...args);
  });
  return () => callbacks.forEach((cb) => cb == null ? void 0 : cb());
}
function scrollAfterNavigation({ location, previousLocation }) {
  if (!previousLocation) {
    return;
  }
  const samePathname = location.pathname === previousLocation.pathname;
  const sameHash = location.hash === previousLocation.hash;
  const sameSearch = location.search === previousLocation.search;
  if (samePathname && sameHash && !sameSearch) {
    return;
  }
  const { hash } = location;
  if (!hash) {
    window.scrollTo(0, 0);
  } else {
    const id = decodeURIComponent(hash.substring(1));
    const element = document.getElementById(id);
    element == null ? void 0 : element.scrollIntoView();
  }
}
function ClientLifecyclesDispatcher({ children, location, previousLocation }) {
  (0,_exports_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(() => {
    if (previousLocation !== location) {
      scrollAfterNavigation({ location, previousLocation });
      dispatchLifecycleAction("onRouteDidUpdate", { previousLocation, location });
    }
  }, [previousLocation, location]);
  return children;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientLifecyclesDispatcher);


/***/ }),

/***/ 40059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ FooterLinkItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46100);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97951);
/* harmony import */ var _docusaurus_isInternalUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75068);
/* harmony import */ var _theme_Icon_ExternalLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78473);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};






function FooterLinkItem({ item }) {
  const _a = item, { to, href, label, prependBaseUrlToHref, className } = _a, props = __objRest(_a, ["to", "href", "label", "prependBaseUrlToHref", "className"]);
  const toUrl = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)(to);
  const normalizedHref = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)(href, { forcePrependBaseUrl: true });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    __spreadValues(__spreadValues({
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)("footer__link-item", className)
    }, href ? {
      href: prependBaseUrlToHref ? normalizedHref : href
    } : {
      to: toUrl
    }), props),
    label,
    href && !(0,_docusaurus_isInternalUrl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(href) && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Icon_ExternalLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null)
  );
}


/***/ }),

/***/ 40669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AL: () => (/* binding */ TitleFormatterProvider),
/* harmony export */   s$: () => (/* binding */ useTitleFormatter)
/* harmony export */ });
/* unused harmony export TitleFormatterFnDefault */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(908);
/* harmony import */ var _docusaurus_useRouteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(301);
/* harmony import */ var _reactUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31450);




const TitleFormatterFnDefault = ({ title, siteTitle, titleDelimiter }) => {
  const trimmedTitle = title == null ? void 0 : title.trim();
  if (!trimmedTitle || trimmedTitle === siteTitle) {
    return siteTitle;
  }
  return `${trimmedTitle} ${titleDelimiter} ${siteTitle}`;
};
const TitleFormatterContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
function TitleFormatterProvider({ formatter, children }) {
  return /* @__PURE__ */ React.createElement(TitleFormatterContext.Provider, { value: formatter }, children);
}
function useTitleFormatterContext() {
  const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TitleFormatterContext);
  if (value === null) {
    throw new _reactUtils__WEBPACK_IMPORTED_MODULE_3__/* .ReactContextError */ .dV("TitleFormatterProvider");
  }
  return value;
}
function useTitleFormatter() {
  const formatter = useTitleFormatterContext();
  const { siteConfig } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  const { title: siteTitle, titleDelimiter } = siteConfig;
  const { plugin } = (0,_docusaurus_useRouteContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
  return {
    format: (title) => formatter({
      title,
      siteTitle,
      titleDelimiter,
      plugin,
      defaultFormatter: TitleFormatterFnDefault
    })
  };
}


/***/ }),

/***/ 41649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarMobilePrimaryMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74728);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48983);
/* harmony import */ var _theme_NavbarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84989);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));




function useNavbarItems() {
  return (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .useThemeConfig */ .p)().navbar.items;
}
function NavbarMobilePrimaryMenu() {
  const mobileSidebar = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .useNavbarMobileSidebar */ .M)();
  const items = useNavbarItems();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: "menu__list" }, items.map((item, i) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _theme_NavbarItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    __spreadProps(__spreadValues({
      mobile: true
    }, item), {
      onClick: () => mobileSidebar.toggle(),
      key: i
    })
  )));
}


/***/ }),

/***/ 42055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ useColorMode),
/* harmony export */   a: () => (/* binding */ ColorModeProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31450);
/* harmony import */ var _utils_storageUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95072);
/* harmony import */ var _utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74728);




function getSystemColorMode() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function subscribeToMedia(query, listener) {
  const mql = window.matchMedia(query);
  mql.addEventListener("change", listener);
  return () => mql.removeEventListener("change", listener);
}
function subscribeToSystemColorModeChange(onChange) {
  return subscribeToMedia("(prefers-color-scheme: dark)", () => onChange(getSystemColorMode()));
}
const Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);
const ColorModeStorageKey = "theme";
const ColorModeStorage = (0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_1__/* .createStorageSlot */ .Wf)(ColorModeStorageKey);
const SystemAttribute = "system";
const coerceToColorMode = (colorMode) => colorMode === "dark" ? "dark" : "light";
const coerceToColorModeChoice = (colorMode) => colorMode === null || colorMode === SystemAttribute ? null : coerceToColorMode(colorMode);
const ColorModeAttribute = {
  get: () => {
    return coerceToColorMode(document.documentElement.getAttribute("data-theme"));
  },
  set: (colorMode) => {
    document.documentElement.setAttribute("data-theme", coerceToColorMode(colorMode));
  }
};
const ColorModeChoiceAttribute = {
  get: () => {
    return coerceToColorModeChoice(document.documentElement.getAttribute("data-theme-choice"));
  },
  set: (colorMode) => {
    var _a;
    document.documentElement.setAttribute("data-theme-choice", (_a = coerceToColorModeChoice(colorMode)) != null ? _a : SystemAttribute);
  }
};
const persistColorModeChoice = (newColorMode) => {
  if (newColorMode === null) {
    ColorModeStorage.del();
  } else {
    ColorModeStorage.set(coerceToColorMode(newColorMode));
  }
};
function useColorModeState() {
  const { colorMode: { defaultMode } } = (0,_utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_2__/* .useThemeConfig */ .p)();
  const [colorMode, setColorModeState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultMode);
  const [colorModeChoice, setColorModeChoiceState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setColorModeState(ColorModeAttribute.get());
    setColorModeChoiceState(ColorModeChoiceAttribute.get());
  }, []);
  return {
    colorMode,
    setColorModeState,
    colorModeChoice,
    setColorModeChoiceState
  };
}
function useContextValue() {
  const { colorMode: { defaultMode, disableSwitch, respectPrefersColorScheme } } = (0,_utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_2__/* .useThemeConfig */ .p)();
  const { colorMode, setColorModeState, colorModeChoice, setColorModeChoiceState } = useColorModeState();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (disableSwitch) {
      ColorModeStorage.del();
    }
  }, [disableSwitch]);
  const setColorMode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newColorModeChoice, options = {}) => {
    const { persist = true } = options;
    if (newColorModeChoice === null) {
      const newColorMode = respectPrefersColorScheme ? getSystemColorMode() : defaultMode;
      ColorModeAttribute.set(newColorMode);
      setColorModeState(newColorMode);
      ColorModeChoiceAttribute.set(null);
      setColorModeChoiceState(null);
    } else {
      ColorModeAttribute.set(newColorModeChoice);
      ColorModeChoiceAttribute.set(newColorModeChoice);
      setColorModeState(newColorModeChoice);
      setColorModeChoiceState(newColorModeChoice);
    }
    if (persist) {
      persistColorModeChoice(newColorModeChoice);
    }
  }, [
    setColorModeState,
    setColorModeChoiceState,
    respectPrefersColorScheme,
    defaultMode
  ]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return ColorModeStorage.listen((e) => {
      setColorMode(coerceToColorModeChoice(e.newValue));
    });
  }, [setColorMode]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (colorModeChoice !== null || !respectPrefersColorScheme) {
      return void 0;
    }
    return subscribeToSystemColorModeChange((newSystemColorMode) => {
      setColorModeState(newSystemColorMode);
      ColorModeAttribute.set(newSystemColorMode);
    });
  }, [respectPrefersColorScheme, colorModeChoice, setColorModeState]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    colorMode,
    colorModeChoice,
    setColorMode,
    get isDarkTheme() {
      if (false) // removed by dead control flow
{}
      return colorMode === "dark";
    },
    setLightTheme() {
      if (false) // removed by dead control flow
{}
      setColorMode("light");
    },
    setDarkTheme() {
      if (false) // removed by dead control flow
{}
      setColorMode("dark");
    }
  }), [colorMode, colorModeChoice, setColorMode]);
}
function ColorModeProvider({ children }) {
  const value = useContextValue();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, { value }, children);
}
function useColorMode() {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
  if (context == null) {
    throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_3__/* .ReactContextError */ .dV("ColorModeProvider", "Please see https://docusaurus.io/docs/api/themes/configuration#use-color-mode.");
  }
  return context;
}


/***/ }),

/***/ 42517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useIsBrowser)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _browserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92287);


function useIsBrowser() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_browserContext__WEBPACK_IMPORTED_MODULE_1__/* .Context */ .o);
}


/***/ }),

/***/ 42532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SearchNavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _theme_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87220);
/* harmony import */ var _theme_Navbar_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96487);



function SearchNavbarItem({ mobile, className }) {
  if (mobile) {
    return null;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Navbar_Search__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { className }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_SearchBar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null));
}


/***/ }),

/***/ 42856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useHideableNavbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _utils_useLocationChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84940);
/* harmony import */ var _utils_scrollUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21162);



function useHideableNavbar(hideOnScroll) {
  const [isNavbarVisible, setIsNavbarVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(hideOnScroll);
  const isFocusedAnchor = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const navbarHeight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const navbarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node) => {
    if (node !== null) {
      navbarHeight.current = node.getBoundingClientRect().height;
    }
  }, []);
  (0,_utils_scrollUtils__WEBPACK_IMPORTED_MODULE_1__/* .useScrollPosition */ .Mq)(({ scrollY: scrollTop }, lastPosition) => {
    if (!hideOnScroll) {
      return;
    }
    if (scrollTop < navbarHeight.current) {
      setIsNavbarVisible(true);
      return;
    }
    if (isFocusedAnchor.current) {
      isFocusedAnchor.current = false;
      return;
    }
    const lastScrollTop = lastPosition == null ? void 0 : lastPosition.scrollY;
    const documentHeight = document.documentElement.scrollHeight - navbarHeight.current;
    const windowHeight = window.innerHeight;
    if (lastScrollTop && scrollTop >= lastScrollTop) {
      setIsNavbarVisible(false);
    } else if (scrollTop + windowHeight < documentHeight) {
      setIsNavbarVisible(true);
    }
  });
  (0,_utils_useLocationChange__WEBPACK_IMPORTED_MODULE_2__/* .useLocationChange */ .$)((locationChangeEvent) => {
    if (!hideOnScroll) {
      return;
    }
    const currentHash = locationChangeEvent.location.hash;
    const currentHashAnchor = currentHash ? document.getElementById(currentHash.substring(1)) : void 0;
    if (currentHashAnchor) {
      isFocusedAnchor.current = true;
      setIsNavbarVisible(false);
      return;
    }
    setIsNavbarVisible(true);
  });
  return { navbarRef, isNavbarVisible };
}


/***/ }),

/***/ 42982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ SkipToContentLink),
/* harmony export */   j: () => (/* binding */ SkipToContentFallbackId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56347);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91096);
/* harmony import */ var _useLocationChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84940);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));




const SkipToContentFallbackId = "__docusaurus_skipToContent_fallback";
function getSkipToContentTarget() {
  var _a;
  return (
    // Try to focus the <main> in priority
    // Note: this will only work if JS is enabled
    // See https://github.com/facebook/docusaurus/issues/6411#issuecomment-1284136069
    (_a = document.querySelector("main:first-of-type")) != null ? _a : (
      // Then try to focus the fallback element (usually the Layout children)
      document.getElementById(SkipToContentFallbackId)
    )
  );
}
function programmaticFocus(el) {
  el.setAttribute("tabindex", "-1");
  el.focus();
  el.removeAttribute("tabindex");
}
function useSkipToContent() {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const { action } = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_2__/* .useHistory */ .W6)();
  const onClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
    e.preventDefault();
    const targetElement = getSkipToContentTarget();
    if (targetElement) {
      programmaticFocus(targetElement);
    }
  }, []);
  (0,_useLocationChange__WEBPACK_IMPORTED_MODULE_3__/* .useLocationChange */ .$)(({ location }) => {
    if (containerRef.current && !location.hash && action === "PUSH") {
      programmaticFocus(containerRef.current);
    }
  });
  return { containerRef, onClick };
}
const DefaultSkipToContentLabel = (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({
  id: "theme.common.skipToMainContent",
  description: "The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation",
  message: "Skip to main content"
});
function SkipToContentLink(props) {
  var _a;
  const linkLabel = (_a = props.children) != null ? _a : DefaultSkipToContentLabel;
  const { containerRef, onClick } = useSkipToContent();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: containerRef, role: "region", "aria-label": DefaultSkipToContentLabel }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "a",
    __spreadProps(__spreadValues({}, props), {
      href: `#${SkipToContentFallbackId}`,
      onClick
    }),
    linkLabel
  ));
}


/***/ }),

/***/ 43733:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
  require("F:\\VScode\\PRO192_beta\\PRO192\\node_modules\\infima\\dist\\css\\default\\default.css"),
  require("F:\\VScode\\PRO192_beta\\PRO192\\node_modules\\@docusaurus\\theme-classic\\lib\\prism-include-languages"),
  require("F:\\VScode\\PRO192_beta\\PRO192\\node_modules\\@docusaurus\\theme-classic\\lib\\nprogress"),
  require("F:\\VScode\\PRO192_beta\\PRO192\\src\\css\\custom.css")
]);


/***/ }),

/***/ 44350:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"docusaurusVersion":"3.8.1","siteVersion":"0.0.0","pluginVersions":{"docusaurus-plugin-content-docs":{"type":"package","name":"@docusaurus/plugin-content-docs","version":"3.8.1"},"docusaurus-plugin-content-blog":{"type":"package","name":"@docusaurus/plugin-content-blog","version":"3.8.1"},"docusaurus-plugin-content-pages":{"type":"package","name":"@docusaurus/plugin-content-pages","version":"3.8.1"},"docusaurus-plugin-sitemap":{"type":"package","name":"@docusaurus/plugin-sitemap","version":"3.8.1"},"docusaurus-plugin-svgr":{"type":"package","name":"@docusaurus/plugin-svgr","version":"3.8.1"},"docusaurus-theme-classic":{"type":"package","name":"@docusaurus/theme-classic","version":"3.8.1"}}}');

/***/ }),

/***/ 44363:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(22799);
} else // removed by dead control flow
{}


/***/ }),

/***/ 44499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AO: () => (/* binding */ createPath),
/* harmony export */   TM: () => (/* binding */ createHashHistory),
/* harmony export */   sC: () => (/* binding */ createMemoryHistory),
/* harmony export */   yJ: () => (/* binding */ createLocation),
/* harmony export */   zR: () => (/* binding */ createBrowserHistory)
/* harmony export */ });
/* unused harmony exports locationsAreEqual, parsePath */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34307);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11561);






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0,resolve_pathname__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     false ? 0 : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           false ? 0 : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     false ? 0 : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? 0 : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? 0 : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     false ? 0 : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         false ? 0 : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     false ? 0 : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),

/***/ 45259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SkipToContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42982);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95521);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);



function SkipToContent() {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .SkipToContentLink */ .K, { className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().skipToContent) });
}


/***/ }),

/***/ 45295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dt: () => (/* binding */ useHomePageRoute),
/* harmony export */   ys: () => (/* binding */ isSamePath)
/* harmony export */ });
/* unused harmony export findHomePageRoute */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _generated_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97272);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(908);



function isSamePath(path1, path2) {
  const normalize = (pathname) => {
    var _a;
    return (_a = !pathname || pathname.endsWith("/") ? pathname : `${pathname}/`) == null ? void 0 : _a.toLowerCase();
  };
  return normalize(path1) === normalize(path2);
}
function findHomePageRoute({ baseUrl, routes: initialRoutes }) {
  function isHomePageRoute(route) {
    return route.path === baseUrl && route.exact === true;
  }
  function isHomeParentRoute(route) {
    return route.path === baseUrl && !route.exact;
  }
  function doFindHomePageRoute(routes) {
    if (routes.length === 0) {
      return void 0;
    }
    const homePage = routes.find(isHomePageRoute);
    if (homePage) {
      return homePage;
    }
    const indexSubRoutes = routes.filter(isHomeParentRoute).flatMap((route) => {
      var _a;
      return (_a = route.routes) != null ? _a : [];
    });
    return doFindHomePageRoute(indexSubRoutes);
  }
  return doFindHomePageRoute(initialRoutes);
}
function useHomePageRoute() {
  const { baseUrl } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)().siteConfig;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => findHomePageRoute({ routes: _generated_routes__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, baseUrl }), [baseUrl]);
}


/***/ }),

/***/ 45474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocNavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95730);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48290);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71238);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};



function DocNavbarItem(_a) {
  var _b = _a, {
    docId,
    label: staticLabel,
    docsPluginId
  } = _b, props = __objRest(_b, [
    "docId",
    "label",
    "docsPluginId"
  ]);
  const { activeDoc } = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_2__/* .useActiveDocContext */ .zK)(docsPluginId);
  const doc = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .useLayoutDoc */ .QB)(docId, docsPluginId);
  const pageActive = (activeDoc == null ? void 0 : activeDoc.path) === (doc == null ? void 0 : doc.path);
  if (doc === null || doc.unlisted && !pageActive) {
    return null;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    __spreadProps(__spreadValues({
      exact: true
    }, props), {
      isActive: () => pageActive || !!(activeDoc == null ? void 0 : activeDoc.sidebar) && activeDoc.sidebar === doc.sidebar,
      label: staticLabel != null ? staticLabel : doc.id,
      to: doc.path
    })
  );
}


/***/ }),

/***/ 45933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NavbarSecondaryMenuDisplayProvider),
/* harmony export */   T: () => (/* binding */ useNavbarSecondaryMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31450);
/* harmony import */ var _navbarMobileSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48983);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27098);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};




const Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
function useContextValue() {
  const mobileSidebar = (0,_navbarMobileSidebar__WEBPACK_IMPORTED_MODULE_1__/* .useNavbarMobileSidebar */ .M)();
  const content = (0,_content__WEBPACK_IMPORTED_MODULE_2__/* .useNavbarSecondaryMenuContent */ .YL)();
  const [shown, setShown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const hasContent = content.component !== null;
  const previousHasContent = (0,_utils_reactUtils__WEBPACK_IMPORTED_MODULE_3__/* .usePrevious */ .ZC)(hasContent);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const contentBecameAvailable = hasContent && !previousHasContent;
    if (contentBecameAvailable) {
      setShown(true);
    }
  }, [hasContent, previousHasContent]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!hasContent) {
      setShown(false);
      return;
    }
    if (!mobileSidebar.shown) {
      setShown(true);
    }
  }, [mobileSidebar.shown, hasContent]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [shown, setShown], [shown]);
}
function NavbarSecondaryMenuDisplayProvider({ children }) {
  const value = useContextValue();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, { value }, children);
}
function renderElement(content) {
  if (content.component) {
    const Comp = content.component;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp, __spreadValues({}, content.props));
  }
  return void 0;
}
function useNavbarSecondaryMenu() {
  const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
  if (!value) {
    throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_3__/* .ReactContextError */ .dV("NavbarSecondaryMenuDisplayProvider");
  }
  const [shown, setShown] = value;
  const hide = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setShown(false), [setShown]);
  const content = (0,_content__WEBPACK_IMPORTED_MODULE_2__/* .useNavbarSecondaryMenuContent */ .YL)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({ shown, hide, content: renderElement(content) }), [hide, content, shown]);
}


/***/ }),

/***/ 46100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48733);
/* harmony import */ var _docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59350);
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(908);
/* harmony import */ var _isInternalUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75068);
/* harmony import */ var _ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93099);
/* harmony import */ var _useBrokenLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17227);
/* harmony import */ var _useBaseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97951);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};








const shouldAddBaseUrlAutomatically = (to) => to.startsWith("/");
function Link(_a, forwardedRef) {
  var _b = _a, { isNavLink, to, href, activeClassName, isActive, "data-noBrokenLinkCheck": noBrokenLinkCheck, autoAddBaseUrl = true } = _b, props = __objRest(_b, ["isNavLink", "to", "href", "activeClassName", "isActive", "data-noBrokenLinkCheck", "autoAddBaseUrl"]);
  var _a2;
  const { siteConfig } = (0,_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  const { trailingSlash, baseUrl } = siteConfig;
  const router = siteConfig.future.experimental_router;
  const { withBaseUrl } = (0,_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__/* .useBaseUrlUtils */ .hH)();
  const brokenLinks = (0,_useBrokenLinks__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();
  const innerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(forwardedRef, () => innerRef.current);
  const targetLinkUnprefixed = to || href;
  function maybeAddBaseUrl(str) {
    return autoAddBaseUrl && shouldAddBaseUrlAutomatically(str) ? withBaseUrl(str) : str;
  }
  const isInternal = (0,_isInternalUrl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(targetLinkUnprefixed);
  const targetLinkWithoutPathnameProtocol = targetLinkUnprefixed == null ? void 0 : targetLinkUnprefixed.replace("pathname://", "");
  let targetLink = typeof targetLinkWithoutPathnameProtocol !== "undefined" ? maybeAddBaseUrl(targetLinkWithoutPathnameProtocol) : void 0;
  if (router === "hash" && (targetLink == null ? void 0 : targetLink.startsWith("./"))) {
    targetLink = targetLink == null ? void 0 : targetLink.slice(1);
  }
  if (targetLink && isInternal) {
    targetLink = (0,_docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_6__/* .applyTrailingSlash */ .Ks)(targetLink, { trailingSlash, baseUrl });
  }
  const preloaded = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const LinkComponent = isNavLink ? react_router_dom__WEBPACK_IMPORTED_MODULE_7__/* .NavLink */ .k2 : react_router_dom__WEBPACK_IMPORTED_MODULE_7__/* .Link */ .N_;
  const IOSupported = _ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.canUseIntersectionObserver;
  const ioRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const handleRef = (el) => {
    innerRef.current = el;
    if (IOSupported && el && isInternal) {
      ioRef.current = new window.IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (el === entry.target) {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              ioRef.current.unobserve(el);
              ioRef.current.disconnect();
              if (targetLink != null) {
                window.docusaurus.prefetch(targetLink);
              }
            }
          }
        });
      });
      ioRef.current.observe(el);
    }
  };
  const onInteractionEnter = () => {
    if (!preloaded.current && targetLink != null) {
      window.docusaurus.preload(targetLink);
      preloaded.current = true;
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!IOSupported && isInternal && _ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.canUseDOM) {
      if (targetLink != null) {
        window.docusaurus.prefetch(targetLink);
      }
    }
    return () => {
      if (IOSupported && ioRef.current) {
        ioRef.current.disconnect();
      }
    };
  }, [ioRef, targetLink, IOSupported, isInternal]);
  const isAnchorLink = (_a2 = targetLink == null ? void 0 : targetLink.startsWith("#")) != null ? _a2 : false;
  const hasInternalTarget = !props.target || props.target === "_self";
  const isRegularHtmlLink = !targetLink || !isInternal || !hasInternalTarget || // When using the hash router, we can't use the regular <a> link for anchors
  // We need to use React Router to navigate to /#/pathname/#anchor
  // And not /#anchor
  // See also https://github.com/facebook/docusaurus/pull/10311
  isAnchorLink && router !== "hash";
  if (!noBrokenLinkCheck && (isAnchorLink || !isRegularHtmlLink)) {
    brokenLinks.collectLink(targetLink);
  }
  if (props.id) {
    brokenLinks.collectAnchor(props.id);
  }
  const testOnlyProps =  false ? 0 : {};
  return isRegularHtmlLink ? (
    // eslint-disable-next-line jsx-a11y/anchor-has-content, @docusaurus/no-html-links
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", __spreadValues(__spreadValues(__spreadValues({ ref: innerRef, href: targetLink }, targetLinkUnprefixed && !isInternal && { target: "_blank", rel: "noopener noreferrer" }), props), testOnlyProps))
  ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    LinkComponent,
    __spreadValues(__spreadValues(__spreadProps(__spreadValues({}, props), {
      onMouseEnter: onInteractionEnter,
      onTouchStart: onInteractionEnter,
      innerRef: handleRef,
      to: targetLink
    }), isNavLink && { isActive, activeClassName }), testOnlyProps)
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Link));


/***/ }),

/***/ 46203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarMobileSidebar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48983);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22692);
/* harmony import */ var _theme_Navbar_MobileSidebar_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67602);
/* harmony import */ var _theme_Navbar_MobileSidebar_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62517);
/* harmony import */ var _theme_Navbar_MobileSidebar_PrimaryMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41649);
/* harmony import */ var _theme_Navbar_MobileSidebar_SecondaryMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55285);






function NavbarMobileSidebar() {
  const mobileSidebar = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__/* .useNavbarMobileSidebar */ .M)();
  (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__/* .useLockBodyScroll */ ._)(mobileSidebar.shown);
  if (!mobileSidebar.shouldRender) {
    return null;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _theme_Navbar_MobileSidebar_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    {
      header: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Navbar_MobileSidebar_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null),
      primaryMenu: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Navbar_MobileSidebar_PrimaryMenu__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null),
      secondaryMenu: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Navbar_MobileSidebar_SecondaryMenu__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null)
    }
  );
}


/***/ }),

/***/ 47429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IconSystemColorMode)
/* harmony export */ });
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function IconSystemColorMode(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({ viewBox: "0 0 24 24", width: 24, height: 24 }, props), /* @__PURE__ */ React.createElement(
    "path",
    {
      fill: "currentColor",
      d: "m12 21c4.971 0 9-4.029 9-9s-4.029-9-9-9-9 4.029-9 9 4.029 9 9 9zm4.95-13.95c1.313 1.313 2.05 3.093 2.05 4.95s-0.738 3.637-2.05 4.95c-1.313 1.313-3.093 2.05-4.95 2.05v-14c1.857 0 3.637 0.737 4.95 2.05z"
    }
  ));
}


/***/ }),

/***/ 47956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ MobileSidebarToggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48983);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91096);
/* harmony import */ var _theme_Icon_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82449);




function MobileSidebarToggle() {
  const { toggle, shown } = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .useNavbarMobileSidebar */ .M)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "button",
    {
      onClick: toggle,
      "aria-label": (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({
        id: "theme.docs.sidebar.toggleSidebarButtonAriaLabel",
        message: "Toggle navigation bar",
        description: "The ARIA label for hamburger menu button of mobile navigation"
      }),
      "aria-expanded": shown,
      className: "navbar__toggle clean-btn",
      type: "button"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Icon_Menu__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null)
  );
}


/***/ }),

/***/ 48290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B5: () => (/* binding */ useDocRootMetadata),
/* harmony export */   Nr: () => (/* binding */ findFirstSidebarItemLink),
/* harmony export */   OF: () => (/* binding */ useSidebarBreadcrumbs),
/* harmony export */   QB: () => (/* binding */ useLayoutDoc),
/* harmony export */   Vd: () => (/* binding */ useDocsVersionCandidates),
/* harmony export */   Y: () => (/* binding */ useVisibleSidebarItems),
/* harmony export */   fW: () => (/* binding */ useLayoutDocsSidebar),
/* harmony export */   w8: () => (/* binding */ isActiveSidebarItem)
/* harmony export */ });
/* unused harmony exports useDocById, findSidebarCategory, findFirstSidebarItemCategoryLink, useCurrentSidebarCategory, useCurrentSidebarSiblings, isVisibleSidebarItem, filterDocCardListItems */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56347);
/* harmony import */ var _docusaurus_renderRoutes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22831);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95730);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45295);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12388);
/* harmony import */ var _docsPreferredVersion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48392);
/* harmony import */ var _docsVersion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17639);
/* harmony import */ var _docsSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31647);









function useDocById(id) {
  const version = useDocsVersion();
  if (!id) {
    return void 0;
  }
  const doc = version.docs[id];
  if (!doc) {
    throw new Error(`no version doc found by id=${id}`);
  }
  return doc;
}
function findSidebarCategory(sidebar, predicate) {
  for (const item of sidebar) {
    if (item.type === "category") {
      if (predicate(item)) {
        return item;
      }
      const subItem = findSidebarCategory(item.items, predicate);
      if (subItem) {
        return subItem;
      }
    }
  }
  return void 0;
}
function findFirstSidebarItemCategoryLink(item) {
  if (item.href && !item.linkUnlisted) {
    return item.href;
  }
  for (const subItem of item.items) {
    const link = findFirstSidebarItemLink(subItem);
    if (link) {
      return link;
    }
  }
  return void 0;
}
function findFirstSidebarItemLink(item) {
  if (item.type === "link" && !item.unlisted) {
    return item.href;
  }
  if (item.type === "category") {
    return findFirstSidebarItemCategoryLink(item);
  }
  return void 0;
}
function useCurrentSidebarCategory() {
  const { pathname } = useLocation();
  const sidebar = useDocsSidebar();
  if (!sidebar) {
    throw new Error("Unexpected: cant find current sidebar in context");
  }
  const categoryBreadcrumbs = getSidebarBreadcrumbs({
    sidebarItems: sidebar.items,
    pathname,
    onlyCategories: true
  });
  const deepestCategory = categoryBreadcrumbs.slice(-1)[0];
  if (!deepestCategory) {
    throw new Error(`${pathname} is not associated with a category. useCurrentSidebarCategory() should only be used on category index pages.`);
  }
  return deepestCategory;
}
function useCurrentSidebarSiblings() {
  var _a;
  const { pathname } = useLocation();
  const sidebar = useDocsSidebar();
  if (!sidebar) {
    throw new Error("Unexpected: cant find current sidebar in context");
  }
  const categoryBreadcrumbs = getSidebarBreadcrumbs({
    sidebarItems: sidebar.items,
    pathname,
    onlyCategories: true
  });
  const deepestCategory = categoryBreadcrumbs.slice(-1)[0];
  return (_a = deepestCategory == null ? void 0 : deepestCategory.items) != null ? _a : sidebar.items;
}
const isActive = (testedPath, activePath) => typeof testedPath !== "undefined" && (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__/* .isSamePath */ .ys)(testedPath, activePath);
const containsActiveSidebarItem = (items, activePath) => items.some((subItem) => isActiveSidebarItem(subItem, activePath));
function isActiveSidebarItem(item, activePath) {
  if (item.type === "link") {
    return isActive(item.href, activePath);
  }
  if (item.type === "category") {
    return isActive(item.href, activePath) || containsActiveSidebarItem(item.items, activePath);
  }
  return false;
}
function isVisibleSidebarItem(item, activePath) {
  switch (item.type) {
    case "category":
      return isActiveSidebarItem(item, activePath) || typeof item.href !== "undefined" && !item.linkUnlisted || item.items.some((subItem) => isVisibleSidebarItem(subItem, activePath));
    case "link":
      return !item.unlisted || isActiveSidebarItem(item, activePath);
    default:
      return true;
  }
}
function useVisibleSidebarItems(items, activePath) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => items.filter((item) => isVisibleSidebarItem(item, activePath)), [items, activePath]);
}
function getSidebarBreadcrumbs({ sidebarItems, pathname, onlyCategories = false }) {
  const breadcrumbs = [];
  function extract(items) {
    for (const item of items) {
      if (item.type === "category" && ((0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__/* .isSamePath */ .ys)(item.href, pathname) || extract(item.items)) || item.type === "link" && (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__/* .isSamePath */ .ys)(item.href, pathname)) {
        const filtered = onlyCategories && item.type !== "category";
        if (!filtered) {
          breadcrumbs.unshift(item);
        }
        return true;
      }
    }
    return false;
  }
  extract(sidebarItems);
  return breadcrumbs;
}
function useSidebarBreadcrumbs() {
  var _a;
  const sidebar = (0,_docsSidebar__WEBPACK_IMPORTED_MODULE_2__/* .useDocsSidebar */ .t)();
  const { pathname } = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_3__/* .useLocation */ .zy)();
  const breadcrumbsOption = (_a = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__/* .useActivePlugin */ .vT)()) == null ? void 0 : _a.pluginData.breadcrumbs;
  if (breadcrumbsOption === false || !sidebar) {
    return null;
  }
  return getSidebarBreadcrumbs({ sidebarItems: sidebar.items, pathname });
}
function useDocsVersionCandidates(docsPluginId) {
  const { activeVersion } = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__/* .useActiveDocContext */ .zK)(docsPluginId);
  const { preferredVersion } = (0,_docsPreferredVersion__WEBPACK_IMPORTED_MODULE_5__/* .useDocsPreferredVersion */ .g1)(docsPluginId);
  const latestVersion = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__/* .useLatestVersion */ .r7)(docsPluginId);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__/* .uniq */ .sb)([activeVersion, preferredVersion, latestVersion].filter(Boolean)), [activeVersion, preferredVersion, latestVersion]);
}
function useLayoutDocsSidebar(sidebarId, docsPluginId) {
  const versions = useDocsVersionCandidates(docsPluginId);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const allSidebars = versions.flatMap((version) => version.sidebars ? Object.entries(version.sidebars) : []);
    const sidebarEntry = allSidebars.find((sidebar) => sidebar[0] === sidebarId);
    if (!sidebarEntry) {
      throw new Error(`Can't find any sidebar with id "${sidebarId}" in version${versions.length > 1 ? "s" : ""} ${versions.map((version) => version.name).join(", ")}".
Available sidebar ids are:
- ${allSidebars.map((entry) => entry[0]).join("\n- ")}`);
    }
    return sidebarEntry[1];
  }, [sidebarId, versions]);
}
function useLayoutDoc(docId, docsPluginId) {
  const versions = useDocsVersionCandidates(docsPluginId);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const allDocs = versions.flatMap((version) => version.docs);
    const doc = allDocs.find((versionDoc) => versionDoc.id === docId);
    if (!doc) {
      const isDraft = versions.flatMap((version) => version.draftIds).includes(docId);
      if (isDraft) {
        return null;
      }
      throw new Error(`Couldn't find any doc with id "${docId}" in version${versions.length > 1 ? "s" : ""} "${versions.map((version) => version.name).join(", ")}".
Available doc ids are:
- ${(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__/* .uniq */ .sb)(allDocs.map((versionDoc) => versionDoc.id)).join("\n- ")}`);
    }
    return doc;
  }, [docId, versions]);
}
function useDocRootMetadata({ route }) {
  const location = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_3__/* .useLocation */ .zy)();
  const versionMetadata = (0,_docsVersion__WEBPACK_IMPORTED_MODULE_7__/* .useDocsVersion */ .r)();
  const docRoutes = route.routes;
  const currentDocRoute = docRoutes.find((docRoute) => (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_3__/* .matchPath */ .B6)(location.pathname, docRoute));
  if (!currentDocRoute) {
    return null;
  }
  const sidebarName = currentDocRoute.sidebar;
  const sidebarItems = sidebarName ? versionMetadata.docsSidebars[sidebarName] : void 0;
  const docElement = (0,_docusaurus_renderRoutes__WEBPACK_IMPORTED_MODULE_8__/* .renderRoutes */ .v)(docRoutes);
  return {
    docElement,
    sidebarName,
    sidebarItems
  };
}
function filterDocCardListItems(items) {
  return items.filter((item) => {
    const canHaveLink = item.type === "category" || item.type === "link";
    if (canHaveLink) {
      return !!findFirstSidebarItemLink(item);
    }
    return true;
  });
}


/***/ }),

/***/ 48392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VQ: () => (/* binding */ DocsPreferredVersionContextProvider),
/* harmony export */   g1: () => (/* binding */ useDocsPreferredVersion)
/* harmony export */ });
/* unused harmony export useDocsPreferredVersionByPluginId */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95730);
/* harmony import */ var _docusaurus_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12451);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74728);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95072);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31450);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));





const storageKey = (pluginId) => `docs-preferred-version-${pluginId}`;
const DocsPreferredVersionStorage = {
  save: (pluginId, persistence, versionName) => {
    (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__/* .createStorageSlot */ .Wf)(storageKey(pluginId), { persistence }).set(versionName);
  },
  read: (pluginId, persistence) => (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__/* .createStorageSlot */ .Wf)(storageKey(pluginId), { persistence }).get(),
  clear: (pluginId, persistence) => {
    (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__/* .createStorageSlot */ .Wf)(storageKey(pluginId), { persistence }).del();
  }
};
const getInitialState = (pluginIds) => Object.fromEntries(pluginIds.map((id) => [id, { preferredVersionName: null }]));
function readStorageState({ pluginIds, versionPersistence, allDocsData }) {
  function restorePluginState(pluginId) {
    const preferredVersionNameUnsafe = DocsPreferredVersionStorage.read(pluginId, versionPersistence);
    const pluginData = allDocsData[pluginId];
    const versionExists = pluginData.versions.some((version) => version.name === preferredVersionNameUnsafe);
    if (versionExists) {
      return { preferredVersionName: preferredVersionNameUnsafe };
    }
    DocsPreferredVersionStorage.clear(pluginId, versionPersistence);
    return { preferredVersionName: null };
  }
  return Object.fromEntries(pluginIds.map((id) => [id, restorePluginState(id)]));
}
function useVersionPersistence() {
  return (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .useThemeConfig */ .p)().docs.versionPersistence;
}
const Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
function useContextValue() {
  const allDocsData = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .useAllDocsData */ .Gy)();
  const versionPersistence = useVersionPersistence();
  const pluginIds = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => Object.keys(allDocsData), [allDocsData]);
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => getInitialState(pluginIds));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setState(readStorageState({ allDocsData, versionPersistence, pluginIds }));
  }, [allDocsData, versionPersistence, pluginIds]);
  const api = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    function savePreferredVersion(pluginId, versionName) {
      DocsPreferredVersionStorage.save(pluginId, versionPersistence, versionName);
      setState((s) => __spreadProps(__spreadValues({}, s), {
        [pluginId]: { preferredVersionName: versionName }
      }));
    }
    return {
      savePreferredVersion
    };
  }, [versionPersistence]);
  return [state, api];
}
function DocsPreferredVersionContextProviderUnsafe({ children }) {
  const value = useContextValue();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, { value }, children);
}
function DocsPreferredVersionContextProvider({ children }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DocsPreferredVersionContextProviderUnsafe, null, children);
}
function useDocsPreferredVersionContext() {
  const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
  if (!value) {
    throw new _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__/* .ReactContextError */ .dV("DocsPreferredVersionContextProvider");
  }
  return value;
}
function useDocsPreferredVersion(pluginId = _docusaurus_constants__WEBPACK_IMPORTED_MODULE_5__/* .DEFAULT_PLUGIN_ID */ .W) {
  var _a;
  const docsData = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .useDocsData */ .ht)(pluginId);
  const [state, api] = useDocsPreferredVersionContext();
  const { preferredVersionName } = state[pluginId];
  const preferredVersion = (_a = docsData.versions.find((version) => version.name === preferredVersionName)) != null ? _a : null;
  const savePreferredVersionName = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((versionName) => {
    api.savePreferredVersion(pluginId, versionName);
  }, [api, pluginId]);
  return { preferredVersion, savePreferredVersionName };
}
function useDocsPreferredVersionByPluginId() {
  const allDocsData = useAllDocsData();
  const [state] = useDocsPreferredVersionContext();
  function getPluginIdPreferredVersion(pluginId) {
    var _a;
    const docsData = allDocsData[pluginId];
    const { preferredVersionName } = state[pluginId];
    return (_a = docsData.versions.find((version) => version.name === preferredVersionName)) != null ? _a : null;
  }
  const pluginIds = Object.keys(allDocsData);
  return Object.fromEntries(pluginIds.map((id) => [id, getPluginIdPreferredVersion(id)]));
}


/***/ }),

/***/ 48431:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getErrorCausalChain = getErrorCausalChain;
function getErrorCausalChain(error) {
  if (error.cause) {
    return [error, ...getErrorCausalChain(error.cause)];
  }
  return [error];
}


/***/ }),

/***/ 48733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N_: () => (/* binding */ Link),
/* harmony export */   k2: () => (/* binding */ NavLink)
/* harmony export */ });
/* unused harmony exports BrowserRouter, HashRouter */
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56347);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44499);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98587);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11561);











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_2__/* .createBrowserHistory */ .zR)(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__/* .Router */ .Ix, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) // removed by dead control flow
{}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_2__/* .createHashHistory */ .TM)(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__/* .Router */ .Ix, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) // removed by dead control flow
{}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_2__/* .createLocation */ .yJ)(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", props);
});

if (false) // removed by dead control flow
{}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_ref2, ["component", "replace", "to", "innerRef"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__/* .__RouterContext */ .XZ.Consumer, null, function (context) {
    !context ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(false) : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var isDuplicateNavigation = (0,history__WEBPACK_IMPORTED_MODULE_2__/* .createPath */ .AO)(context.location) === (0,history__WEBPACK_IMPORTED_MODULE_2__/* .createPath */ .AO)(normalizeToLocation(location));
        var method = replace || isDuplicateNavigation ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(component, props);
  });
});

if (false) // removed by dead control flow
{ var refType, toType; }

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__/* .__RouterContext */ .XZ.Consumer, null, function (context) {
    !context ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(false) : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? (0,react_router__WEBPACK_IMPORTED_MODULE_3__/* .matchPath */ .B6)(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = typeof classNameProp === "function" ? classNameProp(isActive) : classNameProp;
    var style = typeof styleProp === "function" ? styleProp(isActive) : styleProp;

    if (isActive) {
      className = joinClassnames(className, activeClassName);
      style = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)({}, style, activeStyle);
    }

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Link, props);
  });
});

if (false) // removed by dead control flow
{ var ariaCurrentType; }


//# sourceMappingURL=react-router-dom.js.map


/***/ }),

/***/ 48983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ useNavbarMobileSidebar),
/* harmony export */   e: () => (/* binding */ NavbarMobileSidebarProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _navbarSecondaryMenu_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27098);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13763);
/* harmony import */ var _utils_historyUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56415);
/* harmony import */ var _utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74728);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31450);






const Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);
function useIsNavbarMobileSidebarDisabled() {
  const secondaryMenuContent = (0,_navbarSecondaryMenu_content__WEBPACK_IMPORTED_MODULE_1__/* .useNavbarSecondaryMenuContent */ .YL)();
  const { items } = (0,_utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_2__/* .useThemeConfig */ .p)().navbar;
  return items.length === 0 && !secondaryMenuContent.component;
}
function useContextValue() {
  const disabled = useIsNavbarMobileSidebarDisabled();
  const windowSize = (0,_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__/* .useWindowSize */ .l)();
  const shouldRender = !disabled && windowSize === "mobile";
  const [shown, setShown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const toggle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setShown((s) => !s);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (windowSize === "desktop") {
      setShown(false);
    }
  }, [windowSize]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({ disabled, shouldRender, toggle, shown }), [disabled, shouldRender, toggle, shown]);
}
function OnHistoryPop({ handler }) {
  (0,_utils_historyUtils__WEBPACK_IMPORTED_MODULE_4__/* .useHistoryPopHandler */ .$Z)(handler);
  return null;
}
function NavbarMobileSidebarProvider({ children }) {
  const value = useContextValue();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    null,
    // Close mobile sidebar on navigation pop
    // Most likely firing when using the Android back button (but not only)
    // Important: we can only have a single history blocker at a time
    // That's why this needs to be rendered conditionally
    // See bug report https://github.com/facebook/docusaurus/issues/10988
    value.shown && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(OnHistoryPop, { handler: () => {
      value.toggle();
      return false;
    } }),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, { value }, children)
  );
}
function useNavbarMobileSidebar() {
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);
  if (context === void 0) {
    throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_5__/* .ReactContextError */ .dV("NavbarMobileSidebarProvider");
  }
  return context;
}


/***/ }),

/***/ 50563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ flat)
/* harmony export */ });
const isTree = (x) => typeof x === "object" && !!x && Object.keys(x).length > 0;
function flat(target) {
  const delimiter = ".";
  const output = {};
  function dfs(object, prefix) {
    Object.entries(object).forEach(([key, value]) => {
      const newKey = prefix ? `${prefix}${delimiter}${key}` : key;
      if (isTree(value)) {
        dfs(value, newKey);
      } else {
        output[newKey] = value;
      }
    });
  }
  dfs(target);
  return output;
}


/***/ }),

/***/ 53259:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = __webpack_require__(96540);

var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];

function isWebpackReady(getModuleIds) {
  if (false) // removed by dead control flow
{}

  return getModuleIds().every(function (moduleId) {
    return typeof moduleId !== "undefined" && typeof __webpack_require__.m[moduleId] !== "undefined";
  });
}

var LoadableCaptureContext = React.createContext(null);

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  }).catch(function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    Object.keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      }).catch(function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  }).catch(function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj.default : obj;
}

function render(loaded, props) {
  return React.createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _class, _temp;

  if (!options.loading) {
    throw new Error("react-loadable requires a `loading` component");
  }

  var opts = _extends({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);

  var res = null;

  function init() {
    if (!res) {
      res = loadFn(opts.loader);
    }

    return res.promise;
  }

  ALL_INITIALIZERS.push(init);

  if (typeof opts.webpack === "function") {
    READY_INITIALIZERS.push(function () {
      if (isWebpackReady(opts.webpack)) {
        return init();
      }
    });
  }

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(LoadableComponent, _React$Component);

    function LoadableComponent(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "retry", function () {
        _this.setState({
          error: null,
          loading: true,
          timedOut: false
        });

        res = loadFn(opts.loader);

        _this._loadModule();
      });

      init();
      _this.state = {
        error: res.error,
        pastDelay: false,
        timedOut: false,
        loading: res.loading,
        loaded: res.loaded
      };
      return _this;
    }

    LoadableComponent.preload = function preload() {
      return init();
    };

    var _proto = LoadableComponent.prototype;

    _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
      this._loadModule();
    };

    _proto.componentDidMount = function componentDidMount() {
      this._mounted = true;
    };

    _proto._loadModule = function _loadModule() {
      var _this2 = this;

      if (this.context && Array.isArray(opts.modules)) {
        opts.modules.forEach(function (moduleName) {
          _this2.context.report(moduleName);
        });
      }

      if (!res.loading) {
        return;
      }

      var setStateWithMountCheck = function setStateWithMountCheck(newState) {
        if (!_this2._mounted) {
          return;
        }

        _this2.setState(newState);
      };

      if (typeof opts.delay === 'number') {
        if (opts.delay === 0) {
          this.setState({
            pastDelay: true
          });
        } else {
          this._delay = setTimeout(function () {
            setStateWithMountCheck({
              pastDelay: true
            });
          }, opts.delay);
        }
      }

      if (typeof opts.timeout === "number") {
        this._timeout = setTimeout(function () {
          setStateWithMountCheck({
            timedOut: true
          });
        }, opts.timeout);
      }

      var update = function update() {
        setStateWithMountCheck({
          error: res.error,
          loaded: res.loaded,
          loading: res.loading
        });

        _this2._clearTimeouts();
      };

      res.promise.then(function () {
        update();
        return null;
      }).catch(function (err) {
        update();
        return null;
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this._mounted = false;

      this._clearTimeouts();
    };

    _proto._clearTimeouts = function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    };

    _proto.render = function render() {
      if (this.state.loading || this.state.error) {
        return React.createElement(opts.loading, {
          isLoading: this.state.loading,
          pastDelay: this.state.pastDelay,
          timedOut: this.state.timedOut,
          error: this.state.error,
          retry: this.retry
        });
      } else if (this.state.loaded) {
        return opts.render(this.state.loaded, this.props);
      } else {
        return null;
      }
    };

    return LoadableComponent;
  }(React.Component), _defineProperty(_class, "contextType", LoadableCaptureContext), _temp;
}

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

function LoadableMap(opts) {
  if (typeof opts.render !== "function") {
    throw new Error("LoadableMap requires a `render(loaded, props)` function");
  }

  return createLoadableComponent(loadMap, opts);
}

Loadable.Map = LoadableMap;

var Capture =
/*#__PURE__*/
function (_React$Component2) {
  _inheritsLoose(Capture, _React$Component2);

  function Capture() {
    return _React$Component2.apply(this, arguments) || this;
  }

  var _proto2 = Capture.prototype;

  _proto2.render = function render() {
    return React.createElement(LoadableCaptureContext.Provider, {
      value: {
        report: this.props.report
      }
    }, React.Children.only(this.props.children));
  };

  return Capture;
}(React.Component);

Loadable.Capture = Capture;

function flushInitializers(initializers) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init());
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolve, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolve, reject);
  });
};

Loadable.preloadReady = function () {
  return new Promise(function (resolve, reject) {
    // We always will resolve, errors should be handled within loading UIs.
    flushInitializers(READY_INITIALIZERS).then(resolve, resolve);
  });
};

module.exports = Loadable;

/***/ }),

/***/ 53384:
/***/ ((module) => {

// Exports
module.exports = {
	"toggle": `toggle_vylO`,
	"toggleButton": `toggleButton_gllP`,
	"toggleIcon": `toggleIcon_g3eP`,
	"systemToggleIcon": `systemToggleIcon_QzmC`,
	"lightToggleIcon": `lightToggleIcon_pyhR`,
	"darkToggleIcon": `darkToggleIcon_wfgR`,
	"toggleButtonDisabled": `toggleButtonDisabled_aARS`
};


/***/ }),

/***/ 53660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ MaybeBaseUrlIssueBanner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56347);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(914);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93099);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(908);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99832);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);






const BannerContainerId = "__docusaurus-base-url-issue-banner-container";
const BannerId = "__docusaurus-base-url-issue-banner";
const SuggestionContainerId = "__docusaurus-base-url-issue-banner-suggestion-container";
function createInlineHtmlBanner(baseUrl) {
  return `
<div id="${BannerId}" style="border: thick solid red; background-color: rgb(255, 230, 179); margin: 20px; padding: 20px; font-size: 20px;">
   <p style="font-weight: bold; font-size: 30px;">Your Docusaurus site did not load properly.</p>
   <p>A very common reason is a wrong site <a href="https://docusaurus.io/docs/docusaurus.config.js/#baseUrl" style="font-weight: bold;">baseUrl configuration</a>.</p>
   <p>Current configured baseUrl = <span style="font-weight: bold; color: red;">${baseUrl}</span> ${baseUrl === "/" ? " (default value)" : ""}</p>
   <p>We suggest trying baseUrl = <span id="${SuggestionContainerId}" style="font-weight: bold; color: green;"></span></p>
</div>
`;
}
function createInlineScript(baseUrl) {
  return `
document.addEventListener('DOMContentLoaded', function maybeInsertBanner() {
  var shouldInsert = typeof window['docusaurus'] === 'undefined';
  shouldInsert && insertBanner();
});

function insertBanner() {
  var bannerContainer = document.createElement('div');
  bannerContainer.id = '${BannerContainerId}';
  var bannerHtml = ${JSON.stringify(createInlineHtmlBanner(baseUrl)).replace(/</g, "\\<")};
  bannerContainer.innerHTML = bannerHtml;
  document.body.prepend(bannerContainer);
  var suggestionContainer = document.getElementById('${SuggestionContainerId}');
  var actualHomePagePath = window.location.pathname;
  var suggestedBaseUrl = actualHomePagePath.substr(-1) === '/'
        ? actualHomePagePath
        : actualHomePagePath + '/';
  suggestionContainer.innerHTML = suggestedBaseUrl;
}
`;
}
function BaseUrlIssueBanner() {
  const { siteConfig: { baseUrl } } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.canUseDOM && // Safe to use `ExecutionEnvironment`, because `Head` is purely
  // side-effect and doesn't affect hydration
  /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("script", null, createInlineScript(baseUrl))));
}
function MaybeBaseUrlIssueBanner() {
  const { siteConfig: { baseUrl, baseUrlIssueBanner } } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();
  const { pathname } = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_5__/* .useLocation */ .zy)();
  const isHomePage = pathname === baseUrl;
  const enabled = baseUrlIssueBanner && isHomePage;
  return enabled ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(BaseUrlIssueBanner, null) : null;
}


/***/ }),

/***/ 53662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IconClose)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

function IconClose(_a) {
  var _b = _a, {
    width = 21,
    height = 21,
    color = "currentColor",
    strokeWidth = 1.2,
    className
  } = _b, restProps = __objRest(_b, [
    "width",
    "height",
    "color",
    "strokeWidth",
    "className"
  ]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __spreadValues({ viewBox: "0 0 15 15", width, height }, restProps), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", { stroke: color, strokeWidth }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M.75.75l13.5 13.5M14.25.75L.75 14.25" })));
}


/***/ }),

/***/ 55285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarMobileSidebarSecondaryMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74728);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45933);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91096);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));




function SecondaryMenuBackButton(props) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", __spreadProps(__spreadValues({}, props), { type: "button", className: "clean-btn navbar-sidebar__back" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    {
      id: "theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",
      description: "The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"
    },
    "\u2190 Back to main menu"
  ));
}
function NavbarMobileSidebarSecondaryMenu() {
  const isPrimaryMenuEmpty = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .useThemeConfig */ .p)().navbar.items.length === 0;
  const secondaryMenu = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .useNavbarSecondaryMenu */ .T)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !isPrimaryMenuEmpty && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SecondaryMenuBackButton, { onClick: () => secondaryMenu.hide() }), secondaryMenu.content);
}


/***/ }),

/***/ 56259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ splitNavbarItems),
/* harmony export */   G: () => (/* binding */ NavbarProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _contexts_navbarMobileSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48983);
/* harmony import */ var _contexts_navbarSecondaryMenu_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27098);
/* harmony import */ var _contexts_navbarSecondaryMenu_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45933);




const DefaultNavItemPosition = "right";
function splitNavbarItems(items) {
  function isLeft(item) {
    var _a;
    return ((_a = item.position) != null ? _a : DefaultNavItemPosition) === "left";
  }
  const leftItems = items.filter(isLeft);
  const rightItems = items.filter((item) => !isLeft(item));
  return [leftItems, rightItems];
}
function NavbarProvider({ children }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_contexts_navbarSecondaryMenu_content__WEBPACK_IMPORTED_MODULE_1__/* .NavbarSecondaryMenuContentProvider */ .y_, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_contexts_navbarMobileSidebar__WEBPACK_IMPORTED_MODULE_2__/* .NavbarMobileSidebarProvider */ .e, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_contexts_navbarSecondaryMenu_display__WEBPACK_IMPORTED_MODULE_3__/* .NavbarSecondaryMenuDisplayProvider */ .N, null, children)));
}


/***/ }),

/***/ 56347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B6: () => (/* binding */ matchPath),
/* harmony export */   Ix: () => (/* binding */ Router),
/* harmony export */   W6: () => (/* binding */ useHistory),
/* harmony export */   XZ: () => (/* binding */ context),
/* harmony export */   dO: () => (/* binding */ Switch),
/* harmony export */   g: () => (/* binding */ useParams),
/* harmony export */   kO: () => (/* binding */ StaticRouter),
/* harmony export */   qh: () => (/* binding */ Route),
/* harmony export */   zy: () => (/* binding */ useLocation)
/* harmony export */ });
/* unused harmony exports MemoryRouter, Prompt, Redirect, __HistoryContext, generatePath, useRouteMatch, withRouter */
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44499);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11561);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58168);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35302);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44363);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98587);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4146);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__);












var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== "undefined" // 'global proper'
? // eslint-disable-next-line no-undef
globalThis : typeof window !== "undefined" ? window // Browser
: typeof global !== "undefined" ? global // node.js
: {};

function getUniqueId() {
  var key = "__global_unique_id__";
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
} // Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is


function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // eslint-disable-next-line no-self-compare
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = "__create-react-context-" + getUniqueId() + "__";

  var Provider = /*#__PURE__*/function (_React$Component) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(Provider, _React$Component);

    function Provider() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === "function" ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (false) // removed by dead control flow
{}

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object).isRequired, _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_React$Component2) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(Consumer, _React$Component2);

    function Consumer() {
      var _this2;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _this2 = _React$Component2.call.apply(_React$Component2, [this].concat(args)) || this;
      _this2.observedBits = void 0;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object), _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

// MIT License
var createContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext || createReactContext;

// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = createContext();
  context.displayName = name;
  return context;
};

var historyContext = /*#__PURE__*/createNamedContext("Router-History");

var context = /*#__PURE__*/createNamedContext("Router");

/**
 * The public API for putting history on context.
 */

var Router = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        _this._pendingLocation = location;
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this._isMounted = true;

    if (this.unlisten) {
      // Any pre-mount location changes have been captured at
      // this point, so unregister the listener.
      this.unlisten();
    }

    if (!this.props.staticContext) {
      this.unlisten = this.props.history.listen(function (location) {
        if (_this2._isMounted) {
          _this2.setState({
            location: location
          });
        }
      });
    }

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
      this._isMounted = false;
      this._pendingLocation = null;
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) // removed by dead control flow
{}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_6__/* .createMemoryHistory */ .sC)(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) // removed by dead control flow
{}

var Lifecycle = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return /*#__PURE__*/React.createElement(context.Consumer, null, function (context) {
    !context ?  false ? 0 : invariant(false) : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return /*#__PURE__*/React.createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (false) // removed by dead control flow
{ var messageType; }

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = pathToRegexp.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return /*#__PURE__*/React.createElement(context.Consumer, null, function (context) {
    !context ?  false ? 0 : invariant(false) : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : _extends({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return /*#__PURE__*/React.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = createLocation(prevProps.to);

        if (!locationsAreEqual(prevLocation, _extends({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (false) // removed by dead control flow
{}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp__WEBPACK_IMPORTED_MODULE_1___default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   false ? 0 : void 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(false) : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && isEmptyChildren(children)) {
        children = null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  false ? 0 : children(props) : children : component ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  false ? 0 : children(props) : null);
    });
  };

  return Route;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) // removed by dead control flow
{}

function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : (0,history__WEBPACK_IMPORTED_MODULE_6__/* .createPath */ .AO)(location);
}

function staticHandler(methodName) {
  return function () {
      false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(false) ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_6__/* .createLocation */ .yJ)(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_6__/* .createLocation */ .yJ)(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) // removed by dead control flow
{}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(context.Consumer, null, function (context) {
      !context ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(false) : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(_this.props.children, function (child) {
        if (match == null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) // removed by dead control flow
{}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutPropertiesLoose(props, ["wrappedComponentRef"]);

    return /*#__PURE__*/React.createElement(context.Consumer, null, function (context) {
      !context ?  false ? 0 : invariant(false) : void 0;
      return /*#__PURE__*/React.createElement(Component, _extends({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (false) // removed by dead control flow
{}

  return hoistStatics(C, Component);
}

var useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext;
function useHistory() {
  if (false) // removed by dead control flow
{}

  return useContext(historyContext);
}
function useLocation() {
  if (false) // removed by dead control flow
{}

  return useContext(context).location;
}
function useParams() {
  if (false) // removed by dead control flow
{}

  var match = useContext(context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (false) // removed by dead control flow
{}

  var location = useLocation();
  var match = useContext(context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (false) // removed by dead control flow
{ var secondaryBuildName, initialBuildName, buildNames, key, global$1; }


//# sourceMappingURL=react-router.js.map


/***/ }),

/***/ 56415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Z: () => (/* binding */ useHistoryPopHandler)
/* harmony export */ });
/* unused harmony exports useHistorySelector, useQueryStringValue, useQueryString, useQueryStringList, useClearQueryString */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56347);
/* harmony import */ var _reactUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31450);



function useHistoryActionHandler(handler) {
  const history = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useHistory */ .W6)();
  const stableHandler = (0,_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .useEvent */ ._q)(handler);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
    // See https://github.com/remix-run/history/blob/main/docs/blocking-transitions.md
    () => history.block((location, action) => stableHandler(location, action)),
    [history, stableHandler]
  );
}
function useHistoryPopHandler(handler) {
  useHistoryActionHandler((location, action) => {
    if (action === "POP") {
      return handler(location, action);
    }
    return void 0;
  });
}
function useHistorySelector(selector) {
  const history = useHistory();
  return useSyncExternalStore(history.listen, () => selector(history), () => selector(history));
}
function useQueryStringValue(key) {
  return useHistorySelector((history) => {
    if (key === null) {
      return null;
    }
    return new URLSearchParams(history.location.search).get(key);
  });
}
function useQueryStringUpdater(key) {
  const history = useHistory();
  return useCallback((newValue, options) => {
    const searchParams = new URLSearchParams(history.location.search);
    if (newValue) {
      searchParams.set(key, newValue);
    } else {
      searchParams.delete(key);
    }
    const updateHistory = (options == null ? void 0 : options.push) ? history.push : history.replace;
    updateHistory({
      search: searchParams.toString()
    });
  }, [key, history]);
}
function useQueryString(key) {
  var _a;
  const value = (_a = useQueryStringValue(key)) != null ? _a : "";
  const update = useQueryStringUpdater(key);
  return [value, update];
}
function useQueryStringListValues(key) {
  const arrayJsonString = useHistorySelector((history) => {
    const values = new URLSearchParams(history.location.search).getAll(key);
    return JSON.stringify(values);
  });
  return useMemo(() => JSON.parse(arrayJsonString), [arrayJsonString]);
}
function useQueryStringListUpdater(key) {
  const history = useHistory();
  const setValues = useCallback((update, options) => {
    const searchParams = new URLSearchParams(history.location.search);
    const newValues = Array.isArray(update) ? update : update(searchParams.getAll(key));
    searchParams.delete(key);
    newValues.forEach((v) => searchParams.append(key, v));
    const updateHistory = (options == null ? void 0 : options.push) ? history.push : history.replace;
    updateHistory({
      search: searchParams.toString()
    });
  }, [history, key]);
  return setValues;
}
function useQueryStringList(key) {
  const values = useQueryStringListValues(key);
  const setValues = useQueryStringListUpdater(key);
  return [values, setValues];
}
function useClearQueryString() {
  const history = useHistory();
  return useCallback(() => {
    history.replace({
      search: void 0
    });
  }, [history]);
}


/***/ }),

/***/ 56948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74728);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2075);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(62513);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48983);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56259);
/* harmony import */ var _theme_NavbarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84989);
/* harmony import */ var _theme_Navbar_ColorModeToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15497);
/* harmony import */ var _theme_SearchBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87220);
/* harmony import */ var _theme_Navbar_MobileSidebar_Toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47956);
/* harmony import */ var _theme_Navbar_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3228);
/* harmony import */ var _theme_Navbar_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96487);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78484);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};











function useNavbarItems() {
  return (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__/* .useThemeConfig */ .p)().navbar.items;
}
function NavbarItems({ items }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, items.map((item, i) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .ErrorCauseBoundary */ .k2,
    {
      key: i,
      onError: (error) => new Error(
        `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
        { cause: error }
      )
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_NavbarItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, __spreadValues({}, item))
  )));
}
function NavbarContentLayout({ left, right }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "navbar__inner" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(
        _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__/* .ThemeClassNames */ .G.layout.navbar.containerLeft,
        "navbar__items"
      )
    },
    left
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(
        _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__/* .ThemeClassNames */ .G.layout.navbar.containerRight,
        "navbar__items navbar__items--right"
      )
    },
    right
  ));
}
function NavbarContent() {
  const mobileSidebar = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_11__/* .useNavbarMobileSidebar */ .M)();
  const items = useNavbarItems();
  const [leftItems, rightItems] = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_12__/* .splitNavbarItems */ .D)(items);
  const searchBarItem = items.find((item) => item.type === "search");
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    NavbarContentLayout,
    {
      left: (
        // TODO stop hardcoding items?
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !mobileSidebar.disabled && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Navbar_MobileSidebar_Toggle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Navbar_Logo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavbarItems, { items: leftItems }))
      ),
      right: (
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavbarItems, { items: rightItems }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Navbar_ColorModeToggle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().colorModeToggle) }), !searchBarItem && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Navbar_Search__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_SearchBar__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null)))
      )
    }
  );
}


/***/ }),

/***/ 57075:
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ 57843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74728);
/* harmony import */ var _theme_Footer_Links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3289);
/* harmony import */ var _theme_Footer_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89051);
/* harmony import */ var _theme_Footer_Copyright__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77517);
/* harmony import */ var _theme_Footer_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14138);






function Footer() {
  const { footer } = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .useThemeConfig */ .p)();
  if (!footer) {
    return null;
  }
  const { copyright, links, logo, style } = footer;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _theme_Footer_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
    {
      style,
      links: links && links.length > 0 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Footer_Links__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { links }),
      logo: logo && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Footer_Logo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { logo }),
      copyright: copyright && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Footer_Copyright__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, { copyright })
    }
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0__.memo(Footer));


/***/ }),

/***/ 57932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ Collapsible),
/* harmony export */   u: () => (/* binding */ useCollapsible)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24759);
/* harmony import */ var _utils_accessibilityUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25543);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};



const DefaultAnimationEasing = "ease-in-out";
function useCollapsible({ initialState }) {
  const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState != null ? initialState : false);
  const toggleCollapsed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setCollapsed((expanded) => !expanded);
  }, []);
  return {
    collapsed,
    setCollapsed,
    toggleCollapsed
  };
}
const CollapsedStyles = {
  display: "none",
  overflow: "hidden",
  height: "0px"
};
const ExpandedStyles = {
  display: "block",
  overflow: "visible",
  height: "auto"
};
function applyCollapsedStyle(el, collapsed) {
  const collapsedStyles = collapsed ? CollapsedStyles : ExpandedStyles;
  el.style.display = collapsedStyles.display;
  el.style.overflow = collapsedStyles.overflow;
  el.style.height = collapsedStyles.height;
}
function getAutoHeightDuration(height) {
  if ((0,_utils_accessibilityUtils__WEBPACK_IMPORTED_MODULE_2__/* .prefersReducedMotion */ .O)()) {
    return 1;
  }
  const constant = height / 36;
  return Math.round((4 + 15 * __pow(constant, 0.25) + constant / 5) * 10);
}
function useCollapseAnimation({ collapsibleRef, collapsed, animation }) {
  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const el = collapsibleRef.current;
    function getTransitionStyles() {
      var _a, _b;
      const height = el.scrollHeight;
      const duration = (_a = animation == null ? void 0 : animation.duration) != null ? _a : getAutoHeightDuration(height);
      const easing = (_b = animation == null ? void 0 : animation.easing) != null ? _b : DefaultAnimationEasing;
      return {
        transition: `height ${duration}ms ${easing}`,
        height: `${height}px`
      };
    }
    function applyTransitionStyles() {
      const transitionStyles = getTransitionStyles();
      el.style.transition = transitionStyles.transition;
      el.style.height = transitionStyles.height;
    }
    if (!mounted.current) {
      applyCollapsedStyle(el, collapsed);
      mounted.current = true;
      return void 0;
    }
    el.style.willChange = "height";
    function startAnimation() {
      const animationFrame = requestAnimationFrame(() => {
        if (collapsed) {
          applyTransitionStyles();
          requestAnimationFrame(() => {
            el.style.height = CollapsedStyles.height;
            el.style.overflow = CollapsedStyles.overflow;
          });
        } else {
          el.style.display = "block";
          requestAnimationFrame(() => {
            applyTransitionStyles();
          });
        }
      });
      return () => cancelAnimationFrame(animationFrame);
    }
    return startAnimation();
  }, [collapsibleRef, collapsed, animation]);
}
function CollapsibleBase({ as: As = "div", collapsed, children, animation, onCollapseTransitionEnd, className }) {
  const collapsibleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  useCollapseAnimation({ collapsibleRef, collapsed, animation });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    As,
    {
      ref: collapsibleRef,
      onTransitionEnd: (e) => {
        if (e.propertyName !== "height") {
          return;
        }
        applyCollapsedStyle(collapsibleRef.current, collapsed);
        onCollapseTransitionEnd == null ? void 0 : onCollapseTransitionEnd(collapsed);
      },
      className
    },
    children
  );
}
function CollapsibleLazy(_a) {
  var _b = _a, { collapsed } = _b, props = __objRest(_b, ["collapsed"]);
  const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!collapsed);
  const [lazyCollapsed, setLazyCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(collapsed);
  (0,_docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(() => {
    if (!collapsed) {
      setMounted(true);
    }
  }, [collapsed]);
  (0,_docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(() => {
    if (mounted) {
      setLazyCollapsed(collapsed);
    }
  }, [mounted, collapsed]);
  return mounted ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(CollapsibleBase, __spreadProps(__spreadValues({}, props), { collapsed: lazyCollapsed })) : null;
}
function Collapsible(_c) {
  var _d = _c, { lazy } = _d, props = __objRest(_d, ["lazy"]);
  const Comp = lazy ? CollapsibleLazy : CollapsibleBase;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp, __spreadValues({}, props));
}


/***/ }),

/***/ 58044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ LocaleDropdownNavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(908);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99653);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91096);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56347);
/* harmony import */ var _theme_NavbarItem_DropdownNavbarItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19770);
/* harmony import */ var _theme_Icon_Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4020);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8244);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};








function LocaleDropdownNavbarItem(_a) {
  var _b = _a, {
    mobile,
    dropdownItemsBefore,
    dropdownItemsAfter,
    queryString = ""
  } = _b, props = __objRest(_b, [
    "mobile",
    "dropdownItemsBefore",
    "dropdownItemsAfter",
    "queryString"
  ]);
  const {
    i18n: { currentLocale, locales, localeConfigs }
  } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  const alternatePageUtils = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__/* .useAlternatePageUtils */ .o)();
  const { search, hash } = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_7__/* .useLocation */ .zy)();
  const localeItems = locales.map((locale) => {
    const baseTo = `pathname://${alternatePageUtils.createUrl({
      locale,
      fullyQualified: false
    })}`;
    const to = `${baseTo}${search}${hash}${queryString}`;
    return {
      label: localeConfigs[locale].label,
      lang: localeConfigs[locale].htmlLang,
      to,
      target: "_self",
      autoAddBaseUrl: false,
      className: (
        // eslint-disable-next-line no-nested-ternary
        locale === currentLocale ? (
          // Similar idea as DefaultNavbarItem: select the right Infima active
          // class name. This cannot be substituted with isActive, because the
          // target URLs contain `pathname://` and therefore are not NavLinks!
          mobile ? "menu__link--active" : "dropdown__link--active"
        ) : ""
      )
    };
  });
  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];
  const dropdownLabel = mobile ? (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .T)({
    message: "Languages",
    id: "theme.navbar.mobileLanguageDropdown.label",
    description: "The label for the mobile language switcher dropdown"
  }) : localeConfigs[currentLocale].label;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _theme_NavbarItem_DropdownNavbarItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
    __spreadProps(__spreadValues({}, props), {
      mobile,
      label: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Icon_Language__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, { className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().iconLanguage) }), dropdownLabel),
      items
    })
  );
}


/***/ }),

/***/ 58168:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ 58920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ FooterLinksSimple)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34164);
/* harmony import */ var _theme_Footer_LinkItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40059);



function Separator() {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "footer__link-separator" }, "\xB7");
}
function SimpleLinkItem({ item }) {
  return item.html ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "span",
    {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)("footer__link-item", item.className),
      dangerouslySetInnerHTML: { __html: item.html }
    }
  ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Footer_LinkItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { item });
}
function FooterLinksSimple({ links }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "footer__links text--center" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "footer__links" }, links.map((item, i) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: i }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SimpleLinkItem, { item }), links.length !== i + 1 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Separator, null)))));
}


/***/ }),

/***/ 59350:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.rA = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = exports.Ks = __webpack_unused_export__ = void 0;
const tslib_1 = __webpack_require__(31635);
__webpack_unused_export__ = "__blog-post-container";
var applyTrailingSlash_1 = __webpack_require__(29777);
Object.defineProperty(exports, "Ks", ({ enumerable: true, get: function() {
  return tslib_1.__importDefault(applyTrailingSlash_1).default;
} }));
__webpack_unused_export__ = ({ enumerable: true, get: function() {
  return applyTrailingSlash_1.addTrailingSlash;
} });
__webpack_unused_export__ = ({ enumerable: true, get: function() {
  return applyTrailingSlash_1.addLeadingSlash;
} });
__webpack_unused_export__ = ({ enumerable: true, get: function() {
  return applyTrailingSlash_1.removeTrailingSlash;
} });
var stringUtils_1 = __webpack_require__(83068);
__webpack_unused_export__ = ({ enumerable: true, get: function() {
  return stringUtils_1.addPrefix;
} });
__webpack_unused_export__ = ({ enumerable: true, get: function() {
  return stringUtils_1.removeSuffix;
} });
__webpack_unused_export__ = ({ enumerable: true, get: function() {
  return stringUtils_1.addSuffix;
} });
__webpack_unused_export__ = ({ enumerable: true, get: function() {
  return stringUtils_1.removePrefix;
} });
var errorUtils_1 = __webpack_require__(48431);
Object.defineProperty(exports, "rA", ({ enumerable: true, get: function() {
  return errorUtils_1.getErrorCausalChain;
} }));


/***/ }),

/***/ 59371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AnnouncementBarCloseButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91096);
/* harmony import */ var _theme_Icon_Close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53662);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97521);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));





function AnnouncementBarCloseButton(props) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "button",
    __spreadProps(__spreadValues({
      type: "button",
      "aria-label": (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({
        id: "theme.AnnouncementBar.closeButtonAriaLabel",
        message: "Close",
        description: "The ARIA label for close button of announcement bar"
      })
    }, props), {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)("clean-btn close", (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().closeButton), props.className)
    }),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Icon_Close__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { width: 14, height: 14, strokeWidth: 3.1 })
  );
}


/***/ }),

/***/ 59568:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"docusaurus-plugin-content-docs":{"default":{"path":"/docs/docs","versions":[{"name":"current","label":"Next","isLast":true,"path":"/docs/docs","mainDocId":"Syllabus_mat/sheet001","docs":[{"id":"Syllabus_mat/sheet001","path":"/docs/docs/Syllabus_mat/sheet001","sidebar":"docs"},{"id":"Syllabus_mat/sheet002","path":"/docs/docs/Syllabus_mat/sheet002","sidebar":"docs"},{"id":"Syllabus_mat/sheet003","path":"/docs/docs/Syllabus_mat/sheet003","sidebar":"docs"},{"id":"Syllabus_mat/sheet004","path":"/docs/docs/Syllabus_mat/sheet004","sidebar":"docs"},{"id":"Syllabus_mat/sheet005","path":"/docs/docs/Syllabus_mat/sheet005","sidebar":"docs"},{"id":"Syllabus_mat/tabstrip","path":"/docs/docs/Syllabus_mat/tabstrip","sidebar":"docs"}],"draftIds":[],"sidebars":{"docs":{"link":{"path":"/docs/docs/Syllabus_mat/sheet001","label":"Syllabus_mat/sheet001"}}}}],"breadcrumbs":true}}}');

/***/ }),

/***/ 61760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ RouteContextProvider),
/* harmony export */   o: () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
function mergeContexts({ parent, value }) {
  if (!parent) {
    if (!value) {
      throw new Error("Unexpected: no Docusaurus route context found");
    } else if (!("plugin" in value)) {
      throw new Error("Unexpected: Docusaurus topmost route context has no `plugin` attribute");
    }
    return value;
  }
  const data = __spreadValues(__spreadValues({}, parent.data), value == null ? void 0 : value.data);
  return {
    // Nested routes are not supposed to override plugin attribute
    plugin: parent.plugin,
    data
  };
}
function RouteContextProvider({ children, value }) {
  const parent = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);
  const mergedValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => mergeContexts({ parent, value }), [parent, value]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, { value: mergedValue }, children);
}


/***/ }),

/***/ 62391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ useAnnouncementBar),
/* harmony export */   o: () => (/* binding */ AnnouncementBarProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42517);
/* harmony import */ var _utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95072);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31450);
/* harmony import */ var _utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74728);





const AnnouncementBarDismissStorage = (0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__/* .createStorageSlot */ .Wf)("docusaurus.announcement.dismiss");
const IdStorage = (0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__/* .createStorageSlot */ .Wf)("docusaurus.announcement.id");
const isDismissedInStorage = () => AnnouncementBarDismissStorage.get() === "true";
const setDismissedInStorage = (bool) => AnnouncementBarDismissStorage.set(String(bool));
const Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
function useContextValue() {
  const { announcementBar } = (0,_utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_3__/* .useThemeConfig */ .p)();
  const isBrowser = (0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  const [isClosed, setClosed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => isBrowser ? (
    // On client navigation: init with local storage value
    isDismissedInStorage()
  ) : (
    // On server/hydration: always visible to prevent layout shifts (will be hidden with css if needed)
    false
  ));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setClosed(isDismissedInStorage());
  }, []);
  const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setDismissedInStorage(true);
    setClosed(true);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!announcementBar) {
      return;
    }
    const { id } = announcementBar;
    let viewedId = IdStorage.get();
    if (viewedId === "annoucement-bar") {
      viewedId = "announcement-bar";
    }
    const isNewAnnouncement = id !== viewedId;
    IdStorage.set(id);
    if (isNewAnnouncement) {
      setDismissedInStorage(false);
    }
    if (isNewAnnouncement || !isDismissedInStorage()) {
      setClosed(false);
    }
  }, [announcementBar]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    isActive: !!announcementBar && !isClosed,
    close: handleClose
  }), [announcementBar, isClosed, handleClose]);
}
function AnnouncementBarProvider({ children }) {
  const value = useContextValue();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, { value }, children);
}
function useAnnouncementBar() {
  const api = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
  if (!api) {
    throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_4__/* .ReactContextError */ .dV("AnnouncementBarProvider");
  }
  return api;
}


/***/ }),

/***/ 62462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ isRegexpStringMatch)
/* harmony export */ });
function isRegexpStringMatch(regexAsString, valueToTest) {
  if (typeof regexAsString === "undefined" || typeof valueToTest === "undefined") {
    return false;
  }
  return new RegExp(regexAsString, "gi").test(valueToTest);
}


/***/ }),

/***/ 62513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ ThemeClassNames)
/* harmony export */ });
const ThemeClassNames = {
  page: {
    blogListPage: "blog-list-page",
    blogPostPage: "blog-post-page",
    blogTagsListPage: "blog-tags-list-page",
    blogTagPostListPage: "blog-tags-post-list-page",
    blogAuthorsListPage: "blog-authors-list-page",
    blogAuthorsPostsPage: "blog-authors-posts-page",
    docsDocPage: "docs-doc-page",
    docsTagsListPage: "docs-tags-list-page",
    docsTagDocListPage: "docs-tags-doc-list-page",
    mdxPage: "mdx-page"
  },
  // TODO Docusaurus v4: remove old classes?
  wrapper: {
    main: "main-wrapper",
    // replaced by theme-layout-main
    // TODO these wrapper class names are now quite useless
    // TODO do breaking change later in 3.0
    // we already add plugin name/id class on <html>: that's enough
    blogPages: "blog-wrapper",
    docsPages: "docs-wrapper",
    mdxPages: "mdx-wrapper"
  },
  common: {
    editThisPage: "theme-edit-this-page",
    lastUpdated: "theme-last-updated",
    backToTopButton: "theme-back-to-top-button",
    codeBlock: "theme-code-block",
    admonition: "theme-admonition",
    unlistedBanner: "theme-unlisted-banner",
    draftBanner: "theme-draft-banner",
    admonitionType: (type) => `theme-admonition-${type}`
  },
  announcementBar: {
    container: "theme-announcement-bar"
  },
  layout: {
    navbar: {
      container: "theme-layout-navbar",
      containerLeft: "theme-layout-navbar-left",
      containerRight: "theme-layout-navbar-right",
      mobileSidebar: {
        container: "theme-layout-navbar-sidebar",
        panel: "theme-layout-navbar-sidebar-panel"
      }
    },
    main: {
      container: "theme-layout-main"
    },
    footer: {
      container: "theme-layout-footer",
      column: "theme-layout-footer-column"
    }
  },
  /**
   * Follows the naming convention "theme-{blog,doc,version,page}?-<suffix>"
   */
  docs: {
    docVersionBanner: "theme-doc-version-banner",
    docVersionBadge: "theme-doc-version-badge",
    docBreadcrumbs: "theme-doc-breadcrumbs",
    docMarkdown: "theme-doc-markdown",
    docTocMobile: "theme-doc-toc-mobile",
    docTocDesktop: "theme-doc-toc-desktop",
    docFooter: "theme-doc-footer",
    docFooterTagsRow: "theme-doc-footer-tags-row",
    docFooterEditMetaRow: "theme-doc-footer-edit-meta-row",
    docSidebarContainer: "theme-doc-sidebar-container",
    docSidebarMenu: "theme-doc-sidebar-menu",
    docSidebarItemCategory: "theme-doc-sidebar-item-category",
    docSidebarItemLink: "theme-doc-sidebar-item-link",
    docSidebarItemCategoryLevel: (level) => `theme-doc-sidebar-item-category-level-${level}`,
    docSidebarItemLinkLevel: (level) => `theme-doc-sidebar-item-link-level-${level}`
    // TODO add other stable classNames here
  },
  blog: {
    // TODO add other stable classNames here
    blogFooterTagsRow: "theme-blog-footer-tags-row",
    blogFooterEditMetaRow: "theme-blog-footer-edit-meta-row"
  },
  pages: {
    pageFooterEditMetaRow: "theme-pages-footer-edit-meta-row"
  }
};


/***/ }),

/***/ 62517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarMobileSidebarHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48983);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91096);
/* harmony import */ var _theme_Navbar_ColorModeToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15497);
/* harmony import */ var _theme_Icon_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53662);
/* harmony import */ var _theme_Navbar_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3228);






function CloseButton() {
  const mobileSidebar = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__/* .useNavbarMobileSidebar */ .M)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "button",
    {
      type: "button",
      "aria-label": (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({
        id: "theme.docs.sidebar.closeSidebarButtonAriaLabel",
        message: "Close navigation bar",
        description: "The ARIA label for close button of mobile sidebar"
      }),
      className: "clean-btn navbar-sidebar__close",
      onClick: () => mobileSidebar.toggle()
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Icon_Close__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, { color: "var(--ifm-color-emphasis-600)" })
  );
}
function NavbarMobileSidebarHeader() {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "navbar-sidebar__brand" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Navbar_Logo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Navbar_ColorModeToggle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { className: "margin-right--md" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(CloseButton, null));
}


/***/ }),

/***/ 63662:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ 64634:
/***/ ((module) => {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 65668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SiteMetadataDefaults)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(914);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(908);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97951);




function SiteMetadataDefaults() {
  const { siteConfig: { favicon, title, noIndex }, i18n: { currentLocale, localeConfigs } } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
  const faviconUrl = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay)(favicon);
  const { htmlLang, direction: htmlDir } = localeConfigs[currentLocale];
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("html", { lang: htmlLang, dir: htmlDir }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, title), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { property: "og:title", content: title }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }), noIndex && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { name: "robots", content: "noindex, nofollow" }), favicon && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", { rel: "icon", href: faviconUrl }));
}


/***/ }),

/***/ 67602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarMobileSidebarLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45933);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62513);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};




function inertProps(inert) {
  const isBeforeReact19 = parseInt(react__WEBPACK_IMPORTED_MODULE_0__.version.split(".")[0], 10) < 19;
  if (isBeforeReact19) {
    return { inert: inert ? "" : void 0 };
  }
  return { inert };
}
function NavbarMobileSidebarPanel({ children, inert }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    __spreadValues({
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(
        _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .ThemeClassNames */ .G.layout.navbar.mobileSidebar.panel,
        "navbar-sidebar__item menu"
      )
    }, inertProps(inert)),
    children
  );
}
function NavbarMobileSidebarLayout({
  header,
  primaryMenu,
  secondaryMenu
}) {
  const { shown: secondaryMenuShown } = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .useNavbarSecondaryMenu */ .T)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(
        _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .ThemeClassNames */ .G.layout.navbar.mobileSidebar.container,
        "navbar-sidebar"
      )
    },
    header,
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)("navbar-sidebar__items", {
          "navbar-sidebar__items--show-secondary": secondaryMenuShown
        })
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavbarMobileSidebarPanel, { inert: secondaryMenuShown }, primaryMenu),
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavbarMobileSidebarPanel, { inert: !secondaryMenuShown }, secondaryMenu)
    )
  );
}


/***/ }),

/***/ 69769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _generated_client_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43733);
/* harmony import */ var _generated_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97272);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56347);
/* harmony import */ var _docusaurus_renderRoutes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22831);
/* harmony import */ var _theme_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19634);
/* harmony import */ var _theme_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(608);
/* harmony import */ var _theme_SiteMetadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36334);
/* harmony import */ var _normalizeLocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19758);
/* harmony import */ var _browserContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92287);
/* harmony import */ var _docusaurusContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27631);
/* harmony import */ var _PendingNavigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79607);
/* harmony import */ var _BaseUrlIssueBanner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53660);
/* harmony import */ var _SiteMetadataDefaults__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65668);
/* harmony import */ var _docusaurus_ErrorBoundary__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36022);
/* harmony import */ var _hasHydratedDataAttribute__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(93559);
















const routesElement = (0,_docusaurus_renderRoutes__WEBPACK_IMPORTED_MODULE_14__/* .renderRoutes */ .v)(_generated_routes__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
function AppNavigation() {
  const location = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_15__/* .useLocation */ .zy)();
  const normalizedLocation = (0,_normalizeLocation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(location);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PendingNavigation__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, { location: normalizedLocation }, routesElement);
}
function App() {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_ErrorBoundary__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurusContext__WEBPACK_IMPORTED_MODULE_8__/* .DocusaurusContextProvider */ .l, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_browserContext__WEBPACK_IMPORTED_MODULE_7__/* .BrowserContextProvider */ .x, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Root__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SiteMetadataDefaults__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_SiteMetadata__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BaseUrlIssueBanner__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppNavigation, null))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_hasHydratedDataAttribute__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null))));
}


/***/ }),

/***/ 69907:
/***/ ((module) => {

// Exports
module.exports = {
	"dropdownNavbarItemMobile": `dropdownNavbarItemMobile_J0Sd`
};


/***/ }),

/***/ 71238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DefaultNavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem_Mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39657);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem_Desktop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93565);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};



function DefaultNavbarItem(_a) {
  var _b = _a, {
    mobile = false,
    position
  } = _b, props = __objRest(_b, [
    "mobile",
    "position"
  ]);
  var _a2;
  const Comp = mobile ? _theme_NavbarItem_DefaultNavbarItem_Mobile__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A : _theme_NavbarItem_DefaultNavbarItem_Desktop__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    Comp,
    __spreadProps(__spreadValues({}, props), {
      activeClassName: (_a2 = props.activeClassName) != null ? _a2 : mobile ? "menu__link--active" : "navbar__link--active"
    })
  );
}


/***/ }),

/***/ 71455:
/***/ ((module) => {

// Exports
module.exports = {
	"iconExternalLink": `iconExternalLink_nPIU`
};


/***/ }),

/***/ 72213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $3: () => (/* binding */ createStatefulBrokenLinks),
/* harmony export */   B6: () => (/* binding */ useBrokenLinksContext),
/* harmony export */   k5: () => (/* binding */ BrokenLinksProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

const createStatefulBrokenLinks = () => {
  const allAnchors = /* @__PURE__ */ new Set();
  const allLinks = /* @__PURE__ */ new Set();
  return {
    collectAnchor: (anchor) => {
      typeof anchor !== "undefined" && allAnchors.add(anchor);
    },
    collectLink: (link) => {
      typeof link !== "undefined" && allLinks.add(link);
    },
    getCollectedAnchors: () => [...allAnchors],
    getCollectedLinks: () => [...allLinks]
  };
};
const Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  collectAnchor: () => {
  },
  collectLink: () => {
  }
});
const useBrokenLinksContext = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
function BrokenLinksProvider({ children, brokenLinks }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, { value: brokenLinks }, children);
}


/***/ }),

/***/ 74728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ useThemeConfig)
/* harmony export */ });
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(908);

function useThemeConfig() {
  return (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)().siteConfig.themeConfig;
}


/***/ }),

/***/ 75068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ isInternalUrl),
/* harmony export */   z: () => (/* binding */ hasProtocol)
/* harmony export */ });
function hasProtocol(url) {
  return /^(?:\w*:|\/\/)/.test(url);
}
function isInternalUrl(url) {
  return typeof url !== "undefined" && !hasProtocol(url);
}


/***/ }),

/***/ 77209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DropdownNavbarItemDesktop)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34164);
/* harmony import */ var _theme_NavbarItem_NavbarNavLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99186);
/* harmony import */ var _theme_NavbarItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84989);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




function DropdownNavbarItemDesktop(_a) {
  var _b = _a, {
    items,
    position,
    className,
    onClick
  } = _b, props = __objRest(_b, [
    "items",
    "position",
    "className",
    "onClick"
  ]);
  var _a2;
  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [showDropdown, setShowDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current || dropdownRef.current.contains(event.target)) {
        return;
      }
      setShowDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("focusin", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("focusin", handleClickOutside);
    };
  }, [dropdownRef]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      ref: dropdownRef,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)("navbar__item", "dropdown", "dropdown--hoverable", {
        "dropdown--right": position === "right",
        "dropdown--show": showDropdown
      })
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _theme_NavbarItem_NavbarNavLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
      __spreadProps(__spreadValues({
        "aria-haspopup": "true",
        "aria-expanded": showDropdown,
        role: "button",
        href: props.to ? void 0 : "#",
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)("navbar__link", className)
      }, props), {
        onClick: props.to ? void 0 : (e) => e.preventDefault(),
        onKeyDown: (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            setShowDropdown(!showDropdown);
          }
        }
      }),
      (_a2 = props.children) != null ? _a2 : props.label
    ),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: "dropdown__menu" }, items.map((childItemProps, i) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _theme_NavbarItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
      __spreadProps(__spreadValues({
        isDropdownItem: true,
        activeClassName: "dropdown__link--active"
      }, childItemProps), {
        key: i
      })
    )))
  );
}


/***/ }),

/***/ 77387:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63662);

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t, o);
}


/***/ }),

/***/ 77517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ FooterCopyright)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

function FooterCopyright({ copyright }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      className: "footer__copyright",
      dangerouslySetInnerHTML: { __html: copyright }
    }
  );
}


/***/ }),

/***/ 78473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IconExternalLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71455);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);


const svgSprite = "#theme-svg-external-link";
function IconExternalLink({ width = 13.5, height = 13.5 }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "svg",
    {
      width,
      height,
      "aria-hidden": "true",
      className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().iconExternalLink)
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", { href: svgSprite })
  );
}


/***/ }),

/***/ 78484:
/***/ ((module) => {

// Exports
module.exports = {
	"colorModeToggle": `colorModeToggle_DEke`
};


/***/ }),

/***/ 79607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56347);
/* harmony import */ var _ClientLifecyclesDispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39915);
/* harmony import */ var _exports_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93099);
/* harmony import */ var _preload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12615);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);





class PendingNavigation extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    __publicField(this, "previousLocation");
    __publicField(this, "routeUpdateCleanupCb");
    this.previousLocation = null;
    this.routeUpdateCleanupCb = _exports_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.canUseDOM ? (0,_ClientLifecyclesDispatcher__WEBPACK_IMPORTED_MODULE_1__/* .dispatchLifecycleAction */ .n)("onRouteUpdate", {
      previousLocation: null,
      location: this.props.location
    }) : () => {
    };
    this.state = {
      nextRouteHasLoaded: true
    };
  }
  // Intercept location update and still show current route until next route
  // is done loading.
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.location === this.props.location) {
      return nextState.nextRouteHasLoaded;
    }
    const nextLocation = nextProps.location;
    this.previousLocation = this.props.location;
    this.setState({ nextRouteHasLoaded: false });
    this.routeUpdateCleanupCb = (0,_ClientLifecyclesDispatcher__WEBPACK_IMPORTED_MODULE_1__/* .dispatchLifecycleAction */ .n)("onRouteUpdate", {
      previousLocation: this.previousLocation,
      location: nextLocation
    });
    (0,_preload__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(nextLocation.pathname).then(() => {
      this.routeUpdateCleanupCb();
      this.setState({ nextRouteHasLoaded: true });
    }).catch((e) => {
      console.warn(e);
      window.location.reload();
    });
    return false;
  }
  render() {
    const { children, location } = this.props;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ClientLifecyclesDispatcher__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { previousLocation: this.previousLocation, location }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .Route */ .qh, { location, render: () => children }));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PendingNavigation);


/***/ }),

/***/ 80358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91096);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74728);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46100);
/* harmony import */ var _docusaurus_useBrokenLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17227);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84738);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};







function Heading(_a) {
  var _b = _a, { as: As, id } = _b, props = __objRest(_b, ["as", "id"]);
  const brokenLinks = (0,_docusaurus_useBrokenLinks__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();
  const {
    navbar: { hideOnScroll }
  } = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .useThemeConfig */ .p)();
  if (As === "h1" || !id) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(As, __spreadProps(__spreadValues({}, props), { id: void 0 }));
  }
  brokenLinks.collectAnchor(id);
  const anchorTitle = (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)(
    {
      id: "theme.common.headingLinkTitle",
      message: "Direct link to {heading}",
      description: "Title for link to heading"
    },
    {
      heading: typeof props.children === "string" ? props.children : id
    }
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    As,
    __spreadProps(__spreadValues({}, props), {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(
        "anchor",
        hideOnScroll ? (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().anchorWithHideOnScrollNavbar) : (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().anchorWithStickyNavbar),
        props.className
      ),
      id
    }),
    props.children,
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
      {
        className: "hash-link",
        to: `#${id}`,
        "aria-label": anchorTitle,
        title: anchorTitle
      },
      "\u200B"
    )
  );
}


/***/ }),

/***/ 80545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mg: () => (/* binding */ W),
/* harmony export */   vd: () => (/* binding */ q)
/* harmony export */ });
/* unused harmony export HelmetData */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30115);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87927);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2833);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_3__);
function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,c(t,e)}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function u(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)e.indexOf(r=o[n])>=0||(i[r]=t[r]);return i}var l={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},p={rel:["amphtml","canonical","alternate"]},f={type:["application/ld+json"]},d={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},h=Object.keys(l).map(function(t){return l[t]}),m={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},y=Object.keys(m).reduce(function(t,e){return t[m[e]]=e,t},{}),T=function(t,e){for(var r=t.length-1;r>=0;r-=1){var n=t[r];if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}return null},g=function(t){var e=T(t,l.TITLE),r=T(t,"titleTemplate");if(Array.isArray(e)&&(e=e.join("")),r&&e)return r.replace(/%s/g,function(){return e});var n=T(t,"defaultTitle");return e||n||void 0},b=function(t){return T(t,"onChangeClientState")||function(){}},v=function(t,e){return e.filter(function(e){return void 0!==e[t]}).map(function(e){return e[t]}).reduce(function(t,e){return a({},t,e)},{})},A=function(t,e){return e.filter(function(t){return void 0!==t[l.BASE]}).map(function(t){return t[l.BASE]}).reverse().reduce(function(e,r){if(!e.length)for(var n=Object.keys(r),i=0;i<n.length;i+=1){var o=n[i].toLowerCase();if(-1!==t.indexOf(o)&&r[o])return e.concat(r)}return e},[])},C=function(t,e,r){var n={};return r.filter(function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&console&&"function"==typeof console.warn&&console.warn("Helmet: "+t+' should be of type "Array". Instead found type "'+typeof e[t]+'"'),!1)}).map(function(e){return e[t]}).reverse().reduce(function(t,r){var i={};r.filter(function(t){for(var r,o=Object.keys(t),a=0;a<o.length;a+=1){var s=o[a],c=s.toLowerCase();-1===e.indexOf(c)||"rel"===r&&"canonical"===t[r].toLowerCase()||"rel"===c&&"stylesheet"===t[c].toLowerCase()||(r=c),-1===e.indexOf(s)||"innerHTML"!==s&&"cssText"!==s&&"itemprop"!==s||(r=s)}if(!r||!t[r])return!1;var u=t[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][u]&&(i[r][u]=!0,!0)}).reverse().forEach(function(e){return t.push(e)});for(var o=Object.keys(i),s=0;s<o.length;s+=1){var c=o[s],u=a({},n[c],i[c]);n[c]=u}return t},[]).reverse()},O=function(t,e){if(Array.isArray(t)&&t.length)for(var r=0;r<t.length;r+=1)if(t[r][e])return!0;return!1},S=function(t){return Array.isArray(t)?t.join(""):t},E=function(t,e){return Array.isArray(t)?t.reduce(function(t,r){return function(t,e){for(var r=Object.keys(t),n=0;n<r.length;n+=1)if(e[r[n]]&&e[r[n]].includes(t[r[n]]))return!0;return!1}(r,e)?t.priority.push(r):t.default.push(r),t},{priority:[],default:[]}):{default:t}},I=function(t,e){var r;return a({},t,((r={})[e]=void 0,r))},P=[l.NOSCRIPT,l.SCRIPT,l.STYLE],w=function(t,e){return void 0===e&&(e=!0),!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},x=function(t){return Object.keys(t).reduce(function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n},"")},L=function(t,e){return void 0===e&&(e={}),Object.keys(t).reduce(function(e,r){return e[m[r]||r]=t[r],e},e)},j=function(e,r){return r.map(function(r,n){var i,o=((i={key:n})["data-rh"]=!0,i);return Object.keys(r).forEach(function(t){var e=m[t]||t;"innerHTML"===e||"cssText"===e?o.dangerouslySetInnerHTML={__html:r.innerHTML||r.cssText}:o[e]=r[t]}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(e,o)})},M=function(e,r,n){switch(e){case l.TITLE:return{toComponent:function(){return n=r.titleAttributes,(i={key:e=r.title})["data-rh"]=!0,o=L(n,i),[react__WEBPACK_IMPORTED_MODULE_0__.createElement(l.TITLE,o,e)];// removed by dead control flow
{ var e, n, i, o; }},toString:function(){return function(t,e,r,n){var i=x(r),o=S(e);return i?"<"+t+' data-rh="true" '+i+">"+w(o,n)+"</"+t+">":"<"+t+' data-rh="true">'+w(o,n)+"</"+t+">"}(e,r.title,r.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return L(r)},toString:function(){return x(r)}};default:return{toComponent:function(){return j(e,r)},toString:function(){return function(t,e,r){return e.reduce(function(e,n){var i=Object.keys(n).filter(function(t){return!("innerHTML"===t||"cssText"===t)}).reduce(function(t,e){var i=void 0===n[e]?e:e+'="'+w(n[e],r)+'"';return t?t+" "+i:i},""),o=n.innerHTML||n.cssText||"",a=-1===P.indexOf(t);return e+"<"+t+' data-rh="true" '+i+(a?"/>":">"+o+"</"+t+">")},"")}(e,r,n)}}}},k=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,i=t.htmlAttributes,o=t.noscriptTags,a=t.styleTags,s=t.title,c=void 0===s?"":s,u=t.titleAttributes,h=t.linkTags,m=t.metaTags,y=t.scriptTags,T={toComponent:function(){},toString:function(){return""}};if(t.prioritizeSeoTags){var g=function(t){var e=t.linkTags,r=t.scriptTags,n=t.encode,i=E(t.metaTags,d),o=E(e,p),a=E(r,f);return{priorityMethods:{toComponent:function(){return[].concat(j(l.META,i.priority),j(l.LINK,o.priority),j(l.SCRIPT,a.priority))},toString:function(){return M(l.META,i.priority,n)+" "+M(l.LINK,o.priority,n)+" "+M(l.SCRIPT,a.priority,n)}},metaTags:i.default,linkTags:o.default,scriptTags:a.default}}(t);T=g.priorityMethods,h=g.linkTags,m=g.metaTags,y=g.scriptTags}return{priority:T,base:M(l.BASE,e,n),bodyAttributes:M("bodyAttributes",r,n),htmlAttributes:M("htmlAttributes",i,n),link:M(l.LINK,h,n),meta:M(l.META,m,n),noscript:M(l.NOSCRIPT,o,n),script:M(l.SCRIPT,y,n),style:M(l.STYLE,a,n),title:M(l.TITLE,{title:c,titleAttributes:u},n)}},H=[],N=function(t,e){var r=this;void 0===e&&(e="undefined"!=typeof document),this.instances=[],this.value={setHelmet:function(t){r.context.helmet=t},helmetInstances:{get:function(){return r.canUseDOM?H:r.instances},add:function(t){(r.canUseDOM?H:r.instances).push(t)},remove:function(t){var e=(r.canUseDOM?H:r.instances).indexOf(t);(r.canUseDOM?H:r.instances).splice(e,1)}}},this.context=t,this.canUseDOM=e,e||(t.helmet=k({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},R=react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),D=prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({setHelmet:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),helmetInstances:prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({get:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),add:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),remove:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)})}),U="undefined"!=typeof document,q=/*#__PURE__*/function(e){function r(t){var n;return(n=e.call(this,t)||this).helmetData=new N(n.props.context,r.canUseDOM),n}return s(r,e),r.prototype.render=function(){/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(R.Provider,{value:this.helmetData.value},this.props.children)},r}(react__WEBPACK_IMPORTED_MODULE_0__.Component);q.canUseDOM=U,q.propTypes={context:prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({helmet:prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape()}),children:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node).isRequired},q.defaultProps={context:{}},q.displayName="HelmetProvider";var Y=function(t,e){var r,n=document.head||document.querySelector(l.HEAD),i=n.querySelectorAll(t+"[data-rh]"),o=[].slice.call(i),a=[];return e&&e.length&&e.forEach(function(e){var n=document.createElement(t);for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&("innerHTML"===i?n.innerHTML=e.innerHTML:"cssText"===i?n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText)):n.setAttribute(i,void 0===e[i]?"":e[i]));n.setAttribute("data-rh","true"),o.some(function(t,e){return r=e,n.isEqualNode(t)})?o.splice(r,1):a.push(n)}),o.forEach(function(t){return t.parentNode.removeChild(t)}),a.forEach(function(t){return n.appendChild(t)}),{oldTags:o,newTags:a}},B=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute("data-rh"),i=n?n.split(","):[],o=[].concat(i),a=Object.keys(e),s=0;s<a.length;s+=1){var c=a[s],u=e[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===i.indexOf(c)&&i.push(c);var l=o.indexOf(c);-1!==l&&o.splice(l,1)}for(var p=o.length-1;p>=0;p-=1)r.removeAttribute(o[p]);i.length===o.length?r.removeAttribute("data-rh"):r.getAttribute("data-rh")!==a.join(",")&&r.setAttribute("data-rh",a.join(","))}},K=function(t,e){var r=t.baseTag,n=t.htmlAttributes,i=t.linkTags,o=t.metaTags,a=t.noscriptTags,s=t.onChangeClientState,c=t.scriptTags,u=t.styleTags,p=t.title,f=t.titleAttributes;B(l.BODY,t.bodyAttributes),B(l.HTML,n),function(t,e){void 0!==t&&document.title!==t&&(document.title=S(t)),B(l.TITLE,e)}(p,f);var d={baseTag:Y(l.BASE,r),linkTags:Y(l.LINK,i),metaTags:Y(l.META,o),noscriptTags:Y(l.NOSCRIPT,a),scriptTags:Y(l.SCRIPT,c),styleTags:Y(l.STYLE,u)},h={},m={};Object.keys(d).forEach(function(t){var e=d[t],r=e.newTags,n=e.oldTags;r.length&&(h[t]=r),n.length&&(m[t]=d[t].oldTags)}),e&&e(),s(t,h,m)},_=null,z=/*#__PURE__*/function(t){function e(){for(var e,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this).rendered=!1,e}s(e,t);var r=e.prototype;return r.shouldComponentUpdate=function(t){return!shallowequal__WEBPACK_IMPORTED_MODULE_3___default()(t,this.props)},r.componentDidUpdate=function(){this.emitChange()},r.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},r.emitChange=function(){var t,e,r=this.props.context,n=r.setHelmet,i=null,o=(t=r.helmetInstances.get().map(function(t){var e=a({},t.props);return delete e.context,e}),{baseTag:A(["href"],t),bodyAttributes:v("bodyAttributes",t),defer:T(t,"defer"),encode:T(t,"encodeSpecialCharacters"),htmlAttributes:v("htmlAttributes",t),linkTags:C(l.LINK,["rel","href"],t),metaTags:C(l.META,["name","charset","http-equiv","property","itemprop"],t),noscriptTags:C(l.NOSCRIPT,["innerHTML"],t),onChangeClientState:b(t),scriptTags:C(l.SCRIPT,["src","innerHTML"],t),styleTags:C(l.STYLE,["cssText"],t),title:g(t),titleAttributes:v("titleAttributes",t),prioritizeSeoTags:O(t,"prioritizeSeoTags")});q.canUseDOM?(e=o,_&&cancelAnimationFrame(_),e.defer?_=requestAnimationFrame(function(){K(e,function(){_=null})}):(K(e),_=null)):k&&(i=k(o)),n(i)},r.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},r.render=function(){return this.init(),null},e}(react__WEBPACK_IMPORTED_MODULE_0__.Component);z.propTypes={context:D.isRequired},z.displayName="HelmetDispatcher";var F=["children"],G=["children"],W=/*#__PURE__*/function(e){function r(){return e.apply(this,arguments)||this}s(r,e);var o=r.prototype;return o.shouldComponentUpdate=function(t){return!react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(I(this.props,"helmetData"),I(t,"helmetData"))},o.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case l.SCRIPT:case l.NOSCRIPT:return{innerHTML:e};case l.STYLE:return{cssText:e};default:throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},o.flattenArrayTypeChildren=function(t){var e,r=t.child,n=t.arrayTypeChildren;return a({},n,((e={})[r.type]=[].concat(n[r.type]||[],[a({},t.newChildProps,this.mapNestedChildrenToProps(r,t.nestedChildren))]),e))},o.mapObjectTypeChildren=function(t){var e,r,n=t.child,i=t.newProps,o=t.newChildProps,s=t.nestedChildren;switch(n.type){case l.TITLE:return a({},i,((e={})[n.type]=s,e.titleAttributes=a({},o),e));case l.BODY:return a({},i,{bodyAttributes:a({},o)});case l.HTML:return a({},i,{htmlAttributes:a({},o)});default:return a({},i,((r={})[n.type]=a({},o),r))}},o.mapArrayTypeChildrenToProps=function(t,e){var r=a({},e);return Object.keys(t).forEach(function(e){var n;r=a({},r,((n={})[e]=t[e],n))}),r},o.warnOnInvalidChildren=function(t,e){return invariant__WEBPACK_IMPORTED_MODULE_2___default()(h.some(function(e){return t.type===e}),"function"==typeof t.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+h.join(", ")+" are allowed. Helmet does not support rendering <"+t.type+"> elements. Refer to our API for more information."),invariant__WEBPACK_IMPORTED_MODULE_2___default()(!e||"string"==typeof e||Array.isArray(e)&&!e.some(function(t){return"string"!=typeof t}),"Helmet expects a string as a child of <"+t.type+">. Did you forget to wrap your children in braces? ( <"+t.type+">{``}</"+t.type+"> ) Refer to our API for more information."),!0},o.mapChildrenToProps=function(e,r){var n=this,i={};return react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(e,function(t){if(t&&t.props){var e=t.props,o=e.children,a=u(e,F),s=Object.keys(a).reduce(function(t,e){return t[y[e]||e]=a[e],t},{}),c=t.type;switch("symbol"==typeof c?c=c.toString():n.warnOnInvalidChildren(t,o),c){case l.FRAGMENT:r=n.mapChildrenToProps(o,r);break;case l.LINK:case l.META:case l.NOSCRIPT:case l.SCRIPT:case l.STYLE:i=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:i,newChildProps:s,nestedChildren:o});break;default:r=n.mapObjectTypeChildren({child:t,newProps:r,newChildProps:s,nestedChildren:o})}}}),this.mapArrayTypeChildrenToProps(i,r)},o.render=function(){var e=this.props,r=e.children,n=u(e,G),i=a({},n),o=n.helmetData;return r&&(i=this.mapChildrenToProps(r,i)),!o||o instanceof N||(o=new N(o.context,o.instances)),o?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(z,a({},i,{context:o.value,helmetData:void 0})):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(R.Consumer,null,function(e){/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(z,a({},i,{context:e}))})},r}(react__WEBPACK_IMPORTED_MODULE_0__.Component);W.propTypes={base:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),bodyAttributes:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)),(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)]),defaultTitle:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),defer:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),encodeSpecialCharacters:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),htmlAttributes:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),link:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),meta:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),noscript:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),onChangeClientState:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),script:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),style:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),title:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),titleAttributes:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),titleTemplate:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),prioritizeSeoTags:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),helmetData:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)},W.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},W.displayName="Helmet";
//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ 80634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _theme_Navbar_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37161);
/* harmony import */ var _theme_Navbar_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56948);



function Navbar() {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Navbar_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Navbar_Content__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null));
}


/***/ }),

/***/ 80740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ isMultiColumnFooterLinks)
/* harmony export */ });
function isMultiColumnFooterLinks(links) {
  return "title" in links[0];
}


/***/ }),

/***/ 81700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ThemedImage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1822);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};


function ThemedImage(props) {
  const _a = props, { sources, className: parentClassName, alt } = _a, propsRest = __objRest(_a, ["sources", "className", "alt"]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { className: parentClassName }, ({ theme, className }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "img",
    __spreadValues({
      src: sources[theme],
      alt,
      className
    }, propsRest)
  ));
}


/***/ }),

/***/ 82449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IconMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

function IconMenu(_a) {
  var _b = _a, {
    width = 30,
    height = 30,
    className
  } = _b, restProps = __objRest(_b, [
    "width",
    "height",
    "className"
  ]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "svg",
    __spreadValues({
      className,
      width,
      height,
      viewBox: "0 0 30 30",
      "aria-hidden": "true"
    }, restProps),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeMiterlimit: "10",
        strokeWidth: "2",
        d: "M4 7h22M4 15h22M4 23h22"
      }
    )
  );
}


/***/ }),

/***/ 82638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocSidebarNavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95730);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48290);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71238);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};



function DocSidebarNavbarItem(_a) {
  var _b = _a, {
    sidebarId,
    label,
    docsPluginId
  } = _b, props = __objRest(_b, [
    "sidebarId",
    "label",
    "docsPluginId"
  ]);
  const { activeDoc } = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_2__/* .useActiveDocContext */ .zK)(docsPluginId);
  const sidebarLink = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .useLayoutDocsSidebar */ .fW)(sidebarId, docsPluginId).link;
  if (!sidebarLink) {
    throw new Error(
      `DocSidebarNavbarItem: Sidebar with ID "${sidebarId}" doesn't have anything to be linked to.`
    );
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    __spreadProps(__spreadValues({
      exact: true
    }, props), {
      isActive: () => (activeDoc == null ? void 0 : activeDoc.sidebar) === sidebarId,
      label: label != null ? label : sidebarLink.label,
      to: sidebarLink.path
    })
  );
}


/***/ }),

/***/ 83068:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addPrefix = addPrefix;
exports.removeSuffix = removeSuffix;
exports.addSuffix = addSuffix;
exports.removePrefix = removePrefix;
function addPrefix(str, prefix) {
  return str.startsWith(prefix) ? str : `${prefix}${str}`;
}
function removeSuffix(str, suffix) {
  if (suffix === "") {
    return str;
  }
  return str.endsWith(suffix) ? str.slice(0, -suffix.length) : str;
}
function addSuffix(str, suffix) {
  return str.endsWith(suffix) ? str : `${str}${suffix}`;
}
function removePrefix(str, prefix) {
  return str.startsWith(prefix) ? str.slice(prefix.length) : str;
}


/***/ }),

/***/ 83127:
/***/ ((module) => {

// Exports
module.exports = {
	"darkNavbarColorModeToggle": `darkNavbarColorModeToggle_X3D1`
};


/***/ }),

/***/ 84054:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"/docs/CustomDesign-396":{"__comp":"46d93119","__context":{"plugin":"a7456010"},"config":"5e9f5e1a"},"/docs/Home-d7d":{"__comp":"5f9c5a64","__context":{"plugin":"a7456010"},"config":"5e9f5e1a"},"/docs/loading/-596":{"__comp":"9a512cec","__context":{"plugin":"a7456010"},"config":"5e9f5e1a"},"/docs/loading/loading-animation-52c":{"__comp":"d719c951","__context":{"plugin":"a7456010"},"config":"5e9f5e1a"},"/docs/loading/TextWaveLoading-b8a":{"__comp":"e84a2a50","__context":{"plugin":"a7456010"},"config":"5e9f5e1a"},"/docs/SearchResults-40c":{"__comp":"2ef55f61","__context":{"plugin":"a7456010"},"config":"5e9f5e1a"},"/docs/SectionPage-d07":{"__comp":"2172d8b3","__context":{"plugin":"a7456010"},"config":"5e9f5e1a"},"/docs/syllabus-pro192-spring2021-7c6":{"__comp":"516a6320","__context":{"plugin":"a7456010"},"config":"5e9f5e1a"},"/docs/syllabus-tabs-18c":{"__comp":"892c8049","__context":{"plugin":"a7456010"},"config":"5e9f5e1a"},"/docs/docs-a17":{"__comp":"5e95c892","__context":{"plugin":"aba21aa0"}},"/docs/docs-d65":{"__comp":"a7bd4aaa","__props":"a2065270"},"/docs/docs-28f":{"__comp":"a94703ab"},"/docs/docs/Syllabus_mat/sheet001-7c1":{"__comp":"17896441","content":"5910515f"},"/docs/docs/Syllabus_mat/sheet002-664":{"__comp":"17896441","content":"46233e38"},"/docs/docs/Syllabus_mat/sheet003-042":{"__comp":"17896441","content":"0ea3f922"},"/docs/docs/Syllabus_mat/sheet004-880":{"__comp":"17896441","content":"03e73f1b"},"/docs/docs/Syllabus_mat/sheet005-a43":{"__comp":"17896441","content":"631cd4eb"},"/docs/docs/Syllabus_mat/tabstrip-a2f":{"__comp":"17896441","content":"528a0945"}}');

/***/ }),

/***/ 84738:
/***/ ((module) => {

// Exports
module.exports = {
	"anchorWithStickyNavbar": `anchorWithStickyNavbar_LWe7`,
	"anchorWithHideOnScrollNavbar": `anchorWithHideOnScrollNavbar_WYt5`
};


/***/ }),

/***/ 84940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ useLocationChange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56347);
/* harmony import */ var _reactUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31450);



function useLocationChange(onLocationChange) {
  const location = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useLocation */ .zy)();
  const previousLocation = (0,_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .usePrevious */ .ZC)(location);
  const onLocationChangeDynamic = (0,_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .useEvent */ ._q)(onLocationChange);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!previousLocation) {
      return;
    }
    if (location !== previousLocation) {
      onLocationChangeDynamic({
        location,
        previousLocation
      });
    }
  }, [onLocationChangeDynamic, location, previousLocation]);
}


/***/ }),

/***/ 84989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _theme_NavbarItem_ComponentTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91317);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};


function normalizeComponentType(type, props) {
  if (!type || type === "default") {
    return "items" in props ? "dropdown" : "default";
  }
  return type;
}
function NavbarItem(_a) {
  var _b = _a, { type } = _b, props = __objRest(_b, ["type"]);
  const componentType = normalizeComponentType(type, props);
  const NavbarItemComponent = _theme_NavbarItem_ComponentTypes__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[componentType];
  if (!NavbarItemComponent) {
    throw new Error(`No NavbarItem component found for type "${type}".`);
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavbarItemComponent, __spreadValues({}, props));
}


/***/ }),

/***/ 85309:
/***/ ((module) => {

// Exports
module.exports = {
	"footerLogoLink": `footerLogoLink_BH7S`
};


/***/ }),

/***/ 86218:
/***/ ((module) => {

// Exports
module.exports = {
	"mainWrapper": `mainWrapper_z2l0`
};


/***/ }),

/***/ 86640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42517);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91096);
/* harmony import */ var _theme_Icon_LightMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39321);
/* harmony import */ var _theme_Icon_DarkMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96465);
/* harmony import */ var _theme_Icon_SystemColorMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47429);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53384);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);








function getNextColorMode(colorMode, respectPrefersColorScheme) {
  if (!respectPrefersColorScheme) {
    return colorMode === "dark" ? "light" : "dark";
  }
  switch (colorMode) {
    case null:
      return "light";
    case "light":
      return "dark";
    case "dark":
      return null;
    default:
      throw new Error(`unexpected color mode ${colorMode}`);
  }
}
function getColorModeLabel(colorMode) {
  switch (colorMode) {
    case null:
      return (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .T)({
        message: "system mode",
        id: "theme.colorToggle.ariaLabel.mode.system",
        description: "The name for the system color mode"
      });
    case "light":
      return (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .T)({
        message: "light mode",
        id: "theme.colorToggle.ariaLabel.mode.light",
        description: "The name for the light color mode"
      });
    case "dark":
      return (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .T)({
        message: "dark mode",
        id: "theme.colorToggle.ariaLabel.mode.dark",
        description: "The name for the dark color mode"
      });
    default:
      throw new Error(`unexpected color mode ${colorMode}`);
  }
}
function getColorModeAriaLabel(colorMode) {
  return (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .T)(
    {
      message: "Switch between dark and light mode (currently {mode})",
      id: "theme.colorToggle.ariaLabel",
      description: "The ARIA label for the color mode toggle"
    },
    {
      mode: getColorModeLabel(colorMode)
    }
  );
}
function CurrentColorModeIcon() {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _theme_Icon_LightMode__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
    {
      "aria-hidden": true,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)((_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().toggleIcon), (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().lightToggleIcon))
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _theme_Icon_DarkMode__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
    {
      "aria-hidden": true,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)((_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().toggleIcon), (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().darkToggleIcon))
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _theme_Icon_SystemColorMode__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
    {
      "aria-hidden": true,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)((_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().toggleIcon), (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().systemToggleIcon))
    }
  ));
}
function ColorModeToggle({
  className,
  buttonClassName,
  respectPrefersColorScheme,
  value,
  onChange
}) {
  const isBrowser = (0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)((_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().toggle), className) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "button",
    {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(
        "clean-btn",
        (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().toggleButton),
        !isBrowser && (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().toggleButtonDisabled),
        buttonClassName
      ),
      type: "button",
      onClick: () => onChange(getNextColorMode(value, respectPrefersColorScheme)),
      disabled: !isBrowser,
      title: getColorModeLabel(value),
      "aria-label": getColorModeAriaLabel(value)
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(CurrentColorModeIcon, null)
  ));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0__.memo(ColorModeToggle));


/***/ }),

/***/ 87220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => null);


/***/ }),

/***/ 87927:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ 88771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56347);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80545);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53259);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _renderToHtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4052);
/* harmony import */ var _preload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12615);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69769);
/* harmony import */ var _BrokenLinksContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72213);
/* harmony import */ var _serverHelmetUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25321);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};









const render = (_0) => __async(null, [_0], function* ({ pathname, v4RemoveLegacyPostBuildHeadAttribute }) {
  yield (0,_preload__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(pathname);
  const modules = /* @__PURE__ */ new Set();
  const routerContext = {};
  const helmetContext = {};
  const statefulBrokenLinks = (0,_BrokenLinksContext__WEBPACK_IMPORTED_MODULE_6__/* .createStatefulBrokenLinks */ .$3)();
  const app = (
    // @ts-expect-error: we are migrating away from react-loadable anyways
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_loadable__WEBPACK_IMPORTED_MODULE_2___default().Capture), { report: (moduleName) => modules.add(moduleName) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__/* .HelmetProvider */ .vd, { context: helmetContext }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__/* .StaticRouter */ .kO, { location: pathname, context: routerContext }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BrokenLinksContext__WEBPACK_IMPORTED_MODULE_6__/* .BrokenLinksProvider */ .k5, { brokenLinks: statefulBrokenLinks }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null)))))
  );
  const html = yield (0,_renderToHtml__WEBPACK_IMPORTED_MODULE_3__/* .renderToHtml */ .b)(app);
  const { helmet } = helmetContext;
  const metadata = (0,_serverHelmetUtils__WEBPACK_IMPORTED_MODULE_8__/* .toPageCollectedMetadataInternal */ .I)({ helmet });
  if (v4RemoveLegacyPostBuildHeadAttribute) {
    metadata.helmet = null;
  }
  const collectedData = {
    metadata,
    anchors: statefulBrokenLinks.getCollectedAnchors(),
    links: statefulBrokenLinks.getCollectedLinks(),
    modules: Array.from(modules)
  };
  return { html, collectedData };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);


/***/ }),

/***/ 89034:
/***/ ((module) => {

// Exports
module.exports = {
	"content": `content_knG7`
};


/***/ }),

/***/ 89051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ FooterLogo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46100);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97951);
/* harmony import */ var _theme_ThemedImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81700);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85309);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);






function LogoImage({ logo }) {
  var _a;
  const { withBaseUrl } = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* .useBaseUrlUtils */ .hH)();
  const sources = {
    light: withBaseUrl(logo.src),
    dark: withBaseUrl((_a = logo.srcDark) != null ? _a : logo.src)
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _theme_ThemedImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
    {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)("footer__logo", logo.className),
      alt: logo.alt,
      sources,
      width: logo.width,
      height: logo.height,
      style: logo.style
    }
  );
}
function FooterLogo({ logo }) {
  return logo.href ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    {
      href: logo.href,
      className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().footerLogoLink),
      target: logo.target
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(LogoImage, { logo })
  ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(LogoImage, { logo });
}


/***/ }),

/***/ 90765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ HtmlNavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34164);


function HtmlNavbarItem({
  value,
  className,
  mobile = false,
  isDropdownItem = false
}) {
  const Comp = isDropdownItem ? "li" : "div";
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    Comp,
    {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(
        {
          navbar__item: !mobile && !isDropdownItem,
          "menu__list-item": mobile
        },
        className
      ),
      dangerouslySetInnerHTML: { __html: value }
    }
  );
}


/***/ }),

/***/ 91096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Translate),
/* harmony export */   T: () => (/* binding */ translate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_Interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18689);
/* harmony import */ var _generated_codeTranslations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22654);



function getLocalizedMessage({ id, message }) {
  var _a, _b;
  if (typeof id === "undefined" && typeof message === "undefined") {
    throw new Error("Docusaurus translation declarations must have at least a translation id or a default translation message");
  }
  return (_b = (_a = _generated_codeTranslations__WEBPACK_IMPORTED_MODULE_2__[id != null ? id : message]) != null ? _a : message) != null ? _b : id;
}
function translate({ message, id }, values) {
  const localizedMessage = getLocalizedMessage({ message, id });
  return (0,_docusaurus_Interpolate__WEBPACK_IMPORTED_MODULE_1__/* .interpolate */ .G)(localizedMessage, values);
}
function Translate({ children, id, values }) {
  if (children && typeof children !== "string") {
    console.warn("Illegal <Translate> children", children);
    throw new Error("The Docusaurus <Translate> component only accept simple string values");
  }
  const localizedMessage = getLocalizedMessage({ message: children, id });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_docusaurus_Interpolate__WEBPACK_IMPORTED_MODULE_1__/* .interpolate */ .G)(localizedMessage, values));
}


/***/ }),

/***/ 91317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71238);
/* harmony import */ var _theme_NavbarItem_DropdownNavbarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19770);
/* harmony import */ var _theme_NavbarItem_LocaleDropdownNavbarItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58044);
/* harmony import */ var _theme_NavbarItem_SearchNavbarItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42532);
/* harmony import */ var _theme_NavbarItem_HtmlNavbarItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90765);
/* harmony import */ var _theme_NavbarItem_DocNavbarItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45474);
/* harmony import */ var _theme_NavbarItem_DocSidebarNavbarItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82638);
/* harmony import */ var _theme_NavbarItem_DocsVersionNavbarItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31309);
/* harmony import */ var _theme_NavbarItem_DocsVersionDropdownNavbarItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5832);









const ComponentTypes = {
  default: _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,
  localeDropdown: _theme_NavbarItem_LocaleDropdownNavbarItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
  search: _theme_NavbarItem_SearchNavbarItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
  dropdown: _theme_NavbarItem_DropdownNavbarItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
  html: _theme_NavbarItem_HtmlNavbarItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
  doc: _theme_NavbarItem_DocNavbarItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
  docSidebar: _theme_NavbarItem_DocSidebarNavbarItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
  docsVersion: _theme_NavbarItem_DocsVersionNavbarItem__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,
  docsVersionDropdown: _theme_NavbarItem_DocsVersionDropdownNavbarItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentTypes);


/***/ }),

/***/ 92287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ Context),
/* harmony export */   x: () => (/* binding */ BrowserContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

const Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(false);
function BrowserContextProvider({ children }) {
  const [isBrowser, setIsBrowser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsBrowser(true);
  }, []);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, { value: isBrowser }, children);
}


/***/ }),

/***/ 93099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const canUseDOM = typeof window !== "undefined" && "document" in window && "createElement" in window.document;
const ExecutionEnvironment = {
  canUseDOM,
  // window.attachEvent is IE-specific; it's very likely Docusaurus won't work
  // on IE anyway.
  canUseEventListeners: canUseDOM && ("addEventListener" in window || "attachEvent" in window),
  canUseIntersectionObserver: canUseDOM && "IntersectionObserver" in window,
  canUseViewport: canUseDOM && "screen" in window
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExecutionEnvironment);


/***/ }),

/***/ 93542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P_: () => (/* binding */ usePluginData),
/* harmony export */   kh: () => (/* binding */ useAllPluginInstancesData)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(908);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12451);


function useGlobalData() {
  const { globalData } = (0,_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)();
  return globalData;
}
function useAllPluginInstancesData(pluginName, options = {}) {
  const globalData = useGlobalData();
  const pluginGlobalData = globalData[pluginName];
  if (!pluginGlobalData && options.failfast) {
    throw new Error(`Docusaurus plugin global data not found for "${pluginName}" plugin.`);
  }
  return pluginGlobalData;
}
function usePluginData(pluginName, pluginId = _constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_PLUGIN_ID */ .W, options = {}) {
  const pluginGlobalData = useAllPluginInstancesData(pluginName);
  const pluginInstanceGlobalData = pluginGlobalData == null ? void 0 : pluginGlobalData[pluginId];
  if (!pluginInstanceGlobalData && options.failfast) {
    throw new Error(`Docusaurus plugin global data not found for "${pluginName}" plugin with id "${pluginId}".`);
  }
  return pluginInstanceGlobalData;
}


/***/ }),

/***/ 93559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ HasHydratedDataAttribute)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(914);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42517);



function HasHydratedDataAttribute() {
  const isBrowser = (0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("html", { "data-has-hydrated": isBrowser }));
}


/***/ }),

/***/ 93565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DefaultNavbarItemDesktop)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34164);
/* harmony import */ var _theme_NavbarItem_NavbarNavLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99186);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};



function DefaultNavbarItemDesktop(_a) {
  var _b = _a, {
    className,
    isDropdownItem = false
  } = _b, props = __objRest(_b, [
    "className",
    "isDropdownItem"
  ]);
  const element = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _theme_NavbarItem_NavbarNavLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    __spreadValues({
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(
        isDropdownItem ? "dropdown__link" : "navbar__item navbar__link",
        className
      ),
      isDropdownLink: isDropdownItem
    }, props)
  );
  if (isDropdownItem) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, element);
  }
  return element;
}


/***/ }),

/***/ 94266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ LayoutProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31450);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42055);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62391);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21162);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99462);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56259);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48392);




const Provider = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .composeProviders */ .fM)([
  _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .ColorModeProvider */ .a,
  _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .AnnouncementBarProvider */ .o,
  _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__/* .ScrollControllerProvider */ .Tv,
  _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__/* .DocsPreferredVersionContextProvider */ .VQ,
  _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__/* .PluginHtmlClassNameProvider */ .Jx,
  _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_7__/* .NavbarProvider */ .G
]);
function LayoutProvider({ children }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Provider, null, children);
}


/***/ }),

/***/ 94362:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var l, s;
if (true) {
  l = __webpack_require__(26711);
  s = __webpack_require__(6513);
} else // removed by dead control flow
{}

__webpack_unused_export__ = l.version;
__webpack_unused_export__ = l.renderToString;
__webpack_unused_export__ = l.renderToStaticMarkup;
__webpack_unused_export__ = l.renderToNodeStream;
__webpack_unused_export__ = l.renderToStaticNodeStream;
exports.renderToPipeableStream = s.renderToPipeableStream;


/***/ }),

/***/ 95072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Wf: () => (/* binding */ createStorageSlot)
/* harmony export */ });
/* unused harmony exports useStorageSlot, listStorageKeys */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _generated_site_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24180);


const DefaultStorageType = _generated_site_storage__WEBPACK_IMPORTED_MODULE_1__/* .type */ .N;
function applyNamespace(storageKey) {
  return `${storageKey}${_generated_site_storage__WEBPACK_IMPORTED_MODULE_1__/* .namespace */ .M}`;
}
function dispatchChangeEvent({ key, oldValue, newValue, storage }) {
  if (oldValue === newValue) {
    return;
  }
  const event = document.createEvent("StorageEvent");
  event.initStorageEvent("storage", false, false, key, oldValue, newValue, window.location.href, storage);
  window.dispatchEvent(event);
}
function getBrowserStorage(storageType = DefaultStorageType) {
  if (typeof window === "undefined") {
    throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");
  }
  if (storageType === "none") {
    return null;
  }
  try {
    return window[storageType];
  } catch (err) {
    logOnceBrowserStorageNotAvailableWarning(err);
    return null;
  }
}
let hasLoggedBrowserStorageNotAvailableWarning = false;
function logOnceBrowserStorageNotAvailableWarning(error) {
  if (!hasLoggedBrowserStorageNotAvailableWarning) {
    console.warn(`Docusaurus browser storage is not available.
Possible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.`, error);
    hasLoggedBrowserStorageNotAvailableWarning = true;
  }
}
const NoopStorageSlot = {
  get: () => null,
  set: () => {
  },
  del: () => {
  },
  listen: () => () => {
  }
};
function createServerStorageSlot(key) {
  function throwError() {
    throw new Error(`Illegal storage API usage for storage key "${key}".
Docusaurus storage APIs are not supposed to be called on the server-rendering process.
Please only call storage APIs in effects and event handlers.`);
  }
  return {
    get: throwError,
    set: throwError,
    del: throwError,
    listen: throwError
  };
}
function createStorageSlot(keyInput, options) {
  const key = applyNamespace(keyInput);
  if (typeof window === "undefined") {
    return createServerStorageSlot(key);
  }
  const storage = getBrowserStorage(options == null ? void 0 : options.persistence);
  if (storage === null) {
    return NoopStorageSlot;
  }
  return {
    get: () => {
      try {
        return storage.getItem(key);
      } catch (err) {
        console.error(`Docusaurus storage error, can't get key=${key}`, err);
        return null;
      }
    },
    set: (newValue) => {
      try {
        const oldValue = storage.getItem(key);
        storage.setItem(key, newValue);
        dispatchChangeEvent({
          key,
          oldValue,
          newValue,
          storage
        });
      } catch (err) {
        console.error(`Docusaurus storage error, can't set ${key}=${newValue}`, err);
      }
    },
    del: () => {
      try {
        const oldValue = storage.getItem(key);
        storage.removeItem(key);
        dispatchChangeEvent({ key, oldValue, newValue: null, storage });
      } catch (err) {
        console.error(`Docusaurus storage error, can't delete key=${key}`, err);
      }
    },
    listen: (onChange) => {
      try {
        const listener = (event) => {
          if (event.storageArea === storage && event.key === key) {
            onChange(event);
          }
        };
        window.addEventListener("storage", listener);
        return () => window.removeEventListener("storage", listener);
      } catch (err) {
        console.error(`Docusaurus storage error, can't listen for changes of key=${key}`, err);
        return () => {
        };
      }
    }
  };
}
function useStorageSlot(key, options) {
  const [storageSlot] = useState(() => {
    if (key === null) {
      return NoopStorageSlot;
    }
    return createStorageSlot(key, options);
  });
  const listen = useCallback((onChange) => {
    if (typeof window === "undefined") {
      return () => {
      };
    }
    return storageSlot.listen(onChange);
  }, [storageSlot]);
  const currentValue = useSyncExternalStore(listen, () => {
    if (false) // removed by dead control flow
{}
    return storageSlot.get();
  }, () => null);
  return [currentValue, storageSlot];
}
function listStorageKeys(storageType = DefaultStorageType) {
  const browserStorage = getBrowserStorage(storageType);
  if (!browserStorage) {
    return [];
  }
  const keys = [];
  for (let i = 0; i < browserStorage.length; i += 1) {
    const key = browserStorage.key(i);
    if (key !== null) {
      keys.push(key);
    }
  }
  return keys;
}


/***/ }),

/***/ 95209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ThemeProviderTitleFormatter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40669);


const formatter = (params) => {
  return params.defaultFormatter(params);
};
function ThemeProviderTitleFormatter({ children }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__/* .TitleFormatterProvider */ .AL, { formatter }, children);
}


/***/ }),

/***/ 95521:
/***/ ((module) => {

// Exports
module.exports = {
	"skipToContent": `skipToContent_fXgn`
};


/***/ }),

/***/ 95730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gy: () => (/* binding */ useAllDocsData),
/* harmony export */   HW: () => (/* binding */ useDocVersionSuggestions),
/* harmony export */   ht: () => (/* binding */ useDocsData),
/* harmony export */   jh: () => (/* binding */ useVersions),
/* harmony export */   r7: () => (/* binding */ useLatestVersion),
/* harmony export */   vT: () => (/* binding */ useActivePlugin),
/* harmony export */   zK: () => (/* binding */ useActiveDocContext)
/* harmony export */ });
/* unused harmony exports useActivePluginAndVersion, useActiveVersion */
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56347);
/* harmony import */ var _docusaurus_useGlobalData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93542);
/* harmony import */ var _docsClientUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18923);












const StableEmptyObject = {};
const useAllDocsData = () => {
  var _a;
  return (_a = (0,_docusaurus_useGlobalData__WEBPACK_IMPORTED_MODULE_0__/* .useAllPluginInstancesData */ .kh)("docusaurus-plugin-content-docs")) != null ? _a : StableEmptyObject;
};
const useDocsData = (pluginId) => {
  try {
    return (0,_docusaurus_useGlobalData__WEBPACK_IMPORTED_MODULE_0__/* .usePluginData */ .P_)("docusaurus-plugin-content-docs", pluginId, {
      failfast: true
    });
  } catch (error) {
    throw new Error(`You are using a feature of the Docusaurus docs plugin, but this plugin does not seem to be enabled${pluginId === "Default" ? "" : ` (pluginId=${pluginId}`}`, { cause: error });
  }
};
function useActivePlugin(options = {}) {
  const data = useAllDocsData();
  const { pathname } = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useLocation */ .zy)();
  return (0,_docsClientUtils__WEBPACK_IMPORTED_MODULE_2__/* .getActivePlugin */ .uX)(data, pathname, options);
}
function useActivePluginAndVersion(options = {}) {
  const activePlugin = useActivePlugin(options);
  const { pathname } = useLocation();
  if (!activePlugin) {
    return void 0;
  }
  const activeVersion = getActiveVersion(activePlugin.pluginData, pathname);
  return {
    activePlugin,
    activeVersion
  };
}
function useVersions(pluginId) {
  const data = useDocsData(pluginId);
  return data.versions;
}
function useLatestVersion(pluginId) {
  const data = useDocsData(pluginId);
  return (0,_docsClientUtils__WEBPACK_IMPORTED_MODULE_2__/* .getLatestVersion */ .CA)(data);
}
function useActiveVersion(pluginId) {
  const data = useDocsData(pluginId);
  const { pathname } = useLocation();
  return getActiveVersion(data, pathname);
}
function useActiveDocContext(pluginId) {
  const data = useDocsData(pluginId);
  const { pathname } = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useLocation */ .zy)();
  return (0,_docsClientUtils__WEBPACK_IMPORTED_MODULE_2__/* .getActiveDocContext */ .Yz)(data, pathname);
}
function useDocVersionSuggestions(pluginId) {
  const data = useDocsData(pluginId);
  const { pathname } = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useLocation */ .zy)();
  return (0,_docsClientUtils__WEBPACK_IMPORTED_MODULE_2__/* .getDocVersionSuggestions */ .QA)(data, pathname);
}


/***/ }),

/***/ 96465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IconDarkMode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

function IconDarkMode(props) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __spreadValues({ viewBox: "0 0 24 24", width: 24, height: 24 }, props), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "path",
    {
      fill: "currentColor",
      d: "M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"
    }
  ));
}


/***/ }),

/***/ 96487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarSearch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34164);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37921);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);



function NavbarSearch({ children, className }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(className, (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().navbarSearchContainer)) }, children);
}


/***/ }),

/***/ 96540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(15287);
} else // removed by dead control flow
{}


/***/ }),

/***/ 97272:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13277);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
  {
    path: "/docs/CustomDesign",
    component: (0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("/docs/CustomDesign", "396"),
    exact: true
  },
  {
    path: "/docs/Home",
    component: (0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("/docs/Home", "d7d"),
    exact: true
  },
  {
    path: "/docs/loading/",
    component: (0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("/docs/loading/", "596"),
    exact: true
  },
  {
    path: "/docs/loading/loading-animation",
    component: (0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("/docs/loading/loading-animation", "52c"),
    exact: true
  },
  {
    path: "/docs/loading/TextWaveLoading",
    component: (0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("/docs/loading/TextWaveLoading", "b8a"),
    exact: true
  },
  {
    path: "/docs/SearchResults",
    component: (0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("/docs/SearchResults", "40c"),
    exact: true
  },
  {
    path: "/docs/SectionPage",
    component: (0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("/docs/SectionPage", "d07"),
    exact: true
  },
  {
    path: "/docs/syllabus-pro192-spring2021",
    component: (0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("/docs/syllabus-pro192-spring2021", "7c6"),
    exact: true
  },
  {
    path: "/docs/syllabus-tabs",
    component: (0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("/docs/syllabus-tabs", "18c"),
    exact: true
  },
  {
    path: "/docs/docs",
    component: (0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("/docs/docs", "a17"),
    routes: [
      {
        path: "/docs/docs",
        component: (0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("/docs/docs", "d65"),
        routes: [
          {
            path: "/docs/docs",
            component: (0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("/docs/docs", "28f"),
            routes: [
              {
                path: "/docs/docs/Syllabus_mat/sheet001",
                component: (0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("/docs/docs/Syllabus_mat/sheet001", "7c1"),
                exact: true,
                sidebar: "docs"
              },
              {
                path: "/docs/docs/Syllabus_mat/sheet002",
                component: (0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("/docs/docs/Syllabus_mat/sheet002", "664"),
                exact: true,
                sidebar: "docs"
              },
              {
                path: "/docs/docs/Syllabus_mat/sheet003",
                component: (0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("/docs/docs/Syllabus_mat/sheet003", "042"),
                exact: true,
                sidebar: "docs"
              },
              {
                path: "/docs/docs/Syllabus_mat/sheet004",
                component: (0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("/docs/docs/Syllabus_mat/sheet004", "880"),
                exact: true,
                sidebar: "docs"
              },
              {
                path: "/docs/docs/Syllabus_mat/sheet005",
                component: (0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("/docs/docs/Syllabus_mat/sheet005", "a43"),
                exact: true,
                sidebar: "docs"
              },
              {
                path: "/docs/docs/Syllabus_mat/tabstrip",
                component: (0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("/docs/docs/Syllabus_mat/tabstrip", "a2f"),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: "*",
    component: (0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("*")
  }
]);


/***/ }),

/***/ 97422:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(94362);


/***/ }),

/***/ 97473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ErrorPageContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91096);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2075);
/* harmony import */ var _theme_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80358);




function ErrorPageContent({ error, tryAgain }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", { className: "container margin-vert--xl" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col col--6 col--offset-3" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { as: "h1", className: "hero__title" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    {
      id: "theme.ErrorPageContent.title",
      description: "The title of the fallback page when the page crashed"
    },
    "This page crashed."
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "margin-vert--lg" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .ErrorBoundaryTryAgainButton */ .a2,
    {
      onClick: tryAgain,
      className: "button button--primary shadow--lw"
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "margin-vert--md" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .ErrorBoundaryError */ .bq, { error })))));
}


/***/ }),

/***/ 97521:
/***/ ((module) => {

// Exports
module.exports = {
	"closeButton": `closeButton_CVFx`
};


/***/ }),

/***/ 97951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ useBaseUrl),
/* harmony export */   hH: () => (/* binding */ useBaseUrlUtils)
/* harmony export */ });
/* unused harmony export addBaseUrl */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(908);
/* harmony import */ var _isInternalUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75068);



function addBaseUrl({ siteUrl, baseUrl, url, options: { forcePrependBaseUrl = false, absolute = false } = {}, router }) {
  if (!url || url.startsWith("#") || (0,_isInternalUrl__WEBPACK_IMPORTED_MODULE_2__/* .hasProtocol */ .z)(url)) {
    return url;
  }
  if (router === "hash") {
    return url.startsWith("/") ? `.${url}` : `./${url}`;
  }
  if (forcePrependBaseUrl) {
    return baseUrl + url.replace(/^\//, "");
  }
  if (url === baseUrl.replace(/\/$/, "")) {
    return baseUrl;
  }
  const shouldAddBaseUrl = !url.startsWith(baseUrl);
  const basePath = shouldAddBaseUrl ? baseUrl + url.replace(/^\//, "") : url;
  return absolute ? siteUrl + basePath : basePath;
}
function useBaseUrlUtils() {
  const { siteConfig } = (0,_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  const { baseUrl, url: siteUrl } = siteConfig;
  const router = siteConfig.future.experimental_router;
  const withBaseUrl = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((url, options) => addBaseUrl({ siteUrl, baseUrl, url, options, router }), [siteUrl, baseUrl, router]);
  return {
    withBaseUrl
  };
}
function useBaseUrl(url, options = {}) {
  const { withBaseUrl } = useBaseUrlUtils();
  return withBaseUrl(url, options);
}


/***/ }),

/***/ 98141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ DEFAULT_SEARCH_TAG)
/* harmony export */ });
const DEFAULT_SEARCH_TAG = "default";


/***/ }),

/***/ 98587:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}


/***/ }),

/***/ 99186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarNavLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46100);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97951);
/* harmony import */ var _docusaurus_isInternalUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75068);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62462);
/* harmony import */ var _theme_Icon_ExternalLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78473);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};






function NavbarNavLink(_a) {
  var _b = _a, {
    activeBasePath,
    activeBaseRegex,
    to,
    href,
    label,
    html,
    isDropdownLink,
    prependBaseUrlToHref
  } = _b, props = __objRest(_b, [
    "activeBasePath",
    "activeBaseRegex",
    "to",
    "href",
    "label",
    "html",
    "isDropdownLink",
    "prependBaseUrlToHref"
  ]);
  const toUrl = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)(to);
  const activeBaseUrl = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)(activeBasePath);
  const normalizedHref = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)(href, { forcePrependBaseUrl: true });
  const isExternalLink = label && href && !(0,_docusaurus_isInternalUrl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(href);
  const linkContentProps = html ? { dangerouslySetInnerHTML: { __html: html } } : {
    children: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, label, isExternalLink && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _theme_Icon_ExternalLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
      __spreadValues({}, isDropdownLink && { width: 12, height: 12 })
    ))
  };
  if (href) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
      __spreadValues(__spreadValues({
        href: prependBaseUrlToHref ? normalizedHref : href
      }, props), linkContentProps)
    );
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    __spreadValues(__spreadValues(__spreadValues({
      to: toUrl,
      isNavLink: true
    }, (activeBasePath || activeBaseRegex) && {
      isActive: (_match, location) => activeBaseRegex ? (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .isRegexpStringMatch */ .G)(activeBaseRegex, location.pathname) : location.pathname.startsWith(activeBaseUrl)
    }), props), linkContentProps)
  );
}


/***/ }),

/***/ 99462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jx: () => (/* binding */ PluginHtmlClassNameProvider),
/* harmony export */   be: () => (/* binding */ PageMetadata),
/* harmony export */   e3: () => (/* binding */ HtmlClassNameProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(914);
/* harmony import */ var _docusaurus_useRouteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(301);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97951);
/* harmony import */ var _titleFormatterUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40669);






function TitleMetadata({ title }) {
  const titleFormatter = (0,_titleFormatterUtils__WEBPACK_IMPORTED_MODULE_4__/* .useTitleFormatter */ .s$)();
  const formattedTitle = titleFormatter.format(title);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, formattedTitle), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { property: "og:title", content: formattedTitle }));
}
function DescriptionMetadata({ description }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { name: "description", content: description }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { property: "og:description", content: description }));
}
function ImageMetadata({ image }) {
  const { withBaseUrl } = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* .useBaseUrlUtils */ .hH)();
  const pageImage = withBaseUrl(image, { absolute: true });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { property: "og:image", content: pageImage }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { name: "twitter:image", content: pageImage }));
}
function KeywordsMetadata({ keywords }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { name: "keywords", content: (
    // https://github.com/microsoft/TypeScript/issues/17002
    Array.isArray(keywords) ? keywords.join(",") : keywords
  ) }));
}
function PageMetadata({ title, description, keywords, image, children }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, title && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(TitleMetadata, { title }), description && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DescriptionMetadata, { description }), keywords && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(KeywordsMetadata, { keywords }), image && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ImageMetadata, { image }), children && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, children));
}
const HtmlClassNameContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);
function HtmlClassNameProvider({ className: classNameProp, children }) {
  const classNameContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(HtmlClassNameContext);
  const className = (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(classNameContext, classNameProp);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(HtmlClassNameContext.Provider, { value: className }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("html", { className })), children);
}
function pluginNameToClassName(pluginName) {
  return `plugin-${pluginName.replace(/docusaurus-(?:plugin|theme)-(?:content-)?/gi, "")}`;
}
function PluginHtmlClassNameProvider({ children }) {
  const routeContext = (0,_docusaurus_useRouteContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
  const nameClass = pluginNameToClassName(routeContext.plugin.name);
  const idClass = `plugin-id-${routeContext.plugin.id}`;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(HtmlClassNameProvider, { className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(nameClass, idClass) }, children);
}


/***/ }),

/***/ 99653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ useAlternatePageUtils)
/* harmony export */ });
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(908);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56347);
/* harmony import */ var _docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59350);



function useAlternatePageUtils() {
  const { siteConfig: { baseUrl, url, trailingSlash }, i18n: { defaultLocale, currentLocale } } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)();
  const { pathname } = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useLocation */ .zy)();
  const canonicalPathname = (0,_docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_2__/* .applyTrailingSlash */ .Ks)(pathname, {
    trailingSlash,
    baseUrl
  });
  const baseUrlUnlocalized = currentLocale === defaultLocale ? baseUrl : baseUrl.replace(`/${currentLocale}/`, "/");
  const pathnameSuffix = canonicalPathname.replace(baseUrl, "");
  function getLocalizedBaseUrl(locale) {
    return locale === defaultLocale ? `${baseUrlUnlocalized}` : `${baseUrlUnlocalized}${locale}/`;
  }
  function createUrl({ locale, fullyQualified }) {
    return `${fullyQualified ? url : ""}${getLocalizedBaseUrl(locale)}${pathnameSuffix}`;
  }
  return { createUrl };
}


/***/ }),

/***/ 99832:
/***/ ((module) => {

// Exports
module.exports = {

};


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "assets/js/" + ({"48":"a94703ab","98":"a7bd4aaa","130":"03e73f1b","142":"9a512cec","162":"46d93119","197":"0ea3f922","235":"a7456010","273":"46233e38","286":"892c8049","325":"2ef55f61","376":"d719c951","401":"17896441","542":"2172d8b3","575":"631cd4eb","605":"516a6320","647":"5e95c892","653":"e84a2a50","686":"5f9c5a64","742":"aba21aa0","816":"a2065270","877":"5910515f","947":"528a0945"}[chunkId] || chunkId) + "." + {"42":"1fa1a838","43":"4591c517","48":"ccdf4cbd","98":"3ce4ce9e","130":"4f0c4845","142":"80644793","162":"a64a3546","197":"feaa48ee","235":"b0bd8072","239":"a37514ab","258":"7ac99fb9","273":"0641e651","286":"dfbf06f0","325":"a58250dd","367":"d35cf0b9","376":"dadb9483","394":"9ec23cb7","401":"1b5eb1c3","458":"a6fd6a87","529":"b775ca86","542":"03881835","564":"48519018","575":"d1fe5c5f","605":"6c38e66b","647":"6157b188","653":"64a76da5","686":"d5405a39","742":"badab20e","744":"b2471061","816":"e5ae949d","877":"4b203a1b","906":"93fe0072","931":"de8df01d","947":"b5ac2850","949":"986f5dac"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/docs/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			792: 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(88771);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;