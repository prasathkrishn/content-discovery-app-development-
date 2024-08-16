import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './navbar.css';

const logoUrl = 'https://appexchange.salesforce.com/partners/servlet/servlet.FileDownload?file=00P4V000011msraUAA';

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedInStatus === 'true');
  }, []);

  useEffect(() => {
    if (transcript) {
      setSearchInput(transcript);
    }
  }, [transcript]);

  const handleMicClick = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    const query = searchInput.trim();
    if (query) {
      navigate(`/searchresults?query=${encodeURIComponent(query)}`);
    } else {
      console.log('No search query provided');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/LoginForm');
  };

  return (
    <nav className="navbar" style={{ backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '5px' }}>
      <div className="title-container">
        <Link to="/" className="title-link">
          <img src={logoUrl} alt="Logo" className="logo" />
          REWINDREELS
        </Link>
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Subscription">Membership</Link>
        </li>
        <li>
          <Link to="/Collections">Products</Link>
        </li>
        <li>
          <Link to="/Service">Services</Link>
        </li>
        <li>
          <Link to="/Favorites">Favorites</Link>
        </li>
        <li className="search-container">
          <IoIosSearch className="search-icon" onClick={() => setShowSearch(!showSearch)} />
          {showSearch && (
            <div className="search-bar-container">
              <input
                type="text"
                placeholder="Search..."
                className="search-bar"
                value={searchInput}
                onChange={handleInputChange}
              />
              <FaMicrophone
                className="mic-icon"
                onClick={handleMicClick}
                style={{ color: listening ? 'red' : 'black' }}
              />
              <Button onClick={handleSearch}>Search</Button>
            </div>
          )}
        </li>
        <li>
          {isLoggedIn ? (
            <Button onClick={handleLogout} variant="outlined" sx={{ mx: 1.5, color: 'white', backgroundColor: 'red' }}>
              Logout
            </Button>
          ) : (
            <Button onClick={handleLogin} variant="outlined" sx={{ mx: 1.5, color: 'white', backgroundColor: 'red' }}>
              Login
            </Button>
          )}
        </li>
      </ul>
    </nav>
  );
}
