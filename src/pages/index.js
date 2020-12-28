import React, { useState, useEffect } from 'react';
import DefaultLayout from '../templates/default-layout/';
import '../atoms/text/text.css';
import '../atoms/headings/headings.css';
import SEO from '../bosons/seo/';
import Backgroundvideo from '../assets/videos/background.mp4';
import renderHighlights from '../bosons/helpers/renderHighlights';
import articles from '../data-base/articles.json';
import talks from '../data-base/talks.json';
import projects from '../data-base/projects.json';
import videos from '../data-base/videos.json';

const Index = () => {

  const [transparent, setTransparent] = useState(true);

  const verifyTransparent = () => {
    window.scrollY ? setTransparent(false) : setTransparent(true);
  }

  useEffect(() => {
    window.addEventListener('scroll', verifyTransparent);
    return () => window.removeEventListener('scroll', verifyTransparent);
  }, []);

  return (
    <DefaultLayout videoSource = { Backgroundvideo } transparentHeader = { transparent }>

      <SEO title = 'About' />

      <h1 className = 'heading heading--lv1'>
        <strong className = 'heading--underline'> Hello. </strong>
      </h1>

      <p className = 'text'>
        My name is Afonso Pacifer! I'm 28 years old and I living in São Paulo - Brazil.
        I currently working at a full-time principal javascript developer/tech lead at <a href='#'>@valleweb</a> (remotely ) 🌏
        and host at <a href='#'>@frontendbr</a> community 🎤.
        Former full-time CSS evangelist 💜.
      </p>

      <h2 className = 'heading heading--lv2'>
        <strong className = 'heading--underline'> Featured </strong> blog posts.
      </h2>

      <div className = 'feature-box-container'>
        { renderHighlights(articles) }
      </div>

      <h2 className = 'heading heading--lv2'>
        <strong className = 'heading--underline'> Featured </strong> talks.
      </h2>

      <div className = 'feature-box-container'>
        { renderHighlights(talks) }
      </div>

      <h2 className = 'heading heading--lv2'>
        <strong className = 'heading--underline'> Featured </strong> side projects.
      </h2>

      <div className = 'feature-box-container'>
        { renderHighlights(projects) }
      </div>

      <h2 className = 'heading heading--lv2'>
        <strong className = 'heading--underline'> Featured </strong> videos.
      </h2>

      <div className = 'feature-box-container'>
        { renderHighlights(videos) }
      </div>

    </DefaultLayout>
  );

}

export default Index;
