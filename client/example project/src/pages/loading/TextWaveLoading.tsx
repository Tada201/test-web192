import React, { useEffect, useState } from 'react';
import './textwave-loading.css';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loaderRectangle">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loaderRectangle {
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 0 3px;
  }

  .loaderRectangle div {
   width: 10px;
   height: 16px;
   animation: .9s ease-in-out infinite;
   background: #183153;
   box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
  }

  .loaderRectangle div:nth-child(1) {
   animation-name: rectangleOneAnim;
   animation-delay: 0s;
  }

  @keyframes rectangleOneAnim {
   0% {
    height: 15px;
   }

   40% {
    height: 30px;
   }

   100% {
    height: 15px;
   }
  }

  .loaderRectangle div:nth-child(2) {
   animation-name: rectangleTwoAnim;
   animation-delay: 0.1s;
  }

  @keyframes rectangleTwoAnim {
   0% {
    height: 15px;
   }

   40% {
    height: 40px;
   }

   100% {
    height: 15px;
   }
  }

  .loaderRectangle div:nth-child(3) {
   animation-name: rectangleThreeAnim;
   animation-delay: 0.2s;
  }

  @keyframes rectangleThreeAnim {
   0% {
    height: 15px;
   }

   40% {
    height: 50px;
   }

   100% {
    height: 15px;
   }
  }

  .loaderRectangle div:nth-child(4) {
   animation-name: rectangleFourAnim;
   animation-delay: 0.3s;
  }

  @keyframes rectangleFourAnim {
   0% {
    height: 15px;
   }

   40% {
    height: 40px;
   }

   100% {
    height: 15px;
   }
  }

  .loaderRectangle div:nth-child(5) {
   animation-name: rectangleFiveAnim;
   animation-delay: 0.4s;
  }

  @keyframes rectangleFiveAnim {
   0% {
    height: 15px;
   }

   40% {
    height: 30px;
   }

   100% {
    height: 15px;
   }
  }
`;

export default function TextWaveLoading() {
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 3300);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`tw-loading-bg min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-[#0f2a2e] ${fade ? 'tw-fade-out' : ''}`}>
      <div className="tw-wave-container mb-8">
        {'ASSSSS'.split('').map((char, i) => (
          <span key={i} className="tw-wave-char-static">{char}</span>
        ))}
      </div>
      <Loader />
    </div>
  );
}
