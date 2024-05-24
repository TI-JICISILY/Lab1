/*
  File Name: Home.js
  Student's Name: Tiji Cisily Jogy
  StudentID: 301392663
  Date: 2024-05-24
*/
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>This is a brief introduction and mission statement.</p>
      <Link to="/about" className="btn">Learn More About Me</Link>
    </div>
  );
}

export default Home;
