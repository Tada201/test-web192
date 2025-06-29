import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define theme arrays as const to ensure type stability
const DARK_THEMES = ['modern-dark', 'blue-professional', 'deep-purple', 'cyberpunk-blue', 'cyberpunk-purple', 'cyberpunk-green'] as const;
const LIGHT_THEMES = ['light-minimal', 'light-warm', 'light-cool', 'pastel'] as const;

// Export stable references
export const darkThemes = DARK_THEMES;
export const lightThemes = LIGHT_THEMES;

interface Settings {
  theme: 'light' | 'dark';
  darkTheme: (typeof DARK_THEMES)[number];
  lightTheme: (typeof LIGHT_THEMES)[number];
  textSize: 'small' | 'medium' | 'large';
  contrast: 'normal' | 'high';
  language: 'en' | 'vi';
  fontStyle: 'open_sans' | 'opendyslexic-regular' | 'opendyslexic-bold' | 'pt_serif' | 'roboto' | 'orbitron' | 'fira_code';
  colorBlindnessMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  backgroundAnimation: boolean;
}

interface SettingsContextType {
  settings: Settings;
  updateSettings: (newSettings: Partial<Settings>) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  setColorScheme: (scheme: string) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

interface SettingsProviderProps {
  children: ReactNode;
}

export function SettingsProvider({ children }: SettingsProviderProps) {
  function castSettings(raw: any): Settings {
    return {
      theme: raw.theme as 'light' | 'dark',
      darkTheme: raw.darkTheme as (typeof DARK_THEMES)[number],
      lightTheme: raw.lightTheme as (typeof LIGHT_THEMES)[number],
      textSize: raw.textSize as 'small' | 'medium' | 'large',
      contrast: raw.contrast as 'normal' | 'high',
      language: raw.language as 'en' | 'vi',
      fontStyle: raw.fontStyle as 'open_sans' | 'opendyslexic-regular' | 'opendyslexic-bold' | 'pt_serif' | 'roboto' | 'orbitron' | 'fira_code',
      colorBlindnessMode: raw.colorBlindnessMode as 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia',
      backgroundAnimation: raw.backgroundAnimation,
    };
  }

  const [settings, setSettings] = useState<Settings>(() => {
    if (typeof window !== 'undefined') {
      const savedSettings = localStorage.getItem('pro192-settings');
      return savedSettings ? castSettings(JSON.parse(savedSettings)) : castSettings({
        theme: 'dark',
        darkTheme: 'cyberpunk-blue',
        lightTheme: 'light-minimal',
        textSize: 'medium',
        contrast: 'normal',
        language: 'en',
        fontStyle: 'roboto',
        colorBlindnessMode: 'none',
        backgroundAnimation: true,
      });
    }
    return castSettings({
      theme: 'dark',
      darkTheme: 'cyberpunk-blue',
      lightTheme: 'light-minimal',
      textSize: 'medium',
      contrast: 'normal',
      language: 'en',
      fontStyle: 'roboto',
      colorBlindnessMode: 'none',
      backgroundAnimation: true,
    });
  });

  // Apply settings to document
  useEffect(() => {
    // Apply theme
    if (settings.theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }

    // Apply text size
    document.documentElement.classList.remove('text-sm', 'text-base', 'text-lg');
    switch (settings.textSize) {
      case 'small':
        document.documentElement.classList.add('text-sm');
        break;
      case 'medium':
        document.documentElement.classList.add('text-base');
        break;
      case 'large':
        document.documentElement.classList.add('text-lg');
        break;
    }

    // Apply contrast
    if (settings.contrast === 'high') {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Apply font style
    document.documentElement.classList.remove('font-opendyslexic-regular', 'font-opendyslexic-bold', 'font-open-sans', 'font-pt-serif', 'font-roboto', 'font-orbitron', 'font-fira-code');
    switch (settings.fontStyle) {
      case 'opendyslexic-regular':
        document.documentElement.classList.add('font-opendyslexic-regular');
        document.documentElement.style.fontFamily = "'OpenDyslexic-Regular', serif";
        break;
      case 'opendyslexic-bold':
        document.documentElement.classList.add('font-opendyslexic-bold');
        document.documentElement.style.fontFamily = "'OpenDyslexic-Bold', serif";
        break;
      case 'open_sans':
        document.documentElement.classList.add('font-open-sans');
        document.documentElement.style.fontFamily = "'Open Sans', Arial, sans-serif";
        break;
      case 'pt_serif':
        document.documentElement.classList.add('font-pt-serif');
        document.documentElement.style.fontFamily = "'PT Serif', Georgia, serif";
        break;
      case 'roboto':
        document.documentElement.classList.add('font-roboto');
        document.documentElement.style.fontFamily = "'Roboto', Arial, sans-serif";
        break;
      case 'orbitron':
        document.documentElement.classList.add('font-orbitron');
        document.documentElement.style.fontFamily = "'Orbitron', sans-serif";
        break;
      case 'fira_code':
        document.documentElement.classList.add('font-fira-code');
        document.documentElement.style.fontFamily = "'Fira Code', monospace";
        break;
      default:
        document.documentElement.style.fontFamily = "";
        break;
    }

    // Apply color scheme
    const html = document.documentElement;
    Array.from(html.classList)
      .filter(className => className.startsWith('scheme-'))
      .forEach(className => html.classList.remove(className));

    const currentScheme = settings.theme === 'dark' ? settings.darkTheme : settings.lightTheme;
    html.classList.add(`scheme-${currentScheme}`);

    // Apply color blindness mode classes
    document.documentElement.classList.remove('color-blindness-protanopia', 'color-blindness-deuteranopia', 'color-blindness-tritanopia');
    switch (settings.colorBlindnessMode) {
      case 'protanopia':
        document.documentElement.classList.add('color-blindness-protanopia');
        break;
      case 'deuteranopia':
        document.documentElement.classList.add('color-blindness-deuteranopia');
        break;
      case 'tritanopia':
        document.documentElement.classList.add('color-blindness-tritanopia');
        break;
    }
  }, [settings]);

  const updateSettings = (newSettings: Partial<Settings>) => {
    let mergedSettings = { ...settings, ...newSettings };
    if (newSettings.theme) {
      if (newSettings.theme === 'dark' && !('darkTheme' in newSettings)) {
        mergedSettings.darkTheme = settings.darkTheme || 'cyberpunk-blue';
      }
      if (newSettings.theme === 'light' && !('lightTheme' in newSettings)) {
        mergedSettings.lightTheme = settings.lightTheme || 'light-minimal';
      }
    }
    setSettings(mergedSettings);
    if (typeof window !== 'undefined') {
      localStorage.setItem('pro192-settings', JSON.stringify(mergedSettings));
    }
  };

  const setTheme = (theme: 'light' | 'dark') => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
    const updatedSettings = { ...settings, theme };
    if (typeof window !== 'undefined') {
      localStorage.setItem('pro192-settings', JSON.stringify(updatedSettings));
    }
    setSettings(updatedSettings);
  };

  const setColorScheme = (scheme: string) => {
    const html = document.documentElement;
    Array.from(html.classList)
      .filter(className => className.startsWith('scheme-'))
      .forEach(className => html.classList.remove(className));
    html.classList.add(`scheme-${scheme}`);
    let updatedSettings;
    if (settings.theme === 'dark') {
      updatedSettings = { ...settings, darkTheme: scheme as (typeof DARK_THEMES)[number] };
    } else {
      updatedSettings = { ...settings, lightTheme: scheme as (typeof LIGHT_THEMES)[number] };
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('pro192-settings', JSON.stringify(updatedSettings));
    }
    setSettings(updatedSettings);
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, setTheme, setColorScheme }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}