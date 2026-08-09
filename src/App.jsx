import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./components/About/About";
import Home from "./pages/Home";
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

      </Routes>
    </BrowserRouter>
  );
}

export default App;