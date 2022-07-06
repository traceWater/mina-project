import React from 'react'

//react router
import {Link} from 'react-router-dom'

//styles
import './Nav.css';

function Nav() {
  return (
    <div className='nav-container'>
      <div className="nav-bar">
        <Link to="/"><img src={process.env.PUBLIC_URL + '/Nav_Images/MINA.png'} alt="brand" className='nav-brand' /></Link>
        <ul>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about" className='drop-down'>About <span>&#9660;</span></Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/">Cart (0)</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav