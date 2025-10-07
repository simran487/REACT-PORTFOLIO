import React, { useState } from 'react';

// Import project images
import twitterImg from '../assets/img/img2.png';
import vehicleImg from '../assets/img/img1.png';
import docuImg from '../assets/img/img3.png';
import assistantImg from '../assets/img/img5.png';
import tradingImg from '../assets/img/img6.png';
import tictactoeImg from '../assets/img/img4.png';

// Project data
const projects = [
  {
    name: 'Twitter-Sentiment-Analysis-using-Fine-Tuned-LSTM-Model',
    description:
      'A fine-tuned LSTM deep learning model that classifies tweets as positive or negative, with text preprocessing, training, and performance visualization.',
    repoLink:
      'https://github.com/simran487/Twitter-Sentiment-Analysis-using-Fine-Tuned-LSTM-Model',
    image: twitterImg,
  },
  {
    name: 'Vehicle Detection and Counting System',
    description:
      'Developed a Vehicle Detection and Counting System using computer vision techniques, enabling automated detection, tracking, and counting of vehicles from recorded video feeds for traffic analysis.',
    repoLink: 'https://github.com/simran487/VehicleDetection-CountingSystem',
    image: vehicleImg,
  },
  {
    name: 'DocuChat – PDF Summarizer & Q&A Chatbot',
    description:
      'A Streamlit web app that summarizes PDFs and answers your questions using AI, with voice interaction for a seamless experience.',
    repoLink: 'https://github.com/simran487/DocuChat',
    image: docuImg,
  },
  {
    name: 'Peghie: The Desktop Assistant',
    description:
      'A Python-based desktop assistant that uses voice commands to perform tasks like searching Wikipedia, playing music, sending emails, and more.',
    repoLink: 'https://github.com/simran487/Desktop-Assistant-',
    image: assistantImg,
  },
  {
    name: 'Trading Bot',
    description:
      'A web-based Binance Futures Testnet trading bot built with Python and Flask. Place market, limit, and stop-market orders with a clean, minimal web interface.',
    repoLink: 'https://github.com/simran487/Tradingbot',
    image: tradingImg,
  },
  {
    name: 'Tic Tac Toe Game',
    description:
      'Play a fun Tic Tac Toe game against your friend or the computer — directly on this page!',
    demoLink: 'https://tic-tac-toe-game-smoky-phi.vercel.app/',
    image: tictactoeImg,
  },
];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeDemo, setActiveDemo] = useState('');

  const openModal = (demoLink) => {
    setActiveDemo(demoLink);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveDemo('');
  };

  return (
    <section id="projects" className="min-h-screen bg-gray-50 px-4 py-20 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />

              {/* Project Info */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>

                <div className="flex justify-center gap-4 mt-auto">
                  {project.demoLink && (
                    <button
                      onClick={() => openModal(project.demoLink)}
                      className="text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm"
                    >
                      Play Game
                    </button>
                  )}

                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition text-sm"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Playable Game */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
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
      )}
    </section>
  );
};

export default Projects;
