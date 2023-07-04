import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className='header'>
        <h3>WELCOME NIMMALA</h3>
    <nav className='nav'>
        <Link to="/" className='link'>Home</Link>
        <Link to="/about" className='link'>About</Link>
        <Link to="/experirnce" className='link' >Experience</Link>
        <Link to="/shopping" className='link' >Shopping</Link>
        
    </nav>
    </div>
  )
}

export default Header