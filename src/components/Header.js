import React from 'react';
import styled from 'styled-components';
import { Link, Title } from '.';
import { basics } from '../data';

const links = [
  { to: '/', title: 'About' },
  { to: '/projects', title: 'Projects' },
  { to: '/cv', title: '↓ CV' },
];

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  min-height: 7.3em;
  flex-wrap: wrap;
`;

export const Header = () => (
  <header>
    <Title>{basics.name}</Title>
    <Menu>
      <Nav>
        {links.map(link => <Link key={link.to} to={link.to}>{link.title}</Link>)}
      </Nav>
      <div>
        <span style={{ marginRight: 8 }}>dark</span>
        <span>en</span>
      </div>
    </Menu>
  </header>
);
