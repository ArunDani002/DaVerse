import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0a0a0a, #1a1a2e)',
      color: '#b0b0b0',
      padding: '60px 20px 30px',
      borderTop: '1px solid rgba(0, 255, 153, 0.1)',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px',
        marginBottom: '40px'
      }}>
        {/* Brand Section */}
        <div>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #00ff99, #00bcd4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '15px'
          }}>
            DAverse
          </h2>
          <p style={{
            fontSize: '14px',
            lineHeight: '1.8',
            color: '#838383'
          }}>
            Crafting digital solutions that help businesses thrive in the modern world.
            We combine creativity with cutting-edge technology.
          </p>
          <div style={{
            display: 'flex',
            gap: '15px',
            marginTop: '20px'
          }}>
            {[
              { icon: <FaFacebook />, link: 'https://facebook.com' },
              { icon: <FaTwitter />, link: 'https://twitter.com' },
              { icon: <FaInstagram />, link: 'https://instagram.com' },
              { icon: <FaLinkedin />, link: 'https://linkedin.com' },
              { icon: <FaGithub />, link: 'https://github.com' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#838383',
                  fontSize: '20px',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  padding: '8px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#00ff99';
                  e.target.style.borderColor = 'rgba(0, 255, 153, 0.3)';
                  e.target.style.background = 'rgba(0, 255, 153, 0.1)';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#838383';
                  e.target.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.target.style.background = 'rgba(255,255,255,0.05)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{
            color: '#ffffff',
            fontSize: '18px',
            marginBottom: '20px',
            fontWeight: '600'
          }}>
            Quick Links
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' }
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  style={{
                    color: '#838383',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#00ff99';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#838383';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 style={{
            color: '#ffffff',
            fontSize: '18px',
            marginBottom: '20px',
            fontWeight: '600'
          }}>
            Contact Info
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '14px'
            }}>
              <FaMapMarkerAlt style={{ color: '#00ff99', minWidth: '16px' }} />
              <span>Tiruvannamalai, Tamilnadu, India</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '14px'
            }}>
              <FaPhone style={{ color: '#00ff99', minWidth: '16px' }} />
              <a href="tel:+919600698331" style={{
                color: '#b0b0b0',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#00ff99'}
              onMouseLeave={(e) => e.target.style.color = '#b0b0b0'}>
                +91 96006 98331
              </a>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '14px'
            }}>
              <FaEnvelope style={{ color: '#00ff99', minWidth: '16px' }} />
              <a href="mailto:da.tech002@gmail.com" style={{
                color: '#b0b0b0',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#00ff99'}
              onMouseLeave={(e) => e.target.style.color = '#b0b0b0'}>
                da.tech002@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 style={{
            color: '#ffffff',
            fontSize: '18px',
            marginBottom: '20px',
            fontWeight: '600'
          }}>
            Stay Updated
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#838383',
            marginBottom: '15px',
            lineHeight: '1.6'
          }}>
            Subscribe to our newsletter for the latest updates and insights.
          </p>
          <form style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: '12px 15px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '25px',
                color: '#ffffff',
                fontSize: '14px',
                outline: 'none',
                transition: 'all 0.3s ease',
                minWidth: '150px'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#00ff99';
                e.target.style.background = 'rgba(255,255,255,0.08)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                e.target.style.background = 'rgba(255,255,255,0.05)';
              }}
            />
            <button
              type="submit"
              style={{
                padding: '12px 25px',
                background: 'linear-gradient(45deg, #00ff99, #00bcd4)',
                border: 'none',
                borderRadius: '25px',
                color: '#0a0a0a',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
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
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        paddingTop: '25px',
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <p style={{
          fontSize: '14px',
          color: '#838383',
          margin: 0
        }}>
          © {currentYear} DAverse. All Rights Reserved.
        </p>
        <div style={{
          display: 'flex',
          gap: '20px',
          fontSize: '13px'
        }}>
          <a href="#" style={{
            color: '#838383',
            textDecoration: 'none',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#00ff99'}
          onMouseLeave={(e) => e.target.style.color = '#838383'}>
            Privacy Policy
          </a>
          <a href="#" style={{
            color: '#838383',
            textDecoration: 'none',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#00ff99'}
          onMouseLeave={(e) => e.target.style.color = '#838383'}>
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;