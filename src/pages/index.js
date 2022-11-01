import React, { useState, useEffect } from 'react';
import DefaultLayout from '../templates/default-layout/';
import '../atoms/link/link.css';
import '../atoms/text/text.css';
import '../atoms/list/list.css';
import '../atoms/comment-bar/comment-bar.css';
import '../atoms/headings/headings.css';
import CopyToClipBoard from '../atoms/copy-to-clipboard';
import Github from '../assets/icons/github.svg';
import Twitter from '../assets/icons/twitter.svg';
import SEO from '../bosons/seo/';
import Link from '../atoms/link/';
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
        I'm <b className = 'text--highlight'>Afonso Pacifer</b>! From São Paulo - Brazil <br/> I started as a software engineer back in 2010, working with Front-End web standarts. 
      </p>

      <p className = 'text'>
        I'm currently working full-time with <b className = 'text--highlight'>DevRel</b> and <b className = 'text--highlight'>Platform Front-End Specialist</b> at <a href='#' className = 'link'>Neoway</a> <em className = 'text--hand-drawing'>(The biggest Data Analytics and Artificial Intelligence company in Latin America for business)</em>. 
      </p>

      <p className = 'text'>
        Before that, I was the  <b className = 'text--highlight'>Tech Lead</b> and  <b className = 'text--highlight'> Senior Javascript Full Stack Developer</b> at <a href='#' className = 'link'>valleweb</a>
        , host at <a href='#' className = 'link'>frontendbr</a> <em className = 'text--hand-drawing'>(The biggest brazilian Front-End community)</em>, full-time <b className = 'text--highlight'>CSS evangelist</b> and much more.
      </p>

      <span className = 'comment-bar'>
        <b className = 'text--highlight'>Work together?</b> Send me an e-mail for afonsopolis@gmail.com <CopyToClipBoard text = 'afonsopolis@gmail.com' />
      </span>

      <h2 className = 'heading heading--lv2'>
        <strong className = 'heading--underline'> Links </strong> to get to know me better: 
      </h2>

      <p className = 'text'>

        <ul className = 'list'>
          
          <li className = 'list__item'>
            <b className = 'text--highlight'>2020</b>
            Personal blog post:
            <a 
              href = 'https://dev.to/afonsopacifer/how-i-became-a-senior-javascript-developer-with-personal-projects-1lpo'
              target = '_blank'
              className = 'link'
            >
              How I became a senior javascript developer with personal projects
            </a>
          </li>
          
          <li className = 'list__item'>
            <b className = 'text--highlight'>2019</b>
            Video interview:
            <a
              href = 'https://www.youtube.com/watch?v=ALjRWVJIJ4c'
              target = '_blank'
              className = 'link'
            >
              The Velopers #38 - Afonso Pacifer
            </a>
          </li>
          
          <li className = 'list__item'>
            <b className = 'text--highlight'>2017</b>
            Podcast interview:
            <a 
              href = 'https://devnaestrada.com.br/2017/11/24/afonso-pacifer.html'
              target = '_blank'
              className = 'link'
            >
              DNE 132 - Afonso Pacifer
            </a>
          </li>
          
          <li className = 'list__item'>
            <b className = 'text--highlight'>2017</b> 
            Text interview:
            <a
              href = 'https://medium.com/trainingcenter/como-%C3%A9-trabalhar-como-evangelista-css-por-afonso-pacifer-32cc077f4fdd'
              target = '_blank'
              className = 'link'
            >
              Como é trabalhar como Evangelista CSS, por Afonso Pacifer
            </a>
          </li>
        
        </ul>

      </p>

      <Link href = '#'> 
        <Github />
        Follow me on Github <b className = 'text--highlight'> +1.3k </b>
      </Link>

      <Link href = '#'> 
        <Twitter />
        Follow me on Twitter  <b className = 'text--highlight'> +3k </b>
      </Link>

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
