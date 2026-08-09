import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
    FaArrowLeft,
    FaExternalLinkAlt,
    FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import "./ProjectsPage.css";

const categories = [
  "All",
  "Websites",
  "UI/UX",
  "Data & AI",
];

const projects = [
  {
    id: "student-performance",
    title: "Student Performance Prediction",
    category: "Data & AI",
    image: "/projects/student-performance.png",
    description:
      "Analyzed student performance data and built classification models to predict academic outcomes.",
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
    id: "powerbi-sales-dashboard",
    title: "Power BI Sales Dashboard",
    category: "Data & AI",
    image: "/projects/powerbi-sales-dashboard.png",
    description:
      "An interactive Power BI dashboard analyzing revenue, profit, quantity, sales trends, regional performance, customer segments and product categories.",
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
    id: "plant-app-design",
    title: "Plant App Design",
    category: "UI/UX",
    image: "/projects/plant-app-design.png",
    description:
      "A clean and user-friendly mobile plant store interface designed with a modern shopping experience.",
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

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <main className="projects-page">

      {/* =========================
          BACK BUTTON
      ========================= */}

      <Link to="/" className="projects-back-btn">
        <FaArrowLeft />
        <span>Back to Portfolio</span>
      </Link>

      {/* =========================
          HEADER
      ========================= */}

      <section className="projects-page-header">

        <motion.div
          className="projects-page-heading"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="projects-page-tag">
            MY WORK
          </span>

          <h1>
            All
            <span> Projects</span>
          </h1>

          <p>
            Explore my projects across web development,
            UI/UX design, data analytics and artificial
            intelligence.
          </p>
        </motion.div>

      </section>

      {/* =========================
          MAIN PROJECT AREA
      ========================= */}

      <section className="projects-page-content">

        {/* =========================
            SIDEBAR
        ========================= */}

        <aside className="projects-sidebar">

          <div className="sidebar-title">
            <span>EXPLORE</span>
            <h2>Categories</h2>
          </div>

          <div className="category-list">

            {categories.map((category) => (
              <button
                key={category}
                className={`category-item ${
                  activeCategory === category
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                <span>{category}</span>

                <span className="category-arrow">
                  →
                </span>
              </button>
            ))}

          </div>

          <div className="sidebar-line"></div>

          <p className="sidebar-info">
            Select a category to explore projects
            related to that area.
          </p>

        </aside>

        {/* =========================
            PROJECTS
        ========================= */}

        <div className="projects-list">

          <div className="projects-list-top">
            <div>
              <span className="projects-count-label">
                SHOWING
              </span>

              <h2>
                {activeCategory}
              </h2>
            </div>

            <span className="projects-count">
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1
                ? "Project"
                : "Projects"}
            </span>
          </div>

          <AnimatePresence mode="popLayout">

            <div className="projects-page-grid">

              {filteredProjects.map(
                (project, index) => (

                  <motion.article
                    key={project.id}
                    className="projects-page-card"
                    initial={{
                      opacity: 0,
                      y: 35,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -20,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -8,
                    }}
                  >

                    {/* IMAGE */}

                    <div className="projects-page-image">

                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                        />
                      ) : (
                        <div className="image-placeholder">
                          Project
                        </div>
                      )}

                      <div className="image-overlay">
                        <Link
                          to={`/projects/${project.id}`}
                          className="view-project-btn"
                        >
                          View Project
                          <FaExternalLinkAlt />
                        </Link>
                      </div>

                    </div>

                    {/* CARD CONTENT */}

                    <div className="projects-page-card-content">

                      <div className="card-meta">

                        <span className="card-number">
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <span className="card-category">
                          {project.category}
                        </span>

                      </div>

                      <h3>
                        {project.title}
                      </h3>

                      <p>
                        {project.description}
                      </p>

                      {/* TECH */}

                      <div className="projects-page-tech">

                        {project.tech
                          .slice(0, 4)
                          .map((tech) => (
                            <span key={tech}>
                              {tech}
                            </span>
                          ))}

                        {project.tech.length > 4 && (
                          <span>
                            +{project.tech.length - 4}
                          </span>
                        )}

                      </div>

                      {/* LINKS */}

                      <div className="card-bottom">

                        <Link
                          to={`/projects/${project.id}`}
                          className="details-link"
                        >
                          View Details
                          <span>→</span>
                        </Link>

                        <div className="card-links">

                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                          >
                            <FaGithub />
                          </a>

                          {project.live !== "#" && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Live Project"
                            >
                              <FaExternalLinkAlt />
                            </a>
                          )}

                        </div>

                      </div>

                    </div>

                  </motion.article>

                )
              )}

            </div>

          </AnimatePresence>

          {/* EMPTY STATE */}

          {filteredProjects.length === 0 && (
            <motion.div
              className="projects-empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3>No Projects Yet</h3>
              <p>
                Projects for this category will be
                added soon.
              </p>
            </motion.div>
          )}

        </div>

      </section>

    </main>
  );
}

export default ProjectsPage;