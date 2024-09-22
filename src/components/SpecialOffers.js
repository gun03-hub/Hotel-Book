import React from 'react';
import './SpecialOffers.css'; // Import the CSS file for styling

// Import the image files
import offer1 from '../assets/img/offer1.jpg';
import offer2 from '../assets/img/offer2.jpg';
import offer3 from '../assets/img/offer3.jpg';

const offers = [
  { title: '20% Off on Your First Booking', description: 'Use code FIRST20 at checkout.', image: offer1 },
  { title: 'Stay 3 Nights, Get 1 Free', description: 'Book 3 nights and get 1 night free.', image: offer2 },
  { title: 'Exclusive Discount for Members', description: 'Sign up and get access to special rates.', image: offer3 }
];

const SpecialOffers = () => {
  return (
    <section className="special-offers">
      <h2 className="special-offers__title">Special Offers</h2>
      <div className="special-offers__grid">
        {offers.map((offer, index) => (
          <div key={index} className="special-offers__card">
            <img src={offer.image} alt={offer.title} className="special-offers__image" />
            <div className="special-offers__content">
              <h3 className="special-offers__title">{offer.title}</h3>
              <p className="special-offers__description">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
