import { Index } from "flexsearch";
import { docContent, docSections, type DocContent, type DocItem } from "./docs-data";

export interface SearchResult {
  id: string;
  title: string;
  content: string;
  url: string;
  section: string;
  type: 'page' | 'section' | 'heading';
  score?: number;
}

class DocumentSearchEngine {
  private pageIndex: Index;
  private contentIndex: Index;
  private searchData: SearchResult[] = [];

  constructor() {
    // Create indexes with advanced configuration for better Unicode handling
    this.pageIndex = new Index({
      tokenize: "forward",
      resolution: 9,
      cache: 100
    });

    this.contentIndex = new Index({
      tokenize: "full",
      resolution: 9,
      cache: 100
    });

    this.buildSearchIndex();
  }

  private buildSearchIndex() {
    this.searchData = [];
    let indexId = 0;

    // Index navigation items
    docSections.forEach(section => {
      section.items.forEach(item => {
        const searchItem: SearchResult = {
          id: item.id,
          title: item.title,
          content: item.title,
          url: item.href,
          section: section.title,
          type: 'page'
        };

        this.searchData.push(searchItem);
        this.pageIndex.add(indexId, `${item.title} ${section.title}`);
        indexId++;
      });
    });

    // Index document content
    Object.entries(docContent).forEach(([key, doc]) => {
      // Index the main page
      const pageItem: SearchResult = {
        id: doc.id,
        title: doc.title,
        content: doc.description || '',
        url: `#${doc.id}`,
        section: 'Documentation',
        type: 'page'
      };

      this.searchData.push(pageItem);
      this.pageIndex.add(indexId, `${doc.title} ${doc.description || ''}`);
      this.contentIndex.add(indexId, this.extractTextContent(doc.content));
      indexId++;

      // Index table of contents items
      doc.tableOfContents.forEach(tocItem => {
        const tocSearchItem: SearchResult = {
          id: `${doc.id}-${tocItem.id}`,
          title: tocItem.title,
          content: `${tocItem.title} in ${doc.title}`,
          url: `#${tocItem.id.toLowerCase().replace(/\s+/g, '-')}`,
          section: doc.title,
          type: 'heading'
        };

        this.searchData.push(tocSearchItem);
        this.pageIndex.add(indexId, tocItem.title);
        indexId++;
      });

      // Index content sections
      this.indexContentSections(doc, indexId);
    });
  }

  private extractTextContent(markdown: string): string {
    return markdown
      .replace(/```[\s\S]*?```/g, '') // Remove code blocks
      .replace(/`([^`]+)`/g, '$1') // Remove inline code
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
      .replace(/\*(.*?)\*/g, '$1') // Remove italics
      .replace(/#{1,6}\s+/g, '') // Remove headers
      .replace(/>\s*/g, '') // Remove blockquotes
      .replace(/[-*+]\s+/g, '') // Remove list markers
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Extract link text
      .replace(/\n+/g, ' ') // Replace newlines with spaces
      .trim();
  }

  private indexContentSections(doc: DocContent, startIndexId: number) {
    const sections = doc.content.split('\n# ').filter(Boolean);
    let indexId = startIndexId;

    sections.forEach(section => {
      const lines = section.split('\n');
      const title = lines[0].replace(/^# /, '');
      const content = lines.slice(1).join('\n');
      const textContent = this.extractTextContent(content);

      if (textContent.trim()) {
        const sectionItem: SearchResult = {
          id: `${doc.id}-${title.toLowerCase().replace(/\s+/g, '-')}`,
          title: title,
          content: textContent.substring(0, 200) + (textContent.length > 200 ? '...' : ''),
          url: `#${title.toLowerCase().replace(/\s+/g, '-')}`,
          section: doc.title,
          type: 'section'
        };

        this.searchData.push(sectionItem);
        this.pageIndex.add(indexId, title);
        this.contentIndex.add(indexId, textContent);
        indexId++;
      }
    });
  }

  search(query: string, limit: number = 10): SearchResult[] {
    if (!query.trim()) return [];

    try {
      // Search both indexes
      const pageResults = this.pageIndex.search(query, limit * 2) as number[];
      const contentResults = this.contentIndex.search(query, limit * 2) as number[];

      // Combine and deduplicate results
      const allResultIds = new Set([...pageResults, ...contentResults]);
      const results: SearchResult[] = [];

      // Get search results and add relevance scoring
      allResultIds.forEach(id => {
        if (id < this.searchData.length) {
          const item = { ...this.searchData[id] };
          
          // Simple relevance scoring
          const titleMatch = item.title.toLowerCase().includes(query.toLowerCase());
          const contentMatch = item.content.toLowerCase().includes(query.toLowerCase());
          
          item.score = 0;
          if (titleMatch) item.score += 10;
          if (contentMatch) item.score += 5;
          if (pageResults.includes(id)) item.score += 3;
          if (contentResults.includes(id)) item.score += 2;

          results.push(item);
        }
      });

      // Sort by relevance score and return top results
      return results
        .sort((a, b) => (b.score || 0) - (a.score || 0))
        .slice(0, limit);
    } catch (error) {
      console.warn('Search failed:', error);
      return [];
    }
  }

  suggest(query: string, limit: number = 5): string[] {
    if (!query.trim()) return [];

    try {
      // Get suggestions from FlexSearch
      const suggestions = this.pageIndex.search(query, limit) as number[];

      return suggestions
        .map(id => this.searchData[id]?.title)
        .filter(Boolean)
        .slice(0, limit);
    } catch (error) {
      console.warn('Search suggestions failed:', error);
      return [];
    }
  }
}

// Create singleton instance
export const searchEngine = new DocumentSearchEngine();

// Export search functions
export const searchDocs = (query: string, limit?: number) => 
  searchEngine.search(query, limit);

export const getSuggestions = (query: string, limit?: number) => 
  searchEngine.suggest(query, limit);