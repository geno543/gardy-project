import React, { useState, useRef, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import Scene from './components/Scene';
import NavBar from './components/NavBar';
import WaterInfoSection from './components/WaterInfoSection';
import Abstract from './components/Abstract';
import TreatmentProcess from './components/TreatmentProcess';
import PerformanceMetrics from './components/PerformanceMetrics';
import KeyMaterials from './components/KeyMaterials';
import TeamMembers from './components/TeamMembers';
import WaterTreatmentVisualization from './components/WaterTreatmentVisualization';
import SectionTitle from './components/SectionTitle';
import PurchaseSystem from './components/PurchaseSystem';
import './components/NubianTheme.css';
import './components/SectionTitle.css';
import './components/KeyMaterials.css';
import './components/PerformanceMetrics.css';
import './components/TeamMembers.css';
import './App.css';

// Loading component for 3D content
const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="particles-container">
      {Array.from({ length: 20 }).map((_, index) => (
        <div 
          key={index} 
          className="particle"
          style={{
            '--size': `${Math.random() * 10 + 5}px`,
            '--left': `${Math.random() * 100}%`,
            '--delay': `${Math.random() * 5}s`,
            '--duration': `${Math.random() * 10 + 20}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

// Decorative elements component
const DecorativeElements = () => {
  return (
    <div className="decorative-elements">
      <div className="circle-decoration circle-1"></div>
      <div className="circle-decoration circle-2"></div>
      <div className="diamond-decoration diamond-1"></div>
      <div className="diamond-decoration diamond-2"></div>
    </div>
  );
};

// Nubian dots background component
const NubianDots = () => {
  return (
    <div className="nubian-dots">
      <div className="nubian-dot"></div>
      <div className="nubian-dot"></div>
      <div className="nubian-dot"></div>
      <div className="nubian-dot"></div>
      <div className="nubian-dot"></div>
      <div className="nubian-dot"></div>
    </div>
  );
};

// Egyptian corner ornament component
const EgyptianCornerOrnament = ({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) => {
  const getStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      position: 'absolute',
      width: '40px',
      height: '40px',
      pointerEvents: 'none',
      zIndex: 999
    };

    switch (position) {
      case 'top-left':
        return {
          ...baseStyles,
          top: '10px',
          left: '10px',
          borderTop: '3px solid #DAA520',
          borderLeft: '3px solid #DAA520',
        };
      case 'top-right':
        return {
          ...baseStyles,
          top: '10px',
          right: '10px',
          borderTop: '3px solid #DAA520',
          borderRight: '3px solid #DAA520',
        };
      case 'bottom-left':
        return {
          ...baseStyles,
          bottom: '10px',
          left: '10px',
          borderBottom: '3px solid #DAA520',
          borderLeft: '3px solid #DAA520',
        };
      case 'bottom-right':
        return {
          ...baseStyles,
          bottom: '10px',
          right: '10px',
          borderBottom: '3px solid #DAA520',
          borderRight: '3px solid #DAA520',
        };
    }
  };

  return <div style={getStyles()} />;
};

// Nubian geometric pattern component
const NubianPattern = ({ position }: { position: 'top' | 'bottom' }) => {
  const getStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      position: 'absolute',
      left: 0,
      width: '100%',
      height: '20px',
      backgroundImage: 'linear-gradient(90deg, #DAA520 25%, #CD853F 25%, #CD853F 50%, #003366 50%, #003366 75%, #DAA520 75%)',
      backgroundSize: '80px 20px',
      opacity: 0.8,
      zIndex: 999,
      pointerEvents: 'none'
    };

    return {
      ...baseStyles,
      [position]: 0
    };
  };

  return <div style={getStyles()} />;
};

function App() {
  const [section, setSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Create refs for each section
  const homeRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const technologyRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const applicationsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const purchaseRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Simulate loading time for the 3D elements and resources
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Import Google Fonts for Nubian theme
  useEffect(() => {
    const link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&display=swap';
    
    const link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap';
    
    // Font Awesome for icons
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    
    document.head.appendChild(link1);
    document.head.appendChild(link2);
    document.head.appendChild(fontAwesome);
    
    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
      document.head.removeChild(fontAwesome);
    };
  }, []);

  // Navigation handler function
  const handleNavigation = (targetSection: string) => {
    setSection(targetSection);
    
    // Scroll to the appropriate section
    switch(targetSection) {
      case 'home':
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'solution':
        solutionRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'technology':
        technologyRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'results':
        resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'applications':
        applicationsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'team':
        teamRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'purchase':
        purchaseRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      {isLoading && <Loader />}
      
      <NavBar onNavChange={handleNavigation} />
      
      {/* Hero Section with 3D Background */}
      <div className="hero-section" ref={homeRef} id="home">
        {/* 3D Canvas Background */}
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <Suspense fallback={null}>
            <Scene />
            <Preload all />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
        
        {/* Outer Nubian Gold Ornamental Border */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '500px',
          border: '4px solid #DAA520',
          boxShadow: '0 0 40px rgba(218, 165, 32, 0.3)',
          zIndex: 900,
          pointerEvents: 'none'
        }}></div>
        
        {/* Nubian Patterns at top and bottom */}
        <NubianPattern position="top" />
        <NubianPattern position="bottom" />
        
        {/* Egyptian corner ornaments */}
        <EgyptianCornerOrnament position="top-left" />
        <EgyptianCornerOrnament position="top-right" />
        <EgyptianCornerOrnament position="bottom-left" />
        <EgyptianCornerOrnament position="bottom-right" />
        
        {/* Main Content Panel */}
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 999,
            textAlign: 'center',
            color: 'white',
            width: '100%',
            maxWidth: '850px',
            padding: '60px',
            backgroundColor: 'rgba(42, 61, 90, 0.8)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '3px solid #DAA520',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3), 0 0 20px rgba(218, 165, 32, 0.2) inset',
            overflow: 'hidden'
          }}
        >
          {/* Title with Egyptian Hieroglyphic Styling */}
          <h1 style={{
            position: 'relative',
            fontSize: '6.5rem',
            fontWeight: 900,
            marginBottom: '1rem',
            background: 'linear-gradient(to bottom, #FFF8DC, #DAA520)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            letterSpacing: '10px',
            textTransform: 'uppercase',
            fontFamily: 'Cinzel, serif',
            textShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
            zIndex: 10
          }}>
            Gardy
          </h1>
          
          {/* Title Underline - Ankh Inspired */}
          <div style={{
            width: '200px',
            height: '6px',
            background: 'linear-gradient(90deg, transparent 0%, #DAA520 40%, #DAA520 60%, transparent 100%)',
            margin: '0 auto 25px',
            position: 'relative',
            zIndex: 10
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              backgroundColor: '#DAA520',
              boxShadow: '0 0 15px #DAA520'
            }}></div>
          </div>
          
          <p style={{
            fontSize: '1.8rem',
            marginBottom: '3.5rem',
            color: 'white',
            maxWidth: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6',
            letterSpacing: '1.5px',
            fontFamily: 'Raleway, sans-serif',
            position: 'relative',
            zIndex: 10,
            textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)'
          }}>
            Innovative Water Treatment Technology
          </p>
          
          {/* Nubian-Styled Button */}
          <button 
            onClick={() => handleNavigation('solution')}
            style={{
              position: 'relative',
              padding: '15px 45px',
              fontSize: '1.2rem',
              fontWeight: 600,
              background: 'linear-gradient(135deg, #DAA520, #CD853F)',
              color: '#003366',
              border: 'none',
              clipPath: 'polygon(0 0, 100% 0, 92% 100%, 8% 100%)',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontFamily: 'Raleway, sans-serif',
              zIndex: 10
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(218, 165, 32, 0.3)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #003366, #184875)';
              e.currentTarget.style.color = '#DAA520';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #DAA520, #CD853F)';
              e.currentTarget.style.color = '#003366';
            }}
          >
            Explore Our Solution
          </button>
        </div>
        
        {/* Nubian Decorative Background Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(218, 165, 32, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(218, 165, 32, 0.08) 0%, transparent 50%),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30 30 60 0 30z' fill='%23DAA520' fill-opacity='0.03'/%3E%3C/svg%3E")
          `,
          zIndex: 901,
          pointerEvents: 'none'
        }}></div>
        
        {/* Subtle Floating Gold Particles */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 902,
          pointerEvents: 'none'
        }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 30% 30%, rgba(218, 165, 32, 0.6), rgba(218, 165, 32, 0.2))',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `float ${Math.random() * 10 + 15}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
              zIndex: 999
            }}></div>
          ))}
        </div>
        
        {/* Shimmering Gold Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '300%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent 0%, rgba(218, 165, 32, 0.1) 45%, transparent 100%)',
          transform: 'skewX(-20deg)',
          animation: 'shimmer 7s infinite ease-in-out',
          zIndex: 903,
          pointerEvents: 'none'
        }}></div>
      </div>
      
      {/* School Information */}
      <section className="school-info">
        <div className="container">
          <div className="school-card nubian-card">
            <h3 className="school-name">STEM 6TH OF OCTOBER HIGH SCHOOL FOR BOYS</h3>
            <p className="school-details">Grade 11 Second Semester 2024/2025</p>
            <p className="project-group">Group 10208</p>
            <div className="school-decoration"></div>
          </div>
        </div>
      </section>
      
      {/* Main Content Area with Papyrus-like Background */}
      <div className="content-area papyrus-bg">
        {/* Solution Section - Abstract */}
        <div id="solution" ref={solutionRef} className="section-wrapper">
          <SectionTitle title="OUR SOLUTION" subtitle="An innovative approach to water treatment" />
          <Abstract />
        </div>
        
        {/* Technology Section - Treatment Process */}
        <div id="technology" ref={technologyRef} className="section-wrapper">
          <SectionTitle title="TREATMENT PROCESS" subtitle="Our advanced multi-stage purification system" />
          <TreatmentProcess />
        </div>
        
        {/* Results Section - Performance Metrics */}
        <div id="results" ref={resultsRef} className="section-wrapper">
          <SectionTitle title="PERFORMANCE RESULTS" subtitle="Measured efficiency and effectiveness" />
          <PerformanceMetrics />
        </div>
        
        {/* Interactive 3D Visualization Section */}
        <section className="visualization-section section-wrapper">
          <SectionTitle title="INTERACTIVE VISUALIZATION" subtitle="Explore our water treatment process in 3D" />
          <div className="container">
            <WaterTreatmentVisualization />
          </div>
        </section>
        
        {/* Materials Section */}
        <div id="applications" ref={applicationsRef} className="section-wrapper">
          <SectionTitle title="KEY MATERIALS" subtitle="Sustainable components for optimal purification" />
          <KeyMaterials />
        </div>
        
        {/* Purchase System Section */}
        <div id="purchase" ref={purchaseRef} className="section-wrapper">
          <PurchaseSystem />
        </div>
        
        {/* Team Section */}
        <div id="team" ref={teamRef} className="section-wrapper">
          <SectionTitle title="OUR TEAM" subtitle="The innovative minds behind Gardy" />
          <TeamMembers />
        </div>
        
        {/* Contact Section */}
        <div id="contact" ref={contactRef} className="section-wrapper contact-section">
          <SectionTitle title="CONTACT US" subtitle="Get in touch with our team" />
          <div className="contact-inner">
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>gardy@example.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+20 123 456 7890</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Cairo, Egypt</span>
              </div>
            </div>
            
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" className="form-control" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" className="form-control" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" className="form-control" rows={5}></textarea>
              </div>
              <button type="submit" className="nubian-cta-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      
      <footer className="site-footer">
        <div className="footer-content">
          <p>&copy; 2025 Gardy Water Treatment Technology</p>
          <div className="footer-social">
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;