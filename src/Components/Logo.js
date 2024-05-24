/*
  File Name: Logo.js
  Student's Name: Tijil Cisily Jogy
  StudentID: 301392663
  Date: 2024-05-24
*/

import React from 'react';

function Logo() {
  return (
    <div className="logo">
      {/* Simple logo example */}
      <svg height="50" width="50">
        <polygon points="25,0 50,50 0,50" style={{ fill: 'blue' }} />
        <text x="12" y="35" fill="white" fontSize="20" fontFamily="Arial">TJ</text>
      </svg>
    </div>
  );
}

export default Logo;
