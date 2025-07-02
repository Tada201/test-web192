import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu, X, Search, Settings, Home, BookOpen, Code, Github, Twitter, Sun, Moon } from "lucide-react";
import { EnhancedSearchModal } from "./EnhancedSearchModal";
import { SettingsMenu } from "./SettingsMenu";
import { useSettings } from "../contexts/SettingsContext";
import { uiStrings } from '../data/uiStrings';

// Discord icon fallback (SVG)
const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M20.317 4.369A19.791 19.791 0 0016.885 3.2a.077.077 0 00-.082.038c-.357.63-.755 1.453-1.037 2.104a18.524 18.524 0 00-5.49 0 12.683 12.683 0 00-1.05-2.104.077.077 0 00-.082-.038c-1.432.326-2.814.82-4.105 1.569a.07.07 0 00-.032.027C.533 9.045-.32 13.579.099 18.057a.082.082 0 00.031.056c1.733 1.27 3.415 2.048 5.077 2.568a.077.077 0 00.084-.027c.39-.535.739-1.1 1.034-1.691a.076.076 0 00-.041-.104c-.552-.21-1.077-.465-1.588-.755a.077.077 0 01-.008-.127c.107-.08.214-.163.316-.246a.074.074 0 01.077-.01c3.33 1.522 6.94 1.522 10.228 0a.073.073 0 01.078.009c.102.083.209.166.316.246a.077.077 0 01-.006.127c-.511.29-1.036.545-1.588.755a.076.076 0 00-.04.105c.3.591.648 1.156 1.033 1.69a.076.076 0 00.084.028c1.663-.52 3.345-1.298 5.078-2.568a.077.077 0 00.03-.055c.5-5.177-.838-9.673-3.548-13.661a.061.061 0 00-.03-.028zM8.02 15.331c-1.006 0-1.823-.92-1.823-2.05 0-1.13.807-2.05 1.823-2.05 1.025 0 1.832.93 1.823 2.05 0 1.13-.807 2.05-1.823 2.05zm7.974 0c-1.006 0-1.823-.92-1.823-2.05 0-1.13.807-2.05 1.823-2.05 1.025 0 1.832.93 1.823 2.05 0 1.13-.798 2.05-1.823 2.05z" fill="currentColor"/>
  </svg>
);

interface HeaderProps {}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { settings, setTheme } = useSettings();
  const theme = settings.theme;
  const lang = settings.language as 'en' | 'vi';
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const navigation = [
    { name: uiStrings[lang].home, href: "/", icon: <Home className="w-4 h-4" /> },
    { name: uiStrings[lang].documentation, href: "/docs", icon: <BookOpen className="w-4 h-4" /> },
    { name: uiStrings[lang].components, href: "/components", icon: <Code className="w-4 h-4" /> },
    { name: uiStrings[lang].assignments, href: "/assignments", icon: <Code className="w-4 h-4" /> },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b border-doc-border backdrop-blur-md ${theme === 'dark' ? 'glass-strong' : 'bg-[navy]'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between" style={{ marginLeft: '200px' }}>
            {/* Logo */}
            <div
              className="flex items-center fixed top-0 left-0 z-50 bg-transparent"
              style={{ width: '200px', height: '50px', marginLeft: 0 }}
            >
              <Link href="/">
                <div className="flex items-center justify-center overflow-hidden rounded-lg w-full h-full">
                  <img src="/media/logo.webp" alt="PRO192 Logo" className="object-contain w-full h-full" style={{ marginTop: '2px' }} />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center space-x-6 md:space-x-8 lg:space-x-12 xl:space-x-16 2xl:space-x-20">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant="ghost"
                    className="text-white hover:text-doc-accent neon-glow transition-all duration-300"
                  >
                    {item.icon}
                    <span className="ml-2 font-medium">{item.name}</span>
                  </Button>
                </Link>
              ))}
            </nav>

            {/* Right-aligned actions with margin from edge */}
            <div className="flex items-center" style={{ marginRight: '20px' }}>
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="text-white hover:text-doc-accent neon-glow"
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSettingsOpen(true)}
                className="text-white hover:text-doc-accent neon-glow ml-2"
              >
                <Settings className="w-4 h-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(true)}
                className="text-white hover:text-doc-accent neon-glow ml-2"
              >
                <Search className="w-4 h-4" />
                <span className="ml-2 hidden sm:inline">Search</span>
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden neon-glow ml-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-doc-border glass">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-doc-text-muted hover:text-doc-text neon-glow"
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
