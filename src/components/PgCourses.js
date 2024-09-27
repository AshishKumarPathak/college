import React, { useState } from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer'; // Import the Footer component
import MCA from './Courses/mca'; // Import MCA component
import MBA from './Courses/mba'; // Import MBA component (assuming it exists)

const PgCourses = () => {
  // State to keep track of the current course being displayed
  const [currentCourse, setCurrentCourse] = useState('MCA'); // Default to MCA

  // Function to render the content based on the selected course
  const renderCourseContent = () => {
    switch (currentCourse) {
      case 'MCA':
        return <MCA />; // Show MCA component
      case 'MBA':
        return <MBA />; // Show MBA component
      default:
        return <MCA />; // Default to MCA if no valid selection is made
    }
  };

  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />

      {/* Title and Buttons for MCA and MBA */}
      <div className="container text-center mt-5">
        <h1>Welcome to Our PG Courses</h1>
        
        {/* Buttons to switch between MCA and MBA */}
        <div className="mt-4">
          <button 
            onClick={() => setCurrentCourse('MCA')} 
            className={`btn btn-primary mx-2 ${currentCourse === 'MCA' ? 'active' : ''}`}
          >
            MCA
          </button>
          <button 
            onClick={() => setCurrentCourse('MBA')} 
            className={`btn btn-success mx-2 ${currentCourse === 'MBA' ? 'active' : ''}`}
          >
            MBA
          </button>
        </div>

        {/* Render the content for the selected course */}
        <div className="course-content mt-5">
          {renderCourseContent()}
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default PgCourses;
