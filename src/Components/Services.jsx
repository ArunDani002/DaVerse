import React from 'react';

const Services = () => {
  return (
    <div
      style={{
        backgroundColor: '#0d0d0d',
        minHeight: '100vh',
        padding: '60px 20px',
        fontFamily: 'Arial, sans-serif',
        color: '#e0e0e0',
      }}
    >
      {/* Header with Logo */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2721/2721299.png"
          alt="DaVerse Logo"
          style={{
            width: '90px',
            marginBottom: '15px',
            animation: 'bounce 2s infinite',
          }}
        />

        {/* <div style={{ textAlign: 'center', marginBottom: '50px' }}> */}
        {/* <p style={{ color: '#aaa', fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
          Passion, innovation, and playful creativity define us. Here’s why DaVerse is your fun & friendly digital partner.
        </p> */}
      {/* </div> */}
        {/* <h1
          style={{
            fontSize: '38px',
            color: '#00bcd4',
            letterSpacing: '2px',
          }}
        >
          Our Services
        </h1> */}

        <h1
          style={{
            fontSize: '46px',
            color: '#00bcd4',
            marginBottom: '10px',
            // textShadow: '0 0 20px #ffeb3b, 0 0 40px #ff5722',
            // animation: 'bounce 2s infinite',
          }}
        >
          Our Services
        </h1>
        <p
          style={{
            maxWidth: '750px',
            margin: '10px auto 0 auto',
            fontSize: '18px',
            color: '#aaa',
          }}
        >
          At <span style={{ color: '#00ff99', fontWeight: 'bold' }}>DAverse</span>, 
          we provide innovative solutions to help your business thrive in the digital age.
          Explore our main service areas below:
        </p>
      </div>

      {/* Floating Cards Section */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {/* Website Development Card */}
        <div
          style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '14px',
            padding: '25px',
            boxShadow: '0 6px 20px rgba(0, 188, 212, 0.3)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            animation: 'fadeInUp 1s ease forwards',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = 'translateY(-10px)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = 'translateY(0)')
          }
        >
          <h3 style={{ color: '#00ff99', fontSize: '22px', marginBottom: '15px' }}>
            Website Development
          </h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Custom Websites: Responsive, modern, and tailored to your brand.</li>
            <li>E-commerce Sites: Secure and scalable online platforms.</li>
            <li>Website Redesign: Fresh look with improved conversions.</li>
          </ul>
        </div>

        {/* Mobile App Development Card */}
        <div
          style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '14px',
            padding: '25px',
            boxShadow: '0 6px 20px rgba(0, 255, 153, 0.3)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            animation: 'fadeInUp 1.2s ease forwards',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = 'translateY(-10px)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = 'translateY(0)')
          }
        >
          <h3 style={{ color: '#00ff99', fontSize: '22px', marginBottom: '15px' }}>
            Mobile Application Development
          </h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Cross-Platform Apps: Smooth experience on iOS & Android.</li>
            <li>UX/UI Design: Intuitive, engaging, and modern designs.</li>
            <li>App Maintenance: Regular updates & performance tuning.</li>
          </ul>
        </div>

        {/* Additional Services Card */}
        <div
          style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '14px',
            padding: '25px',
            boxShadow: '0 6px 20px rgba(255, 255, 255, 0.2)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            animation: 'fadeInUp 1.4s ease forwards',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = 'translateY(-10px)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = 'translateY(0)')
          }
        >
          <h3 style={{ color: '#00ff99', fontSize: '22px', marginBottom: '15px' }}>
            Additional Services
          </h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>SEO Optimization: Improve visibility and drive traffic.</li>
            <li>Branding & Design: Logos, brand strategy, and assets.</li>
            <li>Digital Marketing: Campaigns tailored for growth.</li>
          </ul>
        </div>
      </div>

      {/* Footer Note */}
      <p
        style={{
          textAlign: 'center',
          marginTop: '60px',
          fontSize: '14px',
          color: '#666',
        }}
      >
        ✨ Powered by <span style={{ color: '#00ff99' }}>DaVerse</span> | 
        Building the future, one project at a time.
      </p>

      {/* Animations */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Services;
