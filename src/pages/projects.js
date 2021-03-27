import React from 'react';
import { Layout, SEO } from '../components';
import { projects } from '../data';

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    {projects.map(project => <div>{project.name}</div>)}
  </Layout>
);

export default ProjectsPage;
