import React from 'react';
import Logo from '../logo/Logo.png';
import './Header.css';

const Header = () => {
  return (
    <div id='head' >
        <img src={Logo} alt='logo' />
        <h2>Rahul Notes</h2>
    </div>
  )
}

export default Header;