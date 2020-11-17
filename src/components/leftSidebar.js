import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ReactLogo } from "../logo.svg";

function LeftSidebar() {
  return (
    <div id='mySidebar' className='left-sidebar'>
      <Link className='navbar-brand' to='/'>
        <ReactLogo alt='logo' width='70px' height='70px' />
        <br />
      </Link>
      <br />

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
