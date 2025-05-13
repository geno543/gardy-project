import React, { useState } from 'react';
import '../App.css';

const KeyMaterials: React.FC = () => {
  const [activeMaterial, setActiveMaterial] = useState<number | null>(null);
  
  const materials = [
    {
      name: 'Zeolite',
      description: 'Natural minerals that soften water and remove ammonia and heavy metals through ion exchange.',
      icon: '🔄',
      details: [
        'High cation exchange capacity',
        'Selective adsorption of heavy metals',
        'Thermally stable up to 700°C',
        'Natural volcanic mineral source'
      ],
      color: '#A9A9A9' // Dark gray
    },
    {
      name: 'Activated Carbon',
      description: 'Adsorbs chlorine, chemicals, and odors, significantly improving water taste and quality.',
      icon: '🧪',
      details: [
        'Surface area of 500-1,500 m²/g',
        'Removes organic compounds',
        'Made from date palm waste',
        'Sustainable production process'
      ],
      color: '#2F4F4F' // Dark slate gray
    },
    {
      name: 'Lemon Peels',
      description: 'Natural source of citric acid that helps coagulate heavy metals through chelation.',
      icon: '🍋',
      details: [
        'Rich in citric acid (5-8%)',
        'Forms stable metal complexes',
        'Biodegradable and non-toxic',
        'Available as agricultural waste'
      ],
      color: '#DAA520' // Goldenrod
    },
    {
      name: 'RO Membrane',
      description: 'Semi-permeable membrane that removes salt and dissolved impurities in the final stage.',
      icon: '💧',
      details: [
        '0.0001 micron filtration capability',
        'Operates at modified pressure (40 PSI)',
        'Specialized anti-fouling coating',
        'Removes 99.5% of dissolved salts'
      ],
      color: '#4682B4' // Steel blue
    }
  ];

  return (
    <section className="key-materials">
      <div className="container">
        <h2 className="materials-title">KEY MATERIALS</h2>
        <p className="materials-subtitle">Innovative components working together for superior water purification</p>
        
        <div className="materials-grid">
          {materials.map((material, index) => (
            <div 
              className={`material-card ${activeMaterial === index ? 'active' : ''}`} 
              key={index}
              onMouseEnter={() => setActiveMaterial(index)}
              onMouseLeave={() => setActiveMaterial(null)}
            >
              <div className="material-header">
                <div 
                  className="material-icon"
                  style={{ backgroundColor: material.color }}
                >
                  <span>{material.icon}</span>
                </div>
                <h3 className="material-name">{material.name}</h3>
              </div>
              
              <p className="material-description">{material.description}</p>
              
              <div className={`material-details ${activeMaterial === index ? 'visible' : ''}`}>
                <h4 className="details-title">Technical Specifications</h4>
                <ul className="material-specs">
                  {material.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <div className="material-efficiency-meter">
                  <div className="efficiency-label">Efficiency Rating</div>
                  <div className="efficiency-bar">
                    <div 
                      className="efficiency-fill" 
                      style={{ 
                        width: `${75 + Math.random() * 20}%`,
                        backgroundColor: material.color
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="material-border top"></div>
              <div className="material-border right"></div>
              <div className="material-border bottom"></div>
              <div className="material-border left"></div>
            </div>
          ))}
        </div>
        
        <div className="materials-diagram">
          <h3 className="diagram-title">Integrated Material System</h3>
          <p className="diagram-description">
            Our materials work synergistically to achieve optimal purification results.
            Each component targets specific contaminants while supporting the overall process flow.
          </p>
          <div className="diagram-visualization">
            <div className="diagram-connector"></div>
            <div className="stage stage-1">
              <div className="stage-number">1</div>
              <div className="stage-label">Flotation</div>
            </div>
            <div className="stage stage-2">
              <div className="stage-number">2</div>
              <div className="stage-label">Coagulation</div>
            </div>
            <div className="stage stage-3">
              <div className="stage-number">3</div>
              <div className="stage-label">Filtration</div>
            </div>
            <div className="stage stage-4">
              <div className="stage-number">4</div>
              <div className="stage-label">Membrane</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyMaterials; 