import React from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

interface HighlightedCodeProps {
  code: string;
  language?: string;
}

export const HighlightedCode: React.FC<HighlightedCodeProps> = ({ code, language = "java" }) => {
  const ref = React.useRef<HTMLPreElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current.querySelector("code")!);
    }
  }, [code, language]);

  return (
    <pre ref={ref} className={`language-${language} rounded-lg p-4 text-sm leading-relaxed bg-[#2d2d2d] text-white`}>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};
