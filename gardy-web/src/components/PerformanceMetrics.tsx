import React, { useEffect, useRef, useState } from 'react';
import './PerformanceMetrics.css';
import '../App.css';

const PerformanceMetrics: React.FC = () => {
  const metricsRef = useRef<HTMLDivElement>(null);
  const [activeMetric, setActiveMetric] = useState<number | null>(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  
  // Animated counter for metrics
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationTriggered) {
            setAnimationTriggered(true);
            const metricValues = document.querySelectorAll('.metric-value');
            metricValues.forEach((metric) => {
              const element = metric as HTMLElement;
              const targetValue = parseFloat(element.getAttribute('data-value') || '0');
              animateCounter(element, 0, targetValue, 2000);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [animationTriggered]);
  
  const animateCounter = (
    element: HTMLElement,
    start: number,
    end: number,
    duration: number
  ) => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = progress * (end - start) + start;
      
      element.innerHTML = value.toFixed(1) + '%';
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const metrics = [
    {
      value: 65.8,
      label: 'TDS Reduction',
      description: 'From 1123 to 384 ppm',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3V21M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M19 8H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M19 16H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      detail: 'Total Dissolved Solids (TDS) were reduced substantially through our multi-stage filtration process, meeting WHO drinking water standards. This improves taste, clarity, and removes harmful mineral content.'
    },
    {
      value: 81.0,
      label: 'Turbidity Reduction',
      description: 'From 58% to 11% NTU',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 8C21 8 18.956 5 12 5C5.044 5 3 8 3 8C3 8 5.044 11 12 11C18.956 11 21 8 21 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 15C20 15 18.132 19 12 19C5.868 19 4 15 4 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      detail: 'Our natural coagulation stage using lemon peels achieved remarkable turbidity reduction, creating water that is visibly clearer with significantly fewer suspended particles than conventional methods.'
    },
    {
      value: 21.1,
      label: 'pH Improvement',
      description: 'From 8.52 to 6.72 pH',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 16L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 8H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 16H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      detail: 'We successfully neutralized alkaline water to create a more balanced pH level, which enhances plant growth in agricultural applications and improves taste for drinking water.'
    },
    {
      value: 83.7,
      label: 'Overall Efficiency',
      description: 'Exceeds industry standards',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 7L9 18L4 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      detail: 'Our integrated system achieves exceptional purification efficiency at significantly lower cost and energy consumption than conventional methods, using renewable and locally available materials.'
    }
  ];

  return (
    <section className="performance-metrics" ref={metricsRef}>
      <div className="container">
        <div className="metrics-header">
          <h2 className="metrics-title">PERFORMANCE METRICS</h2>
          <p className="metrics-description">
            Laboratory testing confirms superior treatment efficiency across key water quality parameters
          </p>
        </div>
        
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div 
              className={`metric-card ${activeMetric === index ? 'active' : ''}`} 
              key={index}
              onMouseEnter={() => setActiveMetric(index)}
              onMouseLeave={() => setActiveMetric(null)}
            >
              <div className="metric-icon">{metric.icon}</div>
              
              <div 
                className="metric-value" 
                data-value={metric.value}
              >
                0.0%
              </div>
              
              <h3 className="metric-label">{metric.label}</h3>
              <p className="metric-description">{metric.description}</p>
              
              <div className={`metric-detail ${activeMetric === index ? 'visible' : ''}`}>
                <p>{metric.detail}</p>
              </div>
              
              <div className="card-decoration left"></div>
              <div className="card-decoration right"></div>
            </div>
          ))}
        </div>
        
        <div className="metrics-note">
          * Results based on comparative laboratory testing using standard water quality measurement protocols
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="metrics-decoration">
        <div className="decoration-diamond diamond-1"></div>
        <div className="decoration-diamond diamond-2"></div>
      </div>
    </section>
  );
};

export default PerformanceMetrics; 