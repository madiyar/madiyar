import React from 'react';
import styled from 'styled-components';
import { Layout, SEO, Project } from '../components';
import { projects } from '../data';

const Grid = styled.section`
  display: grid;
  grid-template-columns: var(--project-grid);
  grid-column-gap: 2em;
  grid-row-gap: 2em;
`;

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Grid>
      {projects.map(project => <Project key={project.name} data={project} />)}
    </Grid>
  </Layout>
);

export default ProjectsPage;
