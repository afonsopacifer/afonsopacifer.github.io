import React from 'react';
import './button.css';

const Button = ({
  onClick,
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
    <button
      className = 'button'
      onClick = { onClick }
    >

      <span
        className = { `button__content ${customClass}` }
        tabindex = '-1'
      >
        { children }
      </span>

    </button>
  );

};

export default Button;
