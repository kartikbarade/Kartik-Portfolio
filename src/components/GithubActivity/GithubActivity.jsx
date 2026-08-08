import { GitHubCalendar } from "react-github-calendar";
import { FaGithub } from "react-icons/fa";
import "./GithubActivity.css";

function GithubActivity() {
  return (
    <section className="github-section" id="github">

      {/* Heading */}
      <div className="github-heading">
        <h2>GitHub Contributions</h2>

        <p className="github-subtitle">
          My coding activity and open-source contributions
        </p>
      </div>

      {/* Calendar + Developer Image */}
      <div className="github-content">

        {/* Calendar */}
        <div className="github-calendar">
          <GitHubCalendar username="kartikbarade" />
        </div>

        {/* Developer Image Card */}
        <div className="github-image-card">
          <img
            src="/projects/github-developer.png"
            alt="Developer coding"
          />
        </div>

      </div>

      {/* GitHub Button */}
      <div className="github-btn-container">

        <a
          href="https://github.com/kartikbarade"
          target="_blank"
          rel="noopener noreferrer"
          className="github-profile-btn"
        >
          <FaGithub />
          View GitHub Profile
        </a>

      </div>

    </section>
  );
}

export default GithubActivity;