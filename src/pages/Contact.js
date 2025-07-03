import React from 'react';
import { FaWhatsapp,FaEnvelope } from 'react-icons/fa';


function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Fish On The Bonnet</h2>
          <p>We're here to help with your needs. Reach out anytime!</p>
        </div>

        <div className="contact-content">
          {/* Contact Info Column */}
          <div className="contact-info">
            <h3>Our Contact Details</h3>
            
            <div className="contact-method">
              <div className="contact-icon whatsapp-icon">
            <FaWhatsapp color='green'/>
          </div>
              <div>
                <h4>WhatsApp</h4>
                <a href="https://wa.me/254768969534" className="contact-link">
                  +254 768969534
                </a>
              </div>
            </div>

            <div className="contact-method">
                <div className="contact-icon email-icon"> 
                  <FaEnvelope color='orange' /> </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:fishonthebonnet@gmail.com" className="contact-link">
                  fishonthebonnet@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+254768969534" className="contact-link">
                  +254 768969534
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>Nairobi, Kasarani</p>
              </div>
            </div>

            <div className="business-hours">
              <h4>Business Hours</h4>
              <p>Monday - Friday: 9am - 8pm</p>
              <p>Saturday: 10am - 6pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="John Doe" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="you@example.com" />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number (optional)</label>
                <input type="tel" id="phone" placeholder="+254..." />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" rows="5" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-container">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.854244477075!2d36.92579731475392!3d-1.263635899078089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f175b922365d3%3A0x906719d19b0643a5!2sKasarani%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;