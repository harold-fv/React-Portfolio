
import React from 'react';
import Navigation from './Navigation';
import './Heather/Header.css'; 

const Header = () => {
  return (
    <header className="header"> 
      <h1 className="header-title">Portfolio</h1> 
      <Navigation />
    </header>
  );
};

export default Header;