import {
  FaCalendarAlt,
  FaCheckCircle,
  FaCircle,
  FaCode,
  FaDownload,
  FaFileAlt,
  FaImages,
  FaTasks,
  FaTimes
} from "react-icons/fa";

import "./WeeklyWork.css";

function WeeklyWork({ onClose }) {

  return (
    <div className="weekly-work-overlay">

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
              WEEK TIMELINE
          ========================================= */}

          <aside className="weekly-timeline">

            <div className="timeline-title">
              PROJECT WEEKS
            </div>


            {/* Week 01 */}

            <div className="timeline-item active">

              <div className="timeline-marker">
                <FaCheckCircle />
              </div>

              <div className="timeline-text">

                <strong>
                  WEEK 01
                </strong>

                <span>
                  Completed
                </span>

              </div>

            </div>


            {/* Week 02 */}

            <div className="timeline-item">

              <div className="timeline-marker">
                <FaCircle />
              </div>

              <div className="timeline-text">

                <strong>
                  WEEK 02
                </strong>

                <span>
                  Upcoming
                </span>

              </div>

            </div>


            {/* Week 03 */}

            <div className="timeline-item">

              <div className="timeline-marker">
                <FaCircle />
              </div>

              <div className="timeline-text">

                <strong>
                  WEEK 03
                </strong>

                <span>
                  Upcoming
                </span>

              </div>

            </div>


            {/* Week 04 */}

            <div className="timeline-item">

              <div className="timeline-marker">
                <FaCircle />
              </div>

              <div className="timeline-text">

                <strong>
                  WEEK 04
                </strong>

                <span>
                  Upcoming
                </span>

              </div>

            </div>


            {/* Week 05 */}

            <div className="timeline-item">

              <div className="timeline-marker">
                <FaCircle />
              </div>

              <div className="timeline-text">

                <strong>
                  WEEK 05
                </strong>

                <span>
                  Upcoming
                </span>

              </div>

            </div>


            {/* Week 06 */}

            <div className="timeline-item">

              <div className="timeline-marker">
                <FaCircle />
              </div>

              <div className="timeline-text">

                <strong>
                  WEEK 06
                </strong>

                <span>
                  Upcoming
                </span>

              </div>

            </div>

          </aside>


          {/* =========================================
              WEEK CONTENT
          ========================================= */}

          <main className="weekly-content">


            {/* Week header */}

            <div className="week-content-header">

              <div>

                <div className="week-heading-row">

                  <h1>
                    WEEK 01
                  </h1>

                  <span className="week-completed">
                    Completed
                  </span>

                </div>

                <p>
                  Project planning, problem definition,
                  synopsis and specification completed.
                </p>

              </div>


              <div className="week-date">
                Aug 4 — Aug 9, 2026
              </div>

            </div>


            {/* =========================================
                STATS
            ========================================= */}

            <div className="weekly-stats">


              <div className="weekly-stat-card">

                <div className="stat-icon green">
                  <FaTasks />
                </div>

                <div>

                  <span>
                    TASKS
                  </span>

                  <strong>
                    3 / 3
                  </strong>

                  <small>
                    Completed
                  </small>

                </div>

              </div>


              <div className="weekly-stat-card">

                <div className="stat-icon blue">
                  <FaFileAlt />
                </div>

                <div>

                  <span>
                    DOCUMENTS
                  </span>

                  <strong>
                    2
                  </strong>

                  <small>
                    Uploaded
                  </small>

                </div>

              </div>


              <div className="weekly-stat-card">

                <div className="stat-icon purple">
                  <FaCode />
                </div>

                <div>

                  <span>
                    CODE
                  </span>

                  <strong>
                    0
                  </strong>

                  <small>
                    Commits
                  </small>

                </div>

              </div>


              <div className="weekly-stat-card">

                <div className="stat-icon pink">
                  <FaImages />
                </div>

                <div>

                  <span>
                    IMAGES
                  </span>

                  <strong>
                    0
                  </strong>

                  <small>
                    Screenshots
                  </small>

                </div>

              </div>

            </div>


            {/* =========================================
                WORK + DOCUMENTS
            ========================================= */}

            <div className="weekly-columns">


              {/* What I worked on */}

              <section className="weekly-section">

                <h3>
                  What I Worked On
                </h3>


                <div className="work-check-item">

                  <FaCheckCircle />

                  <span>
                    Project planning &amp; discussion
                  </span>

                </div>


                <div className="work-check-item">

                  <FaCheckCircle />

                  <span>
                    Problem definition
                  </span>

                </div>


                <div className="work-check-item">

                  <FaCheckCircle />

                  <span>
                    Project Synopsis
                  </span>

                </div>


                <div className="work-check-item">

                  <FaCheckCircle />

                  <span>
                    Project Specification
                  </span>

                </div>

              </section>


              {/* Documents */}

              <section className="weekly-section">

                <h3>
                  Documents &amp; Files
                </h3>


                <a
                    href="/projects/week01/Synopsis.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="file-card"
>

  <div className="file-icon pdf">
    <FaFileAlt />
  </div>

  <div>

    <strong>
      Synopsis.pdf
    </strong>

    <span>
      Project Synopsis
    </span>

  </div>

  <FaDownload />

</a>


                <a
  href="/projects/week01/Specifications.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="file-card"
>

  <div className="file-icon pdf">
    <FaFileAlt />
  </div>

  <div>

    <strong>
      Specification.pdf
    </strong>

    <span>
      Project Specification
    </span>

  </div>

  <FaDownload />

</a>


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
                NOTES
            ========================================= */}

            <div className="weekly-note">

              <div className="note-icon">
                ✦
              </div>

              <div>

                <strong>
                  Week 01 Summary
                </strong>

                <p>
                  Initial planning and project documentation
                  have been completed successfully. The next
                  focus is system architecture and Working flow.
                </p>

              </div>

            </div>

          </main>

        </div>

      </div>

    </div>
  );
}

export default WeeklyWork;