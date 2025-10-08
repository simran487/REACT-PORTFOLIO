import React from "react";
import HeroText from "./HeroText";
import HeroButtons from "./HeroButtons";
import AnimatedBackground from "./AnimatedBackground";

// ✅ Make sure the path matches the actual file name and folder
import Resume from "../../assets/pdf_files/Resume.pdf"; 

const Hero = () => {
  const nameText = "Hi, I'm Simran";
  const messages = [
    "I'm a passionate AI & ML student",
    "Aspiring Full-Stack Developer",
    "Tech Enthusiast",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      <AnimatedBackground />
      <div className="relative z-10 text-center">
        <HeroText nameText={nameText} messages={messages} />
        <HeroButtons resumeLink={Resume} />
      </div>
    </section>
  );
};

export default Hero;
