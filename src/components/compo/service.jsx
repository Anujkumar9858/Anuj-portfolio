import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./services.css";

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const handleViewMore = (service) => setActiveService(service);
  const handleClose = () => setActiveService(null);

  const serviceDetails = {
    web: {
      icon: "💻",
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
      icon: "🛒",
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
      icon: "⚡",
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
      icon: "🛠️",
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
        <h1 className="services-header">What I Can Do For You</h1>
        <p className="services-subheader">
          From concept to deployment, I deliver end-to-end web solutions to
          empower your business digitally.
        </p>

        <div className="services-grid">
          {/* Service 1 */}
          <motion.div
            className="service-card"
            whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <div className="service-icon">💻</div>
            <h2>Web Development</h2>
            <h3 style={{ color: "#a74a4a", fontSize: "20px" }}>
              Full-Stack Solutions
            </h3>
            <p>
              Build modern, scalable web applications using cutting-edge
              technologies like React, Node.js, and cloud platforms.
            </p>
            <p
              className="price"
              id="money"
              onClick={() => handleViewMore("web")}
            >
              More Details
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="service-card"
            whileHover={{ rotateY: -10, rotateX: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <div className="service-icon">🛒</div>
            <h2>E-commerce Solution</h2>
            <h3 style={{ color: "#a74a4a", fontSize: "20px" }}>
              Online Store Development
            </h3>
            <p>
              Build powerful e-commerce platforms with secure payment
              processing, inventory management, and analytics.
            </p>
            <p
              className="price"
              id="money"
              onClick={() => handleViewMore("ecommerce")}
            >
              More Details
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            className="service-card"
            whileHover={{ rotateY: 8, rotateX: -5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <div className="service-icon">⚡</div>
            <h2>Web Optimization</h2>
            <h3 style={{ color: "#a74a4a", fontSize: "20px" }}>
              Performance & SEO
            </h3>
            <p>
              Optimize your website for speed, search engines, and user
              experience to maximize conversions and traffic.
            </p>
            <p
              className="price"
              id="money"
              onClick={() => handleViewMore("optimize")}
              style={{ marginTop: "39px" }}
            >
              More Details
            </p>
          </motion.div>

          {/* Service 4 */}
          <motion.div
            className="service-card"
            whileHover={{ rotateY: -8, rotateX: -5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <div className="service-icon">🛠️</div>
            <h2>Website Maintenance</h2>
            <h3 style={{ color: "#a74a4a", fontSize: "20px" }}>
              Ongoing Support
            </h3>
            <p>
              Keep your website secure, updated, and running smoothly with
              regular maintenance and technical support.
            </p>
            <p
              className="price"
              id="money"
              onClick={() => handleViewMore("maintenance")}
              style={{ marginTop: "37px" }}
            >
              More Details
            </p>
          </motion.div>
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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button className="close-btn" onClick={handleClose}>
                ×
              </button>

              <div className="modal-icon">{serviceDetails[activeService].icon}</div>
              <h2>{serviceDetails[activeService].title}</h2>
              <h4>{serviceDetails[activeService].subtitle}</h4>
              <p>{serviceDetails[activeService].description}</p>

              <h4>🚀 Key Features:</h4>
              <ul>
                {serviceDetails[activeService].features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <h4>🧰 Tools & Technologies:</h4>
              <ul>
                {serviceDetails[activeService].tools.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "1.5rem",
                }}
              >
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
