import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['/', 'services', 'about', 'contact'];
  const linkNames = ['Home', 'Services', 'About', 'Contact'];

  return (
    <div
      style={{
        backgroundColor: '#0a0a0a',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 4px 15px rgba(0, 188, 212, 0.4)',
        // fontFamily: '"Comic Sans MS", cursive, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '15px 40px',
        }}
      >
        {/* Brand */}
        <h2
          style={{
            color: '#00ff99',
            fontSize: '28px',
            letterSpacing: '2px',
            // textShadow: '0 0 5px #00ff99, 0 0 10px #00bcd4',
            cursor: 'pointer',
            transition: 'transform 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          DaVerse
        </h2>

        {/* Hamburger Button (controlled only by CSS media query) */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="hamburger"
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '25px',
            height: '20px',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              height: '3px',
              width: '100%',
              backgroundColor: '#00ff99',
              borderRadius: '2px',
              transition: 'all 0.3s',
              transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          ></span>
          <span
            style={{
              height: '3px',
              width: '100%',
              backgroundColor: '#00ff99',
              borderRadius: '2px',
              opacity: isOpen ? 0 : 1,
              transition: 'all 0.3s',
            }}
          ></span>
          <span
            style={{
              height: '3px',
              width: '100%',
              backgroundColor: '#00ff99',
              borderRadius: '2px',
              transition: 'all 0.3s',
              transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}
          ></span>
        </div>

        {/* Desktop Links */}
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            gap: '35px',
            margin: 0,
            padding: 0,
          }}
          className="nav-links"
        >
          {navLinks.map((path, idx) => (
            <li key={idx}>
              <Link
                to={path}
                style={{
                  textDecoration: 'none',
                  color: '#e0e0e0',
                  fontSize: '18px',
                  fontWeight: '500',
                  padding: '5px 0',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#00ff99';
                  e.target.style.textShadow = '0 0 10px #00ff99, 0 0 20px #00bcd4';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#e0e0e0';
                  e.target.style.textShadow = 'none';
                }}
              >
                {linkNames[idx]}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile / Tablet Menu */}
      {isOpen && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#0a0a0a',
            gap: '20px',
            padding: '20px 0',
          }}
        >
          {navLinks.map((path, idx) => (
            <Link
              key={idx}
              to={path}
              style={{
                textDecoration: 'none',
                color: '#00ff99',
                fontSize: '20px',
                fontWeight: 'bold',
                textShadow: '0 0 10px #00ff99, 0 0 20px #00bcd4',
              }}
              onClick={() => setIsOpen(false)}
            >
              {linkNames[idx]}
            </Link>
          ))}
        </div>
      )}

      {/* Responsive Styling */}
      <style>
        {`
          /* Default: hide hamburger */
          .hamburger {
            display: none;
          }

          /* Below 1024px: hide nav-links, show hamburger */
          @media (max-width: 1024px) {
            .nav-links {
              display: none !important;
            }
            .hamburger {
              display: flex !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default NavBar;
