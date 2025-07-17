import React, { useEffect, useState } from "react";
import { projectsData } from "./Data";
import WorksItems from "./WorksItems";

const filters = [
  { name: "all", label: "All" },
  { name: "web", label: "Web" },
];

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [expandedId, setExpandedId] = useState(null); // new

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category === item.name
      );
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
    setExpandedId(null); // reset expanded on filter change
  };

  const handleCardClick = (id) => {
    setExpandedId((prev) => (prev === id ? null : id)); // toggle
  };

  return (
    <div>
      <div className="work__filters">
        {filters.map((filter, index) => (
          <span
            onClick={(e) => handleClick(e, index)}
            className={`work__item ${active === index ? "active-work" : ""}`}
            key={index}
          >
            {filter.label}
          </span>
        ))}
      </div>

      <div className="work__container container">
        {projects.map((item) => (
          <div className="work__row" key={item.id}>
            <WorksItems
              item={item}
              onCardClick={handleCardClick}
              isExpanded={item.id === expandedId}
            />
            {item.id === expandedId && (
              <div className="work__desc-panel mt-2 px-2 text-left text-sm text-gray-700 transition-all duration-300 ease-in-out">
                <h4 className="font-semibold text-base mb-1">Description</h4>
                {item.description.split("\n").map((line, index) => {
                  if (
                    line.trim().startsWith("Frontend:") ||
                    line.trim().startsWith("Backend:")
                  ) {
                    const [label, rest] = line.split(":");
                    return (
                      <p key={index} className="mb-1">
                        <strong>{label}:</strong> {rest}
                      </p>
                    );
                  }
                  return (
                    <p key={index} className="mb-1">
                      {line}
                    </p>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
