import { CodeBlock } from "@/components/content/CodeBlock";
import { InfoBox } from "@/components/content/InfoBox";
import { ConceptCard } from "@/components/content/ConceptCard";
import { InteractiveDemo } from "@/components/content/InteractiveDemo";
import { ProgressTracker } from "@/components/content/ProgressTracker";

const studentClassCode = `public class Student {
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
}`;

const mainClassCode = `public class StudentDemo {
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
        
        // Try invalid GPA
        alice.setGpa(5.0); // This will show an error message
    }
}`;

const learningSteps = [
  {
    id: "understand-encapsulation",
    title: "Understand Encapsulation",
    description: "Learn why we use private fields and public methods to control access to data."
  },
  {
    id: "implement-constructors",
    title: "Implement Constructors",
    description: "Create constructors to properly initialize object state when creating instances."
  },
  {
    id: "create-getters-setters",
    title: "Create Getters and Setters",
    description: "Implement accessor and mutator methods with proper validation."
  },
  {
    id: "add-business-logic",
    title: "Add Business Logic",
    description: "Implement methods that perform meaningful operations on the object's data."
  },
  {
    id: "test-implementation",
    title: "Test Your Implementation",
    description: "Create objects and test all methods to verify correct functionality."
  }
];

export default function JavaOOPExample() {
  return (
    <div className="min-h-screen bg-doc-bg">
      <div className="max-w-4xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-doc-text mb-4">
            Object-Oriented Programming: Student Class Example
          </h1>
          <p className="text-doc-text-muted leading-relaxed">
            This comprehensive example demonstrates key OOP concepts using a practical Student class.
            You'll learn encapsulation, constructors, methods, and object instantiation through 
            interactive examples and hands-on coding.
          </p>
        </div>

        {/* Learning Progress Tracker */}
        <ProgressTracker
          title="OOP Fundamentals Learning Path"
          steps={learningSteps}
        />

        {/* Encapsulation Concept */}
        <ConceptCard 
          title="Encapsulation in Action" 
          icon="fas fa-shield-alt"
          difficulty="beginner"
        >
          <p className="mb-3">
            Our Student class demonstrates encapsulation by keeping data fields private 
            and providing controlled access through public methods. This prevents direct 
            manipulation of critical data and ensures data integrity.
          </p>
          <p>
            Notice how we validate the GPA in the setter method to ensure it stays 
            within the valid range of 0.0 to 4.0.
          </p>
        </ConceptCard>

        {/* Important Note */}
        <InfoBox type="tip" title="Best Practice">
          Always make your class fields private and provide public getter/setter methods 
          only when necessary. This is fundamental to proper encapsulation and maintaining 
          control over your object's state.
        </InfoBox>

        {/* Student Class Implementation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-doc-text mb-4">Complete Student Class</h2>
          
          <CodeBlock 
            title="Student.java - Complete Implementation"
            language="java"
            showLineNumbers={true}
          >
            {studentClassCode}
          </CodeBlock>
        </section>

        {/* Key Concepts Breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-doc-text mb-6">Key Concepts Explained</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <ConceptCard 
              title="Private Fields" 
              icon="fas fa-lock"
              difficulty="beginner"
            >
              Fields like `name`, `studentId`, and `gpa` are declared private to prevent 
              direct access from outside the class. This protects data integrity.
            </ConceptCard>

            <ConceptCard 
              title="Constructor" 
              icon="fas fa-hammer"
              difficulty="beginner"
            >
              The constructor initializes new Student objects with required data. 
              Notice how we set a default GPA value during construction.
            </ConceptCard>

            <ConceptCard 
              title="Getter Methods" 
              icon="fas fa-eye"
              difficulty="beginner"
            >
              These methods provide read-only access to private fields. They follow 
              the naming convention `getFieldName()`.
            </ConceptCard>

            <ConceptCard 
              title="Setter Methods" 
              icon="fas fa-edit"
              difficulty="intermediate"
            >
              Setters allow controlled modification of private fields. The `setGpa()` 
              method includes validation to ensure data integrity.
            </ConceptCard>
          </div>
        </section>

        {/* Interactive Demo */}
        <InteractiveDemo
          title="Testing the Student Class"
          description="See how to create and use Student objects in a real program"
          concept="Object Instantiation"
          initialCode={mainClassCode}
          expectedOutput={`Student Information:
Name: Alice Johnson
ID: 12345
Major: Computer Science
GPA: 3.80
Academic Standing: Dean's List

Student Information:
Name: Bob Smith
ID: 12346
Major: Mathematics
GPA: 2.90
Academic Standing: Satisfactory
Invalid GPA. Must be between 0.0 and 4.0`}
        >
          <div className="space-y-4">
            <p>
              This example demonstrates several important concepts:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><strong>Object Creation:</strong> Using the `new` keyword with the constructor</li>
              <li><strong>Method Calls:</strong> Calling both setter and getter methods</li>
              <li><strong>Data Validation:</strong> The invalid GPA attempt shows our validation working</li>
              <li><strong>Business Logic:</strong> The `getAcademicStanding()` method demonstrates meaningful operations</li>
            </ul>
          </div>
        </InteractiveDemo>

        {/* Warning about Common Mistakes */}
        <InfoBox type="warning" title="Common Beginner Mistakes">
          <ul className="list-disc list-inside space-y-1">
            <li>Forgetting to make fields private (breaks encapsulation)</li>
            <li>Not validating input in setter methods</li>
            <li>Creating getters/setters for every field (sometimes unnecessary)</li>
            <li>Not following Java naming conventions</li>
          </ul>
        </InfoBox>

        {/* Advanced Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-doc-text mb-4">Next Steps</h2>
          
          <ConceptCard 
            title="Inheritance" 
            icon="fas fa-sitemap"
            difficulty="intermediate"
          >
            Once you master basic classes, you can learn inheritance to create 
            specialized classes like `GraduateStudent` that extends `Student` 
            with additional properties and methods.
          </ConceptCard>

          <InfoBox type="info" title="What's Next?">
            Practice creating your own classes! Try building a `Course` class that 
            can store multiple students, or a `Professor` class with different 
            properties and methods.
          </InfoBox>
        </section>

        {/* Exercise */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-doc-text mb-4">Practice Exercise</h2>
          
          <InfoBox type="note" title="Challenge Yourself">
            Create a `Course` class that can:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Store course name, code, and credit hours</li>
              <li>Maintain a list of enrolled students</li>
              <li>Add and remove students</li>
              <li>Calculate the average GPA of enrolled students</li>
            </ul>
          </InfoBox>
        </section>
      </div>
    </div>
  );
}