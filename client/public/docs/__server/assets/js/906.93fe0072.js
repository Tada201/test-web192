"use strict";
exports.id = 906;
exports.ids = [906];
exports.modules = {

/***/ 11906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70944);
/* harmony import */ var _OptimizedImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65888);


const EncapsulationSection = () => {
  return /* @__PURE__ */ React.createElement("div", { className: "info-section p-4 mb-4 bg-white dark:bg-gray-800 rounded shadow max-w-full overflow-x-auto" }, /* @__PURE__ */ React.createElement("h1", { className: "text-3xl font-bold mb-4" }, "Encapsulation"), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Class and Object"), /* @__PURE__ */ React.createElement("p", { className: "mb-2" }, /* @__PURE__ */ React.createElement("b", null, "Class")), /* @__PURE__ */ React.createElement("p", null, 'In the previous topic, we saw the term "class" but did not give enough consideration to its meaning. Now we can establish a useful definition:'), /* @__PURE__ */ React.createElement("div", { className: "bg-blue-50 border-l-4 border-blue-400 p-4 my-2 dark:bg-blue-900 dark:border-blue-300 dark:text-white" }, "A ", /* @__PURE__ */ React.createElement("b", null, "class"), " is an organisational unit of an Object Oriented design and program."), /* @__PURE__ */ React.createElement("div", { className: "mb-2" }, /* @__PURE__ */ React.createElement("a", { href: "https://www.w3schools.com/java/java_oop.asp", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline" }, "see class definitions on the w3schools page"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("a", { href: "https://open.umn.edu/opentextbooks/textbooks/java-java-java-object-oriented-problem-solving?fbclid=IwAR2_jsAY7ldx2i-178wHimdAkCz0k65ZBVUR7G7OJSNpN3cikA3sPlGQBcQ", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline" }, "see class definitions from other authors")), /* @__PURE__ */ React.createElement("ul", { className: "list-disc ml-6 mb-2" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Highly cohesive:"), " the class represents a single useful entity or organisational unit and does that job well."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Minimally coupled:"), " the class limits its interactions with other classes to only those that are really necessary for it to do what it is designed to do."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Encapsulation:"), " the class keeps information necessary to its internal operation private and does not expose it to other classes, and only makes public the information.")), /* @__PURE__ */ React.createElement("p", null, "So whenever we want to create an OO program, we should give thought to the notion of OO design and think about what classes or entities we need to create, using the principles of high cohesion, low coupling and encapsulation as our guide."), /* @__PURE__ */ React.createElement("p", { className: "mt-2" }, "A formal definition of a ", /* @__PURE__ */ React.createElement("b", null, "class"), " includes two key components: ", /* @__PURE__ */ React.createElement("b", null, "Fields(Attributes)"), " and ", /* @__PURE__ */ React.createElement("b", null, "Methods(Behaviors)")), /* @__PURE__ */ React.createElement("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 my-2 dark:bg-yellow-600 dark:border-yellow-300 dark:text-white" }, "This is a good time to start."), /* @__PURE__ */ React.createElement("div", { className: "bg-gray-50 border-l-4 border-gray-400 p-4 my-2 dark:bg-gray-700 dark:border-gray-300 dark:text-white" }, /* @__PURE__ */ React.createElement("b", null, "Problem:"), " A sports car can be one of a variety of colours, with an engine power between 100 HP and 200 HP. It can be a convertible or a regular model. The car has a button that starts the engine and a parking brake. When the parking brake is released and you press the accelerator, it drives in the direction determined by the transmission setting."), /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mt-4" }, "Design guideline:"), /* @__PURE__ */ React.createElement("ol", { className: "list-decimal ml-6 mb-2" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Looking for main nouns"), ", classes are often described by main nouns in the problem."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Looking for auxiliary nouns"), " that describe details of the main noun, Fields or Attributes are often described by auxiliary nouns."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Looking for verbs"), ", methods or behaviors are often described by verbs."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Find the relationship"), " among classes. ", /* @__PURE__ */ React.createElement("b", null, "TIPS"), ": ", /* @__PURE__ */ React.createElement("em", null, "If your problem has two main nouns. They have often the relationship."))), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/encapsulation1.webp", alt: "Encapsulation example 1", className: "my-4", width: 400, height: 250, loading: "lazy" })), /* @__PURE__ */ React.createElement("p", null, "We use Unified Modeling Language(UML) to describe the class structure. UML provides mechanisms to represent class members, such as attributes and methods, and additional information."), /* @__PURE__ */ React.createElement("a", { href: "https://en.wikipedia.org/wiki/Class_diagram", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline" }, "Read this article to get more about UML", ">"), /* @__PURE__ */ React.createElement("p", { className: "mt-2" }, "A UML class diagram is used to represent the Car class"), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/encapsulation2.webp", alt: "Encapsulation example 2", className: "my-4", width: 400, height: 250, loading: "lazy" })), /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mt-4" }, "How to draw the class structure?"), /* @__PURE__ */ React.createElement("ul", { className: "list-disc ml-6 mb-2" }, /* @__PURE__ */ React.createElement("li", null, "put main noun(Car) to make the class name"), /* @__PURE__ */ React.createElement("li", null, "put auxiliary nouns(nouns describe the detail of Car) to make fields"), /* @__PURE__ */ React.createElement("li", null, "put verbs to make methods"), /* @__PURE__ */ React.createElement("li", null, "To specify the visibility of a class member from other classes (i.e. any attribute or method), these notations(-,+,#,~) must be placed before the member's name. (In Java, '~' is replaced by ' '). ", /* @__PURE__ */ React.createElement("a", { href: "https://en.wikipedia.org/wiki/Class_diagram", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline" }, "get more notations", ">"))), /* @__PURE__ */ React.createElement("p", null, "Now, You will implement this class in Java. In your editor, create a new file named Car.java (", /* @__PURE__ */ React.createElement("b", null, "Note"), ": the file named the same as the class name). The code of Car class:"), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `public class Car {
    //fields
    private String Colour;
    private int EnginePower;
    private boolean Convertible;
    private boolean parkingBrake;

    //methods
    public Car(){
        Colour="";
        EnginePower=0;
        Convertible=false;
        parkingBrake=false;
    }

    public Car(String Colour, int EnginePower, boolean Convertible, boolean parkingBrake) {
        this.Colour = Colour;
        this.EnginePower = EnginePower;
        this.Convertible = Convertible;
        this.parkingBrake = parkingBrake;
    }

    public void pressStartButton(){
        System.out.println("You can press the star button");
    }

    public void pressAcceleratorButton(){
        System.out.println("You can press the accelerator button");
        System.out.println("Colour:"+ Colour);
        System.out.println("Engine power:"+ EnginePower);
        System.out.println("Convertible:"+ Convertible);
        System.out.println("parking brake:"+ parkingBrake);
    }

    public void setColour(String Colour) {
        this.Colour = Colour;
    }

    public String getColour() {
        return Colour;
    }

    public int getEnginePower() {
        return EnginePower;
    }

    public void setEnginePower(int EnginePower) {
        this.EnginePower = EnginePower;
    }
}`), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/demoCarClass.webp", alt: "Demo Car Class", className: "my-4", width: 400, height: 250, loading: "lazy" })), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/outputCarClass.webp", alt: "Output Car Class", className: "my-4", width: 400, height: 250, loading: "lazy" }))), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Constructor"), /* @__PURE__ */ React.createElement("p", null, "Complete encapsulation requires a mechanism for initializing data members at creation-time. Without initialization at creation-time, an object's data members contain undefined values until client code calls a modifier that sets that data."), /* @__PURE__ */ React.createElement("p", null, "The special member function that any object invokes at creation-time is called its class' constructor."), /* @__PURE__ */ React.createElement("p", null, "The example above, the special method ", /* @__PURE__ */ React.createElement("b", null, "Car(){...}"), " is inserted to the file Car.java. It is called the ", /* @__PURE__ */ React.createElement("b", null, "default constructor"), ". Therefore, all fields of c or c2 are assigned to empty values. Values are called the ", /* @__PURE__ */ React.createElement("b", null, "state of object"), ". Initializing an object's instance variables in a constructor ensures that the object has a well-defined state from the time of its creation."), /* @__PURE__ */ React.createElement("p", null, "The default constructor takes its name from the class itself. The prototype for this no-argument constructor takes the form ", /* @__PURE__ */ React.createElement("b", null, "ClassName()"))), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Overloading Constructor"), /* @__PURE__ */ React.createElement("p", null, "Overloading a class' constructor adds communication options for client code. Client code can select the most appropriate set of arguments at creation time."), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/Encapsulation8.webp", alt: "Encapsulation8", width: 400, height: 250, className: "my-4", loading: "lazy" })), /* @__PURE__ */ React.createElement("p", null, "This method is called the ", /* @__PURE__ */ React.createElement("b", null, "constructor with parameters"), "."), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/encapsulation9.webp", alt: "Encapsulation9", className: "my-4", width: 400, height: 250, loading: "lazy" })), /* @__PURE__ */ React.createElement("p", null, "In the above code, the third object c3 is created and c3 invokes the constructor with parameters. All fields of c3 are assigned as ", '{"red", 100, true, true}', ". "), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/encapsulation10.webp", alt: "Encapsulation10", className: "my-4", width: 400, height: 250, loading: "lazy" })), /* @__PURE__ */ React.createElement("p", null, "Because c3 invokes pressAcceleratorButton(), The state of c3 is printed out."), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/encapsulation11.webp", alt: "Encapsulation11", className: "my-4", width: 400, height: 250, loading: "lazy" })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Note"), ": If the class definition includes the prototype for a constructor with some parameters but does not include the prototype for a no-argument default constructor, the compiler DOES NOT insert an empty-body, no-argument default constructor. The compiler only inserts an empty-body, no-argument default constructor if the class definition does not declare ANY constructor."), /* @__PURE__ */ React.createElement("p", null, "All methods that are implemented in the Car class at the time are called member methods/functions.")), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "The current Object"), /* @__PURE__ */ React.createElement("p", null, "When run ", /* @__PURE__ */ React.createElement("b", null, '"c1.pressAcceleratorButton();"'), ", c1 invokes the method => the object (is handled by c1) is the current object at the time."), /* @__PURE__ */ React.createElement("p", null, "When run ", /* @__PURE__ */ React.createElement("b", null, '"c2.pressAcceleratorButton();"'), ", c2 invokes the method => the object (is handled by c2) is the current object at the time."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "This")), /* @__PURE__ */ React.createElement("p", null, "The keyword ", /* @__PURE__ */ React.createElement("b", null, "this"), " returns the address of the current object. That is, this holds the address of the region of memory that contains all of the data stored in the instance variables of current object."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Scope of this:"), " This is created and used just when the member method is called. After the member method terminates ", /* @__PURE__ */ React.createElement("b", null, "this"), " will be discarded."), /* @__PURE__ */ React.createElement("a", { href: "https://www.javatpoint.com/this-keyword", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline" }, "more"), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/encapsulation12.webp", alt: "Encapsulation12", className: "my-4", width: 400, height: 250, loading: "lazy" })), /* @__PURE__ */ React.createElement("p", null, "Upon entering the constructor with parameters, the pointer ", /* @__PURE__ */ React.createElement("b", null, "this"), " is created by Java and it is storing the address of the object (4000). ", /* @__PURE__ */ React.createElement("b", null, "c3 and this"), " are pointing to the current object. Using ", /* @__PURE__ */ React.createElement("b", null, "this"), " in here to distinguish local variable and instance variable/field. After assigning values of input parameters to instance variables of c3, ", /* @__PURE__ */ React.createElement("b", null, "this"), " will be discarded."), /* @__PURE__ */ React.createElement("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 my-2 dark:bg-yellow-600 dark:border-yellow-300 dark:text-white" }, /* @__PURE__ */ React.createElement("b", null, "TIPS"), ": If parameters (formal arguments) of a member method and instance variables/fields are same. So, we are using this keyword to distinguish local variable and instance variable.")), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Member functions"), /* @__PURE__ */ React.createElement("p", null, "Member functions are the functions, which have their declaration inside the class definition and work on the data members of the class."), /* @__PURE__ */ React.createElement("p", null, "At the time, the Car class contains member functions as:"), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/encapsulation13.webp", alt: "Encapsulation13", className: "my-4", width: 400, height: 250, loading: "lazy" })), /* @__PURE__ */ React.createElement("p", null, "After an object is created and assigned default values. Now, if you want to set one instance variable to other value. for example, change only one instance variable colour of c3 to 'black'. What solution for this case?"), /* @__PURE__ */ React.createElement("p", null, "It's OK, we will add more a method ", /* @__PURE__ */ React.createElement("b", null, "setColour()"), " to the Car class design. The code as:"), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/encapsulation14.webp", alt: "Encapsulation14", className: "my-4", width: 400, height: 250, loading: "lazy" })), /* @__PURE__ */ React.createElement("p", null, "The main code:"), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/encapsulation15.webp", alt: "Encapsulation15", className: "my-4", width: 400, height: 250, loading: "lazy" })), /* @__PURE__ */ React.createElement("p", null, "the pointer ", /* @__PURE__ */ React.createElement("b", null, 'c3 invokes setColour("black")'), ". Therefore, at the time ", /* @__PURE__ */ React.createElement("b", null, "this.Colour=..."), " is used to access to instance variable of c3."), /* @__PURE__ */ React.createElement("p", null, "The same above idea, if you want to get the value of one instance variable you should add more a method ", /* @__PURE__ */ React.createElement("b", null, "getColour()")), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/encapsulation16.webp", alt: "Encapsulation16", className: "my-4", width: 400, height: 250, loading: "lazy" })), /* @__PURE__ */ React.createElement("p", null, "You can also add more other getters/setters. The completed code:"), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `public class Car {
    //fields
    private String Colour;
    private int EnginePower;
    private boolean Convertible;
    private boolean parkingBrake;

    //methods
    public Car(){
        Colour="";
        EnginePower=0;
        Convertible=false;
        parkingBrake=false;
    }

    public Car(String Colour, int EnginePower, boolean Convertible, boolean parkingBrake) {
        this.Colour = Colour;
        this.EnginePower = EnginePower;
        this.Convertible = Convertible;
        this.parkingBrake = parkingBrake;
    }

    public void pressStartButton(){
        System.out.println("You can press the star button");
    }

    public void pressAcceleratorButton(){
        System.out.println("You can press the accelerator button");
        System.out.println("Colour:"+ Colour);
        System.out.println("Engine power:"+ EnginePower);
        System.out.println("Convertible:"+ Convertible);
        System.out.println("parking brake:"+ parkingBrake);
    }

    public void setColour(String Colour) {
        this.Colour = Colour;
    }

    public String getColour() {
        return Colour;
    }

    public int getEnginePower() {
        return EnginePower;
    }

    public void setEnginePower(int EnginePower) {
        this.EnginePower = EnginePower;
    }
}`), /* @__PURE__ */ React.createElement("div", { className: "bg-gray-50 border-l-4 border-gray-400 p-4 my-2 dark:bg-gray-700 dark:border-gray-300 dark:text-white" }, /* @__PURE__ */ React.createElement("b", null, "Output:"), /* @__PURE__ */ React.createElement("pre", { className: "whitespace-pre-wrap" }, "You can press the star button You can press the accelerator button Colour: Engine power:0 Convertible:false parking brake:false You can press the accelerator button Colour: Engine power:0 Convertible:false parking brake:false You can press the accelerator button Colour:red Engine power:100 Convertible:true parking brake:true Colour of c3:black")), /* @__PURE__ */ React.createElement("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 my-2 dark:bg-yellow-600 dark:border-yellow-300 dark:text-white" }, /* @__PURE__ */ React.createElement("b", null, "TIPS"), ": A class often has method four groups. Constructors, getters, setters and other logic methods. Any method that is put in the class will operate on fields in its class.")), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Package"), /* @__PURE__ */ React.createElement("p", null, "A ", /* @__PURE__ */ React.createElement("i", null, "package"), " is a namespace that organizes a set of related classes and interfaces. Conceptually you can think of packages as being similar to different folders on your computer."), /* @__PURE__ */ React.createElement("p", null, "Because software written in the Java programming language can be composed of hundreds or thousands of individual classes, it makes sense to keep things organized by placing related classes and interfaces into packages."), /* @__PURE__ */ React.createElement("a", { href: "https://docs.oracle.com/javase/tutorial/java/concepts/package.html", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline" }, "see more at Oracle"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("a", { href: "https://www.geeksforgeeks.org/packages-in-java/", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline" }, "see more at other page"), /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mt-4" }, "Creating a package"), /* @__PURE__ */ React.createElement("p", null, "To create a package, you choose a name for the package and put a package statement with that name at the top of every source file that contains the types (classes, interfaces, enumerations, and annotation types) that you want to include in the package."), /* @__PURE__ */ React.createElement("p", null, "The package statement (for example, ", /* @__PURE__ */ React.createElement("i", null, "package mypkg;"), ") must be the first line in the source file. There can be only one package statement in each source file, and it applies to all types in the file."), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/package.webp", alt: "Package Example", className: "my-4", width: 400, height: 250, loading: "lazy" })), /* @__PURE__ */ React.createElement("a", { href: "https://docs.oracle.com/javase/tutorial/java/package/createpkgs.html", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline" }, "read more", ">")), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Access Modifier"), /* @__PURE__ */ React.createElement("p", null, "To specify the visibility of a class member (i.e. any attribute or method), we use:"), /* @__PURE__ */ React.createElement("ul", { className: "list-disc ml-6 mb-2" }, /* @__PURE__ */ React.createElement("li", null, "private: -"), /* @__PURE__ */ React.createElement("li", null, "public: +"), /* @__PURE__ */ React.createElement("li", null, "protected: #"), /* @__PURE__ */ React.createElement("li", null, "default: if don't any notation, it is treated as default")), /* @__PURE__ */ React.createElement("p", null, "these keywords are called ", /* @__PURE__ */ React.createElement("b", null, "access modifier")), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/encapsulation20.webp", alt: "Encapsulation20", className: "my-4", width: 400, height: 250, loading: "lazy" })), /* @__PURE__ */ React.createElement("p", null, "Let's understand the access modifiers in Java by a simple table."), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/encapsulation21.webp", alt: "Encapsulation21", className: "my-4", width: 400, height: 250, loading: "lazy" })), /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mt-4" }, "private"), /* @__PURE__ */ React.createElement("p", null, "The private access modifier is accessible only within the class."), /* @__PURE__ */ React.createElement("p", null, "We cut the method main in the file Car.java. Paste it to the other file named Tester.java."), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `public class Tester {
        public static void main(String[] args) {
          Car c=new Car();
          c.pressStartButton();
          c.pressAcceleratorButton();

          Car c2=new Car();
          c2.pressAcceleratorButton();

          Car c3=new Car("red", 100, true, true);
          c3.pressAcceleratorButton();
          c3.setColour("black");
          System.out.println("Colour of c3:" + c3.getColour());
          //access the instance variable Colour of c
          c.Colour="Gray"; // error
    }
}`), /* @__PURE__ */ React.createElement("p", null, "In the method main, Using ", /* @__PURE__ */ React.createElement("b", null, 'c.Colour="Gray"'), " will cause an error because it is private data. Also , all private members can not access from other classes"), /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mt-4" }, "public"), /* @__PURE__ */ React.createElement("p", null, "The ", /* @__PURE__ */ React.createElement("b", null, "public"), " access modifier is accessible everywhere."), /* @__PURE__ */ React.createElement("p", null, "In the above example, the Car class is public to can use it everywhere. In the Tester.java, we can also access to public methods."), /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mt-4" }, "default"), /* @__PURE__ */ React.createElement("p", null, "If you don't use any modifier, it is treated as default by default. The default modifier is accessible only within package. It cannot be accessed from outside the package. It provides more accessibility than private. But, it is more restrictive than protected, and public."), /* @__PURE__ */ React.createElement("p", null, "Edit the file Car.java"), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `package A;
public class Car {
    //fields
    private String Colour;
    private int EnginePower;
    private boolean Convertible;
    private boolean parkingBrake;
    //methods
    public Car(){
        Colour="";
        EnginePower=0;
        Convertible=false;
        parkingBrake=false;
    }

    public Car(String Colour, int EnginePower, boolean Convertible, boolean parkingBrake) {
        this.Colour = Colour;
        this.EnginePower = EnginePower;
        this.Convertible = Convertible;
        this.parkingBrake = parkingBrake;
    }

    void pressStartButton(){
        System.out.println("You can press the star button");
    }
}`), /* @__PURE__ */ React.createElement("p", null, "Edit the file Tester.java"), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `package B;
import A.Car;
public class Tester {
        public static void main(String[] args) {
          Car c=new Car();
          c.pressStartButton();        // error
          c.pressAcceleratorButton();

          Car c2=new Car();
          c2.pressAcceleratorButton();

          Car c3=new Car("red", 100, true, true);
          c3.pressAcceleratorButton();
          c3.setColour("black");
          System.out.println("Colour of c3:" + c3.getColour());
    }
}`), /* @__PURE__ */ React.createElement("p", null, "Because the method ", /* @__PURE__ */ React.createElement("b", null, "pressStartButton()"), " is default, in the method main we can not invoke this."), /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mt-4" }, "protected"), /* @__PURE__ */ React.createElement("p", null, "The protected access modifier is accessible within package and outside the package but through inheritance only.")), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Summary"), /* @__PURE__ */ React.createElement("ul", { className: "list-disc ml-6 mb-2" }, /* @__PURE__ */ React.createElement("li", null, "Encapsulation is a way of packaging data and methods together into one unit. ", /* @__PURE__ */ React.createElement("a", { href: "https://www.w3schools.in/java-tutorial/encapsulation", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline" }, "more")), /* @__PURE__ */ React.createElement("li", null, "To achieve encapsulation, declare fields as private"), /* @__PURE__ */ React.createElement("li", null, "Provide public get and set methods to access and update the value of a private variable"), /* @__PURE__ */ React.createElement("li", null, "The constructor is a special member function that an object invokes at creation time, the name of the constructor is the name of the class, not have return types"), /* @__PURE__ */ React.createElement("li", null, "The compiler inserts an empty body constructor into any class definition that does not declare a constructor"), /* @__PURE__ */ React.createElement("li", null, "The current values are storing in instance variables of a object is called the state"))), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Course Slide"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "/resource/Encapsulation.pdf", download: true, className: "text-blue-600 underline" }, "Encapsulation.pdf")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EncapsulationSection);


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