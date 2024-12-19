import React, { useState } from 'react';
import '../styles/Destinations.css';

// Destination data with images
const destinationsData = [
  {
    name: 'Aberdare',
    description: 'Discover lush forests, mist-covered hills, and stunning waterfalls in the serene Aberdare Mountains.',
    images: ['/ABERDARE1.PNG', '/aberdare2.PNG', '/aberdare3.PNG', '/aberdare4.PNG', '/aberdare5.PNG'],
  },
  {
    name: 'Maasai Mara',
    description: 'Experience thrilling safaris and witness the awe-inspiring Great Migration in Maasai Mara.',
    images: ['/maasai1.PNG', '/masai2.PNG', '/masai3.PNG', '/masai4.PNG', '/masai5.PNG'],
  },
  {
    name: 'Amboseli',
    description: 'Enjoy panoramic views of Mount Kilimanjaro and spot iconic wildlife in Amboseli National Park.',
    images: ['/amboseli1.PNG', '/amboseli2.PNG', '/amboseli3.PNG', '/amboseli4.PNG', '/amboseli5.PNG'],
  },
  {
    name: 'Mt Kenya',
    description: 'Climb Africa’s second-highest peak and explore breathtaking alpine scenery on Mount Kenya.',
    images: ['/mt kenya1.PNG', '/mt kenya2.PNG', '/mt kenya3.PNG', '/mt kenya4.PNG', '/mt kenya5.PNG'],
  },
  {
    name: 'Diani Beach',
    description: 'Relax on pristine white sand beaches and enjoy water sports in Diani, Kenya’s coastal gem.',
    images: ['/diani1.PNG', '/diani2.PNG', '/diani3.PNG', '/diani7.PNG', '/diani5.PNG'],
  },
  {
    name: 'Hells Gate',
    description: 'Hike through dramatic gorges and explore geothermal wonders at Hell’s Gate National Park.',
    images: ['/hellsgate1.PNG', '/hellsgate2.PNG', '/hellsgate3.PNG', '/hellsgate4.PNG', '/hellsgate5.PNG'],
  },
  {
    name: 'Karura Forest',
    description: 'Escape the city and enjoy serene trails, waterfalls, and caves in Karura Forest.',
    images: ['/karura1.PNG', '/karura2.PNG', '/karura3.PNG', '/karura4.PNG', '/karura5.PNG'],
  },
  {
    name: 'Manda Bay',
    description: 'Savor tranquility and stunning sunsets at the secluded paradise of Manda Bay.',
    images: ['/manda bay1.PNG', '/manda bay2.PNG', '/manda bay3.PNG', '/manda bay4.PNG', '/manda bay5.PNG'],
  },
  {
    name: 'Lake Nakuru',
    description: 'Admire pink flamingos and discover diverse wildlife around the picturesque Lake Nakuru.',
    images: ['/nakuru1.PNG', '/nakuru2.PNG', '/nakuru3.PNG', '/nakuru4.PNG', '/nakuru5.PNG'],
  },
  {
    name: 'Rift Valley',
    description: 'Marvel at dramatic escarpments, lakes, and unique landscapes in Kenya’s Rift Valley.',
    images: ['/rift valley1.PNG', '/rift valley2.PNG', '/rift valley3.PNG', '/rift valley4.PNG', '/rift valley5.PNG'],
  },
  {
    name: 'Samburu',
    description: 'Explore the arid beauty of Samburu and spot rare wildlife like Grevy’s zebras and gerenuks.',
    images: ['/samburu1.PNG', '/samburu2.PNG', '/samburu3.PNG', '/samburu4.PNG', '/samburu5.PNG'],
  },
  {
    name: 'Tsavo',
    description: 'Discover vast wilderness, roaring waterfalls, and herds of elephants in Tsavo National Park.',
    images: ['/tsavo1.PNG', '/tsavo2.PNG', '/tsavo3.PNG', '/tsavo4.PNG', '/tsavo5.PNG'],
  },
  {
    name: 'Watamu Beach',
    description: 'Dive into crystal-clear waters and explore vibrant coral reefs at Watamu Beach.',
    images: ['/watamu1.PNG', '/watamu2.PNG', '/watamu3.PNG', '/watamu4.PNG', '/watamu5.PNG'],
  },
  {
    name: 'Chale Beach',
    description: 'Unwind on Chale Beach, an island retreat surrounded by pristine waters and lush mangroves.',
    images: ['/chale1.PNG', '/chale2.PNG', '/chale3.PNG', '/chale4.PNG', '/chale5.PNG'],
  },
];

const Destinations = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="destinations-container">
      <h1>Places to Visit in Kenya</h1>
      {destinationsData.map((destination, index) => (
        <div key={index} className="destination">
          <h2>{destination.name}</h2>
          <p>{destination.description}</p>
          <div className="destination-images">
            {destination.images.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={`${destination.name} ${idx + 1}`}
                className="destination-image"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
      ))}

      {selectedImage && (
        <div className="modal">
          <div className="modal-content">
            <img src={selectedImage} alt="Selected" className="modal-image" />
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Destinations;
