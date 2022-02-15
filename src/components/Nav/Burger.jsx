import React, { useState } from 'react';
import './Nav.scss';
import LeftNav from './LeftNav';
import companyLogo from '../../img/logo.png'
import { ChevronDoubleRight } from 'react-bootstrap-icons';


const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='burger' open={open} onClick={() => setOpen(!open)} >
        <img src={companyLogo} alt="logo" width={'135 px'} />
        <ChevronDoubleRight className='burger-icon' style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </div>
      <LeftNav open={open} />
    </>
  );
};

export default Burger;
