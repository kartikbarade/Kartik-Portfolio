import { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaCircle,
  FaClipboardCheck,
  FaCode,
  FaDownload,
  FaFileAlt,
  FaFilePowerpoint,
  FaImages,
  FaProjectDiagram,
  FaTasks,
  FaTimes,
} from "react-icons/fa";

import "./WeeklyWork.css";


/* =========================================================
   PROJECT WEEKS
========================================================= */

const weeks = [
  {
    id: 1,
    title: "STAGE 01",
    date: "Aug 3 — Aug 8, 2026",
    status: "completed",
  },
  {
    id: 2,
    title: "STAGE 02",
    date: "Sep 5 — Sep 10, 2026",
    status: "completed",
  },
  {
    id: 3,
    title: "STAGE 03",
    date: "Sep 16 — Sep 22, 2026",
    status: "completed",
  },
  {
    id: 4,
    title: "STAGE 04",
    date: "Sep 23 — Sep 29, 2026",
    status: "upcoming",
  },
  {
    id: 5,
    title: "STAGE 05",
    date: "Sep 30 — Oct 6, 2026",
    status: "upcoming",
  },
  {
    id: 6,
    title: "STAGE 06",
    date: "Oct 7 — Oct 13, 2026",
    status: "upcoming",
  },
];


/* =========================================================
   FILE CARD
========================================================= */

function FileCard({
  href,
  icon,
  type = "pdf",
  name,
  description,
}) {
  return (
    <a
      href={href}
      className="file-card"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={`file-icon ${type}`}>
        {icon}
      </div>

      <div className="file-information">
        <strong>{name}</strong>

        <span>{description}</span>
      </div>

      <FaDownload className="file-download-icon" />
    </a>
  );
}


/* =========================================================
   STAT CARD
========================================================= */

function Stat({
  icon,
  color,
  label,
  value,
  sub,
}) {
  return (
    <div className="weekly-stat-card">

      <div className={`stat-icon ${color}`}>
        {icon}
      </div>

      <div className="stat-content">

        <span>
          {label}
        </span>

        <strong>
          {value}
        </strong>

        <small>
          {sub}
        </small>

      </div>

    </div>
  );
}


/* =========================================================
   CHECK ITEM
========================================================= */

function Check({ text }) {
  return (
    <div className="work-check-item">

      <FaCheckCircle />

      <span>
        {text}
      </span>

    </div>
  );
}


/* =========================================================
   STAGE 01
========================================================= */

function WeekOne() {
  return (
    <div className="week-page">

      {/* =========================================
          WEEK HEADER
      ========================================= */}

      <div className="week-content-header">

        <div>

          <div className="week-heading-row">

            <h1>
              STAGE 01
            </h1>

            <span className="week-completed">
              <FaCheckCircle />
              COMPLETED
            </span>

          </div>

          <p>
            Project planning, problem definition,
            synopsis and specification completed.
          </p>

        </div>

        <div className="week-date">
          Aug 3 — Aug 8, 2026
        </div>

      </div>


      {/* =========================================
          STATS
      ========================================= */}

      <div className="weekly-stats">

        <Stat
          icon={<FaTasks />}
          color="green"
          label="TASKS"
          value="3 / 3"
          sub="Completed"
        />

        <Stat
          icon={<FaFileAlt />}
          color="blue"
          label="DOCUMENTS"
          value="2"
          sub="Uploaded"
        />

        <Stat
          icon={<FaCode />}
          color="purple"
          label="CODE"
          value="0"
          sub="Commits"
        />

        <Stat
          icon={<FaImages />}
          color="pink"
          label="IMAGES"
          value="0"
          sub="Screenshots"
        />

      </div>


      {/* =========================================
          THREE COLUMNS
      ========================================= */}

      <div className="weekly-columns">

        {/* Work */}

        <section className="weekly-section">

          <h3>
            What I Worked On
          </h3>

          <Check text="Project planning & discussion" />

          <Check text="Problem definition" />

          <Check text="Project Synopsis" />

          <Check text="Project Specification" />

        </section>


        {/* Documents */}

        <section className="weekly-section">

          <h3>
            Documents & Files
          </h3>

          <FileCard
            href="/projects/week01/Synopsis.pdf"
            type="pdf"
            icon={<FaFileAlt />}
            name="Synopsis.pdf"
            description="Project Synopsis"
          />

          <FileCard
            href="/projects/week01/Specifications.pdf"
            type="pdf"
            icon={<FaFileAlt />}
            name="Specifications.pdf"
            description="Project Specification"
          />

        </section>


        {/* Images */}

        <section className="weekly-section">

          <h3>
            Images / Screenshots
          </h3>

          <div className="image-preview">

            <div className="image-placeholder">

              <FaImages />

              <span>
                Project Screenshot
              </span>

            </div>

          </div>

        </section>

      </div>


      {/* =========================================
          NOTE
      ========================================= */}

      <div className="weekly-note">

        <div className="note-icon">
          <FaClipboardCheck />
        </div>

        <div>

          <strong>
            Stage 01 Summary
          </strong>

          <p>
            Initial planning and project documentation
            have been completed successfully. The next
            focus is system architecture and working flow.
          </p>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   STAGE 02
========================================================= */

function WeekTwo() {
  return (
    <div className="week-page">

      {/* =========================================
          WEEK HEADER
      ========================================= */}

      <div className="week-content-header">

        <div>

          <div className="week-heading-row">

            <h1>
              STAGE 02
            </h1>

            <span className="week-completed">
              <FaCheckCircle />
              COMPLETED
            </span>

          </div>

          <p>
            First project review completed and project
            architecture designed and finalized.
          </p>

        </div>

        <div className="week-date">
          Sep 5 — Sep 10, 2026
        </div>

      </div>


      {/* =========================================
          STATS
      ========================================= */}

      <div className="weekly-stats">

        <Stat
          icon={<FaTasks />}
          color="green"
          label="TASKS"
          value="2 / 2"
          sub="Completed"
        />

        <Stat
          icon={<FaClipboardCheck />}
          color="blue"
          label="REVIEW"
          value="1"
          sub="Completed"
        />

        <Stat
          icon={<FaProjectDiagram />}
          color="purple"
          label="ARCHITECTURE"
          value="1"
          sub="Designed"
        />

        <Stat
          icon={<FaImages />}
          color="pink"
          label="IMAGES"
          value="1"
          sub="Added"
        />

      </div>


      {/* =========================================
          THREE COLUMNS
      ========================================= */}

      <div className="weekly-columns">

        {/* Work Completed */}

        <section className="weekly-section">

          <h3>
            What I Worked On
          </h3>

          <Check text="Prepared for first project review" />

          <Check text="Presented project concept and requirements" />

          <Check text="Completed first project review" />

          <Check text="Designed system architecture" />

          <Check text="Finalized project flow" />

        </section>


        {/* Project Review */}

        <section className="weekly-section">

          <h3>
            Project Review
          </h3>

          <div className="review-card">

            <div className="review-icon">
              <FaCheckCircle />
            </div>

            <div className="review-main">

              <strong>
                First Project Review
              </strong>

              <span>
                Project concept and architecture review
              </span>

            </div>

            <span className="review-status">
              ✓
            </span>

          </div>


          <div className="review-details">

            <div>

              <span>
                STATUS
              </span>

              <strong className="green-text">
                Completed
              </strong>

            </div>

            <div>

              <span>
                PHASE
              </span>

              <strong>
                Architecture
              </strong>

            </div>

          </div>

        </section>


        {/* Presentation */}

        <section className="weekly-section">

          <h3>
            Presentation
          </h3>

          <FileCard
            href="/projects/week02/Sales%20and%20Marketing%20Agent%20Development.pdf"
            type="ppt"
            icon={<FaFilePowerpoint />}
            name="Sales and Marketing Agent Development.pptx"
            description="First Project Review Presentation"
          />

        </section>

      </div>


      {/* =========================================
          PROJECT ARCHITECTURE
      ========================================= */}

      <section className="architecture-full-section">

        <div className="architecture-heading">

          <div className="architecture-heading-icon">
            <FaProjectDiagram />
          </div>

          <div>

            <h3>
              Project Architecture
            </h3>

            <p>
              Overall architecture and component flow
              prepared for project development.
            </p>

          </div>

        </div>


        <div className="architecture-image-container">

          <img
            src="/projects/week02/project-architecture.png"
            alt="Sales and Marketing Agent Development project architecture"
            onError={(event) => {

              event.currentTarget.style.display = "none";

              event.currentTarget.parentElement.classList.add(
                "image-load-error"
              );

            }}
          />

          <div className="architecture-image-error">

            <FaImages />

            <span>
              Architecture image not found
            </span>

            <small>
              Put project-architecture.png inside
              client/public/projects/week02/
            </small>

          </div>

        </div>


        {/* =========================================
            STAGE 02 PPT
        ========================================= */}

        <div className="week02-ppt-wrapper">

          <h4>
            Stage 02 Presentation
          </h4>

          <FileCard
            href="/projects/week02/Sales%20and%20Marketing%20Agent%20Development.pdf"
            type="ppt"
            icon={<FaFilePowerpoint />}
            name="Sales and Marketing Agent Development.pptx"
            description="Project Review Presentation"
          />

        </div>

      </section>


      {/* =========================================
          STAGE 02 NOTE
      ========================================= */}

      <div className="weekly-note week02-note">

        <div className="note-icon">
          <FaClipboardCheck />
        </div>

        <div>

          <strong>
            Stage 02 Summary
          </strong>

          <p>
            The first project review was completed and
            the architecture and project flow were
            finalized for the next development phase.
          </p>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   STAGE 03 - REVIEW III
========================================================= */

function WeekThree() {
  return (
    <div className="week-page">

      {/* =========================================
          WEEK HEADER
      ========================================= */}

      <div className="week-content-header">

        <div>

          <div className="week-heading-row">

            <h1>
              STAGE 03
            </h1>

            <span className="week-completed">
              <FaCheckCircle />
              IN PROGRESS
            </span>

          </div>

          <p>
            Project Review-III presentation and system architecture
            are being finalized for the next development phase.
          </p>

        </div>

        <div className="week-date">
          Sep 16 — Sep 22, 2026
        </div>

      </div>


      {/* =========================================
          STATS
      ========================================= */}

      <div className="weekly-stats">

        <Stat
          icon={<FaTasks />}
          color="green"
          label="TASKS"
          value="2 / 2"
          sub="In Progress"
        />

        <Stat
          icon={<FaProjectDiagram />}
          color="purple"
          label="ARCHITECTURE"
          value="1"
          sub="Completed"
        />

        <Stat
          icon={<FaFilePowerpoint />}
          color="blue"
          label="PPT"
          value="1"
          sub="Uploaded"
        />

        <Stat
          icon={<FaImages />}
          color="pink"
          label="IMAGES"
          value="1"
          sub="Added"
        />

      </div>


      {/* =========================================
          THREE COLUMNS
      ========================================= */}

      <div className="weekly-columns">

        {/* Current Work */}

        <section className="weekly-section">

          <h3>
            Current Work
          </h3>

          <div className="week03-current-work">

            <div className="week03-work-list">

              <div className="week03-work-item">
                <FaCheckCircle />
                <span>System Architecture Design</span>
              </div>

              <div className="week03-work-item">
                <FaCheckCircle />
                <span>Agent Interaction Flow</span>
              </div>

              <div className="week03-work-item">
                <FaCircle />
                <span>Backend Module Structure</span>
              </div>

            </div>

          </div>

        </section>


        {/* Review III PPT */}

        <section className="weekly-section">

          <h3>
            Review-III Presentation
          </h3>

          <FileCard
            href="/projects/week03/Review-III.pptx"
            type="ppt"
            icon={<FaFilePowerpoint />}
            name="Review-III.pptx"
            description="Project Review-III Presentation"
          />

        </section>


        {/* Next Milestone */}

        <section className="weekly-section">

          <h3>
            Next Milestone
          </h3>

          <div className="week03-next-milestone">

            <strong>
              Multi-Agent Backend Development
            </strong>

            <p>
              Development of Sales, Marketing and Lead Generation
              agents with routing and backend integration.
            </p>

            <div className="milestone-status">
              <span></span>
              Upcoming
            </div>

          </div>

        </section>

      </div>


      {/* =========================================
          SYSTEM ARCHITECTURE
      ========================================= */}

      <section className="week03-architecture-section">

        <div className="week03-architecture-heading">

          <div className="week03-architecture-heading-icon">
            <FaProjectDiagram />
          </div>

          <div>

            <h3>
              System Architecture
            </h3>

            <p>
              Proposed system architecture and agent interaction
              flow for the Sales and Marketing Agent project.
            </p>

          </div>

        </div>


        <div className="week03-architecture-image-container">

          <img
            src="/projects/week03/system-architecture.png"
            alt="System Architecture"
            onError={(event) => {

              event.currentTarget.style.display = "none";

              event.currentTarget.parentElement.classList.add(
                "image-load-error"
              );

            }}
          />

          <div className="week03-architecture-image-error">

            <FaProjectDiagram />

            <span>
              System Architecture image not found
            </span>

            <small>
              Put system-architecture.png inside
              client/public/projects/week03/
            </small>

          </div>

        </div>

      </section>


      {/* =========================================
          STAGE 03 SUMMARY
      ========================================= */}

      <div className="weekly-note week03-note">

        <div className="note-icon">
          <FaClipboardCheck />
        </div>

        <div>

          <strong>
            Stage 03 Summary
          </strong>

          <p>
            Project Review-III presentation was prepared and the
            system architecture with agent interaction flow was
            finalized. Backend module structure and the next
            development phase are currently being planned.
          </p>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   UPCOMING WEEK
========================================================= */

function UpcomingWeek({ week }) {
  return (
    <div className="upcoming-week">

      <div className="upcoming-icon">
        <FaCircle />
      </div>

      <h1>
        {week.title}
      </h1>

      <span>
        UPCOMING
      </span>

      <p>
        Work details for this week will be added
        after the project milestone is completed.
      </p>

    </div>
  );
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function WeeklyWork({ onClose }) {

  const [activeWeek, setActiveWeek] = useState(1);


  /* =========================================
      LOCK BODY SCROLL
  ========================================= */

  useEffect(() => {

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };

  }, []);


  const selectedWeek = weeks.find(
    (week) => week.id === activeWeek
  );


  return (
    <div
      className="weekly-work-overlay"
      role="dialog"
      aria-modal="true"
    >

      <div className="weekly-work-panel">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="weekly-work-header">

          <div className="weekly-header-left">

            <div className="weekly-header-icon">
              <FaCalendarAlt />
            </div>

            <div>

              <h2>
                PROJECT WORK JOURNAL
              </h2>

              <p>
                Track my weekly progress, tasks,
                documents, code &amp; updates
              </p>

            </div>

          </div>


          <button
            type="button"
            className="weekly-close-button"
            onClick={onClose}
            aria-label="Close weekly work"
          >
            <FaTimes />
          </button>

        </div>


        {/* =========================================
            BODY
        ========================================= */}

        <div className="weekly-work-body">

          {/* =========================================
              TIMELINE
          ========================================= */}

          <aside className="weekly-timeline">

            <div className="timeline-title">
              PROJECT WEEKS
            </div>


            {weeks.map((week) => (

              <button
                key={week.id}
                type="button"
                className={`timeline-item ${
                  week.status
                } ${
                  activeWeek === week.id
                    ? "active"
                    : ""
                }`}
                onClick={() => {

                  if (
                    week.status === "completed"
                  ) {
                    setActiveWeek(week.id);
                  }

                }}
                disabled={
                  week.status !== "completed"
                }
              >

                <div className="timeline-marker">

                  {week.status === "completed" ? (
                    <FaCheckCircle />
                  ) : (
                    <FaCircle />
                  )}

                </div>


                <div className="timeline-text">

                  <strong>
                    {week.title}
                  </strong>

                  <span>
                    {week.status === "completed"
                      ? week.date
                      : "Upcoming"}
                  </span>

                </div>

              </button>

            ))}

          </aside>


          {/* =========================================
              CONTENT
          ========================================= */}

          <main className="weekly-content">

            {selectedWeek?.id === 1 && (
              <WeekOne />
            )}


            {selectedWeek?.id === 2 && (
              <WeekTwo />
            )}


            {selectedWeek?.id === 3 && (
              <WeekThree />
            )}


            {selectedWeek &&
              selectedWeek.id > 3 && (
                <UpcomingWeek
                  week={selectedWeek}
                />
              )}

          </main>

        </div>

      </div>

    </div>
  );
}