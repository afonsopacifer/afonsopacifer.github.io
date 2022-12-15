import React from 'react';
import Arrow from '../../assets/icons/arrow.svg';
import './video.css';

const Video = ({ src }) => (
  <div className = 'video-container'>

    <div className = 'video'>

      <span className = 'video__text'>
        Working for <span className = 'video__text--highlight'> build </span><br/>
        <span className = 'video__text--highlight'> Developer </span> Experiences
      </span>

      <video
        autoplay = 'autoplay'
        className = 'video__player'
        loop
        muted
      >
        <source src = { src } type = 'video/mp4' />
      </video>

      <a className = 'video__warning' href = '#content'>
        <span className = 'video__warning__text'> Scroll Down </span>
        <Arrow className = 'video__warning__icon' />
      </a>

    </div>

  </div>
);

export default Video;
