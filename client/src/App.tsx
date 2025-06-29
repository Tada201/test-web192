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
  const [isLoading, setIsLoading] = useState(true);
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    // Prevent multiple initializations
    if (hasInitialized) return;
    
    setHasInitialized(true);
    
    // Check if user has seen loading in this browser session
    const hasSeenLoading = sessionStorage.getItem('pro192-loading-complete');
    
    if (hasSeenLoading === 'true') {
      // Skip loading for returning visitors in same session
      setIsLoading(false);
    } else {
      // Show loading animation for 3 seconds, then hide it
      const loadingTimer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('pro192-loading-complete', 'true');
      }, 3000);
      
      return () => clearTimeout(loadingTimer);
    }
  }, [hasInitialized]);

  return (
    <QueryClientProvider client={queryClient}>
      <SettingsProvider>
        <ThemeProvider>
          <TooltipProvider>
            <div className="relative min-h-screen">
              {/* Main Application Content - Always rendered */}
              <div className="min-h-screen">
                <Header />
                <BackgroundAnimation />
                <Toaster />
                <Router />
              </div>

              {/* Loading Animation Overlay - Only when loading */}
              {isLoading && (
                <div 
                  className="fixed inset-0"
                  style={{ 
                    zIndex: 10000,
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
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </SettingsProvider>
    </QueryClientProvider>
  );
}

export default App;