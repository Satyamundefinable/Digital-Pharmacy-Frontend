import React from "react";
import "../../Style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h2>Digital Pharmacy</h2>
          <p>Manage medicines, sales, and inventory efficiently.</p>
        </div>

        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Dashboard</li>
            <li>Medicines</li>
            <li>Sales</li>
            <li>Reports</li>
          </ul>
        </div>

       
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: support@pharmacy.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

      </div>

      
      <div className="footer-bottom">
        <p>© 2026 Pharmacy System | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;