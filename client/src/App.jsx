import { useRef, useState } from 'react';
import Intro from './components/Intro.jsx';
import Nav1 from './components/Nav1.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Project from './components/Projectcard.jsx';
import { VscChevronRight, VscChevronLeft } from 'react-icons/vsc';
import { AnimatePresence, motion } from 'framer-motion';
import Bottom from './components/Bottomm.jsx'; 

const projects = [
  {
    title: "Football Fixer",
    imageUrl: "https://picsum.photos/id/1/5000/3333",
    links: [
      { label: "GitHub", url: "https://github.com/Sahibpreet-singh/football-app" },
      { label: "Live", url: "https://www.linkedin.com/feed/update/urn:li:activity:7347584450802716672" },
    ],
  },
  {
    title: "Firewall helper",
    imageUrl: "https://picsum.photos/id/2/5000/3333",
    links: [
      { label: "GitHub", url: "https://github.com/Sahibpreet-singh/gna-hackathon" },
      { label: "Demo", url: "https://weatherapp.com" },
    ],
  },
  {
    title: "Portfolio",
    imageUrl: "https://picsum.photos/id/4/5000/3333",
    links: [
      { label: "GitHub", url: "https://github.com/taskmanager" },
      { label: "Live", url: "https://taskmanager.com" },
    ],
  },
];

export default function App() {
  const sectionRefs = useRef([]);
  const [projectIndex, setProjectIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const scrollToNext = (index) => {
    if (sectionRefs.current[index + 1]) {
      sectionRefs.current[index + 1].scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToback = (index) => {
    if (sectionRefs.current[index - 1]) {
      sectionRefs.current[index - 1].scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextProjects = () => {
    setDirection(1);
    setProjectIndex((prevIndex) => (prevIndex + 2) % projects.length);
  };

  const prevProjects = () => {
    setDirection(-1);
    setProjectIndex((prevIndex) =>
      (prevIndex - 2 + projects.length) % projects.length
    );
  };

  const sections = [
    <Intro scrollToNext={scrollToNext} index={0} scrollToback={scrollToback} 
    /> 
    ,

    <About scrollToNext={scrollToNext} index={1} scrollToback={scrollToback} />,

    // Project Section with animation + infinite slider
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center w-full px-6"
    >
      <h2 className="text-3xl font-bold mb-6 tracking-wider uppercase">Projects</h2>

      <div className="flex items-center justify-between w-full max-w-6xl mt-[80px]">
        {/* Left Button */}
        <button
          onClick={prevProjects}
          className="text-white text-3xl hover:text-gray-400 transition"
        >
          <VscChevronLeft />
        </button>

        {/* Animated Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 w-full max-w-4xl overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            {projects.slice(projectIndex, projectIndex + 2).map((project, i) => (
              <motion.div
                key={project.title + projectIndex} // unique key for animation
                initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Project {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right Button */}
        <button
          onClick={nextProjects}
          className="text-white text-3xl hover:text-gray-400 transition"
        >
          <VscChevronRight />
        </button>
      </div>

      {/* Progress Info */}
      <div className="mt-4 text-gray-300 font-mono text-sm">
        Page {Math.floor(projectIndex / 2) + 1} / {Math.ceil(projects.length / 2)}
      </div>
    </motion.div>,

    <Contact scrollToNext={scrollToNext} index={3} scrollToback={scrollToback} />,
  ];

  return (
    <div>
      <Nav1 scrollToSection={(index) => {
        if (sectionRefs.current[index]) {
          sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' });
        }
      }} />

      {sections.map((section, index) => (
        <section
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="h-screen flex justify-center items-center text-white"
        >
          {section}
        </section>
      ))}
    </div>
  );
}
