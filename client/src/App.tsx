import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/hooks/use-theme";
import { SettingsProvider } from "./contexts/SettingsContext";
import TextWaveLoading from "./components/TextWaveLoading";
import { BackgroundAnimation } from "./components/BackgroundAnimation";
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
      <Route path="/" component={HomePage} />
      <Route path="/docs" component={DocsPage} />
      <Route path="/docs/:section" component={DocsPage} />
      <Route path="/components" component={ComponentsDemo} />
      <Route path="/java-oop" component={JavaOOPExample} />
      <Route path="/assignments" component={AssignmentsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    // Check if we've already shown the loading animation in this session
    return !sessionStorage.getItem('app-loaded');
  });

  useEffect(() => {
    // Only show loading animation once per session
    if (!sessionStorage.getItem('app-loaded')) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('app-loaded', 'true');
      }, 3000);
      
      return () => clearTimeout(timer);
    } else {
      // If already loaded in this session, skip loading immediately
      setIsLoading(false);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SettingsProvider>
        <ThemeProvider>
          <TooltipProvider>
            <div className="relative min-h-screen">
              {/* Loading Animation - Only shows once per session */}
              {isLoading && (
                <div 
                  className="fixed inset-0"
                  style={{ 
                    zIndex: 10000, // Highest possible z-index
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                  }}
                >
                  <TextWaveLoading />
                </div>
              )}

              {/* Main Application Content */}
              <div 
                className={`transition-opacity duration-700 ${
                  isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
                style={{ 
                  position: 'relative',
                  minHeight: '100vh',
                  zIndex: 1
                }}
              >
                <Header />
                <BackgroundAnimation />
                <Toaster />
                <Router />
              </div>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </SettingsProvider>
    </QueryClientProvider>
  );
}

export default App;