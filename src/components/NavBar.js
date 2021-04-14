import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-1">
      <div className="container">
        <li className="brand-logo">Dark Souls 3 Mini Wiki</li>
        <ul className="right">
          <li><Link to="/">Bosses</Link></li>
          <li><Link to="/weapons">Weapons</Link></li>
          <li><Link to="/armor">Armor</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar