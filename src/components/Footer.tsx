"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" }, // ✅ Added Education
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="relative bg-black/95 text-gray-400 border-t border-gray-800">
      {/* Top Gradient Glow */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-gray-500"
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-300 font-semibold">Rogue</span>. All Rights
          Reserved.
        </motion.p>

        {/* Quick Nav */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex gap-6 text-sm"
        >
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="relative group transition"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Bottom Tagline */}
      <div className="text-center text-xs text-gray-600 py-4 border-t border-gray-800">
        Built with ❤️ using <span className="text-cyan-400">Next.js</span> &{" "}
        <span className="text-purple-400">Tailwind CSS</span>
      </div>
    </footer>
  );
}
