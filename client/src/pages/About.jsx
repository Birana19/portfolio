import { aboutData } from "../data/aboutData";
import { softSkills } from "../data/softSkillsData";
import useScrollAnimation from "../hooks/useScrollAnimation";
import "./About.css";

function About() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="about"
      className={`section about ${isVisible ? "show" : ""}`}
    >
      <h2 className="heading-lg text-center">About Me</h2>

      <p className="about-text">{aboutData.paragraph}</p>

      <h3 className="heading-md text-center">Soft Skills</h3>
      <br></br>
      <br></br>

      <div className="skills">
        {softSkills.map((skill, i) => (
          <span key={i} className="skill-badge">
            {skill} <t></t> <t></t>
          </span>
        ))}
      </div>
    </section>
  );
}

export default About;
