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
        For many years, I worked as a <b className = 'text--highlight'>full-time web evangelist</b> (especially with CSS and web components), 
        at this time, I spoken at the biggest front-end conferences in my country (Brazil) to thousands of people.
      </p>

      <p className = 'text'>
        Nowadays with my  <b className = 'text--highlight'>developer relations</b> role, i do a lot of internal presentations, but i still participate in communities meetups and conferences.
      </p>

      <CommentBar title = '🎤 Want me to speak?'>
        Send me an e-mail for afonsopolis@gmail.com <CopyToClipBoard text = 'afonsopolis@gmail.com' />
      </CommentBar>

      <Link href = 'https://speakerdeck.com/afonsopacifer'> 
        <SpeakerDeck />
        See my past slides on Speaker Deck
      </Link>

    </PageHeader>

    { renderSections(talks) }

  </DefaultLayout>
);

export default Talks;
