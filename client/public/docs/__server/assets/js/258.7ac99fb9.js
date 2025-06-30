"use strict";
exports.id = 258;
exports.ids = [258];
exports.modules = {

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


/***/ }),

/***/ 87258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70944);
/* harmony import */ var _OptimizedImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65888);


const InheritanceSection = () => {
  return /* @__PURE__ */ React.createElement("div", { className: "info-section p-4 mb-4 bg-white dark:bg-gray-800 rounded shadow" }, /* @__PURE__ */ React.createElement("h1", { className: "text-3xl font-bold mb-4" }, "Inheritance"), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Definition"), /* @__PURE__ */ React.createElement("p", null, "Object-oriented languages implement reusability of coding structure through inheritance. Inheritance is the second most prominent concept next to encapsulation. It refers to the relationship between classes where one class inherits the entire structure of another class. Inheritance is naturally hierarchical, a tighter relationship than composition and the most highly coupled relationship after friendship."), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mt-4 mb-2" }, "Hierarchies in the Real World"), /* @__PURE__ */ React.createElement("p", null, "For example, the staffing structures in traditional human resource management, with a CEO at the top of the structure, deputies and senior managers beneath that, followed by team leaders and workers. Such structures are useful in making the day to day operations of an organisation manageable. In a retail shop, products are organised and managed in thematic grouping such as hard goods, perishable foods and so on. Such groupings form an integral part of the stock control and checkout management operations. We often use tree diagrams and organograms to capture and visualise these relationships. For example, for the retail shop example:"), /* @__PURE__ */ React.createElement("a", { href: "references.html", className: "text-blue-600 underline" }, "reference"), " | ", /* @__PURE__ */ React.createElement("a", { href: "https://howtodoinjava.com/java/oops/java-inheritance/", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline" }, "other definitions"), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/inheritance1.webp", alt: "Inheritance Example 1", className: "my-4", width: 400, height: 250, loading: "lazy" })), /* @__PURE__ */ React.createElement("p", null, "In the context of OO design, we are interested in hierarchies that represent the progressive design of a set of classes. The root of our design is a relatively abstract entity, and we build upon that entity to produce progressively more concrete entities. Considering our previous example closer up"), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/inheritance2.webp", alt: "Inheritance Example 2", className: "my-4", width: 400, height: 250, loading: "lazy" })), /* @__PURE__ */ React.createElement("p", null, "We note that the entity of an Item is relatively abstract in the sense that we could not go into a shop and purchase one. If we said to a member of staff that we \u201Cwish to purchase an item\u201D, we would expect the response \u201Cwhich item?\u201D. We can purchase specific, or concrete entities, but not those that are relatively abstract in their conceptualisation. But that does not mean that the higher-level entities have no value. They just serve as base definitions onto which we can build more concrete entities. We say that that the higher-level entities are ", /* @__PURE__ */ React.createElement("b", null, "\u201Cparent\u201D, \u201Cbase\u201D or \u201Csuper\u201D"), " classes, and the lower-level ones built from them are ", /* @__PURE__ */ React.createElement("b", null, '\u201Cchild\u201D, "derived" or \u201Csub\u201D'), " classes.")), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, '"is-a" relationship'), /* @__PURE__ */ React.createElement("p", null, "The key idea here is the ", /* @__PURE__ */ React.createElement("b", null, "\u201Cis-a\u201D"), " relationship. Looking at our shop example, we see that ", /* @__PURE__ */ React.createElement("b", null, "HardGood is-a Item"), " and that ", /* @__PURE__ */ React.createElement("b", null, "ElectricalGood is-a HardGood"), " and by extension is-a Item. That suggests that, in type terms, ElectricalGood has type ElectricalGood and also has type of HardGood and ultimately Item. This is the kind of hierarchical relationship that Java and other OO programs are designed to capture."), /* @__PURE__ */ React.createElement("p", null, "Not every real-world hierarchy as we might construe it is suited to this kind of super and sub class analysis. Consider the human resources example referred to earlier. The CEO is the head of the organisation, but does not make much sense as a base class. A senior manager is not also the CEO. A team member is not also a senior manager. So instead of the classic staffing organogram that you might be used to seeing, a more appropriate OO relationship might look something like this:"), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/inheritance3.webp", alt: "Inheritance Example 3", className: "my-4", width: 400, height: 250, loading: "lazy" })), /* @__PURE__ */ React.createElement("p", null, "Such an OO compatible hierarchical relationship is an example of the key OO concept of \u201Cpolymorphism\u201D."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Polymorphism"), " at the class level is the concept that an object can take on more than one form. If an object of class type X has a parent class of type Y, then X can take the form of an object of type either X or Y, and can thus appear in many forms.")), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Derived and Super Classes"), /* @__PURE__ */ React.createElement("p", null, "In OO design terms we need to consider what attributes and methods a set of classes share. Where we can identify common attributes and methods, we can factorise the design of those classes so that the commonly shared attributes and methods form part of the super class."), /* @__PURE__ */ React.createElement("p", null, "We will use an example to help us understand how this works. Consider a shop that sells antiques items, namely ", /* @__PURE__ */ React.createElement("b", null, "vases"), ", ", /* @__PURE__ */ React.createElement("b", null, "statues and paintings"), ". For now we shall consider just some appropriate attributes for our initial OO analysis:"), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/inheritance4.webp", alt: "Inheritance Example 4", className: "my-4", width: 400, height: 250, loading: "lazy" })), /* @__PURE__ */ React.createElement("p", null, "We will make three classes for each of the things that our shop sells. We can see that the classes have some attributes in common, and some that are unique to each class. But we can also see that in reality all three classes are examples of ", /* @__PURE__ */ React.createElement("b", null, "\u201Citems\u201D"), " \u2014 things that the shop sells. So we can factorise our design with an ", /* @__PURE__ */ React.createElement("b", null, "Item superclass"), ", and then make our ", /* @__PURE__ */ React.createElement("b", null, "three specific classes a sub class"), " of that super class. This is beneficial as it reduces un-necessary code duplication (as well as being a better model of a real-world problem).The super and sub class relationship is represented by an arrow pointing from the sub class towards its super class:"), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/inheritance5.webp", alt: "Inheritance Example 5", className: "my-4", width: 400, height: 250, loading: "lazy" })), /* @__PURE__ */ React.createElement("p", null, 'To implement the "is-a" relationship of the above class diagram, we use the keyword ', /* @__PURE__ */ React.createElement("b", null, '"extends"')), /* @__PURE__ */ React.createElement("p", null, "Assume that, these classes are stored in the same package"), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `public class Item
{ 
     int value;
     String creator;

    //The below is methods that you need to implement
    //default constructor
    public Item(){
         value=0;
         creator="";
     }
     //constructor with parameters
     public Item(int value, String creator){
         this.value=value;
         this.creator=creator;
     }
    //getter
    //setter
    //other logic methods
} 
`), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `public class Vase extends Item
{ 
     int height;
     String material;

    //The below is methods that you need to implement
    //constructors 
    //getter
    //setter
    //other logic methods
} 
`), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `public class Statue extends Item
{ 
     int weight;
     String colour;

    //The below is methods that you need to implement
    //constructors 
    //getter
    //setter
    //other logic methods
} 
`), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `public class Painting extends Item
{ 
     int height;
     int width;
     boolean isWatercolour;
     boolean isFramed;

    //The below is methods that you need to implement
    //constructors 
    //getter
    //setter
    //other logic methods
} 
`)), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "AntiqueShop Example"), /* @__PURE__ */ React.createElement("p", null, "The ", /* @__PURE__ */ React.createElement("i", null, "Vase"), " class has a total of ", /* @__PURE__ */ React.createElement("b", null, "four"), " attributes. Two of these are unique to it, and two are \u201Cinherited\u201D from its superclass. Similarly, the ", /* @__PURE__ */ React.createElement("i", null, "Painting"), " class has ", /* @__PURE__ */ React.createElement("b", null, "six"), " attributes, four unique to it, and two inherited from its superclass. So a super, base or parent class contains a basic set of attributes that are intended to form a part of the implementation of sub classes that are built from it. The sub classes have their own attributes that make them unique, and they inherit attributes from their superclass."), /* @__PURE__ */ React.createElement("p", null, 'Now, you create the file named "AntiqueShop.java", the method main is in here'), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `public class AntiqueShop
{ 
    public static void main(String[] args){

        Vase v1 = new Vase();
        v1.value = 100;
        v1.creator="Test1";
        // you can assign values to other attributies of v1
        v1.height=100;
        v1.material="wood";
        // this code only uses to check v1's  fields


        Statue s1=new Statue();
        s1.value=200;
        s1.creator="Test2";
        // you can assign values to other attributies of s1
        s1.weight=100;
        s1.colour="blue";
        // this code only uses to check s1's  fields

        Painting p1=new Painting();
        p1.value=300;
        p1.creator="Test3";
        // you can assign values to other attributies of p1
        p1.height=200;
        p1.width=100;
        p1.isWatercolour=true;
        p1.isFramed=true;
        // this code only uses to check p1's  fields


    } 
} 
`)), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Functions in Inheritance"), /* @__PURE__ */ React.createElement("p", null, 'We create three objects v1,s1,p1 from three subclasses. These objects have "inherited" attributes'), /* @__PURE__ */ React.createElement("p", null, 'Similarly, we add a method to the super class Item, it is also inherited in three sub classes. we are able to call those inherited methods as if they had been defined in their own class definitions. For example, we add the method "output()" to the Item class.'), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `public class Item
{ 
    public int value;
    public String creator;

    //The below is methods that you need to implement
    //constructors 
    //getter
    //setter
    public void output(){
        System.out.println("This item is worth " + value + " pounds");
        System.out.println("This item is created by " + creator );
    }
} 
`), /* @__PURE__ */ React.createElement("p", null, "Edit the method main:"), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `public class AntiqueShop
{ 
    public static void main(String[] args){

        Vase v1 = new Vase();
        v1.value = 100;
        v1.creator="Test1";
        v1.output();

        Statue s1=new Statue();
        s1.value=200;
        s1.creator="Test2";
        s1.output();

        Painting p1=new Painting();
        p1.value=300;
        p1.creator="Test3";
        p1.output();    
    } 
} 
`), /* @__PURE__ */ React.createElement("div", { className: "bg-gray-200 border-l-4 border-gray-600 p-4 my-2 text-gray-900 dark:bg-gray-700 dark:border-gray-300 dark:text-white rounded" }, /* @__PURE__ */ React.createElement("b", null, "Output:"), /* @__PURE__ */ React.createElement("pre", { className: "whitespace-pre-wrap" }, "This item is worth 100 pounds This item is created by Test1 This item is worth 200 pounds This item is created by Test2 This item is worth 300 pounds This item is created by Test3")), /* @__PURE__ */ React.createElement("p", null, "Note that, for now, all the attributes and methods have been declared as ", /* @__PURE__ */ React.createElement("b", null, "public"), ". This is not necessarily good OO design practice and we need to apply the principle of encapsulation. This suggests that attributes of super class are ", /* @__PURE__ */ React.createElement("b", null, "protected"), "."), /* @__PURE__ */ React.createElement("p", null, "The rules that govern how we can guarantee inheritance are as follows:"), /* @__PURE__ */ React.createElement("ul", { className: "list-disc ml-6 mb-2" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "private"), ": attributes and methods are only accessible from within the class itself, and are not guaranteed to be available in any class extended from it."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "protected"), ": attributes and methods that are private and only available from within the class itself and any class extended from it."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "public"), ": attributes and methods that are accessible from within the class and from any other class or calling code."))), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Adding Constructors"), /* @__PURE__ */ React.createElement("p", null, "We now know that inheritance allows sub classes to inherit attributes and methods from a super class. We now consider how we should build constructor methods so that instances of our sub classes are created in the most efficient manner."), /* @__PURE__ */ React.createElement("p", null, "Consider the constructors is added to the Vase class."), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `public class Vase extends Item
{ 
    private int height;
    private String material;

    //The below is methods that you need to implement
    public Vase(){    
         value=0;
         creator="";
         height=0;
         material="";
    }
    public Vase(int value, String creator, int height, String material){
         this.value=value;
         this.creator=creator;
         this.height=height;
         this.material=material;
    }
} 
`), /* @__PURE__ */ React.createElement("p", null, "Because the Vase class has four fields, you can implement constructors that look like the above. But, that is not efficient coding. It would involve code duplication"), /* @__PURE__ */ React.createElement("p", null, "To reduce code duplication, common fields are initialized by using constructors of the superclass."), /* @__PURE__ */ React.createElement("p", null, "We edit the code of the Vase class as follows:"), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `public class Vase extends Item
{ 
    private int height;
    private String material;

    //The below is methods that you need to implement
    public Vase(){    
        super(); //call the default constructor of the Item class
        height=0;
        material="";
    }
    public Vase(int value, String creator, int height, String material){
        super(value, creator);  //call the constructor with 2 parameters of the Item class
        this.height=height;
        this.material=material;
    }
} 
`), /* @__PURE__ */ React.createElement("p", null, "The ", /* @__PURE__ */ React.createElement("b", null, "super"), " keyword refers to the super class"), /* @__PURE__ */ React.createElement("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 my-2 text-yellow-900 dark:bg-yellow-800 dark:border-yellow-500 dark:text-yellow-100" }, /* @__PURE__ */ React.createElement("b", null, "Note"), ": Where a sub class is to call a constructor in its parent class using the super() method call, it must be so as the first line of its own constructor. This is to ensure that objects are constructed from their most distant super class first."), /* @__PURE__ */ React.createElement("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 my-2 text-yellow-900 dark:bg-yellow-800 dark:border-yellow-500 dark:text-yellow-100" }, /* @__PURE__ */ React.createElement("b", null, "Note"), ": A derived class does ", /* @__PURE__ */ React.createElement("b", null, "not inherit a superclass constructor by default")), /* @__PURE__ */ React.createElement("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 my-2 text-yellow-900 dark:bg-yellow-800 dark:border-yellow-500 dark:text-yellow-100" }, /* @__PURE__ */ React.createElement("b", null, "Note"), ": If a constructor ", /* @__PURE__ */ React.createElement("i", null, "does not explicitly invoke a superclass constructor"), ", the Java compiler ", /* @__PURE__ */ React.createElement("i", null, "automatically inserts a call to the no-argument constructor of the superclass"), ". If the super class does not have a no-argument constructor, you will get a compile-time error. Object does have such a constructor, so if Object is the only superclass, there is no problem."), /* @__PURE__ */ React.createElement("p", null, "Similarly, we add constructors to other sub classes"), /* @__PURE__ */ React.createElement("p", null, "We use the Java keyword ", /* @__PURE__ */ React.createElement("b", null, "super"), " as the qualifier for calling a superclass method:  ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("b", null, "super.methodName(arguments);")), /* @__PURE__ */ React.createElement("p", null, "for example:"), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `public class Item{
     ...
     void displayDiscount(){  System.out.println("discounting ...");}  
}  
public class Vase extends Item{  
    ...
    @Override
    void displayDiscount(){
           super.displayDiscount();
           System.out.println("and taking ...");
    }
    public static void main(String[] args){

        Vase obj=new Vase();
        obj.displayDiscount();
    }  
}`), /* @__PURE__ */ React.createElement("p", null, `In a Vase subclass, The "displayDiscount" method has the same signature (name, plus the number and the type of its parameters) and return type as in the superclass. It is called the override the superclass's method. We will learn the override method in the next topic`), /* @__PURE__ */ React.createElement("p", null, `Whenever we wish to invoke the version of super's methods (for example "displayDiscount") that was defined by our superclass. We use the `, /* @__PURE__ */ React.createElement("b", null, '"super"'), " keyword"), /* @__PURE__ */ React.createElement("div", { className: "bg-gray-200 border-l-4 border-gray-600 p-4 my-2 text-gray-900 dark:bg-gray-700 dark:border-gray-300 dark:text-white rounded" }, /* @__PURE__ */ React.createElement("b", null, "Output:"), /* @__PURE__ */ React.createElement("pre", { className: "whitespace-pre-wrap" }, "discounting ... and taking ...")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Hidden methods"), ": Re-implementing a static method implemented in super class"), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/hidden method.webp", alt: "Hidden Method", width: 400, height: 250, className: "my-4", loading: "lazy" }))), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Using instanceof operator"), /* @__PURE__ */ React.createElement("p", null, "Consider the code in the file AntiqueShop.java:"), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `public class AntiqueShop
{ 
    public static void main(String[] args){

        Vase v1 = new Vase(100,"Paris",200,"rock");  
        Statue s1= new Statue(200,"VN", 1000,"white");
        Painting p1=new Painting(300,"USA",2000,1500,true,true);

        Item tmp=v1;  
    } 
} 
`), /* @__PURE__ */ React.createElement("p", null, "In the above code, we create three objects v1, s1, p1 and initialize values by the constructor with parameters. And then, a reference variable tmp that has the type to be the Item superclass. It is storing the address of object v1. See the figure below:"), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(_OptimizedImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, { src: "/media/inheritance6.webp", alt: "Inheritance Example 6", width: 400, height: 250, className: "my-4", loading: "lazy" })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "dynamic type"), ": A reference variable that has the type of the superclass can store the address of the object of sub class. It is called to be ", /* @__PURE__ */ React.createElement("i", null, "dynamic type"), ", the type that is has at runtime."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "static type"), ": the type that it has when first declared. Static type checking is enforced by the compiler."), /* @__PURE__ */ React.createElement("p", null, "Similarly, we can use the variable tmp to store the address of objects s1, p1."), /* @__PURE__ */ React.createElement("p", null, "How to check the tmp variable is pointing to the address of a specified object?"), /* @__PURE__ */ React.createElement("p", null, "Using the ", /* @__PURE__ */ React.createElement("b", null, "instanceof"), " keyword. ", /* @__PURE__ */ React.createElement("a", { href: "https://www.javatpoint.com/downcasting-with-instanceof-operator", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline" }, "read more")), /* @__PURE__ */ React.createElement("p", null, "Consider the code:"), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `public class AntiqueShop
{ 
    public static void main(String[] args){

        Vase v1 = new Vase(100,"Paris",200,"rock");  
        Statue s1= new Statue(200,"VN", 1000,"white");
        Painting p1=new Painting(300,"USA",2000,1500,true,true);
        Item tmp=v1;
        if(tmp instanceof Vase)
            System.out.println("tmp is pointing to the Vase object");
        else if(tmp instanceof Statue)
            System.out.println("tmp is pointing to the Statue object");
        else
            System.out.println("tmp is pointing to the Painting object");    
    } 
} 
`), /* @__PURE__ */ React.createElement("div", { className: "bg-gray-200 border-l-4 border-gray-600 p-4 my-2 text-gray-900 dark:bg-gray-700 dark:border-gray-300 dark:text-white rounded" }, /* @__PURE__ */ React.createElement("b", null, "Output:"), /* @__PURE__ */ React.createElement("pre", { className: "whitespace-pre-wrap" }, "tmp is pointing to the Vase object")), /* @__PURE__ */ React.createElement("p", null, 'The instanceof operator will return true or false. In the above example, Because the variable tmp is pointing to the Vase object, the instruction "tmp instanceof Vase" returns true.')), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Casting"), /* @__PURE__ */ React.createElement("p", null, 'Now, we add a method "putFlowers()" to the Vase class'), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `public class Vase extends Item
{ 
    private int height;
    private String material;

    //The below is methods that you need to implement
    public Vase(){    
         super();
         height=0;
         material="";
    }
    public Vase(int value, String creator, int height, String material){
         super(value, creator);
         this.height=height;
         this.material=material;
    }
    public void putFlowers(){
          System.out.println("flowers are put in the vase");
    }
} 
`), /* @__PURE__ */ React.createElement("p", null, "In the method main, we edit"), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `public class AntiqueShop
{ 
    public static void main(String[] args){

        Vase v1 = new Vase(100,"Paris",200,"rock");  
        Statue s1= new Statue(200,"VN", 1000,"white");
        Painting p1=new Painting(300,"USA",2000,1500,true,true);
        Item tmp=v1;
        if(tmp instanceof Vase){
            System.out.println("tmp is pointing to the Vase object");
            ((Vase)tmp).putFlowers();
        }
        else if(tmp instanceof Statue)
            System.out.println("tmp is pointing to the Statue object");
        else
            System.out.println("tmp is pointing to the Painting object");

    } 
} 
`), /* @__PURE__ */ React.createElement("p", null, "The ", /* @__PURE__ */ React.createElement("i", null, "tmp"), " variable that has the type of the superclass only calls methods of the superclass. To call methods of the subclass we must ", /* @__PURE__ */ React.createElement("i", null, "cast explicitly"), ". If the code has attempted to cast an object to a subclass of which it is not an instance then a ", /* @__PURE__ */ React.createElement("i", null, "ClassCastException"), " error will be thrown. For example,"), /* @__PURE__ */ React.createElement(_CopyableCodeBlock__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, { language: "java" }, `...
System.out.println("tmp is pointing to the Vase object");
((Statue)tmp).setColour("Gray"); // causes an error
...`), /* @__PURE__ */ React.createElement("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 my-2 text-yellow-900 dark:bg-yellow-800 dark:border-yellow-500 dark:text-yellow-100" }, /* @__PURE__ */ React.createElement("b", null, "Note"), ": In Java, The Object class is the parent class of all the classes by default.")), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Summary"), /* @__PURE__ */ React.createElement("ul", { className: "list-disc ml-6 mb-2" }, /* @__PURE__ */ React.createElement("li", null, "Object-oriented languages implement reusability of coding structure through inheritance"), /* @__PURE__ */ React.createElement("li", null, "A derived class does not by default inherit the constructor of a super class"), /* @__PURE__ */ React.createElement("li", null, "Constructors in an inheritance hierarchy execute in order from the super class to the derived class"), /* @__PURE__ */ React.createElement("li", null, "Using the instanceof keyword if we need to check the type of the reference variable."), /* @__PURE__ */ React.createElement("li", null, "Check the type of the reference variable before casting it explicitly."))), /* @__PURE__ */ React.createElement("section", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold mb-2" }, "Course Slide"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "/resource/Inheritance.pdf", download: true, className: "text-blue-600 underline" }, "Inheritance.pdf")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InheritanceSection);


/***/ })

};
;