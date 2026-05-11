import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">PRADEEP<span>.</span></a>
            <p>Building the future of digital experiences with code and creativity.</p>
          </div>

          <div className="footer-links">
            <div className="footer-link-group">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>
            <div className="footer-link-group">
              <h4>Connect</h4>
              <ul>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Pradeep Kumar. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#"><Github size={18} /></a>
            <a href="#"><Linkedin size={18} /></a>
            <a href="#"><Twitter size={18} /></a>
            <a href="#"><Mail size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
