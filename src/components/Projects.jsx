import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Project1 from "../assets/Image/Project1.png";
import Project2 from "../assets/Image/Project2.png";
import Project3 from "../assets/Image/Project3.png";
import "./Projects.css";

function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 680px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  const handleToggle = (e) => {
    e.preventDefault();
    setShowAll((v) => !v);
  };

  const handleViewMore = (project) => setActiveProject(project);
  const handleClose = () => setActiveProject(null);

  const projectDetails = {
    kids: {
      title: "Kids School Website",
      img: Project1,
      tech: ["React.js", "CSS", "Bootstrap", "Framer Motion"],
      description:
        "A colorful and interactive website built for a Kids School — featuring playful UI, smooth animations, and responsive design.",
      features: [
        "Animated Hero section using Framer Motion",
        "Mobile-first layout with Bootstrap Grid",
        "Interactive cards and hover animations",
        "Fast loading and SEO-friendly structure",
      ],
      tools: ["VS Code", "Vercel", "GitHub", "Figma"],
      learnings: [
        "Mastered responsive layouts",
        "Improved animation timing and triggers",
        "Learned UI consistency through design tokens",
      ],
      liveLink: "https://kid-school-one.vercel.app/",
    },
    percent: {
      title: "Percentage Calculator",
      img: Project2,
      tech: ["React.js", "CSS", "JavaScript"],
      description:
        "A lightweight, responsive tool for calculating percentages instantly. Clean design and simple logic for everyday use.",
      features: [
        "Real-time calculation using React state",
        "Input validation and result formatting",
        "Reusable component architecture",
      ],
      tools: ["VS Code", "React Developer Tools", "Vercel"],
      learnings: [
        "Improved JS logic and state updates",
        "Practiced modular React structure",
      ],
      liveLink: "https://percentage-calculator-theta.vercel.app/",
    },
    american: {
      title: "American Institute Website",
      img: Project3,
      tech: ["React.js", "CSS", "Bootstrap", "Framer Motion"],
      description:
        "A modern educational website for an institute, built with smooth transitions and a clean academic layout.",
      features: [
        "Hero section animations and transitions",
        "Faculty and course display cards",
        "Scroll-triggered section reveals",
      ],
      tools: ["VS Code", "Git", "Bootstrap 5", "Vercel"],
      learnings: [
        "Refined layout handling with Bootstrap Grid",
        "Optimized performance of Framer Motion animations",
      ],
      liveLink: "https://american-institute.vercel.app/",
    },
  };

  return (
    <section id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-head">
          <h2 id="work-title">Selected Work</h2>
          {!isMobile && (
            <button
              className="btn secondary"
              onClick={handleToggle}
              aria-expanded={showAll}
            >
              {showAll ? "Show Less" : "See All"}
            </button>
          )}
        </div>

        <div className="grid projects">
          {/* Project 1 */}
          <motion.article
            className="project card"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <a
              href={projectDetails.kids.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="thumb"
            >
              <img src={Project1} alt="Kids School" />
            </a>
            <div className="tags">
              {projectDetails.kids.tech.map((t, i) => (
                <span key={i} className="chip">
                  {t}
                </span>
              ))}
            </div>
            <h3>{projectDetails.kids.title}</h3>
            <p className="lead">{projectDetails.kids.description}</p>
            <div className="hero-cta">
              <a
                href="#"
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  handleViewMore("kids");
                }}
              >
                View More
              </a>
              <a
                className="btn secondary"
                href={projectDetails.kids.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Project
              </a>
            </div>
          </motion.article>

          {/* Project 2 */}
          <motion.article
            className="project card"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href={projectDetails.percent.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="thumb"
            >
              <img src={Project2} alt="Percentage Calculator" />
            </a>
            <div className="tags">
              {projectDetails.percent.tech.map((t, i) => (
                <span key={i} className="chip">
                  {t}
                </span>
              ))}
            </div>
            <h3>{projectDetails.percent.title}</h3>
            <p className="lead">{projectDetails.percent.description}</p>
            <div className="hero-cta">
              <a
                href="#"
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  handleViewMore("percent");
                }}
              >
                View More
              </a>
              <a
                className="btn secondary"
                href={projectDetails.percent.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Project
              </a>
            </div>
          </motion.article>

          {/* Project 3 */}
          <motion.article
            className="project card"
            style={isMobile && !showAll ? { display: "none" } : undefined}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href={projectDetails.american.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="thumb"
            >
              <img src={Project3} alt="American Institute" />
            </a>
            <div className="tags">
              {projectDetails.american.tech.map((t, i) => (
                <span key={i} className="chip">
                  {t}
                </span>
              ))}
            </div>
            <h3>{projectDetails.american.title}</h3>
            <p className="lead">{projectDetails.american.description}</p>
            <div className="hero-cta">
              <a
                href="#"
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  handleViewMore("american");
                }}
              >
                View More
              </a>
              <a
                className="btn secondary"
                href={projectDetails.american.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Project
              </a>
            </div>
          </motion.article>
        </div>

        {isMobile && (
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <button
              className="btn secondary"
              onClick={handleToggle}
              aria-expanded={showAll}
            >
              {showAll ? "Show Less" : "See All"}
            </button>
          </div>
        )}

        {/* ✅ Modal Section */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="custom-modal-backdrop"
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="custom-modal"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button className="close-btn" onClick={handleClose}>
                  ×
                </button>

                {/* ✅ Image Clickable to Live Project */}
                <a
                  href={projectDetails[activeProject].liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={projectDetails[activeProject].img}
                    alt="Preview"
                    className="modal-img"
                  />
                </a>

                <h3>{projectDetails[activeProject].title}</h3>
                <p>{projectDetails[activeProject].description}</p>

                <h4>🧰 Tools & Technologies:</h4>
                <ul>
                  {projectDetails[activeProject].tech.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>

                <h4>🚀 Features:</h4>
                <ul>
                  {projectDetails[activeProject].features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <h4>🧠 Learnings:</h4>
                <ul>
                  {projectDetails[activeProject].learnings.map((l, i) => (
                    <li key={i}>{l}</li>
                  ))}
                </ul>

                <div
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    gap: "1rem",
                  }}
                >
                  <a
                    href={projectDetails[activeProject].liveLink}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to Live Project
                  </a>
                  <button className="btn secondary" onClick={handleClose}>
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;
