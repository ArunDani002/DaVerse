import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS send
    emailjs
      .send(
        "service_g59ekwc",   // from EmailJS dashboard
        "template_3fzm6ky",  // from EmailJS dashboard
        formData,
        "9XHVB_P6Q3W6ZuFqY"    // from EmailJS account
      )
      .then(
        (result) => {
          alert("Message Sent Successfully ✅");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("❌ Something went wrong: " + error.text);
        }
      );
  };

  return (
    <div
      style={{
        backgroundColor: "#0d0d0d",
        minHeight: "100vh",
        color: "#e0e0e0",
        fontFamily: "Arial, sans-serif",
        padding: "60px 20px",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "42px", color: "#00bcd4" }}>Contact Us</h1>
        <p
          style={{
            color: "#aaa",
            fontSize: "18px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          We’d love to hear from you! Whether you’re interested in learning more
          about our services or ready to start your project, don’t hesitate to
          reach out.
        </p>
      </div>

      {/* Contact Form */}
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          backgroundColor: "#1a1a1a",
          borderRadius: "16px",
          padding: "40px",
          boxShadow: "0 0 25px rgba(0, 188, 212, 0.5)",
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                color: "#00ff99",
              }}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                outline: "none",
                backgroundColor: "#0d0d0d",
                color: "#e0e0e0",
                boxShadow: "inset 0 0 5px #00bcd4",
              }}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                color: "#00ff99",
              }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                outline: "none",
                backgroundColor: "#0d0d0d",
                color: "#e0e0e0",
                boxShadow: "inset 0 0 5px #00bcd4",
              }}
            />
          </div>

          {/* Message */}
          <div style={{ marginBottom: "25px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                color: "#00ff99",
              }}
            >
              Message / Project Details
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                outline: "none",
                backgroundColor: "#0d0d0d",
                color: "#e0e0e0",
                boxShadow: "inset 0 0 5px #00bcd4",
                resize: "none",
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              backgroundColor: "#00bcd4",
              color: "#0d0d0d",
              padding: "15px 35px",
              borderRadius: "30px",
              fontSize: "18px",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 2px #00bcd4",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#00ff99";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#00bcd4";
              e.target.style.transform = "scale(1)";
            }}
          >
            Send Message
          </button>
        </form>

        {/* Other Contact Details */}
        <div style={{ marginTop: "40px", color: "#aaa", fontSize: "16px" }}>
          <h3 style={{ color: "#00ff99" }}>Other Contact Details</h3>
          <p>
            Email:{" "}
            <span style={{ color: "#e0e0e0" }}>da.tech002@gmail.com</span>
          </p>
          <p>
            Phone: <span style={{ color: "#e0e0e0" }}>+91 9600698331</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
