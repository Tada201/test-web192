import React from 'react';
import { MDXProvider } from '@mdx-js/react';

// Custom MDX components for consistent styling
const mdxComponents = {
  h1: (props: React.ComponentPropsWithoutRef<'h1'>) => <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />,
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />,
  h3: (props: React.ComponentPropsWithoutRef<'h3'>) => <h3 className="text-xl font-semibold mt-5 mb-2" {...props} />,
  p: (props: React.ComponentPropsWithoutRef<'p'>) => <p className="mb-4" {...props} />,
  a: (props: React.ComponentPropsWithoutRef<'a'>) => <a className="text-blue-600 underline hover:text-blue-800" {...props} />,
  ul: (props: React.ComponentPropsWithoutRef<'ul'>) => <ul className="list-disc ml-6 mb-4" {...props} />,
  ol: (props: React.ComponentPropsWithoutRef<'ol'>) => <ol className="list-decimal ml-6 mb-4" {...props} />,
  li: (props: React.ComponentPropsWithoutRef<'li'>) => <li className="mb-1" {...props} />,
  table: (props: React.ComponentPropsWithoutRef<'table'>) => <table className="min-w-full border-collapse my-4" {...props} />,
  th: (props: React.ComponentPropsWithoutRef<'th'>) => <th className="border px-2 py-1 bg-gray-100" {...props} />,
  td: (props: React.ComponentPropsWithoutRef<'td'>) => <td className="border px-2 py-1" {...props} />,
};

const SectionMdxRenderer: React.FC<{ sectionId: string }> = () => {
  return (
    <MDXProvider components={mdxComponents}>
      <div className="rounded-lg border border-cyan-400 text-card-foreground shadow-[0_0_8px_2px_#00BFFF] glass bg-doc-surface/50 hover:bg-doc-hover/50 transition-all duration-300 neon-glow group hover:scale-105 max-w-xl mx-auto mb-8 px-6 py-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Course Sections</h2>
        <p className="text-base md:text-lg text-gray-200 text-center mt-2">
          This section is now managed by Docusaurus docs. Please use the sidebar or navigation to access your content.
        </p>
      </div>
    </MDXProvider>
  );
};

export default SectionMdxRenderer;
