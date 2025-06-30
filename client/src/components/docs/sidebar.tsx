import { useState } from "react";
import { docSections } from "@/lib/docs-data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection?: string;
}

export function Sidebar({ isOpen, onClose, activeSection = "introduction" }: SidebarProps) {
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set());

  const toggleSection = (sectionId: string) => {
    const newCollapsed = new Set(collapsedSections);
    if (newCollapsed.has(sectionId)) {
      newCollapsed.delete(sectionId);
    } else {
      newCollapsed.add(sectionId);
    }
    setCollapsedSections(newCollapsed);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/70 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`sidebar-mobile fixed inset-y-0 left-0 z-40 w-80 glass-strong border-r border-doc-border transform transition-all duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`} style={{
        top: 0,
        height: '100vh',
        zIndex: 40,
      }}>
        <div className="flex flex-col h-full">
          <nav className="flex-1 overflow-y-auto sidebar-scroll p-4 space-y-1">
            {/* Home Button */}
            <div className="mb-6">
              <a
                href="/"
                className="nav-item flex items-center px-3 py-3 text-sm rounded-md transition-all duration-300 text-doc-text hover:text-doc-primary w-full glass neon-glow"
                onClick={onClose}
              >
                <i className="fas fa-home text-xs mr-3 text-doc-text-muted"></i>
                <span className="font-medium font-orbitron">Home</span>
              </a>
            </div>

            {docSections.map((section) => (
              <div key={section.id} className="mb-6">
                <div className="sidebar-section-header flex items-center justify-between py-3 px-3 text-sm font-medium rounded-md text-doc-text-muted uppercase tracking-wider glass">
                  <span className="font-orbitron">{section.title}</span>
                  {section.collapsible && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-doc-text-muted hover:text-doc-text p-1 neon-glow"
                      onClick={() => toggleSection(section.id)}
                    >
                      <i className={`fas fa-chevron-${collapsedSections.has(section.id) ? 'right' : 'down'} text-xs`}></i>
                    </Button>
                  )}
                </div>
                
                {(!section.collapsible || !collapsedSections.has(section.id)) && (
                  <ul className="space-y-2 mt-3">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={`nav-item flex items-center px-3 py-3 text-sm rounded-md transition-all duration-300 text-doc-text hover:text-doc-primary glass w-full ${
                            activeSection === item.id ? 'active neon-border' : ''
                          }`}
                          onClick={onClose}
                        >
                          <i className={`${item.icon} text-xs mr-3 text-doc-text-muted ${activeSection === item.id ? 'text-doc-accent' : ''}`}></i>
                          <span className="font-medium">{item.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}