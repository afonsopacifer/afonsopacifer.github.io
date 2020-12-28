import React from 'react';
import DefaultLayout from '../templates/default-layout';
import '../atoms/headings/headings.css';
import '../atoms/text/text.css';
import talks from '../data-base/talks.json';
import renderSections from '../bosons/helpers/renderSections';
import SEO from '../bosons/seo';

const Talks = () => (
  <DefaultLayout>

    <SEO title = 'Talks' />

    <h1 className = 'heading heading--lv1'>
      <strong className = 'heading--underline'> Speak </strong> to learn with different communities.
    </h1>

    <p className = 'text'>
      For many years, I worked full-time as an CSS evangelist. At this time, speak at meetup and conferences are part of my life.
      In the last years, I speak at the biggest front-end conferences in my country (Brazil) for thousands of people.
      Now my personal challenge is to know new communities around the world, for doing this I decide to participate/speak at other awesome communities outside my country.
    </p>

    { renderSections(talks) }

  </DefaultLayout>
);

export default Talks;
