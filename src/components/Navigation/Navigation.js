import React from 'react';
import './Navigation.css'; // Import the CSS file

function NavigationBar() {
  return (
    <nav className="nav"> {/* Add the class name to the nav */}
      <ul>
        <li>
          <a className="nav-item" href="/">About Me</a> {/* Add the class name to the anchor */}
        </li>
        <li>
          <a className="nav-item" href="/portfolio">Portfolio</a> {/* Add the class name to the anchor */}
        </li>
        <li>
          <a className="nav-item" href="/resume">Resume</a> {/* Add the class name to the anchor */}
        </li>
        <li>
          <a className="nav-item" href="/contact">Contact</a> {/* Add the class name to the anchor */}
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;