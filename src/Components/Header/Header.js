import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <div className="header-wrapper">
      <div className="button-wrapper">
        <NavLink className="btn" to="/cat/" >Все котики</NavLink>
        <NavLink className="btn" to="favorite" >Любимые котики</NavLink>
      </div>
    </div>
  )
}

export default Header