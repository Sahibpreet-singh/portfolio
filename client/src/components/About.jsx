import { motion } from "framer-motion";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

export default function Intro({ scrollToNext, index, scrollToback }) {
  const total = 5;
  const slider = ((index + 1) / total) * 100;

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl px-6 mt-[-px] ml-[-200px]">
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
        <p className="text-lg leading-relaxed tracking-wide text-gray-300">
          Hello! I’m <span className="text-white font-bold text-xl">Sahibpreet Singh</span>, a passionate and constantly evolving <span className="text-blue-400 font-semibold">Software Engineer</span> from Punjab, India.
          <br /><br />
          I specialize in <span className="text-yellow-400 font-medium">MERN stack development</span>, with strong skills in JavaScript, Node.js, Express, MongoDB, and React. 
          <br /><br />
          Beyond full-stack development, I’ve worked on projects involving:
          <ul className="list-disc list-inside pl-4 mt-2 text-gray-400">
            <li>RESTful APIs and secure authentication flows</li>
            <li>Real-time chat systems and WebSocket integrations</li>
            <li>Project architecture, clean code, and version control with Git</li>
          </ul>
          <br />
          I continuously explore:
          <span className="text-teal-300"> Data Structures & Algorithms</span>,
          <span className="text-teal-300"> DevOps basics</span>,
          and <span className="text-teal-300">Neural Networks</span>.
        </p>
      </motion.div>

      {/* Right Slider Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-white flex flex-col items-center mt-[-80px] mr-[-100px] space-y-4"
      >
        {/* Numbering & Arrows */}
        <div className="flex items-center space-x-2">
          <p className="text-5xl font-extrabold font-mono">{`0${index + 1}`}</p>
          <span className="text-2xl font-light font-mono">/ 05</span>

          <button
            onClick={() => scrollToback(index)}
            className="text-2xl ml-4 hover:text-gray-400 transition"
          >
            <VscChevronLeft />
          </button>

          <button
            onClick={() => scrollToNext(index)}
            className="text-2xl hover:text-gray-400 transition"
          >
            <VscChevronRight />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-32 h-1 bg-gray-500 rounded overflow-hidden">
          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${slider}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>

        {/* Section Label */}
        <p className="text-lg font-semibold text-gray-300 tracking-wider uppercase">
          About me
        </p>
      </motion.div>
    </div>
  );
}
