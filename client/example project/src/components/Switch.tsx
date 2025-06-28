import React from 'react';
import styled from 'styled-components';

interface SwitchProps {
  id?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch: React.FC<SwitchProps> = ({ id, checked, onChange }) => {
  return (
    <StyledWrapper>
      <label className="switch align-middle" style={{ verticalAlign: 'middle', display: 'inline-flex', alignItems: 'center' }}>
        <input type="checkbox" id={id} checked={checked} onChange={onChange} />
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
    --button-width: 2.2em;
    --button-height: 1.2em;
    --toggle-diameter: 0.9em;
    --button-toggle-offset: calc((var(--button-height) - var(--toggle-diameter)) / 2);
    --toggle-shadow-offset: 6px;
    --toggle-wider: 1.5em;
    --color-grey: #cccccc;
    --color-green: #4296f4;
    vertical-align: middle;
    display: inline-flex;
    align-items: center;
  }

  .slider {
    display: inline-block;
    width: var(--button-width);
    height: var(--button-height);
    background-color: var(--color-grey);
    border-radius: calc(var(--button-height) / 2);
    position: relative;
    transition: 0.3s all ease-in-out;
    margin-top: -2px;
  }

  .slider::after {
    content: '';
    display: inline-block;
    width: var(--toggle-diameter);
    height: var(--toggle-diameter);
    background-color: #fff;
    border-radius: calc(var(--toggle-diameter) / 2);
    position: absolute;
    top: var(--button-toggle-offset);
    transform: translateX(var(--button-toggle-offset));
    box-shadow: var(--toggle-shadow-offset) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
    transition: 0.3s all ease-in-out;
  }

  .switch input[type='checkbox']:checked + .slider {
    background-color: var(--color-green);
  }

  .switch input[type='checkbox']:checked + .slider::after {
    transform: translateX(calc(var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)));
    box-shadow: calc(var(--toggle-shadow-offset) * -1) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
  }

  .switch input[type='checkbox'] {
    display: none;
  }

  .switch input[type='checkbox']:active + .slider::after {
    width: var(--toggle-wider);
  }

  .switch input[type='checkbox']:checked:active + .slider::after {
    transform: translateX(calc(var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)));
  }
`;

export default Switch;
