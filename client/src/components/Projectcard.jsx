import React from "react";
import { motion } from "framer-motion";

export default function ProfileCard({ title, links, imageUrl }) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black bg-opacity-50 text-sm rounded-xl shadow-xl p-6 w-80 backdrop-blur-md text-white"
    >
      <div className="mb-4">
        <h2 className="text-lg font-semibold tracking-wide mb-2">{title}</h2>

        <div className="flex space-x-4 text-gray-300">
          {links.map((link, index) => (
            <a key={index} href={link.url} className="hover:underline">
              {link.label}
            </a>
          ))}
        </div>

        <div className="bg-white mt-4 rounded-lg overflow-hidden h-48 flex items-center justify-center">
          <img
            src={imageUrl}
            alt="Profile"
            className="object-cover h-full w-full"
          />
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button className="text-white text-sm px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
          View Details
        </button>
        <button className="text-white text-sm px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
          Description
        </button>
      </div>
    </motion.div>
  );
}
