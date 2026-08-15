import "./ProjectProgress.css";

function ProjectProgress() {
  return (
    <div className="project-progress-wrapper">
      <div className="project-progress-card">

        {/* COLLAPSED VIEW */}
        <div className="project-mini">
          <span className="project-mini-icon">🎓</span>

          <div className="project-mini-text">
            <span>Project</span>
            <strong>10%</strong>
          </div>
        </div>

        {/* EXPANDED VIEW */}
        <div className="project-expanded">

          <div className="project-badge">
            🎓 FINAL YEAR PROJECT
          </div>

          <h3>
            Sales & Marketing
            <span>Agent Development</span>
          </h3>

          <p className="project-description">
            AI-powered multi-agent system designed to
            automate customer interaction, lead
            qualification and personalized sales &
            marketing activities.
          </p>

          {/* Progress */}
          <div className="progress-header">
            <span>Project Progress</span>
            <strong>10%</strong>
          </div>

          <div className="progress-track">
            <div className="progress-fill"></div>
          </div>

          {/* Current Phase */}
          <div className="project-info">

            <div>
              <span className="info-label">
                CURRENT PHASE
              </span>

              <strong>
                Planning & Specification
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

          {/* Completed */}
          <div className="completed-section">

            <h4>✓ Recently Completed</h4>

            <div className="completed-item">
              <span>✓</span>
              Project Synopsis
            </div>

            <div className="completed-item">
              <span>✓</span>
              Project Specification
            </div>

          </div>

          {/* Next milestone */}
          <div className="next-milestone">

            <span>NEXT MILESTONE</span>

            <strong>
              System Architecture & Database Design
            </strong>

          </div>

          {/* Week */}
          <div className="week-progress">

            <span>WEEK 01</span>

            <p>
              Project planning, problem definition,
              synopsis and specification completed.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ProjectProgress;