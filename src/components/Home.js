import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Announcements from './Announcements'; // Import the Announcements component
import Footer from './Footer';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      {/* Top Line with Contact Information */}
      <Navbar />

      {/* Announcements Section - Full width below Navbar */}
     <Announcements/>
      {/* Slider and V TECH SOLUTIONS content */}
      <div className="container mt-4">
        <div className="row">
          {/* Slider on the left side */}
          <div className="col-md-6">
            <div className="carousel-container" style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
              <Carousel interval={3000} controls={false} indicators={false} pause={false}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/Images/H_S1.jpg"
                    alt="First slide"
                    style={{ height: '400px', objectFit: 'cover' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/Images/img2.jpg"
                    alt="Second slide"
                    style={{ height: '400px', objectFit: 'cover' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/Images/img3.jpg"
                    alt="Third slide"
                    style={{ height: '400px', objectFit: 'cover' }}
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>

          {/* V TECH SOLUTIONS content on the right side */}
          <div className="col-md-6">
            <div className="card" style={{ backgroundColor: '#f5f097', padding: '10px', borderRadius: '15px', height: '100%' }}>
              <h2 style={{ color: '#58368F', fontSize: '18px' }}>V TECH SOLUTIONS</h2>
              <p style={{ fontSize: '14px' }}>V TECH Solutions is one of the Innovative Institute Focused Towards Empowering Students Through Quality Education. We Are Providing Training As Per The New Education Policy. Our Institution Has Well Equipped Lab Facility.</p>
              <h3 style={{ color: '#935CEB', fontSize: '16px' }}>V TECH Highlights :</h3>
              <ul style={{ fontSize: '14px' }}>
                <li>Job Oriented Computer Courses.</li>
                <li>Emphasis On Interactive Learning</li>
                <li>Focus On Students' Verbal And Overall Personality Development Through Group Discussions, Seminars, And Presentations.</li>
                <li>Placement Assistance For All Students</li>
                <li>Affordable Price</li>
              </ul>
              <h3 style={{ color: '#935CEB', fontSize: '16px' }}>Why V TECH?</h3>
              <ul style={{ fontSize: '14px' }}>
                <li>Qualified, Experienced & Dedicated Trainers.</li>
                <li>WI-Fi Enabled Campus, Lab With UPS & DG (Generator)</li>
                <li>Well Equipped Classroom with Projectors.</li>
                <li>Our Centre is Under CCTV Surveillance.</li>
                <li>Get Updates Through SMS.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
