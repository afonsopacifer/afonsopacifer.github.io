import React from 'react';
import DefaultLayout from '../templates/default-layout';
import '../atoms/headings/headings.css';
import '../atoms/text/text.css';
import videos from '../data-base/videos.json';
import renderSections from '../bosons/helpers/renderSections';
import SEO from '../bosons/seo';
import Link from '../atoms/link/';
import PageHeader from '../organisms/page-header/';
import renderHighlights from '../bosons/helpers/renderHighlights';
import YouTube from '../assets/icons/youtube.svg';

const Videos = () => (
  <DefaultLayout>

    <SEO title='Videos' />

    <PageHeader>

      <h1 className = 'heading heading--lv1'>
        <strong className = 'heading--underline'> Screencasts,</strong> talks and tech tips.
      </h1>

      <p className = 'text'>
        In 2016 I created a youtube channel called <b className = 'text--highlight'> CSS CastShow. </b> 
        After a few years of partnerships with tech communities, I ceded my channel to the Brazilian community, which became the official channel of the <a href='https://github.com/frontendbr' className = 'link'> Front-end Brasil </a> community.
      </p>

      {/* <p className = 'text'>
        Today I'm one of the <b className = 'text--highlight'>hosts</b> of the  <a href='https://neowaylabs.github.io/' className = 'link'>Neoway Labs Tech</a> youtube channel
        <em className = 'text--hand-drawing'> (An initiative conceived by Neoway's tech team to exchanging experiences, tips and knowledge with external tech communities).</em>
      </p> */}

      <Link href = 'https://www.youtube.com/c/frontendbr'> 
        <YouTube />
        Subscribe the frontendbr / <b className = 'text--highlight'>+3k Subscribers</b>
      </Link>

      {/* <Link href = 'https://www.youtube.com/channel/UCxQ9bvci67Pbp4dJGCbCkRw'> 
        <YouTube />
        Subscribe the Neoway Labs Tech
      </Link> */}

    </PageHeader>

    <h2 className = 'heading heading--lv2'>
      <strong className = 'heading--underline'> Featured </strong> videos.
    </h2>

    <section className = 'feature-box-container'>
      { renderHighlights(videos) }
    </section>

    { renderSections(videos) }

  </DefaultLayout>
);

export default Videos;
