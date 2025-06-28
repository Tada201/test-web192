import { useState, useEffect, useRef, useCallback } from 'react';
import { Search, X, Clock, Filter, ArrowRight, BookOpen, Download, Code, FileText, Zap } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';
import { useNavigate } from 'react-router-dom';
import { useSearch as useSearchHook, SearchResult, SearchFilters } from '../hooks/useSearch';

const CATEGORY_ICONS = {
  tutorial: BookOpen,
  reference: FileText,
  example: Code,
  download: Download,
  course: Zap
};

const DIFFICULTY_COLORS = {
  Beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  Advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
};

const EnhancedSearchModal = () => {
  const { 
    isSearchOpen, 
    toggleSearch, 
    searchQuery, 
    setSearchQuery,
    recentSearches,
    addRecentSearch
  } = useSearch();
  
  const {
    search,
    getSuggestions,
    getPopularSearches,
    getFilterOptions,
    isLoading: searchLoading,
    error: searchError
  } = useSearchHook();
  
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({});
  const [showFilters, setShowFilters] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isSearching, setIsSearching] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const filterOptions = getFilterOptions;
  const popularSearches = getPopularSearches();

  // Debounced search
  const debouncedSearch = useCallback(
    debounce((query: string, searchFilters: SearchFilters) => {
      if (query.trim()) {
        setIsSearching(true);
        const searchResults = search(query, searchFilters, 15);
        const searchSuggestions = getSuggestions(query, 5);
        
        setResults(searchResults);
        setSuggestions(searchSuggestions);
        setIsSearching(false);
      } else {
        setResults([]);
        setSuggestions([]);
        setIsSearching(false);
      }
    }, 300),
    [search, getSuggestions]
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
        toggleSearch();
      } else if (e.key === 'Escape' && isSearchOpen) {
        toggleSearch();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleSearch, isSearchOpen]);

  // Focus input when modal opens
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

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
      toggleSearch();
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Handle result click
  const handleResultClick = (result: SearchResult) => {
    addRecentSearch(searchQuery);
    toggleSearch();
    
    if (result.url.startsWith('http')) {
      window.open(result.url, '_blank', 'noopener,noreferrer');
    } else {
      navigate(result.url);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    inputRef.current?.focus();
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

  if (!isSearchOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 sm:px-6">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={toggleSearch}
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
            className="flex-1 bg-transparent border-none focus:ring-0 text-gray-900 dark:text-white placeholder-gray-400 text-lg"
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
              onClick={toggleSearch}
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
                  {filterOptions.categories.map(category => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Difficulty:</label>
                <select
                  value={filters.difficulty || 'all'}
                  onChange={(e) => handleFilterChange('difficulty', e.target.value)}
                  className="text-sm border border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-white dark:bg-gray-800"
                >
                  <option value="all">All</option>
                  {filterOptions.difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
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
          {searchError && (
            <div className="p-4 text-red-600 dark:text-red-400">
              Error: {searchError}
            </div>
          )}

          {searchLoading && (
            <div className="p-4 text-center text-gray-500">
              Loading search index...
            </div>
          )}

          {!searchQuery.trim() && !searchLoading && (
            <div className="p-4">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Clock size={16} className="mr-2 text-gray-400" />
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Recent Searches</h3>
                  </div>
                  <div className="space-y-1">
                    {recentSearches.slice(0, 5).map(search => (
                      <button
                        key={search.id}
                        onClick={() => setSearchQuery(search.query)}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                      >
                        <span>{search.query}</span>
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

              {/* Search suggestions */}
              {suggestions.length > 0 && !isSearching && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Suggestions</h4>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map(suggestion => (
                      <button
                        key={suggestion}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-2 py-1 text-xs bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
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
                      const CategoryIcon = CATEGORY_ICONS[result.category];
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
                                <span className={`px-2 py-0.5 text-xs rounded-full ${DIFFICULTY_COLORS[result.difficulty]}`}>
                                  {result.difficulty}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                {result.description}
                              </p>
                              {result.highlights.length > 0 && (
                                <div className="mt-2">
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {result.highlights[0]}
                                  </p>
                                </div>
                              )}
                              <div className="flex items-center space-x-2 mt-2">
                                <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                                  {result.category}
                                </span>
                                {result.tags.slice(0, 3).map(tag => (
                                  <span
                                    key={tag}
                                    className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-1.5 py-0.5 rounded"
                                  >
                                    {tag}
                                  </span>
                                ))}
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
              {searchQuery.trim() && results.length === 0 && !isSearching && !searchLoading && (
                <div className="text-center py-8">
                  <Search size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No results found</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Try adjusting your search terms or filters
                  </p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-gray-50 dark:bg-gray-700 border-t dark:border-gray-600">
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-4">
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
              <span>Esc Close</span>
            </div>
            <span>⌘K to search</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to highlight search terms
function highlightText(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);
  
  return parts.map((part, index) =>
    regex.test(part) ? (
      <mark key={index} className="bg-yellow-200 dark:bg-yellow-800 text-black dark:text-white px-0.5 rounded">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

// Debounce utility
function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeoutId: NodeJS.Timeout;
  return ((...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  }) as T;
}

export default EnhancedSearchModal;