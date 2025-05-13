import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <h1>STEM 6TH OF OCTOBER HIGH SCHOOL FOR BOYS</h1>
        <p className="tagline">Grade 11 | Second Semester 2024/2025</p>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#methodology">Methodology</a></li>
          <li><a href="#results">Results</a></li>
          <li><a href="#science">Science</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 