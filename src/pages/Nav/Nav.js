import React from 'react'

//react router
import {NavLink} from 'react-router-dom'

//styles
import './Nav.css';

function Nav() {
  const handleActive = ({isActive}) => {
    return isActive ? 'active' : ''
  }

  return (
    <div className='nav-container'>
      <div className="nav-bar">
        <NavLink to="/"><img src={process.env.PUBLIC_URL + '/Nav_Images/MINA.png'} alt="brand" className={`nav-brand`} /></NavLink>
        <ul className={`${handleActive}`}>
          <li><NavLink to="/shop">Shop</NavLink></li>
          <li>
            <NavLink to="/about">About</NavLink><span>&#9660;</span>
            <NavLink to="/sustainability" className={`sustain-link`}>Sustainability</NavLink>
          </li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/">Cart (0)</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav