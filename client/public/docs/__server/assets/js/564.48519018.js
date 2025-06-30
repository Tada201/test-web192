"use strict";
exports.id = 564;
exports.ids = [564];
exports.modules = {

/***/ 19564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70944);
/* harmony import */ var _OptimizedImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65888);



const FileIOSection = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "info-section p-4 mb-4 bg-white dark:bg-gray-800 rounded shadow" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", { className: "mb-6" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { className: "text-3xl font-bold mb-2" }, "Standard Input and Output"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "space-x-2 text-blue-600" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "#stream", className: "hover:underline" }, "I/O Streams"), "|", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "#commandline", className: "hover:underline" }, "I/O from the Command Line"), "|", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "#example", className: "hover:underline" }, "Example"))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", { className: "mb-8" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "mb-4" }, "This topic covers the Java platform classes used for basic input and output. It focuses primarily on I/O Streams, a powerful concept that greatly simplifies I/O operations."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { id: "stream", className: "block text-xl font-semibold mb-2" }, "I/O Stream"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "mb-2" }, "An I/O Stream represents an input source or an output destination. A stream can represent many different kinds of sources and destinations, including disk files, devices, other programs, and memory arrays."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "mb-2" }, "Streams support many different kinds of data, including simple bytes, primitive data types, localized characters, and objects. Some streams simply pass on data; others manipulate and transform the data in useful ways."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("em", { className: "mb-4 block" }, "[for ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "https://docs.oracle.com/javase/tutorial/essential/io/streams.html", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline" }, "detail"), "]"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { id: "commandline", className: "block text-xl font-semibold mb-2 mt-6" }, "I/O from the Command Line"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "mb-2" }, "A program is often run from the command line and interacts with the user in the command line environment. The Java platform supports this kind of interaction in two ways: through the Standard Streams and through the Console."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "mb-2" }, "The Java platform supports three Standard Streams: Standard Input, accessed through ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "System.in"), "; Standard Output, accessed through ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "System.out"), "; and Standard Error, accessed through ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "System.err"), ".", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "These objects are defined automatically and do not need to be opened. Standard Output and Standard Error are both for output; having error output separately allows the user to divert regular output to a file and still be able to read error messages. For more information, refer to the ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "https://docs.oracle.com/javase/tutorial/essential/io/cl.html", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline" }, "documentation"), " for your command line interpreter."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "mb-2" }, "To get user input, we can also use the Scanner class ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("em", null, "[for ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "https://docs.oracle.com/javase/tutorial/essential/io/scanning.html", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline" }, "detail"), "]"), ". This class supports some methods to get various types from the user"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "overflow-x-auto my-4" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { id: "tbl2", className: "min-w-max w-full border border-gray-300 dark:border-gray-700 text-sm" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", { className: "bg-gray-100 dark:bg-gray-700" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: "p-2 border" }, "Method"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: "p-2 border" }, "Description"))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "p-2 border" }, "nextBoolean()"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "p-2 border" }, "Reads a boolean value from the user")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "p-2 border" }, "nextByte()"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "p-2 border" }, "Reads a byte value from the user")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "p-2 border" }, "nextDouble()"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "p-2 border" }, "Reads a double value from the user")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "p-2 border" }, "nextFloat()"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "p-2 border" }, "Reads a float value from the user")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "p-2 border" }, "nextInt()"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "p-2 border" }, "Reads a int value from the user")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "p-2 border" }, "nextLine()"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "p-2 border" }, "Reads a String value from the user")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "p-2 border" }, "nextLong()"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "p-2 border" }, "Reads a long value from the user")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "p-2 border" }, "nextShort()"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "p-2 border" }, "Reads a short value from the user"))))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { id: "example", className: "block text-xl font-semibold mb-2 mt-6" }, "Example"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { src: "/media/ioexample.webp", alt: "ioexample.webp", width: 400, height: 250, className: "my-4 max-w-full rounded border", loading: "lazy" })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "mb-2" }, "In the above example, we need to import the library class ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("em", null, "Scanner"), " from the package ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("em", null, "java.util.Scanner"), ". To use this class at the row 10, we declare the variable sc and create an object from this class. Why do we need this? Do not worry, when you go to the topic ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("em", null, "class and object"), ", you will be explained that why you do this."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "mb-2" }, "At the row 11, a message ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("em", null, "Enter number of elements"), " is printed out."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "mb-2" }, "At the row 12, the statement ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("em", null, "sc.nextLine()"), " to get a string from the user and then, we use ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("em", null, "Integer.parseInt()"), " to convert the inputted string to the integer value."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "mb-2" }, "At the row 19, ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("em", null, "System.out.format"), " is used in Java to format output."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "block text-xl font-semibold mb-2 mt-6" }, "Summary"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: "list-disc ml-6 mb-2" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Easy way to get the user data is to use the library class Scanner"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Using System.out to print out data to the console"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "We can convert a string to the number by using some classes Integer, Float,...."))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", { className: "mb-8" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Reading from a File"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { language: "java" }, `try (BufferedReader br = new BufferedReader(new FileReader("input.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}`)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileIOSection);


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