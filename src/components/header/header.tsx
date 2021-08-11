import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <NavLink to="/">Star DB</NavLink>
      </h3>
      <ul className="d-flex">
        <li>
          <NavLink to="/people">People</NavLink>
        </li>
        <li>
          <NavLink to="/planets">Planets</NavLink>
        </li>
        <li>
          <NavLink to="/starships">Starships</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
