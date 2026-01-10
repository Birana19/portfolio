import { aboutData } from "../data/aboutData";
import { softSkills } from "../data/softSkillsData";
import useScrollAnimation from "../hooks/useScrollAnimation";

function About() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`px-6 py-20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>

      <p className="max-w-3xl mx-auto text-center text-gray-400">
        {aboutData.paragraph}
      </p>

      <h3 className="text-2xl font-semibold text-center mt-14 mb-6">
        Soft Skills
      </h3>

      <div className="flex flex-wrap justify-center gap-4">
        {softSkills.map((skill, index) => (
          <span
            key={index}
            className="px-5 py-2 bg-gray-800 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default About;
