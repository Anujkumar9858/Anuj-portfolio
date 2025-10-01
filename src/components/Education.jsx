import React from "react";
import { motion } from "framer-motion";

function EducationItem({ degree, school, start, end, location, details, index }) {
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
        boxShadow: "0px 10px 30px rgba(0,0,0,0.15)", 
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        marginBottom: "20px",
        
      }}
    >
      <div className="t-dot"></div>
      <h3>
        {degree} · {school}
      </h3>
      <p
        className="lead"
        style={{ margin: ".2rem 0", color: "var(--muted)" }}
      >
        {start} — {end} · {location}
      </p>
      <ul>
        {details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </motion.li>
  );
}

export default function EducationTimeline() {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      school: "Prestige Institute of Management and Research",
      start: "2023",
      end: "2026",
      location: "Bhopal, Madhya Pradesh",
      details: [
        "Branch: Computer Science and Engineering",
        "CGPA: Appearing...",
        "Thesis on scalable graph processing",
      ],
    },
    {
      degree: "Diploma",
      school: "Government Polytechnic Khutri, Bokaro",
      start: "2020",
      end: "2023",
      location: "Bokaro, Jharkhand",
      details: ["Branch: Computer Science", "Scored 69.5%"],
    },
    {
      degree: "MATRIX (10th Grade)",
      school: "Sita High School, Hariharganj",
      start: "2019",
      end: "2020",
      location: "Jharkhand",
      details: ["Scored 81%"],
    },
  ];

  return (
    <section id="education" aria-labelledby="edu-title">
      <div className="container">
        <div className="section-head">
          <h2 id="edu-title">Education</h2>
        </div>
        <ol className="timeline" style={{ perspective: "1200px" }}>
          {education.map((edu, idx) => (
            <EducationItem key={idx} {...edu} index={idx} />
          ))}
        </ol>
      </div>
    </section>
  );
}
