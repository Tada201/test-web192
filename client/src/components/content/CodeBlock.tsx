import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  children: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ 
  children, 
  language = "java", 
  title,
  showLineNumbers = true 
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const lines = children.trim().split('\n');

  return (
    <div className="my-6 rounded-lg border border-doc-border bg-doc-surface overflow-hidden glass code-block">
      {title && (
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-800 border-b border-doc-border">
          <span className="text-sm font-medium text-doc-text font-orbitron neon-text">{title}</span>
          <span className="text-xs text-doc-text-muted uppercase tracking-wide font-fira-code">{language}</span>
        </div>
      )}
      
      <div className="relative terminal">
        <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800 border-b border-doc-border">
          <span className="text-xs text-doc-text-muted font-fira-code">{language}</span>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-3 text-xs neon-glow hover:text-doc-primary"
            onClick={copyToClipboard}
          >
            <i className={`fas ${copied ? 'fa-check' : 'fa-copy'} mr-2`}></i>
            {copied ? 'Copied!' : 'Copy'}
          </Button>
        </div>
        
        <div className="overflow-x-auto terminal-content">
          <pre className="p-4 text-sm leading-relaxed">
            <code className="text-doc-text font-fira-code">
              {showLineNumbers ? (
                lines.map((line, index) => (
                  <div key={index} className="flex hover:bg-gray-800/30 transition-colors">
                    <span className="select-none w-8 text-doc-text-muted text-right mr-4 flex-shrink-0 opacity-60">
                      {index + 1}
                    </span>
                    <span className="flex-1 text-neon-green">{line}</span>
                  </div>
                ))
              ) : (
                <span className="text-neon-green">{children}</span>
              )}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}