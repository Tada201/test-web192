import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./hooks/use-theme";
import { SettingsProvider } from "./contexts/SettingsContext";
import CanvasBackground from "./components/CanvasBackground";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home";
import DocsPage from "@/pages/docs";
import ComponentsDemo from "@/pages/components-demo";
import JavaOOPExample from "@/pages/java-oop-example";
import AssignmentsPage from "@/pages/assignments";
import SyllabusTabsPage from "@/pages/syllabus-tabs";
import SectionPage from "@/pages/SectionPage";
import { Header } from "@/components/Header";
import PatternBackground from "./PatternBackground";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/docs" component={DocsPage} />
      <Route path="/docs/:section" component={DocsPage} />
      <Route path="/components" component={ComponentsDemo} />
      <Route path="/java-oop" component={JavaOOPExample} />
      <Route path="/assignments" component={AssignmentsPage} />
      <Route path="/syllabus-tabs" component={SyllabusTabsPage} />
      <Route path="/section/:sectionId" component={SectionPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SettingsProvider>
        <ThemeProvider>
          {/* Pattern background always rendered for static fallback */}
          <PatternBackground />
          {/* Move CanvasBackground outside the main content for proper layering */}
          <CanvasBackground />
          <div className="relative min-h-screen z-20" style={{ background: "none" }}>
            <Header />
            {/* Toaster and TooltipProvider removed as ui folder is gone */}
            <Router />
          </div>
        </ThemeProvider>
      </SettingsProvider>
    </QueryClientProvider>
  );
}

export default App;