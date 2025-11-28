import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactTyped } from "react-typed";
import { ExternalLink, Github, X, ChevronRight, Layers, Code, Lightbulb } from "lucide-react";
import Project1 from "../assets/Image/Project1.png";
import Project2 from "../assets/Image/Project2.png";
import Project3 from "../assets/Image/Project3.png";
import "./Projects.css";

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
    githubLink: "#", // Add actual GitHub link if available
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
    githubLink: "#",
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
    githubLink: "#",
  },
};

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

  return (
    <section id="work" aria-labelledby="work-title" className="projects-section">
      <div className="container">
        <div className="section-head center" style={{ flexDirection: "column", textAlign: "center", marginBottom: "3rem" }}>
          <h2 id="work-title" style={{ marginBottom: "0.5rem" }}>
            <ReactTyped
              strings={["Selected Work"]}
              typeSpeed={50}
              backSpeed={30}
              loop={false}
              showCursor={false}
            />
          </h2>
          <p className="lead" style={{ maxWidth: "600px", margin: "0 auto" }}>
            A showcase of my recent projects, featuring responsive designs and interactive user experiences.
          </p>
        </div>

        <div className="projects-grid">
          {Object.entries(projectDetails).map(([key, project], index) => (
            <motion.article
              key={key}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={isMobile && !showAll && index > 1 ? { display: "none" } : undefined}
            >
              <div className="project-thumb">
                <img src={project.img} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <button
                    className="btn icon-btn"
                    onClick={() => handleViewMore(key)}
                    aria-label="View Details"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>

              <div className="project-content">
                <div className="tags">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="chip">{t}</span>
                  ))}
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-actions">
                  <button
                    className="btn-text"
                    onClick={() => handleViewMore(key)}
                  >
                    View Case Study
                  </button>
                  <div className="project-links">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    {/* <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                      aria-label="GitHub Repo"
                    >
                      <Github size={20} />
                    </a> */}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {isMobile && (
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <button
              className="btn secondary"
              onClick={handleToggle}
              aria-expanded={showAll}
            >
              {showAll ? "Show Less" : "See All Projects"}
            </button>
          </div>
        )}

        {/* ✅ Modal Section */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="project-modal-backdrop"
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="project-modal"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
              >
                <button className="close-btn" onClick={handleClose}>
                  <X size={24} />
                </button>

                <div className="modal-content-scroll">
                  <div className="modal-image-container">
                    <img
                      src={projectDetails[activeProject].img}
                      alt={projectDetails[activeProject].title}
                      className="modal-hero-img"
                    />
                    <div className="modal-overlay-actions">
                      <a
                        href={projectDetails[activeProject].liveLink}
                        className="btn primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  <div className="modal-details">
                    <div className="modal-header">
                      <h2>{projectDetails[activeProject].title}</h2>
                      <div className="tags">
                        {projectDetails[activeProject].tech.map((t, i) => (
                          <span key={i} className="chip">{t}</span>
                        ))}
                      </div>
                    </div>

                    <p className="modal-description">{projectDetails[activeProject].description}</p>

                    <div className="modal-grid">
                      <div className="modal-section">
                        <h4><Layers size={18} /> Key Features</h4>
                        <ul>
                          {projectDetails[activeProject].features.map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="modal-section">
                        <h4><Code size={18} /> Tools Used</h4>
                        <div className="tags small">
                          {projectDetails[activeProject].tools.map((t, i) => (
                            <span key={i} className="chip small">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="modal-section full-width">
                      <h4><Lightbulb size={18} /> Key Learnings</h4>
                      <ul>
                        {projectDetails[activeProject].learnings.map((l, i) => (
                          <li key={i}>{l}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
