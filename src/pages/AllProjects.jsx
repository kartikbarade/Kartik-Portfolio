import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import "./AllProjects.css";

const categories = [
  "All",
  "Websites",
  "UI / UX",
  "Data & AI",
];

const projects = [
  {
    title: "Student Performance Prediction",
    category: "Data & AI",
    image: "/projects/student-performance.png",
    description:
      "Machine learning project to analyze student performance and predict academic outcomes.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
    ],
    github:
      "https://github.com/kartikbarade/Student-Data-Analysis-Model",
    live: "#",
  },

  {
    title: "Power BI Sales Dashboard",
    category: "Data & AI",
    image: "/projects/powerbi-sales-dashboard.png",
    description:
      "Interactive dashboard analyzing sales, profit, quantity, customer segments and regional performance.",
    tech: [
      "Power BI",
      "DAX",
      "Data Visualization",
      "Data Analysis",
    ],
    github:
      "https://github.com/kartikbarade/kartikbarade-PowerBI-Sales-Dashboard",
    live: "#",
  },

  {
    title: "Plant App Design",
    category: "UI / UX",
    image: "/projects/plant-app-design.png",
    description:
      "A clean and modern mobile plant store interface designed with a smooth shopping experience.",
    tech: [
      "Figma",
      "UI/UX",
      "Mobile Design",
      "Wireframing",
      "Excalidraw",
    ],
    github:
      "https://github.com/kartikbarade/PlantShop-Figma-Design",
    live: "#",
  },
];

function AllProjects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section className="all-projects-page">

      {/* ================= HEADER ================= */}

      <motion.div
        className="all-projects-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <a href="/" className="back-home">
          <FaArrowLeft />
          Back to Portfolio
        </a>

        <span className="section-tag">
          MY WORK
        </span>

        <h1>
          All <span>Projects</span>
        </h1>

        <p>
          Explore my projects across web development,
          UI/UX design, data analytics and AI/ML.
        </p>
      </motion.div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="all-projects-layout">

        {/* ================= SIDEBAR ================= */}

        <aside className="projects-sidebar">

          <h3>Categories</h3>

          <div className="category-list">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "category-btn active"
                    : "category-btn"
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                <span className="category-dot"></span>
                {category}
              </button>
            ))}
          </div>

        </aside>

        {/* ================= PROJECTS ================= */}

        <main className="all-projects-content">

          <div className="projects-result-header">
            <div>
              <span>Showing</span>
              <h2>{activeCategory}</h2>
            </div>

            <span className="project-count">
              {filteredProjects.length} Projects
            </span>
          </div>

          <div className="all-projects-grid">

            {filteredProjects.map((project, index) => (

              <motion.article
                className="all-project-card"
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
              >

                {/* Image */}

                <div className="all-project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <span className="all-project-category">
                    {project.category}
                  </span>

                </div>

                {/* Content */}

                <div className="all-project-content">

                  <h3>{project.title}</h3>

                  <p>
                    {project.description}
                  </p>

                  {/* Tech */}

                  <div className="all-project-tech">

                    {project.tech.map((tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    ))}

                  </div>

                  {/* Links */}

                  <div className="all-project-links">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                      <FaExternalLinkAlt />
                    </a>

                  </div>

                </div>

              </motion.article>

            ))}

          </div>

        </main>

      </div>

    </section>
  );
}

export default AllProjects;