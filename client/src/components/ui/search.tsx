import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

interface SearchProps {
  className?: string;
  placeholder?: string;
}

export function Search({ className = "", placeholder = "Search docs..." }: SearchProps) {
  const [query, setQuery] = useState("");
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[placeholder*="Search"]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
          setIsHighlighted(true);
          setTimeout(() => setIsHighlighted(false), 300);
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    // TODO: Implement actual search functionality
    console.log('Search query:', value);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <i className="fas fa-search text-doc-text-muted"></i>
      </div>
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className={`w-full pl-10 pr-16 py-2 bg-doc-surface border border-doc-border rounded-lg text-doc-text placeholder-doc-text-muted focus:outline-none focus:ring-2 focus:ring-doc-accent focus:border-transparent transition-all ${
          isHighlighted ? 'search-highlight' : ''
        }`}
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
        <kbd className="hidden sm:inline-block px-2 py-1 text-xs text-doc-text-muted bg-doc-hover border border-doc-border rounded">
          ⌘K
        </kbd>
      </div>
    </div>
  );
}
