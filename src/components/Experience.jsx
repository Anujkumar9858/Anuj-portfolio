import React from "react";
import { motion } from "framer-motion";

function ExperienceItem({ role, company, date, location, details, index }) {
  return (
    <motion.li
      className="t-item card"
      initial={{ opacity: 0, rotateY: index % 2 === 0 ? -90 : 90, z: -100 }}
      whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        boxShadow: "0px 10px 30px rgba(0,0,0,0.15)", // subtle 3D shadow
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        marginBottom: "20px",
      }}
    >
      <div className="t-dot"></div>
      <h3>
        {role} · {company}
      </h3>
      <p className="lead" style={{ margin: ".2rem 0", color: "var(--muted)" }}>
        {date} · {location}
      </p>
      <ul>
        {details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </motion.li>
  );
}

export default function Experience() {
  const experiences = [
    {
      role: "Network Security",
      company: "Cisco",
      date: "June 2024",
      location: "Bhopal, Madhya Pradesh",
      details: [
        "Highly skilled and motivated Network Security intern with a strong understanding of cyber security principles and protocols.",
        "Proficient in conducting vulnerability assessments and implementing effective security measures to protect systems and networks.",
        "Familiar with industry-leading security tools such as firewalls, intrusion detection systems, and encryption methods.",
      ],
    },
    {
      role: "Python",
      company: "LifeTech Software",
      date: "July 2022 — Aug 2022",
      location: "Ranchi, Jharkhand",
      details: [
        "Worked on various projects, including Weather forecasting applications.",
        "Created responsive and visually appealing websites through coding and design techniques.",
      ],
    },
  ];

  return (
    <section id="experience" aria-labelledby="exp-title">
      <div className="container">
        <div className="section-head">
          <h2 id="exp-title">Experience</h2>
        </div>
        <ol className="timeline" style={{ perspective: "1200px" }}>
          {experiences.map((exp, idx) => (
            <ExperienceItem key={idx} {...exp} index={idx} />
          ))}
        </ol>
      </div>
    </section>
  );
}
