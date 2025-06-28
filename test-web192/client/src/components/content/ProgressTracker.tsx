import React, { useState, useEffect } from "react";

interface ProgressStep {
  id: string;
  title: string;
  description: string;
  completed?: boolean;
}

interface ProgressTrackerProps {
  title: string;
  steps: ProgressStep[];
  onStepToggle?: (stepId: string, completed: boolean) => void;
}

export function ProgressTracker({
  title,
  steps,
  onStepToggle,
}: ProgressTrackerProps) {
  const [stepStates, setStepStates] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem(
      `progress-${title.toLowerCase().replace(/\s+/g, "-")}`,
    );
    return saved ? JSON.parse(saved) : {};
  });

  const completedCount = Object.values(stepStates).filter(Boolean).length;
  const totalCount = steps.length;
  const progressPercentage =
    totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  useEffect(() => {
    localStorage.setItem(
      `progress-${title.toLowerCase().replace(/\s+/g, "-")}`,
      JSON.stringify(stepStates),
    );
  }, [stepStates, title]);

  const toggleStep = (stepId: string) => {
    const newCompleted = !stepStates[stepId];
    setStepStates((prev) => ({
      ...prev,
      [stepId]: newCompleted,
    }));
    onStepToggle?.(stepId, newCompleted);
  };

  return (
    <div className="my-8 border border-doc-border rounded-lg bg-doc-surface p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-doc-text">{title}</h3>
          <span className="text-sm text-doc-text-muted">
            {completedCount}/{totalCount} completed
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-doc-hover rounded-full h-2">
          <div
            className="bg-doc-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-3">
        {steps.map((step, index) => {
          const isCompleted = stepStates[step.id] || false;

          return (
            <div
              key={step.id}
              className={`flex items-start space-x-3 p-3 rounded-lg border transition-colors cursor-pointer ${
                isCompleted
                  ? "bg-green-900/10 border-green-700/30"
                  : "bg-doc-hover border-doc-border hover:bg-doc-bg"
              }`}
              onClick={() => toggleStep(step.id)}
            >
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  isCompleted
                    ? "bg-green-500 border-green-500"
                    : "border-doc-border bg-doc-surface"
                }`}
              >
                {isCompleted && (
                  <i className="fas fa-check text-white text-xs"></i>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h4
                  className={`font-medium ${isCompleted ? "text-green-200" : "text-doc-text"}`}
                >
                  {step.title}
                </h4>
                <p
                  className={`text-sm mt-1 ${isCompleted ? "text-green-300" : "text-doc-text-muted"}`}
                >
                  {step.description}
                </p>
              </div>

              <div className="text-xs text-doc-text-muted flex-shrink-0">
                Step {index + 1}
              </div>
            </div>
          );
        })}
      </div>

      {completedCount === totalCount && totalCount > 0 && (
        <div className="mt-6 p-4 bg-green-900/20 border border-green-700/30 rounded-lg">
          <div className="flex items-center space-x-3">
            <i className="fas fa-trophy text-yellow-400 text-xl"></i>
            <div>
              <h4 className="text-green-200 font-medium">Congratulations!</h4>
              <p className="text-green-300 text-sm">
                You've completed all steps in this section.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
