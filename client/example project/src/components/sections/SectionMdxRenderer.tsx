import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import MdxStyler from './MdxStyler';
import CopyableCodeBlock from './CopyableCodeBlock';

// Custom MDX components for consistent styling and accessibility
const mdxComponents = {
  h1: (props: React.ComponentPropsWithoutRef<'h1'>) => <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />, 
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />, 
  h3: (props: React.ComponentPropsWithoutRef<'h3'>) => <h3 className="text-xl font-semibold mt-5 mb-2" {...props} />, 
  h4: (props: React.ComponentPropsWithoutRef<'h4'>) => <h4 className="text-lg font-semibold mt-4 mb-2" {...props} />, 
  p: (props: React.ComponentPropsWithoutRef<'p'>) => <p className="mb-4" {...props} />, 
  a: (props: React.ComponentPropsWithoutRef<'a'>) => <a className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400" {...props} />, 
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img className="rounded shadow max-w-full h-auto my-4" loading="lazy" alt={props.alt || ''} {...props} />, 
  ul: (props: React.ComponentPropsWithoutRef<'ul'>) => <ul className="list-disc ml-6 mb-4" {...props} />, 
  ol: (props: React.ComponentPropsWithoutRef<'ol'>) => <ol className="list-decimal ml-6 mb-4" {...props} />, 
  li: (props: React.ComponentPropsWithoutRef<'li'>) => <li className="mb-1" {...props} />, 
  table: (props: React.ComponentPropsWithoutRef<'table'>) => <table className="min-w-full border-collapse my-4" {...props} />, 
  th: (props: React.ComponentPropsWithoutRef<'th'>) => <th className="border px-2 py-1 bg-gray-100 dark:bg-gray-800" {...props} />, 
  td: (props: React.ComponentPropsWithoutRef<'td'>) => <td className="border px-2 py-1" {...props} />, 
  code: (props: React.ComponentPropsWithoutRef<'code'>) => <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 text-sm" {...props} />, 
  pre: (props: React.ComponentPropsWithoutRef<'pre'>) => {
    // Try to extract code and language from children
    const child = props.children;
    // Case 1: <pre><code className="language-xxx">...</code></pre>
    if (
      child &&
      typeof child === 'object' &&
      'props' in child &&
      child.props &&
      typeof child.props.children === 'string'
    ) {
      const className = child.props.className || '';
      const match = className.match(/language-(\w+)/);
      const language = match ? match[1] : 'text';
      return <CopyableCodeBlock language={language}>{child.props.children}</CopyableCodeBlock>;
    }
    // Case 2: <pre>...</pre> with string children
    if (typeof child === 'string') {
      return <CopyableCodeBlock language="text">{child}</CopyableCodeBlock>;
    }
    // Case 3: <pre>...</pre> with array children (e.g., MDX v3)
    if (Array.isArray(child) && child.length === 1 && typeof child[0] === 'string') {
      return <CopyableCodeBlock language="text">{child[0]}</CopyableCodeBlock>;
    }
    // fallback
    return <pre {...props} />;
  },
};

// This component no longer attempts to import or render MDX files directly.
// Please use Docusaurus docs navigation/sidebar to access your MDX content.

const SectionMdxRenderer: React.FC<{ sectionId: string }> = () => {
  return (
    <MDXProvider components={mdxComponents}>
      <MdxStyler>
        <div className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 rounded">
          This section is now managed by Docusaurus docs. Please use the sidebar or navigation to access your content.
        </div>
      </MdxStyler>
    </MDXProvider>
  );
};

export default SectionMdxRenderer;
