import React, { useState } from 'react';
import './button.css';
import Toggle from '../../assets/icons/toggle.svg';

const Button = ({
  onClick,
  children,
  disabled,
  toggle,
  haspopup,
  id,
  }) => {

  const [toggled, setToggled] = useState(false);

  const attributes = {

    className: `button ${disabled ? 'button--disabled' : ''}`,

    id,

    ['aria-pressed']: toggle ? toggled : null,

    ['aria-expanded']: haspopup ? toggled : null,

    ['aria-controls']: haspopup ? id + '-popup' : null,

    ['aria-haspopup']: haspopup ? 'true' : null,

    disabled: disabled,

    onClick: () => {
      if(toggle || haspopup) setToggled(!toggled);
      if(onClick) onClick();
    }

  }
  
  return (
    <button { ...attributes }>

      <span
        className = { `button__content` }
        tabIndex = '-1'
      >

        { children }

        { haspopup && (<Toggle className = 'button__toggle__icon' />) }        

      </span>

    </button>
  );

};

export default Button;
