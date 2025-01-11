import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer';
import { Carousel, Modal, Button } from 'react-bootstrap';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  // Check if the user is on a mobile device
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      setShowModal(true);
    }
  }, []);

  const handleClose = () => setShowModal(false);

  return (
    <div style={{ backgroundColor: '#935CEB', minHeight: '100vh' }}> {/* Set background color */}
      {/* Top Line with Contact Information */}
      <Navbar />

      {/* Slider and V TECH SOLUTIONS content */}
      <div className="container mt-4">
        <div className="row">
          {/* Slider on the left side */}
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="carousel-container" style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
              <Carousel interval={3000} controls={false} indicators={false} pause={false}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/1.jpg"
                    alt="First slide"
                    style={{ height: '400px', objectFit: 'cover' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/21.jpg"
                    alt="Second slide"
                    style={{ height: '400px', objectFit: 'cover' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/42.jpg"
                    alt="Third slide"
                    style={{ height: '400px', objectFit: 'cover' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/34.jpg"
                    alt="Fourth slide"
                    style={{ height: '400px', objectFit: 'cover' }}
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>

          {/* V TECH SOLUTIONS content on the right side */}
          <div className="col-lg-6 col-md-12">
            <div className="card" style={{ backgroundColor: '#f5f097', padding: '10px', borderRadius: '15px', height: '100%' }}>
              <h2 style={{ color: '#58368F', fontSize: '18px' }}>Welcome to Vaisiri Institute of Management and Technology</h2>
              <p style={{ fontSize: '14px' }}>
              Located in the heart of Tumkur, Sharadadevi Nagar, Vaisiri Institute of Management and Technology is a renowned institution dedicated to providing quality education. Our college offers a range of undergraduate and postgraduate programs designed to equip students with the skills and knowledge necessary to succeed in their chosen careers.
              </p>
              <h3 style={{ color: '#935CEB', fontSize: '16px' }}>Courses Offered :</h3>
              <ul style={{ fontSize: '14px' }}>
                <li>Master of Business Administration (MBA):- A two-year postgraduate program designed to develop business leaders and entrepreneurs.</li>
                <li>Bachelor of Business Administration (BBA):- A three-year undergraduate program that focuses on developing business management skills.</li>
                <li>Bachelor of Computer Applications (BCA):- A three-year undergraduate program that emphasizes computer applications and software development.</li>
              </ul>
              <h3 style={{ color: '#935CEB', fontSize: '16px' }}>Why Vaisiri?</h3>
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

      {/* Modal Popup for Desktop Mode Notification */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Open in Desktop Mode</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>For the best experience, please open this website in desktop mode.</p>
          <h5>Instructions:</h5>
          <ul>
            <li><strong>Android:</strong> Open the Chrome browser, tap the three dots at the top right, and select "Desktop site".</li>
            <li><strong>iOS:</strong> Open Safari, tap the "aA" icon in the address bar, and select "Request Desktop Website".</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Got it!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
