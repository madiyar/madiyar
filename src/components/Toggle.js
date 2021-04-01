import React, { useState } from 'react';
import styled from 'styled-components';
import moon from '../images/moon.svg';
import sun from '../images/sun.svg';

const Btn = styled.button`
  cursor: pointer;
  color: var(--green);
  background: none;
  border: none;
  font-size: 1em;
  outline: none;
`;

export const Toggle = () => {
  const [dark, setDark] = useState(typeof window !== 'undefined' && window.localStorage.getItem('dark') === "true");
  const toggle = () => {
    typeof window !== 'undefined' && window.localStorage.setItem('dark', !dark);
    setDark(s => !s);
  };

  return (
    <Btn onClick={toggle} type="button" title="Dark mode">
      <img src={dark ? moon : sun} alt="theme toggler" />
    </Btn>
  );
};
