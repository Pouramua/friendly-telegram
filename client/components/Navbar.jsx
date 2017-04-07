import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <Router>
      <ul className="navbar">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/teachers'>Teacher</Link></li>
        <li><Link to='/events'>Events</Link></li>
        <li><Link to='/photos'>Photos</Link></li>
        <li><Link to='/songs'>Songs</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
      </ul>
    </Router>
    </div>
  )
}

export default Navbar
