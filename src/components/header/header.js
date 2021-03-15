import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#1">Star DB</a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#1">People</a>
        </li>
        <li>
          <a href="#1">Planets</a>
        </li>
        <li>
          <a href="#1">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
