// Imports React, the component's specific CSS styles, and a PDF file of Harold's resume.
import React from 'react';
import './Resume/Resume.css';
import haroldresume from '../images/HAROLD_RESUME.pdf';

// This is a functional React component named 'Resume'.
const Resume = () => {

 // Returns the JSX for the 'Resume' component. This component is a section with the class 'resume',
  // containing an h2 tag, a download link for Harold's resume, and an h3 tag followed by several unordered lists.
  // These lists describe Harold's proficiencies in front-end and back-end development.

  return (
    <section className="resume">
      <h2>Resume</h2>
      <a className="download-resume" href={haroldresume} download>
        Download my Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        <li>Front-end Development Proficiency:</li>
      </ul>
      <ul>
        <li>
      Proficient in building interactive, user-friendly interfaces using JavaScript, React.js, and Redux.
Strong understanding of front-end web technologies including HTML5, CSS3, and JavaScript ES6+.
Experienced in responsive web design to ensure websites render well across various devices.
Proficient in using modern development tools and methodologies, such as version control with Git, Agile methodologies, and test-driven development.
Skilled in optimizing web performance and implementing SEO best practices.
Experienced in working with RESTful APIs and GraphQL to integrate front-end applications with back-end services.
      </li>
      </ul>
      <ul>
        <li>Back-end Development Proficiency:</li>
      </ul>
      <ul>
        <li>
        Proficient in building scalable, secure server-side applications using Node.js and Express.js.
Experienced in developing RESTful APIs and GraphQL APIs for front-end consumption.
Strong understanding of relational databases and NoSQL databases, including experience with MySQL, PostgreSQL, and MongoDB.
Proficient in authentication and authorization protocols, such as OAuth and JWT.
Skilled in using Docker for containerization and Kubernetes for orchestration.
Proficient in designing and implementing microservices architecture.
Experienced in using modern development tools and methodologies, such as version control with Git, Agile methodologies, and test-driven development.
      </li>
      </ul>


    </section>
  );
};

// Exports the 'Resume' component so it can be imported and used in other components or files.
export default Resume;