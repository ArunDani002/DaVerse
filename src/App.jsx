import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop'; // Import the ScrollToTop component

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop /> {/* Add this component here */}
            {/* gittest */}
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;