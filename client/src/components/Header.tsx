import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu, X, Search, Settings, Home, BookOpen, Code } from "lucide-react";
import { EnhancedSearchModal } from "./EnhancedSearchModal";
import { SettingsMenu } from "./SettingsMenu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    { name: "Documentation", href: "/docs", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Components", href: "/components", icon: <Code className="w-4 h-4" /> },
    { name: "Java OOP", href: "/java-oop", icon: <Code className="w-4 h-4" /> },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-doc-border bg-white/95 dark:bg-doc-bg/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-doc-bg/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900 dark:text-doc-text">
                    PRO192
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant="ghost"
                    className="text-gray-600 dark:text-doc-text-muted hover:text-gray-900 dark:hover:text-doc-text"
                  >
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </Button>
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-600 dark:text-doc-text-muted hover:text-gray-900 dark:hover:text-doc-text"
              >
                <Search className="w-4 h-4" />
                <span className="ml-2 hidden sm:inline">Search</span>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSettingsOpen(true)}
                className="text-gray-600 dark:text-doc-text-muted hover:text-gray-900 dark:hover:text-doc-text"
              >
                <Settings className="w-4 h-4" />
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-doc-border">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-gray-600 dark:text-doc-text-muted hover:text-gray-900 dark:hover:text-doc-text"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.icon}
                      <span className="ml-2">{item.name}</span>
                    </Button>
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <EnhancedSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <SettingsMenu
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </>
  );
}