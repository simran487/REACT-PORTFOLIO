// src/components/Projects/ProjectModal.jsx
import React from "react";

const ProjectModal = ({ activeDemo, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-2xl w-11/12 md:w-3/4 h-[80vh] overflow-hidden">
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl font-bold"
        >
          ×
        </button>
        <iframe
          src={activeDemo}
          title="Project Demo"
          className="w-full h-full rounded-lg"
          allow="autoplay; fullscreen"
        ></iframe>
      </div>
    </div>
  );
};

export default ProjectModal;
