import React from 'react';
import './FeaturedDestinations.css'; // Import the CSS file for styling

// Import the image files
import paris from '../assets/img/paris.jpg';
import newyork from '../assets/img/newyork.jpg';
import tokyo from '../assets/img/tokyo.jpg';
import sydney from '../assets/img/sydney.jpg';

const destinations = [
  { name: 'Paris', image: paris },
  { name: 'New York', image: newyork },
  { name: 'Tokyo', image: tokyo },
  { name: 'Sydney', image: sydney }
];

const FeaturedDestinations = () => {
  return (
    <section className="featured-destinations">
      <h2 className="featured-destinations__title">Explore Top Destinations</h2>
      <div className="featured-destinations__grid">
        {destinations.map((destination, index) => (
          <div key={index} className="featured-destinations__item">
            <img src={destination.image} alt={destination.name} className="featured-destinations__image" />
            <div className="featured-destinations__overlay">
              <h3 className="featured-destinations__name">{destination.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDestinations;
