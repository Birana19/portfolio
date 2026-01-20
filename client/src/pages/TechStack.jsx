import { techStacks } from "../data/techData";
import TechCard from "../components/TechCard";
import "./TechStack.css";

function TechStack() {
  return (
    <section id="tech" className="px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Tech Stacks</h2>

      {techStacks.map((stack, idx) => (
        <div key={idx} className="tech-category">
          <h3>{stack.category}</h3>

          <div className="tech-cards">
            {stack.items.map((tech, i) => (
              <TechCard key={i} tech={tech} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default TechStack;
