"use strict";
exports.id = 98;
exports.ids = [98];
exports.modules = {

/***/ 302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DocVersionRoot)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99462);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80231);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17639);
/* harmony import */ var _docusaurus_renderRoutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22831);
/* harmony import */ var _theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18389);
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





function DocVersionRootMetadata(props) {
  const { version } = props;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    {
      version: version.version,
      tag: (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_2__/* .getDocsVersionSearchTag */ .k)(version.pluginId, version.version)
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .PageMetadata */ .be, null, version.noIndex && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { name: "robots", content: "noindex, nofollow" })));
}
function DocVersionRootContent(props) {
  const { version, route } = props;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .HtmlClassNameProvider */ .e3, { className: version.className }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__/* .DocsVersionProvider */ .n, { version }, (0,_docusaurus_renderRoutes__WEBPACK_IMPORTED_MODULE_5__/* .renderRoutes */ .v)(route.routes)));
}
function DocVersionRoot(props) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DocVersionRootMetadata, __spreadValues({}, props)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DocVersionRootContent, __spreadValues({}, props)));
}


/***/ }),

/***/ 80231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ getDocsVersionSearchTag)
/* harmony export */ });
/* unused harmony export useDocsContextualSearchTags */


function getDocsVersionSearchTag(pluginId, versionName) {
  return `docs-${pluginId}-${versionName}`;
}
function useDocsContextualSearchTags() {
  const allDocsData = useAllDocsData();
  const activePluginAndVersion = useActivePluginAndVersion();
  const docsPreferredVersionByPluginId = useDocsPreferredVersionByPluginId();
  function getDocPluginTags(pluginId) {
    var _a;
    const activeVersion = (activePluginAndVersion == null ? void 0 : activePluginAndVersion.activePlugin.pluginId) === pluginId ? activePluginAndVersion.activeVersion : void 0;
    const preferredVersion = docsPreferredVersionByPluginId[pluginId];
    const latestVersion = allDocsData[pluginId].versions.find((v) => v.isLast);
    const version = (_a = activeVersion != null ? activeVersion : preferredVersion) != null ? _a : latestVersion;
    return getDocsVersionSearchTag(pluginId, version.name);
  }
  return [...Object.keys(allDocsData).map(getDocPluginTags)];
}


/***/ })

};
;