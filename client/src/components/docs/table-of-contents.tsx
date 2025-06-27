import { useState, useEffect } from "react";
import { docContent } from "@/lib/docs-data";

interface TableOfContentsProps {
  activeSection: string;
}

export function TableOfContents({ activeSection }: TableOfContentsProps) {
  const [activeHeading, setActiveHeading] = useState<string>("");
  const content = docContent[activeSection];

  useEffect(() => {
    const handleScroll = () => {
      const headings = content?.tableOfContents || [];
      const scrollTop = window.scrollY;
      let currentActive = "";

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        const element = document.getElementById(heading.id.toLowerCase().replace(/\s+/g, '-'));
        if (element && scrollTop >= element.offsetTop - 100) {
          currentActive = heading.id;
          break;
        }
      }

      setActiveHeading(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [content]);

  if (!content?.tableOfContents?.length) {
    return null;
  }

  return (
    <aside className="hidden xl:block w-60 flex-shrink-0">
      <div className="sticky top-24 h-fit">
        <div className="px-6 py-4">
          <h3 className="text-sm font-semibold text-doc-text-muted uppercase tracking-wider mb-4">
            On this page
          </h3>
          <nav className="space-y-2">
            {content.tableOfContents.map((item) => {
              const isActive = activeHeading === item.id;
              const href = `#${item.id.toLowerCase().replace(/\s+/g, '-')}`;
              
              return (
                <a
                  key={item.id}
                  href={href}
                  className={`block text-sm py-1 border-l-2 pl-3 transition-colors ${
                    isActive
                      ? 'text-doc-accent border-doc-accent'
                      : 'text-doc-text-muted border-transparent hover:text-doc-accent hover:border-doc-accent'
                  }`}
                >
                  {item.title}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}
