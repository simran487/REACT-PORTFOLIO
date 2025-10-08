import React, { useState, useEffect } from "react";

const HeroText = ({ nameText, messages }) => {
  const [displayedName, setDisplayedName] = useState("");
  const [heroText, setHeroText] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [nameDone, setNameDone] = useState(false);

  // Typewriter effect for name
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

  // Typewriter loop for messages
  useEffect(() => {
    if (!nameDone) return;

    const typeMessage = () => {
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

    const timeout = setTimeout(typeMessage, 100);
    return () => clearTimeout(timeout);
  }, [charIndex, msgIndex, nameDone, messages]);

  return (
    <div className="relative z-10 text-center max-w-2xl text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{displayedName}</h1>
      <p className="text-lg md:text-xl mb-6">{heroText}</p>
    </div>
  );
};

export default HeroText;
