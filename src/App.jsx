// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Projects from './pages/projects.jsx';
import Contact from './pages/contact.jsx';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react'
import ErrorPage from './pages/error.jsx'
import * as React from 'react';

const App = () => {

  useEffect(() => {

    const handleContextMenu = e => e.preventDefault();
    const handleKeyDown = e => {
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        alert("View Page Source is disabled on this page.");
      }
    };
    // document.addEventListener('contextmenu' , handleContextMenu);
    window.addEventListener('keydown' , handleKeyDown);
    return () => {
      // document.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown' , handleKeyDown);
    };

  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} style={{backgroundColor: '#2e2e2eff'}} />
      </Routes>

      <Footer />
    </>
  )
}

export default App