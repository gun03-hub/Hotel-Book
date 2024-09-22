import React, { useState } from 'react';
import './NewsletterSignup.css'; // Import the CSS file for styling

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the email submission here
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="newsletter-signup">
      <h2 className="newsletter-signup__title">Sign Up for Our Newsletter</h2>
      <p className="newsletter-signup__description">Stay updated with the latest offers and news.</p>
      <form className="newsletter-signup__form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="newsletter-signup__input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="newsletter-signup__button">Subscribe</button>
      </form>
      {submitted && <p className="newsletter-signup__thank-you">Thank you for subscribing!</p>}
    </section>
  );
};

export default NewsletterSignup;
