import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  BookOpen,
  Code,
  Download,
  ArrowRight,
  Users,
  Clock,
  Trophy,
} from "lucide-react";

export default function HomePage() {
  const courseSections = [
    {
      id: "welcome",
      title: "Welcome",
      description:
        "Introduction to the PRO192 course, its objectives, and learning outcomes.",
      icon: <BookOpen className="w-6 h-6" />,
      href: "/docs#welcome",
      color: "bg-blue-500",
    },
    {
      id: "introduction",
      title: "Course Introduction",
      description:
        "An introduction to the course structure, objectives, and the foundational concepts of object-oriented programming in Java.",
      icon: <Users className="w-6 h-6" />,
      href: "/docs#introduction",
      color: "bg-green-500",
    },
    {
      id: "foundations",
      title: "Foundations",
      description:
        "Java basics: JVM, platform, data types, variables, arrays, operators, and logic constructs.",
      icon: <Code className="w-6 h-6" />,
      href: "/docs#foundations",
      color: "bg-purple-500",
    },
    {
      id: "encapsulation",
      title: "Encapsulation",
      description:
        "Learn about classes, objects, constructors, access modifiers, and data hiding principles.",
      icon: <Trophy className="w-6 h-6" />,
      href: "/docs#encapsulation",
      color: "bg-orange-500",
    },
    {
      id: "inheritance",
      title: "Inheritance",
      description:
        "Understanding inheritance hierarchies, method overriding, and the super keyword.",
      icon: <ArrowRight className="w-6 h-6" />,
      href: "/docs#inheritance",
      color: "bg-red-500",
    },
    {
      id: "polymorphism",
      title: "Polymorphism",
      description:
        "Method overloading, dynamic binding, abstract classes, and interfaces.",
      icon: <Clock className="w-6 h-6" />,
      href: "/docs#polymorphism",
      color: "bg-indigo-500",
    },
  ];

  const stats = [
    {
      label: "Course Modules",
      value: "12",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      label: "Practice Projects",
      value: "8",
      icon: <Code className="w-5 h-5" />,
    },
    { label: "Study Hours", value: "45", icon: <Clock className="w-5 h-5" /> },
    { label: "Assignments", value: "15", icon: <Trophy className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-doc-bg pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Course Badge */}
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
            <Code className="w-4 h-4 mr-2" />
            Object-Oriented Programming
          </Badge>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-doc-text mb-6">
            PRO192: Object Oriented Programming using Java
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-doc-text-muted mb-10 max-w-3xl mx-auto leading-relaxed">
            A comprehensive course exploring object-oriented programming
            concepts, design principles, and practical implementation in Java.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/docs">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Course Sections
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Download className="w-5 h-5 mr-2" />
              Download Syllabus
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-doc-surface rounded-lg mx-auto mb-3">
                  <div className="text-gray-600 dark:text-doc-text-muted">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-doc-text">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-doc-text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-doc-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-doc-text mb-4">
              Course Sections
            </h2>
            <p className="text-lg text-gray-600 dark:text-doc-text-muted">
              Explore the comprehensive curriculum designed to master Java OOP
              concepts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseSections.map((section) => (
              <Link key={section.id} href={section.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group border border-gray-200 dark:border-doc-border bg-white dark:bg-doc-bg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`p-2 rounded-lg ${section.color} text-white`}
                      >
                        {section.icon}
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900 dark:text-doc-text group-hover:text-blue-600 dark:group-hover:text-doc-accent transition-colors">
                        {section.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-doc-text-muted leading-relaxed">
                      {section.description}
                    </CardDescription>
                    <div className="flex items-center mt-4 text-sm text-blue-600 dark:text-doc-accent font-medium">
                      View Content
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-doc-text mb-8">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-gray-600 dark:text-doc-text-muted mb-8">
            Begin your journey into object-oriented programming with our
            comprehensive Java course materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/docs">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              >
                Start Learning Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/components">
              <Button variant="outline" size="lg" className="px-8 py-3">
                View Interactive Components
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
