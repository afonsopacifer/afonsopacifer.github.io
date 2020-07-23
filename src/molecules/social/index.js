import React from 'react';
import Linkedin from '../../assets/icons/linkedin.svg';
import Github from '../../assets/icons/github.svg';
import Twitter from '../../assets/icons/twitter.svg';
import './social.css';

const Social = () => (
  <div className = 'social'>

    <a
      className = 'social__link'
      href = 'https://br.linkedin.com/in/afonsopacifer'
      target = '_blank'
    >
      <Linkedin className = 'social__icon' />
    </a>

    <a
      className = 'social__link'
      href = 'https://github.com/afonsopacifer'
      target = '_blank'
    >
      <Github className = 'social__icon' />
    </a>

    <a
      className = 'social__link'
      href = 'https://twitter.com/afonsopacifer'
      target = '_blank'
    >
      <Twitter className = 'social__icon' />
    </a>

  </div>
);

export default Social;
