import React, { useState } from "react";
import emailjs from "emailjs-com";
import { 
  FaUser, 
  FaEnvelope, 
  FaComment, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaCheckCircle,
  FaClock,
  FaPhoneAlt
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    // EmailJS configuration - send to your Gmail
    // The recipient email should be set in your EmailJS template
    // but we'll also pass it as a parameter
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || "Not provided",
      subject: formData.subject || "New Contact Form Submission",
      message: formData.message,
      // This will be used in your EmailJS template
      to_email: "da.tech002@gmail.com",
      // Additional fields for better email formatting
      reply_to: formData.email,
    };

    console.log("Sending email with params:", templateParams);

    emailjs
      .send(
        "service_g59ekwc",   // Your EmailJS service ID
        "template_3fzm6ky",  // Your EmailJS template ID
        templateParams,
        "9XHVB_P6Q3W6ZuFqY"  // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
          
          // Reset success message after 5 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        },
        (error) => {
          console.error("EmailJS Error Details:", error);
          setIsSubmitting(false);
          
          // More specific error messages
          if (error.status === 422) {
            setErrorMessage("Email configuration error. Please contact us directly at da.tech002@gmail.com");
          } else if (error.status === 400) {
            setErrorMessage("Invalid form data. Please check all fields and try again.");
          } else {
            setErrorMessage("Something went wrong. Please try again or email us directly at da.tech002@gmail.com");
          }
        }
      );
  };

  const contactInfo = [
    { icon: <FaEnvelope />, label: "Email", value: "da.tech002@gmail.com", link: "mailto:da.tech002@gmail.com" },
    { icon: <FaPhone />, label: "Phone", value: "+91 9600698331", link: "tel:+919600698331" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Tiruvannamalai, Tamilnadu, India" },
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
          maxWidth: '1100px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
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
            GET IN TOUCH
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
            Let's Start Your Project
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#b0b0b0',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            Have a project in mind? We'd love to hear about it. Fill out the form 
            and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Form and Info Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'start'
        }}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
              borderRadius: '20px',
              padding: '40px',
              border: '1px solid rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: '#b0b0b0',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  <FaUser style={{ marginRight: '8px', color: '#00ff99' }} />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.03)',
                    color: '#ffffff',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00ff99';
                    e.target.style.background = 'rgba(0, 255, 153, 0.05)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.target.style.background = 'rgba(255,255,255,0.03)';
                  }}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: '#b0b0b0',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  <FaEnvelope style={{ marginRight: '8px', color: '#00ff99' }} />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.03)',
                    color: '#ffffff',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00ff99';
                    e.target.style.background = 'rgba(0, 255, 153, 0.05)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.target.style.background = 'rgba(255,255,255,0.03)';
                  }}
                />
              </div>

              {/* Phone */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: '#b0b0b0',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  <FaPhone style={{ marginRight: '8px', color: '#00ff99' }} />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9600698331"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.03)',
                    color: '#ffffff',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00ff99';
                    e.target.style.background = 'rgba(0, 255, 153, 0.05)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.target.style.background = 'rgba(255,255,255,0.03)';
                  }}
                />
              </div>

              {/* Subject */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: '#b0b0b0',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.03)',
                    color: '#ffffff',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00ff99';
                    e.target.style.background = 'rgba(0, 255, 153, 0.05)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.target.style.background = 'rgba(255,255,255,0.03)';
                  }}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: '25px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: '#b0b0b0',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  <FaComment style={{ marginRight: '8px', color: '#00ff99' }} />
                  Message / Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project..."
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.03)',
                    color: '#ffffff',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00ff99';
                    e.target.style.background = 'rgba(0, 255, 153, 0.05)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.target.style.background = 'rgba(255,255,255,0.03)';
                  }}
                />
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div style={{
                  marginBottom: '20px',
                  padding: '12px',
                  background: 'rgba(255,0,0,0.1)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,0,0,0.2)',
                  color: '#ff6b6b',
                  textAlign: 'center',
                  fontSize: '14px'
                }}>
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '16px',
                  background: isSubmitting ? 'rgba(255,255,255,0.1)' : 'linear-gradient(45deg, #00ff99, #00bcd4)',
                  color: isSubmitting ? '#838383' : '#0a0a0a',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '18px',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.boxShadow = '0 0 30px rgba(0, 255, 153, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : isSubmitted ? (
                  <>
                    <FaCheckCircle /> Message Sent!
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>

              {isSubmitted && (
                <div style={{
                  marginTop: '15px',
                  padding: '12px',
                  background: 'rgba(0, 255, 153, 0.1)',
                  borderRadius: '8px',
                  border: '1px solid rgba(0, 255, 153, 0.2)',
                  color: '#00ff99',
                  textAlign: 'center',
                  fontSize: '14px'
                }}>
                  ✅ Thank you! We'll get back to you within 24 hours.
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '25px'
            }}
          >
            <div style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
              borderRadius: '20px',
              padding: '30px',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <h3 style={{
                color: '#ffffff',
                fontSize: '20px',
                marginBottom: '25px'
              }}>
                Contact Information
              </h3>
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    padding: '15px 0',
                    borderBottom: idx < contactInfo.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none'
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(0, 255, 153, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00ff99',
                    fontSize: '18px'
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{
                      fontSize: '12px',
                      color: '#838383',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      {info.label}
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        style={{
                          color: '#ffffff',
                          textDecoration: 'none',
                          fontSize: '16px',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#00ff99'}
                        onMouseLeave={(e) => e.target.style.color = '#ffffff'}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div style={{ color: '#ffffff', fontSize: '16px' }}>
                        {info.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(0,255,153,0.05), rgba(0,188,212,0.05))',
              borderRadius: '20px',
              padding: '30px',
              border: '1px solid rgba(0,255,153,0.1)'
            }}>
              <h3 style={{
                color: '#ffffff',
                fontSize: '20px',
                marginBottom: '15px'
              }}>
                <FaClock style={{ marginRight: '10px', color: '#00ff99' }} />
                Working Hours
              </h3>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}>
                <span style={{ color: '#b0b0b0' }}>Monday - Friday</span>
                <span style={{ color: '#ffffff' }}>9:00 AM - 6:00 PM</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 0'
              }}>
                <span style={{ color: '#b0b0b0' }}>Saturday - Sunday</span>
                <span style={{ color: '#ffffff' }}>By Appointment</span>
              </div>
              <p style={{
                marginTop: '15px',
                fontSize: '14px',
                color: '#838383',
                lineHeight: '1.6'
              }}>
                🚀 We typically respond to all inquiries within 24 hours.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(255,235,59,0.05), rgba(255,87,34,0.05))',
              borderRadius: '20px',
              padding: '30px',
              border: '1px solid rgba(255,235,59,0.1)',
              textAlign: 'center'
            }}>
              <p style={{
                color: '#b0b0b0',
                fontSize: '16px',
                lineHeight: '1.8'
              }}>
                Prefer a quick chat? Call us directly at <br />
                <a
                  href="tel:+919600698331"
                  style={{
                    color: '#00ff99',
                    textDecoration: 'none',
                    fontSize: '20px',
                    fontWeight: '700'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#00bcd4'}
                  onMouseLeave={(e) => e.target.style.color = '#00ff99'}
                >
                  <FaPhoneAlt style={{ marginRight: '8px', fontSize: '16px' }} />
                  +91 96006 98331
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;