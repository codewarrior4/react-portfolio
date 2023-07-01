import React from 'react';
import './index.css';
import {NavLink} from "react-router-dom"

function NavBar( {}) {
  return (
<nav>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className={({ isActive }) => (isActive ? "LinkActive" : "Link")} to="/" >About Me</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={({ isActive }) => (isActive ? "LinkActive" : "Link")} to="/portfolio" >Portfolio</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={({ isActive }) => (isActive ? "LinkActive" : "Link")} to="/contact" >Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={({ isActive }) => (isActive ? "LinkActive" : "Link")} to="/resume" >Resume</NavLink>
      </li>
    </ul>
</nav>
  )
}

export default NavBar;
