import React, { useState } from 'react';
import './button.css';
import Toggle from '../../assets/icons/toggle.svg';

const Button = ({
  onClick,
  children,
  disabled,
  toggle,
  }) => {

  const [toggled, setToggled] = useState(false);

  const attributes = {

    className: `button ${disabled ? 'button--disabled' : ''}`,

    ['aria-pressed']: toggle ? toggled : null,

    disabled: disabled,

    onClick: () => {
      if(toggle) setToggled(!toggled);
      onClick();
    }

  }
  
  return (
    <button { ...attributes }>

      <span
        className = { `button__content` }
        tabIndex = '-1'
      >
        { children }

        { toggle && (<Toggle className = 'button__toggle__icon' />) }        

      </span>

    </button>
  );

};

export default Button;
