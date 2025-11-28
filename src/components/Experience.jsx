import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import "./Experience.css";

function ExperienceItem({ role, company, date, location, details, index }) {
  return (
    <motion.div
      className="experience-card"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="timeline-dot"></div>

      <div className="exp-header">
        <div className="exp-title">
          <h3><Briefcase size={24} className="text-brand" /> {role}</h3>
          <span className="exp-company">{company}</span>
        </div>

        <div className="exp-meta">
          <div className="exp-date">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <div className="exp-location">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <ul className="exp-details">
        {details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Experience() {
  const experiences = [
    {
      role: "Network Security Intern",
      company: "Cisco",
      date: "June 2024",
      location: "Bhopal, Madhya Pradesh",
      details: [
        "Conducted vulnerability assessments and implemented security protocols.",
        "Analyzed network traffic to detect and mitigate potential threats.",
        "Gained hands-on experience with firewalls, IDS/IPS, and encryption standards.",
      ],
    },
    {
      role: "Python Developer Intern",
      company: "LifeTech Software",
      date: "July 2022 — Aug 2022",
      location: "Ranchi, Jharkhand",
      details: [
        "Developed a weather forecasting application using Python and APIs.",
        "Collaborated on responsive web design projects using modern frontend techniques.",
        "Optimized code for better performance and maintainability.",
      ],
    },
  ];

  return (
    <section id="experience" aria-labelledby="exp-title" className="experience-section">
      <div className="container">
        <div className="experience-header">
          <h2 id="exp-title">
            <ReactTyped
              strings={["Professional Experience", "Work History"]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={2000}
              loop
              showCursor={false}
            />
          </h2>
          <p>
            My professional journey and the hands-on experience I've gained in the industry.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <ExperienceItem key={idx} {...exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
