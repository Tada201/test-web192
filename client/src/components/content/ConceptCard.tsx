import { ReactNode } from "react";

interface ConceptCardProps {
  title: string;
  icon?: string;
  children: ReactNode;
  difficulty?: "beginner" | "intermediate" | "advanced";
}

const difficultyConfig = {
  beginner: {
    color: "text-green-400",
    bgColor: "bg-green-900/10",
    borderColor: "border-green-700/20"
  },
  intermediate: {
    color: "text-yellow-400",
    bgColor: "bg-yellow-900/10",
    borderColor: "border-yellow-700/20"
  },
  advanced: {
    color: "text-red-400",
    bgColor: "bg-red-900/10",
    borderColor: "border-red-700/20"
  }
};

export function ConceptCard({ title, icon = "fas fa-cube", children, difficulty }: ConceptCardProps) {
  const diffConfig = difficulty ? difficultyConfig[difficulty] : null;

  return (
    <div className={`border border-doc-border rounded-lg p-6 my-6 bg-doc-surface hover:bg-doc-hover transition-colors ${diffConfig?.borderColor || ''}`}>
      <div className="flex items-start space-x-4">
        <div className={`w-12 h-12 rounded-lg bg-doc-primary/20 flex items-center justify-center flex-shrink-0 ${diffConfig?.bgColor || ''}`}>
          <i className={`${icon} text-doc-primary text-lg ${diffConfig?.color || ''}`}></i>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold text-doc-text">{title}</h3>
            {difficulty && (
              <span className={`text-xs px-2 py-1 rounded-full ${diffConfig?.bgColor} ${diffConfig?.color} border ${diffConfig?.borderColor}`}>
                {difficulty}
              </span>
            )}
          </div>
          <div className="text-doc-text-muted leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}