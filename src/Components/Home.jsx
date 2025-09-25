import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/icon.png'; // optional, you can use as mascot/logo

const Home = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#ffffffff',
        color: '#e0e0e0',
        // fontFamily: '"Comic Sans MS", cursive, sans-serif',
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '50px', marginTop:'50px' }}>
        <h1
          style={{
            fontSize: '60px',
            marginBottom: '10px',
            color: '#000000ff',
            // textShadow: '0 0 20px #ffeb3b, 0 0 40px #ff5722',
            // animation: 'bounce 5s infinite',
          }}
        >
          Your Vision, Our Expertise
        </h1>
        <h2
          style={{
            fontSize: '36px',
            color: '#007043ff',
            // textShadow: '0 0 1px #00ff99, 0 0 2px #00bcd4',
          }}
        >
          Crafting Digital Solutions
        </h2>
        <p
          style={{
            fontSize: '20px',
            color: '#676767ff',
            maxWidth: '700px',
            margin: '20px auto 40px auto',
          }}
        >
          At <span style={{ color: '#00c073ff', fontWeight: 'bold' }}>DAverse</span>, we combine creativity with cutting-edge technology to deliver websites and mobile apps
          that help businesses thrive in the digital world. Whether you want a stunning website, a mobile app, or both, we bring your ideas to life.
        </p>

        {/* Call-to-Action Button */}
        <Link
          to="contact"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(45deg, #00ff99, #00bcd4)',
            color: '#0d0d0d',
            fontSize: '22px',
            fontWeight: 'bold',
            padding: '15px 40px',
            borderRadius: '40px',
            textDecoration: 'none',
            // boxShadow: '0 0 2px #00ff99, 0 0 5px #00bcd4',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 0 1px #00ff99, 0 0 10px #00bcd4';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 0 2px #00ff99, 0 0 12px #00bcd4';
          }}
        >
          Let’s Get Started
        </Link>
      </div>

      {/* Features / Highlights Section */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          maxWidth: '1000px',
          width: '100%',
          marginTop: '50px',
        }}
      >
        {[
          {
            title: 'Custom Websites',
            desc: 'Responsive and vibrant websites tailored to your brand and goals.',
            color: '#ff5722',
          },
          {
            title: 'Mobile Applications',
            desc: 'Cross-platform apps with engaging design and smooth performance.',
            color: '#00ff99',
          },
          {
            title: 'Branding & Marketing',
            desc: 'Build your identity and reach your audience with style and impact.',
            color: '#ffeb3b',
          },
        ].map((feature, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '25px',
              padding: '25px',
              boxShadow: `0 5px 15px ${feature.color}80`,
              transition: 'transform 0.3s',
              cursor: 'pointer',
              textAlign: 'center',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <h3 style={{ color: feature.color, fontSize: '24px', marginBottom: '15px' }}>{feature.title}</h3>
            <p style={{ color: '#ccc', fontSize: '16px' }}>{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes bounce {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
