// components/Experience/ExperienceModal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineXMark,
  HiOutlineCalendarDays,
  HiOutlineCheckCircle,
} from "react-icons/hi2";
import "./ExperienceModal.css";

const ExperienceModal = ({ isOpen, onClose, experience }) => {
  return (
    <AnimatePresence>
      {isOpen && experience && (
        <div className="exp-modal-overlay">
          {/* Backdrop */}
          <motion.div
            className="exp-backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="exp-modal-container"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button
              className="exp-close-icon-btn"
              onClick={onClose}
              aria-label="Close experience modal"
            >
              <HiOutlineXMark />
            </button>

            <div className="exp-modal-inner-scroll">
              {/* Header */}
              <div className="exp-modal-header">
                <span className="exp-category">{experience.status}</span>

                <h2>{experience.title}</h2>

                <div className="exp-meta-row">
                  <HiOutlineCalendarDays className="exp-meta-icon" />
                  <span>{experience.meta}</span>
                </div>

                <div className="exp-header-underline"></div>
              </div>

              {/* Body */}
              <div className="exp-modal-details-grid">
                <div className="exp-details-left">
                  <h3>Overview</h3>
                  <p className="exp-desc">{experience.description}</p>

                  {experience.achievements && (
                    <>
                      <h3 className="exp-section-spacing">
                        Key Contributions
                      </h3>
                      <ul className="exp-achievement-list">
                        {experience.achievements.map((item, index) => (
                          <li key={index}>
                            <HiOutlineCheckCircle className="exp-check-icon" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                <div className="exp-details-right">
                  <h3>Tech Stack</h3>
                  <div className="exp-tech-badge-container">
                    {experience.tags?.map((item, index) => (
                      <span key={index} className="exp-tech-pill">
                        {item}
                      </span>
                    ))}
                  </div>

                  {experience.verifiedBy && (
                    <div className="exp-verified-box">
                      <h3>Verified</h3>
                      <p className="exp-verified-text">
                        Employment verified via official experience letter,
                        issued by {experience.verifiedBy}.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ExperienceModal;