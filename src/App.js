import React from 'react';
import './App.css';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import FeaturedHotels from '../src/components/FeaturedHotels';
import HowItWorks from '../src/components/HowItWorks';
import SpecialOffers from '../src/components/SpecialOffers';
import Testimonials from '../src/components/Testimonials';
import NewsletterSignup from '../src/components/NewsletterSignup';
import FeaturedDestinations from '../src/components/FeaturedDestinations';
import AboutUs from '../src/components/AboutUs';
import Footer from '../src/components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedHotels />
      <FeaturedDestinations />
      <HowItWorks />
      <SpecialOffers />
      <Testimonials />
      <NewsletterSignup />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default App;
