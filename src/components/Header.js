import React from 'react';
import styled from 'styled-components';
import { Link, Title } from '.';

const links = [
  { to: '/', title: 'About' },
  { to: '/projects', title: 'Projects' },
  { to: '/cv', title: '↓ CV' },
];

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Header = () => (
  <header>
    <Title>Madiyar Bolatov</Title>
    <Nav>
      {links.map(link => <Link key={link.to} to={link.to}>{link.title}</Link>)}
      <span style={{ marginRight: 8 }}>dark</span>
      <span>en</span>
    </Nav>
  </header>
);
