import React from 'react';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './assets/styles.css';

function App() {
  const [route, setRoute] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handleRouteChange = () => {
      setRoute(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const renderRoute = () => {
    switch (route) {
      case '/':
        return <AboutMe />;
      case '/portfolio':
        return <Portfolio />;
      case '/resume':
        return <Resume />;
      case '/contact':
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

export default App;
