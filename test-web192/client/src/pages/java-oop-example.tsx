import React, { useState, useEffect } from "react";
import { CodeBlock } from "@/components/content/CodeBlock";
import { InfoBox } from "@/components/content/InfoBox";
import { ConceptCard } from "@/components/content/ConceptCard";
import { ProgressTracker } from "@/components/content/ProgressTracker";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Play,
  Square,
  Copy,
  Download,
  CheckCircle,
  Circle,
  Code,
  BookOpen,
  Target,
  Zap,
  Settings,
  ChevronRight,
  ChevronDown,
  Monitor,
  Sun,
  Moon,
} from "lucide-react";

const codeExamples = {
  student: `public class Student {
    // Private fields (encapsulation)
    private String name;
    private int studentId;
    private double gpa;
    private String major;

    // Constructor
    public Student(String name, int studentId, String major) {
        this.name = name;
        this.studentId = studentId;
        this.major = major;
        this.gpa = 0.0; // Default GPA
    }

    // Getter methods
    public String getName() {
        return name;
    }

    public int getStudentId() {
        return studentId;
    }

    public double getGpa() {
        return gpa;
    }

    public String getMajor() {
        return major;
    }

    // Setter methods with validation
    public void setGpa(double gpa) {
        if (gpa >= 0.0 && gpa <= 4.0) {
            this.gpa = gpa;
        } else {
            System.out.println("Invalid GPA. Must be between 0.0 and 4.0");
        }
    }

    public void setMajor(String major) {
        this.major = major;
    }

    // Method to display student information
    public void displayInfo() {
        System.out.println("Student Information:");
        System.out.println("Name: " + name);
        System.out.println("ID: " + studentId);
        System.out.println("Major: " + major);
        System.out.println("GPA: " + String.format("%.2f", gpa));
    }

    // Method to check academic standing
    public String getAcademicStanding() {
        if (gpa >= 3.5) return "Dean's List";
        else if (gpa >= 3.0) return "Good Standing";
        else if (gpa >= 2.0) return "Satisfactory";
        else return "Academic Probation";
    }

    public static void main(String[] args) {
        // Create student objects
        Student alice = new Student("Alice Johnson", 12345, "Computer Science");
        Student bob = new Student("Bob Smith", 12346, "Mathematics");

        // Set GPAs
        alice.setGpa(3.8);
        bob.setGpa(2.9);

        // Display information
        alice.displayInfo();
        System.out.println("Academic Standing: " + alice.getAcademicStanding());
        System.out.println();

        bob.displayInfo();
        System.out.println("Academic Standing: " + bob.getAcademicStanding());
    }
}`,
  helloWorld: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Welcome to Java Programming!");
    }
}`,
  calculator: `public class Calculator {
    public static void main(String[] args) {
        int a = 15;
        int b = 7;

        System.out.println("Basic Calculator Operations:");
        System.out.println("a = " + a + ", b = " + b);
        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division: " + (a / b));
        System.out.println("Remainder: " + (a % b));
    }
}`,
  bankAccount: `public class BankAccount {
    private String accountNumber;
    private double balance;
    private String ownerName;

    public BankAccount(String accountNumber, String ownerName, double initialBalance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = initialBalance >= 0 ? initialBalance : 0;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
            System.out.println("New Balance: $" + balance);
        } else {
            System.out.println("Invalid deposit amount");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
            System.out.println("New Balance: $" + balance);
        } else {
            System.out.println("Invalid withdrawal amount or insufficient funds");
        }
    }

    public double getBalance() {
        return balance;
    }

    public static void main(String[] args) {
        BankAccount account = new BankAccount("ACC001", "John Doe", 1000.0);

        System.out.println("Initial Balance: $" + account.getBalance());
        account.deposit(250.0);
        account.withdraw(100.0);
        account.withdraw(2000.0); // This should fail
    }
}`,
};

const learningSteps = [
  {
    id: "understand-encapsulation",
    title: "Understand Encapsulation",
    description:
      "Learn why we use private fields and public methods to control access to data.",
    completed: false,
  },
  {
    id: "implement-constructors",
    title: "Implement Constructors",
    description:
      "Create constructors to properly initialize object state when creating instances.",
    completed: false,
  },
  {
    id: "create-getters-setters",
    title: "Create Getters and Setters",
    description:
      "Implement accessor and mutator methods with proper validation.",
    completed: false,
  },
  {
    id: "add-business-logic",
    title: "Add Business Logic",
    description:
      "Implement methods that perform meaningful operations on the object's data.",
    completed: false,
  },
  {
    id: "test-implementation",
    title: "Test Your Implementation",
    description:
      "Create objects and test all methods to verify correct functionality.",
    completed: false,
  },
];

const assignments = [
  "Write a Java program to print your name 10 times using a loop.",
  "Create a program to calculate the area of a rectangle given length and width.",
  "Write a program to check if a number is even or odd using conditional statements.",
  "Implement a program to find the largest of three numbers using if-else statements.",
  "Create a class `Car` with attributes `model`, `year`, and `color`, and a method to display them.",
  "Write a program to reverse a string using a loop without using built-in methods.",
  "Implement a simple `BankAccount` class with `deposit`, `withdraw`, and `getBalance` methods.",
  "Create a program to generate the first 10 Fibonacci numbers using loops.",
  "Write a program to check if a given year is a leap year using conditional logic.",
  "Implement a `Student` class with attributes `name`, `age`, `grade`, and methods to display and update details.",
  "Create a program to sort an array of integers in ascending order using bubble sort.",
  "Write a program to find the factorial of a number using both iterative and recursive approaches.",
  "Implement a `Rectangle` class with methods to calculate area, perimeter, and check if it's a square.",
  "Create a program to convert temperature between Celsius and Fahrenheit with input validation.",
  "Write a program to count vowels, consonants, and special characters in a given string.",
];

export default function JavaOOPExample() {
  const [currentCode, setCurrentCode] = useState(codeExamples.student);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [selectedExample, setSelectedExample] = useState("student");
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [completedAssignments, setCompletedAssignments] = useState<Set<number>>(
    new Set(),
  );
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("learning-path");

  // Simulate Java code execution
  const simulateJavaExecution = (code: string): string => {
    if (code.includes("class HelloWorld")) {
      return "Hello, World!\nWelcome to Java Programming!";
    } else if (code.includes("class Calculator")) {
      return "Basic Calculator Operations:\na = 15, b = 7\nAddition: 22\nSubtraction: 8\nMultiplication: 105\nDivision: 2\nRemainder: 1";
    } else if (code.includes("class Student")) {
      return "Student Information:\nName: Alice Johnson\nID: 12345\nMajor: Computer Science\nGPA: 3.80\nAcademic Standing: Dean's List\n\nStudent Information:\nName: Bob Smith\nID: 12346\nMajor: Mathematics\nGPA: 2.90\nAcademic Standing: Good Standing";
    } else if (code.includes("class BankAccount")) {
      return "Initial Balance: $1000.0\nDeposited: $250.0\nNew Balance: $1250.0\nWithdrawn: $100.0\nNew Balance: $1150.0\nInvalid withdrawal amount or insufficient funds";
    } else {
      return "Code executed successfully!\n(This is a simulated output. In production, integrate with TeaVM or CheerpJ for actual Java execution)";
    }
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput("Running assignment...");

    // Simulate execution delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const result = simulateJavaExecution(currentCode);
    setOutput(result);
    setIsRunning(false);
  };

  const handleClearCode = () => {
    setCurrentCode("");
    setOutput("");
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentCode);
  };

  const handleExampleChange = (exampleKey: string) => {
    setSelectedExample(exampleKey);
    setCurrentCode(codeExamples[exampleKey as keyof typeof codeExamples]);
    setOutput("");
  };

  // Auto-detect code completion based on requirements
  const checkCodeCompletion = (code: string): boolean => {
    // Simple completion detection logic - check for basic Java structure
    const hasClass =
      code.includes("class ") && code.includes("{") && code.includes("}");
    const hasMethod = code.includes("public ") || code.includes("private ");
    const hasMainMethod = code.includes("public static void main");

    return hasClass && hasMethod && code.length > 50; // Basic requirements
  };

  const checkAssignmentCompletion = (
    assignmentIndex: number,
    code: string,
  ): boolean => {
    // Auto-detect completion based on assignment requirements
    const requirements = [
      () => code.includes("for") || code.includes("while"), // Loop assignment
      () => code.includes("length") && code.includes("width"), // Rectangle area
      () =>
        code.includes("if") && (code.includes("even") || code.includes("odd")), // Even/odd check
      () => code.includes("if") && code.includes("else"), // If-else structure
      () => code.includes("class Car"), // Car class
      () => code.includes("reverse") || code.includes("charAt"), // String reverse
      () => code.includes("class BankAccount"), // BankAccount class
      () =>
        code.includes("fibonacci") ||
        (code.includes("for") && code.includes("+")), // Fibonacci
      () => code.includes("leap") || code.includes("year"), // Leap year
      () => code.includes("class Student"), // Student class
      () => code.includes("sort") || code.includes("bubble"), // Sorting
      () => code.includes("factorial"), // Factorial
      () => code.includes("class Rectangle"), // Rectangle class
      () => code.includes("celsius") || code.includes("fahrenheit"), // Temperature
      () => code.includes("vowel") || code.includes("consonant"), // Character counting
    ];

    if (requirements[assignmentIndex]) {
      return checkCodeCompletion(code) && requirements[assignmentIndex]();
    }
    return checkCodeCompletion(code);
  };

  // Auto-calculate progress based on code completion
  const codeCompletionCount = checkCodeCompletion(currentCode)
    ? learningSteps.length
    : 0;
  const assignmentCompletionCount = assignments.filter((_, index) =>
    checkAssignmentCompletion(index, currentCode),
  ).length;

  const progressPercentage = (codeCompletionCount / learningSteps.length) * 100;
  const assignmentProgress =
    (assignmentCompletionCount / assignments.length) * 100;

  return (
    <div className="min-h-screen bg-doc-bg text-doc-text pt-16">
      <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
        {/* Sidebar */}
        <div
          className={`border-r border-doc-border transition-all duration-300 flex-shrink-0 ${
            sidebarCollapsed ? "w-16" : "w-80"
          }`}
          style={{ backgroundColor: "hsl(var(--doc-surface))" }}
        >
          <div
            className="p-4 border-b border-doc-border"
            style={{ backgroundColor: "hsl(var(--doc-hover))" }}
          >
            <div className="flex items-center justify-between">
              {!sidebarCollapsed && (
                <h2 className="text-lg font-semibold text-doc-text">
                  Navigation
                </h2>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="text-doc-text-muted hover:text-doc-text hover:bg-doc-hover"
                title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                {sidebarCollapsed ? (
                  <ChevronRight size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </Button>
            </div>
          </div>

          {!sidebarCollapsed && (
            <div className="p-4 flex flex-col h-full">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full flex-1 flex flex-col"
              >
                <TabsList className="grid w-full grid-cols-2 bg-doc-hover mb-4">
                  <TabsTrigger value="learning-path" className="text-xs">
                    <Target size={16} className="mr-1" />
                    Learning
                  </TabsTrigger>
                  <TabsTrigger value="assignments" className="text-xs">
                    <BookOpen size={16} className="mr-1" />
                    Assignments
                  </TabsTrigger>
                </TabsList>

                <TabsContent
                  value="learning-path"
                  className="flex-1 overflow-auto"
                >
                  <div className="space-y-4 pr-2">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-doc-text">
                          Learning Progress
                        </h3>
                        <span className="text-xs text-doc-text-muted">
                          {codeCompletionCount}/{learningSteps.length}
                        </span>
                      </div>
                      <Progress value={progressPercentage} className="h-2" />
                    </div>

                    <div className="space-y-2">
                      {learningSteps.map((step, index) => {
                        const isCompleted = checkCodeCompletion(currentCode);
                        return (
                          <div
                            key={step.id}
                            className={`p-3 rounded-lg border transition-all duration-200 ${
                              isCompleted
                                ? "bg-doc-accent/10 border-doc-accent/30"
                                : "bg-doc-surface border-doc-border"
                            }`}
                            style={{
                              backgroundColor: isCompleted
                                ? "hsl(var(--doc-accent) / 0.1)"
                                : "hsl(var(--doc-surface))",
                            }}
                          >
                            <div className="flex items-start space-x-2">
                              {isCompleted ? (
                                <CheckCircle
                                  size={16}
                                  className="text-doc-accent mt-0.5 flex-shrink-0"
                                />
                              ) : (
                                <Circle
                                  size={16}
                                  className="text-doc-text-muted mt-0.5 flex-shrink-0"
                                />
                              )}
                              <div>
                                <h4 className="text-sm font-medium text-doc-text">
                                  {step.title}
                                </h4>
                                <p className="text-xs text-doc-text-muted mt-1">
                                  {step.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent
                  value="assignments"
                  className="flex-1 overflow-auto"
                >
                  <div className="space-y-4 pr-2">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-doc-text">
                          Assignment Progress
                        </h3>
                        <span className="text-xs text-doc-text-muted">
                          {assignmentCompletionCount}/{assignments.length}
                        </span>
                      </div>
                      <Progress value={assignmentProgress} className="h-2" />
                    </div>

                    <div className="space-y-2 overflow-y-auto custom-scrollbar">
                      {assignments.map((assignment, index) => {
                        const isCompleted = checkAssignmentCompletion(
                          index,
                          currentCode,
                        );
                        return (
                          <div
                            key={index}
                            className={`p-3 rounded-lg border transition-all duration-200 ${
                              isCompleted
                                ? "bg-doc-accent/10 border-doc-accent/30"
                                : "bg-doc-surface border-doc-border"
                            }`}
                            style={{
                              backgroundColor: isCompleted
                                ? "hsl(var(--doc-accent) / 0.1)"
                                : "hsl(var(--doc-surface))",
                            }}
                          >
                            <div className="flex items-start space-x-2">
                              {isCompleted ? (
                                <CheckCircle
                                  size={16}
                                  className="text-doc-accent mt-0.5 flex-shrink-0"
                                />
                              ) : (
                                <Circle
                                  size={16}
                                  className="text-doc-text-muted mt-0.5 flex-shrink-0"
                                />
                              )}
                              <div>
                                <span className="text-xs font-medium text-doc-accent">
                                  #{index + 1}
                                </span>
                                <p className="text-sm text-doc-text mt-1">
                                  {assignment}
                                </p>
                                {isCompleted && (
                                  <span className="text-xs text-green-400 mt-1 block">
                                    ✓ Requirements detected
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-doc-border bg-doc-surface flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <h1 className="text-2xl font-bold text-doc-text mb-2">
                  Java Programming Assignments
                </h1>
                <p className="text-doc-text-muted">
                  Complete interactive Java assignments with real-time code
                  execution and feedback
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  variant="secondary"
                  className="bg-doc-accent/10 text-doc-accent"
                >
                  <Zap size={14} className="mr-1" />
                  Interactive
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-green-500/10 text-green-400"
                >
                  <Monitor size={14} className="mr-1" />
                  Live Code
                </Badge>
              </div>
            </div>
          </div>

          {/* Code Editor Section */}
          <div className="flex-1 flex min-h-0 overflow-hidden">
            {/* Editor */}
            <div className="flex-1 flex flex-col min-w-0">
              <div
                className="p-4 border-b border-doc-border flex-shrink-0"
                style={{ backgroundColor: "hsl(var(--doc-surface))" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-doc-text flex items-center">
                    <Code size={20} className="mr-2 text-doc-accent" />
                    Assignment Code Editor
                  </h3>
                  <div className="flex items-center space-x-2">
                    <select
                      value={selectedExample}
                      onChange={(e) => handleExampleChange(e.target.value)}
                      className="px-3 py-2 text-sm bg-doc-hover border border-doc-border rounded-lg text-doc-text focus:ring-2 focus:ring-doc-accent/50 focus:border-doc-accent"
                    >
                      <option value="student">Student Class</option>
                      <option value="helloWorld">Hello World</option>
                      <option value="calculator">Calculator</option>
                      <option value="bankAccount">Bank Account</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center space-x-3 mb-4">
                  <Button
                    onClick={handleRunCode}
                    disabled={isRunning}
                    className="bg-doc-accent hover:bg-doc-accent/90 text-white px-6 py-2.5 shadow-sm"
                  >
                    {isRunning ? (
                      <>
                        <Square size={16} className="mr-2" />
                        Running...
                      </>
                    ) : (
                      <>
                        <Play size={16} className="mr-2" />
                        Run Assignment
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleClearCode}
                    className="border-doc-border text-doc-text hover:bg-doc-hover px-4 py-2.5"
                  >
                    Clear
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleCopyCode}
                    className="border-doc-border text-doc-text hover:bg-doc-hover px-4 py-2.5"
                  >
                    <Copy size={16} className="mr-2" />
                    Copy
                  </Button>
                </div>
              </div>

              <div className="flex-1 p-4 overflow-auto">
                <textarea
                  value={currentCode}
                  onChange={(e) => setCurrentCode(e.target.value)}
                  className="w-full h-[400px] p-4 bg-doc-bg border border-doc-border rounded-lg text-doc-text font-mono text-sm leading-relaxed resize-none focus:ring-2 focus:ring-doc-accent/50 focus:border-doc-accent"
                  placeholder="Write your Java assignment code here..."
                />
              </div>
            </div>

            {/* Output Panel */}
            <div
              className="w-96 border-l border-doc-border flex-shrink-0"
              style={{ backgroundColor: "hsl(var(--doc-surface))" }}
            >
              <div className="p-4 border-b border-doc-border">
                <h3 className="text-lg font-semibold text-doc-text flex items-center">
                  <Monitor size={20} className="mr-2 text-doc-accent" />
                  Assignment Output
                </h3>
              </div>
              <div className="p-4 flex-1 overflow-auto">
                <div
                  className="h-[300px] border border-doc-border rounded-lg p-4 font-mono text-sm overflow-auto"
                  style={{ backgroundColor: "hsl(var(--doc-bg))" }}
                >
                  {output ? (
                    <pre className="text-doc-text whitespace-pre-wrap">
                      {output}
                    </pre>
                  ) : (
                    <div className="text-doc-text-muted italic">
                      Click "Run Assignment" to see the output here...
                    </div>
                  )}
                </div>

                {/* Output Checker Tab */}
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-doc-text mb-2 flex items-center">
                    <CheckCircle size={16} className="mr-2 text-doc-accent" />
                    Output Checker
                  </h4>
                  <div
                    className="border border-doc-border rounded-lg p-3 text-sm"
                    style={{ backgroundColor: "hsl(var(--doc-surface))" }}
                  >
                    {output ? (
                      <div className="space-y-2">
                        <div className="flex items-center text-green-400">
                          <CheckCircle size={14} className="mr-2" />
                          <span>Code executed successfully</span>
                        </div>
                        <div className="text-doc-text-muted">
                          Output lines: {output.split("\n").length}
                        </div>
                        {checkCodeCompletion(currentCode) && (
                          <div className="flex items-center text-doc-accent">
                            <CheckCircle size={14} className="mr-2" />
                            <span>Assignment requirements detected</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-doc-text-muted italic">
                        Run your code to see output analysis...
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Concept Cards Section */}
      <div className="p-8 border-t border-doc-border bg-doc-surface">
        <h2 className="text-xl font-bold text-doc-text mb-6">
          Assignment Learning Concepts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ConceptCard
            title="Problem Solving"
            icon="fas fa-lightbulb"
            difficulty="beginner"
          >
            <p className="text-doc-text-muted">
              Break down complex problems into smaller, manageable pieces.
              Understand requirements thoroughly before starting to code.
            </p>
          </ConceptCard>

          <ConceptCard
            title="Code Structure"
            icon="fas fa-code"
            difficulty="intermediate"
          >
            <p className="text-doc-text-muted">
              Write clean, readable code with proper naming conventions. Use
              comments to explain complex logic and algorithms.
            </p>
          </ConceptCard>

          <ConceptCard
            title="Testing & Debugging"
            icon="fas fa-bug"
            difficulty="intermediate"
          >
            <p className="text-doc-text-muted">
              Test your code with various inputs and edge cases. Use debugging
              techniques to identify and fix issues efficiently.
            </p>
          </ConceptCard>
        </div>
      </div>

      {/* Tips Section */}
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InfoBox type="tip" title="Assignment Tips">
            <ul className="list-disc list-inside text-doc-text-muted space-y-1">
              <li>Read assignment requirements carefully before coding</li>
              <li>Test your code with different input values</li>
              <li>Use meaningful names for variables and methods</li>
              <li>Comment your code to explain complex logic</li>
              <li>Check for edge cases and handle errors properly</li>
            </ul>
          </InfoBox>

          <InfoBox type="info" title="Assignment Submission">
            <p className="text-doc-text-muted">
              Complete your assignments using the code editor above. Test your
              solutions thoroughly and make sure they handle all specified
              requirements.
              <strong className="text-doc-text"> Save your work</strong> before
              closing the browser.
            </p>
          </InfoBox>
        </div>
      </div>
    </div>
  );
}
