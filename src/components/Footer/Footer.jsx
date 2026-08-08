import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import "./Footer.css";

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Main Footer */}
        <div className="footer-main">

          {/* Brand */}
<div className="footer-brand">
  <a href="#home" className="footer-logo">
    <img
      src="/projects/logo.png"
      alt="Kartik Logo"
    />
  </a>

            <p>
              AIML Engineering Student building modern web,
              machine learning and data-driven applications.
            </p>
          </div>

          {/* Social Links */}
          <div className="footer-socials">

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

          </div>

          {/* Back To Top */}
          <button
            className="back-to-top"
            onClick={handleBackToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">

          <p>
            © 2026 Kartik Barade. All rights reserved.
          </p>

          <p>
            Designed & Built with React
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;