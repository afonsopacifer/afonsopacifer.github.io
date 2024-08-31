import React from 'react';
import DefaultLayout from '../templates/default-layout';
import '../atoms/headings/headings.css';
import '../atoms/text/text.css';
import '../atoms/comment-bar/comment-bar.css';
import talks from '../data-base/talks.json';
import renderSections from '../bosons/helpers/renderSections';
import SEO from '../bosons/seo';
import Link from '../atoms/link/';
import CommentBar from '../atoms/comment-bar';
import PageHeader from '../organisms/page-header/';
import renderHighlights from '../bosons/helpers/renderHighlights';
import CopyToClipBoard from '../atoms/copy-to-clipboard';
import SpeakerDeck from '../assets/icons/speaker-deck.svg';

const Talks = () => (
  <DefaultLayout>

    <SEO title = 'Talks' />

    <PageHeader>

      <h1 className = 'heading heading--lv1'>
        <strong className = 'heading--underline'> Presentations </strong> in wonderful tech communities.
      </h1>

      <p className = 'text'>
        For many years <em className = 'text--hand-drawing'> (2015 ~ 2021), </em> I worked as a <b className = 'text--highlight'>full-time web evangelist</b> 
        <em className = 'text--hand-drawing'>
          &nbsp;(especially with CSS and web components)
        </em>,
        at this time, I spoke at the biggest front-end conferences in my country <em className = 'text--hand-drawing'> (Brazil) </em> to <b className = 'text--highlight'> thousands of people. </b>
      </p>

      {/* <p className = 'text'>
        Currently in my <b className = 'text--highlight'> developer relations </b> role, I do a lot of companay presentations and work to <b className = 'text--highlight'>engage more people to speak </b> up in our internal tech community.
      </p> */}

      <CommentBar title = '🎤 Want me to speak?'>
        E-mail me at afonsopolis@gmail.com <CopyToClipBoard text = 'afonsopolis@gmail.com' />
      </CommentBar>

      <Link href = 'https://speakerdeck.com/afonsopacifer'> 
        <SpeakerDeck />
        See my past slides on Speaker Deck
      </Link>

    </PageHeader>

    <h2 className = 'heading heading--lv2'>
      <strong className = 'heading--underline'> Featured </strong> talks.
    </h2>

    <section className = 'feature-box-container'>
      { renderHighlights(talks) }
    </section>

    { renderSections(talks) }

  </DefaultLayout>
);

export default Talks;
