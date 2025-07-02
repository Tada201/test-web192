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
  ExternalLink,
  RefreshCw,
  Save,
  FileText,
  Award,
  Clock,
  Users,
  TrendingUp,
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
  const [savedCode, setSavedCode] = useState<Record<string, string>>({});
  const [activeAssignment, setActiveAssignment] = useState<number | null>(null);

  // Load saved progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('assignment-progress');
    if (savedProgress) {
      try {
        const progress = JSON.parse(savedProgress);
        setCompletedAssignments(new Set(progress.completed || []));
        setSavedCode(progress.savedCode || {});
        setActiveAssignment(progress.activeAssignment || null);
      } catch (e) {
        console.error('Failed to load saved progress:', e);
      }
    }
  }, []);

  // Save progress to localStorage
  const saveProgress = () => {
    const progress = {
      completed: Array.from(completedAssignments),
      savedCode,
      activeAssignment,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('assignment-progress', JSON.stringify(progress));
  };

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
    setLearningSteps([
      {
        id: "java-basics",
        title: "Java Basics",
        description: "Learn fundamental Java syntax and concepts"
      },
      {
        id: "oop-concepts",
        title: "OOP Concepts",
        description: "Master object-oriented programming principles"
      },
      {
        id: "advanced-topics",
        title: "Advanced Topics",
        description: "Explore advanced Java features and best practices"
      }
    ]);
    setAssignments([
      "Write a loop to print numbers 1 to 10",
      "Create a class Car with properties and methods",
      "Implement a method to reverse a string",
      "Write a program to check if a number is prime",
      "Create a BankAccount class with deposit and withdraw methods",
      "Implement a simple calculator with basic operations",
      "Create a Student management system",
      "Write a program to sort an array of integers",
      "Implement inheritance with Animal and Dog classes",
      "Create an interface for geometric shapes",
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

  const handleSaveCode = () => {
    if (activeAssignment !== null) {
      const newSavedCode = { ...savedCode, [activeAssignment]: currentCode };
      setSavedCode(newSavedCode);
      saveProgress();
    }
  };

  const handleLoadCode = (assignmentIndex: number) => {
    if (savedCode[assignmentIndex]) {
      setCurrentCode(savedCode[assignmentIndex]);
      setActiveAssignment(assignmentIndex);
    }
  };

  const handleExampleChange = (exampleKey: string) => {
    setSelectedExample(exampleKey);
    setCurrentCode(examples[exampleKey] || "");
    setOutput("");
  };

  const handleAssignmentSelect = (index: number) => {
    setActiveAssignment(index);
    if (savedCode[index]) {
      setCurrentCode(savedCode[index]);
    } else {
      setCurrentCode("");
    }
    setOutput("");
  };

  const markAssignmentComplete = (index: number) => {
    const newCompleted = new Set(completedAssignments);
    if (newCompleted.has(index)) {
      newCompleted.delete(index);
    } else {
      newCompleted.add(index);
    }
    setCompletedAssignments(newCompleted);
    saveProgress();
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
      () => code.includes("class Car"), // Car class
      () => code.includes("reverse") || code.includes("charAt"), // String reverse
      () => code.includes("prime") || (code.includes("for") && code.includes("if")), // Prime check
      () => code.includes("class BankAccount"), // BankAccount class
      () => code.includes("calculator") || (code.includes("+") && code.includes("-")), // Calculator
      () => code.includes("class Student"), // Student class
      () => code.includes("sort") || code.includes("bubble"), // Sorting
      () => code.includes("extends") && code.includes("Animal"), // Inheritance
      () => code.includes("interface") && code.includes("Shape"), // Interface
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
    completedAssignments.has(index)
  ).length;

  const progressPercentage = learningSteps.length > 0 ? (codeCompletionCount / learningSteps.length) * 100 : 0;
  const assignmentProgress = assignments.length > 0 ? (assignmentCompletionCount / assignments.length) * 100 : 0;

  const getDifficultyLevel = (index: number): "beginner" | "intermediate" | "advanced" => {
    if (index < 3) return "beginner";
    if (index < 7) return "intermediate";
    return "advanced";
  };

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "beginner": return "text-green-500 bg-green-100 dark:bg-green-900";
      case "intermediate": return "text-yellow-500 bg-yellow-100 dark:bg-yellow-900";
      case "advanced": return "text-red-500 bg-red-100 dark:bg-red-900";
      default: return "text-gray-500 bg-gray-100 dark:bg-gray-900";
    }
  };

  return (
    <div className="min-h-screen bg-doc-bg text-doc-text">
      {/* Header with stats */}
      <div className="border-b border-doc-border bg-doc-surface/50 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-doc-text font-orbitron">Java Programming Assignments</h1>
              <p className="text-doc-text-muted">Practice your Java skills with interactive coding exercises</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 px-3 py-2 bg-doc-hover rounded-lg">
                <Award className="w-4 h-4 text-doc-accent" />
                <span className="text-sm font-medium">{assignmentCompletionCount}/{assignments.length} Completed</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-doc-hover rounded-lg">
                <Clock className="w-4 h-4 text-doc-accent" />
                <span className="text-sm font-medium">Progress: {Math.round(assignmentProgress)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-8rem)] overflow-hidden">
        {/* Enhanced Sidebar */}
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
                <h2 className="text-lg font-semibold text-doc-text font-orbitron">
                  Learning Hub
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
                <TabsList className="grid w-full grid-cols-3 bg-doc-hover mb-4">
                  <TabsTrigger value="assignments" className="text-xs">
                    <Target size={16} className="mr-1" />
                    Tasks
                  </TabsTrigger>
                  <TabsTrigger value="examples" className="text-xs">
                    <Code size={16} className="mr-1" />
                    Examples
                  </TabsTrigger>
                  <TabsTrigger value="progress" className="text-xs">
                    <TrendingUp size={16} className="mr-1" />
                    Progress
                  </TabsTrigger>
                </TabsList>

                <TabsContent
                  value="assignments"
                  className="flex-1 overflow-auto"
                >
                  <div className="space-y-4 pr-2">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-doc-text">
                          Programming Assignments
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {assignmentCompletionCount}/{assignments.length}
                        </Badge>
                      </div>
                      <Progress value={assignmentProgress} className="h-2 mb-4" />
                    </div>

                    <div className="space-y-2 overflow-y-auto custom-scrollbar">
                      {assignments.map((assignment, index) => {
                        const isCompleted = completedAssignments.has(index);
                        const isActive = activeAssignment === index;
                        const hasSavedCode = savedCode[index];
                        const difficulty = getDifficultyLevel(index);
                        
                        return (
                          <Card
                            key={index}
                            className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                              isActive ? "ring-2 ring-doc-accent" : ""
                            } ${
                              isCompleted
                                ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                                : "bg-doc-surface border-doc-border hover:bg-doc-hover"
                            }`}
                            onClick={() => handleAssignmentSelect(index)}
                          >
                            <CardContent className="p-3">
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center space-x-2">
                                  <span className="text-xs font-medium text-doc-accent">
                                    #{index + 1}
                                  </span>
                                  <Badge 
                                    variant="outline" 
                                    className={`text-xs ${getDifficultyColor(difficulty)}`}
                                  >
                                    {difficulty}
                                  </Badge>
                                </div>
                                <div className="flex items-center space-x-1">
                                  {hasSavedCode && (
                                    <Save size={12} className="text-doc-accent" title="Has saved code" />
                                  )}
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      markAssignmentComplete(index);
                                    }}
                                    className="hover:scale-110 transition-transform"
                                  >
                                    {isCompleted ? (
                                      <CheckCircle
                                        size={16}
                                        className="text-green-500"
                                      />
                                    ) : (
                                      <Circle
                                        size={16}
                                        className="text-doc-text-muted hover:text-doc-accent"
                                      />
                                    )}
                                  </button>
                                </div>
                              </div>
                              <p className="text-sm text-doc-text leading-relaxed">
                                {assignment}
                              </p>
                              {isCompleted && (
                                <div className="mt-2 flex items-center text-xs text-green-600 dark:text-green-400">
                                  <CheckCircle size={12} className="mr-1" />
                                  Completed
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent
                  value="examples"
                  className="flex-1 overflow-auto"
                >
                  <div className="space-y-4 pr-2">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-doc-text">
                          Code Examples
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {Object.keys(examples).length}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {Object.entries(examples).map(([key, code]) => (
                        <Card
                          key={key}
                          className="cursor-pointer hover:shadow-md transition-all duration-200 bg-doc-surface border-doc-border hover:bg-doc-hover"
                        >
                          <CardContent className="p-3">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-doc-text">{key}</h4>
                              <div className="flex items-center space-x-1">
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleExampleChange(key);
                                  }}
                                  className="h-6 px-2 text-xs"
                                >
                                  <ExternalLink size={12} className="mr-1" />
                                  Load
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenExample(openExample === key ? null : key);
                                  }}
                                  className="h-6 px-2 text-xs"
                                >
                                  {openExample === key ? (
                                    <ChevronDown size={12} />
                                  ) : (
                                    <ChevronRight size={12} />
                                  )}
                                </Button>
                              </div>
                            </div>
                            {openExample === key && (
                              <div className="mt-2">
                                <pre className="overflow-auto max-h-32 p-2 bg-doc-bg rounded text-xs font-mono whitespace-pre-wrap text-doc-text-muted">
                                  {code.substring(0, 200)}...
                                </pre>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent
                  value="progress"
                  className="flex-1 overflow-auto"
                >
                  <div className="space-y-4 pr-2">
                    <div className="grid grid-cols-2 gap-3">
                      <Card className="bg-doc-surface border-doc-border">
                        <CardContent className="p-3 text-center">
                          <div className="text-2xl font-bold text-doc-accent">{assignmentCompletionCount}</div>
                          <div className="text-xs text-doc-text-muted">Completed</div>
                        </CardContent>
                      </Card>
                      <Card className="bg-doc-surface border-doc-border">
                        <CardContent className="p-3 text-center">
                          <div className="text-2xl font-bold text-doc-accent">{assignments.length - assignmentCompletionCount}</div>
                          <div className="text-xs text-doc-text-muted">Remaining</div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-doc-text mb-2">Overall Progress</h3>
                      <Progress value={assignmentProgress} className="h-3" />
                      <div className="text-xs text-doc-text-muted mt-1">
                        {Math.round(assignmentProgress)}% Complete
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-doc-text mb-2">Difficulty Breakdown</h3>
                      <div className="space-y-2">
                        {["beginner", "intermediate", "advanced"].map((level) => {
                          const levelAssignments = assignments.filter((_, i) => getDifficultyLevel(i) === level);
                          const levelCompleted = levelAssignments.filter((_, i) => {
                            const originalIndex = assignments.findIndex(a => a === levelAssignments[i]);
                            return completedAssignments.has(originalIndex);
                          }).length;
                          const levelProgress = levelAssignments.length > 0 ? (levelCompleted / levelAssignments.length) * 100 : 0;
                          
                          return (
                            <div key={level} className="space-y-1">
                              <div className="flex justify-between text-xs">
                                <span className="capitalize text-doc-text">{level}</span>
                                <span className="text-doc-text-muted">{levelCompleted}/{levelAssignments.length}</span>
                              </div>
                              <Progress value={levelProgress} className="h-2" />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>

        {/* Enhanced Main Content */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Toolbar */}
          <div className="border-b border-doc-border bg-doc-surface/50 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {activeAssignment !== null && (
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      Assignment #{activeAssignment + 1}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getDifficultyColor(getDifficultyLevel(activeAssignment))}`}
                    >
                      {getDifficultyLevel(activeAssignment)}
                    </Badge>
                  </div>
                )}
                <div className="text-sm text-doc-text-muted">
                  {activeAssignment !== null 
                    ? assignments[activeAssignment]
                    : "Select an assignment to get started"
                  }
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {activeAssignment !== null && (
                  <>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleSaveCode}
                      disabled={!currentCode.trim()}
                      className="text-xs"
                    >
                      <Save size={14} className="mr-1" />
                      Save
                    </Button>
                    {savedCode[activeAssignment] && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleLoadCode(activeAssignment)}
                        className="text-xs"
                      >
                        <RefreshCw size={14} className="mr-1" />
                        Load Saved
                      </Button>
                    )}
                  </>
                )}
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleClearCode}
                  disabled={!currentCode.trim()}
                  className="text-xs"
                >
                  <Square size={14} className="mr-1" />
                  Clear
                </Button>
              </div>
            </div>
          </div>

          {/* Main content area with JDoodle embed */}
          <main className="flex-1 p-6 overflow-auto">
            {activeAssignment !== null ? (
              <div className="space-y-4">
                <InfoBox type="info" title="Assignment Instructions">
                  <p className="mb-2"><strong>Task:</strong> {assignments[activeAssignment]}</p>
                  <p className="text-sm">
                    Use the embedded code editor below to write your Java solution. 
                    You can run your code directly in the browser and see the output.
                  </p>
                </InfoBox>
                
                <div 
                  data-pym-src="https://www.jdoodle.com/embed/v1/383bf936da7f82d1" 
                  style={{ width: "100%", height: "600px", border: "1px solid hsl(var(--doc-border))", borderRadius: "8px" }}
                ></div>
                
                {completedAssignments.has(activeAssignment) && (
                  <div className="mt-4">
                    <InfoBox type="tip" title="Assignment Completed!">
                      Great job! You've marked this assignment as complete. 
                      You can continue to the next assignment or review your solution.
                    </InfoBox>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <Card className="max-w-md text-center bg-doc-surface border-doc-border">
                  <CardContent className="p-8">
                    <Code size={48} className="mx-auto mb-4 text-doc-accent" />
                    <h3 className="text-lg font-semibold text-doc-text mb-2">
                      Ready to Start Coding?
                    </h3>
                    <p className="text-doc-text-muted mb-4">
                      Select an assignment from the sidebar to begin practicing your Java programming skills.
                    </p>
                    <Button
                      onClick={() => handleAssignmentSelect(0)}
                      className="w-full"
                    >
                      Start First Assignment
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}