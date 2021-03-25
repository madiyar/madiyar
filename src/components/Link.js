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
  color: #005FD9;
  &.active {
    font-size: 2.25em;
    font-weight: 900;
    color: #FF520E;
    &:hover {
      color: #FF520E;
    }
  }
  &:hover {
    color: #009FFF;
  }
  &:active, &:focus {
    color: #FF520E;
  }
  &:first-child {
    padding-left: 0;
    margin-left: 0;
  }
`;
