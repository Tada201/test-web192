import { useState } from "react";
import { Search } from "@/components/ui/search";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onMobileMenuToggle: () => void;
}

export function Header({ onMobileMenuToggle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-doc-bg/95 backdrop-blur-sm border-b border-doc-border">
      <div className="flex items-center justify-between px-4 h-16 max-w-none">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden p-2 hover:bg-doc-hover"
            onClick={onMobileMenuToggle}
          >
            <i className="fas fa-bars text-doc-text"></i>
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-doc-primary rounded-lg flex items-center justify-center">
              <i className="fas fa-book text-white text-sm"></i>
            </div>
            <span className="font-semibold text-lg text-doc-text">Documentation for MyProject</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-lg mx-8">
          <Search className="w-full" />
        </div>

        {/* Social Links and Theme Toggle */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2 hover:bg-doc-hover"
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
          >
            <i className="fas fa-sun text-doc-text"></i>
          </Button>
        </div>
      </div>
    </header>
  );
}
