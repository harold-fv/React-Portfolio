import React from 'react';
import './Navigation/Navigation.css'; // Make sure the path to your CSS file is correct

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav">
      <li className="nav-list-item">
        <a
          href="#AboutMe"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'nav-item active' : 'nav-item'}
        >
          AboutMe
        </a>
      </li>
      <li className="nav-list-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-item active' : 'nav-item'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-list-item">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-item active' : 'nav-item'}
        >
          Resume
        </a>
      </li>
      <li className="nav-list-item">
        <a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-item active' : 'nav-item'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;