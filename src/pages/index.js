import React from "react"
import styled from "styled-components"
import { Layout, SEO } from "../components"
import { basics } from '../data';
import mail from '../images/mail.svg';

const About = styled.p`
  line-height: 2em;
  text-align: justify;
`;

const Links = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: -1em;
`;

const Link = styled(({ to, children, ...rest }) => (
  <a href={to} target="_blank" rel="noreferrer" {...rest}>{children}</a>
))`
  color: var(--green);
  font-weight: 900;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 15px 20px;
  border: 2px solid var(--green);
  border-radius: 999rem;
  transition: transform 0.1s ease;
  margin: 1em;
  &>img {
    margin-right: 0.5em;
  }
  &:hover {
    transform: scale(1.2) rotate(2deg);
  }
`;

const links = [
  ...basics.profiles,
  {
    url: `mailto:${basics.email}`,
    username: 'E-mail',
    icon: mail
  }
];

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <About>I'm a 22 y.o. software engineer based in Almaty, KZ specializing in frontend development.</About>
      <Links>
        {links.map(link => (
          <Link to={link.url} key={link.url}>
            <img src={link.icon} alt={link.url} />
            {link.username}
          </Link>
        ))}
      </Links>
    </Layout>
  )
}

export default IndexPage
