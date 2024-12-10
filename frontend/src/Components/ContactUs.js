import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Your message has been successfully sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f7e6e6', // Background color
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          padding: "20px",  // Reduced padding
          backgroundColor: "#ffffff",
          borderRadius: "15px", // Rounded edges
          boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)", // Soft shadow effect
          width: "100%",
          maxWidth: "450px", // Reduced width for smaller form
          transition: 'transform 0.3s ease',
        }}
      >
        <h2 style={{ color: '#f44336', marginBottom: '10px' }}>Contact Us</h2>
        <p style={{ fontSize: '16px', color: '#555' }}>
          If you have any questions or feedback, feel free to reach out to us!
        </p>
        <p style={{ fontWeight: 'bold', color: '#333' }}>
          <strong>Email:</strong> indianConstitution@gmail.com
        </p>
        <h3 style={{ marginTop: '20px', color: '#333' }}>Send Us a Message</h3>
        <form onSubmit={handleSubmit} style={{ marginTop: '15px' }}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontSize: '16px', color: '#333' }}>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",  // Reduced padding
                  marginTop: "6px",  // Reduced margin
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontSize: "16px",
                  color: "#555",
                  outline: "none",
                  transition: 'border 0.3s ease',
                }}
                onFocus={(e) => e.target.style.borderColor = '#f44336'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
            </label>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontSize: '16px', color: '#333' }}>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",  // Reduced padding
                  marginTop: "6px",  // Reduced margin
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontSize: "16px",
                  color: "#555",
                  outline: "none",
                  transition: 'border 0.3s ease',
                }}
                onFocus={(e) => e.target.style.borderColor = '#f44336'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
            </label>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontSize: '16px', color: '#333' }}>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="5"  // Reduced row size
                style={{
                  width: "100%",
                  padding: "10px",  // Reduced padding
                  marginTop: "6px",  // Reduced margin
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontSize: "16px",
                  color: "#555",
                  outline: "none",
                  transition: 'border 0.3s ease',
                }}
                onFocus={(e) => e.target.style.borderColor = '#f44336'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
            </label>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#f7e6e6",
              color: "white",
              padding: "10px 20px",  // Reduced padding
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              width: "100%",
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#d32f2f'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#f44336'}
          >
            Send Message
          </button>
        </form>
        {successMessage && (
          <div style={{ marginTop: "15px", color: "green", fontSize: '16px' }}>
            <h4>{successMessage}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
