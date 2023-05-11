// Imports the necessary React and component libraries, as well as the application's CSS styles.
import React, { useState } from 'react';
import '../assets/styles.css';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import NavTabs from './Navtabs';
import Footer from './Footer'; 

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
      }
      return <AboutMe />;
  };


  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer /> {/* This is where we include the Footer component */}
    </div>
  );
}