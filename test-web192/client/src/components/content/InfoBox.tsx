import { ReactNode } from "react";

interface InfoBoxProps {
  type?: "info" | "warning" | "tip" | "note" | "danger";
  title?: string;
  children: ReactNode;
}

const typeConfig = {
  info: {
    icon: "fas fa-info-circle",
    bgColor: "bg-blue-900/20",
    borderColor: "border-blue-700/30",
    iconColor: "text-blue-400",
    titleColor: "text-blue-200",
    textColor: "text-blue-100"
  },
  warning: {
    icon: "fas fa-exclamation-triangle",
    bgColor: "bg-yellow-900/20",
    borderColor: "border-yellow-700/30",
    iconColor: "text-yellow-400",
    titleColor: "text-yellow-200",
    textColor: "text-yellow-100"
  },
  tip: {
    icon: "fas fa-lightbulb",
    bgColor: "bg-green-900/20",
    borderColor: "border-green-700/30",
    iconColor: "text-green-400",
    titleColor: "text-green-200",
    textColor: "text-green-100"
  },
  note: {
    icon: "fas fa-sticky-note",
    bgColor: "bg-purple-900/20",
    borderColor: "border-purple-700/30",
    iconColor: "text-purple-400",
    titleColor: "text-purple-200",
    textColor: "text-purple-100"
  },
  danger: {
    icon: "fas fa-exclamation-circle",
    bgColor: "bg-red-900/20",
    borderColor: "border-red-700/30",
    iconColor: "text-red-400",
    titleColor: "text-red-200",
    textColor: "text-red-100"
  }
};

export function InfoBox({ type = "info", title, children }: InfoBoxProps) {
  const config = typeConfig[type];
  const defaultTitle = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div className={`${config.bgColor} ${config.borderColor} border rounded-lg p-4 my-6`}>
      <div className="flex items-start space-x-3">
        <i className={`${config.icon} ${config.iconColor} mt-1 flex-shrink-0`}></i>
        <div className="flex-1">
          <h4 className={`${config.titleColor} font-medium mb-2`}>
            {title || defaultTitle}
          </h4>
          <div className={`${config.textColor} text-sm leading-relaxed`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}