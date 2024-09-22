import React from 'react';
import './HeroSection.css'; // Import the CSS file for styling

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Find Your Perfect Stay</h1>
        <p className="hero__subtitle">Explore the best hotels and destinations just for you</p>
        <div className="hero__search">
          <input type="text" placeholder="Destination, hotel name, or property" />
          <button type="button">Search</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
