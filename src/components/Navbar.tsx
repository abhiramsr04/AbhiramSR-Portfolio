"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink, Events } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Skills", href: "skills" },
  { name: "Education", href: "education" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  // Sync active link with scroll position
  useEffect(() => {
    Events.scrollEvent.register("end", (to) => {
      setActive(to.charAt(0).toUpperCase() + to.slice(1));
    });
    return () => {
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50
                 bg-gray-900/60 backdrop-blur-lg px-8 py-3 rounded-full shadow-xl border border-gray-700"
    >
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide">
        {navLinks.map((link) => (
          <li key={link.name} className="relative group">
            <ScrollLink
              to={link.href}
              smooth={true}
              duration={500}
              offset={-80}
              className={`cursor-pointer transition-colors ${
                active === link.name
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
            >
              {link.name}
            </ScrollLink>
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
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 hover:text-cyan-300 transition-colors"
        >
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-14 right-0 w-56 bg-gray-900/90 backdrop-blur-lg
                       rounded-xl shadow-lg border border-gray-700 p-6 md:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="flex flex-col space-y-5 text-base font-medium"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  variants={{
                    hidden: { opacity: 0, x: 40 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
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
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
