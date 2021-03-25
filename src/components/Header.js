import React from 'react';
import { Link, Title } from '.';

const links = [
  { to: '/', title: 'About' },
  { to: '/projects', title: 'Projects' }
];

export const Header = () => (
  <header>
    <Title>Madiyar Bolatov</Title>
    <nav>
      {links.map(link => <Link key={link.to} to={link.to}>{link.title}</Link>)}
    </nav>
  </header>
);
