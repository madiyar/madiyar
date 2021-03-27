import React from "react"
import styled from "styled-components";
import { Main, Title, Link, SEO } from "../components";

const Text = styled.p`
  font-size: 1.5em;
`;

const NotFoundPage = () => (
  <Main>
    <SEO title="404: Not found" />
    <Title>Page not found</Title>
    <Text>
      Sorry{" "}
      <span role="img" aria-label="Pensive emoji">
        😔
      </span>{" "}
      we couldn’t find what you were looking for.
      <br />
      <nav><Link to="/">Go home →</Link></nav>
    </Text>
  </Main>
);

export default NotFoundPage;
