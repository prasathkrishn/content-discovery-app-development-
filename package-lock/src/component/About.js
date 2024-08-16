import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import backgroundImage from '../assets/imagered.jpg';

const About = () => {
  return (
    <div className="Home" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className="about-container">
        <h1 className="about-title">ABOUT REWINDREELS</h1>
        <p className="about-description">
        Hollywood's golden age, which spans roughly from the 1920s to the 1960s, produced many iconic and influential films. Here’s a look at some of the best old movies in Hollywood, categorized by genre, including some background on their significance.
        </p>
        {/* <p className="about-description">
          Whether you're a fan of Marvel Cinematic Universe (MCU), DC Universe (DCU), or
          looking for the latest trending web series, DiscoverMoviz has got you covered. Create
          your personalized WatchList, explore our services, and embark on a cinematic journey
          like never before.
        </p>
        <p className="about-description">
          Join us in this adventure of cinematic exploration, and let DiscoverMoviz be your
          go-to platform for all things movies and entertainment.
        </p> */}

        {/* Add a button to navigate to the home page */}
        <Link to="/">
          <button className="home-button">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
