import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This is essential for dropdowns to work

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid" style={{ backgroundColor: '#935ceb' }}>
        <div className="row align-items-center py-2">
          <div className="col-12 text-center">
            <p className="mb-0 text-white">Phone: +91 82172 30766 | Email: vaisirifirstgradecollege@gmail.com</p>
          </div>
          <div className="col-12 text-center">
            <div className="d-inline-flex gap-2">
              <a href="https://www.facebook.com/vtech.tumkur?mibextid=ZbWKwL">
                <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=ffffff" alt="Facebook" width="20" />
              </a>
              <a href="https://www.instagram.com/vtechsolutionstumkur?igsh=ZW9hNmlhd3RnaHE=">
                <img src="https://img.icons8.com/?size=100&id=32323&format=png&color=ffffff" alt="Instagram" width="20" />
              </a>
              <a href="mailto:vtech.tumkur12@gmail.com">
                <img src="https://img.icons8.com/?size=100&id=OumT4lIcOllS&format=png&color=ffffff" alt="Email" width="20" />
              </a>
              <a href="#">
                <img src="https://img.icons8.com/?size=100&id=13963&format=png&color=ffffff" alt="Twitter" width="20" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg d-flex justify-content-between align-items-center px-4 py-3" style={{ backgroundColor: '#58368F', height: '75px' }}>
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/" style={{ 
              textShadow: '1px 1px 2px white, 0 0 25px white, 0 0 5px white, 0 0 5px white',
              fontSize: '24px',
              marginLeft: '20px'
            }}>
            <img 
              src="/logo.jpeg" 
              alt="Logo" 
              style={{ 
                width: '40px',   // Adjust the width as per your needs
                height: '40px',  // Adjust the height as per your needs
                marginLeft: '10px',  // Add some space between the text and the image
                marginRight: '10px'
              }} 
            />
            Vaisiri Institute
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about-us">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/gallery">Gallery</Link>
              </li>              
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact-us">Contact Us</Link>
              </li>              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
