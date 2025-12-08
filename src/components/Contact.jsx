import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Send, Mail, MapPin, Github, Linkedin, Instagram, User, MessageSquare } from "lucide-react";
import "./Contact.css";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData(formRef.current);
    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const message = data.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setStatus("Please fill out all fields.");
      setIsSubmitting(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("Enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    // EmailJS Service
    // REPLACE 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY' with your actual EmailJS values
    // You can find these in your EmailJS dashboard: https://dashboard.emailjs.com/admin
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Thanks! Your message has been sent successfully.");

          // Save to local storage as backup
          const messages = JSON.parse(localStorage.getItem("messages") || "[]");
          messages.push({ sender: name, email, content: message, date: new Date().toISOString() });
          localStorage.setItem("messages", JSON.stringify(messages));

          formRef.current.reset();
          setTimeout(() => setStatus(""), 4000);
          setIsSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 id="contact-title">
            <ReactTyped
              strings={["Get In Touch", "Let's Connect", "Hire Me"]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={2000}
              loop
              showCursor={false}
            />
          </h2>
          <p>
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-container">
          {/* Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <form ref={formRef} className="contact-form-card" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <div className="input-wrapper">
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>

              {status && (
                <div className={`status-msg ${status.includes("Failed") || status.includes("Please") || status.includes("valid") ? "error" : "success"}`}>
                  {status}
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            className="contact-info-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="info-item">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <div className="info-content">
                <h4>Email Me</h4>
                <a href="mailto:anujkushwaha9858@gmail.com">anujkushwaha9858@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div className="info-content">
                <h4>Location</h4>
                <p>Bhopal, Madhya Pradesh, India</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <User size={24} />
              </div>
              <div className="info-content">
                <h4>Social Profiles</h4>
                <div className="social-links-grid">
                  <a href="https://github.com/Anujkumar9858" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/anujkumar9858/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://instagram.com/anuj_kushwaha_98" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
