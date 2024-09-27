import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';  // Import your Navbar component
import Footer from './Footer';  // Import the Footer component

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    course: 'select',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzKwZsdgTUc7ZI7vGC5hpaYZW6mtqsFz16OtCvgVrQTjGnzGVxkv83UJ7Q-g4Th_1Wl/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      alert('Thank you for contacting us!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        number: '',
        course: 'select',
        message: '',
      });
    } catch (error) {
      console.error('Error:', error);
      alert('There was a problem submitting your form. Please try again later.');
    }
  };

  return (
    <>
      {/* Include Navbar Component */}
      <Navbar />

      {/* Main Contact Form Section */}
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Container className="flex-grow-1">
          <Row className="justify-content-center">
            <Col md={6} lg={5}>
              <h1 className="text-center mb-4">Contact Us</h1>
              <Form id="contact-form" onSubmit={handleSubmit}>
                {/* Name */}
                <Form.Group controlId="name" className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </Form.Group>

                {/* Email */}
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>

                {/* Phone Number */}
                <Form.Group controlId="number" className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </Form.Group>

                {/* Courses */}
                <Form.Group controlId="course" className="mb-3">
                  <Form.Label>Choose a course</Form.Label>
                  <Form.Control
                    as="select"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                  >
                    <option value="select">Select</option>
                    <option value="PG COURSES">PG COURSES</option>
                    <option value="TALLY">TALLY</option>
                    <option value="TRAINING COURSES">TRAINING COURSES</option>
                  </Form.Control>
                </Form.Group>

                {/* Message */}
                <Form.Group controlId="message" className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    required
                  />
                </Form.Group>

                {/* Submit Button */}
                <Button variant="primary" type="submit" className="w-100">
                  Send
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Contactus;
