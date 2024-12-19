import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Booking.css';

const Booking = () => {
  const destinationsList = [
    'Aberdare', 'Maasai Mara', 'Amboseli', 'Mt Kenya', 'Diani',
    'Chale Island', 'Karura Forest', 'Hells Gate', 'Lake Nakuru',
    'Great Rift Valley', 'Samburu National Park', 'Tsavo National Park',
    'Mandabay Beach', 'Watamu', 'Thika Falls',
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destinations: [],
    date: '',
    numberOfPeople: '',
    paymentMethod: 'pay-later',
    communicationMethod: 'skype',
  });

  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const updatedDestinations = checked
        ? [...prevData.destinations, value]
        : prevData.destinations.filter((destination) => destination !== value);

      return {
        ...prevData,
        destinations: updatedDestinations,
      };
    });
  };

  const validatePhoneNumber = (phone) => /^[0-9]{10,}$/.test(phone);

  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || formData.destinations.length < 3 || !formData.date || !formData.numberOfPeople) {
      alert('Please fill in all the fields and select at least 3 destinations.');
      return;
    }

    if (!validatePhoneNumber(formData.phone)) {
      setError('Phone number must be at least 10 digits long and contain only numbers.');
      return;
    } else {
      setError('');
    }

    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }

    const message = `
      Full Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Destinations: ${formData.destinations.join(', ')}
      Preferred Date of Arrival: ${formData.date}
      Number of People: ${formData.numberOfPeople}
      Payment Method: ${formData.paymentMethod}
      Communication Method: ${formData.communicationMethod}
    `;

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    emailjs.send(serviceID, templateID, {
      name: formData.name,
      email: formData.email,
      message: message,
    }, publicKey)
      .then((response) => {
        console.log('Success:', response);
        alert('Your booking has been confirmed! You will pay upon arrival in Kenya.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          destinations: [],
          date: '',
          numberOfPeople: '',
          paymentMethod: 'pay-later',
          communicationMethod: 'skype',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while sending your booking details. Please try again.');
      });
  };

  return (
    <div className="booking-container">
      <h2>Book Your Trip with kioh Tours and Travel</h2>
      <h1>Easy booking, pay after arrival</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        {emailError && <p className="error-message">{emailError}</p>}
        <label>
          Phone Number:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        {error && <p className="error-message">{error}</p>}
        <fieldset>
          <legend>Select at least 3 destinations you want to visit :</legend>
          <div className="destinations-list">
            {destinationsList.map((destination) => (
              <label key={destination} className="destination-checkbox">
                <input
                  type="checkbox"
                  value={destination}
                  checked={formData.destinations.includes(destination)}
                  onChange={handleCheckboxChange}
                />
                {destination}
              </label>
            ))}
          </div>
        </fieldset>
        <label>
          Preferred Date of Arrival:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Number of People:
          <input
            type="number"
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleChange}
            min="1"
            required
          />
        </label>
        <label>
          Payment Method:
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="pay-later">Pay Later (Upon Arrival in Kenya)</option>
          </select>
        </label>
        <label>
          Preferred Communication Method:
          <select
            name="communicationMethod"
            value={formData.communicationMethod}
            onChange={handleChange}
            required
          >
            <option value="skype">Skype</option>
            <option value="zoom">Zoom</option>
            <option value="google-meet">Google Meet</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </label>
        <button type="submit" className="submit-btn">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booking;
