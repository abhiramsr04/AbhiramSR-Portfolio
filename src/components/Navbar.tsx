"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Skills", href: "skills" },
  { name: "Education", href: "education" }, // ✅ Added Education
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50
                 bg-gray-900/70 backdrop-blur-xl px-8 py-3 rounded-full shadow-lg border border-gray-700"
    >
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-sm font-medium relative">
        {navLinks.map((link) => (
          <li key={link.name} className="relative">
            <ScrollLink
              to={link.href}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setActive(link.name)}
              className={`cursor-pointer transition-colors ${
                active === link.name
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
            >
              {link.name}
            </ScrollLink>
            {/* Active underline animation */}
            {active === link.name && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 -bottom-1 w-full h-[2px] bg-cyan-400 rounded"
              />
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          exit={{ x: 200 }}
          transition={{ duration: 0.4 }}
          className="absolute top-14 right-0 w-48 bg-gray-900/90 backdrop-blur-xl rounded-lg shadow-lg border border-gray-700 p-6 md:hidden"
        >
          <ul className="flex flex-col space-y-4 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <ScrollLink
                  to={link.href}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => {
                    setActive(link.name);
                    setIsOpen(false);
                  }}
                  className={`cursor-pointer block transition-colors ${
                    active === link.name
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-300"
                  }`}
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
