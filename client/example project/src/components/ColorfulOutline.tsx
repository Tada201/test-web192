import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ColorfulOutline: React.FC<{ children: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ children, className = '', style }) => {
  const [showOutline, setShowOutline] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowOutline(true), 400); // Delay in ms
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledWrapper className={className} style={style} $showOutline={showOutline}>
      {children}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ $showOutline: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 1rem;
  border: 3px solid transparent;
  background: transparent;
  transition: box-shadow 0.3s, border-color 0.3s;
  overflow: visible;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 1rem;
    pointer-events: none;
    z-index: 1;
    border: 3px solid transparent;
    background: conic-gradient(
      #ff0080 0%,
      #ff8c00 16%,
      #fff700 33%,
      #00ff00 50%,
      #00cfff 66%,
      #3300ff 83%,
      #ff0080 100%
    );
    opacity: ${props => (props.$showOutline ? 0.7 : 0)};
    background-size: cover;
    background-clip: border-box;
    -webkit-background-clip: border-box;
    mask: none;
    -webkit-mask: none;
    pointer-events: none;
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  & > * {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
  }
`;

export default ColorfulOutline;
