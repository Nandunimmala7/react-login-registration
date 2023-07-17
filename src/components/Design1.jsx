import React from 'react'
import { useState } from 'react'
import "../styles/design1.css"
import { FaBars } from 'react-icons/fa';

const Design1 = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggleNav = () => {
        setIsOpen(!isOpen);
      };
  return (
    <div>
        <button className={`togglebtn ${isOpen ? 'active' : ''}`} onClick={toggleNav}>
            <FaBars />
        </button>

    <div className={`sidenav ${isOpen ? 'open' : 'close'}`}>
    <span className="closebtn" onClick={toggleNav}>&times;</span>
        <div className="home">HOME</div>
        <div className="cart">CART</div>
        <div className="notifications">NOTIFICATIONS</div>
        <div className="marketplace">MARKET PLACE</div>
    </div>
    </div>
  )
}

export default Design1