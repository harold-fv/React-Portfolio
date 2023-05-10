import React from 'react';
import Project from '../Project/Project';
import prj1 from '../../images/prj1.jpg';
import prj2 from '../../images/prj2.jpg';
import prj3 from '../../images/prj3.jpg';
import prj4 from '../../images/prj4.jpg';
import './Portfolio.css'; // import the CSS file

const Portfolio = () => {
  // Replace with your actual projects' data
  const projects = [
    { title: 'Project 1', imageUrl: prj1, deployedUrl: 'https://github.com/harold-fv/Tech-Blog', repoUrl: 'https://github.com/harold-fv/Tech-Blog' },
    { title: 'Project 2', imageUrl: prj2, deployedUrl: 'https://github.com/harold-fv/Social-Network-API', repoUrl: 'https://github.com/harold-fv/Social-Network-API' },
    { title: 'Project 3', imageUrl: prj3, deployedUrl: 'https://github.com/harold-fv/Employee-Tracker', repoUrl: 'https://github.com/harold-fv/Employee-Tracker' },
    { title: 'Project 4', imageUrl: prj4, deployedUrl: 'https://github.com/harold-fv/project2-foodcritics', repoUrl: 'https://github.com/harold-fv/project2-foodcritics' },
    // ...
  ];

  return (
    <div className="mainproject">
      <section className="portfolio">
        <h2>Portfolio</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;