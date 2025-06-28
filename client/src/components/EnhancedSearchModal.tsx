import { useState, useEffect, useRef, useCallback } from 'react';
import { Search, X, Clock, Filter, ArrowRight, BookOpen, Code, FileText, Zap } from 'lucide-react';
import { searchDocs } from '../lib/search';

interface SearchResult {
  id: string;
  title: string;
  content: string;
  url: string;
  section: string;
  type: 'page' | 'section' | 'heading';
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
  course: Zap
};

const DIFFICULTY_COLORS = {
  'beginner': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'intermediate': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  'advanced': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
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
  
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);
  
  return (
    <span>
      {parts.map((part, index) => 
        regex.test(part) ? (
          <mark key={index} className="bg-yellow-200 dark:bg-yellow-800 px-0.5 rounded">
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  );
}

export function EnhancedSearchModal({ isOpen, onClose }: EnhancedSearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({});
  const [showFilters, setShowFilters] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  // Popular search terms
  const popularSearches = ['encapsulation', 'inheritance', 'polymorphism', 'classes', 'objects', 'methods'];

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recent-searches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Save recent searches to localStorage
  const addRecentSearch = (query: string) => {
    const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recent-searches', JSON.stringify(updated));
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
            filteredResults = filteredResults.filter(r => r.section.toLowerCase().includes(searchFilters.category!.toLowerCase()));
          }
          if (searchFilters.type) {
            filteredResults = filteredResults.filter(r => r.type === searchFilters.type);
          }
          
          setResults(filteredResults);
        } catch (error) {
          console.error('Search error:', error);
          setResults([]);
        }
        setIsSearching(false);
      } else {
        setResults([]);
        setIsSearching(false);
      }
    }, 300),
    []
  );

  // Perform search when query or filters change
  useEffect(() => {
    debouncedSearch(searchQuery, filters);
  }, [searchQuery, filters, debouncedSearch]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (!isOpen) {
          // Open search modal logic would go here
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyNavigation = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter') {
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
    
    if (result.url.startsWith('http')) {
      window.open(result.url, '_blank', 'noopener,noreferrer');
    } else {
      window.location.hash = result.url;
    }
  };

  // Handle filter change
  const handleFilterChange = (filterType: keyof SearchFilters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value === 'all' ? undefined : value
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
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative bg-white dark:bg-gray-800 w-full max-w-3xl rounded-lg shadow-2xl overflow-hidden">
        {/* Search Header */}
        <div className="flex items-center px-4 py-3 border-b dark:border-gray-700">
          <Search size={20} className="mr-3 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyNavigation}
            placeholder="Search tutorials, examples, references..."
            className="flex-1 bg-transparent border-none focus:ring-0 text-gray-900 dark:text-white placeholder-gray-400 text-lg outline-none"
          />
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-2 rounded-md transition-colors ${
                showFilters || Object.keys(filters).length > 0
                  ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
                  : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
              }`}
              title="Filters"
            >
              <Filter size={18} />
            </button>
            <button 
              onClick={onClose}
              className="p-2 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border-b dark:border-gray-600">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Category:</label>
                <select
                  value={filters.category || 'all'}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="text-sm border border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-white dark:bg-gray-800"
                >
                  <option value="all">All</option>
                  <option value="core">Core Concepts</option>
                  <option value="advanced">Advanced Topics</option>
                  <option value="syllabus">Syllabus</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Type:</label>
                <select
                  value={filters.type || 'all'}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="text-sm border border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-white dark:bg-gray-800"
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
                  className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="max-h-96 overflow-y-auto">
          {!searchQuery.trim() && (
            <div className="p-4">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Clock size={16} className="mr-2 text-gray-400" />
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Recent Searches</h3>
                  </div>
                  <div className="space-y-1">
                    {recentSearches.slice(0, 5).map((search, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchQuery(search)}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                      >
                        <span>{search}</span>
                        <ArrowRight size={14} className="text-gray-400" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Searches */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Popular Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map(term => (
                    <button
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
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
                <div className="text-center py-4">
                  <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                  <p className="text-sm text-gray-500 mt-2">Searching...</p>
                </div>
              )}

              {/* Search Results */}
              {results.length > 0 && !isSearching && (
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Results ({results.length})
                  </h4>
                  <div className="space-y-3">
                    {results.map((result, index) => {
                      const CategoryIcon = CATEGORY_ICONS.course || BookOpen;
                      return (
                        <button
                          key={result.id}
                          onClick={() => handleResultClick(result)}
                          className={`w-full text-left p-3 rounded-lg border transition-colors ${
                            index === selectedIndex
                              ? 'bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-700'
                              : 'hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-600'
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <CategoryIcon size={20} className="text-gray-400 mt-0.5 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-1">
                                <h5 className="font-medium text-gray-900 dark:text-white truncate">
                                  {highlightText(result.title, searchQuery)}
                                </h5>
                                <span className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full capitalize">
                                  {result.type}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                {highlightText(result.content.substring(0, 120) + '...', searchQuery)}
                              </p>
                              <div className="flex items-center space-x-2 mt-2">
                                <span className="text-xs text-gray-500 dark:text-gray-400">
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
                <div className="text-center py-8">
                  <Search size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No results found</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Try adjusting your search terms or removing filters
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-4">
              <span><kbd className="kbd">↑↓</kbd> to navigate</span>
              <span><kbd className="kbd">↵</kbd> to select</span>
              <span><kbd className="kbd">esc</kbd> to close</span>
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