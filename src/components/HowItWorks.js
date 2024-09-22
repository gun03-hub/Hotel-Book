import React from 'react';
import './HowItWorks.css'; // Import the CSS file for styling

const steps = [
  { title: 'Search Hotels', description: 'Enter your destination and travel dates to find available hotels.' },
  { title: 'Choose Your Room', description: 'Browse through options and select the room that fits your needs.' },
  { title: 'Book & Enjoy', description: 'Complete the booking and get ready for a memorable stay.' }
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2 className="how-it-works__title">How It Works</h2>
      <div className="how-it-works__steps">
        {steps.map((step, index) => (
          <div key={index} className="how-it-works__step">
            <div className="how-it-works__icon">
              <span>{index + 1}</span>
            </div>
            <h3 className="how-it-works__step-title">{step.title}</h3>
            <p className="how-it-works__step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
