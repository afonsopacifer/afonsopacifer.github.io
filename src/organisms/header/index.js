import React from 'react';
import Controls from '../../molecules/controls';
import Menu from '../../molecules/menu';
import Social from '../../molecules/social';
import './header.css';

const Header = ({ className }) => (
  <div className = { `header-container ${className}` }>
    <header className = 'header'>
      <Controls />
      <Menu />
      <Social />
    </header>
  </div>
);

export default Header;
