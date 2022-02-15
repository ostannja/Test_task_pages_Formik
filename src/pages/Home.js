import React from 'react';
import Navbar from '../components/Nav';
import backgroundImage from '../img/background-image.png'
import './home.scss'

const Home = () => {
  return (
    <div className="container-fluid p-0 ">
      <Navbar />
      <div className='main'>
        <img src={backgroundImage} alt="background_image" className='background-image' />
        <img src={backgroundImage} alt="background_image" className='background-image' />
      </div>
    </div>
  );
}

export default Home