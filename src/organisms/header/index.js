import React from 'react';
import Controls from '../../molecules/Controls';
import Menu from '../../molecules/Menu';
import Social from '../../molecules/Social';
import './header.css';

const Header = () => (
  <div className = 'header-container'>
    <header className = 'header'>
      <Controls />
      <Menu />
      <Social />
    </header>
  </div>
);

export default Header;
