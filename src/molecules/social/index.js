import React from 'react';
import 'balloon-css';
import Linkedin from '../../assets/icons/linkedin.svg';
import Github from '../../assets/icons/github.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Instagram from '../../assets/icons/instagram.svg';
import './social.css';

const Social = () => (
  <div className = 'social'>

    <a
      className = 'social__link'
      href = 'https://br.linkedin.com/in/afonsopacifer'
      target = '_blank'
      aria-label = 'linkedin'
      data-balloon-pos = 'down-left'
      data-balloon-blunt
    >
      <Linkedin className = 'social__icon' />
    </a>

    <a
      className = 'social__link'
      href = 'https://github.com/afonsopacifer'
      target = '_blank'
      aria-label = 'github'
      data-balloon-pos = 'down'
      data-balloon-blunt
    >
      <Github className = 'social__icon' />
    </a>

    <a
      className = 'social__link'
      href = 'https://twitter.com/afonsopacifer'
      target = '_blank'
      aria-label = 'X'
      data-balloon-pos = 'down-right'
      data-balloon-blunt
    >
      <Twitter className = 'social__icon' />
    </a>

    <a
      className = 'social__link'
      href = 'https://www.instagram.com/afonsopacifer'
      target = '_blank'
      aria-label = 'Instagram'
      data-balloon-pos = 'down-right'
      data-balloon-blunt
    >
      <Instagram className = 'social__icon' />
    </a>

  </div>
);

export default Social;
