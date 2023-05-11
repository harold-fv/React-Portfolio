import React from 'react';
import Project from './Project';
import prj1 from '../images/prj1.jpg';
import prj2 from '../images/prj2.jpg';
import prj3 from '../images/prj3.jpg';
import prj4 from '../images/prj4.jpg';
import './Portfolio/Portfolio.css'; // import the CSS file

const Portfolio = () => {

  const projects = [
    { title: 'Project 1', imageUrl: prj1, deployedUrl: 'https://harold-fv.github.io/project-setup/', repoUrl: 'https://harold-fv.github.io/project-setup' },
    { title: 'Project 2', imageUrl: prj2, deployedUrl: 'https://hidden-retreat-77670.herokuapp.com', repoUrl: 'https://github.com/samanthaahn/food-critics' },
    { title: 'Project 3', imageUrl: prj3, deployedUrl: 'https://sheltered-retreat-34476.herokuapp.com', repoUrl: 'https://github.com/harold-fv/Tech-Blog' },
    { title: 'Coming soon', imageUrl: prj4, deployedUrl: 'https://github.com/harold-fv/E-Commerce-Back-End', repoUrl: 'https://github.com/harold-fv/E-Commerce-Back-End' },

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