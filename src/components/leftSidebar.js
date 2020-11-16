import React from "react";
import { Link, NavLink } from "react-router-dom";

function LeftSidebar() {
  return (
    <div id='mySidebar' className='left-sidebar'>
      <Link className='navbar-brand' to='/'>
        <svg
          className='logo'
          aria-label='Home'
          xmlns='http://www.w3.org/2000/svg'
          role='img'
          width='40px'
          height='40px'
        >
          <path d='M8 2.4l8 5.1-8 5.1-8-5.1 8-5.1zm16 0l8 5.1-8 5.1-8-5.1 8-5.1zM0 17.7l8-5.1 8 5.1-8 5.1-8-5.1zm24-5.1l8 5.1-8 5.1-8-5.1 8-5.1zM8 24.5l8-5.1 8 5.1-8 5.1-8-5.1z'></path>
        </svg>
        <br />
      </Link>

      <Link className='navbar-brand' to='/'>
        Vidly
      </Link>
      <Link className='navbar-brand' to='/'>
        <span className='icon-text'>Home</span>
      </Link>
      <br />
      <Link className='navbar-brand' to='/'>
        <span className='icon-text'>About</span>
      </Link>
      <Link className='navbar-brand' to='/'>
        <span className='icon-text'>Services</span>
      </Link>
      <Link className='navbar-brand' to='/'>
        <span className='icon-text'>Clients</span>
      </Link>
      <Link className='navbar-brand' to='/'>
        <span className='icon-text'>Contact</span>
      </Link>
    </div>
  );
}

export default LeftSidebar;
