import React, { useState } from 'react';
import Plus from '../../../../assets/icons/plus.svg';
import Minus from '../../../../assets/icons/minus.svg';
import './dropdown.css';

const Dropdown = () => {

  const [open, setOpen] = useState(false);

  return (
    <>

      <button className = 'lp-layout__dropdown' onClick = {() => setOpen(!open)}>

        <p className = 'lp-layout__text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        { !open 
          ? <Plus className = 'lp-layout__dropdown__icon' />
          : <Minus className = 'lp-layout__dropdown__icon' />
        }
        
      </button>

      { open ? 
  
        <div className = 'lp-layout__dropdown__box'>
          <ul className = 'lp-layout__checklist'>
            <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
          </ul>
        </div>
  
      : null }

    </>
  )
};

export default Dropdown;
