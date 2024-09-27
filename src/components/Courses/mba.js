import React from 'react';

const MBA = () => {
  return (
    <div className="main-content">
      {/* Left Content */}
      <div className="left-content">
        {/* Static Image */}
        <div className="image-container">
          <img src="/images/mba.jpg" alt="MBA Program" className="img-fluid" />
        </div>

        {/* New Div Below Image */}
        <div className="new-div">
          <div className="electives">
            <h2>MBA Duration: 2 Years</h2>

            <h2>Eligibility Criteria:</h2>
            <p>
              Pass in an Undergraduate (Bachelor) Program of a minimum duration of Three (3) years in any stream from a UGC recognized University, with a minimum aggregate of 50% or an equivalent letter/numerical grade. A relaxation of 5% shall be given to SC/ST candidates. Candidates who are in the final semester of the Bachelor Program are also eligible to apply.
            </p>
          </div>
        </div>
      </div>

      {/* Information Block */}
      <div className="info-block">
        <h1>Master of Business Administration</h1>
        <p>
          This is a Master’s level program, leading to the grant of a degree of Master of Business Administration of JAIN Online, an e-learning arm of JAIN (Deemed-to-be-University). This two-year program offers foundation courses, core courses, electives, and a comprehensive master thesis intermediary apart from an option to pursue a cross-functional and open elective. The core and electives incorporate the AICTE’s model curriculum as prescribed for a full-time online MBA program. The electives have been designed keeping in mind the industry’s requirements. The offering of these electives right from the 2nd semester of the program ensures a deep dive into the electives. The program is designed to provide in-depth knowledge of the chosen electives and their applications in improving business processes and decision-making. Our online MBA curriculum is intended to increase a learner’s business knowledge and leadership skills thus providing a way to accelerate one’s career for corporate roles in management.
        </p>

        <h1>Electives Offered:</h1>
        <p>
          • Human Resource Management <br />
          • Finance <br />
          • Marketing <br />
          • General Management <br />
          • Systems and Operations Management <br />
          • Finance and Marketing <br />
          • Human Resource Management and Finance <br />
          • Marketing and Human Resource Management <br />
          • Information Technology Management <br />
          • Healthcare Management <br />
          • Logistics and Supply Chain Management <br />
          • International Finance (Accredited by ACCA, UK) <br />
          • Business Intelligence and Analytics (Accredited by IoA, UK) <br />
          • Project Management <br />
          • Entrepreneurship and Leadership <br />
          • Retail Banking Operations <br />
        </p>
      </div>
    </div>
  );
};

export default MBA;
