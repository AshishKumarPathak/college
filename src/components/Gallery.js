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
      backgroundColor: '#935ceb' 
    }}>
      <Navbar /> {/* Reusable Navbar component */}

      <main style={{ flexGrow: 1, padding: '20px',marginBottom:'50px' }}> {/* Allow main to grow and fill space */}
      <a 
              className="text-black font-weight-bold d-flex justify-content-center mb-3" 
              style={{ 
                textShadow: '1px 1px 2px white, 0 0 25px white, 0 0 5px white, 0 0 5px white',
                fontSize: '22px',
                fontWeight: 'bold'
              }}
            >
              GALLERY
            </a>

        <div className="page-container">
          <div className="row">
            {/* List of image filenames located in the public folder */}
            {[
              '/1.jpg',
              '/2.jpg',
              '/3.jpg',
              '/4.jpg',
              '/5.jpg',
              '/6.jpg',
              '/7.jpg',
              '/8.jpg',
              '/10.jpg',
              '/11.jpg',
              '/12.jpg',
              '/13.jpg',
              '/14.jpg',
              '/15.jpg',
              '/16.jpg',
              '/17.jpg',
              '/18.jpg',
              '/19.jpg',
              '/20.jpg',
              '/21.jpg',
              '/22.jpg',
              '/23.jpg',
              '/24.jpg',
              '/25.jpg',
              '/26.jpg',
              '/27.jpg',
              '/28.jpg',
              '/29.jpg',
              '/30.jpg',
              '/33.jpg',
              '/34.jpg',
              '/35.jpg',
              '/41.jpg',
              '/42.jpg',
              '/29.jpg',
              '/30.jpg',
              '/33.jpg',
              '/34.jpg',
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
