import { useState } from 'react';
import { Settings, X, Palette, Type, Eye, Globe, Volume2 } from 'lucide-react';
import { useSettings, darkThemes, lightThemes } from '../contexts/SettingsContext';
import { Button } from '@/components/ui/button';

interface SettingsMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsMenu({ isOpen, onClose }: SettingsMenuProps) {
  const { settings, updateSettings, setTheme, setColorScheme } = useSettings();
  const [activeTab, setActiveTab] = useState('appearance');

  if (!isOpen) return null;

  const tabs = [
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'typography', label: 'Typography', icon: Type },
    { id: 'accessibility', label: 'Accessibility', icon: Eye },
    { id: 'language', label: 'Language', icon: Globe },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white dark:bg-gray-800 w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <Settings size={24} className="text-doc-primary" />
            <h2 className="text-xl font-semibold text-doc-text">Settings</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-doc-text-muted hover:text-doc-text transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex h-96">
          {/* Sidebar */}
          <div className="w-64 bg-doc-hover border-r dark:border-gray-700 p-4">
            <nav className="space-y-1">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-doc-primary text-white'
                        : 'text-doc-text-muted hover:text-doc-text hover:bg-doc-bg'
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
            {activeTab === 'appearance' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-doc-text mb-4">Theme</h3>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setTheme('light')}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-md border transition-colors ${
                        settings.theme === 'light'
                          ? 'border-doc-primary bg-doc-primary/10 text-doc-primary'
                          : 'border-doc-border text-doc-text-muted hover:border-doc-primary/50'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white border rounded"></div>
                      <span>Light</span>
                    </button>
                    <button
                      onClick={() => setTheme('dark')}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-md border transition-colors ${
                        settings.theme === 'dark'
                          ? 'border-doc-primary bg-doc-primary/10 text-doc-primary'
                          : 'border-doc-border text-doc-text-muted hover:border-doc-primary/50'
                      }`}
                    >
                      <div className="w-4 h-4 bg-gray-800 border rounded"></div>
                      <span>Dark</span>
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-doc-text mb-4">
                    {settings.theme === 'dark' ? 'Dark' : 'Light'} Theme Variants
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {(settings.theme === 'dark' ? darkThemes : lightThemes).map(theme => (
                      <button
                        key={theme}
                        onClick={() => setColorScheme(theme)}
                        className={`p-3 rounded-md border text-left transition-colors ${
                          (settings.theme === 'dark' ? settings.darkTheme : settings.lightTheme) === theme
                            ? 'border-doc-primary bg-doc-primary/10'
                            : 'border-doc-border hover:border-doc-primary/50'
                        }`}
                      >
                        <div className="font-medium text-doc-text capitalize">
                          {theme.replace('-', ' ')}
                        </div>
                        <div className="text-sm text-doc-text-muted mt-1">
                          {theme === 'modern-dark' && 'Clean and modern dark theme'}
                          {theme === 'blue-professional' && 'Professional blue accent'}
                          {theme === 'deep-purple' && 'Rich purple tones'}
                          {theme === 'light-minimal' && 'Clean minimal light theme'}
                          {theme === 'light-warm' && 'Warm light colors'}
                          {theme === 'light-cool' && 'Cool light tones'}
                          {theme === 'pastel' && 'Soft pastel colors'}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'typography' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-doc-text mb-4">Text Size</h3>
                  <div className="flex space-x-4">
                    {['small', 'medium', 'large'].map(size => (
                      <button
                        key={size}
                        onClick={() => updateSettings({ textSize: size as any })}
                        className={`px-4 py-2 rounded-md border transition-colors capitalize ${
                          settings.textSize === size
                            ? 'border-doc-primary bg-doc-primary/10 text-doc-primary'
                            : 'border-doc-border text-doc-text-muted hover:border-doc-primary/50'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-doc-text mb-4">Font Family</h3>
                  <div className="space-y-2">
                    {[
                      { id: 'open_sans', name: 'Open Sans', desc: 'Clean and readable' },
                      { id: 'pt_serif', name: 'PT Serif', desc: 'Traditional serif font' },
                      { id: 'opendyslexic-regular', name: 'OpenDyslexic', desc: 'Designed for dyslexia' },
                      { id: 'opendyslexic-bold', name: 'OpenDyslexic Bold', desc: 'Bold dyslexia-friendly' },
                    ].map(font => (
                      <button
                        key={font.id}
                        onClick={() => updateSettings({ fontStyle: font.id as any })}
                        className={`w-full p-3 rounded-md border text-left transition-colors ${
                          settings.fontStyle === font.id
                            ? 'border-doc-primary bg-doc-primary/10'
                            : 'border-doc-border hover:border-doc-primary/50'
                        }`}
                      >
                        <div className="font-medium text-doc-text">{font.name}</div>
                        <div className="text-sm text-doc-text-muted">{font.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'accessibility' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-doc-text mb-4">Contrast</h3>
                  <div className="flex space-x-4">
                    {['normal', 'high'].map(contrast => (
                      <button
                        key={contrast}
                        onClick={() => updateSettings({ contrast: contrast as any })}
                        className={`px-4 py-2 rounded-md border transition-colors capitalize ${
                          settings.contrast === contrast
                            ? 'border-doc-primary bg-doc-primary/10 text-doc-primary'
                            : 'border-doc-border text-doc-text-muted hover:border-doc-primary/50'
                        }`}
                      >
                        {contrast}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-doc-text mb-4">Color Blindness Support</h3>
                  <div className="space-y-2">
                    {[
                      { id: 'none', name: 'None', desc: 'Standard colors' },
                      { id: 'protanopia', name: 'Protanopia', desc: 'Red-blind support' },
                      { id: 'deuteranopia', name: 'Deuteranopia', desc: 'Green-blind support' },
                      { id: 'tritanopia', name: 'Tritanopia', desc: 'Blue-blind support' },
                    ].map(mode => (
                      <button
                        key={mode.id}
                        onClick={() => updateSettings({ colorBlindnessMode: mode.id as any })}
                        className={`w-full p-3 rounded-md border text-left transition-colors ${
                          settings.colorBlindnessMode === mode.id
                            ? 'border-doc-primary bg-doc-primary/10'
                            : 'border-doc-border hover:border-doc-primary/50'
                        }`}
                      >
                        <div className="font-medium text-doc-text">{mode.name}</div>
                        <div className="text-sm text-doc-text-muted">{mode.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'language' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-doc-text mb-4">Interface Language</h3>
                  <div className="space-y-2">
                    {[
                      { id: 'en', name: 'English', flag: '🇺🇸' },
                      { id: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
                    ].map(lang => (
                      <button
                        key={lang.id}
                        onClick={() => updateSettings({ language: lang.id as any })}
                        className={`w-full p-3 rounded-md border text-left transition-colors ${
                          settings.language === lang.id
                            ? 'border-doc-primary bg-doc-primary/10'
                            : 'border-doc-border hover:border-doc-primary/50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{lang.flag}</span>
                          <span className="font-medium text-doc-text">{lang.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t dark:border-gray-700 bg-doc-hover">
          <div className="flex justify-end space-x-3">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}