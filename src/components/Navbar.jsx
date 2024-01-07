import React from 'react'
import {Link} from 'react-scroll'
import '../styles/Navbar.css'


const Navbar = () => {

  return (
     <div className='nav'>
      <h3>Portfolio</h3>
      <div className='nav-list'>
        <Link  to='Home' smooth={true}  offset={-30} duration={500} className='nav-link'>Home</Link>
        <Link  to='About' smooth={true}  offset={-60} duration={500} className='nav-link'>About</Link>
        <Link  to='Portfolio'  smooth={true}  offset={-50} duration={500} className='nav-link'>Porfolio</Link>
        <Link  to='Skills'  smooth={true}  offset={-50} duration={500} className='nav-link'>Skills</Link>
      </div>
    </div> 
  )
}

export default Navbar
