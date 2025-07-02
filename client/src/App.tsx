import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/hooks/use-theme";
import { SettingsProvider } from "./contexts/SettingsContext";
import CanvasBackground from "./components/Background/CanvasBackground.tsx";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home";
import DocsPage from "@/pages/docs";
import ComponentsDemo from "@/pages/components-demo";
import JavaOOPExample from "@/pages/java-oop-example";
import AssignmentsPage from "@/pages/assignments";
import { Header } from "@/components/Header";

function Router() {
  return (
    <Switch>
      <Route path="/">{() => <HomePage />}</Route>
      <Route path="/docs">{() => <DocsPage />}</Route>
      <Route path="/docs/:section">{() => <DocsPage />}</Route>
      <Route path="/components">{() => <ComponentsDemo />}</Route>
      <Route path="/java-oop">{() => <JavaOOPExample />}</Route>
      <Route path="/assignments">{() => <AssignmentsPage />}</Route>
      <Route>{() => <NotFound />}</Route>
    </Switch>
  );
}

function App() {
  const [font, setFont] = useState('roboto');

  useEffect(() => {
    // Get saved font from localStorage or default to roboto
    const savedFont = localStorage.getItem('selectedFont');
    if (savedFont) {
      setFont(savedFont);
    }
  }, []);

  useEffect(() => {
    // Apply font class to html element
    document.documentElement.className = `font-${font}`;
    
    // Save to localStorage
    localStorage.setItem('selectedFont', font);
  }, [font]);

  return (
    <QueryClientProvider client={queryClient}>
      <SettingsProvider>
        <ThemeProvider>
          <TooltipProvider>
            <div className="relative min-h-screen" style={{ zIndex: 1, position: 'relative' }}>
              <Header font={font} setFont={setFont} />
              <CanvasBackground />
              <Toaster />
              <Router />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </SettingsProvider>
    </QueryClientProvider>
  );
}

export default App;
