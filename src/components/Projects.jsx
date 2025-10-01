import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Project1 from '../assets/Image/Project1.png';
import Project2 from '../assets/Image/Project2.png';
import Project3 from '../assets/Image/Project3.png';

function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const [showMoreP1, setShowMoreP1] = useState(false);
  const [showMoreP2, setShowMoreP2] = useState(false);
  const [showMoreP3, setShowMoreP3] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 680px)');
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener?.('change', apply);
    return () => mq.removeEventListener?.('change', apply);
  }, []);

  const handleToggle = (e) => {
    e.preventDefault();
    setShowAll((v) => !v);
  };

  return (
    <section id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-head">
          <h2 id="work-title">Selected Work</h2>
          {/* ✅ Upar wale button ko sirf desktop ke liye rakho */}
          {!isMobile && (
            <button className="btn secondary" onClick={handleToggle} aria-expanded={showAll}>
              {showAll ? 'Show Less' : 'See All'}
            </button>
          )}
        </div>

        <div className="grid projects">
          {/* Project 1 */}
          <motion.article 
            className="project card"
            aria-labelledby="p1-title"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="thumb">
              <img loading="lazy" src={Project1} alt="Kids School Website Preview" />
            </div>
            <div className="tags">
              <span className="chip">React.js</span>
              <span className="chip">CSS</span>
              <span className="chip">Bootstrap</span>
              <span className="chip">Framer Motion</span>
            </div>
            <h3 id="p1-title">Kids School Website</h3>
            <p className="lead">
              This Kids School website is a vibrant, responsive platform with playful yet professional design.  
              {showMoreP1 && (
                <>
                  <br />
                  It features smooth animations, interactive sections, and a user-friendly layout tailored for children, parents, and staff. 
                  Built with React.js, CSS, Bootstrap, and Framer Motion, it highlights modern frontend practices with components like a dynamic Hero section, programs showcase, teacher profiles, gallery, and admission form integration.
                </>
              )}
            </p>
            <div className="hero-cta">
              <a href="#" className="btn" onClick={(e) => { e.preventDefault(); setShowMoreP1(!showMoreP1); }}>
                {showMoreP1 ? "Show Less" : "View More"}
              </a>
              <a className="btn secondary" href="https://kid-school-one.vercel.app/" target="_blank" rel="noopener noreferrer">
                Go to Project
              </a>
            </div>
          </motion.article>

          {/* Project 2 */}
          <motion.article 
            className="project card"
            aria-labelledby="p2-title"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="thumb">
              <img loading="lazy" src={Project2} alt="Percentage Calculator Website Preview" />
            </div>
            <div className="tags">
              <span className="chip">React.js</span>
              <span className="chip">CSS</span>
              <span className="chip">JavaScript</span>
            </div>
            <h3 id="p2-title">Percentage Calculator</h3>
            <p className="lead">
              A simple yet powerful web application to calculate percentages quickly and accurately.  
              {showMoreP2 && (
                <>
                  <br />
                  Developed using React.js, CSS, and JavaScript, this tool provides a clean and responsive interface for students, teachers, and professionals. 
                  It allows users to calculate percentages, percentage increase/decrease, and related operations in real-time. 
                  With its lightweight design and intuitive controls, the Percentage Calculator is optimized for both desktop and mobile users.
                </>
              )}
            </p>
            <div className="hero-cta">
              <a href="#" className="btn" onClick={(e) => { e.preventDefault(); setShowMoreP2(!showMoreP2); }}>
                {showMoreP2 ? "Show Less" : "View More"}
              </a>
              <a className="btn secondary" href="https://percentage-calculator-theta.vercel.app/" target="_blank" rel="noopener noreferrer">
                Go to Project
              </a>
            </div>
          </motion.article>

          {/* Project 3 */}
          <motion.article 
            className="project card"
            aria-labelledby="p3-title"
            style={isMobile && !showAll ? { display: 'none' } : undefined}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="thumb">
              <img loading="lazy" src={Project3} alt="American Institute Website Preview" />
            </div>
            <div className="tags">
              <span className="chip">React.js</span>
              <span className="chip">CSS</span>
              <span className="chip">Bootstrap</span>
              <span className="chip">Framer Motion</span>
            </div>
            <h3 id="p3-title">American Institute Website</h3>
            <p className="lead">
              A modern and professional website built for an educational institute.  
              {showMoreP3 && (
                <>
                  <br />
                  Developed using React.js, CSS, Bootstrap, and Framer Motion animations, the platform offers a clean, responsive, and engaging interface. 
                  It includes sections like Hero, About, Courses, Faculty, Gallery, and Contact, making it easy for students and visitors to explore the institute's offerings. 
                  Smooth animations and an optimized layout enhance user experience across all devices.
                </>
              )}
            </p>
            <div className="hero-cta">
              <a href="#" className="btn" onClick={(e) => { e.preventDefault(); setShowMoreP3(!showMoreP3); }}>
                {showMoreP3 ? "Show Less" : "View More"}
              </a>
              <a className="btn secondary" href="https://american-institute.vercel.app/" target="_blank" rel="noopener noreferrer">
                Go to Project
              </a>
            </div>
          </motion.article>
        </div>

        {/* ✅ Mobile ke liye niche button */}
        {isMobile && (
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <button className="btn secondary" onClick={handleToggle} aria-expanded={showAll}>
              {showAll ? 'Show Less' : 'See All'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
