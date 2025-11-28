import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Code2, ShoppingCart, Zap, Wrench, X, CheckCircle2 } from "lucide-react";
import "./services.css";

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const handleViewMore = (service) => setActiveService(service);
  const handleClose = () => setActiveService(null);

  const serviceDetails = {
    web: {
      icon: <Code2 size={48} />,
      title: "Web Development",
      subtitle: "Full-Stack Solutions",
      description:
        "End-to-end modern web development using React, Node.js, Express, MongoDB, and cloud deployment.",
      features: [
        "Responsive & dynamic web applications",
        "API integration & backend development",
        "Database design & authentication setup",
        "Real-time deployment with CI/CD pipelines",
      ],
      tools: ["React.js", "Node.js", "MongoDB", "Vercel", "GitHub"],
    },
    ecommerce: {
      icon: <ShoppingCart size={48} />,
      title: "E-commerce Solutions",
      subtitle: "Online Store Development",
      description:
        "Create powerful, secure, and easy-to-manage online stores that drive sales and conversions.",
      features: [
        "Payment gateway integration",
        "Product & inventory management",
        "Cart & checkout functionality",
        "Admin dashboard for analytics",
      ],
      tools: ["React", "Firebase", "Stripe API", "Bootstrap"],
    },
    optimize: {
      icon: <Zap size={48} />,
      title: "Web Optimization",
      subtitle: "Performance & SEO",
      description:
        "Enhance your website’s loading speed, SEO ranking, and UX for maximum engagement.",
      features: [
        "Image & code optimization",
        "Lazy loading implementation",
        "SEO audit & keyword integration",
        "PageSpeed Insights improvement",
      ],
      tools: ["Lighthouse", "React Profiler", "Google Analytics"],
    },
    maintenance: {
      icon: <Wrench size={48} />,
      title: "Website Maintenance",
      subtitle: "Ongoing Support",
      description:
        "Keep your site secure, bug-free, and up-to-date with regular maintenance and version control.",
      features: [
        "Security monitoring & updates",
        "Bug fixing & feature improvements",
        "Hosting & backup management",
        "Performance reports",
      ],
      tools: ["GitHub", "Netlify", "Vercel", "Firebase Hosting"],
    },
  };

  return (
    <>
      <div className="services-container">
        <div className="section-head center" style={{ flexDirection: "column", textAlign: "center", marginBottom: "4rem" }}>
          <h1 className="services-header" style={{ marginBottom: "0.5rem" }}>
            <ReactTyped
              strings={["What I Can Do For You"]}
              typeSpeed={50}
              backSpeed={30}
              loop={false}
              showCursor={false}
            />
          </h1>
          <p className="services-subheader" style={{ maxWidth: "700px", margin: "0 auto" }}>
            From concept to deployment, I deliver end-to-end web solutions to
            empower your business digitally.
          </p>
        </div>

        <div className="services-grid">
          {Object.entries(serviceDetails).map(([key, service], index) => (
            <motion.div
              key={key}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h2>{service.title}</h2>
              <h3 className="service-card-subtitle">
                {service.subtitle}
              </h3>
              <p>
                {service.description}
              </p>
              <button
                className="service-btn"
                onClick={() => handleViewMore(key)}
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Modal Section */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            className="service-modal-backdrop"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="service-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button className="close-btn" onClick={handleClose}>
                <X size={24} />
              </button>

              <div className="modal-header-content">
                <div className="modal-icon-large">{serviceDetails[activeService].icon}</div>
                <div>
                  <h2>{serviceDetails[activeService].title}</h2>
                  <p className="modal-subtitle-text">{serviceDetails[activeService].subtitle}</p>
                </div>
              </div>

              <div className="modal-body-content">
                <p className="modal-description-text">{serviceDetails[activeService].description}</p>

                <div className="modal-section">
                  <h4><CheckCircle2 size={20} className="inline-icon" /> Key Features</h4>
                  <ul className="feature-list">
                    {serviceDetails[activeService].features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h4>🧰 Tools & Technologies</h4>
                  <div className="tools-grid">
                    {serviceDetails[activeService].tools.map((t, i) => (
                      <span key={i} className="tool-chip">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer-action">
                <button className="btn secondary" onClick={handleClose}>
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Services;
