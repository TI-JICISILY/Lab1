/*
  File Name: Services.js
  Student's Name: Tijil Cisily Jogy
  StudentID: 301392663
  Date: 2024-05-24
*/

import React from 'react';
import './Service.css';

function Services() {
  return (
    <section>
      <h2>Services</h2>
      <div className="Web development">
        <h1>Web Development</h1>
      <img src={`${process.env.PUBLIC_URL}/web development.jpg`} alt="web development" style={{ width: '100px', height: '100px' }} />
        
      </div>
      <div className="Mobile App Development">
      <h2>Mobile App Development</h2>
      <img src={`${process.env.PUBLIC_URL}/Mobile App.png`} alt="Mobile App Development" style={{ width: '100px', height: '100px' }} />
        
      </div>
      <h3>General Programming</h3>
      <div className="General Programming">
      <img src={`${process.env.PUBLIC_URL}/General Programming.jpg`} alt="General Programming" style={{ width: '100px', height: '100px' }} />
        
      </div>
    </section>
  );
}

export default Services;




