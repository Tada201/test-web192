import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { BookOpen, Code, Download, ArrowRight, Users, Clock, Trophy, Star, CheckCircle, Play } from "lucide-react";
import { useSettings } from "@/contexts/SettingsContext";
import HeroSection from "../components/HeroSection";
import { uiStrings } from '../data/uiStrings';

export default function HomePage() {
  const { settings } = useSettings();
  const lang = settings.language as 'en' | 'vi';

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

  return (
    <div className="min-h-screen bg-doc-bg text-doc-text transition-colors duration-300">
      {/* Hero Section - restored to top of HomePage */}
      <div className="mt-16" />
      <HeroSection />
      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-doc-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* Why Choose This Course - floating box style */}
            <div className="rounded-lg border text-card-foreground shadow-sm glass border-doc-border bg-doc-surface/50 hover:bg-doc-hover/50 transition-all duration-300 neon-glow group hover:scale-105 max-w-xl mx-auto mb-8 px-6 py-4" style={{ zIndex: 30 }}>
              <h2 className="text-2xl md:text-3xl font-bold text-doc-text text-center">{uiStrings[lang].whyChoose}</h2>
              <p className="text-base md:text-lg text-doc-text-muted text-center mt-2">{uiStrings[lang].whyChooseDesc}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: uiStrings[lang].interactiveLearning,
                description: uiStrings[lang].interactiveLearningDesc,
                icon: <Play className="w-6 h-6" />
              },
              {
                title: uiStrings[lang].comprehensiveDocs,
                description: uiStrings[lang].comprehensiveDocsDesc,
                icon: <BookOpen className="w-6 h-6" />
              },
              {
                title: uiStrings[lang].progressTracking,
                description: uiStrings[lang].progressTrackingDesc,
                icon: <CheckCircle className="w-6 h-6" />
              }
            ].map((feature, index) => (
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
                  <CardDescription className="text-doc-text-muted mt-2">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* Course Sections - floating box style */}
            <div className="rounded-lg border text-card-foreground shadow-sm glass border-doc-border bg-doc-surface/50 hover:bg-doc-hover/50 transition-all duration-300 neon-glow group hover:scale-105 max-w-xl mx-auto mb-8 px-6 py-4" style={{ zIndex: 30 }}>
              <h2 className="text-2xl md:text-3xl font-bold text-doc-text text-center">Course Sections</h2>
              <p className="text-base md:text-lg text-doc-text-muted text-center mt-2">Explore the comprehensive curriculum designed to master Java OOP concepts</p>
            </div>
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
      <section className="relative z-50 w-full fixed top-0 left-0 bg-[navy] dark:bg-black/70 dark:rounded-lg dark:shadow-lg dark:border dark:border-white dark:outline dark:outline-1 dark:outline-white neon-glow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white dark:text-doc-text mb-8 font-orbitron" style={{ textShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px' }}>
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-white/80 dark:text-doc-text-muted mb-8 max-w-2xl mx-auto" style={{ textShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px' }}>
            Begin your journey into object-oriented programming with our comprehensive Java course materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/docs">
              <Button 
                size="lg" 
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:text-accent-foreground h-11 rounded-md px-8 py-4 text-lg glass border-doc-border bg-doc-surface/50 text-doc-text hover:bg-doc-hover neon-glow transition-all duration-300 hover:scale-105"
              >
                Start Learning Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/assignments">
              <Button 
                variant="outline" 
                size="lg" 
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:text-accent-foreground h-11 rounded-md px-8 py-4 text-lg glass border-doc-border bg-doc-surface/50 text-doc-text hover:bg-doc-hover neon-glow transition-all duration-300 hover:scale-105"
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