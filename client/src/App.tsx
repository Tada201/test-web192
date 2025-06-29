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
  // Use a more stable loading state management
  const [isLoading, setIsLoading] = useState(() => {
    // Only show loading if we haven't seen it in this browser session
    const hasSeenLoading = sessionStorage.getItem('pro192-loading-shown');
    return !hasSeenLoading;
  });

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Prevent multiple initializations
    if (isInitialized) return;
    
    setIsInitialized(true);
    
    const hasSeenLoading = sessionStorage.getItem('pro192-loading-shown');
    
    if (!hasSeenLoading) {
      // Show loading animation for first time visitors
      const loadingTimer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('pro192-loading-shown', 'true');
      }, 3000);
      
      return () => clearTimeout(loadingTimer);
    } else {
      // Skip loading for returning visitors in same session
      setIsLoading(false);
    }
  }, [isInitialized]);

  return (
    <QueryClientProvider client={queryClient}>
      <SettingsProvider>
        <ThemeProvider>
          <TooltipProvider>
            <div className="relative min-h-screen">
              {/* Loading Animation - Fixed positioning and z-index */}
              {isLoading && (
                <div 
                  className="fixed inset-0 z-[9999]"
                  style={{ 
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 9999
                  }}
                >
                  <TextWaveLoading />
                </div>
              )}

              {/* Main Application Content */}
              <div 
                className={`min-h-screen transition-opacity duration-500 ${
                  isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
                style={{ 
                  position: 'relative',
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