import { useEffect, useState, useContext } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { SettingsProvider, useSettings, GlobalMouseAudio } from './contexts/SettingsContext';
import { MdxModeContext } from './contexts/MdxModeContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import SectionPage from './pages/SectionPage';
import SearchResults from './pages/SearchResults';
import CustomCursor from './components/CustomCursor';
import CanvasBackground from './components/CanvasBackground';
import { SearchProvider } from './contexts/SearchContext';
import EnhancedSearchModal from './components/EnhancedSearchModal';
import SettingsMenu from './components/SettingsMenu';
import SyllabusPage from './pages/syllabus-pro192-spring2021';
import TextWaveLoading from './pages/loading/TextWaveLoading';


// Component to handle scroll restoration
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Custom hook to detect if device is mobile
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
}

function AppContent({ mdxMode, setMdxMode, onAppLoaded }: { mdxMode: boolean; setMdxMode: (v: boolean) => void, onAppLoaded: () => void })  {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isPortrait, setIsPortrait] = useState(false);
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  const location = useLocation();
  const { settings } = useSettings();
  const isMobile = useIsMobile();

  // Hamburger controls both open (mobile) and expanded (desktop)
  const handleSidebarToggle = () => {
    if (isMobile || isPortrait) {
      setIsSidebarOpen((prev) => {
        // When opening on mobile, also expand
        if (!prev) setIsSidebarExpanded(true);
        return !prev;
      });
    } else {
      setIsSidebarExpanded((prev) => {
        // When collapsing on desktop, also close if needed
        if (prev) setIsSidebarOpen(false);
        return !prev;
      });
    }
  };

  // Responsive aspect ratio detection
  useEffect(() => {
    function handleResize() {
      const aspect = window.innerWidth / window.innerHeight;
      setIsPortrait(aspect < 0.7); // 9:16 is 0.5625, so <0.7 is portrait
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar on route change on mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  }, [location]);

  // Hamburger checked state: open on mobile/portrait, expanded on desktop
  const hamburgerChecked = isMobile || isPortrait ? isSidebarOpen : isSidebarExpanded;

  let sidebarProps = {
    isOpen: isMobile || isPortrait ? isSidebarOpen : true,
    onClose: () => setIsSidebarOpen(false),
    isExpanded: isSidebarExpanded,
    className: '',
    showCloseButton: isMobile || isPortrait, // <-- add this prop
  };
  if (isPortrait) {
    sidebarProps.isOpen = isSidebarOpen;
    sidebarProps.isExpanded = false;
    sidebarProps.className = 'hidden md:block';
  } else if (!isSidebarExpanded) {
    sidebarProps.className = 'sidebar-mini';
  }

  useEffect(() => {
    // Wait for all resources to load (images, fonts, etc.)
    if (document.readyState === 'complete') {
      onAppLoaded();
    } else {
      const handleLoad = () => onAppLoaded();
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [onAppLoaded]);

  return (
    <SearchProvider>
      <GlobalMouseAudio />
      {settings.customCursorEnabled && <CustomCursor />}
      <ScrollToTop />
      <div key={`theme-${settings.theme}-${settings.darkTheme}-${settings.lightTheme}`} className={`min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative`}>
        <CanvasBackground />
        <Navbar
          onMenuToggle={handleSidebarToggle}
          isSidebarExpanded={isSidebarExpanded}
          isSidebarOpen={hamburgerChecked}
          onSettingsMenuToggle={() => setIsSettingsMenuOpen(true)}
          mdxMode={mdxMode}
          onMdxModeToggle={setMdxMode}
        />
        <div className="flex">
          <Sidebar {...sidebarProps} />
          <main className={`flex-1 p-4 transition-all duration-300 ease-in-out ${isSidebarExpanded ? 'md:ml-64' : 'md:ml-20'} relative z-10`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/section/:sectionId" element={<SectionPage />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/syllabus-pro192-spring2021" element={<SyllabusPage />} />
              </Routes>
            </div>
          </main>
        </div>
        {isSettingsMenuOpen && <SettingsMenu onClose={() => setIsSettingsMenuOpen(false)} />}
        <EnhancedSearchModal />
      </div>
    </SearchProvider>
  );
}



// Top-level App component to provide contexts and manage mdxMode state
function App() {
  const [mdxMode, setMdxMode] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SettingsProvider>
      <MdxModeContext.Provider value={{ mdxMode, setMdxMode }}>
        <BrowserRouter>
          {/* Loading overlay always rendered on top */}
          {showLoading && (
            <div
              style={{
                position: 'fixed',
                zIndex: 9999,
                inset: 0,
                background: 'rgba(10,10,10,0.98)',
                transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1)',
                pointerEvents: showLoading ? 'auto' : 'none',
                opacity: showLoading ? 1 : 0,
              }}
            >
              <TextWaveLoading />
            </div>
          )}
          {/* Main app content always rendered */}
          <AppContent
            mdxMode={mdxMode}
            setMdxMode={setMdxMode}
            onAppLoaded={() => {}}
          />
        </BrowserRouter>
      </MdxModeContext.Provider>
    </SettingsProvider>
  );
}

export default App;