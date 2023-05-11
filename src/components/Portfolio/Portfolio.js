
//Imports the necessary modules and components
import React from 'react';
import Project from '../Project/Project';
import prj1 from '../../images/prj1.jpg';
import prj2 from '../../images/prj2.jpg';
import prj3 from '../../images/prj3.jpg';
import prj4 from '../../images/prj4.jpg';
import './Portfolio.css'; // import the CSS file

const Portfolio = () => {
<<<<<<< HEAD
  
 // Defines an array of projects where each project is represented as an object. 
  // Each object includes properties for the project's title, image URL, deployed URL, and repository URL.
=======
  // Actual projects data
>>>>>>> 0143fb877c70f2ddf721cd20006a74ace4a98eca
  const projects = [
    { title: 'Project 1', imageUrl: prj1, deployedUrl: 'https://github.com/harold-fv/Tech-Blog', repoUrl: 'https://github.com/harold-fv/Tech-Blog' },
    { title: 'Project 2', imageUrl: prj2, deployedUrl: 'https://github.com/harold-fv/Social-Network-API', repoUrl: 'https://github.com/harold-fv/Social-Network-API' },
    { title: 'Project 3', imageUrl: prj3, deployedUrl: 'https://github.com/harold-fv/Employee-Tracker', repoUrl: 'https://github.com/harold-fv/Employee-Tracker' },
    { title: 'Project 4', imageUrl: prj4, deployedUrl: 'https://github.com/harold-fv/project2-foodcritics', repoUrl: 'https://github.com/harold-fv/project2-foodcritics' },
    // ...
  ];


  // This component contains a div with two nested elements: an h2 tag and another div.
  // The h2 tag displays the title 'Portfolio'. 

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
