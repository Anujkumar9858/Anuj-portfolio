import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { Search, NotebookPen, Code2, Rocket } from "lucide-react";
import "./WorkProcess.css";

const workSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "Understanding your goals, requirements, and target audience to build a solid foundation.",
    icon: <Search size={32} />,
  },
  {
    id: 2,
    title: "Planning",
    description: "Creating detailed project roadmaps, wireframes, and technical specifications.",
    icon: <NotebookPen size={32} />,
  },
  {
    id: 3,
    title: "Development",
    description: "Building your solution with best practices, modern code, and scalable architecture.",
    icon: <Code2 size={32} />,
  },
  {
    id: 4,
    title: "Launch",
    description: "Rigorous testing, deployment, and ongoing support to ensure your long-term success.",
    icon: <Rocket size={32} />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
};

const WorkProcess = () => {
  return (
    <section className="work-process-section">
      <div className="container">
        <div className="work-process-header">
          <h2>
            <ReactTyped
              strings={["My Work Process"]}
              typeSpeed={70}
              backSpeed={50}
              loop={false}
              showCursor={false}
            />
          </h2>
          <p>
            A proven methodology that ensures quality results and client satisfaction
          </p>
        </div>

        <motion.div
          className="process-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {workSteps.map((step, index) => (
            <motion.div
              className="process-card"
              key={step.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="step-number">{`0${step.id}`}</div>
              <div className="process-icon-wrapper">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkProcess;
