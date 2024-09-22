import React from 'react';
import './Testimonials.css'; // Import the CSS file for styling

// Import the image files
import testimonialImg from '../assets/img/testimonial.jpg';
import pic2 from '../assets/img/pic2.jpg';
import exterior1 from '../assets/img/exterior1.jpg';

const testimonials = [
  {
    name: 'John Doe',
    text: 'The best hotel booking experience I have ever had. Highly recommend!',
    image: testimonialImg
  },
  {
    name: 'Jane Smith',
    text: 'Great service and user-friendly platform. Will definitely use it again!',
    image: pic2
  },
  {
    name: 'Alice Johnson',
    text: 'Excellent customer support and fantastic deals on hotels.',
    image: exterior1
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials__title">What Our Customers Say</h2>
      <div className="testimonials__slider">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonials__card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonials__image" />
            <div className="testimonials__content">
              <p className="testimonials__text">"{testimonial.text}"</p>
              <h3 className="testimonials__name">- {testimonial.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
