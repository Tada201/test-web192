"use strict";
exports.id = 949;
exports.ids = [949];
exports.modules = {

/***/ 10949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70944);

const PolymorphismSection = () => {
  return /* @__PURE__ */ React.createElement("div", { className: "info-section p-4 mb-4 bg-white dark:bg-gray-800 rounded shadow" }, /* @__PURE__ */ React.createElement("h1", { className: "text-3xl font-bold mb-4" }, "Polymorphism"), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Overloading & Overriding"), /* @__PURE__ */ React.createElement("p", null, "Polymorphism allows methods and objects to appear in many forms. This is achieved in Java through ", /* @__PURE__ */ React.createElement("b", null, "overloading"), " and ", /* @__PURE__ */ React.createElement("b", null, "overriding"), " methods."), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mt-4 mb-2" }, "Overloading"), /* @__PURE__ */ React.createElement("p", null, "Overloading allows a class to have multiple methods with the same name but different parameter types or counts."), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `public class Vase extends Item {
    private int height;
    private String material;

    public Vase() {
        super();
        height = 0;
        material = "";
    }
    public Vase(int height, String material) {
        super();
        this.height = height;
        this.material = material;
    }
    public Vase(int value, String creator, int height, String material) {
        super(value, creator);
        this.height = height;
        this.material = material;
    }
}`), /* @__PURE__ */ React.createElement("p", null, "Each constructor has a unique signature. The compiler selects the correct one based on the arguments provided."), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `Vase v1 = new Vase(0, "Dave", 50, "bronze");
Vase v2 = new Vase(100, "plaster");`), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mt-4 mb-2" }, "Overriding"), /* @__PURE__ */ React.createElement("p", null, "Overriding allows a subclass to provide a specific implementation of a method already defined in its superclass."), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `public class Item {
    protected int value;
    protected String creator;
    public void input() {
        // ...
    }
    public void output() {
        // ...
    }
}

public class Vase extends Item {
    private int height;
    private String material;
    @Override
    public void input() {
        super.input();
        // ...
    }
    @Override
    public void output() {
        super.output();
        // ...
    }
}`), /* @__PURE__ */ React.createElement("p", null, "Use the ", /* @__PURE__ */ React.createElement("b", null, "@Override"), " annotation to indicate you are overriding a superclass method.")), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Function Bindings"), /* @__PURE__ */ React.createElement("p", null, "Java uses ", /* @__PURE__ */ React.createElement("b", null, "static binding"), " (compile time) for overloaded methods and ", /* @__PURE__ */ React.createElement("b", null, "dynamic binding"), " (runtime) for overridden methods.")), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Abstract Classes"), /* @__PURE__ */ React.createElement("p", null, "An ", /* @__PURE__ */ React.createElement("b", null, "abstract class"), " contains abstract methods (no implementation) that must be implemented by subclasses."), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `public abstract class Item {
    protected int value;
    protected String creator;
    public abstract void displayPrice();
}

public class Vase extends Item {
    private int height;
    private String material;
    @Override
    public void displayPrice() {
        if (height < 100)
            System.out.println("The price is 1000$");
        else
            System.out.println("The price is 2000$");
    }
}`), /* @__PURE__ */ React.createElement("p", null, "Subclasses must implement all abstract methods from their superclass.")), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Interfaces"), /* @__PURE__ */ React.createElement("p", null, "An ", /* @__PURE__ */ React.createElement("b", null, "interface"), " defines method signatures that implementing classes must provide. Interfaces enable multiple inheritance of type."), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `public interface Menu {
    void getSalad();
    void getBeefsteak();
}

public class Chef implements Menu {
    public void getSalad() {
        System.out.println("This is a salad");
    }
    public void getBeefsteak() {
        System.out.println("This is a beefsteak");
    }
}`), /* @__PURE__ */ React.createElement("p", null, "A class can implement multiple interfaces, providing polymorphic behavior.")), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Summary"), /* @__PURE__ */ React.createElement("ul", { className: "list-disc ml-6 mb-2" }, /* @__PURE__ */ React.createElement("li", null, "Polymorphism allows objects and methods to take many forms."), /* @__PURE__ */ React.createElement("li", null, "Overloading and overriding are key techniques for polymorphism."), /* @__PURE__ */ React.createElement("li", null, "Abstract classes and interfaces enable flexible and reusable code."), /* @__PURE__ */ React.createElement("li", null, "In OOP, a parent class or interface reference can refer to a child class object."))), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Course Slide"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "/resource/Polymorphism.pdf", download: true, className: "text-blue-600 underline" }, "Polymorphism.pdf")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PolymorphismSection);


/***/ })

};
;