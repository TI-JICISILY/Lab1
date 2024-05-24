import React from 'react';

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div className="project">
        <img src="/path-to-project1.jpg" alt="Project 1" />
        <p>Project 1 description.</p>
      </div>
      <div className="project">
        <img src="/path-to-project2.jpg" alt="Project 2" />
        <p>Project 2 description.</p>
      </div>
      <div className="project">
        <img src="/path-to-project3.jpg" alt="Project 3" />
        <p>Project 3 description.</p>
      </div>
    </section>
  );
};

export default Projects;
