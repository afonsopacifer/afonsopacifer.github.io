import React from 'react';
import Controls from '../../molecules/Controls';
import Menu from '../../molecules/Menu';
import Social from '../../molecules/Social';
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
