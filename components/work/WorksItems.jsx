import React, { useEffect, useRef, useState } from "react";

const WorksItems = ({ item, onCardClick, isExpanded }) => {
  const handleClick = () => {
    onCardClick(item.id);
  };

  return (
    <div
      className={`work__card`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>

      <div className="work__button-container">
        <a
          href={item.demoUrl !== "#" ? item.demoUrl : "#"}
          className="work__button"
          onClick={(e) => {
            e.stopPropagation();
            if (item.status !== "development" && item.demoUrl !== "#") {
              window.open(item.demoUrl, "_blank");
            }
          }}
        >
          <i className="bx bx-globe work__button-icon" /> Website
        </a>
        <a
          href={item.sourceUrl !== "#" ? item.sourceUrl : "#"}
          className="work__button"
          onClick={(e) => {
            e.stopPropagation();
            if (item.sourceUrl !== "#") {
              window.open(item.sourceUrl, "_blank");
            }
          }}
        >
          <i className="bx bxl-github work__button-icon" /> Source
        </a>
      </div>
    </div>
  );
};

export default WorksItems;
