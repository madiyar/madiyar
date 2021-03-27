import React from "react"
import { Header } from "."
import styled from 'styled-components';

export const Main = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 4em 1em 0;
`;

export const Layout = ({ children }) => (
  <Main>
    <Header />
    {children}
  </Main>
);
