import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useTheme } from "@/hooks/use-theme";
import { Sidebar } from "@/components/docs/sidebar";
import { MainContent } from "@/components/docs/main-content";
import { TableOfContents } from "@/components/docs/table-of-contents";

export default function DocsPage() {
  const [location] = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("introduction");
  const { theme } = useTheme();

  useEffect(() => {
    // Extract section from URL hash or path
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveSection(hash);
    }
  }, [location]);

  useEffect(() => {
    // Close sidebar when route changes (mobile)
    setIsSidebarOpen(false);
  }, [location]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div
      className={`${theme} bg-doc-bg text-doc-text antialiased min-h-screen transition-colors duration-200 pt-16`}
    >
      <div className="flex min-h-screen">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
          activeSection={activeSection}
        />

        <div className="flex-1 lg:ml-0">
          <div className="flex">
            <MainContent activeSection={activeSection} />
            <TableOfContents activeSection={activeSection} />
          </div>
        </div>
      </div>
    </div>
  );
}
