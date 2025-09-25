import React from 'react';

const About = () => {
  const skills = [
    { name: 'Web Development', level: 90, color: '#00bcd4' },
    { name: 'Mobile App Development', level: 85, color: '#00ff99' },
    { name: 'UI/UX Design', level: 80, color: '#ff9800' },
    { name: 'SEO & Digital Marketing', level: 75, color: '#e91e63' },
  ];

  return (
    <div
      style={{
        backgroundColor: '#0d0d0d',
        color: '#e0e0e0',
        // fontFamily: '"Comic Sans MS", cursive, sans-serif',
        padding: '60px 20px',
        lineHeight: '1.8',
        minHeight: '100vh',
      }}
    >
      {/* About Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1
          style={{
            fontSize: '46px',
            color: '#ffeb3b',
            marginBottom: '10px',
            // textShadow: '0 0 20px #ffeb3b, 0 0 40px #ff5722',
            // animation: 'bounce 2s infinite',
          }}
        >
          About DAverse
        </h1>
        <p style={{ color: '#aaa', fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
          Passion, innovation, and playful creativity define us. Here’s why DAverse is your fun & friendly digital partner.
        </p>
      </div>

      {/* About Card */}
      <div
        style={{
          backgroundColor: '#1c1c1c',
          borderRadius: '30px',
          padding: '35px',
          maxWidth: '900px',
          margin: '0 auto 50px auto',
          boxShadow: '0 0 35px rgba(255, 235, 59, 0.5)',
          transform: 'rotate(-1deg)',
        }}
      >
        <h2 style={{ color: '#00ff99', marginBottom: '15px' }}>Who We Are</h2>
        <p>
          DAverse is a startup with a love for technology and a playful approach to digital solutions. We craft websites and mobile apps that are functional, friendly, and fun to use!
        </p>

        <h2 style={{ color: '#00ff99', marginTop: '25px', marginBottom: '15px' }}>Our Mission</h2>
        <p>
          To help businesses shine online with creative, cartoonish, and customized solutions. Direct collaboration with clients ensures their ideas come alive in a fun and innovative way.
        </p>

        <h2 style={{ color: '#00ff99', marginTop: '25px', marginBottom: '15px' }}>Why Choose Us</h2>
        <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
          <li>Direct Collaboration: Work straight with the founder in a friendly way.</li>
          <li>Affordable & Fun: Quality solutions without boring formality.</li>
          <li>Tech-Savvy Creativity: We mix tech expertise with playful design.</li>
          <li>Customer Focused: We make your ideas come alive in a joyful way.</li>
        </ul>
      </div>

      {/* Skills Section */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ color: '#ffeb3b', marginBottom: '30px', textShadow: '0 0 15px #ffeb3b' }}>Our Skills</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '25px',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {skills.map((skill, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#2c2c2c',
                borderRadius: '25px',
                padding: '25px',
                boxShadow: `0 10px 25px ${skill.color}60`,
                transition: 'transform 0.3s',
                transform: 'rotate(-2deg)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px) rotate(0deg)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-2deg)'}
            >
              <h3 style={{ color: skill.color, marginBottom: '15px' }}>{skill.name}</h3>
              <div style={{ backgroundColor: '#444', borderRadius: '12px', height: '16px', overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color,
                    height: '100%',
                    borderRadius: '12px',
                    transition: 'width 1s',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <p style={{ textAlign: 'center', fontSize: '16px', color: '#ffeb3b', textShadow: '0 0 10px #ffeb3b' }}>
        ✨ Powered by <span style={{ color: '#00ff99' }}>DAverse</span> | Making the digital world fun & colorful!
      </p>

      {/* Animations */}
      <style>
        {`
          @keyframes bounce {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </div>
  );
};

export default About;
