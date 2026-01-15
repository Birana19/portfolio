import "./TechCard.css";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const icons = {
  ...FaIcons,
  ...SiIcons
};

const TechCard = ({ tech }) => {
  const Icon = icons[tech.icon];

  return (
    <div className="tech-card">
      {Icon && <Icon className="tech-icon" />}
      <span>{tech.name}</span>
    </div>
  );
};

export default TechCard;
