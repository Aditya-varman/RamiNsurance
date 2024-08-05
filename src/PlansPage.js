import React from 'react';
import { useParams } from 'react-router-dom';
import './PlansPage.css';
import logo from './logo1.jpg';

const plansData = {
  life: [
    { name: "SARAN's new tech term", schemeNumber: 954, uin: '512N351V01', provider: 'LIC' },
    { name: "TOBI's Jeevan Amar", schemeNumber: 955, uin: '512N350N01', provider: 'LIC' },
    { name: "DK's Simple Life Insurance", schemeNumber: 859, uin: '512N341V01', provider: 'HDFC' },
    { name: "DK's new tech term", schemeNumber: 954, uin: '512N351V01', provider: 'ICICI' },
    { name: "DK's Jeevan Amar", schemeNumber: 955, uin: '512N350N01', provider: 'SBI LIFE' },
    { name: "DK's Simple Life Insurance", schemeNumber: 859, uin: '512N341V01', provider: 'STAR' },
    { name: "SARAN's new tech term", schemeNumber: 954, uin: '512N351V01', provider: 'MAX' },
    { name: "SARAN's Jeevan Amar", schemeNumber: 955, uin: '512N350N01', provider: 'LIC' },
    { name: "RAM's Simple Life Insurance", schemeNumber: 859, uin: '512N341V01', provider: 'LIC' },
    { name: "VARMA's new tech term", schemeNumber: 954, uin: '512N351V01', provider: 'SBI LIFE' },
    { name: "DK's Jeevan Amar", schemeNumber: 955, uin: '512N350N01', provider: 'HDFC' },
  ],
  health: [
    { name: "Health Plan 1", schemeNumber: 101, uin: '513N101V01', provider: 'STAR' },
    { name: "Health Plan 2", schemeNumber: 102, uin: '513N102V01', provider: 'MAX' },
    { name: "Health Plan 3", schemeNumber: 101, uin: '513N101V01', provider: 'RELIGARE' },
    { name: "Health Plan 4", schemeNumber: 102, uin: '513N102V01', provider: 'HDFC ERGO' },
    { name: "Health Plan 5", schemeNumber: 101, uin: '513N101V01', provider: 'MAX' },
    { name: "Health Plan 6", schemeNumber: 102, uin: '513N102V01', provider: 'RELIGARE' },
    { name: "Health Plan 7", schemeNumber: 101, uin: '513N101V01', provider: 'MAX' },
    { name: "Health Plan 8", schemeNumber: 102, uin: '513N102V01', provider: 'HDFC' },
    { name: "Health Plan 9", schemeNumber: 101, uin: '513N101V01', provider: 'STAR' },
    { name: "Health Plan 10", schemeNumber: 102, uin: '513N102V01', provider: 'RELIGARE' },
  ],
  auto: [
    { name: "Car Insurance", schemeNumber: 201, uin: '514N201V01', provider: 'UNTITED INDIA' },
    { name: "Bike Insurnace", schemeNumber: 202, uin: '514N202V01', provider: 'POLICY BAZAAR' },
    { name: "Auto Insurnace", schemeNumber: 201, uin: '514N201V01', provider: 'HDFC AUTO' },
    { name: "Auto Plan 4", schemeNumber: 202, uin: '514N202V01', provider: 'RELIGARE' },
    { name: "Auto Plan 5", schemeNumber: 201, uin: '514N201V01', provider: 'SBI VEHICLE' },
    { name: "Auto Plan 6", schemeNumber: 202, uin: '514N202V01', provider: 'LIC' },
    { name: "Auto Plan 7", schemeNumber: 201, uin: '514N201V01', provider: 'POLICY BAZAAR' },
    { name: "Auto Plan 8", schemeNumber: 202, uin: '514N202V01', provider: 'LIC' },
    { name: "Auto Plan 9", schemeNumber: 201, uin: '514N201V01', provider: 'POLICY BAZAAR' },
    { name: "Auto Plan 10", schemeNumber: 202, uin: '514N202V01', provider: 'STAR' },
  ],
  home: [
    { name: "Home Plan 1", schemeNumber: 201, uin: '514N201V01', provider: 'ADITYA BIRLA' },
    { name: "Home Plan 2", schemeNumber: 202, uin: '514N202V01', provider: 'ADITYA BIRLA' },
    { name: "Home Plan 3", schemeNumber: 201, uin: '514N201V01', provider: 'LIC' },
    { name: "Home Plan 4", schemeNumber: 202, uin: '514N202V01', provider: 'BAJAJ ALLIANZ' },
    { name: "Home Plan 5", schemeNumber: 201, uin: '514N201V01', provider: 'NEW INDIA' },
    { name: "Home Plan 6", schemeNumber: 202, uin: '514N202V01', provider: 'ORIENTAL' },
    { name: "Home Plan 7", schemeNumber: 201, uin: '514N201V01', provider: 'STAR HEALTH' },
    { name: "Home Plan 8", schemeNumber: 202, uin: '514N202V01', provider: 'UNITED INDIA' },
    { name: "Home Plan 9", schemeNumber: 201, uin: '514N201V01', provider: 'STAR' },
    { name: "Home Plan 10", schemeNumber: 202, uin: '514N202V01', provider: 'HDFC' },
  ],
  travel: [
    { name: "Travel Plan 1", schemeNumber: 201, uin: '514N201V01', provider: 'HDFC' },
    { name: "Travel Plan 2", schemeNumber: 202, uin: '514N202V01', provider: 'STAR' },
    { name: "Travel Plan 3", schemeNumber: 201, uin: '514N201V01', provider: 'ICICI' },
    { name: "Travel Plan 4", schemeNumber: 202, uin: '514N202V01', provider: 'SBI' },
    { name: "Travel Plan 5", schemeNumber: 201, uin: '514N201V01', provider: 'BAJAJ' },
    { name: "Travel Plan 6", schemeNumber: 202, uin: '514N202V01', provider: 'BAJAJ ALLIANZ' },
    { name: "Travel Plan 7", schemeNumber: 201, uin: '514N201V01', provider: 'RELIGARE' },
    { name: "Travel Plan 8", schemeNumber: 202, uin: '514N202V01', provider: 'STAR' },
    { name: "Travel Plan 9", schemeNumber: 201, uin: '514N201V01', provider: 'STAR' },
    { name: "Travel Plan 10", schemeNumber: 202, uin: '514N202V01', provider: 'STAR' },
  ],
  pet: [
    { name: "Pet Plan 1", schemeNumber: 201, uin: '514N201V01', provider: 'Star' },
    { name: "Pet Plan 2", schemeNumber: 202, uin: '514N202V01', provider: 'Star' }
  ],
  fire: [
    { name: "Fire Plan 1", schemeNumber: 201, uin: '514N201V01', provider: 'Star' },
    { name: "Fire Plan 2", schemeNumber: 202, uin: '514N202V01', provider: 'Star' }
  ],
  disability: [
    { name: "Disability Plan 1", schemeNumber: 201, uin: '514N201V01', provider: 'Star' },
    { name: "Disability Plan 2", schemeNumber: 202, uin: '514N202V01', provider: 'Star' }
  ],
};

const PlansPage = () => {
  const { insuranceType } = useParams();
  const plans = plansData[insuranceType] || [];

  return (
    <div className="plans-page">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="#about">About Us</a>
          <a href="#service">Our Plans</a>
          <a href="#contact">Contact Us</a>
          <a href="#insurance">Insurance Types</a>
        </nav>
      </header>
      <div className="content">
        <h1>{insuranceType.charAt(0).toUpperCase() + insuranceType.slice(1)} Insurance Plans</h1>
        {plans.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Product Name</th>
                <th>Scheme Number</th>
                <th>UIN Number</th>
                <th>Provider</th> {/* New column for insurance provider */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{plan.name}</td>
                  <td>{plan.schemeNumber}</td>
                  <td>{plan.uin}</td>
                  <td>{plan.provider}</td> {/* New column for insurance provider */}
                  <td>
                    <button className="apply-btn" onClick={() => handleApply(plan)}>Apply Now</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No plans available for the selected insurance type.</p>
        )}
      </div>
      <footer className="footer">
        <p>&copy; 2024 Your Insurance Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

const handleApply = (plan) => {
  alert(`Applying for: ${plan.name}`);
  // Here you can redirect to an application form page or trigger a modal
};

export default PlansPage;
