import { ReactNode } from "react";

export interface CodeBlockProps {
  children: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

export interface InfoBoxProps {
  type?: "info" | "warning" | "tip" | "note" | "danger";
  title?: string;
  children: ReactNode;
}

export interface ConceptCardProps {
  title: string;
  icon?: string;
  children: ReactNode;
  difficulty?: "beginner" | "intermediate" | "advanced";
}

export interface InteractiveDemoProps {
  title: string;
  description?: string;
  initialCode: string;
  expectedOutput?: string;
  concept: string;
  children?: ReactNode;
}

export interface ProgressStep {
  id: string;
  title: string;
  description: string;
  completed?: boolean;
}

export interface ProgressTrackerProps {
  title: string;
  steps: ProgressStep[];
  onStepToggle?: (stepId: string, completed: boolean) => void;
}