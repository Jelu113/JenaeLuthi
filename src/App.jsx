import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'; // Import your Header component
import Footer from './components/Footer';
import Portfolio from './components/pages/Project';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume'
function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    
  };

  return (
    <>
      <div className="App">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} /> 
      
        <main className="mx-3">{renderPage()}</main>
        <Footer />
      </div>
    </>
  );
}

export default App;
