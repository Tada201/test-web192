import React from 'react';

/**
 * MdxStyler wraps MDX content to apply consistent layout, spacing, theme, and typography classes.
 * Now uses Tailwind Typography for rich MDX rendering and adapts to light/dark themes.
 */
const MdxStyler: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="prose prose-blue max-w-none p-4 sm:p-6 md:p-8 mb-4 bg-white dark:bg-gray-900 dark:prose-invert rounded shadow transition-colors">
    {children}
  </div>
);

export default MdxStyler;
