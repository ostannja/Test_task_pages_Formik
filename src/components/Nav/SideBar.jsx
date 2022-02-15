import React from 'react';
import './Nav.scss';
import { ChevronRight } from 'react-bootstrap-icons';

const SideBar = ({ show, text }) => {
  return (
    <div className="sidebar" style={{ opacity: show ? '1' : '0' }}>
      <div className='sidebar-container'>
        <div className="sidebar-title">{text}</div>
        <div className='sidebar-subtitle'>templates for your app</div>
        <p className='sidebar-text'>
          A collection of different templates for Login / Create account /
          Forgot password / Verification help you running your project today
        </p>
        <a type="submit"
          className="btn btn-block button mt-4 mb-3" href="/template">Browse templates<ChevronRight /> </a>
      </div>
    </div>
  );
};

export default SideBar;
