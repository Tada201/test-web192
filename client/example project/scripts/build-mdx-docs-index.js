// Script to build a JSON index of all MDX files in docs/Syllabus_mat for direct client-side text search
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MDX_DOCS_DIRS = [
  path.join(__dirname, '..', 'src', 'components', 'sections', 'mdx_docs')
];
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const INDEX_PATH = path.join(PUBLIC_DIR, 'mdx_docs_index.json');

function getAllMDXFiles(dirs) {
  let files = [];
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(file => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        files = files.concat(getAllMDXFiles([fullPath]));
      } else if (file.endsWith('.mdx')) {
        files.push(fullPath);
      }
    });
  });
  return files;
}

function buildMDXDocsIndex() {
  const docs = [];
  const mdxFiles = getAllMDXFiles(MDX_DOCS_DIRS);
  mdxFiles.forEach(filePath => {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);
    docs.push({
      id: path.basename(filePath, '.mdx'),
      filename: path.basename(filePath),
      relPath: filePath,
      title: data.title || '',
      frontmatter: data,
      content,
    });
  });
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }
  fs.writeFileSync(INDEX_PATH, JSON.stringify(docs, null, 2));
  console.log(`✅ MDX docs index built: ${docs.length} files`);
}

buildMDXDocsIndex();
