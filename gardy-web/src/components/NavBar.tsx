import React, { useState, useEffect } from 'react';
import logo from '../../../public/loggoo.png';

interface NavBarProps {
  onNavChange: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onNavChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (section: string) => {
    setActiveLink(section);
    onNavChange(section);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="navbar-logo" onClick={() => handleNavClick('home')}>
        <img src="/loggoo.png" alt="Gardy Logo" className="logo-image" />
        <span className="logo-text"></span>
      </a>
      
      <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
        <a 
          href="#solution" 
          className={`navbar-link ${activeLink === 'solution' ? 'active' : ''}`}
          onClick={() => handleNavClick('solution')}
        >
          Solution
        </a>
        <a 
          href="#technology" 
          className={`navbar-link ${activeLink === 'technology' ? 'active' : ''}`}
          onClick={() => handleNavClick('technology')}
        >
          Technology
        </a>
        <a 
          href="#results" 
          className={`navbar-link ${activeLink === 'results' ? 'active' : ''}`}
          onClick={() => handleNavClick('results')}
        >
          Results
        </a>
        <a 
          href="#applications" 
          className={`navbar-link ${activeLink === 'applications' ? 'active' : ''}`}
          onClick={() => handleNavClick('applications')}
        >
          Applications
        </a>
        <a 
          href="#team" 
          className={`navbar-link ${activeLink === 'team' ? 'active' : ''}`}
          onClick={() => handleNavClick('team')}
        >
          Team
        </a>
        <a 
          href="#purchase" 
          className={`navbar-link ${activeLink === 'purchase' ? 'active' : ''}`}
          onClick={() => handleNavClick('purchase')}
        >
          Purchase
        </a>
        <a 
          href="#contact" 
          className={`navbar-link ${activeLink === 'contact' ? 'active' : ''}`}
          onClick={() => handleNavClick('contact')}
        >
          Contact
        </a>
      </div>
      
      <div 
        className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavBar; 