import "./TechCard.css";

const TechCard = ({ tech }) => {
  return (
    <div className="tech-card">
      <span>{tech}</span>
    </div>
  );
};

export default TechCard;
