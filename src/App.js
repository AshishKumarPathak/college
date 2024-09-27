import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import PgCourses from './components/PgCourses';
import Contactus from './components/Contactus';
import Jobportal from './components/Jobportal';

// Import other components/pages as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pgcourse" element={<PgCourses />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/job-portal" element={<Jobportal />} />
        
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
