import { Sidebar } from "@/components/docs/sidebar";
import { MainContent } from "@/components/docs/main-content";
import { TableOfContents } from "@/components/docs/table-of-contents";
import { useTheme } from "@/hooks/use-theme";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

export default function DocsPage() {
  const [location] = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("introduction");
  const { theme } = useTheme();

  useEffect(() => {
    // Extract section from URL hash or path
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
    }
  }, [location]);

  useEffect(() => {
    // Listen to hashchange event to update activeSection
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveSection(hash);
      }
    };
    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

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
    <div className={`${theme} bg-doc-bg text-doc-text antialiased min-h-screen transition-colors duration-200`}>
      <div className="flex min-h-screen">
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={closeSidebar}
          activeSection={activeSection}
        />
        <div className="flex-1 content-area lg:ml-80">
          <div className="flex">
            <MainContent activeSection={activeSection} />
            <TableOfContents activeSection={activeSection} />
          </div>
        </div>
      </div>
    </div>
  );
}
