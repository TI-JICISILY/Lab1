/*
  File Name: App.js
  Student's Name: Tiji Cisily Jogy
  StudentID: 301392663
  Date: 2024-05-24
*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Services from './Components/Services';
import Contact from './Components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Route for Home component */}
          <Route path="/" exact component={Home} />
          {/* Route for About component */}
          <Route path="/about" component={About} />
          {/* Route for Contact component */}
          <Route path="/contact" component={Contact} />
          {/* Route for Projects component */}
          <Route path="/projects" component={Projects} />
          {/* Route for Services component */}
          <Route path="/services" component={Services} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
