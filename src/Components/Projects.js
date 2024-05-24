/*
  File Name: Project.js
  Student's Name: Tiji Cisily Jogy
  StudentID: 301392663
  Date: 2024-05-24
*/
import React from 'react';

function Projects () {
  return (
    <section>
      <h2>Projects</h2>
      <div className="project">
        <img src="project.jpg" alt="Project 1" />
        <p>Project 1 description.</p>
      </div>
      <div className="project">
        <img src="/path-to-project2.jpg" alt="Project2" />
        <p>Project 2 description.</p>
      </div>
      <div className="project">
        <img src="/path-to-project3.jpg" alt="Project3" />
        <p>Project 3 description.</p>
      </div>
    </section>
  );
};

export default Projects;
