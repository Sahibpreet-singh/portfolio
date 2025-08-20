import { useState, useEffect } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import Bottom from "./Bottomm"; // Make sure casing matches file

export default function Intro({ scrollToNext, index, scrollToback }) {
  const total = 5;
  const slider = ((index + 1) / total) * 100;

  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimateIn(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`flex flex-col justify-between h-screen w-full pt-20 px-6 max-w-7xl mx-auto transition-all duration-700 ${
        animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Top Section with more spacing from top */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-20">
        <div className="flex items-start space-x-4 animate-typewriter">
          <div className="w-1 h-16 bg-white rounded"></div>

          <div>
            <h1 className="text-5xl font-bold text-white">Sahibpreet Singh</h1>
            <p className="text-gray-400">Software engineer</p>

            <div className="mt-10">
              <button className="text-white text-l px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
                View details
              </button>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="text-white flex flex-col items-center mt-10 md:mt-0 space-y-2">
          <div className="flex items-center space-x-2">
            <p className="text-5xl font-extrabold font-mono">{`0${index + 1}`}</p>
            <span className="text-2xl font-light font-mono">/ 04</span>

            <button
              onClick={() => scrollToback(index)}
              className="text-2xl ml-4 hover:text-gray-400 transition-all duration-300"
            >
              <VscChevronLeft />
            </button>

            <button
              onClick={() => scrollToNext(index)}
              className="text-2xl hover:text-gray-400 transition-all duration-300"
            >
              <VscChevronRight />
            </button>
          </div>

          <div className="w-full h-1 bg-gray-500 rounded overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-700"
              style={{ width: `${slider}%` }}
            ></div>
          </div>

          <button className="text-lg font-semibold text-gray-300 tracking-wider uppercase">
            View Profile
          </button>
        </div>
      </div>

      {/* Bottom component a little up */}
      <div className="mb-20">
        <Bottom />
      </div>
    </div>
  );
}
