import React from 'react';
import './Nav.scss';

function TopNav() {
  return (
    <nav id="navbar">
      <a href="#!" className="navbar__logo">
        WeBucks
      </a>
      <ul className="navbar__menu">
        <li>
          <a href="#!">COFFEE</a>
        </li>
        <li>
          <a href="#!">MENU</a>
        </li>
        <li>
          <a href="#!">STORE</a>
        </li>
        <li>
          <a href="#!">WHAT'S NEW</a>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
