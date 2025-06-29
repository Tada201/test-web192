import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { BookOpen, Code, Download, ArrowRight, Users, Clock, Trophy, Star, CheckCircle, Play } from "lucide-react";
import { useSettings } from "@/contexts/SettingsContext";

export default function HomePage() {
  const { settings } = useSettings();

  const courseSections = [
    {
      id: "welcome",
      title: "Welcome",
      description: "Introduction to the PRO192 course, its objectives, and learning outcomes.",
      icon: <BookOpen className="w-6 h-6" />,
      href: "/docs#welcome",
      color: "from-blue-500 to-blue-600",
      darkColor: "from-neon-cyan to-blue-400"
    },
    {
      id: "introduction",
      title: "Course Introduction", 
      description: "An introduction to the course structure, objectives, and the foundational concepts of object-oriented programming in Java.",
      icon: <Users className="w-6 h-6" />,
      href: "/docs#introduction",
      color: "from-green-500 to-green-600",
      darkColor: "from-neon-green to-green-400"
    },
    {
      id: "foundations",
      title: "Foundations",
      description: "Java basics: JVM, platform, data types, variables, arrays, operators, and logic constructs.",
      icon: <Code className="w-6 h-6" />,
      href: "/docs#foundations",
      color: "from-purple-500 to-purple-600",
      darkColor: "from-neon-purple to-purple-400"
    },
    {
      id: "encapsulation",
      title: "Encapsulation",
      description: "Learn about classes, objects, constructors, access modifiers, and data hiding principles.",
      icon: <Trophy className="w-6 h-6" />,
      href: "/docs#encapsulation",
      color: "from-orange-500 to-orange-600",
      darkColor: "from-neon-orange to-orange-400"
    },
    {
      id: "inheritance",
      title: "Inheritance", 
      description: "Understanding inheritance hierarchies, method overriding, and the super keyword.",
      icon: <ArrowRight className="w-6 h-6" />,
      href: "/docs#inheritance",
      color: "from-red-500 to-red-600",
      darkColor: "from-neon-magenta to-red-400"
    },
    {
      id: "polymorphism",
      title: "Polymorphism",
      description: "Method overloading, dynamic binding, abstract classes, and interfaces.",
      icon: <Star className="w-6 h-6" />,
      href: "/docs#polymorphism",
      color: "from-indigo-500 to-indigo-600",
      darkColor: "from-neon-cyan to-indigo-400"
    }
  ];

  const stats = [
    { label: "Course Modules", value: "12", icon: <BookOpen className="w-5 h-5" /> },
    { label: "Practice Projects", value: "8", icon: <Code className="w-5 h-5" /> },
    { label: "Study Hours", value: "45", icon: <Clock className="w-5 h-5" /> },
    { label: "Assignments", value: "15", icon: <Trophy className="w-5 h-5" /> }
  ];

  const features = [
    {
      title: "Interactive Learning",
      description: "Hands-on coding exercises with real-time feedback and execution",
      icon: <Play className="w-6 h-6" />
    },
    {
      title: "Comprehensive Documentation",
      description: "Detailed explanations with examples and best practices",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Progress Tracking",
      description: "Monitor your learning journey with built-in progress indicators",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-doc-bg text-doc-text transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern for Dark Mode */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-doc-primary/20 to-doc-accent/20"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          {/* Course Badge */}
          <Badge 
            variant="secondary" 
            className="mb-6 text-sm px-6 py-3 glass neon-glow border border-doc-border bg-doc-surface/80 text-doc-text hover:bg-doc-hover transition-all duration-300"
          >
            <Code className="w-4 h-4 mr-2" />
            Object-Oriented Programming
          </Badge>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-doc-text mb-6 font-orbitron leading-tight">
            <span className="bg-gradient-to-r from-doc-primary to-doc-accent bg-clip-text text-transparent">
              PRO192
            </span>
            <br />
            <span className="text-doc-text">
              Object Oriented Programming using Java
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-doc-text-muted mb-10 max-w-4xl mx-auto leading-relaxed">
            A comprehensive course exploring object-oriented programming concepts, design principles, and practical implementation in Java.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/docs">
              <Button 
                size="lg" 
                className="bg-doc-primary hover:bg-doc-primary/90 text-white px-8 py-4 text-lg neon-glow border-0 transition-all duration-300 hover:scale-105"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Course Sections
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg glass border-doc-border bg-doc-surface/50 text-doc-text hover:bg-doc-hover neon-glow transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Syllabus
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center w-16 h-16 bg-doc-surface border border-doc-border rounded-xl mx-auto mb-4 glass neon-glow group-hover:scale-110 transition-all duration-300">
                  <div className="text-doc-primary">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-doc-text font-orbitron">{stat.value}</div>
                <div className="text-sm text-doc-text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-doc-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-doc-text mb-4 font-orbitron">
              Why Choose This Course?
            </h2>
            <p className="text-lg text-doc-text-muted max-w-2xl mx-auto">
              Experience modern learning with cutting-edge tools and methodologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass border-doc-border bg-doc-surface/50 hover:bg-doc-hover/50 transition-all duration-300 neon-glow group hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-doc-primary/20 rounded-xl mx-auto mb-4 group-hover:bg-doc-primary/30 transition-colors duration-300">
                    <div className="text-doc-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-doc-text font-orbitron">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-doc-text-muted leading-relaxed text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-doc-text mb-4 font-orbitron">
              Course Sections
            </h2>
            <p className="text-lg text-doc-text-muted">
              Explore the comprehensive curriculum designed to master Java OOP concepts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseSections.map((section) => (
              <Link key={section.id} href={section.href}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group glass border-doc-border bg-doc-surface/50 hover:bg-doc-hover/50 neon-glow hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${settings.theme === 'dark' ? section.darkColor : section.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {section.icon}
                      </div>
                      <CardTitle className="text-lg font-semibold text-doc-text group-hover:text-doc-primary transition-colors duration-300 font-orbitron">
                        {section.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-doc-text-muted leading-relaxed mb-4">
                      {section.description}
                    </CardDescription>
                    <div className="flex items-center text-sm text-doc-primary font-medium group-hover:text-doc-accent transition-colors duration-300">
                      View Content
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-doc-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-doc-text mb-8 font-orbitron">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-doc-text-muted mb-8 max-w-2xl mx-auto">
            Begin your journey into object-oriented programming with our comprehensive Java course materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/docs">
              <Button 
                size="lg" 
                className="bg-doc-accent hover:bg-doc-accent/90 text-white px-8 py-4 text-lg neon-glow transition-all duration-300 hover:scale-105"
              >
                Start Learning Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/assignments">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg glass border-doc-border bg-doc-surface/50 text-doc-text hover:bg-doc-hover neon-glow transition-all duration-300 hover:scale-105"
              >
                Try Interactive Assignments
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}