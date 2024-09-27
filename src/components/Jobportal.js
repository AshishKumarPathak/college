import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import NavigationBar from './Navbar'; // Import the Navbar component
import Footer from './Footer'; // Import the Footer component
import '../App.css';

const JobPortal = () => {
  const [jobs, setJobs] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetch('https://docs.google.com/spreadsheets/d/1GjMIT4Z2mbbAv3EbBzSMzmieFlPvDXlvtJyhkO0vAQY/gviz/tq?tqx=out:json')
      .then(response => response.text())
      .then(text => {
        const json = JSON.parse(text.substr(47).slice(0, -2));
        const rows = json.table.rows.map(row => ({
          Name: row.c[0]?.v,          // Job name
          Company: row.c[1]?.v,       // Company name
          Designation: row.c[2]?.v,   // Designation
          ApplyLink: row.c[3]?.v      // Apply link
        }));
        setJobs(rows.reverse());  // Reverse to show latest job first
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  const handleShow = (job) => {
    setSelectedJob(job);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      {/* Add Navigation Bar */}
      <NavigationBar />

      <div className="container mt-4">
        <h2 className="text-center mb-4">Job Listings</h2>
        <div className="job-listings" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {jobs.map((job, index) => (
            <div 
              className="card" 
              style={{ 
                backgroundColor: '#935ceb', 
                height: 'auto', 
                width: '300px', 
                margin: '10px', 
                padding: '20px',
                cursor: 'pointer', 
                boxSizing: 'border-box',
              }} 
              key={index}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#FFFFFF', marginBottom: '10px', fontSize: '16px' }}>
                  {job.Name}
                </h5>
                <p className="card-text" style={{ color: '#FFFFFF', fontSize: '14px' }}>
                  <strong>Company:</strong> {job.Company}
                </p>
                <p className="card-text" style={{ color: '#FFFFFF', fontSize: '14px' }}>
                  <strong>Designation:</strong> {job.Designation}
                </p>
                <Button 
                  variant="light" 
                  href={job.ApplyLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ marginTop: '10px' }}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Job Details */}
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedJob?.Name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <strong>Company:</strong> {selectedJob?.Company} <br />
            <strong>Designation:</strong> {selectedJob?.Designation} <br />
            <a href={selectedJob?.ApplyLink} target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* Add Footer */}
      <Footer />
    </>
  );
};

export default JobPortal;
