import React from 'react';
import './mca.css'; // Optional: Add a CSS file for additional styling

const MBA = () => {
  return (
    <div style={{ backgroundColor: '#935CEB', minHeight: '100vh', padding: '20px' }}> {/* Set background color */}
      <div className="container mt-4">
        <table className="table table-bordered" style={{ backgroundColor: '#f5f097', borderRadius: '15px', color: '#58368F' }}>
          <thead>
            <tr>
              <th colSpan="2" className="text-center" style={{ fontSize: '2rem' }}>Master of Business Administration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center" style={{ width: '50%' }}>
                <img src="/mba.jfif" className="img-fluid" alt="MBA Program" style={{ maxHeight: '500px', objectFit: 'cover' }} />
              </td>
              <td>
                <p>
                  This is a Master’s level program, leading to the grant of a degree of Master of Business Administration of JAIN Online, an e-learning arm of JAIN (Deemed-to-be-University). This two-year program offers foundation courses, core courses, electives, and a comprehensive master thesis intermediary apart from an option to pursue a cross-functional and open elective. The core and electives incorporate the AICTE’s model curriculum as prescribed for a full-time online MBA program. The electives have been designed keeping in mind the industry’s requirements. The offering of these electives right from the 2nd semester of the program ensures a deep dive into the electives. The program is designed to provide in-depth knowledge of the chosen electives and their applications in improving business processes and decision-making. Our online MBA curriculum is intended to increase a learner’s business knowledge and leadership skills thus providing a way to accelerate one’s career for corporate roles in management.
                </p>
                <h2 className="mt-4">Eligibility Criteria:</h2>
                <p>
                  Pass in an Undergraduate (Bachelor) Program of a minimum duration of Three (3) years in any stream from a UGC recognized University, with a minimum aggregate of 50% or an equivalent letter/numerical grade. A relaxation of 5% shall be given to SC/ST candidates. Candidates who are in the final semester of the Bachelor Program are also eligible to apply.
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Combined Table for Program Highlights and Career Opportunities */}
        <table className="table table-bordered mt-4" style={{ backgroundColor: '#f5f097', borderRadius: '15px', color: '#58368F' }}>
          <thead>
            <tr>
              <th className="text-center" style={{ fontSize: '1.5rem' }}>Program Highlights</th>
              <th className="text-center" style={{ fontSize: '1.5rem' }}>Career Opportunities</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul style={{  paddingLeft: '20px' }}>
                  <li>Two years full-time online program.</li>
                  <li>Comprehensive curriculum designed to meet industry needs.</li>
                  <li>Opportunity to specialize in various electives.</li>
                  <li>Expert faculty with industry experience.</li>
                  <li>Flexible learning options to accommodate working professionals.</li>
                </ul>
              </td>
              <td>
                <p>
                  Graduates of the MBA program are well-equipped for various managerial roles in diverse industries. Possible career paths include:
                </p>
                <ul style={{  paddingLeft: '20px' }}>
                  <li>Marketing Manager</li>
                  <li>Financial Analyst</li>
                  <li>Human Resource Manager</li>
                  <li>Operations Manager</li>
                  <li>Consultant</li>
                  <li>Entrepreneur</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MBA;
