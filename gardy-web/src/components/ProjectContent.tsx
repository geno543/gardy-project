import React from 'react';
import './ProjectContent.css';

const ProjectContent: React.FC = () => {
  return (
    <div className="content-container">
      {/* Overview Section */}
      <section id="overview" className="section">
        <span className="section-label">Introduction</span>
        <h2 className="section-title">Project Overview</h2>
        <div className="content-grid">
          <div className="content-text">
            <p>In the face of development lie numerous grand challenges. For instance, recycling garbage along with water for 
            eco-environmental purposes while also addressing pollution that fouls our air, water, and soil. Without a doubt, tremendous 
            efforts have been made towards desirable solutions.</p>
            
            <p>The main objective is to use treated waste/recycled materials that could help improve the quality of Egypt's waters, 
            thus contributing to a cleaner and healthier environment. The purpose of the study is to create a solution to treat three 
            significant parameters: salinity, hydrocarbons/oils, and heavy metals.</p>
            
            <p>The solution is a closed-loop system of four distinct sections that involves physical, chemical, and gravitational 
            treatment of a given wastewater sample on a microscopic level. The prototype is for Ghabour Auto (GB Auto), Abou Rawash, 
            Giza—a heavily contaminated factory.</p>
          </div>
          <div className="content-card">
            <div className="card">
              <h3>Keywords</h3>
              <div className="keyword-container">
                <span className="keyword">Adsorption</span>
                <span className="keyword">Zeolite</span>
                <span className="keyword">DAF</span>
                <span className="keyword">Reverse Osmosis</span>
                <span className="keyword">Zeer</span>
                <span className="keyword">Lemon peels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="section">
        <span className="section-label">Process</span>
        <h2 className="section-title">Methodology</h2>
        <div className="methodology-steps">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Design & Planning</h3>
              <p>A three-dimensional design was developed followed by installation of a clay pot cooler at the center of the system 
              to serve as the final treated water collection unit.</p>
            </div>
          </div>
          
          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Oil Separation</h3>
              <p>An air pump was installed in the first container to introduce dissolved air flotation (DAF) to create bubbles that 
              lift oil droplets for separation.</p>
            </div>
          </div>
          
          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Natural Coagulation</h3>
              <p>Wastewater was transferred using a water pump onto the second phase of filtration via natural coagulants, lemon 
              peels soaked in vinegar for 24 hours, that aggregate suspended particles.</p>
            </div>
          </div>
          
          <div className="step-card">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Multi-layer Filtration</h3>
              <p>A biofiltration system consisting of 4 layers: activated carbon for organic removal, zeolite for heavy metal 
              adsorption, sand for fine particles, and gravel for debris support.</p>
            </div>
          </div>
          
          <div className="step-card">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>Reverse Osmosis</h3>
              <p>A reverse osmosis (RO) unit was installed in the fourth container and connected to a pump to transfer purified 
              water to the clay pot.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="section">
        <span className="section-label">Outcomes</span>
        <h2 className="section-title">Results</h2>
        <div className="results-container">
          <div className="results-card">
            <h3>Project Performance</h3>
            <p>The project performance provided several compelling results. The prototype is considered a great success as it 
            exceeded all the design requirements.</p>
            <ul className="results-list">
              <li>TDS reduced from <span className="highlight">1123</span> to <span className="highlight">384</span></li>
              <li>Turbidity dropped from <span className="highlight">58%</span> to <span className="highlight">11%</span></li>
              <li>pH levels raised from <span className="highlight">8.52</span> to <span className="highlight">6.72</span></li>
              <li>System efficiency exceeding <span className="highlight">83.7%</span></li>
            </ul>
          </div>
          
          <div className="results-card">
            <h3>Negative Results Overcome</h3>
            <ul>
              <li>Originally employed aluminum rods for electrocoagulation were found to be less effective and were substituted</li>
              <li>Treatment sequence issues leading to clogging were resolved by phase reversal</li>
              <li>TDS sensor issues were resolved with proper system integration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section id="science" className="section">
        <span className="section-label">Scientific Foundation</span>
        <h2 className="section-title">The Science</h2>
        <div className="science-grid">
          <div className="science-card">
            <h3>Zeolite</h3>
            <p>Zeolites are crystalline microporous aluminosilicates, built up of a 3-dimensional framework of [SiO4]4- and [AlO4]5- 
            tetrahedra, linked by sharing oxygen atoms. A key mechanism of zeolite is cation sorption determined by uncompensated 
            negative charge.</p>
          </div>
          
          <div className="science-card">
            <h3>Adsorption Mechanisms</h3>
            <p>Activated carbon has a high surface area of 500–1,500 m²/g due to its porosity, making it effective for adsorbing impurities. 
            It is usually in the form of granular activated carbon (GAC) in filters or powdered activated carbon (PAC).</p>
          </div>
          
          <div className="science-card">
            <h3>Heavy Metal Coagulation</h3>
            <p>Lemon peels were soaked in vinegar for 24 hours to allow citric acid to be freely present in the solution. Citric acid 
            has the capability to clump together with heavy metals, forming citric acid-metal complexes, which are water-soluble and 
            filtered in later phases.</p>
          </div>
          
          <div className="science-card">
            <h3>Dissolved Air Flotation</h3>
            <p>DAF is an advanced water treatment process that effectively removes suspended solids, fats, oils by injecting air into 
            the water under pressure. The bubbles adhere to particles due to van der Waals forces and surface tension effects.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <span className="section-label">Team</span>
        <h2 className="section-title">Contact</h2>
        <div className="team-container">
          <div className="team-card">
            <h3>Project Team</h3>
            <ul className="team-list">
              <li>Abdullah Gamil</li>
              <li>Ammar Abdelmoneam</li>
              <li>Ammar Hussieny</li>
              <li>Mohamed Ramadan</li>
            </ul>
          </div>
          
          <div className="team-card">
            <h3>Acknowledgements</h3>
            <p>We thank Allah for everything first. Secondly, we would like to express our sincere gratitude to everyone who has 
            supported us along the way, especially our capstone general Mr. Mohamed Bekheet, our capstone leader Ms. Ninette 
            Refaat, our capstone teacher, Ms. Mona Hamdan, and everyone else who has contributed to the success of this project.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectContent; 