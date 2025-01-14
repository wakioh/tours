import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Destinations from './pages/Destinations.jsx';
import Booking from './pages/Booking.jsx';
import Contactus from './pages/Contactus.jsx';
import Pricing from './pages/Pricing.jsx';
// import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#fff5f5", // Light red background
          color: "#d32f2f",          // Red text color
          border: "1px solid #f8d7da", // Light border
          padding: "20px",           // Inner spacing
          borderRadius: "8px",       // Rounded corners
          fontFamily: "Arial, sans-serif", // Clean font
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
          textAlign: "center",       // Center text alignment
          margin: "20px auto",       // Center the div
          maxWidth: "600px",         // Limit width
        }}
      >
        <h1
          style={{
            fontSize: "3rem",        // Large font size for header
            marginBottom: "10px",    // Space below header
            fontWeight: "bold",      // Bold font
          }}
        >
          Warning
        </h1>
        <p
          style={{
            fontSize: "1.5rem",      // Large font size for paragraph
            margin: "5px 0",         // Spacing around paragraph
            lineHeight: "1.6",       // Improve readability
          }}
        >
          This website has been suspended due to non-payment by Kioh Tours and Travel Agency to the website developer.
        </p>
        <p
          style={{
            fontSize: "1.5rem",      // Large font size for paragraph
            margin: "5px 0",         // Spacing around paragraph
            lineHeight: "1.6",       // Improve readability
          }}
        >
          Please contact the website administrator for further assistance.
        </p>
      </div>

      {/* <Navbar /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes> */}
      {/* <Footer /> */}
    </>
  );
};

export default App;
