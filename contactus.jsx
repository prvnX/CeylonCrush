import React from 'react';
import "../style/contactusstyle.css";
import Form from './Form';

function ContactUs() {
  return (
    <div className="contactus">
      <div className="contactuscontainer">
        <h1 className="contactusheading">Need assistance?</h1>
        <p>Our team is ready to assist.</p>
      </div>
      <Form />
      <div className="reachus">
        <h1 className="contactusheading followcontact">Reach Us</h1>
        <p>  +94 -776134856</p>
        <p>  <a href="mailto:prvnmadushan@gmail.com"> info@CeylonCrush.com</a></p>
      </div>
      <div className="followus">
        <h1 className="contactusheading followcontact">Follow Us</h1>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="images/fb.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="images/Instagram_icon.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="images/LinkedIn_icon.svg.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
