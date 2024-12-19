import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to kioh   Tours and Travel</h1>

          <div className="about-content">
          <h2>About Us</h2>
          <p>
            We craft unforgettable safaris across Kenya,
             from the iconic Maasai Mara and Amboseli to the serene Lake Nakuru.
              We offer tailored packages and seamless <strong className='keywords'>bookings from Europe,</strong>
               with airport <strong className='keywords'> pickups from </strong>Nairobi airport  or Mombasa Airport.</p>
        </div>

          <Link to='/booking'>
          <button className="cta-btn">Book Your Safari</button>
          </Link>
          <Link to='/pricing'>
          <button className="cta-btn1">Pricing</button>
          </Link>
          <Link to='/destinations'>
          <button className="cta-btn2">Destinations</button>
          </Link>
          
        </div>
      </section>

     

      {/* Featured Destinations Section */}
<section className="destinations">
  <h2>Explore Kenya's Best Destinations</h2>
  <div className="destination-cards">
    {/* Destination 1 */}
    <div className="destination-card">
      <img src="/aberadre10.PNG" alt="Aberdare" />
      <h3>Aberdare</h3>
      <p>Discover lush forests, waterfalls, and abundant wildlife in Aberdare.</p>
    </div>

    {/* Destination 2 */}
    <div className="destination-card">
      <img src="/masai1.PNG" alt="Maasai Mara" />
      <h3>Maasai Mara</h3>
      <p>Home to the Great Migration and a rich wildlife experience.</p>
    </div>

    {/* Destination 3 */}
    <div className="destination-card">
      <img src="/amboseli1.PNG" alt="Amboseli National Park" />
      <h3>Amboseli National Park</h3>
      <p>Famous for stunning views of Mount Kilimanjaro and elephants.</p>
    </div>

    {/* Destination 4 */}
    <div className="destination-card">
      <img src="/mt kenya1.PNG" alt="Mount Kenya" />
      <h3>Mount Kenya</h3>
      <p>A scenic mountain destination offering climbing and adventure activities.</p>
    </div>

    {/* Destination 5 */}
    <div className="destination-card">
      <img src="/diani1.PNG" alt="Diani Beach" />
      <h3>Diani Beach</h3>
      <p>Relax on white sandy beaches along the Kenyan coast.</p>
    </div>

    {/* Destination 6 */}
    <div className="destination-card">
      <img src="/chale1.PNG" alt="Chale Highland" />
      <h3>Chale Highland</h3>
      <p>Experience serene landscapes and breathtaking views.</p>
    </div>

    {/* Destination 7 */}
    <div className="destination-card">
      <img src="/karura1.PNG" alt="Karura Forest" />
      <h3>Karura Forest</h3>
      <p>A tranquil escape for nature walks and picnics in Nairobi.</p>
    </div>

    {/* Destination 8 */}
    <div className="destination-card">
      <img src="/hellsgate1.PNG" alt="Hell's Gate National Park" />
      <h3>Hell's Gate National Park</h3>
      <p>A unique park with dramatic cliffs and geothermal springs.</p>
    </div>

    {/* Destination 9 */}
    <div className="destination-card">
      <img src="/nakuru1.PNG" alt="Lake Nakuru" />
      <h3>Lake Nakuru</h3>
      <p>Known for flamingos and rhino sanctuaries.</p>
    </div>

    {/* Destination 10 */}
    <div className="destination-card">
      <img src="/rift valley1.PNG" alt="Great Rift Valley" />
      <h3>Great Rift Valley</h3>
      <p>Explore breathtaking landscapes and geological wonders.</p>
    </div>

    {/* Destination 11 */}
    <div className="destination-card">
      <img src="/samburu1.PNG" alt="Samburu National Park" />
      <h3>Samburu National Park</h3>
      <p>Discover unique wildlife and a peaceful safari experience.</p>
    </div>

    {/* Destination 12 */}
    <div className="destination-card">
      <img src="/tsavo1.PNG" alt="Tsavo National Park" />
      <h3>Tsavo National Park</h3>
      <p>Kenya's largest national park with diverse landscapes and wildlife.</p>
    </div>

    {/* Destination 13 */}
    <div className="destination-card">
      <img src="/manda bay1.PNG" alt="Mandabay Beach" />
      <h3>Manda bay Beach</h3>
      <p>A perfect spot for relaxation and water activities.</p>
    </div>

    {/* Destination 14 */}
    <div className="destination-card">
      <img src="/watamu1.PNG" alt="Watamu" />
      <h3>Watamu</h3>
      <p>Explore pristine beaches and vibrant marine life.</p>
    </div>

    {/* Destination 15 */}
    <div className="destination-card">
      <img src="/fall1.PNG" alt="Thika Falls" />
      <h3>Thika Falls</h3>
      <p>A picturesque waterfall surrounded by lush greenery.</p>
    </div>

    {/* Destination 16 */}
    <div className="destination-card">
      <img src="/chale1.PNG" alt="Chale Highland" />
      <h3>Chale Highland</h3>
      <p>Immerse yourself in Kenya's rolling highlands and scenic beauty.</p>
    </div>
  </div>
</section>


      {/* Why Choose Us Section */}
      <section className="why-us">
        <h2>Why Choose Wakioh Travel?</h2>
        <ul>
          <li>Expertly designed safari tours to Kenya’s top national parks.</li>
          <li>Easy online booking from Europe.</li>
          <li>Seamless pickup from Nairobi JKIA or Mombasa Airport.</li>
          <li>Experienced and knowledgeable guides to enhance your experience.</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"kioh Travel made our Kenyan safari unforgettable. The experience was seamless, from booking in Europe to our arrival and pickup at the airport."</p>
            <h4>William johnson</h4>
          </div>
          <div className="testimonial-card">
            <p>"Our family loved exploring Maasai Mara and Tsavo with kioh Travel and tours. The guides were incredible and the safari was an experience of a lifetime!"</p>
            <h4>Cate Smith</h4>
          </div>
          <div className="testimonial-card">
            <p>"I absolutely loved how effortless it was to book a tour, and the freedom to handpick the destinations I wanted to explore in Kenya made the experience even more special"</p>
            <h4>Brian Homer</h4>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Ready to Explore Kenya?</h2>
        <Link to='/booking'>
        <button className="cta-btn">Book Your Safari Now</button>
        </Link>
       
      </section>
    </div>
  );
};

export default Home;
