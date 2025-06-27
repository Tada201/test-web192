import { useState, useEffect } from "react";
import { docContent, breadcrumbs } from "@/lib/docs-data";
import { Button } from "@/components/ui/button";

interface MainContentProps {
  activeSection: string;
}

export function MainContent({ activeSection }: MainContentProps) {
  const content = docContent[activeSection];
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!content) {
    return (
      <div className="flex-1 min-w-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-doc-text mb-4">Content Not Found</h1>
            <p className="text-doc-text-muted">The requested documentation section could not be found.</p>
          </div>
        </div>
      </div>
    );
  }

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(id);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const renderContent = (content: string) => {
    const sections = content.split('\n# ').filter(Boolean);
    
    return sections.map((section, index) => {
      const lines = section.split('\n');
      const title = lines[0].replace(/^# /, '');
      const body = lines.slice(1).join('\n');
      
      return (
        <section key={index} className="mb-12">
          <h2 id={title.toLowerCase().replace(/\s+/g, '-')} className="text-3xl font-bold text-doc-text mb-6 scroll-mt-24">
            {title}
          </h2>
          <div className="prose-docs">
            {renderMarkdown(body)}
          </div>
        </section>
      );
    });
  };

  const renderMarkdown = (markdown: string) => {
    const lines = markdown.split('\n');
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let inCodeBlock = false;
    let codeContent = '';
    let codeLanguage = '';

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={elements.length} className="space-y-2 mb-6">
            {currentList.map((item, i) => (
              <li key={i} className="flex items-start">
                <i className="fas fa-check-circle text-green-400 mr-3 mt-1"></i>
                <span className="text-doc-text">{item}</span>
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    const flushCodeBlock = () => {
      if (inCodeBlock && codeContent) {
        const codeId = `code-${elements.length}`;
        elements.push(
          <div key={elements.length} className="code-block rounded-lg border border-doc-border p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-doc-text-muted font-mono">{codeLanguage}</span>
              <Button
                variant="ghost"
                size="sm"
                className="px-3 py-1 text-xs bg-doc-hover hover:bg-doc-border"
                onClick={() => copyToClipboard(codeContent, codeId)}
              >
                <i className={`fas ${copiedCode === codeId ? 'fa-check' : 'fa-copy'} mr-1`}></i>
                {copiedCode === codeId ? 'Copied!' : 'Copy'}
              </Button>
            </div>
            <pre className="text-doc-text font-mono text-sm overflow-x-auto">
              <code>{codeContent}</code>
            </pre>
          </div>
        );
        codeContent = '';
        inCodeBlock = false;
      }
    };

    lines.forEach((line, index) => {
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          flushCodeBlock();
        } else {
          flushList();
          codeLanguage = line.replace('```', '') || 'bash';
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeContent += (codeContent ? '\n' : '') + line;
        return;
      }

      if (line.startsWith('- **') || line.startsWith('- ⭐') || line.startsWith('- 🍴') || line.startsWith('- Language:')) {
        const content = line.replace(/^- (\*\*.*?\*\*: |⭐ |🍴 |Language: )/, '').replace(/\*\*(.*?)\*\*/g, '$1');
        currentList.push(content);
        return;
      }

      if (line.trim() === '' && currentList.length === 0) {
        return;
      }

      flushList();

      if (line.startsWith('## ')) {
        elements.push(
          <h3 key={elements.length} className="text-xl font-semibold text-doc-text mt-8 mb-4">
            {line.replace('## ', '')}
          </h3>
        );
      } else if (line.startsWith('> **')) {
        const content = line.replace('> **Tip**: ', '');
        elements.push(
          <div key={elements.length} className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <i className="fas fa-info-circle text-blue-400 mr-3 mt-1"></i>
              <div>
                <p className="text-blue-200 font-medium mb-1">Tip</p>
                <p className="text-blue-100 text-sm">{content}</p>
              </div>
            </div>
          </div>
        );
      } else if (line.trim()) {
        elements.push(
          <p key={elements.length} className="text-doc-text-muted mb-4 leading-relaxed">
            {line}
          </p>
        );
      }
    });

    flushList();
    flushCodeBlock();

    return elements;
  };

  return (
    <main className="flex-1 min-w-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-doc-text-muted">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && <i className="fas fa-chevron-right text-xs mx-2"></i>}
                <a href={crumb.href} className="hover:text-doc-text transition-colors">
                  {crumb.title}
                </a>
              </div>
            ))}
          </ol>
        </nav>

        {/* Article Content */}
        <article className="prose-docs max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-doc-text mb-4">{content.title}</h1>
            {content.description && (
              <p className="text-xl text-doc-text-muted leading-relaxed">
                {content.description.split('**').map((part, index) => 
                  index % 2 === 1 ? <strong key={index} className="text-doc-text">{part}</strong> : part
                )}
              </p>
            )}
          </header>

          {renderContent(content.content)}

          {/* Edit Page Footer */}
          <footer className="mt-12 pt-8 border-t border-doc-border">
            <div className="flex items-center justify-between">
              <a
                href="https://github.com/myproject/docs"
                className="flex items-center text-doc-text-muted hover:text-doc-text transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-edit mr-2"></i>
                Edit this page on GitHub →
              </a>
              <div className="text-xs text-doc-text-muted">
                Last updated: <span>{content.lastModified}</span>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </main>
  );
}
