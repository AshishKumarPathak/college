import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../App.css';

const Announcements = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  useEffect(() => {
    fetch('https://docs.google.com/spreadsheets/d/1zmnsv3MTB7rI_v8bPhTQL5O8knSbW64Pq6bncseCPK4/gviz/tq?tqx=out:json')
      .then(response => response.text())
      .then(text => {
        const json = JSON.parse(text.substr(47).slice(0, -2));
        const rows = json.table.rows.map(row => ({
          Title: row.c[0]?.v,
          Description: row.c[1]?.v
        }));
        setData(rows);
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  const handleShow = (announcement) => {
    setSelectedAnnouncement(announcement);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div className="container mt-0" style={{ padding: '0', margin: '0', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
      <div className="scroll-container" style={{ position: 'relative', width: '100%', overflow: 'hidden', whiteSpace: 'nowrap', padding: '0', margin: '0' }}>
        <div className="scroll-content" style={{ display: 'inline-flex', justifyContent: 'center', animation: 'scroll 20s linear infinite' }}>
          {data.map((item, index) => (
            <div 
              className="card" 
              style={{ 
                display: 'inline-flex', 
                backgroundColor: '#935ceb', 
                height: '40px',  
                width: '250px',  
                margin: '0 10px', 
                padding: '0px',  
                cursor: 'pointer', 
                boxSizing: 'border-box',
              }} 
              key={index} 
              onClick={() => handleShow(item)}
            >
              <div className="card-body d-flex flex-column" style={{ padding: 0, margin: 0 }}>
                <h5 className="card-title" style={{ color: '#FFFFFF', marginBottom: '5px', fontSize: '14px' }}>
                  {item.Title}
                </h5>
                <p 
                  className="card-text" 
                  style={{ 
                    flexGrow: 1, 
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis', 
                    whiteSpace: 'nowrap', 
                    fontSize: '12px',
                    color: '#FFFFFF' 
                  }}
                >
                  {item.Description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton style={{ backgroundColor: '#FFFFFF' }}>
          <Modal.Title>{selectedAnnouncement?.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#FFFFFF', whiteSpace: 'pre-wrap' }}>
          {selectedAnnouncement?.Description}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#FFFFFF' }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Announcements;
