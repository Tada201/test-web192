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
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  useEffect(() => {
    // Check if this is the first time loading the app
    const hasLoaded = sessionStorage.getItem('app-has-loaded');
    
    if (!hasLoaded) {
      // First time loading - show loading animation
      const timer = setTimeout(() => {
        setIsInitialLoading(false);
        setHasLoadedOnce(true);
        sessionStorage.setItem('app-has-loaded', 'true');
      }, 3000); // 3 second loading time
      
      return () => clearTimeout(timer);
    } else {
      // Already loaded before in this session - skip loading
      setIsInitialLoading(false);
      setHasLoadedOnce(true);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SettingsProvider>
        <ThemeProvider>
          <TooltipProvider>
            <div className="relative min-h-screen">
              {/* Main Application Content */}
              <div 
                className={`transition-opacity duration-700 ${
                  isInitialLoading ? 'opacity-0' : 'opacity-100'
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

              {/* Loading Animation Overlay - Topmost Layer */}
              {isInitialLoading && (
                <div 
                  className="fixed inset-0 transition-opacity duration-700"
                  style={{ 
                    zIndex: 9999, // Highest z-index to ensure it's on top
                    backgroundColor: '#0a0a0a' // Ensure solid background
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