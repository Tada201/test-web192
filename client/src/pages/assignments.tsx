import React, { useState, useEffect } from "react";
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
import { HighlightedCode } from "@/components/content/HighlightedCode";

export default function AssignmentsPage() {
  const [currentCode, setCurrentCode] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [selectedExample, setSelectedExample] = useState("");
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [completedAssignments, setCompletedAssignments] = useState<Set<number>>(
    new Set(),
  );
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("learning-path");
  const [error, setError] = useState<string>("");
  const [examples, setExamples] = useState<Record<string, string>>({});
  const [learningSteps, setLearningSteps] = useState<any[]>([]);
  const [assignments, setAssignments] = useState<string[]>([]);
  const [openExample, setOpenExample] = useState<string | null>(null);

  // Fetch code examples, learning steps, and assignments from backend on mount
  useEffect(() => {
    // Static examples data since backend is removed
    const staticExamples: Record<string, string> = {
      "HelloWorld": `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Welcome to Java Programming!");
    }
}`,
      "Student": `public class Student {
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
      "Calculator": `public class Calculator {
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
      "BankAccount": `public class BankAccount {
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
    setExamples(staticExamples);
    setLearningSteps([]);
    setAssignments([
      "Write a loop to print numbers 1 to 10",
      "Create a class Car with properties and methods",
      "Implement a method to reverse a string",
      "Write a program to check if a number is prime",
      "Create a BankAccount class with deposit and withdraw methods",
    ]);
  }, []);

  useEffect(() => {
    // Dynamically add JDoodle embed script
    const scriptId = "jdoodle-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.jdoodle.com/assets/jdoodle-pym.min.js";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Real Java code execution via backend API
  const executeJavaCode = async (code: string): Promise<string> => {
    try {
      const response = await fetch("/api/java/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to execute code");
      }
      const data = await response.json();
      return data.output || "";
    } catch (error: any) {
      return `Error: ${error.message}`;
    }
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput("Running assignment...");
    setError("");
    if (!currentCode.includes("class ")) {
      setError("Error: No class definition found.");
      setIsRunning(false);
      return;
    } else if (!currentCode.includes("main")) {
      setError("Warning: No main method found.");
    }
    const result = await executeJavaCode(currentCode);
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
    setCurrentCode(examples[exampleKey] || "");
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
    <div className="min-h-screen bg-doc-bg text-doc-text">
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
                          Code Examples
                        </h3>
                        <span className="text-xs text-doc-text-muted">
                          {Object.keys(examples).length}
                        </span>
                      </div>

                      <Progress value={0} className="h-2" />
                    </div>

                    <div className="space-y-2">
                      {Object.entries(examples).map(([key, code]) => (
                        <div
                          key={key}
                          className="p-3 rounded-lg border bg-doc-surface border-doc-border"
                        >
                          <button
                            className="w-full text-left font-medium text-doc-text"
                            onClick={() => setOpenExample(openExample === key ? null : key)}
                          >
                            {key}
                          </button>
                          {openExample === key && (
                            <div className="mt-2 relative">
                              <pre className="overflow-auto max-h-48 p-2 bg-doc-hover rounded text-sm font-mono whitespace-pre-wrap">
                                {code}
                              </pre>
                              <button
                                className="absolute top-1 right-1 bg-doc-accent text-white px-2 py-1 rounded text-xs"
                                onClick={() => {
                                  navigator.clipboard.writeText(code);
                                }}
                              >
                                Copy
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
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
          {/* Main content area with JDoodle embed */}
          <main className="flex-1 p-6 overflow-auto">
            <div data-pym-src="https://www.jdoodle.com/embed/v1/383bf936da7f82d1" style={{ width: "100%", height: "600px" }}></div>
          </main>
        </div>
      </div>
    </div>
  );
}
