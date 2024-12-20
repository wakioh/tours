import React from 'react';
import '../styles/pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h2 className="pricing-heading">Discover Kenya in Comfort and Style</h2>
      <p className="pricing-description">
        Embark on an unforgettable adventure across Kenya with our exclusive 3-day package. Explore four iconic destinations, enjoy luxurious accommodation, indulge in delicious meals, and travel in comfort—all for just <strong className='main-price'>$1500 USD</strong> per person. For families, we offer a special deal—bring your child under 3 years of age for free! This incredible offer includes everything you need to experience the beauty of Kenya with peace of mind.
      </p>
      
      <div className="pricing-details">
        <h3>What's Included?</h3>
        <ul>
          <li><strong>Accommodation:</strong> Stay in top-rated hotels and resorts across all destinations.</li>
          <li><strong>Food:</strong> Enjoy breakfast, lunch, and dinner, with a variety of local and international cuisine options.</li>
          <li><strong>Transportation:</strong> Comfortable, air-conditioned vehicles to all four destinations with experienced drivers within kenya.</li>
          <li><strong>Destinations:</strong> Visit any of the four breathtaking locations of your choosing in Kenya i.e Nairobi, Masai Mara, Amboseli, and Lake Nakuru.</li>
        </ul>
      </div>

      <div className="pricing-footer">
        <h3>Ready for the adventure of a lifetime?</h3>
        <p>
          Book your spot today and let us take care of the rest. This offer is valid for a limited time, so don’t miss out on experiencing Kenya’s wonders in style!
        </p>
        <a href="/booking" className="cta-btn">Book Your Trip Now</a>
      </div>
    </div>
  );
};

export default Pricing;

