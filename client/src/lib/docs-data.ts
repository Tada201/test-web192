export interface DocSection {
  id: string;
  title: string;
  icon: string;
  items: DocItem[];
  collapsible?: boolean;
}

export interface DocItem {
  id: string;
  title: string;
  icon?: string;
  href: string;
}

export interface DocContent {
  id: string;
  title: string;
  description?: string;
  content: string;
  lastModified: string;
  tableOfContents: TOCItem[];
}

export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

import { organizeMDXDocuments, type MDXDocument } from './mdx-loader';

// Get MDX documentation sections
const mdxSections = organizeMDXDocuments();

// Convert MDX documents to DocItem format
function mdxToDocItems(mdxDocs: MDXDocument[]): DocItem[] {
  return mdxDocs.map(doc => ({
    id: doc.slug,
    title: doc.sidebar_label || doc.title,
    icon: "fas fa-file-alt",
    href: `#${doc.slug}`
  }));
}

export const docSections: DocSection[] = [
  {
    id: "course-overview",
    title: "Course Overview",
    icon: "fas fa-graduation-cap",
    items: [
      { id: "mdx_docs-WelcomeSection", title: "Welcome", icon: "fas fa-home", href: "#mdx_docs-WelcomeSection" },
      { id: "mdx_docs-IntroductionSection", title: "Introduction", icon: "fas fa-play", href: "#mdx_docs-IntroductionSection" },
      { id: "mdx_docs-FoundationsCourseSection", title: "Foundations", icon: "fas fa-foundation", href: "#mdx_docs-FoundationsCourseSection" }
    ]
  },
  {
    id: "core-concepts",
    title: "Core Concepts",
    icon: "fas fa-cube",
    collapsible: true,
    items: [
      { id: "mdx_docs-EncapsulationSection", title: "Encapsulation", icon: "fas fa-shield-alt", href: "#mdx_docs-EncapsulationSection" },
      { id: "mdx_docs-InheritanceSection", title: "Inheritance", icon: "fas fa-sitemap", href: "#mdx_docs-InheritanceSection" },
      { id: "mdx_docs-PolymorphismSection", title: "Polymorphism", icon: "fas fa-shapes", href: "#mdx_docs-PolymorphismSection" }
    ]
  },
  {
    id: "advanced-topics",
    title: "Advanced Topics",
    icon: "fas fa-cogs",
    collapsible: true,
    items: [
      { id: "mdx_docs-CollectionsSection", title: "Collections", icon: "fas fa-list", href: "#mdx_docs-CollectionsSection" },
      { id: "mdx_docs-ArrayOfObjectsSection", title: "Array of Objects", icon: "fas fa-th", href: "#mdx_docs-ArrayOfObjectsSection" },
      { id: "mdx_docs-DynamicMemorySection", title: "Dynamic Memory", icon: "fas fa-memory", href: "#mdx_docs-DynamicMemorySection" },
      { id: "mdx_docs-ExceptionSection", title: "Exception Handling", icon: "fas fa-exclamation-triangle", href: "#mdx_docs-ExceptionSection" },
      { id: "mdx_docs-FileIOSection", title: "File I/O", icon: "fas fa-file", href: "#mdx_docs-FileIOSection" }
    ]
  },
  {
    id: "syllabus",
    title: "Syllabus & Materials",
    icon: "fas fa-book",
    collapsible: true,
    items: [
      { id: "Syllabus_mat-sheet001", title: "Sheet 001", icon: "fas fa-file-pdf", href: "#Syllabus_mat-sheet001" },
      { id: "Syllabus_mat-sheet002", title: "Sheet 002", icon: "fas fa-file-pdf", href: "#Syllabus_mat-sheet002" },
      { id: "Syllabus_mat-sheet003", title: "Sheet 003", icon: "fas fa-file-pdf", href: "#Syllabus_mat-sheet003" },
      { id: "Syllabus_mat-sheet004", title: "Sheet 004", icon: "fas fa-file-pdf", href: "#Syllabus_mat-sheet004" },
      { id: "Syllabus_mat-sheet005", title: "Sheet 005", icon: "fas fa-file-pdf", href: "#Syllabus_mat-sheet005" },
      { id: "Syllabus_mat-tabstrip", title: "Tab Strip", icon: "fas fa-file-pdf", href: "#Syllabus_mat-tabstrip" }
    ]
  }
];

import { getMDXDocument, processMarkdownContent } from './mdx-loader';

// Function to generate table of contents from content
function generateTOC(content: string): TOCItem[] {
  const headings = content.match(/^#{1,3}\s+(.+)$/gm) || [];
  return headings.map((heading, index) => {
    const level = (heading.match(/#/g) || []).length;
    const title = heading.replace(/^#+\s+/, '');
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    return { id, title, level };
  });
}

// Function to create DocContent from MDX document
function createDocContentFromMDX(slug: string): DocContent | null {
  const mdxDoc = getMDXDocument(slug);
  if (!mdxDoc) return null;

  return {
    id: slug,
    title: mdxDoc.title,
    description: mdxDoc.description,
    content: mdxDoc.content,
    lastModified: new Date().toISOString().split('T')[0],
    tableOfContents: generateTOC(mdxDoc.content)
  };
}

// Create dynamic docContent that loads from MDX files
export const docContent: Record<string, DocContent> = new Proxy({}, {
  get(target, prop: string) {
    if (typeof prop !== 'string') return undefined;
    
    // Try to load from MDX first
    const mdxContent = createDocContentFromMDX(prop);
    if (mdxContent) return mdxContent;
    
    // Fallback content for introduction
    if (prop === 'introduction' || prop === 'mdx_docs-WelcomeSection') {
      return {
        id: prop,
        title: "Object-Oriented Programming using Java (PRO192)",
        description: "Welcome to Object-Oriented Programming using Java course. This comprehensive course introduces students to object-oriented programming concepts, Java language fundamentals, and practical programming skills.",
        lastModified: "2024-12-28",
        tableOfContents: [
          { id: "course-overview", title: "Course Overview", level: 2 },
          { id: "learning-outcomes", title: "Learning Outcomes", level: 2 },
          { id: "getting-started", title: "Getting Started", level: 2 }
        ],
        content: `
# Course Overview

This course introduces students to object-oriented programming using the Java programming language. Students will learn fundamental concepts of object-oriented design and implementation.

## Learning Outcomes

- Understand object-oriented programming concepts
- Master Java language syntax and semantics  
- Implement encapsulation, inheritance, and polymorphism
- Work with collections and data structures
- Handle exceptions and file I/O operations
- Build complete Java applications

# Getting Started

Begin your journey with object-oriented programming by exploring the course materials in the sidebar. Each section builds upon previous concepts to provide a comprehensive understanding of Java programming.

Navigate through the course content using the sidebar menu. Start with the Course Overview and Introduction sections to understand the fundamentals.
`
      };
    }
    
    return undefined;
  }
});

export const breadcrumbs = [
  { title: "Docs", href: "#home" },
  { title: "Getting Started", href: "#getting-started" },
  { title: "Introduction", href: "#introduction" }
];
