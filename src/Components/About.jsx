import React, { useState, useEffect } from 'react';
import { FaCode, FaMobileAlt, FaPaintBrush, FaChartLine, FaRocket, FaUsers, FaAward, FaHeart, FaGlobe, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const stats = [
    { icon: <FaGlobe />, number: '3', label: 'Happy Clients', detail: 'UK, Canada & India' },
    { icon: <FaRocket />, number: '5+', label: 'Projects Delivered' },
    { icon: <FaStar />, number: '5/5', label: 'Client Rating' },
    { icon: <FaHeart />, number: '100%', label: 'Client Satisfaction' }
  ];

  const clientTestimonials = [
    {
      name: 'Sarah Mitchell',
      country: '🇬🇧 UK',
      project: 'E-commerce Website',
      quote: 'DAverse delivered an exceptional e-commerce platform that exceeded our expectations. Professional, creative, and always responsive.'
    },
    {
      name: 'James Anderson',
      country: '🇨🇦 Canada',
      project: 'Mobile App Development',
      quote: 'Working with DAverse was a game-changer for our business. The mobile app they built is intuitive, fast, and beautifully designed.'
    },
    {
      name: 'Priya Sharma',
      country: '🇮🇳 India',
      project: 'Branding & Web Design',
      quote: 'DAverse understood our vision perfectly and created a stunning website that truly represents our brand. Highly recommended!'
    }
  ];

  const skills = [
    { name: 'Web Development', level: 95, icon: <FaCode />, color: '#00bcd4' },
    { name: 'Mobile App Development', level: 88, icon: <FaMobileAlt />, color: '#00ff99' },
    { name: 'UI/UX Design', level: 82, icon: <FaPaintBrush />, color: '#ff9800' },
    { name: 'Digital Marketing', level: 75, icon: <FaChartLine />, color: '#e91e63' }
  ];

  const teamValues = [
    {
      title: 'Global Reach',
      desc: 'Proudly serving clients across UK, Canada, and India with international quality standards.',
      icon: '🌍'
    },
    {
      title: 'Client-First Approach',
      desc: 'Every project is built around your unique needs, ensuring results that align with your vision.',
      icon: '🤝'
    },
    {
      title: 'Quality Commitment',
      desc: 'We maintain uncompromising quality standards in every line of code and design element.',
      icon: '✅'
    },
    {
      title: 'Innovation Driven',
      desc: 'Continuously exploring new technologies to deliver cutting-edge digital solutions.',
      icon: '💡'
    }
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
            ABOUT DAVERSE
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
            Your Global Digital Partner
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#b0b0b0',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            From the UK to Canada and India, we're building digital solutions that 
            help businesses grow and succeed in the global market.
          </p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '25px',
            marginBottom: '60px'
          }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                borderRadius: '20px',
                padding: '30px 20px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{
                fontSize: '32px',
                color: '#00ff99',
                marginBottom: '10px'
              }}>
                {stat.icon}
              </div>
              <div style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '5px'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#b0b0b0'
              }}>
                {stat.label}
              </div>
              {stat.detail && (
                <div style={{
                  fontSize: '12px',
                  color: '#838383',
                  marginTop: '5px'
                }}>
                  {stat.detail}
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Client Testimonials */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
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
            What Our <span style={{ color: '#00ff99' }}>Clients Say</span>
          </h2>
          <p style={{
            textAlign: 'center',
            color: '#b0b0b0',
            marginBottom: '40px',
            fontSize: '16px'
          }}>
            Real feedback from our valued clients across the globe
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {clientTestimonials.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '20px',
                  padding: '30px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#00ff99';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 255, 153, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '15px'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #00ff99, #00bcd4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#0a0a0a'
                  }}>
                    {client.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{
                      color: '#ffffff',
                      fontWeight: '600',
                      fontSize: '16px'
                    }}>
                      {client.name}
                    </div>
                    <div style={{
                      color: '#838383',
                      fontSize: '14px'
                    }}>
                      {client.country}
                    </div>
                  </div>
                </div>
                <div style={{
                  color: '#b0b0b0',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  fontStyle: 'italic'
                }}>
                  "{client.quote}"
                </div>
                <div style={{
                  marginTop: '15px',
                  paddingTop: '15px',
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                  fontSize: '13px',
                  color: '#838383'
                }}>
                  Project: {client.project}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '50px',
            marginBottom: '60px',
            alignItems: 'start'
          }}
        >
          <div>
            <h2 style={{
              fontSize: '32px',
              color: '#ffffff',
              marginBottom: '20px'
            }}>
              Who We Are
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#b0b0b0',
              lineHeight: '1.8',
              marginBottom: '20px'
            }}>
              DAverse is a modern digital agency with a global footprint, proudly serving 
              clients from the United Kingdom, Canada, and India. We specialize in creating 
              exceptional web and mobile solutions that help businesses thrive in the digital age.
            </p>
            <p style={{
              fontSize: '16px',
              color: '#b0b0b0',
              lineHeight: '1.8',
              marginBottom: '20px'
            }}>
              Our journey began with a simple mission: to deliver high-quality digital solutions 
              with a personal touch. Whether you're a startup looking for a stunning website 
              or an established business needing a mobile app, we bring the expertise and 
              dedication to make it happen.
            </p>
            <div style={{
              display: 'flex',
              gap: '15px',
              flexWrap: 'wrap'
            }}>
              {['React', 'Node.js', 'Flutter', 'Firebase', 'AWS', 'MongoDB'].map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '5px 15px',
                    background: 'rgba(0, 255, 153, 0.1)',
                    border: '1px solid rgba(0, 255, 153, 0.2)',
                    borderRadius: '15px',
                    fontSize: '12px',
                    color: '#00ff99'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{
              fontSize: '32px',
              color: '#ffffff',
              marginBottom: '20px'
            }}>
              Our Values
            </h2>
            <div style={{
              display: 'grid',
              gap: '20px'
            }}>
              {teamValues.map((value, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '15px',
                    padding: '20px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#00ff99';
                    e.currentTarget.style.background = 'rgba(0, 255, 153, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                  }}>
                    <span style={{
                      fontSize: '28px'
                    }}>
                      {value.icon}
                    </span>
                    <div>
                      <h4 style={{
                        color: '#ffffff',
                        marginBottom: '5px',
                        fontSize: '16px'
                      }}>
                        {value.title}
                      </h4>
                      <p style={{
                        color: '#b0b0b0',
                        fontSize: '14px',
                        margin: 0,
                        lineHeight: '1.6'
                      }}>
                        {value.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            marginBottom: '60px'
          }}
        >
          <h2 style={{
            fontSize: '32px',
            textAlign: 'center',
            color: '#ffffff',
            marginBottom: '40px'
          }}>
            Our <span style={{ color: '#00ff99' }}>Expertise</span>
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {skills.map((skill, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '20px',
                  padding: '25px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = skill.color;
                  e.currentTarget.style.boxShadow = `0 10px 30px ${skill.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '15px'
                }}>
                  <span style={{
                    color: skill.color,
                    fontSize: '24px'
                  }}>
                    {skill.icon}
                  </span>
                  <h3 style={{
                    color: '#ffffff',
                    fontSize: '18px',
                    margin: 0
                  }}>
                    {skill.name}
                  </h3>
                </div>
                <div style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '10px',
                  height: '8px',
                  overflow: 'hidden'
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: animated ? `${skill.level}%` : 0 }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    style={{
                      height: '100%',
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
                      borderRadius: '10px'
                    }}
                  />
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: '5px',
                  fontSize: '14px',
                  color: '#b0b0b0'
                }}>
                  {skill.level}%
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            background: 'linear-gradient(135deg, rgba(0,255,153,0.1), rgba(0,188,212,0.1))',
            borderRadius: '30px',
            padding: '50px',
            textAlign: 'center',
            border: '1px solid rgba(0,255,153,0.1)'
          }}
        >
          <h2 style={{
            fontSize: '36px',
            color: '#ffffff',
            marginBottom: '15px'
          }}>
            Ready to Join Our <span style={{ color: '#00ff99' }}>Global Clients</span>?
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#b0b0b0',
            marginBottom: '30px'
          }}>
            Whether you're in the UK, Canada, India, or anywhere else in the world, 
            we're here to bring your digital vision to life.
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
            Let's Work Together
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;