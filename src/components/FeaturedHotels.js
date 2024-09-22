import React from 'react';
import './FeaturedHotels.css'; // Import the CSS file for styling

// Import the image files
import exterior from '../assets/img/exterior.jpg';
import exterior1 from '../assets/img/exterior1.jpg';
import hotel from '../assets/img/hotel.jpg';
import hotel1 from '../assets/img/hotel1.jpg';

const featuredHotels = [
  {
    name: 'Grand Hotel Paris',
    location: 'Paris, France',
    rating: 4.8,
    image: exterior
  },
  {
    name: 'The Ritz-Carlton',
    location: 'New York, USA',
    rating: 4.9,
    image: exterior1
  },
  {
    name: 'Tokyo Bay Hotel',
    location: 'Tokyo, Japan',
    rating: 4.7,
    image: hotel
  },
  {
    name: 'Sydney Harbour Hotel',
    location: 'Sydney, Australia',
    rating: 4.8,
    image: hotel1
  }
];

const FeaturedHotels = () => {
  return (
    <section className="featured-hotels">
      <h2 className="featured-hotels__title">Featured Hotels</h2>
      <div className="featured-hotels__grid">
        {featuredHotels.map((hotel, index) => (
          <div key={index} className="featured-hotels__card">
            <img src={hotel.image} alt={hotel.name} className="featured-hotels__image" />
            <div className="featured-hotels__details">
              <h3 className="featured-hotels__name">{hotel.name}</h3>
              <p className="featured-hotels__location">{hotel.location}</p>
              <p className="featured-hotels__rating">Rating: {hotel.rating} ★</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedHotels;
