import { motion } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import "./Projects.css";

const categories = ["All", "Websites", "UI/UX", "Data & AI"];

const projects = [
  // {
  //   title: "AI-Based Portfolio",
  //   category: "Websites",
  //   description:
  //     "A modern portfolio website showcasing my development skills, projects and AI/ML journey.",
  //   tech: ["React", "JavaScript", "CSS", "Framer Motion"],
  //   github: "#",
  //   live: "#",
  // },

  // {
  //   title: "Machine Learning Project",
  //   category: "Data Analytics",
  //   description:
  //     "A practical machine learning application designed to solve a real-world problem using data-driven techniques.",
  //   tech: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
  //   github: "#",
  //   live: "#",
  // },

  // {
  //   title: "Full Stack Web App",
  //   category: "Websites",
  //   description:
  //     "A responsive full-stack application with a modern user interface and backend API integration.",
  //   tech: ["React", "Node.js", "Express", "MongoDB"],
  //   github: "#",
  //   live: "#",
  // },

  {
  title: "Student Performance Prediction",
  category: "Data & AI",
  image: "/projects/student-performance.png",

  description:
    "Analyzed student performance data and built classification models to predict academic outcomes. Compared Logistic Regression and Naive Bayes models using accuracy metrics.",

  tech: [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Scikit-learn",
  ],

  github: "https://github.com/kartikbarade/Student-Data-Analysis-Model",
  live: "#",
},

{
  title: "Power BI Sales Dashboard",
  category: "Data & AI",
  image: "/projects/powerbi-sales-dashboard.png",

  description:
    "An interactive Power BI sales dashboard analyzing revenue, profit, quantity, sales trends, regional performance, customer segments and product categories.",

  tech: [
    "Power BI",
    "DAX",
    "Data Visualization",
    "Data Analysis",
  ],

  github: "https://github.com/kartikbarade/kartikbarade-PowerBI-Sales-Dashboard",
  live: "#",
},
// {
//   title: "Sales Dashboard",
//   category: "Data Analytics",
//   image: "/projects/powerbi-sales-dashboard.png.png",
//   description:
//     "Interactive Power BI dashboard analyzing sales, profit, quantity and business performance.",
//   tech: ["Power BI", "DAX", "Data Visualization", "Excel"],
//   github: "#",
//   live: "#",
// },

// {
//   title: "Student Data Analysis",
//   category: "Data Analytics",
//   image: "/projects/student-performance.png.png",
//   description:
//     "Analyzed student performance data and built classification models to understand academic outcomes.",
//   tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
//   github: "#",
//   live: "#",
// },


  // {
  //   title: "Bicycle Website Design",
  //   category: "UI/UX",
  //   description:
  //     "A modern bicycle e-commerce website design focused on clean UI, product presentation and user-friendly interactions.",
  //   tech: ["Figma", "UI/UX", "Wireframing"],
  //   github: "https://github.com/kartikbarade",
  //   live: "#",
  // },
{
    title: "Plant App Design",
    category: "UI/UX",
    image: "/projects/plant-app-design.png",
    description:
      "A clean and user-friendly mobile plant store interface designed with a modern shopping experience.",
    tech: ["Figma", "UI/UX", "Mobile Design" ,"Wireframing", "Excalidraw",],
    github: "https://github.com/kartikbarade/PlantShop-Figma-Design",
    live: "#",
  },
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* =========================
            HEADING
        ========================= */}

        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">MY WORK</span>

          <h2>
            Featured
            <span> Projects</span>
          </h2>

          <p>
            Some of the projects I have built while learning,
            experimenting and solving practical problems.
          </p>
        </motion.div>

        {/* =========================
            CATEGORY FILTER
        ========================= */}

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* =========================
            PROJECTS GRID
        ========================= */}

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              layout
            >

              {/* Project Top */}

              <div className="project-top">

                <div className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <span className="project-category">
                  {project.category}
                </span>

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>

                </div>

              </div>

              {/* Image */}
              {project.image && (
              <div className="project-image">
              <img
               src={project.image}
              alt={project.title}
               />
               </div>
)}

              {/* Project Content */}

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {/* Technology Stack */}

                <div className="tech-stack">
                  {project.tech.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Line */}

              <div className="project-line" />

            </motion.article>
          ))}
        </div>

        <div className="explore-projects">
  <a
    href="https://github.com/kartikbarade"
    target="_blank"
    rel="noreferrer"
    className="explore-btn"
  >
    Explore All Projects
    <FaGithub />
  </a>
</div>

        {/* =========================
            EMPTY STATE
        ========================= */}

        {filteredProjects.length === 0 && (
          <motion.div
            className="no-projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>No projects found in this category.</p>
          </motion.div>
        )}

      </div>
    </section>
  );
}

export default Projects;