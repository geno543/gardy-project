import React from 'react';
import './WaterTreatmentVisualization/WaterTreatmentVisualization.css';

const Abstract: React.FC = () => {
  return (
    <section className="abstract-section">
      <div className="container">
        <div className="abstract-container">
          <h2 className="abstract-title">ABSTRACT</h2>
          
          <div className="abstract-content">
            <p className="abstract-paragraph">
              Gardy's research addresses the grand challenge of recycling waste/water for eco-environmental purposes 
              while tackling pollution in our water and soil. The system uses treated waste/recycled materials to improve 
              water quality, creating a cleaner and healthier environment for Egypt's waters.
            </p>
            
            <p className="abstract-paragraph">
              The main objective is to create a solution to treat three significant parameters: salinity, hydrocarbons/oils, 
              and heavy metals through a closed-loop system with four distinct treatment stages.
            </p>
            
            <div className="abstract-decoration">
              <span className="nubian-symbol"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abstract; 
