import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import {
  Code2,
  Atom,
  Server,
  Palette,
  Layout,
  CheckCircle2,
  Cloud,
  Database,
  Terminal,
  Smartphone,
  Globe,
  Cpu
} from "lucide-react";
import "./Skills.css";

const skillsData = [
  { name: "JavaScript", icon: <Code2 size={32} />, level: "Advanced", category: "Frontend" },
  { name: "React.js", icon: <Atom size={32} />, level: "Advanced", category: "Frontend" },
  { name: "Node.js", icon: <Server size={32} />, level: "Advanced", category: "Backend" },
  { name: "CSS / Tailwind", icon: <Palette size={32} />, level: "Advanced", category: "Frontend" },
  { name: "UX / UI Design", icon: <Layout size={32} />, level: "Advanced", category: "Design" },
  { name: "Mobile Dev", icon: <Smartphone size={32} />, level: "Intermediate", category: "Mobile" },
  { name: "Database (SQL/NoSQL)", icon: <Database size={32} />, level: "Intermediate", category: "Backend" },
  { name: "Cloud (AWS/Vercel)", icon: <Cloud size={32} />, level: "Intermediate", category: "DevOps" },
  { name: "Testing (Jest)", icon: <CheckCircle2 size={32} />, level: "Intermediate", category: "Testing" },
  { name: "Git & DevOps", icon: <Terminal size={32} />, level: "Advanced", category: "DevOps" },
  { name: "Performance", icon: <Cpu size={32} />, level: "Advanced", category: "Optimization" },
  { name: "SEO", icon: <Globe size={32} />, level: "Intermediate", category: "Optimization" },
];

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    },
  };

  return (
    <section id="skills" aria-labelledby="skills-title" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <h2 id="skills-title">
            <ReactTyped
              strings={["My Tech Stack", "Core Skills", "What I Do Best"]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={2000}
              loop
              showCursor={false}
            />
          </h2>
          <p>
            A curated list of technologies and tools I use to build performant, scalable, and beautiful web applications.
          </p>
        </div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <span className="skill-level">{skill.level}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
