import { useState, useEffect, useRef, useCallback } from "react";
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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 sm:px-6">
      <div
        className="fixed inset-0 backdrop-blur-sm transition-opacity"
        style={{ backgroundColor: "rgba(14, 14, 14, 0.85)" }}
        onClick={onClose}
      />

      <div
        className="relative w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden transition-colors duration-300"
        style={{ backgroundColor: "rgb(18, 18, 18)" }}
      >
        {/* Search Header */}
        <div
          className="flex items-center px-6 py-4"
          style={{ borderBottom: "1px solid rgb(30, 30, 30)" }}
        >
          <Search
            size={20}
            className="mr-3 text-gray-400 dark:text-doc-text-muted"
          />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyNavigation}
            placeholder="Search tutorials, examples, references..."
            className="flex-1 bg-transparent border-none focus:ring-0 text-gray-900 dark:text-doc-text placeholder-gray-400 dark:placeholder-doc-text-muted text-lg outline-none"
          />
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-2 rounded-lg transition-all duration-200 ${
                showFilters || Object.keys(filters).length > 0
                  ? "bg-doc-accent/20 text-doc-accent border border-doc-accent/30"
                  : "text-gray-400 dark:text-doc-text-muted hover:text-gray-600 dark:hover:text-doc-text hover:bg-doc-hover"
              }`}
              title="Filters"
            >
              <Filter size={18} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 dark:text-doc-text-muted hover:text-gray-600 dark:hover:text-doc-text hover:bg-doc-hover transition-all duration-200"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div
            className="px-6 py-4 border-b"
            style={{
              backgroundColor: "rgb(22, 22, 22)",
              borderBottomColor: "rgb(30, 30, 30)",
            }}
          >
            <div className="flex flex-wrap items-center gap-4">
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

        {/* Content */}
        <div className="max-h-96 overflow-y-auto custom-scrollbar">
          {!searchQuery.trim() && (
            <div className="p-6">
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

              {/* Popular Searches */}
              <div>
                <h3 className="text-sm font-medium text-doc-text mb-4">
                  Popular Searches
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="px-4 py-2 text-sm bg-doc-surface text-doc-text-muted rounded-lg hover:bg-doc-hover hover:text-doc-text transition-all duration-200 border border-doc-border hover:border-doc-accent/30"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {searchQuery.trim() && (
            <div className="p-4">
              {/* Loading indicator */}
              {isSearching && (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-doc-accent"></div>
                  <p className="text-sm text-doc-text-muted mt-3">
                    Searching...
                  </p>
                </div>
              )}

              {/* Search Results */}
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

        {/* Footer */}
        <div
          className="px-6 py-4 border-t"
          style={{
            borderTopColor: "rgb(30, 30, 30)",
            backgroundColor: "rgb(22, 22, 22)",
          }}
        >
          <div className="flex items-center justify-between text-xs text-doc-text-muted">
            <div className="flex items-center space-x-4">
              <span>
                <kbd className="kbd">↑↓</kbd> to navigate
              </span>
              <span>
                <kbd className="kbd">↵</kbd> to select
              </span>
              <span>
                <kbd className="kbd">esc</kbd> to close
              </span>
            </div>
            <div>
              <kbd className="kbd">⌘K</kbd> to search
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
