"use strict";
exports.id = 744;
exports.ids = [744];
exports.modules = {

/***/ 21744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70944);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _OptimizedImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65888);



const DynamicMemorySection = () => {
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    const script = document.createElement("script");
    script.src = "/disable-devtool.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "info-section p-4 mb-4 bg-white dark:bg-gray-800 rounded shadow" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", { className: "text-3xl font-bold mb-4" }, "Memory Management in Java"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", { className: "mb-8" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Static and Dynamic Heap and Stack"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", { className: "mb-4" }, "In Java, memory management is the process of allocation and de-allocation of objects. Java does memory management automatically using a garbage collector, so you do not need to implement memory management logic in your application."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", { className: "list-disc ml-6 mb-2" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, "Read more: ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", { href: "https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/geninfo/diagnos/garbage_collect.html", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline" }, "Oracle Docs")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, "Read more: ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", { href: "https://www.javatpoint.com/memory-management-in-java", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline" }, "JavaTpoint"))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", { className: "mb-4" }, "Allocation happens directly when you create an object with ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", null, "new"), " and indirectly when you call a method with local variables or arguments. Local data of a method (return data, parameters, variables) is allocated on the ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("b", null, "stack"), " and discarded when the method exits, but objects are allocated on the ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("b", null, "heap"), " and have a longer lifetime."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", { className: "text-xl font-semibold mb-2" }, "Static and Dynamic Heap and Stack"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", { className: "list-disc ml-6 mb-2" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("b", null, "Static heap"), ": Contains class declarations when classes are loaded. Use the ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", null, "static"), " keyword for static methods, variables, classes, and blocks."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("b", null, "Dynamic heap"), ": The runtime data area for all Java objects and arrays. Created when the JVM starts and may grow/shrink as the application runs. Objects not used become garbage and are de-allocated."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("b", null, "Stack"), ": Memory for temporary variables and method calls. Each method call creates a new block in the stack for its local values and references. When the method ends, the block is erased.")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { src: "/media/memory.webp", alt: "Java memory layout", className: "my-4", width: 400, height: 250, loading: "lazy" })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("ol", { className: "list-decimal ml-6 mb-2" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, "When the program runs, the class definition ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("b", null, "Tester"), " is loaded to static heap."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, "Running ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("b", null, "main"), " creates stack space for variables ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", null, "age"), " and ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", null, "sc"), ". ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", null, "age"), " is stored directly in stack; ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", null, "sc"), " points to a ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("b", null, "Scanner"), " object in heap."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, "When ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("b", null, "main"), " finishes, its stack space is discarded. ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", null, "age"), " and ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", null, "sc"), " are killed."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, "The ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("b", null, "Scanner"), " object in heap still exists and becomes garbage.")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { src: "/media/memory2.webp", alt: "Java memory after main", className: "my-4", width: 400, height: 250, loading: "lazy" }))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", { className: "mb-8" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Dynamic Allocation"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", { className: "mb-4" }, "Example code:"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `public static void main(String[] args) {
    int a[] = new int[5];   // [1]
    String s = new String("hello");  // [2]
}`), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", { className: "list-disc ml-6 mb-2" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, "When ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("b", null, "main"), " runs, ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", null, "a"), " and ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", null, "s"), " are allocated in stack memory as references."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, "At [1], ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", null, "new"), " allocates memory in heap for an array of 5 elements and returns its address to ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", null, "a"), "."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, "At [2], ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", null, "new"), ' allocates memory in heap for the string "hello" and returns its address to ', /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", null, "s"), ".")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { src: "/media/allocation.webp", alt: "Dynamic allocation", className: "my-4", width: 400, height: 250, loading: "lazy" })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", { className: "mb-4" }, "To make a reference point to nothing, use ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", null, "null"), ":"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `int a[]=null;
String s=null;`)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", { className: "mb-8" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Dynamic Deallocation"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", { className: "mb-4" }, "In Java, you never explicitly free memory. Java provides ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("b", null, "automatic garbage collection"), ". Local variables in a method are allocated when the method runs and deallocated automatically when it terminates. Unused objects in heap memory are deallocated by the Java system."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { src: "/media/memory3.webp", alt: "Scope and garbage collection", className: "my-4", width: 400, height: 250, loading: "lazy" })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", { className: "mb-4" }, "When the program runs to a certain line, variables may go out of scope and objects become garbage. Setting a reference to ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", null, "null"), " also makes the object eligible for garbage collection.")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", { className: "mb-8" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Garbage Collection"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", { className: "mb-4" }, "The JVM supports a garbage collector to free Java programmers from explicitly managing heap memory. It is called by the JVM only and cannot be activated manually. The Java heap is managed by two lists: free block list and allocated block list. After many allocations and de-allocations, memory may become fragmented."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", { className: "list-disc ml-6 mb-2" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, "Read more: ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", { href: "https://www.oracle.com/technetwork/java/javase/memorymanagement-whitepaper-150215.pdf", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline" }, "Java Memory Management Whitepaper")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, "Read more: ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", { href: "https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/gc01/index.html", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline" }, "Garbage Collection in Java"))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", { className: "mb-4" }, "The runtime system keeps track of allocated memory and determines whether it is still usable. The garbage collector runs only when the system heap becomes exhausted and has the lowest priority. If objects are garbage, they are deallocated automatically.")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", { className: "mb-8" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Summary"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", { className: "list-disc ml-6 mb-2" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, "The memory available to an application at run-time consists of static and dynamic heap and stack"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, "Static memory contains class definitions and shared data of the application"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, "Java supports dynamic memory for applications at run-time upon request"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, "The keyword ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("b", null, "new"), " allocates a region of dynamic memory and returns its starting address"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, "We store the address of dynamically allocated memory in the reference variable"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, "Deallocation is made by Garbage Collector"))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", { className: "mb-8" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Course Slide"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", { href: "/resource/Memory Management in Java.pdf", download: true, className: "text-blue-600 underline" }, "Memory Management in Java.pdf")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicMemorySection);


/***/ }),

/***/ 65888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
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

const OptimizedImage = (_a) => {
  var _b = _a, {
    src,
    alt,
    width,
    height,
    loading = "lazy",
    className = ""
  } = _b, rest = __objRest(_b, [
    "src",
    "alt",
    "width",
    "height",
    "loading",
    "className"
  ]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "img",
    __spreadValues({
      src,
      alt,
      width,
      height,
      loading,
      className
    }, rest)
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OptimizedImage);


/***/ })

};
;