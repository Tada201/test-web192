import { useState, useEffect, createContext, useContext } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to dark theme for documentation
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    console.log('Applying theme:', theme);
    
    // Apply theme to document element
    const root = document.documentElement;
    const body = document.body;
    
    // Remove previous theme classes
    root.classList.remove("light", "dark");
    body.classList.remove("light", "dark");
    
    // Add current theme class
    root.classList.add(theme);
    body.classList.add(theme);
    
    console.log('Applied classes to root:', root.className);
    console.log('Applied classes to body:', body.className);
    
    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    console.log('Theme toggle clicked, current theme:', theme);
    const newTheme = theme === "light" ? "dark" : "light";
    console.log('Switching to theme:', newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}