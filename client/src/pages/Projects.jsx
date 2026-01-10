import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projectsData";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Projects() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="projects"
      ref={ref}
      className={`px-6 py-20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
