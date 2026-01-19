import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import TechStack from "./pages/TechStack"; 
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <About />
      <TechStack /> 
      <Projects />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
