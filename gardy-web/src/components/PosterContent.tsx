import React from 'react';
import './PosterContent.css';

const PosterContent: React.FC = () => {
  return (
    <div className="content-container">
      <div className="business-layout">
        <div className="business-header">
          <div className="header-content">
            <h1 className="header-title">Water Treatment Solution</h1>
            <p className="header-subtitle">Innovative Eco-friendly Water Purification Technology</p>
            <div className="header-cta">
              <button className="btn primary-btn">Request Demo</button>
              <button className="btn secondary-btn">Contact Us</button>
            </div>
          </div>
        </div>

        {/* Value Proposition Section */}
        <section id="value-proposition" className="business-section">
          <h2 className="section-title">Our Solution</h2>
          <div className="value-cards">
            <div className="value-card">
              <div className="icon-container">
                <i className="icon eco-icon"></i>
              </div>
              <h3>Eco-Friendly Approach</h3>
              <p>Using treated waste/recycled materials that improve water quality while contributing to a cleaner environment.</p>
            </div>
            <div className="value-card">
              <div className="icon-container">
                <i className="icon efficiency-icon"></i>
              </div>
              <h3>High Efficiency</h3>
              <p>System achieves over 83.7% efficiency in removing contaminants with documented performance metrics.</p>
            </div>
            <div className="value-card">
              <div className="icon-container">
                <i className="icon cost-icon"></i>
              </div>
              <h3>Cost Effective</h3>
              <p>Sustainable solution that reduces operational costs while meeting environmental compliance standards.</p>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="technology" className="business-section tech-section">
          <h2 className="section-title">Our Technology</h2>
          <div className="tech-grid">
            <div className="tech-image">
              <div className="image-placeholder">
                {/* Image placeholder for treatment system diagram */}
              </div>
            </div>
            <div className="tech-details">
              <h3>Four-Stage Treatment Process</h3>
              <ul className="process-list">
                <li>
                  <span className="process-number">01</span>
                  <div>
                    <h4>Oil Separation</h4>
                    <p>Dissolved Air Flotation (DAF) creates bubbles that lift oil droplets for separation.</p>
                  </div>
                </li>
                <li>
                  <span className="process-number">02</span>
                  <div>
                    <h4>Natural Coagulation</h4>
                    <p>Citric acid from lemon peels soaked in vinegar acts as a natural chelating agent for heavy metals.</p>
                  </div>
                </li>
                <li>
                  <span className="process-number">03</span>
                  <div>
                    <h4>Multi-layer Filtration</h4>
                    <p>Activated carbon, zeolite, sand, and gravel create a comprehensive filtration system.</p>
                  </div>
                </li>
                <li>
                  <span className="process-number">04</span>
                  <div>
                    <h4>Reverse Osmosis</h4>
                    <p>Final purification step reduces salinity by forcing water through a semi-permeable membrane.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="business-section">
          <h2 className="section-title">Performance Metrics</h2>
          <div className="metrics-container">
            <div className="metric-card">
              <div className="metric-value">65.8%</div>
              <div className="metric-label">TDS Reduction</div>
              <div className="metric-details">From 1123 to 384</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">81.0%</div>
              <div className="metric-label">Turbidity Reduction</div>
              <div className="metric-details">From 58% to 11%</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">21.1%</div>
              <div className="metric-label">pH Improvement</div>
              <div className="metric-details">From 8.52 to 6.72</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">83.7%</div>
              <div className="metric-label">Overall Efficiency</div>
              <div className="metric-details">Exceeds industry standards</div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section id="applications" className="business-section">
          <h2 className="section-title">Applications</h2>
          <div className="applications-grid">
            <div className="application-card">
              <h3>Industrial Wastewater</h3>
              <p>Perfect for manufacturing facilities like Ghabour Auto (GB Auto) that need to process contaminated wastewater.</p>
            </div>
            <div className="application-card">
              <h3>Municipal Water Treatment</h3>
              <p>Scalable solution for community water systems requiring efficient purification methods.</p>
            </div>
            <div className="application-card">
              <h3>Agricultural Irrigation</h3>
              <p>Transforms wastewater into irrigation-grade water, supporting sustainable farming practices.</p>
            </div>
            <div className="application-card">
              <h3>Environmental Remediation</h3>
              <p>Helps restore contaminated water bodies and ecosystems through effective pollutant removal.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="business-section">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Abdullah Gamil</h3>
              <p className="member-title">Project Lead</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Ammar Abdelmoneam</h3>
              <p className="member-title">Technology Specialist</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Ammar Hussieny</h3>
              <p className="member-title">Research Analyst</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Mohamed Ramadan</h3>
              <p className="member-title">Development Engineer</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="business-section">
          <h2 className="section-title">Partner With Us</h2>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Ready to transform your water treatment process?</h3>
              <p>Our innovative solution is adaptable to various industrial settings and environmental challenges. Let's discuss how we can help your organization achieve sustainable water management goals.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <i className="icon email-icon"></i>
                  <span>contact@watertreatment.com</span>
                </div>
                <div className="contact-item">
                  <i className="icon phone-icon"></i>
                  <span>+20 123 456 7890</span>
                </div>
                <div className="contact-item">
                  <i className="icon location-icon"></i>
                  <span>Cairo, Egypt</span>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" placeholder="Enter your company name" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Tell us about your water treatment needs"></textarea>
              </div>
              <button className="btn primary-btn full-width">Submit Inquiry</button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="business-footer">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Water Treatment Solutions</h3>
              <p>Innovative Eco-friendly Technology</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#value-proposition">Our Solution</a></li>
                <li><a href="#technology">Technology</a></li>
                <li><a href="#results">Results</a></li>
                <li><a href="#applications">Applications</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-social">
              <h4>Connect With Us</h4>
              <div className="social-icons">
                <a href="https://www.linkedin.com" className="social-icon linkedin" aria-label="LinkedIn">LinkedIn</a>
                <a href="https://www.twitter.com" className="social-icon twitter" aria-label="Twitter">Twitter</a>
                <a href="https://www.facebook.com" className="social-icon facebook" aria-label="Facebook">Facebook</a>
                <a href="https://www.instagram.com" className="social-icon instagram" aria-label="Instagram">Instagram</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Water Treatment Project. All Rights Reserved.</p>
            <p>STEM 6TH OF OCTOBER HIGH SCHOOL FOR BOYS</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PosterContent; 