import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Destinations from './pages/Destinations.jsx';
import Booking from './pages/Booking.jsx';
import Contactus from './pages/Contactus.jsx';
import Pricing from './pages/Pricing.jsx';
import Footer from './components/Footer.jsx';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
