import React, { useEffect, useState } from "react";
import "./Home.css";

const roles = ["Web Developer"];

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let currentRole = roles[index];
    let charIndex = 1; // Start from 1 to avoid initial empty slice

    const typing = setInterval(() => {
      setText(currentRole.slice(0, charIndex));
      charIndex++;

      if (charIndex > currentRole.length + 1) {
        clearInterval(typing);

        // If multiple roles, wait and switch. If single, just stay.
        if (roles.length > 1) {
          setTimeout(() => {
            setIndex((prev) => (prev + 1) % roles.length);
            setText("");
          }, 1500);
        }
      }
    }, 100);

    return () => clearInterval(typing);
  }, [index, roles]);

  return (
    <section id="home" className="home">
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>

      <div className="home-content">
        <p className="greeting">Hi, I'm</p>
        <h1 className="name">Pradeep Kumar S</h1>
        <div className="role-container">
          <span>I'm a</span>
          <span className="role">{text}<span className="cursor">|</span></span>
        </div>
        <p className="intro">
          A forward-thinking Full Stack Developer specializing in building exceptional digital experiences that are fast, accessible, and visually stunning.
        </p>
        <div className="home-btns">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>

      <div className="social-links-corner">
        <a href="https://github.com/Pradeep-Kumar-18" target="_blank" rel="noopener noreferrer" className="social-icon">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a href="https://www.linkedin.com/in/pradeep-kumar-18official/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
      </div>
    </section>
  );
};

export default Home;
