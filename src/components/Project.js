import React from 'react';
import styled from 'styled-components';

const Card = styled.article`
  border: 3px solid var(--green);
  border-radius: 1em;
  padding: 1em;
`;

export const Project = ({ data }) => (
  <Card>
    <h2>{data?.name}</h2>
    <p>{data?.summary}</p>
    <ul>{data?.stack.map(item => <li>{item}</li>)}</ul>
  </Card>
);
