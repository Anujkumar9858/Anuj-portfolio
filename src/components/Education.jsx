import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import "./Education.css";

function EducationItem({ degree, school, start, end, location, details, index }) {
  return (
    <motion.div
      className="education-card"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="timeline-dot"></div>

      <div className="edu-header">
        <div className="edu-title">
          <h3><GraduationCap size={24} className="text-brand" /> {degree}</h3>
          <span className="edu-institution">{school}</span>
        </div>

        <div className="edu-meta">
          <div className="edu-date">
            <Calendar size={14} />
            <span>{start} — {end}</span>
          </div>
          <div className="edu-location">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <ul className="edu-details">
        {details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </motion.div>
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
        "Specialization: Computer Science and Engineering",
        "Current Status: Appearing",
        "Focus: Scalable Systems & Full Stack Development",
      ],
    },
    {
      degree: "Diploma in Computer Science",
      school: "Government Polytechnic Khutri, Bokaro",
      start: "2020",
      end: "2023",
      location: "Bokaro, Jharkhand",
      details: [
        "Branch: Computer Science",
        "Grade: 69.5%",
        "Key Projects: Library Management System"
      ],
    },
    {
      degree: "High School (10th Grade)",
      school: "Sita High School, Hariharganj",
      start: "2019",
      end: "2020",
      location: "Jharkhand",
      details: [
        "Board: State Board",
        "Grade: 81%",
        "Focus: Mathematics & Science"
      ],
    },
  ];

  return (
    <section id="education" aria-labelledby="edu-title" className="education-section">
      <div className="container">
        <div className="education-header">
          <h2 id="edu-title">
            <ReactTyped
              strings={["My Education Journey", "Academic Background"]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={2000}
              loop
              showCursor={false}
            />
          </h2>
          <p>
            My academic path has been a journey of continuous learning and growth in the field of Computer Science.
          </p>
        </div>

        <div className="timeline">
          {education.map((edu, idx) => (
            <EducationItem key={idx} {...edu} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
