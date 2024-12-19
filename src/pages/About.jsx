import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Kioh Travel Agency</h1>
        <p>Your gateway to unforgettable adventures and stress-free travel planning.</p>
      </div>
      <div className="about-content">
        <div className="about-mission">
          <h2>Our Mission</h2>
          <p>
            At Kioh Travel Agency, our mission is to make your dream destinations a reality. 
            We are dedicated to crafting personalized travel experiences, whether you're looking 
            for a peaceful getaway, an adventure-packed trip, or a luxurious vacation.
          </p>
        </div>
        <div className="about-services">
          <h2>What We Offer</h2>
          <ul>
            <li>Tailor-made travel packages to destinations worldwide.</li>
            <li>Comprehensive booking services for flights, hotels, and tours.</li>
            <li>Expert guidance and recommendations for unique experiences.</li>
            <li>24/7 customer support for seamless travel assistance.</li>
          </ul>
        </div>
        <div className="about-commitment">
          <h2>Why Choose Us?</h2>
          <p>
            With years of experience in the travel industry, we pride ourselves on delivering 
            exceptional customer service and unforgettable journeys. Our team of travel experts 
            ensures that every detail is handled, so you can focus on enjoying your trip.
          </p>
        </div>
      </div>
      <div className="about-footer">
        <h3>Let’s Plan Your Next Adventure!</h3>
        <p>
          Whether it's your first trip or you're a seasoned traveler, Kioh Travel Agency is here to 
          create a travel experience you'll cherish forever.
        </p>
      </div>
    </div>
  );
};

export default About;
