// PlanList.js
import React, { useState } from 'react';
import Plan from './Plan';
import './PlanList.css';
import './HomePage.css';
import image3 from './image3.png';
import testimonialImage from './imagee2.png'; // Assuming you have an image for testimonials
// import { Link as RouterLink, useNavigate } from 'react-router-dom';

const plans = [
  {
    id: 1,
    name: 'Basic Plan',
    price: '$20/month',
    description: 'An affordable plan covering essential needs.',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    id: 2,
    name: 'Standard Plan',
    price: '$40/month',
    description: 'A balanced plan offering additional benefits.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  },
  {
    id: 3,
    name: 'Premium Plan',
    price: '$60/month',
    description: 'A comprehensive plan with maximum coverage.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
  },
];

function PlanList() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div style={{height:"1800px"}}>
    <div className='main'>
      <nav className="navbar1">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Our Plans</a>
        <a href="#contact">Contact Us</a>
        <button className="quote-btn">SIGN IN</button>
      </nav>
      <div>
        <div className='plainlist-header'>
          Why us ?
        </div>
        <div className='plainlist-why-us-container'>
          <img src={image3} alt="Logo1" className='plainlist-image-container'/>
          <div className='plainlist-description'>
            ⦿ Coverage You Can Count On<br/><br/>
            ⦿ Safeguarding Your Future Today<br/><br/>
            ⦿ Beyond Insurance, We’re Assurance<br/><br/>
            ⦿ Your Shield in Times of Need<br/><br/>
          </div>
        </div>
      </div>
      <div className="plan-list">
        {plans.map((plan) => (
          <Plan key={plan.id} plan={plan} onSelect={handleSelectPlan} />
        ))}
        {selectedPlan && (
          <div className="plan-details">
            <h2>{selectedPlan.name} Details</h2>
            <p>{selectedPlan.description}</p>
            <ul>
              {selectedPlan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button onClick={() => setSelectedPlan(null)}>Close</button>
          </div>
        )}
      </div>
      <div className="insurance-info">
        <h2>Understanding Insurance</h2>
        <p>Insurance is a means of protection from financial loss. It is a form of risk management, primarily used to hedge against the risk of a contingent or uncertain loss.</p>
        <h3>Types of Insurance</h3>
        <ul>
          <li><strong>Health Insurance:</strong> Covers medical expenses.</li>
          <li><strong>Life Insurance:</strong> Provides financial support to beneficiaries in the event of the policyholder's death.</li>
          <li><strong>Auto Insurance:</strong> Covers damages to vehicles and injuries from car accidents.</li>
          <li><strong>Home Insurance:</strong> Protects against damages to one's home and belongings.</li>
        </ul>
        <h3>Benefits of Insurance</h3>
        <ul>
          <li>Provides peace of mind by reducing financial uncertainties.</li>
          <li>Helps in managing risks and unforeseen circumstances.</li>
          <li>Offers financial protection and support during emergencies.</li>
          <li>Encourages savings and investment through various insurance plans.</li>
        </ul>
        <h3>Choosing the Right Plan</h3>
        <p>When choosing an insurance plan, consider factors such as coverage, premium cost, claim process, and the reputation of the insurance provider. It's essential to evaluate your specific needs and financial situation to select the plan that best suits you.</p>
      </div>
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <h4>What is the claim process?</h4>
          <p>Our claim process is straightforward. Simply contact our customer support, and we'll guide you through the necessary steps.</p>
        </div>
        <div className="faq">
          <h4>How do I update my policy information?</h4>
          <p>You can update your policy information by logging into your account or contacting our support team for assistance.</p>
        </div>
        <div className="faq">
          <h4>What payment methods are accepted?</h4>
          <p>We accept various payment methods including credit/debit cards, bank transfers, and online payment systems.</p>
        </div>
      </div>
      <div className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <img src={testimonialImage} alt="Client" className="testimonial-img"/>
          <p>"The service was exceptional, and the coverage is just what I needed. Highly recommend!" - John Doe</p>
        </div>
        <div className="testimonial">
          <img src={testimonialImage} alt="Client" className="testimonial-img"/>
          <p>"I've never felt more secure. Their plans are comprehensive and affordable." - Jane Smith</p>
        </div>
      </div>
      <div className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Contact us today and find the insurance plan that suits you best.</p>
        <button className="cta-btn">Get a Quote</button>
      </div>
      <nav className="navbar2">
        <h3>Contact Us</h3>
        <p>If you have any questions or need further assistance, feel free to contact us at (123) 456-7890 or email us at support@insurancecompany.com. Our team is here to help you make the best decision for your insurance needs.</p>
      </nav>
    </div>
    </div>
  );
}

export default PlanList;
