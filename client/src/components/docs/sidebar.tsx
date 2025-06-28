import React, { useState } from "react";
import { docSections } from "@/lib/docs-data";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "wouter";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection?: string;
}

export function Sidebar({
  isOpen,
  onClose,
  activeSection = "introduction",
}: SidebarProps) {
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(
    new Set(),
  );

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
          className="fixed inset-0 z-30 bg-black/50 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`sidebar-mobile fixed lg:static inset-y-0 left-0 z-40 w-80 bg-white dark:bg-doc-bg border-r border-doc-border transform transition-transform duration-300 ease-in-out pt-16 lg:pt-0 shadow-lg lg:shadow-none ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          <nav className="flex-1 overflow-y-auto sidebar-scroll p-4 space-y-1">
            {/* Home Button */}
            <div className="mb-6">
              <Link href="/">
                <button
                  className="nav-item flex items-center px-3 py-2 text-sm rounded-md transition-colors text-gray-800 dark:text-doc-text hover:bg-gray-100 dark:hover:bg-doc-hover w-full"
                  onClick={onClose}
                >
                  <i className="fas fa-home text-xs mr-3 text-gray-600 dark:text-doc-text-muted"></i>
                  <span className="font-medium">Home</span>
                </button>
              </Link>
            </div>

            {docSections.map((section) => (
              <div key={section.id} className="mb-6">
                <div className="sidebar-section-header flex items-center justify-between py-2 px-3 text-sm font-medium bg-gray-100 dark:bg-doc-surface rounded-md text-gray-700 dark:text-doc-text-muted uppercase tracking-wider">
                  <span>{section.title}</span>
                  {section.collapsible && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-600 dark:text-doc-text-muted hover:text-gray-900 dark:hover:text-doc-text p-1"
                      onClick={() => toggleSection(section.id)}
                    >
                      <i
                        className={`fas fa-chevron-${collapsedSections.has(section.id) ? "right" : "down"} text-xs`}
                      ></i>
                    </Button>
                  )}
                </div>

                {(!section.collapsible ||
                  !collapsedSections.has(section.id)) && (
                  <ul className="space-y-1 mt-2">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.href}
                          className={`nav-item flex items-center px-3 py-2 text-sm rounded-md transition-colors text-gray-800 dark:text-doc-text hover:bg-gray-100 dark:hover:bg-doc-hover ${
                            activeSection === item.id
                              ? "active bg-blue-50 dark:bg-doc-hover text-blue-700 dark:text-doc-accent"
                              : ""
                          }`}
                          onClick={onClose}
                        >
                          <i
                            className={`${item.icon} text-xs mr-3 text-gray-600 dark:text-doc-text-muted ${activeSection === item.id ? "text-blue-600 dark:text-doc-accent" : ""}`}
                          ></i>
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
