import React from 'react';

const Footer = () => {
  return (
    <footer 
      className="bg-dark text-light py-3" 
      style={{ 
        position: 'fixed', 
        bottom: '0', 
        width: '100%', 
        zIndex: '100', // Ensure the footer stays on top if there are other elements
        minHeight: '40px' 
      }}
    >
      <div className="container d-flex align-items-center justify-content-center">
        {/* Copyright */}
        <p className="mb-0 text-center">&copy; {new Date().getFullYear()} V Tech Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
