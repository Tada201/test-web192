import CopyableCodeBlock from './CopyableCodeBlock';
import OptimizedImage from '../OptimizedImage';

const FoundationsCourseSection = () => {
  return (
    <div className="info-section p-4 mb-4 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Foundations</h2>

      <h3 className="text-xl font-semibold mb-2">Java Virtual Machine</h3>
      <p className="mb-4">
        The Java Virtual Machine is an abstract computing machine. Like a real computing machine, it has an instruction set and manipulates various memory areas at run time. It is reasonably common to implement a programming language using a virtual machine; the best-known virtual machine may be the P-Code machine of UCSD Pascal.  
        <a href="http://en.wikipedia.org/wiki/Java_virtual_machine" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">See Wiki for a detailed exposition</a>.
      </p>
      <div className="flex justify-center">
        <OptimizedImage src="/media/JVM.webp" alt="Java Virtual Machine" width={400} height={250} className="mb-4 rounded shadow" />
      </div>

      <h3 className="text-xl font-semibold mb-2">Platform Independence</h3>
      <p className="mb-4">The key that allowed Java to solve both the security and the portability problems is that the output of a Java compiler is not executable code. Rather, it is ByteCode - a highly optimized set of instructions designed to be executed by the Java run-time system, which is called the Java Virtual Machine (JVM).</p>

      <h3 className="text-xl font-semibold mb-2">Demo: First Program</h3>
      <p className="mb-4">Steps:</p>
      <ol className="list-decimal list-inside mb-4">
        <li>Create a new Java NetBeans project</li>
        <li>Add a Java class</li>
        <li>Write code</li>
        <li>Compile/Run the program</li>
      </ol>
      <div className="flex justify-center">
        <OptimizedImage src="/media/firstProgram.webp" alt="First Java Program" width={400} height={250} className="mb-4 rounded shadow" />
      </div>
      <div className="flex justify-center">
        <OptimizedImage src="/media/step2.webp" alt="Step 2" width={400} height={250} className="mb-4 rounded shadow" />
      </div>
      <div className="flex justify-center">
        <OptimizedImage src="/media/step22.webp" alt="Step 2.2" width={400} height={250} className="mb-4 rounded shadow" />
      </div>
      <div className="flex justify-center">
        <OptimizedImage src="/media/step3.webp" alt="Step 3" width={400} height={250} className="mb-4 rounded shadow" />
      </div>
      <div className="flex justify-center">
        <OptimizedImage src="/media/step4.webp" alt="Step 4" width={400} height={250} className="mb-4 rounded shadow" />
      </div>

      <h3 className="text-xl font-semibold mb-2">Keywords and Identifiers</h3>
      <p className="mb-4">
        Keywords: Almost all of them are similar to those in C language.  
      </p>
      <div className="flex justify-center">
        <OptimizedImage src="/media/keyword.webp" alt="Keywords" width={400} height={250} className="mb-4 rounded shadow" />
      </div>

      <h3 className="text-xl font-semibold mb-2">Data Types</h3>
      <p className="mb-4">
        Java is a strongly typed language. Following are the data types and their declarations.
      </p>
      <p className="mb-4">Declaration:</p>
      <CopyableCodeBlock language="java">
{`Type var [=Initial value];`}
      </CopyableCodeBlock>

      <CopyableCodeBlock language="java">
{`int RollID;
char type='A';`}
      </CopyableCodeBlock>
      <div className="flex justify-center">
        <OptimizedImage src="/media/PrimaryDataType.webp" alt="Primary Data Types" width={400} height={250} className="mb-4 rounded shadow" />
      </div>

      <h4 className="text-lg font-semibold mb-2">Reference Type</h4>
      <p className="mb-4">
        Following are the reference types in Java.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>array</li>
        <li>class object</li>
        <li>interface</li>
      </ul>

      <CopyableCodeBlock language="java">
{`int[] ar;
ar= new int[3];
ar[0]=1; ar[1]=2; ar[2]=3;`}
      </CopyableCodeBlock>
      <div className="flex justify-center">
        <OptimizedImage src="/media/referenceDataType.webp" alt="Reference Data Types" width={400} height={250} className="mb-4 rounded shadow" />
      </div>
      <div className="flex justify-center">
        <OptimizedImage src="/media/array.webp" alt="Array" width={400} height={250} className="mb-4 rounded shadow" />
      </div>

      <h3 className="text-xl font-semibold mb-2">Scope</h3>
      <p className="mb-4">
        The scope of a declaration is the portion of a program over which that declaration is visible. Scopes include:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>function scope - visible to the source code within the function</li>
        <li>class scope - visible to the member functions of the class</li>
        <li>block scope - visible to the code block</li>
        <li>global scope - visible to the entire program</li>
        <li>file scope - visible to the source code within the file</li>
      </ul>
      <p className="mb-4">
        The scope of a non-global declaration begins at the declaration and ends at the closing brace for that declaration. A non-global declaration is called a local declaration.
      </p>

      <h3 className="text-xl font-semibold mb-2">One Dimensional Arrays</h3>
      <p className="mb-4">
        An array is a container object that holds a fixed number of values of a single type.  
        The length of an array is established when the array is created.  
        Each item in an array is called an element, and each element is accessed by its numerical index.
      </p>
      <div className="flex justify-center">
        <OptimizedImage src="/media/array2.webp" alt="One Dimensional Array" width={400} height={250} className="mb-4 rounded shadow" />
      </div>
      <CopyableCodeBlock language="java">
{`int[] ar;  // for detail click here
float anArrayOfFloats[];`}
      </CopyableCodeBlock>

      <h3 className="text-xl font-semibold mb-2">Multiple Dimensional Arrays</h3>
      <p className="mb-4">
        Consider the example:
      </p>
      <div className="flex justify-center">
        <OptimizedImage src="/media/2DarrayCode.webp" alt="2D Array Code" width={400} height={250} className="mb-4 rounded shadow" />
      </div>
      <p className="mb-4">
        This is a sample memory map of the above code
      </p>
      <div className="flex justify-center">
        <OptimizedImage src="/media/2Darray.webp" alt="2D Array Memory Map" width={400} height={250} className="mb-4 rounded shadow" />
      </div>

      <p className="mb-4">
        we have created a multidimensional array named <em>m</em>, it holds 8 elements. The variable m is storing the value: <em>8000</em> that is the address of an array. m can be seen as an array of one–dimensional array.  
        In the above example, the statement: m[1]=replacement to assign 1000 to m at index 1.  
        Now, the m can hold 12 elements.  
        output: <em>1,2,3,4,5,6,7,8,9,10,2001,2002</em>
      </p>

      <h3 className="text-xl font-semibold mb-2">Operators</h3>
      <div className="flex justify-center">
        <OptimizedImage src="/media/operator.webp" alt="Operators" width={400} height={250} className="mb-4 rounded shadow" />
      </div>
      <div className="flex justify-center">
        <OptimizedImage src="/media/operator2.webp" alt="Operators 2" width={400} height={250} className="mb-4 rounded shadow" />
      </div>
      <div className="flex justify-center">
        <OptimizedImage src="/media/operator3.webp" alt="Operators 3" width={400} height={250} className="mb-4 rounded shadow" />
      </div>

      <h3 className="text-xl font-semibold mb-2">Logic constructs</h3>
      <p className="mb-4">
        The statements inside your source files are generally executed from top to bottom, in the order that they appear. Control flow statements, however, break up the flow of execution by employing decision making, looping, and branching, enabling your program to conditionally execute particular blocks of code. This section describes the decision-making statements (if-then, if-then-else, switch), the looping statements (for, while, do-while), and the branching statements (break, continue, return) supported by the Java programming language.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/if.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">if statement</a> [for detail]</li>
        <li><a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/switch.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">switch statement</a> [for detail]</li>
        <li><a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/while.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">while, do, for statements</a> [for detail]</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Summary</h3>
      <ul className="list-disc list-inside mb-4">
        <li>a declaration associates an identifier with a type</li>
        <li>a definition attaches meaning to an identifier and is an executable statement</li>
        <li>the scope of a declaration is that part of the program throughout which the declaration is visible</li>
        <li>The types of the Java are primitive types and reference types</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Course Slide</h3>
      <p>
        - <a href="/resource/Learning the Java Language.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Learning the Java Language.pdf</a>
      </p>

      <h3 className="text-xl font-semibold mb-2">Reading</h3>
      <ul className="list-disc list-inside mb-4">
        <li><a href="/resource/Download & Install JDK & NetBeans 8.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Download & Install JDK & NetBeans 8.pdf</a></li>
        <li><a href="/resource/Get start.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Get Start.pdf</a></li>
        <li><a href="/resource/Numbers and Strings.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Numbers and Strings.pdf</a></li>
      </ul>
    </div>
  );
};

export default FoundationsCourseSection;

// NOTE: For best performance, use .webp images and serve via CDN if possible.
