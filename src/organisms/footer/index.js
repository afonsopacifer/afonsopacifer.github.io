import React from 'react';
import Heart from '../../assets/icons/heart.svg';
import ReactIcon from '../../assets/icons/react-icon.svg';
import './footer.css';

const Footer = () => (
  <footer className = 'footer'>
    <small className = 'footer__text'>
      Design and code made with <Heart className = 'footer__icon footer__icon--pulse' /> and <ReactIcon className = 'footer__icon footer__icon--rotate' /> by me.
    </small>
  </footer>
);

export default Footer;
