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
  font-size: 1.5em;
  color: var(--blue);
  transition: all 1s ease;
  &.active {
    animation: link 0.1s ease;
    font-size: 2.25em;
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
