import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
    FaArrowLeft,
    FaExpand,
    FaExternalLinkAlt,
    FaGithub,
    FaTimes,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

import "./ProjectDetails.css";

const projects = [
  {
    id: "student-performance",
    title: "Student Performance Prediction",
    category: "Data & AI",

    image: "/projects/student-performance.png",

    screenshots: [
      "/projects/student-performance.png",
      "/projects/student-performance1.png",
      "/projects/student-performance2.png",
      "/projects/student-performance3.png",
      "/projects/student-performance4.png",
    ],

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

    github:
      "https://github.com/kartikbarade/Student-Data-Analysis-Model",

    live: "",

    overview:
      "This project focuses on analyzing student performance data and applying machine learning techniques to understand and predict academic outcomes.",

    features: [
      "Data cleaning and preprocessing",
      "Exploratory data analysis",
      "Data visualization",
      "Classification model implementation",
      "Model accuracy comparison",
    ],

    learned:
      "I learned how to preprocess real-world datasets, perform exploratory data analysis, visualize patterns and compare different machine learning classification models.",

    challenges:
      "The main challenge was preparing the dataset properly and selecting meaningful features for model training. Comparing different algorithms also helped understand their strengths and limitations.",
  },

  {
    id: "powerbi-sales-dashboard",
    title: "Power BI Sales Dashboard",
    category: "Data & AI",

    image: "/projects/powerbi-sales-dashboard.png",

    screenshots: [
      "/projects/powerbi-sales-dashboard.png",
      "/projects/powerbi-sales-dashboard1.png",
      "/projects/powerbi-sales-dashboard2.png",
      "/projects/powerbi-sales-dashboard3.png",
      "/projects/powerbi-sales-dashboard4.png",
    ],

    description:
      "An interactive Power BI sales dashboard analyzing revenue, profit, quantity, sales trends, regional performance, customer segments and product categories.",

    tech: [
      "Power BI",
      "DAX",
      "Data Visualization",
      "Data Analysis",
    ],

    github:
      "https://github.com/kartikbarade/kartikbarade-PowerBI-Sales-Dashboard",

    live: "",

    overview:
      "A business intelligence dashboard designed to transform raw sales data into meaningful visual insights for understanding overall business performance.",

    features: [
      "Revenue and profit analysis",
      "Regional sales analysis",
      "Customer segment analysis",
      "Product category performance",
      "Interactive dashboard filters",
    ],

    learned:
      "I learned how to transform raw data into meaningful dashboards, create DAX calculations and design visualizations that communicate business insights clearly.",

    challenges:
      "Creating a clean dashboard while displaying multiple business metrics was the main challenge. Choosing the right visualizations and maintaining a consistent layout required careful design decisions.",
  },

  {
    id: "plant-app-design",
    title: "Plant App Design",
    category: "UI/UX",

    image: "/projects/plant-app-design.png",

    screenshots: [
      "/projects/plant-app-design.png",
      "/projects/plant-app-design1.png",
      "/projects/plant-app-design2.png",
      "/projects/plant-app-design3.png",
      "/projects/plant-app-design4.png",
    ],

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

    live: "https://www.figma.com/design/Lqp4kwclEW2xcuCgjtq2NY/PlantShop?node-id=0-1&p=f&t=gaM8QrUK6dH8SF6H-0",

    overview:
      "A modern mobile plant shopping interface focused on simple navigation, clean visual hierarchy and an enjoyable product browsing experience.",

    features: [
      "Modern mobile interface",
      "Product browsing experience",
      "Clean navigation structure",
      "Wireframe planning",
      "User-focused visual design",
    ],

    learned:
      "I learned how to structure a mobile application interface, create wireframes and maintain consistency between different screens while focusing on the user experience.",

    challenges:
      "Maintaining a simple interface while providing enough information for the user was the main design challenge. Creating a consistent layout across multiple screens also required careful planning.",
  },
];

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (item) => item.id === id
  );

  const [selectedImage, setSelectedImage] =
    useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    document.body.style.overflow = selectedImage
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  /* ================================
     PROJECT NOT FOUND
  ================================= */

  if (!project) {
    return (
      <main className="project-details-page">

        <div className="project-not-found">

          <h1>Project Not Found</h1>

          <p>
            The project you are looking for does not
            exist.
          </p>

          <Link
            to="/projects"
            className="back-project-btn"
          >
            <FaArrowLeft />
            Back to Projects
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="project-details-page">

      <div className="project-details-container">

        {/* ================================
            BACK BUTTON
        ================================= */}

        <Link
          to="/projects"
          className="project-back-btn"
        >
          <FaArrowLeft />

          <span>
            Back to {project.category}
          </span>
        </Link>


        {/* ================================
            HERO
        ================================= */}

        <section className="project-details-hero">

          {/* LEFT CONTENT */}

          <motion.div
            className="project-hero-content"
            initial={{
              opacity: 0,
              x: -35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <span className="project-details-tag">
              {project.category}
            </span>

            <h1>
              {project.title}
            </h1>

            <p className="project-details-description">
              {project.description}
            </p>


            {/* TECH STACK */}

            <div className="project-details-tech">

              {project.tech.map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}

            </div>


            {/* ACTION BUTTONS */}

            <div className="project-action-buttons">

              {/* LIVE PROJECT */}

              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="project-live-btn"
                >
                  <FaExternalLinkAlt />
                  Live Project
                </a>
              )}


              {/* GITHUB */}

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-github-btn"
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          </motion.div>


          {/* RIGHT PREVIEW */}

          <motion.div
            className="project-main-preview"
            initial={{
              opacity: 0,
              x: 35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >

            <div className="preview-label">
              PROJECT PREVIEW
            </div>

            <div
              className="main-preview-image"
              onClick={() =>
                setSelectedImage(project.image)
              }
            >

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="preview-expand">
                <FaExpand />
              </div>

            </div>

          </motion.div>

        </section>


        {/* ================================
            INFO CARDS
        ================================= */}

        <section className="project-info-grid">

          {/* OVERVIEW */}

          <motion.article
            className="project-info-card"
            whileHover={{
              y: -5,
            }}
          >

            <span className="info-number">
              01
            </span>

            <h2>
              Overview
            </h2>

            <p>
              {project.overview}
            </p>

          </motion.article>


          {/* KEY FEATURES */}

          <motion.article
            className="project-info-card"
            whileHover={{
              y: -5,
            }}
          >

            <span className="info-number">
              02
            </span>

            <h2>
              Key Features
            </h2>

            <ul>

              {project.features.map(
                (feature) => (
                  <li key={feature}>
                    {feature}
                  </li>
                )
              )}

            </ul>

          </motion.article>


          {/* TECH STACK */}

          <motion.article
            className="project-info-card"
            whileHover={{
              y: -5,
            }}
          >

            <span className="info-number">
              03
            </span>

            <h2>
              Tech Stack
            </h2>

            <div className="info-tech-list">

              {project.tech.map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}

            </div>

          </motion.article>

        </section>


        {/* ================================
            SECONDARY INFORMATION
        ================================= */}

        <section className="project-secondary-grid">

          {/* ================================
              SCREENSHOTS
          ================================= */}

          <motion.div
            className="screenshots-section"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="section-heading">

              <span>
                VISUALS
              </span>

              <h2>
                Screenshots
              </h2>

            </div>


            <div className="screenshots-grid">

              {project.screenshots
                .slice(0, 5)
                .map((image, index) => (

                  <motion.div
                    key={index}
                    className="screenshot-card"
                    whileHover={{
                      y: -5,
                    }}
                    onClick={() =>
                      setSelectedImage(image)
                    }
                  >

                    <img
                      src={image}
                      alt={`${project.title} screenshot ${
                        index + 1
                      }`}
                    />

                    <div className="screenshot-overlay">

                      <FaExpand />

                      <span>
                        View
                      </span>

                    </div>

                  </motion.div>

                ))}

            </div>

          </motion.div>


          {/* ================================
              WHAT I LEARNED
          ================================= */}

          <motion.article
            className="learning-card"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <span>
              LEARNING
            </span>

            <h2>
              What I Learned
            </h2>

            <p>
              {project.learned}
            </p>

          </motion.article>


          {/* ================================
              CHALLENGES
          ================================= */}

          <motion.article
            className="challenge-card"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <span>
              PROCESS
            </span>

            <h2>
              Challenges
            </h2>

            <p>
              {project.challenges}
            </p>

          </motion.article>

        </section>


        {/* ================================
            BOTTOM ACTIONS
        ================================= */}

        <div className="project-bottom-actions">

          <Link
            to="/projects"
            className="bottom-back-btn"
          >
            <FaArrowLeft />
            More Projects
          </Link>


          {/* ONLY LIVE BUTTON AT BOTTOM */}

          <div className="bottom-links">

            {project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="bottom-live-btn"
              >
                <FaExternalLinkAlt />
                Live Project
              </a>
            )}

          </div>

        </div>

      </div>


      {/* ================================
          IMAGE LIGHTBOX
      ================================= */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            className="image-lightbox"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setSelectedImage(null)
            }
          >

            {/* CLOSE BUTTON */}

            <button
              className="lightbox-close"
              onClick={() =>
                setSelectedImage(null)
              }
              aria-label="Close image"
            >
              <FaTimes />
            </button>


            {/* FULL IMAGE */}

            <motion.img
              src={selectedImage}
              alt="Project preview"
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
            />

          </motion.div>

        )}

      </AnimatePresence>

    </main>
  );
}

export default ProjectDetails;