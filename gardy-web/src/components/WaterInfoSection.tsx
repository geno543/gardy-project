import React, { useState } from 'react';
import './WaterInfoSection.css';

const WaterInfoSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };
  
  return (
    <div className="water-info-section papyrus-bg">
      {/* Product Sales Section - Completely Separate */}
      <div className="sales-section-container">
        <div className="sales-section-title">
          <h2 className="section-heading">PURCHASE GARDY SYSTEM</h2>
          <div className="golden-underline"></div>
        </div>
        
        <div className="sales-card">
          <div className="product-showcase">
            <div className="product-image-container">
              <div className="product-image-frame">
                <div className="product-schematic"></div>
                <div className="product-caption">GARDY SYSTEM</div>
              </div>
              <div className="quality-badge">
                <span>PREMIUM</span>
                <span>QUALITY</span>
              </div>
            </div>
            
            <div className="product-details-container">
              <h3 className="product-name">GARDY WATER TREATMENT SYSTEM</h3>
              <div className="accent-line"></div>
              
              <p className="product-description">
                Our complete water treatment solution is now available for commercial and industrial applications. 
                Each unit is custom-built to your specifications and water treatment needs.
              </p>
              
              <div className="features-grid">
                <div className="feature-item">
                  <span className="feature-icon"></span>
                  <span className="feature-text">Complete 4-stage treatment system</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon"></span>
                  <span className="feature-text">Modular design for easy installation</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon"></span>
                  <span className="feature-text">Low maintenance requirements</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon"></span>
                  <span className="feature-text">Eco-friendly materials and processes</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon"></span>
                  <span className="feature-text">Technical support and training included</span>
                </div>
              </div>
              
              <div className="pricing-box">
                <div className="price-container">
                  <div className="price-label">Starting at</div>
                  <div className="price-value">$180</div>
                  <div className="price-note">Custom pricing based on capacity needs</div>
                </div>
                
                <div className="buttons-container">
                  <button className="quote-button">
                    <span className="button-icon quote-icon"></span>
                    REQUEST QUOTE
                  </button>
                  <button className="specs-button">
                    <span className="button-icon download-icon"></span>
                    Download Specs
                  </button>
                </div>
              </div>
              
              <div className="contact-strip">
                <span className="mail-icon"></span>
                <p className="contact-info">
                  For more information, contact our sales team at: 
                  <a href="mailto:sales@gardywater.com" className="email-link">sales@gardywater.com</a> 
                  or <span className="phone-number">+20 115 880 6644</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Section - New dedicated section */}
      <div className="contact-section-container" id="contact">
        <div className="contact-section-title">
          <h2 className="section-heading">CONNECT WITH US</h2>
          <div className="golden-underline"></div>
          <p className="subtitle">We're here to answer your questions about our water treatment solutions</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info-panel">
            <div className="contact-info-card">
              <h3>Get in Touch</h3>
              <p>Let us help you find the perfect water treatment solution for your needs.</p>
              
              <div className="contact-details">
                <div className="contact-detail-item">
                  {/* <span className="contact-icon location-icon"></span> */}
                  <div className="contact-text">
                    <h4>Address</h4>
                    <p>STEM 6th of October School, 6th of October City, Giza, Egypt</p>
                  </div>
                </div>
                
                <div className="contact-detail-item">
                  {/* <span className="contact-icon phone-icon"></span> */}
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+20 123 456 7890</p>
                  </div>
                </div>
                
                <div className="contact-detail-item">
                  {/* <span className="contact-icon email-icon"></span> */}
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>info@gardywater.com</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <a href="#" className="social-link facebook"></a>
                <a href="#" className="social-link twitter"></a>
                <a href="#" className="social-link linkedin"></a>
                <a href="#" className="social-link instagram"></a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-panel">
            <div className="contact-form-card">
              <h3>Send us a Message</h3>
              
              {formSubmitted ? (
                <div className="form-success-message">
                  <div className="success-icon"></div>
                  <h4>Thank you for contacting us!</h4>
                  <p>We have received your message and will get back to you shortly.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Information">Product Information</option>
                      <option value="Quote Request">Quote Request</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Partnership">Partnership</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formData.message}
                      onChange={handleInputChange}
                      required 
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-button">
                    <span className="send-icon"></span>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Research Information Section */}
      <div className="info-header nubian-pattern-border">
        <h2 className="nubian-heading">Additional Research Information</h2>
        <p className="subtitle">Detailed scientific background and applications</p>
      </div>
      
      <div className="info-grid">
        <div className="info-card applications nubian-card">
          <h3 className="nubian-heading">Applications</h3>
          <div className="application-cards">
            <div className="application-card">
              <h4>Industrial Wastewater</h4>
              <p>Perfect for manufacturing facilities like Ghabour Auto (GB Auto) that need to process contaminated wastewater.</p>
            </div>
            
            <div className="application-card">
              <h4>Municipal Water Treatment</h4>
              <p>Scalable solution for community water systems requiring efficient purification methods.</p>
            </div>
            
            <div className="application-card">
              <h4>Agricultural Irrigation</h4>
              <p>Transforms wastewater into irrigation-grade water, supporting sustainable farming practices.</p>
            </div>
            
            <div className="application-card">
              <h4>Environmental Remediation</h4>
              <p>Helps restore contaminated water bodies and ecosystems through effective pollutant removal.</p>
            </div>
          </div>
        </div>
        
        <div className="info-card science nubian-card">
          <h3 className="nubian-heading">Scientific Background</h3>
          <div className="science-content">
            <h4>Adsorption Mechanisms</h4>
            <p>
              Adsorption is the accumulation of molecules at an interface. Activated carbon's high 
              surface area (500–1,500 m²/g) makes it effective for adsorbing impurities like pesticides and 
              medications. Zeolites work through cation sorption due to uncompensated negative charges from 
              Si(IV) to Al(III) substitution.
            </p>
            
            <h4>Heavy Metal Coagulation</h4>
            <p>
              Citric acid from lemon peels binds to metals via its three carboxyl (-COOH) groups, forming 
              water-soluble citric acid-metal complexes that are filtered in later phases. Acetic acid in vinegar 
              lowers pH, dissolving metal hydroxides into free ions for chelation.
            </p>
            
            <h4>Dissolved Air Flotation</h4>
            <p>
              DAF removes suspended solids by injecting air into water under pressure. Tiny bubbles adhere to 
              particles via van der Waals forces, reducing particle density and causing them to float to the surface 
              where they can be skimmed off.
            </p>
          </div>
        </div>
        
        <div className="info-card conclusion nubian-card">
          <h3 className="nubian-heading">Conclusion</h3>
          <p>
            The Gardy four-stage water treatment system successfully addresses water pollution through a combination of 
            physical, chemical, and gravitational treatment methods. The prototype achieves significant reductions 
            in TDS (65.8%), turbidity (81%), and improvement in pH levels (21.1%), with an overall efficiency 
            exceeding 83.7%.
          </p>
          <p>
            This innovative solution provides a sustainable approach to water treatment that can be applied in 
            various industrial, municipal, and agricultural settings, contributing to cleaner water resources
            and a healthier environment.
          </p>
          <div className="acknowledgment">
            <p>
              <strong>Acknowledgment:</strong> We thank Allah for everything first. We express our sincere gratitude to everyone who supported us, 
              especially our capstone general Mr. Mohamed Bekheet, our capstone leader Ms. Ninette Refaat, 
              our capstone teacher, Ms. Mona Hamdan, and everyone else who contributed to this project.
            </p>
          </div>
        </div>
      </div>
      
      <div className="school-footer nubian-pattern-border">
        <p>STEM 6TH OF OCTOBER HIGH SCHOOL FOR BOYS - Gardy Water Treatment Project - 2025</p>
      </div>
    </div>
  );
};

export default WaterInfoSection; 