import React, { useState } from 'react';

import './App.css';
import Header from './components/Header'; // Import your Header component
import Footer from './components/Footer';
import Portfolio from './components/Project'
import About from './components/About'
import Contact from './components/Contact'
function App() {
  const [currentPage, setCurrentPage] = useState('Portfolio');

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
