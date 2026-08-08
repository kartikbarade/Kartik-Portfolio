import { motion } from "framer-motion";

import {
  FaCertificate,
  FaDatabase,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";

import "./Journey.css";

const journey = [
  // =========================================
  // DIPLOMA
  // =========================================
  {
    year: "2021 — 2024",

    title: "Diploma in Computer Engineering",

    organization: "Diploma Education",

    score: "82.51%",

    description:
      "Completed my Diploma in Computer Engineering, building a strong foundation in programming, computer science and software development.",

    project:
      "Hand Gesture Recognition for Deaf and Mute",

    internship: {
      title: "Full Stack Java Development",

      organization: "OmVsab IT Solution",

      description:
        "Completed an internship in Full Stack Java Development, gaining practical experience in Java programming, web development and application development.",

      certificate: "/projects/diploma_internship Certificate.pdf",
    },

    certificate: "/projects/diploma_certificate.pdf",

    icon: <FaGraduationCap />,
  },

  // =========================================
  // ENGINEERING
  // =========================================
  {
    year: "2024 — 2027",

    title: "Bachelor of Engineering — AI & ML",

    organization: "Engineering",

    score: "9.14 CGPA",

    description:
      "Currently pursuing my Bachelor's degree in Artificial Intelligence and Machine Learning while developing practical skills in AI, software development and machine learning.",

    internship: {
      title: "Fundamentals of Machine Learning",

      organization: "VentCorp",

      description:
        "Completed an internship focused on Machine Learning fundamentals, gaining practical exposure to data preparation, model building and real-world AI applications.",

      certificate: "/projects/engineering_internship certificate.pdf",
    },

    icon: <FaGraduationCap />,
  },

  // =========================================
  // DATA SCIENCE
  // =========================================
  {
    year: "2026 — Present",

    title: "Data Science",

    organization: "Currently Learning",

    description:
      "Currently learning Data Science with a focus on Python, data analysis, data visualization, statistics and machine learning through practical projects and real-world datasets.",

    icon: <FaDatabase />,
  },
];

function Journey() {
  return (
    <section className="journey-section" id="journey">

      <div className="journey-container">

        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <motion.div
          className="journey-heading"

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}
        >
          <span className="section-tag">
            MY JOURNEY
          </span>

          <h2>
            My Learning
            <span> Journey</span>
          </h2>

          <p>
            A timeline of my education, internships,
            technical learning and practical growth.
          </p>
        </motion.div>


        {/* =========================================
            TIMELINE
        ========================================= */}

        <div className="journey-timeline">

          {journey.map((item, index) => (

            <motion.div
              className="journey-item"

              key={`${item.title}-${index}`}

              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}

              viewport={{
                once: true,
              }}
            >

              {/* =========================================
                  TIMELINE ICON
              ========================================= */}

              <div className="journey-icon">
                {item.icon}
              </div>


              {/* =========================================
                  JOURNEY CARD
              ========================================= */}

              <div className="journey-card">

                {/* YEAR */}

                <span className="journey-year">
                  {item.year}
                </span>


                {/* TITLE */}

                <h3>
                  {item.title}
                </h3>


                {/* ORGANIZATION */}

                <h4>
                  {item.organization}
                </h4>


                {/* DESCRIPTION */}

                <p>
                  {item.description}
                </p>


                {/* =========================================
                    ACADEMIC SCORE
                ========================================= */}

                {item.score && (
                  <div className="journey-score">

                    <span>
                      Academic Score
                    </span>

                    <strong>
                      {item.score}
                    </strong>

                  </div>
                )}


                {/* =========================================
                    DIPLOMA PROJECT
                ========================================= */}

                {item.project && (
                  <div className="journey-project">

                    <strong>
                      Diploma Project
                    </strong>

                    <span>
                      {item.project}
                    </span>

                  </div>
                )}


                {/* =========================================
                    INTERNSHIP
                ========================================= */}

                {item.internship && (
                  <div className="journey-internship">

                    {/* Internship heading */}

                    <div className="internship-heading">

                      <FaLaptopCode />

                      <span>
                        Internship
                      </span>

                    </div>


                    {/* Internship title */}

                    <h5>
                      {item.internship.title}
                    </h5>


                    {/* Company */}

                    <strong>
                      {item.internship.organization}
                    </strong>


                    {/* Description */}

                    <p>
                      {item.internship.description}
                    </p>


                    {/* Internship certificate */}

                    <a
                      href={item.internship.certificate}

                      target="_blank"

                      rel="noopener noreferrer"

                      className="certificate-btn"
                    >

                      <FaCertificate />

                      View Internship Certificate

                    </a>

                  </div>
                )}


                {/* =========================================
                    EDUCATION CERTIFICATE
                ========================================= */}

                {item.certificate && (
                  <a
                    href={item.certificate}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="certificate-btn"
                  >

                    <FaCertificate />

                    View Diploma Certificate

                  </a>
                )}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Journey;