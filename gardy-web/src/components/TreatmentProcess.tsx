import React, { useState, useEffect } from 'react';
import './TreatmentProcess.css';

const TreatmentProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string | null>(null);
  
  // Initialize animation after component mounts
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = window.innerHeight - 100;
        
        if(elementTop < revealPoint) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    // Initial check
    setTimeout(revealOnScroll, 300);
    
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);
  
  const treatmentSteps = [
    {
      id: '01',
      title: 'OIL SEPARATION',
      description: 'Dissolved Air Flotation (DAF) creates microbubbles that lift oil droplets for easy separation from water. This first stage effectively removes oils and hydrocarbons.',
      details: 'The DAF system injects air under pressure into the wastewater, forming tiny bubbles (30-50 microns) that attach to oil particles. As these bubble-oil complexes rise to the surface, they create a foam layer that can be easily skimmed off, removing up to 95% of oils and greases.',
      icon: '💧'
    },
    {
      id: '02',
      title: 'NATURAL COAGULATION',
      description: 'Using lemon peels soaked in vinegar creates a natural chelating agent that binds to contaminants. This environmentally friendly approach eliminates the need for chemical coagulants.',
      details: 'The citric acid in lemon peels acts as a powerful metal chelator, forming complexes with heavy metals like lead, cadmium, and chromium. Simultaneously, acetic acid from vinegar lowers the pH, enhancing the binding capabilities and reducing reliance on harmful aluminum-based coagulants.',
      icon: '🍋'
    },
    {
      id: '03',
      title: 'MULTI-LAYER FILTRATION',
      description: 'Water passes through specialized layers including activated carbon, zeolite, sand, and gravel. Each layer targets specific contaminants through adsorption, ion exchange, and mechanical filtration.',
      details: 'The filtration system consists of four distinct layers: activated carbon captures organic compounds and chlorine; zeolite removes ammonium ions and heavy metals; fine sand filters out suspended particles; and gravel provides structural support while trapping larger sediments.',
      icon: '🧪'
    },
    {
      id: '04',
      title: 'REVERSE OSMOSIS',
      description: 'High-pressure forces water through a semi-permeable membrane, removing dissolved salts, contaminants, and remaining impurities to produce clean water that meets quality standards.',
      details: 'Our specialized thin-film composite membranes have pore sizes of approximately 0.0001 microns, rejecting up to 99% of dissolved salts, bacteria, viruses, and organic molecules. The final water product achieves TDS (Total Dissolved Solids) levels below 50 ppm.',
      icon: '🔄'
    }
  ];

  const handleStepClick = (id: string) => {
    setActiveStep(activeStep === id ? null : id);
  };

  return (
    <section className="treatment-process">
      <div className="process-container">
        <div className="process-header reveal">
          <h2 className="process-title">TREATMENT PROCESS</h2>
          <div className="gold-divider"></div>
        </div>
        
        <div className="process-timeline">
          {treatmentSteps.map((step, index) => (
            <div 
              className={`timeline-step reveal ${activeStep === step.id ? 'active' : ''}`} 
              key={step.id}
              onClick={() => handleStepClick(step.id)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="step-marker">
                <div className="marker-circle">
                  <span className="step-number">{step.id}</span>
                </div>
                {index < treatmentSteps.length - 1 && <div className="timeline-connector"></div>}
              </div>
              
              <div className="step-card">
                <div className="step-header">
                  <div className="step-icon-container">
                    <span className="step-icon">{step.icon}</span>
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                </div>
                
                <p className="step-description">{step.description}</p>
                
                <div className={`step-details ${activeStep === step.id ? 'active' : ''}`}>
                  <div className="details-content">
                    <p>{step.details}</p>
                  </div>
                </div>
                
                <button className={`details-toggle ${activeStep === step.id ? 'active' : ''}`}>
                  {activeStep === step.id ? 'Show Less' : 'Learn More'}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="process-decoration">
          <div className="decoration-left"></div>
          <div className="decoration-right"></div>
        </div>
      </div>
      
      <div className="background-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-pattern pattern-1"></div>
        <div className="bg-pattern pattern-2"></div>
      </div>
    </section>
  );
};

export default TreatmentProcess; 