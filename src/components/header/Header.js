import React from 'react';
import './Header.css';
import logo from '../../assets/icons/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="headerLogo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="headerNav">
        <ul>
          <li><a href='/' className='headerLabel'>About Us</a></li>
          <li><a href='/' className='headerLabel'>Feedbacks</a></li>
          <li><a href='/' className='headerLabel'>Contact Us</a></li>
        </ul>
      </nav>
      <div className="headerDownload">
        <button>Download</button>
      </div>
    </header>
  );
};

export default Header;
