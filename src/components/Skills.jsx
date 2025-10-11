import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

function Skills() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="skills" aria-labelledby="skills-title" className="py-12">
      <div className="container">
        <div className="section-head text-center mb-10">
          <h2 id="skills-title" className="text-3xl font-bold">
            <ReactTyped
              strings={["My Skills", "Tech Stack", "What I Do Best"]}
              typeSpeed={60}
              backSpeed={40}
              backDelay={2000}
              loop
            />
          </h2>
        </div>

        {/* Animated Skills Grid */}
        <motion.div
          className="grid skills gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Skill Items */}
          {[
            { name: "JavaScript ", level: "Advanced" },
            { name: "React ", level: "Advanced" },
            { name: "Node / Express", level: "Advanced" },
            { name: "CSS / Tailwind / Bootstrap", level: "Advanced" },
            { name: "UX / Accessibility", level: "Advanced" },
            { name: "Testing ", level: "Intermediate" },
            { name: "Cloud (Vercel, AWS)", level: "Intermediate" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="skill p-4 border border-gray-300 rounded-2xl shadow-md bg-white hover:shadow-xl transition-transform hover:-translate-y-2 cursor-pointer"
              variants={itemVariants}
            >
              <strong className="block text-lg">{skill.name}</strong>
              <span className="chip mt-2 inline-block bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
                {skill.level}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
