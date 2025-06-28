import { useState, useEffect } from 'react';

interface LoadingAnimationProps {
  onComplete?: () => void;
}

export function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Complete loading after 3 seconds
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        {/* Logo or Brand */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <i className="fas fa-graduation-cap text-white text-2xl"></i>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">PRO192 Documentation</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Object-Oriented Programming</p>
        </div>

        {/* Loading Spinner */}
        <div className="relative">
          <div className="w-12 h-12 mx-auto">
            <div className="absolute inset-0 rounded-full border-4 border-blue-200 dark:border-blue-800"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 animate-pulse">
            Loading course materials...
          </p>
        </div>

        {/* Progress Dots */}
        <div className="flex items-center justify-center space-x-2 mt-6">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}