import React from 'react';
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
        autoplay = 'autoplay'
        muted
      >
        <source src = { src } type = 'video/mp4' />
      </video>

    </div>

  </div>
);

export default Video;
