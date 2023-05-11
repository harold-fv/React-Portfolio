// Imports the necessary React and component libraries, as well as the application's CSS styles.
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './assets/styles.css';

// Defines the main App component, which serves as the root component for the application.
function App() {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleRouteChange);

    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  const renderRoute = () => {
    switch (route) {
      case '#/':
        return <AboutMe />;
      case '#/portfolio':
        return <Portfolio />;
      case '#/resume':
        return <Resume />;
      case '#/contact':
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        {renderRoute()}
      </main>
      <Footer />
    </div>
  );
}

// Exports the 'App' component so it can be used in other files.
export default App;