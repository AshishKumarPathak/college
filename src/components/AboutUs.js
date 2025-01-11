// src/components/AboutUs.js

import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      backgroundColor: '#935ceb', 
      color: 'black' 
    }}>
      <Navbar /> {/* Reusable Navbar component */}

      <main style={{ flex: '1' }}>
        <section className="about py-3" style={{ backgroundColor: '#935ceb', color: 'black' }}>
          <div className="container">
            <h2 
              className="text-black font-weight-bold d-flex justify-content-center mb-3" 
              style={{ 
                textShadow: '1px 1px 2px white, 0 0 25px white, 0 0 5px white, 0 0 5px white',
                fontSize: '28px', // Increased size for the heading
                fontWeight: 'bold'
              }}
            >
              ABOUT US
            </h2>

            <div className="text-white about-info" style={{ fontSize: '18px', lineHeight: '1.8' }}> {/* Increased text size */}
              <p>
                Vaisiri Institute of Management and Technology is committed to academic excellence and innovation. 
                Our experienced faculty, state-of-the-art infrastructure, and rigorous academic programs ensure that 
                our students receive a well-rounded education. Established in 2024, our institution is proud to be 
                part of the esteemed Vidyavahini Samsthe.
              </p>

              <h3 style={{ fontSize: '22px', marginTop: '20px' }}>Courses Offered</h3> {/* Increased size for subheading */}
              <ul style={{ fontSize: '18px', lineHeight: '1.8' }}> {/* Increased size for list items */}
                <li>
                  <strong>Master of Business Administration (MBA):</strong> A two-year postgraduate program designed to develop business leaders and entrepreneurs.
                </li>
                <li>
                  <strong>Bachelor of Business Administration (BBA):</strong> A three-year undergraduate program that focuses on developing business management skills.
                </li>
                <li>
                  <strong>Bachelor of Computer Applications (BCA):</strong> A three-year undergraduate program that emphasizes computer applications and software development.
                </li>
              </ul>

              <h3 style={{ fontSize: '22px', marginTop: '20px' }}>Location:</h3> {/* Increased size for subheading */}
              <p>
              Location
                Vaisiri Institute of Management and Technology<br></br>
                2nd Phase, Sri Sharadadevi Nagar,<br></br>
                Near Sai Baba Temple, Tumkur.<br></br>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer /> {/* Footer will always be at the bottom */}
    </div>
  );
};

export default AboutUs;
