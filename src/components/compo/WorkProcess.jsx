import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion"; // ✅ Framer Motion import

const workSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "Understanding your goals, requirements, and target audience",
    icon: "🔍",
  },
  {
    id: 2,
    title: "Planning",
    description: "Creating detailed project roadmap and technical specifications",
    icon: "📊",
  },
  {
    id: 3,
    title: "Development",
    description: "Building your solution with best practices and modern technologies",
    icon: "💻",
  },
  {
    id: 4,
    title: "Launch",
    description: "Testing, deployment, and ongoing support for your success",
    icon: "🚀",
  },
];

// ✅ Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const WorkProcess = () => {
  return (
    <div className="work-process-container">
      {/* ✅ Typed Heading */}
      <h1>
        <ReactTyped
          strings={["My Work Process"]}
          typeSpeed={70}
          backSpeed={50}
          loop={false}
          showCursor={false} // Removes blinking cursor
        />
      </h1>

      <p>
        A proven methodology that ensures quality results and client satisfaction
      </p>

      <div className="work-steps">
        {workSteps.map((step, index) => (
          <motion.div
            className="work-step"
            key={step.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }} // ✅ 3D hover effect
          >
            <div className="icon">{step.icon}</div>
            <h2>{step.title}</h2>
            <p>{step.description}</p>
            <span className="step-number">{`0${step.id}`}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
