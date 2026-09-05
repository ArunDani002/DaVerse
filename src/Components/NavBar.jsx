import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/services', name: 'Services' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(0, 255, 153, 0.1)' : 'none',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '15px 30px'
        }}>
          {/* Brand */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{
                fontSize: '28px',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #00ff99, #00bcd4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '1px'
              }}>
                DAverse
              </span>
              <span style={{
                fontSize: '10px',
                color: '#00ff99',
                background: 'rgba(0, 255, 153, 0.1)',
                padding: '2px 10px',
                borderRadius: '10px',
                border: '1px solid rgba(0, 255, 153, 0.2)',
                WebkitTextFillColor: '#00ff99'
              }}>
                PRO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '35px',
            margin: 0,
            padding: 0,
            alignItems: 'center'
          }} className="nav-links">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{
                      textDecoration: 'none',
                      color: isActive ? '#00ff99' : '#b0b0b0',
                      fontSize: '16px',
                      fontWeight: isActive ? '600' : '400',
                      padding: '8px 0',
                      position: 'relative',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#00ff99';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.target.style.color = '#b0b0b0';
                    }}
                  >
                    {link.name}
                    {isActive && (
                      <span style={{
                        position: 'absolute',
                        bottom: '-5px',
                        left: '0',
                        right: '0',
                        height: '2px',
                        background: 'linear-gradient(90deg, #00ff99, #00bcd4)',
                        borderRadius: '2px'
                      }} />
                    )}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                to="/contact"
                style={{
                  textDecoration: 'none',
                  background: 'linear-gradient(45deg, #00ff99, #00bcd4)',
                  color: '#0a0a0a',
                  padding: '10px 25px',
                  borderRadius: '25px',
                  fontWeight: '600',
                  fontSize: '14px',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 0 30px rgba(0, 255, 153, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Hire Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#00ff99',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '5px'
            }}
            className="hamburger-btn"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div style={{
          display: isOpen ? 'flex' : 'none',
          flexDirection: 'column',
          background: 'rgba(10, 10, 10, 0.98)',
          backdropFilter: 'blur(20px)',
          padding: '20px 30px',
          gap: '15px',
          borderTop: '1px solid rgba(0, 255, 153, 0.1)'
        }}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  textDecoration: 'none',
                  color: isActive ? '#00ff99' : '#b0b0b0',
                  fontSize: '18px',
                  fontWeight: isActive ? '600' : '400',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            to="/contact"
            style={{
              textDecoration: 'none',
              background: 'linear-gradient(45deg, #00ff99, #00bcd4)',
              color: '#0a0a0a',
              padding: '12px 30px',
              borderRadius: '25px',
              fontWeight: '600',
              fontSize: '16px',
              textAlign: 'center',
              marginTop: '10px'
            }}
            onClick={() => setIsOpen(false)}
          >
            Hire Us
          </Link>
        </div>
      </nav>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 1024px) {
            .nav-links {
              display: none !important;
            }
            .hamburger-btn {
              display: block !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default NavBar;