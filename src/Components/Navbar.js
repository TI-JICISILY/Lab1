/*
  File Name: Navbar.js
  Student's Name: Tiji Cisily Jogy
  StudentID: 301392663
  Date: 2024-05-24
*/
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './Logo';

function Navbar() {
  return (
    <nav className="navbar">
      <Logo/>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
