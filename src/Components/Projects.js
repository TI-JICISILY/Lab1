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
      <div className="Project 1">
        <h1>Project 1:Library Management System</h1>
      <img src={`${process.env.PUBLIC_URL}/Project 1.jpg`} alt="Project 1" />
        <p>A Library Management System (LMS) is a software application designed to streamline and automate the various functions of a library, including cataloging, circulation, user management, search and retrieval, inventory management, and report generation. It enables efficient organization and maintenance of the library's collection, manages the borrowing and returning of materials, keeps records of library members, and provides search functionalities for easy access to information. Additionally, an LMS offers features for monitoring inventory, generating usage reports, and sending notifications to patrons, thereby enhancing operational efficiency, improving user satisfaction, and ensuring effective resource management.</p>
      </div>
      <div className="Project 2">
      <h2>Project 2:Resturant Reservation System</h2>
      <img src={`${process.env.PUBLIC_URL}/Project2.png`} alt="Project 2" />
        <p>A Restaurant Reservation System is a web application that allows customers to book tables at their favorite restaurants online. The platform enables users to view available time slots, make reservations, and receive instant confirmation. Restaurants can manage their bookings, update available slots, and send reminders to customers. The system often includes features like user registration, menu display, special offers, and customer reviews. Additionally, it provides analytics and reporting tools for restaurant managers to track reservation trends, manage customer preferences, and optimize table occupancy, ensuring a smooth and efficient dining experience for both customers and restaurant staff.</p>
      </div>
      <h3>Project 3:Event Management System</h3>
      <div className="Project 3">
      <img src={`${process.env.PUBLIC_URL}/Project 3.png`} alt="Project 3" />
        <p>An Event Management System is a comprehensive web application designed to facilitate the planning, organization, and management of various events, such as conferences, workshops, seminars, and social gatherings. This platform allows event organizers to create and promote events, manage attendee registrations, send invitations, and handle ticket sales. Attendees can browse upcoming events, register online, and receive notifications about event updates. The system includes features for scheduling, venue management, and real-time analytics, helping organizers track attendance, gather feedback, and ensure the smooth execution of events.</p>
      </div>
    </section>
  );
};

export default Projects;
