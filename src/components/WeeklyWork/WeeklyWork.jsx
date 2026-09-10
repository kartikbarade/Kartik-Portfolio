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
    title: "WEEK 01",
    date: "Aug 3 — Aug 8, 2026",
    status: "completed",
  },
  {
    id: 2,
    title: "WEEK 02",
    date: "Sep 5 — Sep 10, 2026",
    status: "completed",
  },
  {
    id: 3,
    title: "WEEK 03",
    date: "Sep 16 — Sep 22, 2026",
    status: "upcoming",
  },
  {
    id: 4,
    title: "WEEK 04",
    date: "Sep 23 — Sep 29, 2026",
    status: "upcoming",
  },
  {
    id: 5,
    title: "WEEK 05",
    date: "Sep 30 — Oct 6, 2026",
    status: "upcoming",
  },
  {
    id: 6,
    title: "WEEK 06",
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
   WEEK 01
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
              WEEK 01
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
            Week 01 Summary
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
   WEEK 02
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
              WEEK 02
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
            WEEK 02 PPT
        ========================================= */}

        <div className="week02-ppt-wrapper">

          <h4>
            Week 02 Presentation
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
          WEEK 02 NOTE
      ========================================= */}

      <div className="weekly-note week02-note">

        <div className="note-icon">
          <FaClipboardCheck />
        </div>

        <div>

          <strong>
            Week 02 Summary
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


            {selectedWeek &&
              selectedWeek.id > 2 && (
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