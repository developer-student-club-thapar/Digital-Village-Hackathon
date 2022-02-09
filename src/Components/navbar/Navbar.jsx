import React from 'react';
import './navbar.css'

const Navbar = () => {
  return <div className='nav-bar'>
      <span className='navbar-chips'>Home</span>
      <span className='navbar-chips'>About Us</span>
      <span className='navbar-chips'>Guidelines</span>
      <span className='navbar-chips'>Problem Statements</span>
      <span className='navbar-chips'>Sponsors</span>
      <span className='navbar-chips'>Speakers</span>
      <span className='navbar-chips'>Prizes</span>

  </div>;
};

export default Navbar;
