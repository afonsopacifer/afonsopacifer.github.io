import React from 'react';
import { Link } from 'gatsby';
import './menu.css';
import Training from '../../assets/icons/trainings.svg';

const Menu = () => (
  <nav className = 'menu'>
    <ul className = 'menu-list'>

      <li className = 'menu-list__item'>
        <Link
          to = '/'
          className = 'menu-list__link'
          activeClassName = 'menu-list__link--active'
        >
          About
        </Link>
      </li>

      <li className = 'menu-list__item'>
        <Link
          to = '/articles'
          className = 'menu-list__link'
          activeClassName = 'menu-list__link--active'
        >
          Articles
        </Link>
      </li>

      <li className = 'menu-list__item'>
        <Link
          to = '/talks'
          className = 'menu-list__link'
          activeClassName = 'menu-list__link--active'
        >
          Talks
        </Link>
      </li>

      <li className = 'menu-list__item'>
        <Link
          to = '/videos'
          className = 'menu-list__link'
          activeClassName = 'menu-list__link--active'
        >
          Videos
        </Link>
      </li>

      <li className = 'menu-list__item'>
        <Link
          to = '/projects'
          className = 'menu-list__link'
          activeClassName = 'menu-list__link--active'
        >
          Projects
        </Link>
      </li>

      {/* <li className = 'menu-list__item'>
        <Link
          to = '/mentorship'
          className = 'menu-list__link menu-list__link--highlight'
          activeClassName = 'menu-list__link--active'
        >
          <Training className = 'menu-list__icon' />
          Dev Trainings
        </Link>
      </li> */}

    </ul>
  </nav>
);

export default Menu;
