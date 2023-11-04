import React from 'react';

function Footer() {
  return (
    <footer className = {'fixed-bottom'}>
      <p>&copy; {new Date().getFullYear()} Jenae Luthi</p>
    </footer>
  );
}

export default Footer;
