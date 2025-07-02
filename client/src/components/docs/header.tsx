import { useState } from "react";
import { Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { EnhancedSearchModal } from "../EnhancedSearchModal";
import { SettingsMenu } from "../SettingsMenu";

interface HeaderProps {
  onMobileMenuToggle: () => void;
}

export function Header({ onMobileMenuToggle }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <EnhancedSearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
      <SettingsMenu 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
    <header className="sticky top-0 z-50 bg-doc-bg/95 backdrop-blur-sm border-b border-doc-border">
      <div className="flex items-center justify-between px-4 h-16 max-w-none">
        {/* Logo and Title */}
        <div className="flex items-center h-full" style={{ minWidth: 80 }}>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden p-2 hover:bg-doc-hover"
            onClick={onMobileMenuToggle}
          >
            <i className="fas fa-bars text-doc-text"></i>
          </Button>
          <div className="flex items-center justify-center h-full w-16">
            <img src="/media/logo.webp" alt="PRO192 Logo" className="object-contain h-12 w-12 mx-auto" style={{ marginTop: 2 }} />
          </div>
        </div>
        <span className="font-semibold text-lg text-doc-text ml-2">PRO192 - Object-Oriented Programming</span>

        {/* Enhanced Search Bar */}
        <div className="hidden md:flex flex-1 max-w-lg mx-8">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-doc-text-muted hover:text-doc-text bg-doc-hover hover:bg-doc-border rounded-md border border-doc-border transition-colors"
          >
            <Search size={16} />
            <span>Search docs...</span>
            <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2 hover:bg-doc-hover"
            onClick={() => setIsSearchOpen(true)}
          >
            <i className="fas fa-search text-doc-text"></i>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="p-2 hover:bg-doc-hover"
            asChild
          >
            <a href="https://github.com/myproject/myproject" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-doc-text"></i>
            </a>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="p-2 hover:bg-doc-hover"
            asChild
          >
            <a href="https://discord.gg/myproject" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-discord text-doc-text"></i>
            </a>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="p-2 hover:bg-doc-hover"
            asChild
          >
            <a href="https://twitter.com/myproject" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-doc-text"></i>
            </a>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="p-2 hover:bg-doc-hover"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} text-doc-text`}></i>
          </Button>
          {/* Settings Button */}
          <Button
            variant="ghost"
            size="sm"
            className="p-2 hover:bg-doc-hover"
            onClick={() => setIsSettingsOpen(true)}
            title="Settings"
          >
            <Settings size={20} className="text-doc-text" />
          </Button>
        </div>
      </div>
    </header>
    </>
  );
}
