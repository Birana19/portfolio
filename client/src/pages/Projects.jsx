import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projectsData";
import useScrollAnimation from "../hooks/useScrollAnimation";
import "./Projects.css"; 

function Projects() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="projects"
      ref={ref}
      className={`projects-section ${isVisible ? "show" : "hide"}`}
    >
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
