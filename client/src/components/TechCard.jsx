import React from "react";

const TechCard = ({ tech }) => {
  return (
    <div className="bg-gray-800 px-4 py-2 rounded-lg shadow hover:scale-105 transition-transform duration-300">
      <h4 className="font-medium text-gray-100">{tech}</h4>
    </div>
  );
};

export default TechCard;
