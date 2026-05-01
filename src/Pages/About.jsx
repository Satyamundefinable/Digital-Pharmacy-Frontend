import "../Style/aboutPage.css"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-overlay">
        <div className="about-content">
          <h1>About Our Medical Services</h1>
          <p>
            Welcome to <strong>MediCare+</strong>, your trusted digital healthcare partner.
            We are committed to providing high-quality medical services, reliable
            information, and easy access to medicines and healthcare professionals.
          </p>

          <div className="about-sections">
            <div className="about-card">
              <h2>Our Mission</h2>
              <p>
                To make healthcare accessible, affordable, and efficient for everyone
                by leveraging modern technology and expert medical knowledge.
              </p>
            </div>

            <div className="about-card">
              <h2>Our Vision</h2>
              <p>
                To become a leading digital healthcare platform where patients can
                connect with doctors, order medicines, and manage their health seamlessly.
              </p>
            </div>

            <div className="about-card">
              <h2>Our Services</h2>
              <ul>
                <li>Online Medicine Ordering</li>
                <li>Doctor Consultation</li>
                <li>Health Monitoring Tools</li>
                <li>Secure Medical Records</li>
              </ul>
            </div>
          </div>

          <div className="about-footer">
            <p>
              We believe in <strong>care, trust, and innovation</strong> to deliver
              the best healthcare experience.
            </p>
          </div>
        </div>
        
      </div>

      
    </div>
  );
};

export default About;