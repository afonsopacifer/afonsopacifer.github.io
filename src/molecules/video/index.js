import React from 'react';
import Arrow from '../../assets/icons/arrow.svg';
import './video.css';
import '../../atoms/text/text.css';

const Video = ({ src }) => (
  <div className = 'video-container'>

    <div className = 'video'>

      <span className = 'video__text'>
        Hack <br/>
        and share<span className = 'text--highlight'>.</span>
      </span>

      <video
        autoplay = 'autoplay'
        className = 'video__player'
        loop
        muted
      >
        <source src = { src } type = 'video/mp4' />
      </video>

      <span  className = 'video__warning'>
        <span className = 'video__warning__text'> Scroll Down </span>
        <Arrow className = 'video__warning__icon' />
      </span>

    </div>

  </div>
);

export default Video;
