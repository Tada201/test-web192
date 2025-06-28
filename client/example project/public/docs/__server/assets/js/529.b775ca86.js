"use strict";
exports.id = 529;
exports.ids = [529];
exports.modules = {

/***/ 8529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70944);
/* harmony import */ var _OptimizedImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65888);


const FoundationsCourseSection = () => {
  return /* @__PURE__ */ React.createElement("div", { className: "info-section p-4 mb-4 bg-white dark:bg-gray-800 rounded shadow" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-bold mb-4" }, "Foundations"), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mb-2" }, "Java Virtual Machine"), /* @__PURE__ */ React.createElement("p", { className: "mb-4" }, "The Java Virtual Machine is an abstract computing machine. Like a real computing machine, it has an instruction set and manipulates various memory areas at run time. It is reasonably common to implement a programming language using a virtual machine; the best-known virtual machine may be the P-Code machine of UCSD Pascal.", /* @__PURE__ */ React.createElement("a", { href: "http://en.wikipedia.org/wiki/Java_virtual_machine", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "See Wiki for a detailed exposition"), "."), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/JVM.webp", alt: "Java Virtual Machine", width: 400, height: 250, className: "mb-4 rounded shadow" })), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mb-2" }, "Platform Independence"), /* @__PURE__ */ React.createElement("p", { className: "mb-4" }, "The key that allowed Java to solve both the security and the portability problems is that the output of a Java compiler is not executable code. Rather, it is ByteCode - a highly optimized set of instructions designed to be executed by the Java run-time system, which is called the Java Virtual Machine (JVM)."), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mb-2" }, "Demo: First Program"), /* @__PURE__ */ React.createElement("p", { className: "mb-4" }, "Steps:"), /* @__PURE__ */ React.createElement("ol", { className: "list-decimal list-inside mb-4" }, /* @__PURE__ */ React.createElement("li", null, "Create a new Java NetBeans project"), /* @__PURE__ */ React.createElement("li", null, "Add a Java class"), /* @__PURE__ */ React.createElement("li", null, "Write code"), /* @__PURE__ */ React.createElement("li", null, "Compile/Run the program")), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/firstProgram.webp", alt: "First Java Program", width: 400, height: 250, className: "mb-4 rounded shadow" })), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/step2.webp", alt: "Step 2", width: 400, height: 250, className: "mb-4 rounded shadow" })), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/step22.webp", alt: "Step 2.2", width: 400, height: 250, className: "mb-4 rounded shadow" })), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/step3.webp", alt: "Step 3", width: 400, height: 250, className: "mb-4 rounded shadow" })), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/step4.webp", alt: "Step 4", width: 400, height: 250, className: "mb-4 rounded shadow" })), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mb-2" }, "Keywords and Identifiers"), /* @__PURE__ */ React.createElement("p", { className: "mb-4" }, "Keywords: Almost all of them are similar to those in C language."), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/keyword.webp", alt: "Keywords", width: 400, height: 250, className: "mb-4 rounded shadow" })), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mb-2" }, "Data Types"), /* @__PURE__ */ React.createElement("p", { className: "mb-4" }, "Java is a strongly typed language. Following are the data types and their declarations."), /* @__PURE__ */ React.createElement("p", { className: "mb-4" }, "Declaration:"), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `Type var [=Initial value];`), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `int RollID;
char type='A';`), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/PrimaryDataType.webp", alt: "Primary Data Types", width: 400, height: 250, className: "mb-4 rounded shadow" })), /* @__PURE__ */ React.createElement("h4", { className: "text-lg font-semibold mb-2" }, "Reference Type"), /* @__PURE__ */ React.createElement("p", { className: "mb-4" }, "Following are the reference types in Java."), /* @__PURE__ */ React.createElement("ul", { className: "list-disc list-inside mb-4" }, /* @__PURE__ */ React.createElement("li", null, "array"), /* @__PURE__ */ React.createElement("li", null, "class object"), /* @__PURE__ */ React.createElement("li", null, "interface")), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `int[] ar;
ar= new int[3];
ar[0]=1; ar[1]=2; ar[2]=3;`), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/referenceDataType.webp", alt: "Reference Data Types", width: 400, height: 250, className: "mb-4 rounded shadow" })), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/array.webp", alt: "Array", width: 400, height: 250, className: "mb-4 rounded shadow" })), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mb-2" }, "Scope"), /* @__PURE__ */ React.createElement("p", { className: "mb-4" }, "The scope of a declaration is the portion of a program over which that declaration is visible. Scopes include:"), /* @__PURE__ */ React.createElement("ul", { className: "list-disc list-inside mb-4" }, /* @__PURE__ */ React.createElement("li", null, "function scope - visible to the source code within the function"), /* @__PURE__ */ React.createElement("li", null, "class scope - visible to the member functions of the class"), /* @__PURE__ */ React.createElement("li", null, "block scope - visible to the code block"), /* @__PURE__ */ React.createElement("li", null, "global scope - visible to the entire program"), /* @__PURE__ */ React.createElement("li", null, "file scope - visible to the source code within the file")), /* @__PURE__ */ React.createElement("p", { className: "mb-4" }, "The scope of a non-global declaration begins at the declaration and ends at the closing brace for that declaration. A non-global declaration is called a local declaration."), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mb-2" }, "One Dimensional Arrays"), /* @__PURE__ */ React.createElement("p", { className: "mb-4" }, "An array is a container object that holds a fixed number of values of a single type. The length of an array is established when the array is created. Each item in an array is called an element, and each element is accessed by its numerical index."), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/array2.webp", alt: "One Dimensional Array", width: 400, height: 250, className: "mb-4 rounded shadow" })), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `int[] ar;  // for detail click here
float anArrayOfFloats[];`), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mb-2" }, "Multiple Dimensional Arrays"), /* @__PURE__ */ React.createElement("p", { className: "mb-4" }, "Consider the example:"), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/2DarrayCode.webp", alt: "2D Array Code", width: 400, height: 250, className: "mb-4 rounded shadow" })), /* @__PURE__ */ React.createElement("p", { className: "mb-4" }, "This is a sample memory map of the above code"), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/2Darray.webp", alt: "2D Array Memory Map", width: 400, height: 250, className: "mb-4 rounded shadow" })), /* @__PURE__ */ React.createElement("p", { className: "mb-4" }, "we have created a multidimensional array named ", /* @__PURE__ */ React.createElement("em", null, "m"), ", it holds 8 elements. The variable m is storing the value: ", /* @__PURE__ */ React.createElement("em", null, "8000"), " that is the address of an array. m can be seen as an array of one\u2013dimensional array. In the above example, the statement: m[1]=replacement to assign 1000 to m at index 1. Now, the m can hold 12 elements. output: ", /* @__PURE__ */ React.createElement("em", null, "1,2,3,4,5,6,7,8,9,10,2001,2002")), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mb-2" }, "Operators"), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/operator.webp", alt: "Operators", width: 400, height: 250, className: "mb-4 rounded shadow" })), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/operator2.webp", alt: "Operators 2", width: 400, height: 250, className: "mb-4 rounded shadow" })), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/operator3.webp", alt: "Operators 3", width: 400, height: 250, className: "mb-4 rounded shadow" })), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mb-2" }, "Logic constructs"), /* @__PURE__ */ React.createElement("p", { className: "mb-4" }, "The statements inside your source files are generally executed from top to bottom, in the order that they appear. Control flow statements, however, break up the flow of execution by employing decision making, looping, and branching, enabling your program to conditionally execute particular blocks of code. This section describes the decision-making statements (if-then, if-then-else, switch), the looping statements (for, while, do-while), and the branching statements (break, continue, return) supported by the Java programming language."), /* @__PURE__ */ React.createElement("ul", { className: "list-disc list-inside mb-4" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/if.html", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "if statement"), " [for detail]"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/switch.html", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "switch statement"), " [for detail]"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/while.html", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "while, do, for statements"), " [for detail]")), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mb-2" }, "Summary"), /* @__PURE__ */ React.createElement("ul", { className: "list-disc list-inside mb-4" }, /* @__PURE__ */ React.createElement("li", null, "a declaration associates an identifier with a type"), /* @__PURE__ */ React.createElement("li", null, "a definition attaches meaning to an identifier and is an executable statement"), /* @__PURE__ */ React.createElement("li", null, "the scope of a declaration is that part of the program throughout which the declaration is visible"), /* @__PURE__ */ React.createElement("li", null, "The types of the Java are primitive types and reference types")), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mb-2" }, "Course Slide"), /* @__PURE__ */ React.createElement("p", null, "- ", /* @__PURE__ */ React.createElement("a", { href: "/resource/Learning the Java Language.pdf", className: "text-blue-600 hover:underline", target: "_blank", rel: "noopener noreferrer" }, "Learning the Java Language.pdf")), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mb-2" }, "Reading"), /* @__PURE__ */ React.createElement("ul", { className: "list-disc list-inside mb-4" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "/resource/Download & Install JDK & NetBeans 8.pdf", className: "text-blue-600 hover:underline", target: "_blank", rel: "noopener noreferrer" }, "Download & Install JDK & NetBeans 8.pdf")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "/resource/Get start.pdf", className: "text-blue-600 hover:underline", target: "_blank", rel: "noopener noreferrer" }, "Get Start.pdf")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "/resource/Numbers and Strings.pdf", className: "text-blue-600 hover:underline", target: "_blank", rel: "noopener noreferrer" }, "Numbers and Strings.pdf"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FoundationsCourseSection);


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