import React from 'react';
import './RegistrationPage.css';

const RegistrationPage = ({ insuranceType, productName }) => {
  const renderAdditionalFields = () => {
    switch (insuranceType) {
      case 'auto':
        return (
          <div>
            <label htmlFor="vehicleNumber">Vehicle Number:</label>
            <input type="text" id="vehicleNumber" name="vehicleNumber" required />
          </div>
        );
      case 'health':
        return (
          <div>
            <label htmlFor="healthId">Health ID:</label>
            <input type="text" id="healthId" name="healthId" required />
          </div>
        );
      case 'home':
        return (
          <div>
            <label htmlFor="propertyAddress">Property Address:</label>
            <input type="text" id="propertyAddress" name="propertyAddress" required />
          </div>
        );
      case 'travel':
        return (
          <div>
            <label htmlFor="passportNumber">Passport Number:</label>
            <input type="text" id="passportNumber" name="passportNumber" required />
          </div>
        );
      // Add more cases for different insurance types
      default:
        return null;
    }
  };

  return (
    <div className="registration-page">
      <h1>Register for {productName}</h1>
      <form>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" required />
        </div>
        {renderAdditionalFields()}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
