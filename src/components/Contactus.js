import React from 'react';
import Navbar from './Navbar'; // Import your Navbar component
import Footer from './Footer'; // Import the Footer component
import './Contactus.css'; // Import the CSS file

const Contactus = () => {
  return (
    <div className="page-container" style={{ backgroundColor: '#935CEB', minHeight: '100vh', marginBottom: '50px' }}>
      {/* Include Navbar Component */}
      <Navbar />

      {/* Main Content Section */}
      <div className="content-wrap mt-4">
        <div className="container text-white">
          <h2 className="text-center mb-4" style={{ fontSize: '28px', fontWeight: 'bold', textShadow: '1px 1px 2px white' }}>
            Contact Us
          </h2>

          {/* Contact Form Section */}
          <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}>Send Us a Message</h4>
          <form className="mb-5">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="btn btn-light mt-3" style={{ backgroundColor: '#fff', color: '#935CEB', fontWeight: 'bold' }}>
              Submit
            </button>
          </form>

          {/* Contact Details Section */}
          <div className="row">
            <div className="col-md-6">
              <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}>Get in Touch</h4>
              <p>
                <strong>Address:</strong> <br />Vaisiri Institute of Management and Technology<br />
                  2nd Phase, Sri Sharadadevi Nagar,<br />
                  Near Sai Baba Temple, Tumkur. <br />
                <strong>Phone:</strong> +91 82172 30766 <br />
                <strong>Email:</strong> vaisirifirstgradecollege@gmail.com
              </p>
              <p>Feel free to reach out to us via the contact form or visit us at our office for any inquiries or support!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Contactus;
