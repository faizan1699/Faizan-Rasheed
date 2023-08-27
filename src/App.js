import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './NavItems/Home';
import Contact from './NavItems/Contact';
import Navbar from './NavItems/Navbar';
import About from './NavItems/About';
import preloader from './preLoader.gif';
import Services from './NavItems/Services';
import Footer from './NavItems/Footer';
import './App.css';
import './NavItems/css/Navbar.css';
import './NavItems/css/Home.css';
import './NavItems/css/About.css';
import './NavItems/css/Contact.css';
import './NavItems/css/Contact.css';
import './NavItems/css/Footer.css';


function App() {
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState('light');

  const togglemode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = 'black';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = '#fff';
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    const disableRightClick = (event) => {
      event.preventDefault();
      alert('Right click Disabled  او پائی تینوں پتا نئییں ساڈا   ')
    };
    document.addEventListener('contextmenu', disableRightClick);

    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      
    };
  }, []);

  // login form
  const sendMessage = () => {
    alert('Message Sent');
  }

  return (
    <>
      {loading ? (
        <div className="container d-flex align-items-center justify-content-center preloader-container">
          <img src={preloader} alt="Preloader is not loaded properly" />
        </div>
      ) : (
        <>
          <Navbar navbrand="Faizan Rasheed" mode={mode} togglemode={togglemode} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Contact" element={<Contact sendMessage={sendMessage}/>} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
