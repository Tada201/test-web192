import React, { useState } from "react";
import {
  Settings,
  X,
  Palette,
  Type,
  Eye,
  Globe,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";

interface SettingsMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsMenu({ isOpen, onClose }: SettingsMenuProps) {
  const { theme, toggleTheme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("appearance");

  if (!isOpen) return null;

  const tabs = [
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "typography", label: "Typography", icon: Type },
    { id: "accessibility", label: "Accessibility", icon: Eye },
    { id: "language", label: "Language", icon: Globe },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-doc-surface w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden border border-doc-border">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-doc-border bg-doc-hover">
          <div className="flex items-center space-x-3">
            <Settings size={24} className="text-doc-accent" />
            <h2 className="text-xl font-semibold text-doc-text">Settings</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-doc-text-muted hover:text-doc-text hover:bg-doc-surface transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex h-96">
          {/* Sidebar */}
          <div className="w-64 bg-doc-surface border-r border-doc-border p-4">
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors ${
                      activeTab === tab.id
                        ? "bg-doc-accent text-white"
                        : "text-doc-text-muted hover:text-doc-text hover:bg-doc-hover"
                    }`}
                  >
                    <Icon size={18} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {activeTab === "appearance" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-doc-text mb-4">
                    Theme
                  </h3>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setTheme("light")}
                      className={`flex items-center space-x-3 px-6 py-3 rounded-lg border transition-all duration-200 ${
                        theme === "light"
                          ? "border-doc-accent bg-doc-accent/10 text-doc-accent shadow-lg"
                          : "border-doc-border text-doc-text-muted hover:border-doc-accent/50 hover:bg-doc-hover"
                      }`}
                    >
                      <Sun size={18} />
                      <span className="font-medium">Light Mode</span>
                    </button>
                    <button
                      onClick={() => setTheme("dark")}
                      className={`flex items-center space-x-3 px-6 py-3 rounded-lg border transition-all duration-200 ${
                        theme === "dark"
                          ? "border-doc-accent bg-doc-accent/10 text-doc-accent shadow-lg"
                          : "border-doc-border text-doc-text-muted hover:border-doc-accent/50 hover:bg-doc-hover"
                      }`}
                    >
                      <Moon size={18} />
                      <span className="font-medium">Dark Mode</span>
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-doc-text mb-4">
                    Theme Preview
                  </h3>
                  <div className="p-4 rounded-lg border border-doc-border bg-doc-hover">
                    <div className="text-doc-text font-medium mb-2">
                      Current Theme: {theme === "dark" ? "Dark" : "Light"}
                    </div>
                    <div className="text-doc-text-muted text-sm">
                      {theme === "dark"
                        ? "Modern dark theme with high contrast and reduced eye strain"
                        : "Clean light theme with excellent readability and accessibility"}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "typography" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-doc-text mb-4">
                    Typography Settings
                  </h3>
                  <div className="p-4 rounded-lg border border-doc-border bg-doc-hover">
                    <div className="text-doc-text font-medium mb-2">
                      Font Configuration
                    </div>
                    <div className="text-doc-text-muted text-sm">
                      The site uses Inter font for optimal readability and
                      modern appearance. Additional typography customization
                      will be available in future updates.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "accessibility" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-doc-text mb-4">
                    Accessibility Features
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border border-doc-border bg-doc-hover">
                      <div className="text-doc-text font-medium mb-2">
                        High Contrast
                      </div>
                      <div className="text-doc-text-muted text-sm">
                        The {theme} theme provides optimal contrast ratios for
                        improved readability.
                      </div>
                    </div>
                    <div className="p-4 rounded-lg border border-doc-border bg-doc-hover">
                      <div className="text-doc-text font-medium mb-2">
                        Keyboard Navigation
                      </div>
                      <div className="text-doc-text-muted text-sm">
                        Full keyboard navigation support with Tab, Enter, and
                        Escape keys.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "language" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-doc-text mb-4">
                    Language Settings
                  </h3>
                  <div className="p-4 rounded-lg border border-doc-border bg-doc-hover">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl">🇺🇸</span>
                      <div className="text-doc-text font-medium">English</div>
                    </div>
                    <div className="text-doc-text-muted text-sm">
                      Currently using English. Additional language support will
                      be available in future updates.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-doc-border bg-doc-surface">
          <div className="flex justify-between items-center">
            <div className="text-sm text-doc-text-muted">
              Theme changes are applied immediately
            </div>
            <Button
              variant="outline"
              onClick={onClose}
              className="border-doc-border text-doc-text hover:bg-doc-hover"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
