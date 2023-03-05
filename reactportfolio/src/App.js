import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import About from "./pages/AboutPage";
import Projects from "./pages/ProjectsPage";
import Contact from "./pages/ContactPage";
import TopNavBar from "./components/TopNavBar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <TopNavBar />
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/aboutpage" element={<About />} />
          <Route path="/projectspage" element={<Projects />} />
          <Route path="/contactpage" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App