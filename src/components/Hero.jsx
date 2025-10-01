import React from "react";
import { ReactTyped } from "react-typed"; 
import { motion } from "framer-motion"; 
import IMG from "../assets/Image/IMG.jpg";

// SVG ICONS
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3
      m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61
      c3.14-.35 6.44-1.54 6.44-7
      A5.44 5.44 0 0 0 20 4.77 
      5.07 5.07 0 0 0 19.91 1
      S18.73.65 16 2.48a13.38 13.38 
      0 0 0-7 0C6.27.65 5.09 1 
      5.09 1A5.07 5.07 0 0 0 5 4.77
      a5.44 5.44 0 0 0-1.5 3.78
      c0 5.42 3.3 6.61 6.44 7
      A3.37 3.37 0 0 0 9 18.13V22">
    </path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7
      a2 2 0 0 0-2-2 
      2 2 0 0 0-2 2v7h-4v-7
      a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 
      1.53 4.48 4.48 0 0 0-7.86 3v1
      A10.66 10.66 0 0 1 3 4s-4 9 
      5 13a11.64 11.64 0 0 1-7 2
      c9 5 20 0 20-11.5
      a4.5 4.5 0 0 0-.08-.83
      A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

function Hero() {
  return (
    <main id="top" className="hero">
      <div className="container hero-grid">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateY: -45 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Typed Animated Text */}
          <p className="kicker">
            <ReactTyped
              strings={[
                "🚀 React.js Frontend Developer",
                "🎨 Creative UI/UX Enthusiast",
                "⚡ Problem Solver & Fast Learner",
                "💻 Turning Ideas into Experiences"
              ]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={1500}
              loop
            />
          </p>

          <h1>
            Hi, I'm{" "}
            <span
              style={{
                background: "linear-gradient(90deg,var(--brand),var(--brand-2))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Anuj Kumar
            </span>
            .<br />
            I design and build modern, accessible web experiences.
          </h1>

          <p className="lead">
            Passionate about crafting{" "}
            <strong>fast, interactive, and user-focused</strong> web
            applications. Currently open to exciting{" "}
            <em>freelance </em>.
          </p>

          {/* Buttons */}
          <div className="hero-cta">
            <a className="btn" href="#work">✨ View My Work</a>
            <a className="btn secondary" href="#contact">📩 Contact Me</a>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a href="https://github.com/Anujkumar9858" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/anujkumar9858/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <LinkedinIcon />
            </a>
            <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
              <TwitterIcon />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE - Profile Card with 3D Hover */}
        <motion.aside
          className="hero-card"
          initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          whileHover={{ rotateY: 15, rotateX: 10, scale: 1.05 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
          style={{ perspective: "1000px" }}
        >
          <img 
            src={IMG} 
            alt="Anuj Kumar" 
            className="profile-pic"
          />
          <div className="card">
            <strong>Now</strong>
            <p className="lead" style={{ margin: ".2rem 0 0" }}>
              Exploring <em>AI + UX</em> and building next-gen tools for creators 🚀
            </p>
          </div>
        </motion.aside>
      </div>
    </main>
  );
}

export default Hero;
