import React from 'react';
import Slider from 'react-slick';
import './HomePage.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from './logo1.jpg';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import Features from './Features';
// import Footer from './Footer';

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="navbar">
          <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
          <RouterLink to="about">About Us</RouterLink>
          <RouterLink to="/insurance-types">Our Plans</RouterLink>
          <ScrollLink to="contact" smooth={true} duration={500}>Contact Us</ScrollLink>
          <RouterLink to="/auth">
            <button className="quote-btn">Sign In</button>
          </RouterLink>
        </nav>
      </header>
      <div id="home" className="banner-section">
        <Slider {...settings}>
          <div className="banner">
            <div className="banner-content">
              <h1>Secure Your Future with Us</h1>
              <p>Explore our comprehensive insurance plans to safeguard your family and assets.</p>
              <button className="explore-btn">More Details</button>
            </div>
          </div>
          <div className="banner">
            <div className="banner-content">
              <h1>Protect What Matters Most</h1>
              <p>From health to home, we've got you covered with our wide range of insurance policies.</p>
              <button className="explore-btn">More Details</button>
            </div>
          </div>
          <div className="banner">
            <div className="banner-content">
              <h1>Your Peace of Mind, Our Priority</h1>
              <p>Get the best insurance solutions tailored to your needs and budget.</p>
              <button className="explore-btn">More Details</button>
            </div>
          </div>
        </Slider>
      </div>
      <div className="test">
       <h1>Why SecureLife?</h1>
      </div>
      <Features /> {/* Add the Features component */}
      <footer className="footer">
      <p>&copy; 2024 Your Insurance Company. All rights reserved.</p>
     </footer>
    </div>
  );
};

export default HomePage;