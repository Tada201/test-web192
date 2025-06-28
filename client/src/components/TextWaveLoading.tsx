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
    const timer = setTimeout(() => setFade(true), 3300);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`tw-loading-bg min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-[#0f2a2e] ${fade ? 'tw-fade-out' : ''}`}>
      <div className="tw-wave-container mb-8">
        {'PRO192'.split('').map((char, i) => (
          <span key={i} className="tw-wave-char-static">{char}</span>
        ))}
      </div>
      <Loader />
    </div>
  );
}
