import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import TechStack from "./pages/TechStack"; // optional
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <TechStack /> {/* if you have this section */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
