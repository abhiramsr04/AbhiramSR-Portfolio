"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#06b6d4_10%,_transparent_50%),radial-gradient(circle_at_bottom_right,_#9333ea_10%,_transparent_50%)] opacity-30 animate-pulse"></div>

      {/* Floating Shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg"
      >
        Hi, I&apos;m <span className="text-cyan-400">Abhiram S R</span>
      </motion.h1>

      {/* Typing Effect Subtitle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl"
      >
        <TypeAnimation
          sequence={[
            "Data Science Enthusiast 🔬",
            2000,
            "Machine Learning Explorer 🚀",
            2000,
            "MLOps Practitioner ⚡",
            2000,
            "AI Solutions Builder 🤖",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-cyan-300"
        />
      </motion.div>

      {/* Supporting Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-3 text-gray-400 text-base sm:text-lg max-w-xl"
      >
        I design intelligent systems blending{" "}
        <span className="text-cyan-400">engineering precision </span> 
        with <span className="text-purple-400"> AI innovation</span>.
      </motion.p>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="mt-8 flex flex-wrap gap-4 justify-center"
      >
        <Link
          href="#projects"
          scroll={true}
          className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/40 transition-transform"
        >
          View Projects 🚀
        </Link>
        <Link
          href="#contact"
          scroll={true}
          className="px-7 py-3 rounded-xl border border-gray-600 text-gray-300 font-semibold hover:border-cyan-400 hover:text-cyan-400 transition"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
}
