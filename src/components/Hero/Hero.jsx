import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaArrowDown,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const roles = [
    "AI/ML Engineer",
    "Software Developer",
    "Full Stack Developer",
    "Problem Solver",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = deleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text.length + 1 === currentRole.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text.length === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="hero-section"
      id="home"
      style={{
        "--mouse-x": `${mousePosition.x}px`,
        "--mouse-y": `${mousePosition.y}px`,
      }}
    >
      {/* Mouse Glow */}
      <div className="mouse-glow"></div>

      {/* Background Grid */}
      <div className="hero-grid"></div>

      {/* Background Orbs */}
      <motion.div
        className="hero-orb hero-orb-one"
        animate={{
          x: [0, 80, -30, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="hero-orb hero-orb-two"
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Ghost */}
<motion.div
  className="hero-ghost"
  animate={{
    y: [0, -18, 0],
    rotate: [-2, 2, -2],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <div className="ghost-body">
    <div className="ghost-eyes">
      <span></span>
      <span></span>
    </div>

    <div className="ghost-mouth"></div>
  </div>

  <div className="ghost-glow"></div>
</motion.div>

      {/* Floating Particles */}
      <div className="floating-particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Availability Badge */}
        <motion.div className="availability-badge" variants={itemVariants}>
          <span className="status-dot"></span>
          <span>Available for opportunities</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div className="hero-content" variants={itemVariants}>
          <p className="hero-intro">Hello, I'm</p>

          <h1 className="hero-title">
            Kartik <span>Barade</span>
          </h1>

          <div className="hero-role">
            <span>I'm a </span>
            <strong>{text}</strong>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-description">
            I build modern digital experiences by combining
            <strong> software development</strong>,{" "}
            <strong>AI/ML</strong> and creative problem solving.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div className="hero-buttons" variants={itemVariants}>
          <a href="#projects" className="hero-btn primary-btn">
            View My Work
            <span>↗</span>
          </a>

         <a
  href="/projects/kartik.pdf"
  className="hero-btn secondary-btn"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaDownload />
  Download Resume
</a>
        </motion.div>

        {/* Social Links */}
        <motion.div className="hero-socials" variants={itemVariants}>
          <a
            href="https://github.com/kartikbarade"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/kartik-barade-51a9102b1/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:kartikybarade13@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        {/* Floating Tech Cards */}
        <motion.div
          className="floating-tech tech-one"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span>⚛️</span>
          <small>React</small>
        </motion.div>

        <motion.div
          className="floating-tech tech-two"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span>🤖</span>
          <small>AI / ML</small>
        </motion.div>

        <motion.div
          className="floating-tech tech-three"
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span>☕</span>
          <small>Java</small>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="scroll-indicator"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span>Scroll to explore</span>
        <FaArrowDown />
      </motion.a>

      {/* Side Text */}
      <div className="hero-side-text">
        <span>PORTFOLIO • 2026</span>
      </div>
    </section>
  );
};

export default Hero;