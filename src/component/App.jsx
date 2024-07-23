import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Aboutus from './Aboutus';
import Contactus from './ContactUs';
import Home from './Home';
import History from './History';
import '../index.css';
import './app.css';

const usePageTransitions = () => {
  const [animationClass, setAnimationClass] = useState('fade-in');
  const location = useLocation();

  useEffect(() => {
    setAnimationClass('slide-in');
    const timer = setTimeout(() => {
      setAnimationClass('slide-in');
    }, 100); // Match this timeout to your animation duration
    return () => clearTimeout(timer);
  }, [location]);

  return animationClass;
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', storedTheme);
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const animationClass = usePageTransitions();

  return (
    <div>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<Home className={animationClass} />} />
        <Route path="/Home" element={<Home className={animationClass} />} />
        <Route path="/AboutUs" element={<Aboutus className={animationClass} />} />
        <Route path="/AboutUs" element={<Aboutus className={animationClass} />} />
        <Route path="/AboutUs/History" element={<History className={animationClass} />} />
        <Route path="/ContactUs" element={<Contactus className={animationClass} />} />
      </Routes>
    </div>
  );
}

export default App;
