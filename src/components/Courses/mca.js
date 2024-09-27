import React from 'react';
import './mca.css'; // Optional: Add a CSS file for additional styling

const MCA = () => {
  return (
    <div className="container mt-4">
      <div className="row align-items-center justify-content-center">
        {/* Left Images */}
        <div className="col-md-4 text-center mb-3">
          {/* <img src="/images/H_S1.jpg" className="img-fluid mb-3" alt="Left Side Image 1" /> */}
          <img src="/images/mca.jfif" className="img-fluid" alt="Left Side Image 2" />
        </div>

        {/* Right Content: Information Block */}
        <div className="col-md-8 d-flex align-items-center">
          <div className="info-block p-4">
            <h1 className="mb-4">Master of Computer Applications</h1>
            <p>
              This is a master’s level program, leading to the grant of the degree of Master of Computer Applications from the JAIN Online e-learning platform. This two-year online MCA program offers foundation courses, core courses, and a comprehensive project apart from an option to pursue a cross-functional and open elective. The core programs incorporate the model curriculum as prescribed for a full-time MCA program. The programs have been designed keeping in mind the industry’s requirements.
            </p>
            <h2 className="mt-4">Eligibility Criteria:</h2>
            <p>
              Pass in an Undergraduate (Bachelor) Program of a minimum duration of Three (3) years in any stream from a UGC recognized University, with a minimum aggregate of 50% or an equivalent letter/numerical grade. A relaxation of 5% shall be given to SC/ST candidates. Candidates who are in the final semester of the Bachelor Program are also eligible to apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCA;
