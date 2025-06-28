import React, { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "./CodeBlock";

interface InteractiveDemoProps {
  title: string;
  description?: string;
  initialCode: string;
  expectedOutput?: string;
  concept: string;
  children?: ReactNode;
}

export function InteractiveDemo({
  title,
  description,
  initialCode,
  expectedOutput,
  concept,
  children,
}: InteractiveDemoProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  return (
    <div className="my-8 border border-doc-border rounded-lg bg-doc-surface overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 bg-doc-hover border-b border-doc-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-doc-text mb-1">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-doc-text-muted">{description}</p>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs px-2 py-1 bg-doc-primary/20 text-doc-primary rounded-full">
              {concept}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-doc-text-muted hover:text-doc-text"
            >
              <i className={`fas fa-chevron-${isExpanded ? "up" : "down"}`}></i>
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      {isExpanded && (
        <div className="p-6">
          {children && (
            <div className="mb-6 text-doc-text-muted leading-relaxed">
              {children}
            </div>
          )}

          {/* Code Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-doc-text">
                Example Code
              </h4>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowOutput(!showOutput)}
                className="text-xs"
              >
                <i className="fas fa-play mr-2"></i>
                {showOutput ? "Hide Output" : "Show Output"}
              </Button>
            </div>

            <CodeBlock language="java">{initialCode}</CodeBlock>
          </div>

          {/* Output Section */}
          {showOutput && expectedOutput && (
            <div className="mb-6">
              <h4 className="text-sm font-medium text-doc-text mb-3">
                Expected Output
              </h4>
              <div className="bg-doc-bg border border-doc-border rounded-lg p-4">
                <pre className="text-sm text-doc-text font-mono whitespace-pre-wrap">
                  {expectedOutput}
                </pre>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
