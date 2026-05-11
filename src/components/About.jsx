import React from "react";
import "./About.css";
import profileimg from "../assets/my_profile.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title reveal">About Me</h2>
        <div className="about-container">
          <div className="about-image reveal-left">
            <div className="image-accent"></div>
            <div className="image-wrapper">
              <img src={profileimg} alt="Pradeep Kumar" />
            </div>
          </div>

          <div className="about-text reveal-right">
            <p>
              I am a driven <span className="highlight">Full Stack Developer</span> with a passion for building scalable, high-impact digital solutions. My journey in tech is fueled by a curiosity for how things work and a desire to create seamless user experiences.
            </p>
            <p>
              I specialize in <span className="highlight">modern web technologies</span>, focusing on performance, accessibility, and clean architecture. Whether it's crafting intricate UI components or architecting robust backends, I bring a detail-oriented approach to every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
