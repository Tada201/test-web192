import { useState, useEffect } from 'react';
import { Settings, X, Palette, Type, Eye, Globe, Volume2 } from 'lucide-react';
import { useSettings, darkThemes, lightThemes } from '../contexts/SettingsContext';
import { Button } from '@/components/ui/button';
import { CustomSwitch } from '@/components/ui/custom-switch';
import { uiStrings } from '../data/uiStrings';

interface SettingsMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsMenu({ isOpen, onClose }: SettingsMenuProps) {
  const { settings, updateSettings, setTheme, setColorScheme } = useSettings();
  const [activeTab, setActiveTab] = useState('appearance');

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const lang = settings.language;

  const tabs = [
    { id: 'appearance', label: lang === 'vi' ? 'Giao diện' : 'Appearance', icon: Palette },
    { id: 'typography', label: lang === 'vi' ? 'Kiểu chữ' : 'Typography', icon: Type },
    { id: 'accessibility', label: lang === 'vi' ? 'Trợ năng' : 'Accessibility', icon: Eye },
    { id: 'language', label: lang === 'vi' ? 'Ngôn ngữ' : 'Language', icon: Globe },
  ];

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        overflow: 'hidden',
        touchAction: 'none',
        overscrollBehavior: 'none'
      }}
    >
      {/* Modal Overlay - Prevents all background interaction */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          touchAction: 'none',
          overscrollBehavior: 'none'
        }}
      />
      
      {/* Modal Content */}
      <div 
        className="relative glass-strong w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden border border-doc-border"
        style={{ 
          position: 'relative',
          maxHeight: '90vh',
          touchAction: 'auto',
          zIndex: 1
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-doc-border glass">
          <div className="flex items-center space-x-3">
            <Settings size={24} className="text-doc-primary" />
            <h2 className="text-xl font-semibold text-doc-text font-orbitron">{uiStrings[lang].settings}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-doc-text-muted hover:text-doc-text transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex" style={{ height: '400px' }}>
          {/* Sidebar */}
          <div className="w-64 glass border-r border-doc-border p-4 overflow-y-auto">
            <nav className="space-y-1">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-3 rounded-md text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-doc-primary/20 text-doc-primary'
                        : 'text-doc-text-muted hover:text-doc-text hover:bg-doc-hover'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{tab.label}</span>
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
                  <h3 className="text-lg font-medium text-doc-text mb-4 font-orbitron">Theme</h3>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setTheme('light')}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-md border transition-colors ${
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
                      className={`flex items-center space-x-2 px-4 py-3 rounded-md border transition-colors ${
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
                  <h3 className="text-lg font-medium text-doc-text mb-4 font-orbitron">
                    {settings.theme === 'dark' ? 'Dark' : 'Light'} Theme Variants
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {(settings.theme === 'dark' ? darkThemes : lightThemes).map(theme => (
                      <button
                        key={theme}
                        onClick={() => setColorScheme(theme)}
                        className={`p-3 rounded-md border text-left transition-colors glass ${
                          (settings.theme === 'dark' ? settings.darkTheme : settings.lightTheme) === theme
                            ? 'border-doc-primary bg-doc-primary/10'
                            : 'border-doc-border hover:border-doc-primary/50'
                        }`}
                      >
                        <div className="font-medium text-doc-text capitalize font-orbitron">
                          {theme.replace('-', ' ')}
                        </div>
                        <div className="text-sm text-doc-text-muted mt-1">
                          {theme === 'modern-dark' && uiStrings[lang].themeVariants.modernDark}
                          {theme === 'blue-professional' && uiStrings[lang].themeVariants.blueProfessional}
                          {theme === 'deep-purple' && uiStrings[lang].themeVariants.deepPurple}
                          {theme === 'cyberpunk-blue' && uiStrings[lang].themeVariants.cyberpunkBlue}
                          {theme === 'cyberpunk-purple' && uiStrings[lang].themeVariants.cyberpunkPurple}
                          {theme === 'cyberpunk-green' && uiStrings[lang].themeVariants.cyberpunkGreen}
                          {theme === 'light-minimal' && uiStrings[lang].themeVariants.lightMinimal}
                          {theme === 'light-warm' && uiStrings[lang].themeVariants.lightWarm}
                          {theme === 'light-cool' && uiStrings[lang].themeVariants.lightCool}
                          {theme === 'pastel' && uiStrings[lang].themeVariants.pastel}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-doc-text mb-4 font-orbitron">Background Animation</h3>
                  <div className="flex items-center justify-between p-4 rounded-md border border-doc-border glass">
                    <div>
                  <div className="font-medium text-doc-text">{uiStrings[lang].enableParticleAnimation}</div>
                  <div className="text-sm text-doc-text-muted mt-1">
                    Interactive background particles with mouse interaction
                  </div>
                </div>
                <CustomSwitch
                  checked={settings.backgroundAnimation}
                  onCheckedChange={(checked) => updateSettings({ backgroundAnimation: checked })}
                />
              </div>
                </div>
              </div>
            )}

            {activeTab === 'typography' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-doc-text mb-4 font-orbitron">Text Size</h3>
                  <div className="flex space-x-4">
                    {['small', 'medium', 'large'].map(size => (
                      <button
                        key={size}
                        onClick={() => updateSettings({ textSize: size as any })}
                        className={`px-4 py-3 rounded-md border transition-colors capitalize ${
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
                  <h3 className="text-lg font-medium text-doc-text mb-4 font-orbitron">Font Family</h3>
                  <div className="space-y-2">
                    {[
                      { id: 'roboto', name: 'Roboto', desc: 'Default clean font' },
                      { id: 'orbitron', name: 'Orbitron', desc: 'Futuristic cyberpunk font' },
                      { id: 'fira-code', name: 'Fira Code', desc: 'Monospace for code' },
                      { id: 'opendyslexic-regular', name: 'OpenDyslexic', desc: 'Designed for dyslexia' },
                    ].map(fontOpt => (
                      <button
                        key={fontOpt.id}
                    onClick={() => updateSettings({ fontStyle: fontOpt.id as
                      | "roboto"
                      | "orbitron"
                      | "opendyslexic-regular"
                      | "open_sans"
                      | "opendyslexic-bold"
                      | "pt_serif"
                      | "fira_code"
                      | undefined })}
                    className={`w-full p-3 rounded-md border text-left transition-colors glass ${
                      settings.fontStyle === fontOpt.id
                        ? 'border-doc-primary bg-doc-primary/10'
                        : 'border-doc-border hover:border-doc-primary/50'
                    }`}
                  >
                    <div className="font-medium text-doc-text">{fontOpt.name}</div>
                    <div className="text-sm text-doc-text-muted">{fontOpt.desc}</div>
                  </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'accessibility' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-doc-text mb-4 font-orbitron">Contrast</h3>
                  <div className="flex space-x-4">
                    {['normal', 'high'].map(contrast => (
                      <button
                        key={contrast}
                        onClick={() => updateSettings({ contrast: contrast as any })}
                        className={`px-4 py-3 rounded-md border transition-colors capitalize ${
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
              </div>
            )}

            {activeTab === 'language' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-doc-text mb-4 font-orbitron">{uiStrings[lang].interfaceLanguage}</h3>
                  <div className="space-y-2">
                    {[
                      { id: 'en', name: uiStrings[lang].english, flag: '🇺🇸' },
                      { id: 'vi', name: uiStrings[lang].vietnamese, flag: '🇻🇳' },
                    ].map(langOpt => (
                      <button
                        key={langOpt.id}
                        onClick={() => updateSettings({ language: langOpt.id as any })}
                        className={`w-full p-3 rounded-md border text-left transition-colors glass ${
                          settings.language === langOpt.id
                            ? 'border-doc-primary bg-doc-primary/10'
                            : 'border-doc-border hover:border-doc-primary/50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{langOpt.flag}</span>
                          <span className="font-medium text-doc-text">{langOpt.name}</span>
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
        <div className="px-6 py-4 border-t border-doc-border glass">
          <div className="flex justify-end space-x-3">
          <Button variant="outline" onClick={onClose}>
            {uiStrings[lang].close}
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
