import { aboutData } from "../data/aboutData";
import { softSkills } from "../data/softSkillsData";
import useScrollAnimation from "../hooks/useScrollAnimation";
import "./About.css";
import * as FaIcons from "react-icons/fa";

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
      <br />

      <div className="skills">
        {softSkills.map((skill, i) => {
          const Icon = FaIcons[skill.icon];

          return (
            <span key={i} className="skill-badge">
              {Icon && <Icon className="skill-icon" />}
              {skill.name}
            </span>
          );
        })}
      </div>
    </section>
  );
}

export default About;
