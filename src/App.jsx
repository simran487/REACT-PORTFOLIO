import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'; // Keep this
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import CodingPlatforms from './components/CodingPlatforms/CodingPlatforms';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

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
