import { techStacks } from "../data/techData";
import TechCard from "../components/TechCard";
import "./TechStack.css";

function TechStack() {
  return (
    <section id="tech" className="px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Tech Stacks</h2>
      {techStacks.map((stack, idx) => (
        <div key={idx} className="mb-8">
          <h3 className="text-xl font-semibold mb-4">{stack.category}</h3>
          <div className="flex flex-wrap gap-3">
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
