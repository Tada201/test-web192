import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/hooks/use-theme";
import { SettingsProvider } from "./contexts/SettingsContext";
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
  return (
    <QueryClientProvider client={queryClient}>
      <SettingsProvider>
        <ThemeProvider>
          <TooltipProvider>
            <div className="relative min-h-screen">
              <Header />
              <BackgroundAnimation />
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