import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This is essential for dropdowns to work

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid" style={{ backgroundColor: '#935ceb' }}>
        <div className="row align-items-center py-2">
          <div className="col-3"></div>
          <div className="col-6 text-center">
            <p className="mb-0 text-white">Phone: +1234567890 | Email: example@example.com</p>
          </div>
          <div className="col-3 text-end">
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

      <nav className="navbar navbar-expand-lg d-flex justify-content-end align-items-center px-4 py-3" style={{ backgroundColor: '#58368F', height: '75px' }}>
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/" style={{ 
            textShadow: '1px 1px 2px white, 0 0 25px white, 0 0 5px white, 0 0 5px white',
            fontSize: '24px',
            marginLeft: '20px'
          }}>
            V-TECHNO  V TECH SOLUTIONS
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
                <Link className="nav-link text-white" to="/pgcourse">P G Courses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/trainingcourse">Training Course</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact-us">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/job-portal">Job Portal</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
