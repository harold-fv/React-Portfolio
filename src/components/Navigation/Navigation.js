import React from 'react';
import './Navigation.css'; // Import the CSS file

function NavigationBar() {
  return (
    <nav className="nav"> 
      <ul>
        <li>
          <a className="nav-item" href="/">About Me</a> 
        </li>
        <li>
          <a className="nav-item" href="/portfolio">Portfolio</a> 
        </li>
        <li>
          <a className="nav-item" href="/resume">Resume</a> 
        </li>
        <li>
          <a className="nav-item" href="/contact">Contact</a> 
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;