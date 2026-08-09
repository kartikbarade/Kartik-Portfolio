import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./components/About/About";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Portfolio */}
        <Route path="/" element={<Home />} />

        {/* Projects Page */}
        <Route path="/projects" element={<ProjectsPage />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Project Details */}
        <Route
          path="/projects/:id"
          element={<ProjectDetails />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;