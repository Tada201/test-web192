import { useState, useEffect, useCallback, useMemo } from 'react';
import FlexSearch from 'flexsearch';

export interface SearchDocument {
  id: string;
  title: string;
  content: string;
  url: string;
  category: 'tutorial' | 'reference' | 'example' | 'download' | 'course';
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
}

export interface SearchResult extends SearchDocument {
  score: number;
  highlights: string[];
}

export interface SearchFilters {
  category?: string;
  difficulty?: string;
  tags?: string[];
}

interface SearchIndex {
  documents: SearchDocument[];
  metadata: {
    version: string;
    buildDate: string;
    totalDocuments: number;
    categories: string[];
    difficulties: string[];
    tags: string[];
  };
}

export function useSearch() {
  const [searchIndex, setSearchIndex] = useState<FlexSearch.Index | null>(null);
  const [documents, setDocuments] = useState<SearchDocument[]>([]);
  const [metadata, setMetadata] = useState<SearchIndex['metadata'] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize search index
  useEffect(() => {
    async function initializeSearch() {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch the search index
        const response = await fetch('/search-index.json');
        if (!response.ok) {
          throw new Error(`Failed to load search index: ${response.status}`);
        }

        const indexData: SearchIndex = await response.json();
        
        // Create FlexSearch index
        const index = new FlexSearch.Index({
          preset: 'match',
          tokenize: 'forward',
          resolution: 9
        });

        // Add documents to the index
        indexData.documents.forEach((doc, i) => {
          const searchableText = `${doc.title} ${doc.content} ${doc.description} ${doc.tags.join(' ')}`;
          index.add(i, searchableText);
        });

        setSearchIndex(index);
        setDocuments(indexData.documents);
        setMetadata(indexData.metadata);
      } catch (err) {
        console.error('Failed to initialize search:', err);
        setError(err instanceof Error ? err.message : 'Failed to initialize search');
      } finally {
        setIsLoading(false);
      }
    }

    initializeSearch();
  }, []);

  // Perform search
  const search = useCallback((
    query: string,
    filters: SearchFilters = {},
    limit: number = 20
  ): SearchResult[] => {
    if (!searchIndex || !query.trim()) {
      return [];
    }

    try {
      // Perform the search
      const results = searchIndex.search(query, { limit: limit * 2 }); // Get more results for filtering
      
      // Convert results to SearchResult objects
      const searchResults: SearchResult[] = results
        .map((resultIndex) => {
          const doc = documents[resultIndex as number];
          if (!doc) return null;

          // Apply filters
          if (filters.category && doc.category !== filters.category) return null;
          if (filters.difficulty && doc.difficulty !== filters.difficulty) return null;
          if (filters.tags && filters.tags.length > 0) {
            const hasMatchingTag = filters.tags.some(tag => doc.tags.includes(tag));
            if (!hasMatchingTag) return null;
          }

          // Generate highlights
          const highlights = generateHighlights(doc, query);

          return {
            ...doc,
            score: 1, // FlexSearch doesn't provide scores in this version
            highlights
          };
        })
        .filter((result): result is SearchResult => result !== null)
        .slice(0, limit);

      return searchResults;
    } catch (err) {
      console.error('Search error:', err);
      return [];
    }
  }, [searchIndex, documents]);

  // Generate search suggestions
  const getSuggestions = useCallback((query: string, limit: number = 5): string[] => {
    if (!searchIndex || !query.trim()) {
      return [];
    }

    try {
      // Get search results and extract unique terms
      const results = searchIndex.search(query, { limit: limit * 2 });
      const suggestions = new Set<string>();

      results.forEach((resultIndex) => {
        const doc = documents[resultIndex as number];
        if (doc) {
          // Add title words as suggestions
          const titleWords = doc.title.toLowerCase().split(/\s+/);
          titleWords.forEach(word => {
            if (word.includes(query.toLowerCase()) && word.length > 2) {
              suggestions.add(word);
            }
          });

          // Add tags as suggestions
          doc.tags.forEach(tag => {
            if (tag.toLowerCase().includes(query.toLowerCase())) {
              suggestions.add(tag);
            }
          });
        }
      });

      return Array.from(suggestions).slice(0, limit);
    } catch (err) {
      console.error('Suggestions error:', err);
      return [];
    }
  }, [searchIndex, documents]);

  // Get popular searches based on metadata
  const getPopularSearches = useCallback((): string[] => {
    if (!metadata) return [];

    return [
      'java class',
      'inheritance',
      'polymorphism',
      'arraylist',
      'exception handling',
      'encapsulation',
      'constructor',
      'interface',
      'collections',
      'file io'
    ];
  }, [metadata]);

  // Get available filter options
  const getFilterOptions = useMemo(() => {
    return {
      categories: metadata?.categories || [],
      difficulties: metadata?.difficulties || [],
      tags: metadata?.tags || []
    };
  }, [metadata]);

  return {
    search,
    getSuggestions,
    getPopularSearches,
    getFilterOptions,
    isLoading,
    error,
    metadata
  };
}

// Helper function to generate highlights
function generateHighlights(doc: SearchDocument, query: string): string[] {
  const highlights: string[] = [];
  const queryTerms = query.toLowerCase().split(/\s+/);
  
  // Check title for matches
  const titleLower = doc.title.toLowerCase();
  queryTerms.forEach(term => {
    if (titleLower.includes(term)) {
      highlights.push(`Title: "${doc.title}"`);
    }
  });

  // Check content for matches
  const contentLower = doc.content.toLowerCase();
  queryTerms.forEach(term => {
    const index = contentLower.indexOf(term);
    if (index !== -1) {
      const start = Math.max(0, index - 30);
      const end = Math.min(doc.content.length, index + term.length + 30);
      const snippet = doc.content.substring(start, end);
      highlights.push(`...${snippet}...`);
    }
  });

  // Check tags for matches
  doc.tags.forEach(tag => {
    if (queryTerms.some(term => tag.toLowerCase().includes(term))) {
      highlights.push(`Tag: ${tag}`);
    }
  });

  return highlights.slice(0, 3); // Limit to 3 highlights
}