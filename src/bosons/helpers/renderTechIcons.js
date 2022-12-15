import React from 'react';
import 'balloon-css';
import normalizeFileName from './normalizeFileName';

const renderTechIcons = techIcons => {

  const icons = techIcons.map((techIcon, i) => {
    
    const techName = normalizeFileName(techIcon);

    return (
      <li
        className = 'list-box__techs__item'
        aria-label = { techName }
        data-balloon-pos = 'up-left'
        data-balloon-blunt
        key = { `${techName}_${i}` }
      >
        <img 
          className = 'list-box__techs__icon'
          src = { `/techs/${techIcon}` } 
          alt = { techName }
        />
      </li>
    );

  });

  return (
    <ul className = 'list-box__techs'>
      { icons }
    </ul>
  );

};

export default renderTechIcons;
