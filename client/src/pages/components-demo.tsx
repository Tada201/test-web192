import { CodeBlock } from "@/components/content/CodeBlock";
import { InfoBox } from "@/components/content/InfoBox";
import { ConceptCard } from "@/components/content/ConceptCard";
import { InteractiveDemo } from "@/components/content/InteractiveDemo";
import { ProgressTracker } from "@/components/content/ProgressTracker";

const sampleJavaCode = `public class Student {
    private String name;
    private int age;
    private double gpa;

    public Student(String name, int age, double gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("GPA: " + gpa);
    }
}`;

const progressSteps = [
  {
    id: "understand-classes",
    title: "Understand Classes and Objects",
    description:
      "Learn the fundamental concepts of classes as blueprints and objects as instances.",
  },
  {
    id: "create-constructor",
    title: "Create Constructor Methods",
    description:
      "Implement constructors to initialize object state when creating instances.",
  },
  {
    id: "implement-methods",
    title: "Implement Instance Methods",
    description:
      "Add methods that operate on object data and provide functionality.",
  },
  {
    id: "test-class",
    title: "Test Your Class",
    description:
      "Create objects and test all methods to ensure proper functionality.",
  },
];

export default function ComponentsDemo() {
  return (
    <div className="min-h-[1494px] bg-doc-bg pt-16">
      <div className="max-w-4xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-doc-text mb-4">
            Custom React Components Demo
          </h1>
          <p className="text-doc-text-muted leading-relaxed">
            This page showcases all the custom React components available for
            creating enhanced Java course documentation. Each component is
            designed to make learning more interactive and engaging.
          </p>
        </div>

        {/* CodeBlock Component */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-doc-text mb-4">
            Code Block Component
          </h2>
          <p className="text-doc-text-muted mb-6">
            Interactive code blocks with syntax highlighting, line numbers, and
            copy functionality.
          </p>

          <CodeBlock
            title="Student.java"
            language="java"
            showLineNumbers={true}
          >
            {sampleJavaCode}
          </CodeBlock>
        </section>

        {/* InfoBox Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-doc-text mb-4">
            Info Box Components
          </h2>
          <p className="text-doc-text-muted mb-6">
            Colored information boxes for different types of content and alerts.
          </p>

          <InfoBox type="tip" title="Pro Tip">
            Always use meaningful variable names in your Java code. Instead of
            naming a variable 'x' or 'data', use descriptive names like
            'studentName' or 'courseGrade'.
          </InfoBox>

          <InfoBox type="warning" title="Common Mistake">
            Remember that Java is case-sensitive. 'Student' and 'student' are
            different identifiers. Follow Java naming conventions: classes start
            with uppercase, variables with lowercase.
          </InfoBox>

          <InfoBox type="info" title="Did You Know?">
            Java automatically provides a default constructor if you don't
            define one. However, if you create any constructor, Java won't
            provide the default one anymore.
          </InfoBox>

          <InfoBox type="danger" title="Critical Error">
            Never forget to initialize object references before using them, or
            you'll encounter a NullPointerException at runtime.
          </InfoBox>
        </section>

        {/* ConceptCard Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-doc-text mb-4">
            Concept Card Components
          </h2>
          <p className="text-doc-text-muted mb-6">
            Visual cards for explaining key programming concepts with difficulty
            indicators.
          </p>

          <ConceptCard
            title="Encapsulation"
            icon="fas fa-shield-alt"
            difficulty="beginner"
          >
            Encapsulation is the bundling of data and methods that operate on
            that data within a single unit (class). It restricts direct access
            to object components and prevents accidental modification of data by
            hiding internal implementation details.
          </ConceptCard>

          <ConceptCard
            title="Inheritance"
            icon="fas fa-sitemap"
            difficulty="intermediate"
          >
            Inheritance allows a class to inherit properties and methods from
            another class. The child class (subclass) can extend the
            functionality of the parent class (superclass) while reusing
            existing code, promoting code reusability and establishing
            hierarchical relationships.
          </ConceptCard>

          <ConceptCard
            title="Polymorphism"
            icon="fas fa-shapes"
            difficulty="advanced"
          >
            Polymorphism enables objects of different classes to be treated as
            objects of a common base class while maintaining their specific
            behaviors. It allows the same interface to be used for different
            underlying data types, achieved through method overriding and
            interfaces.
          </ConceptCard>
        </section>

        {/* InteractiveDemo Component */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-doc-text mb-4">
            Interactive Demo Component
          </h2>
          <p className="text-doc-text-muted mb-6">
            Expandable code demonstrations with explanations and expected
            outputs.
          </p>

          <InteractiveDemo
            title="Creating and Using Objects"
            description="Learn how to instantiate objects and call their methods"
            concept="Object Instantiation"
            initialCode={`public class Main {
    public static void main(String[] args) {
        // Create a new Student object
        Student john = new Student("John Doe", 20, 3.75);

        // Call the displayInfo method
        john.displayInfo();

        // Create another student
        Student jane = new Student("Jane Smith", 19, 3.92);
        jane.displayInfo();
    }
}`}
            expectedOutput={`Name: John Doe
Age: 20
GPA: 3.75
Name: Jane Smith
Age: 19
GPA: 3.92`}
          >
            <p>
              This example demonstrates how to create objects from the Student
              class and call their methods. Notice how each object maintains its
              own state (name, age, gpa) and can perform the same operations
              independently.
            </p>
          </InteractiveDemo>
        </section>

        {/* ProgressTracker Component */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-doc-text mb-4">
            Progress Tracker Component
          </h2>
          <p className="text-doc-text-muted mb-6">
            Interactive progress tracking for learning objectives with
            persistent state.
          </p>

          <ProgressTracker
            title="Object-Oriented Programming Basics"
            steps={progressSteps}
            onStepToggle={(stepId, completed) => {
              console.log(
                `Step ${stepId} ${completed ? "completed" : "uncompleted"}`,
              );
            }}
          />
        </section>

        {/* Usage Instructions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-doc-text mb-4">
            How to Use These Components
          </h2>

          <InfoBox type="info" title="Implementation Guide">
            All components are now available in your documentation pages. Import
            them from `@/components/content/` and use them in your MDX files or
            React pages to create engaging educational content.
          </InfoBox>

          <CodeBlock title="Example Import and Usage" language="typescript">
            {`import { CodeBlock } from "@/components/content/CodeBlock";
import { InfoBox } from "@/components/content/InfoBox";
import { ConceptCard } from "@/components/content/ConceptCard";

// Use in your component
<InfoBox type="tip" title="Quick Tip">
  Your helpful message here
</InfoBox>

<CodeBlock language="java" title="Example.java">
  {yourJavaCode}
</CodeBlock>`}
          </CodeBlock>
        </section>
      </div>
    </div>
  );
}
