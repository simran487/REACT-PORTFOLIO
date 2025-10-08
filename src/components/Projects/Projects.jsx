// src/components/Projects/Projects.jsx
import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

// Import project images
import twitterImg from "../../assets/img/img2.png";
import vehicleImg from "../../assets/img/img1.png";
import docuImg from "../../assets/img/img3.png";
import assistantImg from "../../assets/img/img5.png";
import tradingImg from "../../assets/img/img6.png";
import tictactoeImg from "../../assets/img/img4.png";

const projects = [
  {
    name: "Twitter-Sentiment-Analysis-using-Fine-Tuned-LSTM-Model",
    description:
      "A fine-tuned LSTM deep learning model that classifies tweets as positive or negative, with text preprocessing, training, and performance visualization.",
    repoLink:
      "https://github.com/simran487/Twitter-Sentiment-Analysis-using-Fine-Tuned-LSTM-Model",
    image: twitterImg,
  },
  {
    name: "Vehicle Detection and Counting System",
    description:
      "Developed a Vehicle Detection and Counting System using computer vision techniques, enabling automated detection, tracking, and counting of vehicles from recorded video feeds for traffic analysis.",
    repoLink: "https://github.com/simran487/VehicleDetection-CountingSystem",
    image: vehicleImg,
  },
  {
    name: "DocuChat – PDF Summarizer & Q&A Chatbot",
    description:
      "A Streamlit web app that summarizes PDFs and answers your questions using AI, with voice interaction for a seamless experience.",
    repoLink: "https://github.com/simran487/DocuChat",
    image: docuImg,
  },
  {
    name: "Peghie: The Desktop Assistant",
    description:
      "A Python-based desktop assistant that uses voice commands to perform tasks like searching Wikipedia, playing music, sending emails, and more.",
    repoLink: "https://github.com/simran487/Desktop-Assistant-",
    image: assistantImg,
  },
  {
    name: "Trading Bot",
    description:
      "A web-based Binance Futures Testnet trading bot built with Python and Flask. Place market, limit, and stop-market orders with a clean, minimal web interface.",
    repoLink: "https://github.com/simran487/Tradingbot",
    image: tradingImg,
  },
  {
    name: "Tic Tac Toe Game",
    description:
      "Play a fun Tic Tac Toe game against your friend or the computer — directly on this page!",
    demoLink: "https://tic-tac-toe-game-smoky-phi.vercel.app/",
    image: tictactoeImg,
  },
];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeDemo, setActiveDemo] = useState("");

  const openModal = (demoLink) => {
    setActiveDemo(demoLink);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveDemo("");
  };

  return (
    <section id="projects" className="bg-gray-50 px-4 py-20 relative">
      <div className="max-w-6xl mx-auto text-center">
        <SectionTitle title="Projects" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} openModal={openModal} />
          ))}
        </div>
      </div>

      {showModal && <ProjectModal activeDemo={activeDemo} closeModal={closeModal} />}
    </section>
  );
};

export default Projects;
