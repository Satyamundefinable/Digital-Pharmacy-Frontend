// ContactPage.jsx
import React from "react";
import "../Style/contactPage.css"

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-overlay">
        <h1 className="contact-title">Contact Our Medical Support Team</h1>
        <p className="contact-subtitle">
          We're here to help you 24/7. Whether you have questions about medicines,
          prescriptions, or need urgent assistance, feel free to reach out.
        </p>

        <div className="contact-content">
          {/* Left Section */}
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>
              Our healthcare experts are available round the clock to assist you
              with your needs. Reach out via phone, email, or visit us directly.
            </p>

            <div className="info-box">
              <h3>📍 Address</h3>
              <p>123 Health Street, Bhopal, Madhya Pradesh, India</p>
            </div>

            <div className="info-box">
              <h3>📞 Phone</h3>
              <p>+91 98765 43210</p>
            </div>

            <div className="info-box">
              <h3>📧 Email</h3>
              <p>support@medicare.com</p>
            </div>

            <div className="info-box">
              <h3>⏰ Working Hours</h3>
              <p>Mon - Sun : 24 Hours Service</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Full Name" required />
              </div>

              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>

              <div className="form-group">
                <input type="tel" placeholder="Phone Number" />
              </div>

              <div className="form-group">
                <input type="text" placeholder="Subject" />
              </div>

              <div className="form-group">
                <textarea placeholder="Write your message here..." rows="6" required></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;

