import React from 'react';
import './Resume.css';
import haroldresume from '../../images/HAROLD_RESUME.pdf';

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a className="download-resume" href={haroldresume} download>
        Download my Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        <li>Proficiency 1</li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
};

export default Resume;