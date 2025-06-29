import React, { useEffect, useState } from 'react';
import './TextWaveLoading.css';

const Loader = () => {
  return (
    <div className="loaderRectangle">
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default function TextWaveLoading() {
  const [fade, setFade] = useState(false);
  
  useEffect(() => {
    // Start fade out after 2.7 seconds
    const timer = setTimeout(() => setFade(true), 2700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`tw-loading-bg ${fade ? 'tw-fade-out' : ''}`}
    >
      <div className="tw-wave-container mb-8">
        {'PRO192'.split('').map((char, i) => (
          <span 
            key={i} 
            className="tw-wave-char-static" 
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </div>
      <Loader />
    </div>
  );
}