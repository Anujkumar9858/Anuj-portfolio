import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { Download, Mail, User, Code2, Gamepad2, Sparkles } from "lucide-react";
import IMG from "../assets/Image/IMG.jpg";
import Resume from "../assets/Image/Anuj_Resume.pdf";
import "./About.css";

function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="about-section">
      <div className="container">
        <div className="about-container">
          {/* Left Column: Image */}
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={IMG}
              alt="Anuj Kumar"
              className="about-img"
              loading="lazy"
            />
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-header">
              <div className="sub-heading">
                <User size={18} /> Who I Am
              </div>
              <h2 id="about-title">
                <ReactTyped
                  strings={["About Me", "My Story", "Developer Profile"]}
                  typeSpeed={50}
                  backSpeed={30}
                  backDelay={2000}
                  loop
                  showCursor={false}
                />
              </h2>
            </div>

            <div className="about-text">
              <p>
                I'm a <strong>frontend-leaning full-stack developer</strong> who loves building
                clean, accessible interfaces and the systems that power them. My journey involves
                turning complex problems into simple, beautiful, and intuitive designs.
              </p>
              <p>
                When I'm not coding, you can find me exploring new tech stacks, sketching UI ideas,
                writing dev notes, or enjoying some gaming sessions.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Coding</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Dedication</span>
              </div>
            </div>

            <div className="about-actions">
              <a className="btn btn-icon" href="#contact">
                <Mail size={18} /> Hire Me
              </a>
              <a className="btn secondary btn-icon" href={Resume} download="Anuj_Kumar_Resume.pdf">
                <Download size={18} /> Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
