import React from 'react';

const renderTechIcons = techIcons => {

  const icons = techIcons.map(techIcon => (
    <li className = 'list-box__techs__item'>
      <img 
        className = 'list-box__techs__icon'
        src = { `/techs/${techIcon}` } 
        alt = { techIcon }
      />
    </li>
  ));

  return (
    <ul className = 'list-box__techs'>
      { icons }
    </ul>
  );

};

export default renderTechIcons;
