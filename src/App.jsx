import React from 'react'
import Home from './Components/Home'
import Services from './Components/Services'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"services"} element={<Services />} />
                    <Route path={"about"} element={<About />} />
                    <Route path={"contact"} element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App