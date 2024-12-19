import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contactus.css';
import whatsapp from '../images/whatsapp-icon.png';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Accessing environment variables in Vite
    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        setStatusMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setStatusMessage('An error occurred while sending your message. Please try again.');
      });
  };

  return (
    <div className="contactus">
      <div className="contactus-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out to us for any inquiries or assistance.</p>
      </div>
      <div className="contactus-content">
        <div className="contactus-form">
          <h2>Send Us a Message</h2>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
        <div className="contactus-details">
          <h2>Get in Touch</h2>
          <p>
            <strong>Email: </strong>
            <a href="mailto:johnwakioh@gmail.com">johnwakioh@gmail.com</a>
          </p>
          <p>
            <strong>Phone: </strong>
            <a href="https://wa.me/254721391138" target="_blank" rel="noopener noreferrer">
              +254721391138
            </a>
          </p>
        </div>
      </div>
      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/+254721391138"
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <img src={whatsapp} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default Contactus;
