import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling
import team1 from '../assets/img/team1.png'; // Import the image files
import team2 from '../assets/img/team1.jpg'; // Import the image files

const AboutUs = () => {
  return (
    <section id="about-us-section" className="about-us">
      <h2 className="about-us__title">About Us</h2>
      <p className="about-us__description">
        We are committed to providing the best hotel booking experience. Our team is dedicated to ensuring you find the perfect stay at unbeatable prices. With a user-friendly platform and exceptional customer service, we aim to make your travel planning as seamless as possible.
      </p>
      <div className="about-us__team">
        <div className="about-us__team-member">
          <img src={team1} alt="Alice Brown" className="about-us__team-image" />
          <h3 className="about-us__team-name">Alice Brown</h3>
          <p className="about-us__team-role">Co-Founder</p>
        </div>
        <div className="about-us__team-member">
          <img src={team2} alt="John Doe" className="about-us__team-image" />
          <h3 className="about-us__team-name">John Doe</h3>
          <p className="about-us__team-role">Lead Developer</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
