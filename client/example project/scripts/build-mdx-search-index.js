// This script updates the search index to include all MDX files in the docs/ directory for Docusaurus compatibility.
// It uses gray-matter to parse frontmatter and extracts text for search indexing.

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_DIR = path.join(__dirname, '..', 'docs');
const MDX_DOCS_DIR = path.join(DOCS_DIR, 'Syllabus_mat');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const INDEX_PATH = path.join(PUBLIC_DIR, 'search-index.json');

function extractTextFromMDX(mdxContent) {
  // Remove code blocks, JSX, and markdown syntax for a simple text index
  return mdxContent
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/<[^>]+>/g, '') // Remove JSX/HTML tags
    .replace(/[#>*`{}\[\]()\-!]/g, '') // Remove markdown
    .replace(/\n{2,}/g, '\n') // Collapse multiple newlines
    .trim();
}

function getAllMDXFiles(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(getAllMDXFiles(fullPath));
    } else if (file.endsWith('.mdx')) {
      files.push(fullPath);
    }
  });
  return files;
}

function buildSearchIndex() {
  const searchContent = [];

  // Add MDX files from docs/Syllabus_mat/
  const mdxFiles = getAllMDXFiles(MDX_DOCS_DIR);
  mdxFiles.forEach(filePath => {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);
    const text = extractTextFromMDX(content);
    searchContent.push({
      id: path.basename(filePath, '.mdx'),
      title: data.title || text.split('\n')[0] || 'Untitled',
      content: text,
      url: '/docs/Syllabus_mat/' + path.basename(filePath, '.mdx'),
      category: data.category || 'reference',
      tags: data.tags || [],
      difficulty: data.difficulty || 'Beginner',
      description: data.description || ''
    });
  });

  // Optionally, merge with existing hardcoded content if needed

  // Write the search index
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }
  fs.writeFileSync(INDEX_PATH, JSON.stringify({ documents: searchContent }, null, 2));
  console.log(`✅ MDX search index built: ${searchContent.length} documents`);
}

buildSearchIndex();
