import React from 'react';
import './Nav.scss'
import Burger from './Burger';
import { Bell, Person } from 'react-bootstrap-icons';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="right-menu">
        <input className="search form-control me-2" type="search" placeholder="Type to search" aria-label="Search" />
        <Bell className='right-menu-icon' />
        <Person className='right-menu-icon' />
      </div>
      <Burger />
    </div>
  )
}

export default Navbar
