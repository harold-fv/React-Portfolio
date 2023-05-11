import React from 'react';
import './Navigation.css'; // Import the CSS file

function NavigationBar() {
  return (
    <nav className="nav"> 
      <ul className="nav-list">
        <li className="nav-list-item">
          <a className="nav-item" href="/">About Me</a> 
        </li>
        <li className="nav-list-item">
          <a className="nav-item" href="/portfolio">Portfolio</a> 
        </li>
        <li className="nav-list-item">
          <a className="nav-item" href="/resume">Resume</a> 
        </li>
        <li className="nav-list-item">
          <a className="nav-item" href="/contact">Contact</a> 
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;