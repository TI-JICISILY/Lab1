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
      <h1>Welcome to Web Development</h1>
      <p>
      Our mission is to empower individuals and businesses through innovative web development solutions. We strive to create engaging and user-friendly websites and web applications that enhance online presence, drive growth, and deliver exceptional user experiences. With a focus on creativity, quality, and collaboration, we aim to exceed our clients' expectations and contribute positively to the ever-evolving field of web development.</p>
      <Link to="/about" className="btn">Learn More About Me</Link>
    </div>
  );
}

export default Home;
