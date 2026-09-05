import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaMobileAlt, 
  FaPaintBrush, 
  FaRocket, 
  FaShieldAlt,
  FaUsers,
  FaStar,
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaDatabase,
  FaCloud,
  FaAws,
  FaDocker
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiTypescript, 
  SiNextdotjs, 
  SiVuedotjs, 
  SiAngular,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiGo,
  SiRust,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiDjango,
  SiLaravel,
  SiSpringboot,
  SiTensorflow
} from 'react-icons/si';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const techStacks = [
    // Frontend
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
    { name: 'Vue.js', icon: <SiVuedotjs />, color: '#4FC08D' },
    { name: 'Angular', icon: <SiAngular />, color: '#DD0031' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    // Mobile
    { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
    { name: 'Swift', icon: <SiSwift />, color: '#FA7343' },
    { name: 'Kotlin', icon: <SiKotlin />, color: '#7F52FF' },
    // Backend
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'Java', icon: <FaJava />, color: '#007396' },
    { name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
    { name: 'Go', icon: <SiGo />, color: '#00ADD8' },
    { name: 'Rust', icon: <SiRust />, color: '#DEA584' },
    // Frameworks
    { name: 'Django', icon: <SiDjango />, color: '#092E20' },
    { name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20' },
    { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6DB33F' },
    // Databases
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
    // Cloud & DevOps
    { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
    { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
    // AI/ML
    { name: 'TensorFlow', icon: <SiTensorflow />, color: '#FF6F00' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#ffffff',
      padding: '0 20px',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-20%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0,255,153,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 20s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-30%',
        left: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0,188,212,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 25s ease-in-out infinite reverse'
      }} />

      {/* Hero Section */}
      <motion.div 
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 0 60px 0',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          minHeight: '80vh'
        }}>
          {/* Left Content */}
          <motion.div variants={fadeInUp}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-block',
                background: 'linear-gradient(45deg, #00ff99, #00bcd4)',
                padding: '8px 20px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#0a0a0a',
                marginBottom: '20px',
                letterSpacing: '1px'
              }}
            >
              🚀 DIGITAL INNOVATION
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              style={{
                fontSize: '64px',
                fontWeight: '700',
                lineHeight: '1.1',
                marginBottom: '20px',
                background: 'linear-gradient(135deg, #ffffff 0%, #00ff99 50%, #00bcd4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Your Vision, <br />Our <span style={{ color: '#00ff99' }}>Expertise</span>
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              style={{
                fontSize: '28px',
                color: '#00ff99',
                marginBottom: '20px',
                fontWeight: '400'
              }}
            >
              Crafting Digital Solutions That Matter
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              style={{
                fontSize: '18px',
                color: '#b0b0b0',
                lineHeight: '1.8',
                maxWidth: '550px',
                marginBottom: '40px'
              }}
            >
              At <span style={{ 
                color: '#00ff99', 
                fontWeight: '700',
                textShadow: '0 0 20px rgba(0,255,153,0.3)'
              }}>DAverse</span>, we blend creativity with cutting-edge technology to build 
              exceptional websites and mobile apps that drive business growth in the digital era.
              <br /><br />
              <span style={{ color: '#838383', fontSize: '16px' }}>
                💻 From MERN to MEAN, Python to Java, Flutter to Swift — we speak all tech languages.
              </span>
            </motion.p>

            <motion.div
              variants={fadeInUp}
              style={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap'
              }}
            >
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'linear-gradient(45deg, #00ff99, #00bcd4)',
                  color: '#0a0a0a',
                  fontSize: '18px',
                  fontWeight: '600',
                  padding: '16px 35px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 30px rgba(0,255,153,0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px) scale(1.02)';
                  e.target.style.boxShadow = '0 0 50px rgba(0,255,153,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 0 30px rgba(0,255,153,0.3)';
                }}
              >
                Let's Get Started <FaArrowRight />
              </Link>

              <Link
                to="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#ffffff',
                  fontSize: '18px',
                  fontWeight: '500',
                  padding: '16px 35px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  border: '2px solid rgba(255,255,255,0.2)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#00ff99';
                  e.target.style.background = 'rgba(0,255,153,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                  e.target.style.background = 'transparent';
                }}
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Trust Indicators - Realistic Numbers */}
            <motion.div
              variants={fadeInUp}
              style={{
                marginTop: '50px',
                display: 'flex',
                gap: '40px',
                alignItems: 'center',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaUsers size={24} color="#00ff99" />
                <div>
                  <div style={{ fontWeight: '600', color: '#ffffff' }}>3</div>
                  <div style={{ fontSize: '14px', color: '#b0b0b0' }}>Happy Clients</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaStar size={24} color="#ffeb3b" />
                <div>
                  <div style={{ fontWeight: '600', color: '#ffffff' }}>5/5</div>
                  <div style={{ fontSize: '14px', color: '#b0b0b0' }}>Average Rating</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaShieldAlt size={24} color="#00bcd4" />
                <div>
                  <div style={{ fontWeight: '600', color: '#ffffff' }}>100%</div>
                  <div style={{ fontSize: '14px', color: '#b0b0b0' }}>Satisfaction</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaRocket size={24} color="#ffeb3b" />
                <div>
                  <div style={{ fontWeight: '600', color: '#ffffff' }}>5+</div>
                  <div style={{ fontSize: '14px', color: '#b0b0b0' }}>Projects Delivered</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            <div style={{
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
              minHeight: '400px',
              background: 'linear-gradient(135deg, rgba(0,255,153,0.1), rgba(0,188,212,0.1))',
              borderRadius: '30px',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(0,255,153,0.2), transparent)',
                borderRadius: '50%'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-50px',
                left: '-50px',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(0,188,212,0.2), transparent)',
                borderRadius: '50%'
              }} />
              
              <div style={{
                fontSize: '60px',
                marginBottom: '20px',
                position: 'relative',
                zIndex: 1
              }}>
                🌐
              </div>
              <h3 style={{
                fontSize: '24px',
                color: '#ffffff',
                marginBottom: '10px',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
              }}>
                Full-Stack Development
              </h3>
              <p style={{
                color: '#b0b0b0',
                textAlign: 'center',
                fontSize: '16px',
                position: 'relative',
                zIndex: 1,
                maxWidth: '350px'
              }}>
                From frontend to backend, we master every technology stack
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginTop: '25px',
                position: 'relative',
                zIndex: 1,
                justifyContent: 'center'
              }}>
                {['React', 'Angular', 'Vue', 'Flutter', 'Swift', 'Python', 'Java', 'Go'].map((tech, i) => (
                  <span key={i} style={{
                    padding: '6px 16px',
                    background: 'rgba(0, 255, 153, 0.1)',
                    borderRadius: '20px',
                    fontSize: '13px',
                    color: '#00ff99',
                    border: '1px solid rgba(0, 255, 153, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(0, 255, 153, 0.2)';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(0, 255, 153, 0.1)';
                    e.target.style.transform = 'scale(1)';
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 0',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            marginBottom: '15px'
          }}>
            What We <span style={{ color: '#00ff99' }}>Offer</span>
          </h2>
          <p style={{
            color: '#b0b0b0',
            fontSize: '18px',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {[
            {
              icon: <FaCode size={40} />,
              title: 'Custom Websites',
              desc: 'Responsive, performant, and visually stunning websites built with your preferred technology stack.',
              color: '#ff5722'
            },
            {
              icon: <FaMobileAlt size={40} />,
              title: 'Mobile Applications',
              desc: 'Native and cross-platform mobile apps with exceptional performance and user experiences.',
              color: '#00ff99'
            },
            {
              icon: <FaPaintBrush size={40} />,
              title: 'Branding & Marketing',
              desc: 'Strategic branding and digital marketing that helps you stand out and connect with your audience.',
              color: '#ffeb3b'
            }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + (idx * 0.1) }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                borderRadius: '20px',
                padding: '35px',
                border: '1px solid rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = service.color;
                e.currentTarget.style.boxShadow = `0 0 30px ${service.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                color: service.color,
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                {service.icon}
              </div>
              <h3 style={{
                fontSize: '24px',
                color: '#ffffff',
                marginBottom: '15px'
              }}>
                {service.title}
              </h3>
              <p style={{
                color: '#b0b0b0',
                fontSize: '16px',
                lineHeight: '1.6'
              }}>
                {service.desc}
              </p>
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                height: '3px',
                background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
                transform: 'scaleX(0)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scaleX(1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scaleX(0)'}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '60px 0 80px 0',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '15px'
          }}>
            Tech Stacks We <span style={{ color: '#00ff99' }}>Master</span>
          </h2>
          <p style={{
            color: '#b0b0b0',
            fontSize: '18px',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            From frontend to backend, mobile to cloud — we're proficient in every technology
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          justifyContent: 'center'
        }}>
          {techStacks.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.02 }}
              whileHover={{ 
                y: -5,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = tech.color;
                e.currentTarget.style.background = `rgba(255,255,255,0.05)`;
                e.currentTarget.style.boxShadow = `0 0 20px ${tech.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{ 
                color: tech.color, 
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center'
              }}>
                {tech.icon}
              </span>
              <span style={{ 
                color: '#ffffff', 
                fontSize: '14px',
                fontWeight: '500'
              }}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          padding: '30px',
          background: 'linear-gradient(135deg, rgba(0,255,153,0.05), rgba(0,188,212,0.05))',
          borderRadius: '15px',
          border: '1px solid rgba(0,255,153,0.1)'
        }}>
          <p style={{
            color: '#b0b0b0',
            fontSize: '16px',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            💡 <span style={{ color: '#00ff99', fontWeight: '600' }}>Not limited to these</span> — we adapt to any technology that best serves your project needs.
          </p>
        </div>
      </motion.div>

      {/* Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(10px, -20px) rotate(5deg); }
            66% { transform: translate(-10px, 10px) rotate(-5deg); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;