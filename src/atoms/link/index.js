import React from 'react';
import '../button/button.css';

const Link = ({
  href,
  children,
  customStyle,
  }) => {

  let customClass;

  if (customStyle === 'primary') {
    customClass = 'button--primary';
  }

  if (customStyle === 'secondary') {
    customClass = 'button--secondary';
  }

  return (
    <a
      className = 'button'
      href = { href }
      target = '_blank'
    >

      <span
        className = { `button__content ${customClass}` }
        tabIndex = '-1'
      >
        { children }
      </span>

    </a>
  );

};

export default Link;