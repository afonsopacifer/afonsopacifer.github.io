import React from 'react';
import DefaultLayout from '../templates/default-layout';
import '../atoms/headings/headings.css';
import '../atoms/text/text.css';
import talks from '../data-base/talks.json';
import renderList from '../bosons/helpers/renderSections';
import SEO from '../bosons/seo';

const Talks = () => (
  <DefaultLayout>

    <SEO title='Talks' />

    <h1 className = 'heading heading--lv1'>
      <strong className = 'heading--underline'> Presentations </strong> around the country.
    </h1>

    <p className = 'text'>
      Lorem ipsum dolor sit amet, <strong className = 'text--highlight'> consectetur </strong> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    { renderList(talks) }

  </DefaultLayout>
);

export default Talks;
