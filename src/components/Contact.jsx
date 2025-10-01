import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const message = data.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setStatus("Please fill out all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("Enter a valid email address.");
      return;
    }

    try {
      const messages = JSON.parse(localStorage.getItem("messages") || "[]");
      messages.push({ sender: name, email, content: message, date: new Date().toISOString() });
      localStorage.setItem("messages", JSON.stringify(messages));
      setStatus("Thanks! Your message has been successfully sent.");
      form.reset();
      setTimeout(() => setStatus(""), 4000);
    } catch {
      setStatus("Failed to save message.");
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-head">
          <h2 id="contact-title">Contact</h2>
        </div>

        <div className="grid contact-grid">
          {/* Contact Form */}
          <motion.form
            className="card"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotateY: 5, boxShadow: "0px 15px 25px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.98, rotateY: -5 }}
          >
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Enter Your Name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="Enter Your Email" required />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" placeholder="Tell me about your project..." required />
            </label>
            <div className="hero-cta">
              <motion.button
                className="btn"
                type="submit"
                whileHover={{ scale: 1.1, rotateZ: 2 }}
                whileTap={{ scale: 0.95, rotateZ: -2 }}
              >
                Send Message
              </motion.button>
              {status && <span className="chip">{status}</span>}
            </div>
          </motion.form>

          {/* Sidebar */}
          <motion.aside
            className="card"
            initial={{ opacity: 0, x: 80, rotateY: 20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.05, rotateX: 5, boxShadow: "0px 15px 25px rgba(0,0,0,0.2)" }}
          >
            <p><strong>Email:</strong> <a href="mailto:anujkushwaha9858@gmail.com">anujkushwaha9858@gmail.com</a></p>
            <p><strong>Location:</strong> Bhopal, Madhya Pradesh</p>
            <p><strong>Social:</strong></p>
            <p className="hero-cta" style={{ marginTop: ".4rem" }}>
              <motion.a className="btn secondary" href="https://github.com/Anujkumar9858" whileHover={{ scale: 1.1 }}>GitHub</motion.a>
              <motion.a className="btn secondary" href="https://www.linkedin.com/in/anujkumar9858/" whileHover={{ scale: 1.1 }}>LinkedIn</motion.a>
              <motion.a className="btn secondary" href="https://instagram.com/anuj_kushwaha_98" whileHover={{ scale: 1.1 }}>Instagram</motion.a>
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

export default Contact;
