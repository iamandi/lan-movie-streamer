import React from "react";
import { Link } from "react-router-dom";

function RightSidebar() {
  return (
    <div id='mySidebar' className='right-sidebar'>
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

export default RightSidebar;
