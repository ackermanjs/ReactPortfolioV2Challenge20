import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import About from "./pages/AboutPage";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import TopNavBar from "./components/TopNavBar";
import BodyMid from "./pages/BodyMid";
import InitialLoad from "./pages/InitialLoad";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <TopNavBar />
        {/* < HomePage /> */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<InitialLoad />} />
        </Routes>
        <BodyMid />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
