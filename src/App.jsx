import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Booking from './pages/Booking';
import Contactus from './pages/Contactus';
import Pricing from './pages/pricing';
import Footer from './components/Footer';


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
