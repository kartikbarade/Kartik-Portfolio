import { motion } from "framer-motion";

import "./Skills.css";

const skillCategories = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, modern and visually engaging user interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },

  {
    title: "Backend Development",
    description:
      "Building reliable backend logic and developing practical application APIs.",
    skills: ["Java", "Node.js", "Express"],
  },

  {
    title: "Data & AI",
    description:
      "Working with data analysis, machine learning and AI-based solutions.",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Power BI",
    ],
  },

  {
    title: "Databases",
    description:
      "Working with structured and NoSQL databases for real-world applications.",
    skills: ["MySQL", "MongoDB"],
  },

  {
    title: "Programming Languages",
    description:
      "Writing clean and practical code across multiple programming languages.",
    skills: ["Java", "Python", "JavaScript"],
  },

  {
    title: "Tools & Technologies",
    description:
      "Using modern development tools to build, manage and deliver projects.",
    skills: ["Git", "GitHub", "VS Code", "Figma"],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        {/* Heading */}
        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">MY SKILLS</span>

          <h2>
            Technologies I
            <span> Work With</span>
          </h2>

          <p>
            A collection of technologies, tools and skills I use to build
            modern, practical and data-driven applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid">

          {skillCategories.map((category, index) => (
            <motion.div
              className="skill-card"
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >

              {/* Card Header */}
              <div className="skill-card-header">
                <span className="card-arrow">▹</span>

                <h3>{category.title}</h3>
              </div>

              {/* Divider */}
              <div className="skill-divider"></div>

              {/* Description */}
              <div className="skill-description">
                {category.description}
              </div>

              {/* Skills */}
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <div
                    className="skill-tag"
                    key={skill}
                  >
                    {skill}
                  </div>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;