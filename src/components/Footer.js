import React from 'react';
import './Footer/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a
          href="https://github.com/harold-fv"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/harold-gonzales-24284a4b"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://stackoverflow.com/users"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stack Overflow
        </a>
      </div>
    </footer>
  );
};

export default Footer;