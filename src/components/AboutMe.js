import React from 'react';
import './AboutMe/AboutMe.css';
import haroldpictm2 from '../images/haroldpictm2.jpg';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div className="about-me-content">
        <img src={haroldpictm2} alt="Harold Gonzales" />
        <div>
          <p>
            Hello, I am Harold Gonzales. I'm a graduate of Computer Engineering with Masters Degree in Information Management.
            I have 10 Years of extensive Information Systems management, and supervision•I have comprehensive background in 
            computer systems administration,  IT infrastructure management, Network Management,and Project Management.
          </p>
          <p>
            Thank you for Visiting this site. You will find more about and my accomplishments during my Full Stack Development Trainining in UCLA Extension.
            I am happy to showcase my amazing journey of coding/training with the help of my class instructors, tutors and my collegues. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;