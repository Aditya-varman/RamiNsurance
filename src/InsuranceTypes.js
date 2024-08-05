import React from 'react';
import './InsuranceTypes.css';
import logo from './logo1.jpg';
import fam from './family.jpg';
import auto from './auto.jpg';
import life from './life.webp';
import home from './home.jpg';
import travel from './travel.jpeg';
import pet from './pet.jpeg';
import fire from './fire.jpeg';
import disability from './disability.jpg';
import { useNavigate } from 'react-router-dom';

const InsuranceTypes = () => {
  const navigate = useNavigate();

  const handleApplyClick = (insuranceType) => {
    navigate(`/plans/${insuranceType}`);
  };

  return (
    <div className="insurance-types-page scrollable-container">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/insurance-types">Our Plans</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </header>
      <div className="content">
        <h1>What Are You Looking For?</h1>
        <div className="insurance-types">
          <div className="insurance-card">
            <img src={life} alt="Life Insurance" />
            <h2>Life Insurance</h2>
            <p>Protect your family's future with our comprehensive life insurance plans.</p>
            <button className="apply-btn" onClick={() => handleApplyClick('life')}>Apply Now</button>
          </div>
          <div className="insurance-card">
            <img src={fam} alt="Health Insurance" />
            <h2>Health Insurance</h2>
            <p>Ensure your family's health and well-being with our flexible health insurance policies.</p>
            <button className="apply-btn" onClick={() => handleApplyClick('health')}>Apply Now</button>
          </div>
          <div className="insurance-card">
            <img src={home} alt="Home Insurance" />
            <h2>Home Insurance</h2>
            <p>Protect your home and belongings with our affordable home insurance plans.</p>
            <button className="apply-btn" onClick={() => handleApplyClick('home')}>Apply Now</button>
          </div>
          <div className="insurance-card">
            <img src={auto} alt="Auto Insurance" />
            <h2>Auto Insurance</h2>
            <p>Drive with confidence knowing you're covered with our comprehensive auto insurance policies.</p>
            <button className="apply-btn" onClick={() => handleApplyClick('vehicle')}>Apply Now</button>
          </div>
          <div className="insurance-card">
            <img src={travel} alt="Travel Insurance" />
            <h2>Travel Insurance</h2>
            <p>Travel worry-free with our extensive travel insurance plans.</p>
            <button className="apply-btn" onClick={() => handleApplyClick('travel')}>Apply Now</button>
          </div>
          <div className="insurance-card">
            <img src={pet} alt="Pet Insurance" />
            <h2>Pet Insurance</h2>
            <p>Keep your furry friends healthy and happy with our comprehensive pet insurance policies.</p>
            <button className="apply-btn" onClick={() => handleApplyClick('pet')}>Apply Now</button>
          </div>
          <div className="insurance-card">
            <img src={fire} alt="Fire Insurance" />
            <h2>Fire Insurance</h2>
            <p>Protect your property and assets from fire damage with our reliable fire insurance plans.</p>
            <button className="apply-btn" onClick={() => handleApplyClick('fire')}>Apply Now</button>
          </div>
          <div className="insurance-card">
            <img src={disability} alt="Disability Insurance" />
            <h2>Disability Insurance</h2>
            <p>Secure your financial future with our comprehensive disability insurance policies.</p>
            <button className="apply-btn" onClick={() => handleApplyClick('disability')}>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceTypes;
