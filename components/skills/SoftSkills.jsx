// eslint-disable-next-line no-unused-vars
import React from "react";

const SoftSkills = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">SoftSkills</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-group"></i>

            <div>
              <h3 className="skills__name">Teamwork</h3>
              <span className="skills__level">Strong</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-headphone"></i>

            <div>
              <h3 className="skills__name">Active Listening</h3>
              <span className="skills__level">Strong</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-brain"></i>

            <div>
              <h3 className="skills__name">Problem Solving</h3>
              <span className="skills__level">Strong</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-message-detail"></i>

            <div>
              <h3 className="skills__name">Communication</h3>
              <span className="skills__level">Strong</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
