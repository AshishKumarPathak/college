// src/components/AboutUs.js

import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      backgroundColor: '#935ceb', 
      color: 'black' 
    }}>
      <Navbar /> {/* Reusable Navbar component */}

      <main style={{ flex: '1' }}>
        <section className="about py-3" style={{ backgroundColor: '#935ceb', color: 'black' }}>
          <div className="container">
            <a 
              className="text-black font-weight-bold d-flex justify-content-center mb-3" 
              style={{ 
                textShadow: '1px 1px 2px white, 0 0 25px white, 0 0 5px white, 0 0 5px white',
                fontSize: '22px',
                fontWeight: 'bold'
              }}
            >
              About Us
            </a>

            <div className="about-info">
              <div>
                <p>
                  DISTANCE AND ONLINE EDUCATION CENTRE AND COMPUTER TRAINING INSTITUTE
                  V Tech Solutions, a distinguished partner of JAIN UNIVERSITY, has strategically aligned with several prestigious universities, including Jain Online, Jain CDOE, Uttaranchal online, Mizoram online, VIGNAN online, ANDRA, and Karnataka State Open University (KSOU), KSOU online. Through these collaborations, V Tech Solutions offers a comprehensive and diverse portfolio of undergraduate and postgraduate programs with comprehensive placement assistance to support students in their transition to successful careers. State-of-the-art laboratory facilities, spacious classrooms, experienced faculties, and a student-centric administration are offered. In collaboration with BOSCH, V Tech Solutions is committed to social responsibility through our Caregiver and Bridge programs. Additionally, students can enhance their skills with courses in Desktop Publishing (DTP), Nudi, English Typing, and Spoken English.
                </p>
                <p>
                  As the only authorized Tally Training partner in Tumkur, we offer Tally Prime Levels 1, 2, and 3, GST using Tally Prime, GST Simulation, TDS & TCS, and Tally Professional (Payroll), including internships.
                </p>
                <p>
                  Our affiliation with the National Skill Development Corporation (NSDC) and All India Computer Saksharatha Mission (AICSM) helps students gain proficiency in computer basics, including AI-enhanced MS Word, MS Excel, MS PowerPoint, and Advanced Excel.
                </p>
                <p>
                  Programming courses cover a wide range of languages and technologies, such as C Programming, C#, C++, Core Java, Advanced Java, Python, Data Structures, .NET, SQL, PHP, and R programming, web designing, among others.
                </p>
                <p>
                  An array of design courses, including AutoCAD (Mechanical, Civil, Electrical), REVIT, 3DS MAX, SOLIDWORKS, CREO, CATIA, and NX-CAD. These initiatives aim to uplift educational confidence by providing them with technical and life skills, thereby enhancing their employment opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer /> {/* Footer will always be at the bottom */}
    </div>
  );
};

export default AboutUs;
