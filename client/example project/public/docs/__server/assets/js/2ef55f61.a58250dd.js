"use strict";
exports.id = 325;
exports.ids = [325];
exports.modules = {

/***/ 64794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56347);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


const SearchResults = () => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__/* .useLocation */ .zy)();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q") || "";
  const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (query.trim() === "") {
      setResults([]);
    } else {
      setResults([]);
    }
  }, [query]);
  return /* @__PURE__ */ React.createElement("div", { className: "max-w-4xl mx-auto px-4 py-8" }, /* @__PURE__ */ React.createElement("h1", { className: "text-3xl font-bold mb-4" }, 'Search Results for "', query, '"'), results.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "border border-gray-400 rounded p-6 text-center text-gray-600 dark:text-gray-300 mt-8" }, /* @__PURE__ */ React.createElement("p", { className: "text-xl font-semibold mb-2" }, "No results found"), /* @__PURE__ */ React.createElement("p", null, "Try adjusting your search or check back later."), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => window.location.href = "/",
      className: "mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    },
    "Go to Home"
  )) : /* @__PURE__ */ React.createElement("ul", { className: "space-y-4" }, results.map((result, index) => /* @__PURE__ */ React.createElement("li", { key: index, className: "p-4 border rounded shadow-sm" }, result))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchResults);


/***/ })

};
;