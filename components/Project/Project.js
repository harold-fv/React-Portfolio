import React from 'react';
import './Project.css';

const Project = ({ title, imageUrl, deployedUrl, repoUrl }) => {
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

export default Project;
