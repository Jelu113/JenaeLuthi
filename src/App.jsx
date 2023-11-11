import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header"; // Import your Header component
import Footer from "./components/Footer";
import Portfolio from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  return (
    <>
     <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="appContainer">
        <div className = "centerApp">
          <main>{renderPage()}</main>
          </div>
          <Footer />
       
      </div>
    </>
  );
}

export default App;
