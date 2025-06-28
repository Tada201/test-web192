import matter from 'gray-matter';

export interface MDXDocument {
  slug: string;
  title: string;
  sidebar_label?: string;
  sidebar_position?: number;
  description?: string;
  tags?: string[];
  content: string;
  frontmatter: Record<string, any>;
}

export interface MDXSection {
  id: string;
  title: string;
  icon: string;
  items: MDXDocument[];
  collapsible?: boolean;
}

// Import all MDX files dynamically
const mdxModules = import.meta.glob('/src/docs/**/*.mdx', { query: '?raw', import: 'default', eager: true });

export function loadMDXDocuments(): MDXDocument[] {
  const documents: MDXDocument[] = [];

  Object.entries(mdxModules).forEach(([path, content]) => {
    try {
      // Ensure content is a string
      const contentString = typeof content === 'string' ? content : String(content);
      const { data: frontmatter, content: markdownContent } = matter(contentString);
      
      // Extract slug from file path
      const slug = path
        .replace('/src/docs/', '')
        .replace('.mdx', '')
        .replace(/\//g, '-');

      const doc: MDXDocument = {
        slug,
        title: frontmatter.title || slug,
        sidebar_label: frontmatter.sidebar_label,
        sidebar_position: frontmatter.sidebar_position || 999,
        description: frontmatter.description,
        tags: frontmatter.tags || [],
        content: markdownContent,
        frontmatter
      };

      documents.push(doc);
    } catch (error) {
      console.warn(`Failed to parse MDX file: ${path}`, error);
    }
  });

  return documents.sort((a, b) => (a.sidebar_position || 999) - (b.sidebar_position || 999));
}

export function organizeMDXDocuments(): MDXSection[] {
  const documents = loadMDXDocuments();
  
  // Group documents by their path structure
  const sections: { [key: string]: MDXDocument[] } = {};
  
  documents.forEach(doc => {
    let sectionKey = 'Course Materials';
    
    if (doc.slug.startsWith('Syllabus_mat')) {
      sectionKey = 'Syllabus';
    } else if (doc.slug.startsWith('mdx_docs')) {
      sectionKey = 'Course Content';
    }
    
    if (!sections[sectionKey]) {
      sections[sectionKey] = [];
    }
    sections[sectionKey].push(doc);
  });

  // Convert to MDXSection format
  const mdxSections: MDXSection[] = [
    {
      id: 'course-content',
      title: 'Course Content',
      icon: 'fas fa-book-open',
      items: sections['Course Content'] || [],
      collapsible: true
    },
    {
      id: 'syllabus',
      title: 'Syllabus',
      icon: 'fas fa-file-alt',
      items: sections['Syllabus'] || [],
      collapsible: true
    }
  ];

  return mdxSections.filter(section => section.items.length > 0);
}

export function getMDXDocument(slug: string): MDXDocument | undefined {
  const documents = loadMDXDocuments();
  return documents.find(doc => doc.slug === slug);
}

export function processMarkdownContent(content: string): string {
  // Basic markdown processing for display
  return content
    // Convert headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Convert bold and italic
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    // Convert links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>')
    // Convert line breaks
    .replace(/\n/gim, '<br>');
}