exports.id = 48;
exports.ids = [48];
exports.modules = {

/***/ 2217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ useBackToTopButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _utils_scrollUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21162);
/* harmony import */ var _utils_useLocationChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84940);



function useBackToTopButton({ threshold }) {
  const [shown, setShown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const isFocusedAnchor = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const { startScroll, cancelScroll } = (0,_utils_scrollUtils__WEBPACK_IMPORTED_MODULE_1__/* .useSmoothScrollTo */ .gk)();
  (0,_utils_scrollUtils__WEBPACK_IMPORTED_MODULE_1__/* .useScrollPosition */ .Mq)(({ scrollY: scrollTop }, lastPosition) => {
    const lastScrollTop = lastPosition == null ? void 0 : lastPosition.scrollY;
    if (!lastScrollTop) {
      return;
    }
    if (isFocusedAnchor.current) {
      isFocusedAnchor.current = false;
    } else if (scrollTop >= lastScrollTop) {
      cancelScroll();
      setShown(false);
    } else if (scrollTop < threshold) {
      setShown(false);
    } else if (scrollTop + window.innerHeight < document.documentElement.scrollHeight) {
      setShown(true);
    }
  });
  (0,_utils_useLocationChange__WEBPACK_IMPORTED_MODULE_2__/* .useLocationChange */ .$)((locationChangeEvent) => {
    if (locationChangeEvent.location.hash) {
      isFocusedAnchor.current = true;
      setShown(false);
    }
  });
  return { shown, scrollToTop: () => startScroll(0) };
}


/***/ }),

/***/ 3823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IconArrow)
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

function IconArrow(props) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __spreadValues({ width: "20", height: "20", "aria-hidden": "true" }, props), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", { fill: "#7a7a7a" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0" })));
}


/***/ }),

/***/ 5337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocRootLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31647);
/* harmony import */ var _theme_BackToTopButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31465);
/* harmony import */ var _theme_DocRoot_Layout_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57570);
/* harmony import */ var _theme_DocRoot_Layout_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91055);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82607);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);






function DocRootLayout({ children }) {
  const sidebar = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__/* .useDocsSidebar */ .t)();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().docsWrapper) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_BackToTopButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().docRoot) }, sidebar && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _theme_DocRoot_Layout_Sidebar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
    {
      sidebar: sidebar.items,
      hiddenSidebarContainer,
      setHiddenSidebarContainer
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_DocRoot_Layout_Main__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, { hiddenSidebarContainer }, children)));
}


/***/ }),

/***/ 8786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocSidebar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13763);
/* harmony import */ var _theme_DocSidebar_Desktop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77953);
/* harmony import */ var _theme_DocSidebar_Mobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32069);
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




function DocSidebar(props) {
  const windowSize = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .useWindowSize */ .l)();
  const shouldRenderSidebarDesktop = windowSize === "desktop" || windowSize === "ssr";
  const shouldRenderSidebarMobile = windowSize === "mobile";
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, shouldRenderSidebarDesktop && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_DocSidebar_Desktop__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, __spreadValues({}, props)), shouldRenderSidebarMobile && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_DocSidebar_Mobile__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, __spreadValues({}, props)));
}


/***/ }),

/***/ 28721:
/***/ ((module) => {

// Exports
module.exports = {
	"expandButton": `expandButton_TmdG`,
	"expandButtonIcon": `expandButtonIcon_i1dp`
};


/***/ }),

/***/ 29226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocSidebarItemLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62513);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48290);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46100);
/* harmony import */ var _docusaurus_isInternalUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75068);
/* harmony import */ var _theme_Icon_ExternalLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78473);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61398);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);
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








function DocSidebarItemLink(_a) {
  var _b = _a, {
    item,
    onItemClick,
    activePath,
    level,
    index
  } = _b, props = __objRest(_b, [
    "item",
    "onItemClick",
    "activePath",
    "level",
    "index"
  ]);
  const { href, label, className, autoAddBaseUrl } = item;
  const isActive = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__/* .isActiveSidebarItem */ .w8)(item, activePath);
  const isInternalLink = (0,_docusaurus_isInternalUrl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(href);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "li",
    {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(
        _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__/* .ThemeClassNames */ .G.docs.docSidebarItemLink,
        _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__/* .ThemeClassNames */ .G.docs.docSidebarItemLinkLevel(level),
        "menu__list-item",
        className
      ),
      key: label
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
      __spreadValues(__spreadValues({
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(
          "menu__link",
          !isInternalLink && (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().menuExternalLink),
          {
            "menu__link--active": isActive
          }
        ),
        autoAddBaseUrl,
        "aria-current": isActive ? "page" : void 0,
        to: href
      }, isInternalLink && {
        onClick: onItemClick ? () => onItemClick(item) : void 0
      }), props),
      label,
      !isInternalLink && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Icon_ExternalLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null)
    )
  );
}


/***/ }),

/***/ 29791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocRootLayoutSidebarExpandButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91096);
/* harmony import */ var _theme_Icon_Arrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3823);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28721);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);




function DocRootLayoutSidebarExpandButton({ toggleSidebar }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().expandButton),
      title: (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({
        id: "theme.docs.sidebar.expandButtonTitle",
        message: "Expand sidebar",
        description: "The ARIA label and title attribute for expand button of doc sidebar"
      }),
      "aria-label": (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({
        id: "theme.docs.sidebar.expandButtonAriaLabel",
        message: "Expand sidebar",
        description: "The ARIA label and title attribute for expand button of doc sidebar"
      }),
      tabIndex: 0,
      role: "button",
      onKeyDown: toggleSidebar,
      onClick: toggleSidebar
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Icon_Arrow__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().expandButtonIcon) })
  );
}


/***/ }),

/***/ 29909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocSidebarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _theme_DocSidebarItem_Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93674);
/* harmony import */ var _theme_DocSidebarItem_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29226);
/* harmony import */ var _theme_DocSidebarItem_Html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33751);
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




function DocSidebarItem(_a) {
  var _b = _a, { item } = _b, props = __objRest(_b, ["item"]);
  switch (item.type) {
    case "category":
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_DocSidebarItem_Category__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, __spreadValues({ item }, props));
    case "html":
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_DocSidebarItem_Html__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, __spreadValues({ item }, props));
    case "link":
    default:
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_DocSidebarItem_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, __spreadValues({ item }, props));
  }
}


/***/ }),

/***/ 31465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BackToTopButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91096);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62513);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2217);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41871);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);






function BackToTopButton() {
  const { shown, scrollToTop } = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .useBackToTopButton */ .H)({ threshold: 300 });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "button",
    {
      "aria-label": (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({
        id: "theme.BackToTopButton.buttonAriaLabel",
        message: "Scroll back to top",
        description: "The ARIA label for the back to top button"
      }),
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(
        "clean-btn",
        _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .ThemeClassNames */ .G.common.backToTopButton,
        (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().backToTopButton),
        shown && (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().backToTopButtonShow)
      ),
      type: "button",
      onClick: scrollToTop
    }
  );
}


/***/ }),

/***/ 32069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62513);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27098);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48983);
/* harmony import */ var _theme_DocSidebarItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78102);





const DocSidebarMobileSecondaryMenu = ({ sidebar, path }) => {
  const mobileSidebar = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .useNavbarMobileSidebar */ .M)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .ThemeClassNames */ .G.docs.docSidebarMenu, "menu__list") }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _theme_DocSidebarItems__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    {
      items: sidebar,
      activePath: path,
      onItemClick: (item) => {
        if (item.type === "category" && item.href) {
          mobileSidebar.toggle();
        }
        if (item.type === "link") {
          mobileSidebar.toggle();
        }
      },
      level: 1
    }
  ));
};
function DocSidebarMobile(props) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .NavbarSecondaryMenuFiller */ .GX,
    {
      component: DocSidebarMobileSecondaryMenu,
      props
    }
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0__.memo(DocSidebarMobile));


/***/ }),

/***/ 33537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CollapseButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91096);
/* harmony import */ var _theme_Icon_Arrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3823);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55599);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);





function CollapseButton({ onClick }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "button",
    {
      type: "button",
      title: (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({
        id: "theme.docs.sidebar.collapseButtonTitle",
        message: "Collapse sidebar",
        description: "The title attribute for collapse button of doc sidebar"
      }),
      "aria-label": (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({
        id: "theme.docs.sidebar.collapseButtonAriaLabel",
        message: "Collapse sidebar",
        description: "The title attribute for collapse button of doc sidebar"
      }),
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(
        "button button--secondary button--outline",
        (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().collapseSidebarButton)
      ),
      onClick
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Icon_Arrow__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().collapseSidebarButtonIcon) })
  );
}


/***/ }),

/***/ 33685:
/***/ ((module) => {

// Exports
module.exports = {
	"docMainContainer": `docMainContainer_TBSr`,
	"docMainContainerEnhanced": `docMainContainerEnhanced_lQrH`,
	"docItemWrapperEnhanced": `docItemWrapperEnhanced_JWYK`
};


/***/ }),

/***/ 33751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocSidebarItemHtml)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62513);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82105);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);




function DocSidebarItemHtml({ item, level, index }) {
  const { value, defaultStyle, className } = item;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "li",
    {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(
        _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .ThemeClassNames */ .G.docs.docSidebarItemLink,
        _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .ThemeClassNames */ .G.docs.docSidebarItemLinkLevel(level),
        defaultStyle && [(_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().menuHtmlItem), "menu__list-item"],
        className
      ),
      key: index,
      dangerouslySetInnerHTML: { __html: value }
    }
  );
}


/***/ }),

/***/ 35710:
/***/ ((module) => {

// Exports
module.exports = {
	"docSidebarContainer": `docSidebarContainer_YfHR`,
	"docSidebarContainerHidden": `docSidebarContainerHidden_DPk8`,
	"sidebarViewport": `sidebarViewport_aRkj`
};


/***/ }),

/***/ 36263:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebar": `sidebar_njMd`,
	"sidebarWithHideableNavbar": `sidebarWithHideableNavbar_wUlq`,
	"sidebarHidden": `sidebarHidden_VK0M`,
	"sidebarLogo": `sidebarLogo_isFc`
};


/***/ }),

/***/ 41871:
/***/ ((module) => {

// Exports
module.exports = {
	"backToTopButton": `backToTopButton_sjWU`,
	"backToTopButtonShow": `backToTopButtonShow_xfvO`
};


/***/ }),

/***/ 41893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NotFoundContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91096);
/* harmony import */ var _theme_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80358);




function NotFoundContent({ className }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", { className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)("container margin-vert--xl", className) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col col--6 col--offset-3" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { as: "h1", className: "hero__title" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    {
      id: "theme.NotFound.title",
      description: "The title of the 404 page"
    },
    "Page Not Found"
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    {
      id: "theme.NotFound.p1",
      description: "The first paragraph of the 404 page"
    },
    "We could not find what you were looking for."
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    {
      id: "theme.NotFound.p2",
      description: "The 2nd paragraph of the 404 page"
    },
    "Please contact the owner of the site that linked you to the original URL and let them know their link is broken."
  )))));
}


/***/ }),

/***/ 55599:
/***/ ((module) => {

// Exports
module.exports = {
	"collapseSidebarButton": `collapseSidebarButton_PEFL`,
	"collapseSidebarButtonIcon": `collapseSidebarButtonIcon_kv0_`
};


/***/ }),

/***/ 57570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocRootLayoutSidebar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25543);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62513);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31647);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56347);
/* harmony import */ var _theme_DocSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8786);
/* harmony import */ var _theme_DocRoot_Layout_Sidebar_ExpandButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29791);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35710);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);








function ResetOnSidebarChange({ children }) {
  var _a;
  const sidebar = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__/* .useDocsSidebar */ .t)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: (_a = sidebar == null ? void 0 : sidebar.name) != null ? _a : "noSidebar" }, children);
}
function DocRootLayoutSidebar({
  sidebar,
  hiddenSidebarContainer,
  setHiddenSidebarContainer
}) {
  const { pathname } = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_5__/* .useLocation */ .zy)();
  const [hiddenSidebar, setHiddenSidebar] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const toggleSidebar = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (hiddenSidebar) {
      setHiddenSidebar(false);
    }
    if (!hiddenSidebar && (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__/* .prefersReducedMotion */ .O)()) {
      setHiddenSidebar(true);
    }
    setHiddenSidebarContainer((value) => !value);
  }, [setHiddenSidebarContainer, hiddenSidebar]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "aside",
    {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(
        _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .ThemeClassNames */ .G.docs.docSidebarContainer,
        (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().docSidebarContainer),
        hiddenSidebarContainer && (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().docSidebarContainerHidden)
      ),
      onTransitionEnd: (e) => {
        if (!e.currentTarget.classList.contains((_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().docSidebarContainer))) {
          return;
        }
        if (hiddenSidebarContainer) {
          setHiddenSidebar(true);
        }
      }
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ResetOnSidebarChange, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(
          (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidebarViewport),
          hiddenSidebar && (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidebarViewportHidden)
        )
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _theme_DocSidebar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        {
          sidebar,
          path: pathname,
          onCollapse: toggleSidebar,
          isHidden: hiddenSidebar
        }
      ),
      hiddenSidebar && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_DocRoot_Layout_Sidebar_ExpandButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { toggleSidebar })
    ))
  );
}


/***/ }),

/***/ 61398:
/***/ ((module) => {

// Exports
module.exports = {
	"menuExternalLink": `menuExternalLink_NmtK`
};


/***/ }),

/***/ 71306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DocRoot)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99462);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62513);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48290);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31647);
/* harmony import */ var _theme_DocRoot_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5337);
/* harmony import */ var _theme_NotFound_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41893);






function DocRoot(props) {
  const currentDocRouteMetadata = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .useDocRootMetadata */ .B5)(props);
  if (!currentDocRouteMetadata) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_NotFound_Content__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null);
  }
  const { docElement, sidebarName, sidebarItems } = currentDocRouteMetadata;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .HtmlClassNameProvider */ .e3, { className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__/* .ThemeClassNames */ .G.page.docsDocPage) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_7__/* .DocsSidebarProvider */ .V, { name: sidebarName, items: sidebarItems }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_DocRoot_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, docElement)));
}


/***/ }),

/***/ 77953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74728);
/* harmony import */ var _theme_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23247);
/* harmony import */ var _theme_DocSidebar_Desktop_CollapseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33537);
/* harmony import */ var _theme_DocSidebar_Desktop_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92015);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36263);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);







function DocSidebarDesktop({ path, sidebar, onCollapse, isHidden }) {
  const {
    navbar: { hideOnScroll },
    docs: {
      sidebar: { hideable }
    }
  } = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .useThemeConfig */ .p)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(
        (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().sidebar),
        hideOnScroll && (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().sidebarWithHideableNavbar),
        isHidden && (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().sidebarHidden)
      )
    },
    hideOnScroll && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Logo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { tabIndex: -1, className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().sidebarLogo) }),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_DocSidebar_Desktop_Content__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, { path, sidebar }),
    hideable && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_DocSidebar_Desktop_CollapseButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { onClick: onCollapse })
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0__.memo(DocSidebarDesktop));


/***/ }),

/***/ 78102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48290);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97972);
/* harmony import */ var _theme_DocSidebarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29909);
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



function DocSidebarItems(_a) {
  var _b = _a, { items } = _b, props = __objRest(_b, ["items"]);
  const visibleItems = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_2__/* .useVisibleSidebarItems */ .Y)(items, props.activePath);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .DocSidebarItemsExpandedStateProvider */ .A, null, visibleItems.map((item, index) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_DocSidebarItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, __spreadValues({ key: index, item, index }, props))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(DocSidebarItems));


/***/ }),

/***/ 82105:
/***/ ((module) => {

// Exports
module.exports = {
	"menuHtmlItem": `menuHtmlItem_M9Kj`
};


/***/ }),

/***/ 82607:
/***/ ((module) => {

// Exports
module.exports = {
	"docRoot": `docRoot_UBD9`,
	"docsWrapper": `docsWrapper_hBAB`
};


/***/ }),

/***/ 91055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocRootLayoutMain)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31647);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33685);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);




function DocRootLayoutMain({ hiddenSidebarContainer, children }) {
  const sidebar = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_2__/* .useDocsSidebar */ .t)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "main",
    {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(
        (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().docMainContainer),
        (hiddenSidebarContainer || !sidebar) && (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().docMainContainerEnhanced)
      )
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(
          "container padding-top--md padding-bottom--lg",
          (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().docItemWrapper),
          hiddenSidebarContainer && (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().docItemWrapperEnhanced)
        )
      },
      children
    )
  );
}


/***/ }),

/***/ 91733:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": `menu_SIkG`,
	"menuWithAnnouncementBar": `menuWithAnnouncementBar_GW3s`
};


/***/ }),

/***/ 92015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocSidebarDesktopContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62513);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62391);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21162);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91096);
/* harmony import */ var _theme_DocSidebarItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78102);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91733);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);







function useShowAnnouncementBar() {
  const { isActive } = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__/* .useAnnouncementBar */ .M)();
  const [showAnnouncementBar, setShowAnnouncementBar] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isActive);
  (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__/* .useScrollPosition */ .Mq)(
    ({ scrollY }) => {
      if (isActive) {
        setShowAnnouncementBar(scrollY === 0);
      }
    },
    [isActive]
  );
  return isActive && showAnnouncementBar;
}
function DocSidebarDesktopContent({ path, sidebar, className }) {
  const showAnnouncementBar = useShowAnnouncementBar();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "nav",
    {
      "aria-label": (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({
        id: "theme.docs.sidebar.navAriaLabel",
        message: "Docs sidebar",
        description: "The ARIA label for the sidebar navigation"
      }),
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(
        "menu thin-scrollbar",
        (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().menu),
        showAnnouncementBar && (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().menuWithAnnouncementBar),
        className
      )
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__/* .ThemeClassNames */ .G.docs.docSidebarMenu, "menu__list") }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_DocSidebarItems__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { items: sidebar, activePath: path, level: 1 }))
  );
}


/***/ }),

/***/ 93674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocSidebarItemCategory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31450);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74728);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57932);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(62513);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45295);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48290);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97972);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46100);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91096);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42517);
/* harmony import */ var _theme_DocSidebarItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78102);
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









function useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed }) {
  const wasActive = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .usePrevious */ .ZC)(isActive);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const justBecameActive = isActive && !wasActive;
    if (justBecameActive && collapsed) {
      updateCollapsed(false);
    }
  }, [isActive, wasActive, collapsed, updateCollapsed]);
}
function useCategoryHrefWithSSRFallback(item) {
  const isBrowser = (0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (item.href && !item.linkUnlisted) {
      return item.href;
    }
    if (isBrowser || !item.collapsible) {
      return void 0;
    }
    return (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_6__/* .findFirstSidebarItemLink */ .Nr)(item);
  }, [item, isBrowser]);
}
function CollapseButton({ collapsed, categoryLabel, onClick }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "button",
    {
      "aria-label": collapsed ? (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .T)(
        {
          id: "theme.DocSidebarItem.expandCategoryAriaLabel",
          message: "Expand sidebar category '{label}'",
          description: "The ARIA label to expand the sidebar category"
        },
        { label: categoryLabel }
      ) : (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .T)(
        {
          id: "theme.DocSidebarItem.collapseCategoryAriaLabel",
          message: "Collapse sidebar category '{label}'",
          description: "The ARIA label to collapse the sidebar category"
        },
        { label: categoryLabel }
      ),
      "aria-expanded": !collapsed,
      type: "button",
      className: "clean-btn menu__caret",
      onClick
    }
  );
}
function DocSidebarItemCategory(_a) {
  var _b = _a, {
    item,
    onItemClick,
    activePath,
    level,
    index
  } = _b, props = __objRest(_b, [
    "item",
    "onItemClick",
    "activePath",
    "level",
    "index"
  ]);
  const { items, label, collapsible, className, href } = item;
  const {
    docs: {
      sidebar: { autoCollapseCategories }
    }
  } = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__/* .useThemeConfig */ .p)();
  const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);
  const isActive = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_6__/* .isActiveSidebarItem */ .w8)(item, activePath);
  const isCurrentPage = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_8__/* .isSamePath */ .ys)(href, activePath);
  const { collapsed, setCollapsed } = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_9__/* .useCollapsible */ .u)({
    // Active categories are always initialized as expanded. The default
    // (`item.collapsed`) is only used for non-active categories.
    initialState: () => {
      if (!collapsible) {
        return false;
      }
      return isActive ? false : item.collapsed;
    }
  });
  const { expandedItem, setExpandedItem } = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_10__/* .useDocSidebarItemsExpandedState */ .G)();
  const updateCollapsed = (toCollapsed = !collapsed) => {
    setExpandedItem(toCollapsed ? null : index);
    setCollapsed(toCollapsed);
  };
  useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (collapsible && expandedItem != null && expandedItem !== index && autoCollapseCategories) {
      setCollapsed(true);
    }
  }, [collapsible, expandedItem, index, setCollapsed, autoCollapseCategories]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "li",
    {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(
        _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_12__/* .ThemeClassNames */ .G.docs.docSidebarItemCategory,
        _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_12__/* .ThemeClassNames */ .G.docs.docSidebarItemCategoryLevel(level),
        "menu__list-item",
        {
          "menu__list-item--collapsed": collapsed
        },
        className
      )
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)("menu__list-item-collapsible", {
          "menu__list-item-collapsible--active": isCurrentPage
        })
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        __spreadValues({
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)("menu__link", {
            "menu__link--sublist": collapsible,
            "menu__link--sublist-caret": !href && collapsible,
            "menu__link--active": isActive
          }),
          onClick: collapsible ? (e) => {
            onItemClick == null ? void 0 : onItemClick(item);
            if (href) {
              if (isCurrentPage) {
                e.preventDefault();
                updateCollapsed();
              } else {
                updateCollapsed(false);
              }
            } else {
              e.preventDefault();
              updateCollapsed();
            }
          } : () => {
            onItemClick == null ? void 0 : onItemClick(item);
          },
          "aria-current": isCurrentPage ? "page" : void 0,
          role: collapsible && !href ? "button" : void 0,
          "aria-expanded": collapsible && !href ? !collapsed : void 0,
          href: collapsible ? hrefWithSSRFallback != null ? hrefWithSSRFallback : "#" : hrefWithSSRFallback
        }, props),
        label
      ),
      href && collapsible && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        CollapseButton,
        {
          collapsed,
          categoryLabel: label,
          onClick: (e) => {
            e.preventDefault();
            updateCollapsed();
          }
        }
      )
    ),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_9__/* .Collapsible */ .N, { lazy: true, as: "ul", className: "menu__list", collapsed }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _theme_DocSidebarItems__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
      {
        items,
        tabIndex: collapsed ? -1 : 0,
        onItemClick,
        activePath,
        level: level + 1
      }
    ))
  );
}


/***/ }),

/***/ 97972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocSidebarItemsExpandedStateProvider),
/* harmony export */   G: () => (/* binding */ useDocSidebarItemsExpandedState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31450);


const EmptyContext = Symbol("EmptyContext");
const Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(EmptyContext);
function DocSidebarItemsExpandedStateProvider({ children }) {
  const [expandedItem, setExpandedItem] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({ expandedItem, setExpandedItem }), [expandedItem]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, { value: contextValue }, children);
}
function useDocSidebarItemsExpandedState() {
  const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
  if (value === EmptyContext) {
    throw new _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__/* .ReactContextError */ .dV("DocSidebarItemsExpandedStateProvider");
  }
  return value;
}


/***/ })

};
;