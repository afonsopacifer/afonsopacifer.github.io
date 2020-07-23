import React from 'react';
import Heart from '../../assets/icons/heart.svg';
import './footer.css';

const Footer = () => (
  <footer className = 'footer'>
    <span className = 'footer__text'>
      Designed with <Heart className = 'footer__icon' /> by me.
    </span>
  </footer>
);

export default Footer;
