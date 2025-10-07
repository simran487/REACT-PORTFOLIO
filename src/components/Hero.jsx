import React, { useState, useEffect } from "react";
import Resume from "../assets/pdf_files/Resume.pdf"; // Your PDF file

const Hero = () => {
  const nameText = "Hi, I'm Simran";
  const messages = [
    "I'm a passionate AI & ML student",
    "Aspiring Full-Stack Developer",
    "Tech Enthusiast",
  ];

  const [displayedName, setDisplayedName] = useState("");
  const [heroText, setHeroText] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [nameDone, setNameDone] = useState(false);

  // Typewriter effect for name (fixed)
  useEffect(() => {
    if (displayedName.length < nameText.length) {
      const timeout = setTimeout(() => {
        setDisplayedName((prev) => prev + nameText.charAt(prev.length));
      }, 150);
      return () => clearTimeout(timeout);
    } else if (!nameDone) {
      setNameDone(true);
    }
  }, [displayedName, nameText, nameDone]);

  // Typewriter loop for subtitle
  useEffect(() => {
    if (!nameDone) return; // Wait until name finishes

    const typeSubtitle = () => {
      const currentMessage = messages[msgIndex];
      if (charIndex < currentMessage.length) {
        setHeroText((prev) => prev + currentMessage.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setHeroText("");
          setCharIndex(0);
          setMsgIndex((prev) => (prev + 1) % messages.length);
        }, 2000);
      }
    };

    const timeout = setTimeout(typeSubtitle, 100);
    return () => clearTimeout(timeout);
  }, [charIndex, msgIndex, nameDone, messages]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 animate-gradient"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center max-w-2xl text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{displayedName}</h1>
        <p className="text-lg md:text-xl mb-6">{heroText}</p>

        <div className="flex justify-center gap-4">
          <a
            href={Resume} // Resume PDF
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
