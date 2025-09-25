import React from 'react';

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: '#454545ff',
        color: '#e0e0e0',
        padding: '40px 20px',
        textAlign: 'center',
        // fontFamily: 'Arial, sans-serif',
        boxShadow: '0 -4px 20px rgba(0, 188, 212, 0.4)',
      }}
    >
      {/* Brand Name */}
      <h2
        style={{
          marginBottom: '20px',
          color: '#00ff99',
          fontSize: '28px',
          // textShadow: '0 0 1px #00ff99, 0 0 5px #00bcd4',
          // animation: 'glow 2s infinite alternate',
        }}
      >
        DAverse
      </h2>
      

      {/* Contact Section */}
      <div style={{ marginBottom: '25px', fontSize: '16px', lineHeight: '1.8' }}>
        <p><strong>Address:</strong> Tiruvannamalai, Tamilnadu, India</p>
        <p><strong>Phone:</strong> +91 96006 98331</p>
        <p><strong>Email:</strong> da.tech002@gmail.com</p>
      </div>

      {/* Social Links */}
      <div style={{ fontSize: '16px', marginBottom: '25px' }}>
        <span>Follow us on: </span>
        {['Facebook', 'Twitter', 'Instagram'].map((platform, idx) => (
          <a
            key={idx}
            href={`https://${platform.toLowerCase()}.com`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#00ff99',
              textDecoration: 'none',
              margin: '0 10px',
              transition: 'all 0.3s',
              textShadow: '0 0 5px #00ff99',
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#00bcd4';
              e.target.style.textShadow = '0 0 15px #00bcd4, 0 0 25px #00ff99';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#00ff99';
              e.target.style.textShadow = '0 0 5px #00ff99';
              e.target.style.transform = 'scale(1)';
            }}
          >
            {platform}
          </a>
        ))}
      </div>

      {/* Footer Bottom */}
      <div style={{ fontSize: '14px', color: '#838383ff' }}>
        <p>© 2025 DAverse. All Rights Reserved.</p>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes glow {
            0% { text-shadow: 0 0 10px #00ff99, 0 0 20px #00bcd4; }
            100% { text-shadow: 0 0 25px #00bcd4, 0 0 40px #00ff99; }
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
