import React from 'react';
import SectionTitle from './SectionTitle';
import './PurchaseSystem.css';

const PurchaseSystem: React.FC = () => {
  return (
    <section className="purchase-section">
      <SectionTitle 
        title="PURCHASE GARDY SYSTEM" 
        subtitle="Explore our packages and find the perfect solution for your needs"
      />
      
      <div className="purchase-options">
        <div className="purchase-card">
          <div className="purchase-card-header">
            <h3>Basic Package</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">130</span>
            </div>
          </div>
          
          <div className="purchase-card-body">
            <ul className="features-list">
              <li>Core water treatment unit</li>
              <li>Standard filtration components</li>
              <li>3-month supply of materials</li>
              <li>Basic installation guide</li>
              <li>1-year limited warranty</li>
            </ul>
          </div>
          
          <div className="purchase-card-footer">
            <button className="purchase-button">
              <span className="button-text">Select Package</span>
            </button>
          </div>
        </div>
        
        <div className="purchase-card featured">
          <div className="card-badge">Most Popular</div>
          <div className="purchase-card-header">
            <h3>Premium Package</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">199</span>
            </div>
          </div>
          
          <div className="purchase-card-body">
            <ul className="features-list">
              <li>Advanced water treatment unit</li>
              <li>Enhanced filtration system</li>
              <li>6-month supply of materials</li>
              <li>Professional installation</li>
              <li>3-year extended warranty</li>
              <li>Mobile monitoring app</li>
              <li>24/7 technical support</li>
            </ul>
          </div>
          
          <div className="purchase-card-footer">
            <button className="purchase-button">
              <span className="button-text">Select Package</span>
            </button>
          </div>
        </div>
        
        <div className="purchase-card">
          <div className="purchase-card-header">
            <h3>Enterprise Solution</h3>
            <div className="price">
              <span className="custom-price">Custom Pricing</span>
            </div>
          </div>
          
          <div className="purchase-card-body">
            <ul className="features-list">
              <li>Industrial-scale treatment system</li>
              <li>Customized filtration solutions</li>
              <li>Annual supply of materials</li>
              <li>Full-service installation</li>
              <li>5-year comprehensive warranty</li>
              <li>Advanced analytics dashboard</li>
              <li>Dedicated account manager</li>
              <li>Quarterly maintenance included</li>
            </ul>
          </div>
          
          <div className="purchase-card-footer">
            <button className="purchase-button">
              <span className="button-text">Request Quote</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="purchase-info">
        <div className="info-card">
          <div className="info-icon">
            <i className="fas fa-shipping-fast"></i>
          </div>
          <h4>Free Shipping</h4>
          <p>On all orders over $200</p>
        </div>
        
        <div className="info-card">
          <div className="info-icon">
            <i className="fas fa-headset"></i>
          </div>
          <h4>24/7 Support</h4>
          <p>Technical assistance available</p>
        </div>
        
        <div className="info-card">
          <div className="info-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h4>Secure Payment</h4>
          <p>100% secure payment process</p>
        </div>
        
        <div className="info-card">
          <div className="info-icon">
            <i className="fas fa-undo"></i>
          </div>
          <h4>30-Day Returns</h4>
          <p>Satisfaction guaranteed</p>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSystem; 