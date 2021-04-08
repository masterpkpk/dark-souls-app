import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-1">
      <div className="container">
        <li className="brand-logo">Dark Souls 3 Boss Guide</li>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar