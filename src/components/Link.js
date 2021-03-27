import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from "gatsby"

export const Link = styled(props => (
  <RouterLink
    getProps={({ isCurrent }) => ({
      className: isCurrent
        ? `${props?.className} active`
        : props?.className
    })}
    {...props}
  />
))`
  display: inline-block;
  padding: 0.5em;
  margin: 0.5em;
  font-size: var(--link-font);
  color: var(--blue);
  transition: font-size 1s ease, color 1s ease;
  text-decoration: none;
  &.active {
    text-decoration: underline;
    animation: link 0.1s ease;
    font-size: var(--active-link-font);
    font-weight: 900;
    color: var(--red);
    &:hover {
      color: var(--red);
    }
  }
  &:hover {
    color: var(--lightblue);
  }
  &:active, &:focus {
    color: var(--red);
  }
  &:first-child {
    padding-left: 0;
    margin-left: 0;
  }
`;
