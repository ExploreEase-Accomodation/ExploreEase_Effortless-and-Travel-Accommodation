// About.js

import React from 'react';
import './About.css';
import image1 from '../Media/image1.jpg'
import image2 from '../Media/image2.jpg'
import image3 from '../Media/image3.jpg'

const About = () => {
  return (
    <div className="about">
      <div className="content">
        <div className="text">
          <h2>About ExploreEase</h2>
          <p>
            Welcome to ExploreEase, your go-to platform for seamless travel and accommodation experiences. 
            Whether you're a globetrotter or a business traveler, we've got you covered with our extensive 
            network of partners and user-friendly features.
          </p>
          <p>
            Our mission is to make your travel planning and accommodation booking process hassle-free. 
            With ExploreEase, you can discover amazing destinations, find the perfect place to stay, and 
            create unforgettable memories.
          </p>
          <p>
            ExploreEase is built with love and dedication by a team of travel enthusiasts who understand 
            the importance of a smooth and enjoyable journey. We are committed to providing you with the 
            best travel and accommodation solutions, ensuring your adventures are stress-free and enjoyable.
          </p>
          <p>
            Thank you for choosing ExploreEase. Let's embark on a journey of discovery and comfort together!
          </p>

        <p>
            Welcome to ExploreEase, your go-to platform for seamless travel and accommodation experiences. 
            Whether you're a globetrotter or a business traveler, we've got you covered with our extensive 
            network of partners and user-friendly features.
          </p>
          <p>
            Our mission is to make your travel planning and accommodation booking process hassle-free. 
            With ExploreEase, you can discover amazing destinations, find the perfect place to stay, and 
            create unforgettable memories.
          </p>
          <p>
            ExploreEase is built with love and dedication by a team of travel enthusiasts who understand 
            the importance of a smooth and enjoyable journey. We are committed to providing you with the 
            best travel and accommodation solutions, ensuring your adventures are stress-free and enjoyable.
          </p>
          <p>
            Thank you for choosing ExploreEase. Let's embark on a journey of discovery and comfort together!
          </p>



        </div>
        <span className='border'></span>
        <div className="image">
          <img
            src={image1}  // Replace with your actual image URL
            alt="ExploreEase Logo"
          />
           <img
            src={image3}  // Replace with your actual image URL
            alt="ExploreEase Logo"
          />
           <img
            src={image2}  // Replace with your actual image URL
            alt="ExploreEase Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
