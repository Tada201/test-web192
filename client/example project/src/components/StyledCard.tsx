import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    min-width: 190px;
    min-height: 254px;
    background: #07182E;
    position: relative;
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.18);
    transition: box-shadow 0.2s;
    padding: 1.5rem 1.25rem;
  }
  .card:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.28);
  }
  .card h2, .card h3 {
    z-index: 1;
    color: white;
    font-size: 1.35em;
    font-weight: 700;
    margin-bottom: 0.5em;
    line-height: 1.2;
  }
  .card p {
    color: #cbd5e1;
    margin-bottom: 1rem;
    min-height: 2.5em;
    font-size: 1em;
    line-height: 1.5;
    overflow: hidden;
    text-align: left;
    width: 100%;
  }
  .card a {
    color: #38bdf8;
    font-weight: 500;
    font-size: 0.98em;
    transition: color 0.2s;
    display: inline-flex;
    align-items: center;
    z-index: 1;
  }
  .card a:hover {
    color: #f59e42;
    text-decoration: underline;
  }
  .card .icon {
    background: #0ea5e9;
    color: #fff;
    border-radius: 10px;
    padding: 0.35em;
    margin-right: 0.7em;
    font-size: 1.25em;
    box-shadow: 0 2px 8px rgba(14,165,233,0.15);
    animation: float 6s ease-in-out infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
  }
  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: conic-gradient(from 0deg, #00b7ff, #ff30ff, #00b7ff 100%);
    z-index: 0;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: xor;
    animation: rotBGimg 3s linear infinite;
    opacity: 0.7;
  }
  @keyframes rotBGimg {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .card::after {
    content: '';
    position: absolute;
    background: #07182E;
    inset: 5px;
    border-radius: 15px;
    z-index: 1;
  }
  .card > * {
    position: relative;
    z-index: 2;
  }
`;

export default StyledWrapper;
