import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { searchDocs, type SearchResult } from "@/lib/search";

interface SearchProps {
  className?: string;
  placeholder?: string;
}

export function Search({ className = "", placeholder = "Search docs..." }: SearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsHighlighted(true);
        setTimeout(() => setIsHighlighted(false), 300);
      }
      
      if (isOpen && results.length > 0) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % results.length);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex(prev => prev <= 0 ? results.length - 1 : prev - 1);
        } else if (e.key === 'Enter' && selectedIndex >= 0) {
          e.preventDefault();
          handleResultClick(results[selectedIndex]);
        } else if (e.key === 'Escape') {
          setIsOpen(false);
          setSelectedIndex(-1);
        }
      }
    }

    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, results, selectedIndex]);

  const handleSearch = (value: string) => {
    setQuery(value);
    
    if (value.trim().length >= 2) {
      const searchResults = searchDocs(value, 8);
      setResults(searchResults);
      setIsOpen(searchResults.length > 0);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
      setSelectedIndex(-1);
    }
  };

  const handleResultClick = (result: SearchResult) => {
    window.location.hash = result.url.replace('#', '');
    setIsOpen(false);
    setQuery("");
    setResults([]);
    inputRef.current?.blur();
  };

  const getResultIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'page': return 'fas fa-file-alt';
      case 'section': return 'fas fa-heading';
      case 'heading': return 'fas fa-hashtag';
      default: return 'fas fa-search';
    }
  };

  const highlightQuery = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? 
        <mark key={index} className="bg-yellow-200 dark:bg-yellow-800 text-current">{part}</mark> : 
        part
    );
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <i className="fas fa-search text-doc-text-muted"></i>
      </div>
      <Input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={() => query.trim().length >= 2 && results.length > 0 && setIsOpen(true)}
        className={`w-full pl-10 pr-16 py-2 bg-doc-surface border border-doc-border rounded-lg text-doc-text placeholder-doc-text-muted focus:outline-none focus:ring-2 focus:ring-doc-accent focus:border-transparent transition-all ${
          isHighlighted ? 'search-highlight' : ''
        }`}
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
        <kbd className="hidden sm:inline-block px-2 py-1 text-xs text-doc-text-muted bg-doc-hover border border-doc-border rounded">
          ⌘K
        </kbd>
      </div>
      
      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-doc-surface border border-doc-border rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          <div className="p-2">
            <div className="text-xs text-doc-text-muted mb-2 px-2">
              Found {results.length} result{results.length !== 1 ? 's' : ''}
            </div>
            {results.map((result, index) => (
              <button
                key={`${result.id}-${index}`}
                className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                  index === selectedIndex 
                    ? 'bg-doc-hover text-doc-accent' 
                    : 'hover:bg-doc-hover text-doc-text'
                }`}
                onClick={() => handleResultClick(result)}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                <div className="flex items-start space-x-3">
                  <i className={`${getResultIcon(result.type)} text-sm mt-1 ${
                    index === selectedIndex ? 'text-doc-accent' : 'text-doc-text-muted'
                  }`}></i>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">
                      {highlightQuery(result.title, query)}
                    </div>
                    {result.content && (
                      <div className="text-xs text-doc-text-muted mt-1 line-clamp-2">
                        {highlightQuery(result.content, query)}
                      </div>
                    )}
                    <div className="text-xs text-doc-text-muted mt-1">
                      in {result.section}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* No Results */}
      {isOpen && query.trim().length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-doc-surface border border-doc-border rounded-lg shadow-xl z-50 p-4">
          <div className="text-center text-doc-text-muted">
            <i className="fas fa-search-minus text-2xl mb-2"></i>
            <div className="text-sm">No results found for "{query}"</div>
            <div className="text-xs mt-1">Try different keywords or check spelling</div>
          </div>
        </div>
      )}
    </div>
  );
}
