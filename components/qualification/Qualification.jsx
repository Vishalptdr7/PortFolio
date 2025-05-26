// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import './qualification.css';

const Qualification = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const dataVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: "100%" },
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification 🧑🏻‍🎓</h2>
      <span className="section__subtitle">My Personal Journey 🚗</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <motion.div
            className="qualification__content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Left Side - MCA */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div>
                <h3 className="qualification__title">
                  Master of Computer Application (MCA) 🎓
                </h3>
                <span className="qualification__subtitle">MANIT, Bhopal</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2026
                </div>
                <div className="qualification__cgpa">
                  <i className="uil uil-star"></i> CGPA: 7.9
                </div>
              </div>
              ...
            </motion.div>

            {/* Right Side - 12th */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div></div>
              <div> ... </div>
              <div>
                <h3 className="qualification__title">
                  Higher Secondary Education (12th) 📘
                </h3>
                <span className="qualification__subtitle">MP Board</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2020
                </div>
                <div className="qualification__cgpa">
                  <i className="uil uil-star"></i> Percentage: 79%
                </div>
              </div>
            </motion.div>

            {/* Left Side - B.Sc */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div>
                <h3 className="qualification__title">
                  Bachelor of Science (Computer Science) 🧪
                </h3>
                <span className="qualification__subtitle">DAVV, Indore</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2023
                </div>
                <div className="qualification__cgpa">
                  <i className="uil uil-star"></i> Percentage: 78%
                </div>
              </div>
              ...
            </motion.div>

            {/* Right Side - 10th */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div></div>
              <div> ... </div>
              <div>
                <h3 className="qualification__title">
                  Secondary Education (10th) 📗
                </h3>
                <span className="qualification__subtitle">MP Board</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2018
                </div>
                <div className="qualification__cgpa">
                  <i className="uil uil-star"></i> Percentage: 92%
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;