// Imports React and the component's specific CSS styles.
import React from 'react';
import './Project.css';

// This is a functional React component named 'Project'. 
// the URL of the project image, the URL of the deployed project, and the URL of the project's GitHub repository.
const Project = ({ title, imageUrl, deployedUrl, repoUrl }) => {

// Returns the JSX for the 'Project' component. 
  return (
    <div className="project">
      <a href={deployedUrl} target="_blank" rel="noreferrer">
        <div className="secondary">
          <div className="project-title">
            <h3>{title}</h3>
          </div>
          <img className="project-image" src={imageUrl} alt={title} />
        </div>
      </a>
      <div className="project-links">
        <a href={deployedUrl} target="_blank" rel="noreferrer">
          Deployed Application
        </a>
        <br />
        <a href={repoUrl} target="_blank" rel="noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
};
// Exports the 'Project' component so it can be imported and used in other components or files.
export default Project;
