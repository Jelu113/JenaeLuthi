import React from "react";
import Navigation from "./Navigation"

function Header(props) {
  return (
    <header>
      <h1>Jenae Luthi</h1>
      <nav>
        <Navigation currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} />
    
      </nav>
    </header>
  );
}

export default Header;
