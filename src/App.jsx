import Navbar from './components/Navbar';
import Hero from './components/Hero'; // Keep this
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import CodingPlatforms from './components/CodingPlatforms';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />       
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <CodingPlatforms />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
