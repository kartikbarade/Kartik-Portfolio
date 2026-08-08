import { motion } from "framer-motion";
import {
  FaBrain,
  FaCode,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";
import "./About.css";

const cards = [
  {
    icon: <FaCode />,
    title: "Development",
    text: "Building clean, scalable and user-friendly web applications.",
  },
  {
    icon: <FaBrain />,
    title: "AI & ML",
    text: "Exploring Artificial Intelligence and Machine Learning solutions.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Problem Solving",
    text: "Turning complex problems into simple and practical solutions.",
  },
  {
    icon: <FaRocket />,
    title: "Growth Mindset",
    text: "Continuously learning new technologies and improving my skills.",
  },
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Heading */}
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">ABOUT ME</span>

          <h2>
            Turning Ideas Into
            <span> Digital Experiences</span>
          </h2>

          <p>
            I am an engineering student passionate about software development,
            Artificial Intelligence and Machine Learning. I enjoy building
            practical projects and learning technologies that solve real-world
            problems.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="about-grid">
          {cards.map((card, index) => (
            <motion.div
              className="about-card"
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
            >
              <div className="about-icon">
                {card.icon}
              </div>

              <h3>{card.title}</h3>

              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;