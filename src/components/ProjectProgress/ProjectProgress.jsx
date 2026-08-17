import { useEffect, useState } from "react";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

import WeeklyWork from "../WeeklyWork/WeeklyWork";

import "./ProjectProgress.css";

function ProjectProgress() {

  const [showWeeklyWork, setShowWeeklyWork] = useState(false);


  /* =========================================
     LOCK MAIN PAGE SCROLL
  ========================================= */

  useEffect(() => {

    if (showWeeklyWork) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };

  }, [showWeeklyWork]);


  return (
    <>
      <div className="project-progress-wrapper">

        <div className="project-progress-card">


          {/* =========================================
              COLLAPSED VIEW
          ========================================= */}

          <div className="project-mini">

            <span className="project-mini-icon">
              🎓
            </span>

            <div className="project-mini-text">

              <span>
                Project
              </span>

              <strong>
                10%
              </strong>

            </div>

          </div>



          {/* =========================================
              EXPANDED VIEW
          ========================================= */}

          <div className="project-expanded">


            {/* =========================================
                HEADER
            ========================================= */}

            <div className="project-expanded-header">

              <span>
                FINAL YEAR PROJECT PROGRESS
              </span>

              <div className="project-active">
                <i></i>
                ACTIVE
              </div>

            </div>



            {/* =========================================
                BADGE
            ========================================= */}

            <div className="project-badge">

              🎓 FINAL YEAR PROJECT

            </div>



            {/* =========================================
                TITLE
            ========================================= */}

            <h3>

              Sales &amp; Marketing

              <span>
                Agent Development
              </span>

            </h3>



            {/* =========================================
                DESCRIPTION
            ========================================= */}

            <p className="project-description">

              AI-powered multi-agent system designed to
              automate customer interaction, lead
              qualification and personalized sales &
              marketing activities.

            </p>



            {/* =========================================
                PROGRESS
            ========================================= */}

            <div className="progress-header">

              <span>
                Project Progress
              </span>

              <strong>
                10%
              </strong>

            </div>


            <div className="progress-track">

              <div className="progress-fill"></div>

            </div>



            {/* =========================================
                CURRENT PHASE
            ========================================= */}

            <div className="project-info">


              <div>

                <span className="info-label">
                  CURRENT PHASE
                </span>

                <strong>
                  Planning &amp; Specification
                </strong>

              </div>



              <div>

                <span className="info-label">
                  STATUS
                </span>

                <strong className="status">

                  <i></i>

                  In Progress

                </strong>

              </div>


            </div>



            {/* =========================================
                COMPLETED
            ========================================= */}

            <div className="completed-section">

              <h4>
                ✓ Recently Completed
              </h4>


              <div className="completed-item">

                <span>
                  ✓
                </span>

                Project Synopsis

              </div>


              <div className="completed-item">

                <span>
                  ✓
                </span>

                Project Specification

              </div>

            </div>



            {/* =========================================
                NEXT MILESTONE
            ========================================= */}

            <div className="next-milestone">

              <span>
                NEXT MILESTONE
              </span>

              <strong>
                System Architecture &amp; Working flow
              </strong>

            </div>



            {/* =========================================
                WEEK
            ========================================= */}

            <div className="week-progress">

              <span>
                WEEK 01
              </span>

              <p>
                Project planning, problem definition,
                synopsis and specification completed.
              </p>

            </div>



            {/* =========================================
                VIEW WEEKLY WORK BUTTON
            ========================================= */}

            <button
              className="weekly-work-button"
              onClick={() => setShowWeeklyWork(true)}
            >

              <div className="weekly-button-icon">
                <FaCalendarAlt />
              </div>

              <span>
                View Weekly Work
              </span>

              <FaArrowRight className="weekly-button-arrow" />

            </button>


          </div>

        </div>

      </div>



      {/* =========================================
          WEEKLY WORK FULL SCREEN PAGE
      ========================================= */}

      {showWeeklyWork && (

        <WeeklyWork
          onClose={() => setShowWeeklyWork(false)}
        />

      )}

    </>
  );
}

export default ProjectProgress;