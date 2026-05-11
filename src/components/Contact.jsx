import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Get In <span className="text-gradient">Touch</span>
        </motion.h2>

        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <h3>Let's build something amazing together.</h3>
            <p>
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>

            <div className="contact-methods">
              <div className="contact-method glass">
                <Mail className="method-icon" />
                <div>
                  <h4>Email</h4>
                  <p>pradeep04066@gmail.com</p>
                </div>
              </div>
              <div className="contact-method glass">
                <Linkedin className="method-icon" />
                <div>
                  <h4>LinkedIn</h4>
                  <p>Pradeep Kumar S</p>
                </div>
              </div>
              <div className="contact-method glass">
                <MapPin className="method-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Chennai, India</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/Pradeep-Kumar-18" className="social-link glass"><Github /></a>
              <a href="https://www.linkedin.com/in/pradeep-kumar-18official/" className="social-link glass"><Linkedin /></a>
              <a href="mailto:[pradeep04066@gmail.com]" className="social-link glass"><Mail /></a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form-wrapper glass"
          >
            <form className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
