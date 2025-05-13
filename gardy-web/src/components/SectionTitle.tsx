import React from 'react';
import './SectionTitle.css';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="section-title-container">
      <div className="title-decoration left"></div>
      
      <div className="title-content">
        <h2 className="section-title">
          <span className="title-text">{title}</span>
        </h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      
      <div className="title-decoration right"></div>
    </div>
  );
};

export default SectionTitle; 