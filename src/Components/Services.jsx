import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaMobileAlt, 
  FaPaintBrush, 
  FaShoppingCart, 
  FaSearch, 
  FaBullhorn,
  FaPalette,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaStar
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Website Development',
      description: 'Custom, responsive websites built with modern technologies that deliver exceptional user experiences.',
      features: [
        'Custom Website Design & Development',
        'E-commerce Solutions (WooCommerce, Shopify)',
        'Website Redesign & Optimization',
        'Content Management Systems',
        'Performance Optimization'
      ],
      color: '#00bcd4',
      gradient: 'linear-gradient(135deg, #00bcd4, #0097a7)'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Applications',
      description: 'Cross-platform mobile apps with native performance, engaging UI, and seamless user experiences.',
      features: [
        'iOS & Android App Development',
        'Cross-Platform (React Native, Flutter)',
        'UI/UX Design for Mobile',
        'App Store Optimization',
        'App Maintenance & Support'
      ],
      color: '#00ff99',
      gradient: 'linear-gradient(135deg, #00ff99, #00bcd4)'
    },
    {
      icon: <FaPaintBrush />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that captivate users and drive engagement for your digital products.',
      features: [
        'User Interface Design',
        'User Experience Strategy',
        'Wireframing & Prototyping',
        'Design Systems & Guidelines',
        'User Testing & Research'
      ],
      color: '#ff9800',
      gradient: 'linear-gradient(135deg, #ff9800, #f57c00)'
    },
    {
      icon: <FaSearch />,
      title: 'SEO & Digital Marketing',
      description: 'Strategic digital marketing and SEO services to increase visibility and drive targeted traffic.',
      features: [
        'SEO Optimization & Strategy',
        'Content Marketing',
        'Social Media Management',
        'Email Marketing Campaigns',
        'Analytics & Performance Tracking'
      ],
      color: '#e91e63',
      gradient: 'linear-gradient(135deg, #e91e63, #c2185b)'
    }
  ];

  const additionalServices = [
    { icon: <FaShoppingCart />, label: 'E-Commerce Solutions', color: '#ff5722' },
    { icon: <FaPalette />, label: 'Brand Identity Design', color: '#9c27b0' },
    { icon: <FaBullhorn />, label: 'Digital Advertising', color: '#4caf50' },
    { icon: <FaRocket />, label: 'Startup Consultation', color: '#00bcd4' },
  ];

  const stats = [
    { number: '5+', label: 'Projects Delivered', icon: <FaRocket /> },
    { number: '3', label: 'Happy Clients', icon: <FaUsers /> },
    { number: '5/5', label: 'Client Rating', icon: <FaStar /> },
    { number: '100%', label: 'Satisfaction Rate', icon: <FaShieldAlt /> },
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#e0e0e0',
      padding: '100px 20px 60px',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Decorations */}
      <div style={{
        position: 'absolute',
        top: '-30%',
        right: '-20%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(0,255,153,0.05) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0,188,212,0.05) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(45deg, #00ff99, #00bcd4)',
              padding: '5px 20px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#0a0a0a',
              marginBottom: '20px',
              letterSpacing: '1px'
            }}
          >
            WHAT WE OFFER
          </motion.div>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #ffffff 0%, #00ff99 50%, #00bcd4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Digital Solutions That Drive Growth
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#b0b0b0',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            We deliver comprehensive digital services designed to help your business 
            succeed in today's competitive landscape.
          </p>
        </div>

        {/* Stats - Realistic Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '20px',
            marginBottom: '60px'
          }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                borderRadius: '20px',
                padding: '25px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = '#00ff99';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
              }}
            >
              <div style={{
                fontSize: '28px',
                color: '#00ff99',
                marginBottom: '5px'
              }}>
                {stat.icon}
              </div>
              <div style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#ffffff'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#b0b0b0'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main Services */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                borderRadius: '20px',
                padding: '30px',
                border: '1px solid rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = service.color;
                e.currentTarget.style.boxShadow = `0 10px 40px ${service.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Service Icon */}
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '15px',
                background: `linear-gradient(135deg, ${service.color}30, ${service.color}10)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                color: service.color,
                marginBottom: '20px',
                border: `1px solid ${service.color}20`
              }}>
                {service.icon}
              </div>

              <h3 style={{
                fontSize: '22px',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '12px'
              }}>
                {service.title}
              </h3>

              <p style={{
                fontSize: '15px',
                color: '#b0b0b0',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                {service.description}
              </p>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {service.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    style={{
                      padding: '8px 0',
                      fontSize: '14px',
                      color: '#b0b0b0',
                      borderBottom: fIdx < service.features.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    <span style={{ color: service.color }}>▸</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Decorative Gradient Line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: service.gradient
              }} />
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            marginBottom: '60px'
          }}
        >
          <h2 style={{
            fontSize: '32px',
            textAlign: 'center',
            color: '#ffffff',
            marginBottom: '15px'
          }}>
            Also <span style={{ color: '#00ff99' }}>Available</span>
          </h2>
          <p style={{
            textAlign: 'center',
            color: '#b0b0b0',
            marginBottom: '40px'
          }}>
            Additional services to complement your digital strategy
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px'
          }}>
            {additionalServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 + 0.6 }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '15px',
                  padding: '25px',
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = service.color;
                  e.currentTarget.style.background = `rgba(255,255,255,0.05)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                }}
              >
                <div style={{
                  fontSize: '32px',
                  color: service.color,
                  marginBottom: '10px'
                }}>
                  {service.icon}
                </div>
                <div style={{
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: '500'
                }}>
                  {service.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            background: 'linear-gradient(135deg, rgba(0,255,153,0.1), rgba(0,188,212,0.1))',
            borderRadius: '30px',
            padding: '50px',
            textAlign: 'center',
            border: '1px solid rgba(0,255,153,0.1)'
          }}
        >
          <h2 style={{
            fontSize: '32px',
            color: '#ffffff',
            marginBottom: '15px'
          }}>
            Ready to <span style={{ color: '#00ff99' }}>Transform</span> Your Business?
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#b0b0b0',
            marginBottom: '30px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Let's discuss how our services can help you achieve your digital goals.
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(45deg, #00ff99, #00bcd4)',
              color: '#0a0a0a',
              padding: '15px 40px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '18px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 0 40px rgba(0, 255, 153, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Get Started
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;