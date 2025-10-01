import React from "react";
import { ReactTyped } from "react-typed"; // ✅ For typed text
import { motion } from "framer-motion";   // ✅ For 3D animation
import IMG from "../assets/Image/IMG.jpg";
import Resume from "../assets/Image/Anuj_Resume.pdf"; // ✅ apna resume file assets me rakho

function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section-head">
          {/* ✅ Typed About Heading */}
          <h2 id="about-title">
            <ReactTyped
              strings={["About"]}
              typeSpeed={80}
              backSpeed={50}
              loop={false}       // ✅ Only once
              showCursor={false} // ✅ Cursor hatado
            />
          </h2>
        </div>

        <div className="grid about-grid">
          {/* ✅ Left Card (Image) */}
          <motion.div
            className="card"
            initial={{ opacity: 0, rotateY: -90, z: -100 }}
            whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
          >
            <img
              loading="lazy"
              alt="Portrait"
              src={IMG}
              style={{ borderRadius: "12px" }}
            />
          </motion.div>

          {/* ✅ Right Card (Text + Buttons) */}
          <motion.div
            className="card"
            initial={{ opacity: 0, rotateY: 90, z: -100 }}
            whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.05, rotateX: -5, rotateY: -5 }}
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
          >
            <p className="lead">
              I'm a frontend-leaning full-stack developer who loves building
              clean, accessible interfaces and the systems that power them.
            </p>
            <p>
              When I'm not coding, you can find me sketching UI ideas, writing
              dev notes, or playing games.
            </p>
            <div className="hero-cta">
              <a className="btn" href="#contact">Hire Me</a>

              {/* ✅ Download Resume */}
              <a className="btn secondary" href={Resume} download="Anuj_Kumar_Resume.pdf">
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
