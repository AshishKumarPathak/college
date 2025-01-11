import React from 'react';
import './mca.css'; // Optional: Add a CSS file for additional styling

const MCA = () => {
  return (
    <div style={{ backgroundColor: '#935CEB', minHeight: '100vh', padding: '20px' }}> {/* Set background color */}
      <div className="container mt-4">
        <table className="table table-bordered" style={{ backgroundColor: '#f5f097', borderRadius: '15px', color: '#58368F' }}>
          <thead>
            <tr>
              <th colSpan="2" className="text-center" style={{ fontSize: '2rem' }}>Master of Computer Applications</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">
                <img src="/mca.jfif" className="img-fluid" alt="Left Side Image" style={{ maxHeight: '8000px', objectFit: 'cover' }} />
              </td>
              <td>
                <p>
                  This is a master’s level program, leading to the grant of the degree of Master of Computer Applications from the JAIN Online e-learning platform. This two-year online MCA program offers foundation courses, core courses, and a comprehensive project apart from an option to pursue a cross-functional and open elective. The core programs incorporate the model curriculum as prescribed for a full-time MCA program. The programs have been designed keeping in mind the industry’s requirements.
                </p>
                <h2 className="mt-4">Eligibility Criteria:</h2>
                <p>
                  Pass in an Undergraduate (Bachelor) Program of a minimum duration of Three (3) years in any stream from a UGC recognized University, with a minimum aggregate of 50% or an equivalent letter/numerical grade. A relaxation of 5% shall be given to SC/ST candidates. Candidates who are in the final semester of the Bachelor Program are also eligible to apply.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MCA;
