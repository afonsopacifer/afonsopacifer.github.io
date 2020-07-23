import React from 'react';
import DefaultLayout from '../templates/default-layout';
import '../atoms/headings/headings.css';
import '../atoms/text/text.css';
import projects from '../data-base/projects.json';
import renderList from '../bosons/helpers/renderSections';
import SEO from '../bosons/seo';

const Projects = () => (
  <DefaultLayout>

    <SEO title='Projects' />

    <h1 className = 'heading heading--lv1'>
    <strong className = 'heading--underline'> Passion </strong> for open source.
    </h1>

    <p className = 'text'>
      (enterprise projects disclaimer and links)
    </p>

    { renderList(projects) }

  </DefaultLayout>
);

export default Projects;
