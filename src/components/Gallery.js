import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer';

const Gallery = () => {
  const imageStyle = {
    height: '200px', // Set desired height
    width: '100%',   // Ensure full width of the card
    objectFit: 'cover' // Makes sure the image fills the space without stretching
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      backgroundColor: '#f8f9fa' 
    }}>
      <Navbar /> {/* Reusable Navbar component */}

      <main style={{ flex: '1', padding: '20px' }}>
        <h1 className="text-center mb-4">Gallery</h1>

        <div className="container">
          <div className="row">
            {/* List of image filenames located in the public folder */}
            {[
              '/images/H_S1.jpg',
              '/images/img2.jpg',
              '/images/img3.jpg'
            ].map((src, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card">
                  <img 
                    src={src} 
                    className="card-img-top" 
                    alt={`Gallery item ${index + 1}`} 
                    style={imageStyle} // Apply the image styling
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer /> {/* Footer will always be at the bottom */}
    </div>
  );
};

export default Gallery;
