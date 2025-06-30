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
    borderColor: "border-blue-400/30",
    iconColor: "text-blue-400",
    titleColor: "text-blue-300",
    textColor: "text-blue-100",
    glowColor: "rgba(59, 130, 246, 0.3)"
  },
  warning: {
    icon: "fas fa-exclamation-triangle",
    bgColor: "bg-yellow-900/20",
    borderColor: "border-yellow-400/30",
    iconColor: "text-yellow-400",
    titleColor: "text-yellow-300",
    textColor: "text-yellow-100",
    glowColor: "rgba(251, 191, 36, 0.3)"
  },
  tip: {
    icon: "fas fa-lightbulb",
    bgColor: "bg-green-900/20",
    borderColor: "border-green-400/30",
    iconColor: "text-green-400",
    titleColor: "text-green-300",
    textColor: "text-green-100",
    glowColor: "rgba(34, 197, 94, 0.3)"
  },
  note: {
    icon: "fas fa-sticky-note",
    bgColor: "bg-purple-900/20",
    borderColor: "border-purple-400/30",
    iconColor: "text-purple-400",
    titleColor: "text-purple-300",
    textColor: "text-purple-100",
    glowColor: "rgba(147, 51, 234, 0.3)"
  },
  danger: {
    icon: "fas fa-exclamation-circle",
    bgColor: "bg-red-900/20",
    borderColor: "border-red-400/30",
    iconColor: "text-red-400",
    titleColor: "text-red-300",
    textColor: "text-red-100",
    glowColor: "rgba(239, 68, 68, 0.3)"
  }
};

export function InfoBox({ type = "info", title, children }: InfoBoxProps) {
  const config = typeConfig[type];
  const defaultTitle = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div 
      className={`${config.bgColor} ${config.borderColor} border rounded-lg p-4 my-6 glass transition-all duration-300 hover:shadow-lg`}
      style={{
        boxShadow: `0 0 20px ${config.glowColor}, inset 0 1px 0 rgba(255, 255, 255, 0.1)`
      }}
    >
      <div className="flex items-start space-x-3">
        <i className={`${config.icon} ${config.iconColor} mt-1 flex-shrink-0 text-lg`} 
           style={{ filter: `drop-shadow(0 0 5px ${config.glowColor})` }}></i>
        <div className="flex-1">
          <h4 className={`${config.titleColor} font-medium mb-2 font-orbitron`}>
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