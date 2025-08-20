import { FaBars } from "react-icons/fa6";

export default function Nav1({ scrollToSection }) {
  return (
    <nav className="flex border-style-none border-2 border-gray-500 justify-between items-center p-6 text-white sticky top-0 z-50 bg-[#000000]">
      <div className="text-xl font-bold">Portfolio</div>
      <div className="mr-10 space-x-8 hidden md:flex">
        <a onClick={() => scrollToSection(0)} className="cursor-pointer">HOME</a>
        <a onClick={() => scrollToSection(1)} className="cursor-pointer">ABOUT</a>
        <a onClick={() => scrollToSection(2)} className="cursor-pointer">PROJECTS</a>
        <a onClick={() => scrollToSection(3)} className="cursor-pointer">CONTACT</a>
      </div>
      <div className="text-xl mr-2"><FaBars /></div>
    </nav>
  );
}
