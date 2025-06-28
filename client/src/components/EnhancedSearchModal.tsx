import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Search,
  X,
  Clock,
  Filter,
  ArrowRight,
  BookOpen,
  Code,
  FileText,
  Zap,
} from "lucide-react";
import { searchDocs } from "../lib/search";

interface SearchResult {
  id: string;
  title: string;
  content: string;
  url: string;
  section: string;
  type: "page" | "section" | "heading";
  category?: string;
  difficulty?: string;
  tags?: string[];
  score?: number;
}

interface SearchFilters {
  category?: string;
  difficulty?: string;
  type?: string;
}

interface EnhancedSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORY_ICONS = {
  tutorial: BookOpen,
  reference: FileText,
  example: Code,
  course: Zap,
};

const DIFFICULTY_COLORS = {
  beginner: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  intermediate:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

// Debounce utility
function debounce<T extends (...args: any[]) => any>(func: T, wait: number): T {
  let timeout: NodeJS.Timeout;
  return ((...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }) as T;
}

// Highlight matching text
function highlightText(text: string, query: string): JSX.Element {
  if (!query.trim()) return <span>{text}</span>;

  const regex = new RegExp(
    `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
    "gi",
  );
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark
            key={index}
            className="bg-doc-accent/20 text-doc-accent px-1 py-0.5 rounded font-medium"
          >
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </span>
  );
}

export function EnhancedSearchModal({
  isOpen,
  onClose,
}: EnhancedSearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({});
  const [showFilters, setShowFilters] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  // Popular search terms
  const popularSearches = [
    "encapsulation",
    "inheritance",
    "polymorphism",
    "classes",
    "objects",
    "methods",
  ];

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("recent-searches");
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Save recent searches to localStorage
  const addRecentSearch = (query: string) => {
    const updated = [query, ...recentSearches.filter((s) => s !== query)].slice(
      0,
      5,
    );
    setRecentSearches(updated);
    localStorage.setItem("recent-searches", JSON.stringify(updated));
  };

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((query: string, searchFilters: SearchFilters) => {
      if (query.trim()) {
        setIsSearching(true);
        try {
          const searchResults = searchDocs(query, 15);

          // Apply filters
          let filteredResults = searchResults;
          if (searchFilters.category) {
            filteredResults = filteredResults.filter((r) =>
              r.section
                .toLowerCase()
                .includes(searchFilters.category!.toLowerCase()),
            );
          }
          if (searchFilters.type) {
            filteredResults = filteredResults.filter(
              (r) => r.type === searchFilters.type,
            );
          }

          setResults(filteredResults);
        } catch (error) {
          console.error("Search error:", error);
          setResults([]);
        }
        setIsSearching(false);
      } else {
        setResults([]);
        setIsSearching(false);
      }
    }, 300),
    [],
  );

  // Perform search when query or filters change
  useEffect(() => {
    debouncedSearch(searchQuery, filters);
  }, [searchQuery, filters, debouncedSearch]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (!isOpen) {
          // Open search modal logic would go here
        }
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyNavigation = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && results[selectedIndex]) {
        handleResultClick(results[selectedIndex]);
      } else if (searchQuery.trim()) {
        handleSearch();
      }
    }
  };

  // Handle search submission
  const handleSearch = () => {
    if (searchQuery.trim()) {
      addRecentSearch(searchQuery);
      onClose();
      // Navigate to search results or trigger global search
    }
  };

  // Handle result click
  const handleResultClick = (result: SearchResult) => {
    addRecentSearch(searchQuery);
    onClose();

    if (result.url.startsWith("http")) {
      window.open(result.url, "_blank", "noopener,noreferrer");
    } else {
      window.location.hash = result.url;
    }
  };

  // Handle filter change
  const handleFilterChange = (
    filterType: keyof SearchFilters,
    value: string,
  ) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value === "all" ? undefined : value,
    }));
  };

  // Clear filters
  const clearFilters = () => {
    setFilters({});
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 px-4 sm:px-6">
      <div
        className="fixed inset-0 backdrop-blur-md transition-all duration-300"
        style={{ backgroundColor: "rgba(14, 14, 14, 0.90)" }}
        onClick={onClose}
      />

      <div
        className="relative w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 animate-in slide-in-from-top-4"
        style={{
          backgroundColor: "rgb(18, 18, 18)",
          border: "1px solid rgb(40, 40, 40)",
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Enhanced Search Header */}
        <div
          className="flex items-center px-8 py-6 relative group"
          style={{ borderBottom: "1px solid rgb(30, 30, 30)" }}
        >
          {/* Animated search icon with hover effect */}
          <div className="relative mr-4">
            <Search
              size={24}
              className="text-doc-accent transition-all duration-200 group-hover:scale-110 group-hover:text-doc-accent/80"
            />
            <div className="absolute inset-0 bg-doc-accent/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100 blur-md"></div>
          </div>

          {/* Enhanced input with larger hit area */}
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyNavigation}
            placeholder="Search OOP topics, examples, or Java concepts..."
            className="flex-1 bg-transparent border-none focus:ring-0 text-doc-text placeholder-doc-text-muted/70 text-xl font-medium outline-none py-2 px-2 rounded-lg hover:bg-doc-hover/30 focus:bg-doc-hover/50 transition-all duration-200"
            style={{ minHeight: "48px" }}
          />

          {/* Enhanced action buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`relative p-3 rounded-xl transition-all duration-200 group/filter ${
                showFilters || Object.keys(filters).length > 0
                  ? "bg-doc-accent/20 text-doc-accent border border-doc-accent/40 shadow-lg scale-105"
                  : "text-doc-text-muted hover:text-doc-accent hover:bg-doc-accent/10 hover:scale-105 border border-transparent hover:border-doc-accent/20"
              }`}
              title="Advanced Filters"
            >
              <Filter
                size={20}
                className="transition-transform duration-200 group-hover/filter:rotate-12"
              />
              {Object.keys(filters).length > 0 && (
                <span className="absolute -top-1 -right-1 bg-doc-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {Object.keys(filters).length}
                </span>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-3 rounded-xl text-doc-text-muted hover:text-red-400 hover:bg-red-500/10 hover:scale-105 transition-all duration-200 border border-transparent hover:border-red-500/20"
              title="Close Search"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Enhanced Filters */}
        {showFilters && (
          <div
            className="px-8 py-6 border-b"
            style={{
              backgroundColor: "rgb(22, 22, 22)",
              borderBottomColor: "rgb(30, 30, 30)",
            }}
          >
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center space-x-3">
                <label className="text-sm font-medium text-doc-text-muted">
                  Category:
                </label>
                <select
                  value={filters.category || "all"}
                  onChange={(e) =>
                    handleFilterChange("category", e.target.value)
                  }
                  className="text-sm border border-doc-border rounded-lg px-3 py-2 bg-doc-surface text-doc-text focus:ring-2 focus:ring-doc-accent/50 focus:border-doc-accent transition-all duration-200"
                >
                  <option value="all">All</option>
                  <option value="core">Core Concepts</option>
                  <option value="advanced">Advanced Topics</option>
                  <option value="syllabus">Syllabus</option>
                </select>
              </div>

              <div className="flex items-center space-x-3">
                <label className="text-sm font-medium text-doc-text-muted">
                  Type:
                </label>
                <select
                  value={filters.type || "all"}
                  onChange={(e) => handleFilterChange("type", e.target.value)}
                  className="text-sm border border-doc-border rounded-lg px-3 py-2 bg-doc-surface text-doc-text focus:ring-2 focus:ring-doc-accent/50 focus:border-doc-accent transition-all duration-200"
                >
                  <option value="all">All</option>
                  <option value="page">Pages</option>
                  <option value="section">Sections</option>
                  <option value="heading">Headings</option>
                </select>
              </div>

              {Object.keys(filters).length > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-doc-accent hover:text-doc-accent/80 font-medium transition-colors duration-200"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>
        )}

        {/* Enhanced Content */}
        <div className="max-h-96 overflow-y-auto custom-scrollbar">
          {!searchQuery.trim() && (
            <div className="p-8">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <Clock size={16} className="mr-2 text-doc-text-muted" />
                    <h3 className="text-sm font-medium text-doc-text">
                      Recent Searches
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {recentSearches.slice(0, 5).map((search, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchQuery(search)}
                        className="flex items-center justify-between w-full px-4 py-3 text-sm text-doc-text hover:bg-doc-hover rounded-lg transition-all duration-200 border border-transparent hover:border-doc-border"
                      >
                        <span>{search}</span>
                        <ArrowRight size={14} className="text-doc-text-muted" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Enhanced Popular Searches */}
              <div className="mt-8">
                <h3 className="text-sm font-medium text-doc-text mb-6 flex items-center">
                  <Zap size={16} className="mr-2 text-doc-accent" />
                  Popular Searches
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="group px-4 py-3 text-sm bg-doc-surface text-doc-text-muted rounded-xl hover:bg-doc-accent/10 hover:text-doc-accent transition-all duration-200 border border-doc-border hover:border-doc-accent/40 hover:scale-105 hover:shadow-lg text-center font-medium"
                    >
                      <span className="capitalize">{term}</span>
                      <ArrowRight
                        size={14}
                        className="ml-2 inline opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {searchQuery.trim() && (
            <div className="p-8">
              {/* Loading indicator */}
              {isSearching && (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-doc-accent"></div>
                  <p className="text-sm text-doc-text-muted mt-3">
                    Searching...
                  </p>
                </div>
              )}

              {/* Enhanced Search Results */}
              {results.length > 0 && !isSearching && (
                <div>
                  <h4 className="text-sm font-medium text-doc-text mb-4">
                    Results ({results.length})
                  </h4>
                  <div className="space-y-2">
                    {results.map((result, index) => {
                      const CategoryIcon = CATEGORY_ICONS.course || BookOpen;
                      return (
                        <button
                          key={result.id}
                          onClick={() => handleResultClick(result)}
                          className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                            index === selectedIndex
                              ? "bg-doc-accent/10 border-doc-accent/30 shadow-lg"
                              : "hover:bg-doc-hover border-doc-border hover:border-doc-accent/20"
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <CategoryIcon
                              size={20}
                              className="text-doc-text-muted mt-0.5 flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-2">
                                <h5 className="font-medium text-doc-text truncate">
                                  {highlightText(result.title, searchQuery)}
                                </h5>
                                <span className="px-2 py-1 text-xs bg-doc-surface text-doc-text-muted rounded-full border border-doc-border capitalize">
                                  {result.type}
                                </span>
                              </div>
                              <p className="text-sm text-doc-text-muted line-clamp-2 leading-relaxed">
                                {highlightText(
                                  result.content.substring(0, 120) + "...",
                                  searchQuery,
                                )}
                              </p>
                              <div className="flex items-center space-x-2 mt-2">
                                <span className="text-xs text-doc-text-muted/70">
                                  {result.section}
                                </span>
                              </div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* No Results */}
              {searchQuery.trim() && results.length === 0 && !isSearching && (
                <div className="text-center py-12">
                  <Search
                    size={48}
                    className="mx-auto text-doc-text-muted/50 mb-4"
                  />
                  <h4 className="text-lg font-medium text-doc-text mb-2">
                    No results found
                  </h4>
                  <p className="text-doc-text-muted">
                    Try adjusting your search terms or removing filters
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Enhanced Footer with better keyboard hints */}
        <div
          className="px-8 py-5 border-t"
          style={{
            borderTopColor: "rgb(30, 30, 30)",
            backgroundColor: "rgb(22, 22, 22)",
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <span className="text-sm text-doc-text-muted font-medium">
                <kbd className="enhanced-kbd bg-doc-surface border border-doc-border text-doc-text px-2 py-1 rounded-md font-mono text-xs mr-2">
                  ↑↓
                </kbd>
                Navigate
              </span>
              <span className="text-sm text-doc-text-muted font-medium">
                <kbd className="enhanced-kbd bg-doc-surface border border-doc-border text-doc-text px-2 py-1 rounded-md font-mono text-xs mr-2">
                  ↵
                </kbd>
                Select
              </span>
              <span className="text-sm text-doc-text-muted font-medium">
                <kbd className="enhanced-kbd bg-doc-surface border border-doc-border text-doc-text px-2 py-1 rounded-md font-mono text-xs mr-2">
                  esc
                </kbd>
                Close
              </span>
            </div>
            <div className="text-sm text-doc-text-muted font-medium">
              <kbd className="enhanced-kbd bg-doc-accent/10 border border-doc-accent/30 text-doc-accent px-2 py-1 rounded-md font-mono text-xs mr-2">
                ⌘K
              </kbd>
              Search anywhere
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
