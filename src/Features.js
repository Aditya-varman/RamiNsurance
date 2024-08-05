import React from 'react';
import './Features.css'; // Create a separate CSS file for styling

// Import images
import feature1Img from './bg7.jpeg';
import feature3Img from './money.jpeg';
import feature4Img  from './bg1.jpg';
import feature5Img  from './saran.png';
const Features = () => 
  {
  return (
    <div id="features" className="features">
      <div className="feature-card">
        <img src={feature1Img} alt="Feature 1" className="feature-image" />
        <h3>Trusted by Many</h3>
        <p>With a strong reputation and numerous satisfied clients, Secure Life is a trusted name in the insurance industry among the leading competitors</p>
      </div>
      <div className="feature-card">
        <img src={feature5Img} alt="Feature 2" className="feature-image" />
       <h3>Affordable Plans</h3>
       <p> We provide competitive pricing and flexible payment options, making it easy to find a plan that fits your budget without compromising on coverage.</p>
      </div>
      <div className="feature-card">
        <img src={feature4Img} alt="Feature 3" className="feature-image" />
       <h3>Expert Guidance</h3>
       <p>Our experienced team of professionals is here to help you understand your options and choose the right insurance products for your specific situation.</p>
      </div>
      <div className="feature-card">
      <img src={feature3Img} alt="Feature 3" className="feature-image" />
      <h3>Easy Claims Process</h3>
<p>We offer a streamlined claims process, making it easier for you to get the support you need when you need it most.</p>
    </div>
    </div>
  );
};

export default Features;
