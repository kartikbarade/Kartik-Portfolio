import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef } from "react";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nzirber",
        "template_wo57en5",
        form.current,
        {
          publicKey: "oQ2QnV4f-Kziq2P1T",
        }
      )
      .then(
        () => {
          alert("Message sent successfully! 🚀");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Heading */}
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">GET IN TOUCH</span>

          <h2>
            Let's Work
            <span> Together</span>
          </h2>

          <p>
            Have a project idea, opportunity or just want to
            connect? Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="contact-content">

          {/* Left Side */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect</h3>

            <p>
              I'm always open to discussing new projects,
              creative ideas and career opportunities.
            </p>

            <div className="contact-details">

              {/* Email */}
              <a
                href="mailto:kartikybarade13@gmail.com"
                className="contact-item"
              >
                <div className="contact-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <span>Email</span>
                  <strong>
                    kartikybarade13@gmail.com
                  </strong>
                </div>
              </a>

              {/* Location */}
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <span>Location</span>
                  <strong>India</strong>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="contact-socials">

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

            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.form
            ref={form}
            className="contact-form"
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {/* Name */}
            <div className="form-group">
              <label>Name</label>

              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="reply_to"
                placeholder="your@email.com"
                required
              />
            </div>

            {/* Subject */}
            <div className="form-group">
              <label>Subject</label>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>

            {/* Message */}
            <div className="form-group">
              <label>Message</label>

              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                required
              />

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="contact-submit"
            >
              <span>Send Message</span>
              <FaPaperPlane />
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  );
}

export default Contact;